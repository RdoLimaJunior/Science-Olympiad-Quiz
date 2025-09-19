import React from 'react';
import type { QuizResultHistory } from '../types';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid, Legend } from 'recharts';
import { ArrowLeftIcon } from './icons';

interface PerformanceScreenProps {
  history: QuizResultHistory[];
  onGoBack: () => void;
}

const PerformanceScreen: React.FC<PerformanceScreenProps> = ({ history, onGoBack }) => {
  const chartData = history.map(item => ({
    name: item.year,
    'Sua Pontuação (%)': item.percentage.toFixed(2),
  }));

  const overallPercentage = history.length > 0
    ? history.reduce((acc, item) => acc + item.percentage, 0) / history.length
    : 0;

  return (
    <div className="max-w-4xl mx-auto p-4 md:p-8">
      <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl shadow-2xl p-6 md:p-8 relative">
        <button
          onClick={onGoBack}
          className="absolute top-4 left-4 text-sm text-slate-400 hover:text-cyan-400 transition flex items-center gap-1"
          aria-label="Voltar ao Menu"
        >
          <ArrowLeftIcon className="w-4 h-4" />
          Menu
        </button>
        <h1 className="text-3xl md:text-4xl font-bold text-cyan-400 mb-6 text-center">Meu Desempenho</h1>

        {history.length === 0 ? (
          <p className="text-center text-slate-400 text-lg">Você ainda não completou nenhuma prova. Vá para a seção "Praticar" para começar!</p>
        ) : (
          <>
            <div className="bg-slate-700/80 p-6 rounded-lg mb-8 text-center">
              <p className="text-slate-300">Média Geral de Acertos</p>
              <p className="text-4xl font-bold text-white">{overallPercentage.toFixed(2)}%</p>
            </div>

            <h2 className="text-2xl font-bold mb-4 text-center">Desempenho por Ano</h2>
            <div className="h-80 mb-8">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={chartData} margin={{ top: 5, right: 20, left: -10, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
                  <XAxis dataKey="name" stroke="#94a3b8" />
                  <YAxis stroke="#94a3b8" unit="%" />
                  <Tooltip cursor={{fill: 'rgba(30, 41, 59, 0.5)'}} contentStyle={{ backgroundColor: '#1e293b', border: '1px solid #334155' }}/>
                  <Legend />
                  <Bar dataKey="Sua Pontuação (%)" fill="#22d3ee" />
                </BarChart>
              </ResponsiveContainer>
            </div>
            
            <h2 className="text-2xl font-bold mb-4 text-center">Histórico de Provas</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-left bg-slate-700/50 rounded-lg">
                <thead className="bg-slate-700">
                  <tr>
                    <th className="p-3">Ano</th>
                    <th className="p-3">Acertos</th>
                    <th className="p-3">Data</th>
                  </tr>
                </thead>
                <tbody>
                  {history.slice().reverse().map((item, index) => (
                    <tr key={index} className="border-t border-slate-600">
                      <td className="p-3 font-bold">{item.year}</td>
                      <td className="p-3">{`${item.score} / ${item.totalQuestions} (${item.percentage.toFixed(0)}%)`}</td>
                      <td className="p-3 text-slate-400">{new Date(item.date).toLocaleDateString('pt-BR')}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default PerformanceScreen;
