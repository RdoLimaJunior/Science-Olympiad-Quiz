import React, { useState, useRef, useEffect } from 'react';
// FIX: Import `GoogleGenAI` and `Chat` from `@google/genai` as per guidelines.
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
  const [isLoading, setIsLoading] = useState(false);
  const chatContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    try {
      // FIX: Initialize GoogleGenAI with a named apiKey parameter as per guidelines.
      // FIX: API key is obtained exclusively from `process.env.API_KEY`.
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY! });
      // FIX: Use the 'gemini-2.5-flash' model for text tasks and chat.
      const newChat = ai.chats.create({
        model: 'gemini-2.5-flash',
        config: {
            systemInstruction: "Você é um tutor amigável e experiente para a Olimpíada de Ciências. Ajude os alunos a entender conceitos complexos de ciências de forma simples. Use analogias e exemplos. Mantenha as respostas concisas e focadas no aprendizado.",
        },
      });
      setChat(newChat);
      setHistory([
        { role: 'model', parts: [{ text: "Olá! Sou seu tutor de IA para a Olimpíada de Ciências. Como posso te ajudar a estudar hoje?" }] }
      ]);
    } catch (error) {
      console.error("Erro ao inicializar o Tutor IA:", error);
      setHistory([
        { role: 'model', parts: [{ text: "Desculpe, não foi possível conectar ao Tutor IA. Verifique a configuração da sua chave de API." }] }
      ]);
    }
  }, []);

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [history]);

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || !chat || isLoading) return;

    const userMessage: ChatMessage = { role: 'user', parts: [{ text: input }] };
    setHistory(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      // FIX: Use `chat.sendMessageStream` for streaming chat responses.
      const result = await chat.sendMessageStream({ message: input });
      
      let modelResponse = '';
      setHistory(prev => [...prev, { role: 'model', parts: [{ text: '' }] }]);

      for await (const chunk of result) {
        // FIX: Access the generated text directly from the 'text' property of the response chunk.
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
      // Replace the empty model message with an error message
      setHistory(prev => {
          const newHistory = [...prev];
          newHistory[newHistory.length - 1] = errorMessage;
          return newHistory;
      });
    } finally {
      setIsLoading(false);
    }
  };
  
  return (
    <div className="max-w-4xl mx-auto p-4 md:p-8">
      <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl shadow-2xl p-6 md:p-8 relative flex flex-col h-[85vh]">
        <div className="flex items-center justify-between mb-4">
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
              <div className={`max-w-lg p-3 rounded-lg ${msg.role === 'user' ? 'bg-cyan-600 text-white' : 'bg-slate-700 text-slate-200'}`}>
                <p className="whitespace-pre-wrap">{msg.parts[0].text}</p>
              </div>
            </div>
          ))}
          {isLoading && history[history.length - 1]?.role === 'user' && (
            <div className="flex justify-start">
              <div className="max-w-lg p-3 rounded-lg bg-slate-700 text-slate-200">
                <p className="animate-pulse">Pensando...</p>
              </div>
            </div>
          )}
        </div>

        <form onSubmit={handleSendMessage} className="flex gap-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Pergunte algo sobre ciências..."
            disabled={!chat || isLoading}
            className="flex-1 bg-slate-700 border border-slate-600 rounded-lg p-3 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500"
          />
          <button
            type="submit"
            disabled={!chat || isLoading || !input.trim()}
            className="bg-cyan-500 text-white p-3 rounded-lg transition enabled:hover:bg-cyan-600 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <PaperAirplaneIcon className="w-6 h-6" />
          </button>
        </form>
      </div>
    </div>
  );
};

export default AITutorScreen;
