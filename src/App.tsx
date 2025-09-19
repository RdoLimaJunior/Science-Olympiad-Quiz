import React, { useState, useCallback } from 'react';
import HomeScreen from './components/HomeScreen';
import PracticeFlow from './components/PracticeFlow';
import StudyScreen from './components/StudyScreen';
import PerformanceScreen from './components/PerformanceScreen';
import AITutorScreen from './components/AITutorScreen';
import type { Question, UserAnswer, QuizResultHistory } from './types';

type AppScreen = 'home' | 'practice' | 'study' | 'performance' | 'tutor';

function App() {
  const [currentScreen, setCurrentScreen] = useState<AppScreen>('home');
  const [history, setHistory] = useState<QuizResultHistory[]>([]);

  const handleNavigate = useCallback((screen: AppScreen) => {
    setCurrentScreen(screen);
  }, []);

  const handleGoBack = useCallback(() => {
    setCurrentScreen('home');
  }, []);

  const handleQuizComplete = useCallback((year: string, answers: UserAnswer[], questions: Question[]) => {
    const score = answers.filter(a => a.isCorrect).length;
    const totalQuestions = questions.length;
    const percentage = (score / totalQuestions) * 100;

    const newResult: QuizResultHistory = {
      year,
      score,
      totalQuestions,
      percentage,
      date: new Date().toISOString(),
    };

    setHistory(prev => [...prev, newResult]);
    // Note: The PracticeFlow component will handle navigating to the results screen internally.
    // This App component just records the result.
  }, []);

  const renderContent = () => {
    switch (currentScreen) {
      case 'practice':
        return <PracticeFlow onGoBack={handleGoBack} onQuizComplete={handleQuizComplete} />;
      case 'study':
        return <StudyScreen onGoBack={handleGoBack} />;
      case 'performance':
        return <PerformanceScreen history={history} onGoBack={handleGoBack} />;
      case 'tutor':
        return <AITutorScreen onGoBack={handleGoBack} />;
      case 'home':
      default:
        return <HomeScreen onNavigate={handleNavigate} />;
    }
  };

  return (
    <main className="min-h-screen text-slate-100 font-sans bg-slate-900">
      {renderContent()}
    </main>
  );
}

export default App;
