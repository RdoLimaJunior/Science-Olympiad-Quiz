import React, { useState, useCallback } from 'react';
import { allQuizzes } from '../constants/quizData';
import type { Question, UserAnswer } from '../types';
import Quiz from './Quiz';
import Results from './Results';

type GameState = 'year-selection' | 'playing' | 'finished';

const availableYears = Object.keys(allQuizzes).sort((a,b) => parseInt(b) - parseInt(a));

interface PracticeFlowProps {
    onGoBack: () => void;
    onQuizComplete: (year: string, answers: UserAnswer[], questions: Question[]) => void;
}

const YearSelectionScreen: React.FC<{ onSelectYear: (year: string) => void; onGoBack: () => void }> = ({ onSelectYear, onGoBack }) => (
  <div className="flex flex-col items-center justify-center min-h-screen p-4 text-center animate-fade-in">
    <div className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-2xl shadow-2xl max-w-2xl w-full border border-slate-700">
      <h1 className="text-4xl md:text-5xl font-bold text-cyan-400 mb-2">Praticar com Simulados</h1>
      <p className="text-slate-400 mb-8">Selecione uma prova para começar.</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        {availableYears.map(year => (
          <button
            key={year}
            onClick={() => onSelectYear(year)}
            className="bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-4 px-6 rounded-lg text-xl transition-transform duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-900 focus:ring-cyan-500"
          >
            {year}
          </button>
        ))}
      </div>
      <button onClick={onGoBack} className="text-slate-400 hover:text-cyan-400 transition">
          &larr; Voltar ao Menu Principal
      </button>
    </div>
  </div>
);


const PracticeFlow: React.FC<PracticeFlowProps> = ({ onGoBack, onQuizComplete }) => {
  const [gameState, setGameState] = useState<GameState>('year-selection');
  const [userAnswers, setUserAnswers] = useState<UserAnswer[]>([]);
  const [currentQuestions, setCurrentQuestions] = useState<Question[]>([]);
  const [currentYear, setCurrentYear] = useState<string>('');

  const selectYearAndStartQuiz = useCallback((year: string) => {
    setCurrentYear(year);
    setCurrentQuestions(allQuizzes[year]);
    setUserAnswers([]);
    setGameState('playing');
  }, []);

  const finishQuiz = useCallback((answers: UserAnswer[]) => {
    setUserAnswers(answers);
    onQuizComplete(currentYear, answers, currentQuestions);
    setGameState('finished');
  }, [currentYear, currentQuestions, onQuizComplete]);

  const restartQuiz = useCallback(() => {
    setUserAnswers([]);
    setGameState('playing');
  }, []);
  
  const returnToYearSelection = useCallback(() => {
    setGameState('year-selection');
    setCurrentQuestions([]);
    setUserAnswers([]);
  }, []);

  const renderContent = () => {
    switch (gameState) {
      case 'playing':
        return <Quiz questions={currentQuestions} onQuizComplete={finishQuiz} onQuit={returnToYearSelection} />;
      case 'finished':
        return <Results userAnswers={userAnswers} questions={currentQuestions} onRestart={restartQuiz} onReturnToSelection={returnToYearSelection} />;
      case 'year-selection':
      default:
        return <YearSelectionScreen onSelectYear={selectYearAndStartQuiz} onGoBack={onGoBack} />;
    }
  };

  return <>{renderContent()}</>;
}

export default PracticeFlow;