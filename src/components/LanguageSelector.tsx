import React, { useState, useRef, useEffect } from 'react';
import { useLanguage, Language } from '../contexts/LanguageContext';
import { translations } from '../i18n';

interface HeaderProps {
    onGoHome: () => void;
}

const Header: React.FC<HeaderProps> = ({ onGoHome }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();
  const menuRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => setIsOpen(!isOpen);

  const selectLanguage = (lang: Language) => {
    setLanguage(lang);
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const flags: Record<Language, string> = {
    'pt-BR': '🇧🇷',
    'en-US': '🇺🇸',
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-slate-900/80 backdrop-blur-sm border-b border-slate-700 z-40">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <button onClick={onGoHome} className="flex-shrink-0 text-white font-bold text-xl hover:text-cyan-400 transition">
              {t('home.title')}
            </button>
          </div>
          <div className="relative" ref={menuRef}>
            <button
              onClick={toggleMenu}
              className="p-2 rounded-full text-2xl transition-transform duration-200 hover:scale-110"
              aria-label={t('lang_selector.select_language')}
            >
              {flags[language]}
            </button>
            {isOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-slate-800 border border-slate-700 rounded-md shadow-lg py-1 animate-fade-in-up origin-top-right">
                <button
                  onClick={() => selectLanguage('pt-BR')}
                  className={`flex items-center w-full text-left px-4 py-2 text-sm ${language === 'pt-BR' ? 'font-bold text-cyan-400' : 'text-slate-300'} hover:bg-slate-700`}
                >
                  <span className="mr-3 text-xl">🇧🇷</span> {translations['pt-BR'].lang_name}
                </button>
                <button
                  onClick={() => selectLanguage('en-US')}
                  className={`flex items-center w-full text-left px-4 py-2 text-sm ${language === 'en-US' ? 'font-bold text-cyan-400' : 'text-slate-300'} hover:bg-slate-700`}
                >
                  <span className="mr-3 text-xl">🇺🇸</span> {translations['en-US'].lang_name}
                </button>
              </div>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
