import React, { createContext, useState, useContext, useMemo, useCallback, ReactNode } from 'react';
import { translations } from '../i18n';

export type Language = 'pt-BR' | 'en-US';
const LANG_KEY = 'vanda-app-lang';

// Helper function to get nested properties from an object
const getNestedTranslation = (obj: any, key: string): string | undefined => {
  return key.split('.').reduce((acc, part) => acc && acc[part], obj);
};

interface LanguageContextType {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (key: string, ...args: (string | number)[]) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    try {
      const savedLang = localStorage.getItem(LANG_KEY);
      return (savedLang === 'en-US' || savedLang === 'pt-BR') ? savedLang : 'pt-BR';
    } catch {
      return 'pt-BR';
    }
  });

  const setLanguage = (lang: Language) => {
    try {
      localStorage.setItem(LANG_KEY, lang);
      setLanguageState(lang);
    } catch (error) {
      console.error("Failed to save language to localStorage", error);
    }
  };

  const t = useCallback((key: string, ...args: (string | number)[]) => {
    const translationSet = translations[language] || translations['pt-BR'];
    let translated = getNestedTranslation(translationSet, key) || key;
    
    if (args.length > 0) {
        args.forEach((arg, index) => {
            translated = translated.replace(new RegExp(`\\{${index}\\}`, 'g'), String(arg));
        });
    }

    return translated;
  }, [language]);

  const value = useMemo(() => ({ language, setLanguage, t }), [language, t]);

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};