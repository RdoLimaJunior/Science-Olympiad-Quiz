import React, { useState, useCallback, useEffect } from 'react';
import HomeScreen from './components/HomeScreen';
import PracticeFlow from './components/PracticeFlow';
import StudyScreen from './components/StudyScreen';
import PerformanceScreen from './components/PerformanceScreen';
import type { Question, UserAnswer, QuizResultHistory } from './types';
import { LanguageProvider, useLanguage } from './contexts/LanguageContext';
import LanguageSelector from './components/LanguageSelector';

type AppScreen = 'home' | 'practice' | 'study' | 'performance';

const HISTORY_KEY = 'quizHistory';

function AppContent() {
  const { t } = useLanguage();
  const [currentScreen, setCurrentScreen] = useState<AppScreen>('home');
  const [history, setHistory] = useState<QuizResultHistory[]>(() => {
    try {
      const savedHistory = localStorage.getItem(HISTORY_KEY);
      return savedHistory ? JSON.parse(savedHistory) : [];
    } catch (error) {
      console.error(t('app.history_load_error'), error);
      return [];
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(HISTORY_KEY, JSON.stringify(history));
    } catch (error) {
      console.error(t('app.history_save_error'), error);
    }
  }, [history, t]);

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
  }, []);

  const renderContent = () => {
    switch (currentScreen) {
      case 'practice':
        return <PracticeFlow onGoBack={handleGoBack} onQuizComplete={handleQuizComplete} />;
      case 'study':
        return <StudyScreen onGoBack={handleGoBack} />;
      case 'performance':
        return <PerformanceScreen history={history} onGoBack={handleGoBack} />;
      case 'home':
      default:
        return <HomeScreen onNavigate={handleNavigate} />;
    }
  };

  return (
    <main className="min-h-screen text-slate-100 font-sans bg-slate-900">
      {renderContent()}
      <LanguageSelector />
    </main>
  );
}

function App() {
    return (
        <LanguageProvider>
            <AppContent />
        </LanguageProvider>
    );
}

export default App;