import React, { useState, useRef, useEffect } from 'react';
import { GoogleGenAI, Chat } from "@google/genai";
import type { ChatMessage } from '../types';
import { ArrowLeftIcon, PaperAirplaneIcon } from './icons';

interface AITutorScreenProps {
  onGoBack: () => void;
}

const AITutorScreen: React.FC<AITutorScreenProps> = ({ onGoBack }) => {
  const [chat, setChat] = useState<Chat | null>(null);
  const [history, setHistory] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(true); // Start as true until chat is initialized
  const [error, setError] = useState<string | null>(null);
  const chatContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const initializeChat = () => {
        try {
          if (!process.env.API_KEY) {
            throw new Error("A chave de API não foi configurada.");
          }
          const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
          const newChat = ai.chats.create({
            model: 'gemini-2.5-flash',
            config: {
                systemInstruction: "Você é o VandaBot, um tutor amigável e experiente para a Olimpíada de Ciências Vanda. Sua especialidade é Ciências, Matemática e Lógica para estudantes do ensino fundamental e médio. Ajude-os a entender conceitos complexos de forma simples. Use analogias e exemplos do dia a dia. Mantenha as respostas concisas, educativas e focadas no aprendizado. Nunca saia do seu personagem de tutor. Responda sempre em português do Brasil.",
            },
          });
          setChat(newChat);
          setHistory([
            { role: 'model', parts: [{ text: "Olá! Eu sou o VandaBot, seu tutor de IA para a Olimpíada de Ciências. Em que posso te ajudar a estudar hoje?" }] }
          ]);
        } catch (err) {
          console.error("Erro ao inicializar o Tutor IA:", err);
          setError("Desculpe, não foi possível conectar ao Tutor IA. Verifique as configurações e tente novamente.");
          setHistory([
            { role: 'model', parts: [{ text: "Desculpe, não foi possível conectar ao Tutor IA. Verifique as configurações e tente novamente." }] }
          ]);
        } finally {
            setIsLoading(false);
        }
    }
    initializeChat();
  }, []);

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [history, isLoading]);

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || !chat || isLoading) return;

    const userMessage: ChatMessage = { role: 'user', parts: [{ text: input }] };
    setHistory(prev => [...prev, userMessage]);
    const currentInput = input;
    setInput('');
    setIsLoading(true);

    try {
      const result = await chat.sendMessageStream({ message: currentInput });
      
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
      const errorMessage: ChatMessage = { role: 'model', parts: [{ text: "Ocorreu um erro ao processar sua pergunta. Por favor, tente novamente." }] };
      setHistory(prev => [...prev.slice(0, -1), errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };
  
  return (
    <div className="max-w-4xl mx-auto p-4 md:p-8 animate-fade-in">
      <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl shadow-2xl p-6 md:p-8 relative flex flex-col h-[calc(100vh-4rem)]">
        <div className="flex items-center justify-between mb-4 flex-shrink-0">
            <button
              onClick={onGoBack}
              className="text-sm text-slate-400 hover:text-cyan-400 transition flex items-center gap-1"
              aria-label="Voltar ao Menu"
            >
              <ArrowLeftIcon className="w-4 h-4" />
              Menu
            </button>
            <h1 className="text-2xl font-bold text-cyan-400">Tutor com IA</h1>
            <div className="w-16"></div>
        </div>

        <div ref={chatContainerRef} className="flex-1 overflow-y-auto mb-4 pr-2 space-y-4">
          {history.map((msg, index) => (
            <div key={index} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div className={`max-w-lg p-3 rounded-2xl ${msg.role === 'user' ? 'bg-cyan-600 text-white rounded-br-none' : 'bg-slate-700 text-slate-200 rounded-bl-none'}`}>
                <p className="whitespace-pre-wrap">{msg.parts[0].text}</p>
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

        <form onSubmit={handleSendMessage} className="flex gap-2 flex-shrink-0">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder={error || "Pergunte algo sobre ciências..."}
            disabled={!chat || isLoading || !!error}
            className="flex-1 bg-slate-700 border border-slate-600 rounded-lg p-3 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 disabled:opacity-50"
          />
          <button
            type="submit"
            disabled={!chat || isLoading || !input.trim() || !!error}
            className="bg-cyan-500 text-white p-3 rounded-lg transition enabled:hover:bg-cyan-600 disabled:opacity-50 disabled:cursor-not-allowed"
            aria-label="Enviar mensagem"
          >
            <PaperAirplaneIcon className="w-6 h-6" />
          </button>
        </form>
      </div>
    </div>
  );
};

export default AITutorScreen;