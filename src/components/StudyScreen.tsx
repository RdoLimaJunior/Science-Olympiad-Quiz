import React, { useState, useEffect, useRef } from 'react';
import { studyMaterials } from '../constants/studyMaterials';
import { ArrowLeftIcon, PaperAirplaneIcon } from './icons';
import { GoogleGenAI, Chat } from "@google/genai";
import type { ChatMessage, StudyMaterial } from '../types';
import { useLanguage } from '../contexts/LanguageContext';

interface StudyScreenProps {
  onGoBack: () => void;
}

const studySubjects = Object.keys(studyMaterials);

const AITutorPanel: React.FC<{ material: StudyMaterial }> = ({ material }) => {
  const { t } = useLanguage();
  const [chat, setChat] = useState<Chat | null>(null);
  const [history, setHistory] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const chatContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const initializeChat = () => {
        try {
          if (!process.env.API_KEY) throw new Error(t('study.ai_tutor_api_key_error'));
          
          const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
          
          const systemInstruction = `Você é o VandaBot, um tutor de ciências para a Olimpíada Vanda, especialista em ${material.title}. Sua missão é guiar os alunos usando o método socrático. SEJA CONCISO. Em vez de dar a resposta, faça perguntas inteligentes que os levem a pensar. Use analogias e exemplos práticos para simplificar ideias complexas. Seu foco é TOTALMENTE no tópico de ${material.title}. Nunca dê a resposta de bandeja. Responda em português do Brasil.`;
          
          const newChat = ai.chats.create({
            model: 'gemini-2.5-flash',
            config: { systemInstruction },
          });
          
          setChat(newChat);
          setHistory([{ role: 'model', parts: [{ text: t('study.ai_tutor_greeting', material.title) }] }]);
        } catch (err) {
          console.error("Erro ao inicializar o Tutor IA:", err);
          const message = err instanceof Error ? err.message : t('study.ai_tutor_init_error');
          setError(message);
        } finally {
            setIsLoading(false);
        }
    }
    initializeChat();
  }, [material.title, t]);

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [history, isLoading]);
  
  const sendMessage = async (message: string) => {
    if (!message.trim() || !chat || isLoading) return;

    const userMessage: ChatMessage = { role: 'user', parts: [{ text: message }] };
    setHistory(prev => [...prev, userMessage]);
    setIsLoading(true);

    try {
      const result = await chat.sendMessageStream({ message });
      let modelResponse = '';
      setHistory(prev => [...prev, { role: 'model', parts: [{ text: '' }] }]);
      for await (const chunk of result) {
        modelResponse += chunk.text;
        setHistory(prev => {
          const newHistory = [...prev];
          newHistory[newHistory.length - 1].parts[0].text = modelResponse;
          return newHistory;
        });
      }
    } catch (error) {
      console.error("Erro ao enviar mensagem:", error);
      const errorMessage: ChatMessage = { role: 'model', parts: [{ text: t('study.ai_tutor_send_error') }] };
      setHistory(prev => [...prev.slice(0, -1), errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    sendMessage(input);
    setInput('');
  };

  const handleSuggestedQuestionClick = (question: string) => {
    sendMessage(question);
  };

  return (
    <div className="bg-slate-800/60 rounded-xl border border-slate-700 p-4 flex flex-col h-[75vh] lg:h-full">
      <h3 className="text-xl font-bold text-cyan-400 mb-4 text-center">{t('study.ai_tutor_panel_title')}</h3>
      <div ref={chatContainerRef} className="flex-1 overflow-y-auto mb-2 pr-2 space-y-4">
        {history.map((msg, index) => (
          <div key={index} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className={`max-w-md p-3 rounded-2xl ${msg.role === 'user' ? 'bg-cyan-600 text-white rounded-br-none' : 'bg-slate-700 text-slate-200 rounded-bl-none'}`}>
              <p className="whitespace-pre-wrap text-sm">{msg.parts[0].text}</p>
            </div>
          </div>
        ))}
        {isLoading && (
          <div className="flex justify-start">
            <div className="max-w-lg p-3 rounded-2xl bg-slate-700 text-slate-200 rounded-bl-none">
               <div className="flex items-center space-x-2">
                  <div className="thinking-dot w-2 h-2 bg-slate-400 rounded-full"></div>
                  <div className="thinking-dot w-2 h-2 bg-slate-400 rounded-full"></div>
                  <div className="thinking-dot w-2 h-2 bg-slate-400 rounded-full"></div>
              </div>
            </div>
          </div>
        )}
      </div>
      <div className="flex flex-wrap gap-2 mb-2">
        {material.suggestedQuestions.map((q, i) => (
            <button key={i} onClick={() => handleSuggestedQuestionClick(q)} disabled={isLoading} className="text-xs bg-slate-700 hover:bg-slate-600 disabled:opacity-50 text-slate-300 py-1 px-3 rounded-full transition">
                "{q}"
            </button>
        ))}
      </div>
      <form onSubmit={handleFormSubmit} className="flex gap-2 flex-shrink-0">
        <input type="text" value={input} onChange={(e) => setInput(e.target.value)} placeholder={error || t('study.ai_tutor_placeholder')} disabled={!chat || isLoading || !!error} className="flex-1 bg-slate-700 border border-slate-600 rounded-lg p-2 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 disabled:opacity-50" />
        <button type="submit" disabled={!chat || isLoading || !input.trim() || !!error} className="bg-cyan-500 text-white p-2 rounded-lg transition enabled:hover:bg-cyan-600 disabled:opacity-50 disabled:cursor-not-allowed" aria-label={t('study.ai_tutor_send_aria')}><PaperAirplaneIcon className="w-6 h-6" /></button>
      </form>
    </div>
  );
};

const StudyScreen: React.FC<StudyScreenProps> = ({ onGoBack }) => {
  const { t } = useLanguage();
  const [selectedSubject, setSelectedSubject] = useState<string | null>(null);
  const currentMaterial = selectedSubject ? studyMaterials[selectedSubject] : null;

  return (
    <div className="max-w-7xl mx-auto p-4 md:p-8 animate-fade-in">
      <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl shadow-2xl p-6 md:p-8 relative">
        <button
          onClick={selectedSubject ? () => setSelectedSubject(null) : onGoBack}
          className="absolute top-6 left-6 text-sm text-slate-400 hover:text-cyan-400 transition flex items-center gap-1 z-10"
          aria-label={t('study.back_label')}
        >
          <ArrowLeftIcon className="w-4 h-4" />
          {selectedSubject ? t('study.back_modules') : t('study.back_menu')}
        </button>
        
        {!currentMaterial ? (
          <>
            <h1 className="text-3xl md:text-4xl font-bold text-cyan-400 mb-8 text-center pt-8">{t('study.title')}</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {studySubjects.map(subject => (
                <button
                  key={subject}
                  onClick={() => setSelectedSubject(subject)}
                  className="bg-slate-700 hover:bg-slate-600 text-white font-bold p-8 rounded-lg text-xl transition-all duration-300 ease-in-out transform hover:-translate-y-2"
                >
                  {subject}
                </button>
              ))}
            </div>
          </>
        ) : (
          <div className="animate-fade-in">
            <h2 className="text-3xl font-bold text-cyan-400 mb-6 text-center pt-8">{currentMaterial.title}</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="prose prose-invert prose-lg max-w-none h-[75vh] lg:h-auto lg:max-h-[calc(85vh-100px)] overflow-y-auto pr-4">
                  <img 
                    src={currentMaterial.imageUrl} 
                    alt={`Ilustração para ${currentMaterial.title}`}
                    className="w-full h-auto max-h-60 object-cover rounded-lg mb-6 shadow-lg"
                  />
                  <p>{currentMaterial.summary}</p>
                  <h3>{t('study.support_video')}</h3>
                  <div className="aspect-w-16 aspect-h-9">
                      <iframe src={currentMaterial.videoUrl} title={`Vídeo sobre ${currentMaterial.title}`} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen className="w-full h-full rounded-lg shadow-md"></iframe>
                  </div>
                  <h3>{t('study.quick_tips')}</h3>
                  <ul className="list-disc list-inside space-y-1">
                    {currentMaterial.tips.map((tip, index) => (
                        <li key={index} className="text-slate-300">{tip}</li>
                    ))}
                  </ul>
              </div>
              <AITutorPanel material={currentMaterial} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default StudyScreen;