import React from 'react';

interface HomeScreenProps {
  onNavigate: (screen: 'practice' | 'study' | 'performance' | 'tutor') => void;
}

const HomeScreen: React.FC<HomeScreenProps> = ({ onNavigate }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 text-center">
      <div className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-2xl shadow-2xl max-w-2xl w-full border border-slate-700">
        <h1 className="text-4xl md:text-5xl font-bold text-cyan-400 mb-2">Olimpíada de Ciências</h1>
        <p className="text-slate-300 mb-8 text-lg">Seu centro de preparação VNJSO</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <button
            onClick={() => onNavigate('practice')}
            className="bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-6 px-6 rounded-lg text-xl transition-transform duration-300 ease-in-out transform hover:scale-105"
          >
            Praticar
          </button>
          <button
            onClick={() => onNavigate('study')}
            className="bg-teal-500 hover:bg-teal-600 text-white font-bold py-6 px-6 rounded-lg text-xl transition-transform duration-300 ease-in-out transform hover:scale-105"
          >
            Estudar
          </button>
          <button
            onClick={() => onNavigate('performance')}
            className="bg-sky-500 hover:bg-sky-600 text-white font-bold py-6 px-6 rounded-lg text-xl transition-transform duration-300 ease-in-out transform hover:scale-105"
          >
            Meu Desempenho
          </button>
          <button
            onClick={() => onNavigate('tutor')}
            className="bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-6 px-6 rounded-lg text-xl transition-transform duration-300 ease-in-out transform hover:scale-105"
          >
            Tutor com IA
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomeScreen;
