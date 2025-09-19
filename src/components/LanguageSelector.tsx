import React, { useState, useRef, useEffect } from 'react';
import { useLanguage, Language } from '../contexts/LanguageContext';
import { GlobeAltIcon } from './icons';

const LanguageSelector: React.FC = () => {
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

  return (
    <div ref={menuRef} className="fixed bottom-5 right-5 z-50">
      {isOpen && (
        <div className="absolute bottom-full right-0 mb-2 w-40 bg-slate-800 border border-slate-700 rounded-lg shadow-2xl animate-fade-in-up">
          <button
            onClick={() => selectLanguage('pt-BR')}
            className={`w-full text-left px-4 py-2 text-sm ${language === 'pt-BR' ? 'font-bold text-cyan-400' : 'text-slate-300'} hover:bg-slate-700 rounded-t-lg`}
          >
            🇧🇷 {t('lang_name', 'pt-BR')}
          </button>
          <button
            onClick={() => selectLanguage('en-US')}
            className={`w-full text-left px-4 py-2 text-sm ${language === 'en-US' ? 'font-bold text-cyan-400' : 'text-slate-300'} hover:bg-slate-700 rounded-b-lg`}
          >
            🇺🇸 {t('lang_name', 'en-US')}
          </button>
        </div>
      )}
      <button
        onClick={toggleMenu}
        className="w-14 h-14 bg-slate-700/80 backdrop-blur-sm text-slate-300 rounded-full flex items-center justify-center shadow-lg hover:bg-slate-600 transition-all duration-300 transform hover:scale-110"
        aria-label={t('lang_selector.select_language')}
      >
        <GlobeAltIcon className="w-7 h-7" />
      </button>
    </div>
  );
};

export default LanguageSelector;