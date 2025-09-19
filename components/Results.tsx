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
    { name: 'Your Score', value: percentage },
    { name: 'Average Score', value: 32.54 }, // Example from image
  ];

  return (
    <div className="max-w-4xl mx-auto p-4 md:p-8">
      <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl shadow-2xl p-6 md:p-8">
        <h1 className="text-4xl font-bold text-center text-cyan-400 mb-4">Quiz Results</h1>
        <p className="text-center text-slate-300 text-xl mb-6">
          You answered {score} of {questions.length} questions correctly.
        </p>

        <div className="bg-slate-700/80 p-6 rounded-lg mb-8 text-center">
          <p className="text-2xl font-bold">You have reached {percentage.toFixed(2)}%</p>
        </div>
        
        <div className="h-64 mb-8">
            <ResponsiveContainer width="100%" height="100%">
                <BarChart data={chartData} layout="vertical" margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                    <XAxis type="number" domain={[0, 100]} stroke="#94a3b8" unit="%" />
                    <YAxis type="category" dataKey="name" stroke="#94a3b8" width={100} />
                    <Tooltip cursor={{fill: 'rgba(30, 41, 59, 0.5)'}} contentStyle={{ backgroundColor: '#1e293b', border: '1px solid #334155' }}/>
                    <Bar dataKey="value" barSize={30}>
                       {chartData.map((entry, index) => (
                         <Cell key={`cell-${index}`} fill={index === 0 ? '#22d3ee' : '#64748b'} />
                       ))}
                    </Bar>
                </BarChart>
            </ResponsiveContainer>
        </div>


        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-8">
          <button
            onClick={onRestart}
            className="bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-3 px-8 rounded-full text-xl transition-transform duration-300 ease-in-out transform hover:scale-105 w-full sm:w-auto"
          >
            Restart Quiz
          </button>
          <button
            onClick={onReturnToSelection}
            className="bg-slate-600 hover:bg-slate-500 text-white font-bold py-3 px-8 rounded-full text-xl transition-transform duration-300 ease-in-out transform hover:scale-105 w-full sm:w-auto"
          >
            Change Year
          </button>
        </div>
        
        <div>
          <h2 className="text-2xl font-bold text-center mb-4">Review Your Answers</h2>
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
                    Question {index + 1}: {question.text.split('\n')[0]}
                  </p>
                  <div className="flex items-start space-x-2 mb-2 pl-2">
                    {isCorrect ? 
                      <CheckCircleIcon className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" /> :
                      <XCircleIcon className="w-6 h-6 text-red-400 flex-shrink-0 mt-1" />
                    }
                    <div>
                      <p className="text-slate-300">Your answer: <span className={isCorrect ? 'text-green-400' : 'text-red-400'}>{selectedOption?.text || 'Not answered'}</span></p>
                      {!isCorrect && (
                        <p className="text-slate-300">Correct answer: <span className="text-green-400">{correctOption?.text}</span></p>
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