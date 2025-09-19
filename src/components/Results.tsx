import React, { useMemo } from 'react';
import type { Question, UserAnswer } from '../types';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import { CheckCircleIcon, XCircleIcon } from './icons';

interface ResultsProps {
  userAnswers: UserAnswer[];
  questions: Question[];
  onRestart: () => void;
  onReturnToSelection: () => void;
}

const Results: React.FC<ResultsProps> = ({ userAnswers, questions, onRestart, onReturnToSelection }) => {
  const score = useMemo(() => userAnswers.filter(answer => answer.isCorrect).length, [userAnswers]);
  const percentage = useMemo(() => (score / questions.length) * 100, [score, questions.length]);

  const chartData = [
    { name: 'Sua Pontuação', value: percentage },
  ];

  return (
    <div className="max-w-4xl mx-auto p-4 md:p-8">
      <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl shadow-2xl p-6 md:p-8">
        <h1 className="text-4xl font-bold text-center text-cyan-400 mb-4">Resultado do Simulado</h1>
        <p className="text-center text-slate-300 text-xl mb-6">
          Você acertou {score} de {questions.length} questões.
        </p>

        <div className="bg-slate-700/80 p-6 rounded-lg mb-8 text-center">
          <p className="text-2xl font-bold">Percentual de acerto: {percentage.toFixed(2)}%</p>
        </div>
        
        <div className="h-40 mb-8">
            <ResponsiveContainer width="100%" height="100%">
                <BarChart data={chartData} layout="vertical" margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                    <XAxis type="number" domain={[0, 100]} stroke="#94a3b8" unit="%" />
                    <YAxis type="category" dataKey="name" stroke="#94a3b8" width={120} />
                    <Tooltip cursor={{fill: 'rgba(30, 41, 59, 0.5)'}} contentStyle={{ backgroundColor: '#1e293b', border: '1px solid #334155' }}/>
                    <Bar dataKey="value" barSize={30} fill="#22d3ee" />
                </BarChart>
            </ResponsiveContainer>
        </div>


        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-8">
          <button
            onClick={onRestart}
            className="bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-3 px-8 rounded-full text-xl transition-transform duration-300 ease-in-out transform hover:scale-105 w-full sm:w-auto"
          >
            Refazer Prova
          </button>
          <button
            onClick={onReturnToSelection}
            className="bg-slate-600 hover:bg-slate-500 text-white font-bold py-3 px-8 rounded-full text-xl transition-transform duration-300 ease-in-out transform hover:scale-105 w-full sm:w-auto"
          >
            Mudar de Ano
          </button>
        </div>
        
        <div>
          <h2 className="text-2xl font-bold text-center mb-4">Revisão das Respostas</h2>
          <div className="space-y-4">
            {questions.map((question, index) => {
              const userAnswer = userAnswers.find(a => a.questionId === question.id);
              const isCorrect = userAnswer?.isCorrect ?? false;
              const selectedOption = question.options.find(o => o.id === userAnswer?.answerId);
              const correctOption = question.options.find(o => o.id === question.correctAnswerId);
              
              const borderClass = isCorrect ? 'border-l-4 border-green-500' : 'border-l-4 border-red-500';

              return (
                <div key={question.id} className={`bg-slate-700/80 p-4 rounded-lg ${borderClass}`}>
                  <p className="font-semibold mb-2 pl-2">
                    Questão {index + 1}: {question.text.split('\n')[0]}
                  </p>
                  <div className="flex items-start space-x-2 mb-2 pl-2">
                    {isCorrect ? 
                      <CheckCircleIcon className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" /> :
                      <XCircleIcon className="w-6 h-6 text-red-400 flex-shrink-0 mt-1" />
                    }
                    <div>
                      <p className="text-slate-300">Sua resposta: <span className={isCorrect ? 'text-green-400' : 'text-red-400'}>{selectedOption?.text || 'Não respondida'}</span></p>
                      {!isCorrect && (
                        <p className="text-slate-300">Resposta correta: <span className="text-green-400">{correctOption?.text}</span></p>
                      )}
                    </div>
                  </div>
                  <p className="text-sm text-slate-400 bg-slate-800 p-2 rounded ml-2">{question.explanation}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Results;
