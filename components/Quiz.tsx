import React, { useState, useCallback } from 'react';
import type { Question, UserAnswer, Option } from '../types';
import { CheckCircleIcon, XCircleIcon } from './icons';
import Modal from './Modal';

interface QuizProps {
  questions: Question[];
  onQuizComplete: (answers: UserAnswer[]) => void;
  onQuit: () => void;
}

const Quiz: React.FC<QuizProps> = ({ questions, onQuizComplete, onQuit }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswerId, setSelectedAnswerId] = useState<string | null>(null);
  const [userAnswers, setUserAnswers] = useState<UserAnswer[]>([]);
  const [isAnswered, setIsAnswered] = useState(false);
  const [isQuitModalOpen, setIsQuitModalOpen] = useState(false);

  const currentQuestion = questions[currentQuestionIndex];

  const handleAnswerSelect = (answerId: string) => {
    if (isAnswered) return;
    setSelectedAnswerId(answerId);
  };

  const handleSubmit = () => {
    if (selectedAnswerId === null) return;

    const isCorrect = selectedAnswerId === currentQuestion.correctAnswerId;
    const currentAnswers = [...userAnswers, {
      questionId: currentQuestion.id,
      answerId: selectedAnswerId,
      isCorrect: isCorrect,
    }];
    setUserAnswers(currentAnswers);
    setIsAnswered(true);

    if (currentQuestionIndex === questions.length - 1) {
        setTimeout(() => onQuizComplete(currentAnswers), 2000);
    }
  };
  
  const handleNextQuestion = useCallback(() => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
      setSelectedAnswerId(null);
      setIsAnswered(false);
    } else {
      onQuizComplete(userAnswers);
    }
  }, [currentQuestionIndex, questions.length, onQuizComplete, userAnswers]);

  const getOptionClass = (option: Option) => {
    if (!isAnswered) {
      return selectedAnswerId === option.id
        ? 'bg-cyan-600 ring-2 ring-cyan-400 transform scale-105'
        : 'bg-slate-700 hover:bg-slate-600';
    }

    const isCorrectAnswer = option.id === currentQuestion.correctAnswerId;
    const isSelectedAnswer = option.id === selectedAnswerId;

    if (isCorrectAnswer) return 'bg-green-700 ring-2 ring-green-400';
    if (isSelectedAnswer && !isCorrectAnswer) return 'bg-red-700 ring-2 ring-red-400';
    
    return 'bg-slate-800 text-slate-500 cursor-not-allowed';
  };

  return (
    <>
      <Modal
        isOpen={isQuitModalOpen}
        onClose={() => setIsQuitModalOpen(false)}
        onConfirm={onQuit}
        title="Are you sure you want to quit?"
      >
        <p className="text-slate-400">Your progress will be lost.</p>
      </Modal>

      <div className="max-w-4xl mx-auto p-4 md:p-8">
        <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl shadow-2xl p-6 md:p-8">
          {/* Progress Bar and Header */}
          <div className="mb-6">
            <div className="flex justify-between items-center mb-2 text-slate-400">
                <button 
                  onClick={() => setIsQuitModalOpen(true)}
                  className="text-sm text-slate-400 hover:text-cyan-400 transition"
                  aria-label="Quit quiz"
                >
                  &larr; Quit
                </button>
              <span>Question {currentQuestionIndex + 1} of {questions.length}</span>
            </div>
            <div className="w-full bg-slate-700 rounded-full h-2.5">
              <div
                className="bg-cyan-500 h-2.5 rounded-full transition-all duration-500"
                style={{ width: `${((currentQuestionIndex) / questions.length) * 100}%` }}
              ></div>
            </div>
          </div>

          {/* Question Content */}
          <div className="mb-6">
            {currentQuestion.image && (
              <img 
                src={currentQuestion.image} 
                alt="Question illustration" 
                className="w-full max-h-80 object-contain rounded-lg mb-4 bg-slate-700 p-2"
              />
            )}
            <h2 className="text-xl md:text-2xl font-semibold text-slate-100 whitespace-pre-wrap">{currentQuestion.text}</h2>
          </div>

          {/* Options */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            {currentQuestion.options.map(option => (
              <button
                key={option.id}
                onClick={() => handleAnswerSelect(option.id)}
                disabled={isAnswered}
                className={`p-4 rounded-lg text-left transition-all duration-300 w-full ${getOptionClass(option)}`}
              >
                <span className="font-bold mr-2">{option.id}.</span> {option.text}
              </button>
            ))}
          </div>
          
          {/* Action Button and Feedback */}
          <div className="mt-6 min-h-[140px]">
            {!isAnswered ? (
              <button
                onClick={handleSubmit}
                disabled={selectedAnswerId === null}
                className="w-full bg-cyan-500 text-white font-bold py-3 px-6 rounded-lg text-lg transition enabled:hover:bg-cyan-600 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Submit Answer
              </button>
            ) : (
              <div className="text-center p-4 rounded-lg bg-slate-700/80">
                <div className="flex items-center justify-center mb-2">
                  {userAnswers[userAnswers.length - 1]?.isCorrect ? (
                      <>
                          <CheckCircleIcon className="w-8 h-8 text-green-400 mr-2" />
                          <h3 className="text-2xl font-bold text-green-400">Correct!</h3>
                      </>
                  ) : (
                      <>
                          <XCircleIcon className="w-8 h-8 text-red-400 mr-2" />
                          <h3 className="text-2xl font-bold text-red-400">Incorrect</h3>
                      </>
                  )}
                </div>
                <p className="text-slate-300 mb-4">{currentQuestion.explanation}</p>
                <button
                  onClick={handleNextQuestion}
                  className="w-full bg-slate-600 text-white font-bold py-3 px-6 rounded-lg text-lg hover:bg-slate-500 transition focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-800 focus:ring-slate-500"
                >
                  {currentQuestionIndex < questions.length - 1 ? 'Next Question' : 'Finish Quiz'}
                </button>
              </div>
            )}
          </div>

        </div>
      </div>
    </>
  );
};

export default Quiz;