import React, { createContext, useContext, useCallback } from 'react';
import { translations } from '../translations';
import type { Language, Translation } from '../translations';

interface LanguageContextType {
  language: Language;
  t: Translation;
  switchLanguage: (newLang: Language) => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

interface LanguageProviderProps {
  children: React.ReactNode;
  lang: Language;
}

export function LanguageProvider({ children, lang }: LanguageProviderProps) {
  const switchLanguage = useCallback((newLang: Language) => {
    if (newLang === lang) return;
    const newPath = newLang === 'en' ? '/' : `/${newLang}`;
    window.location.pathname = newPath;
  }, [lang]);

  const value = {
    language: lang,
    t: translations[lang] || translations.en,
    switchLanguage
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}

export const languages: Record<Language, string> = {
  en: 'English',
  es: 'Español',
  de: 'Deutsch',
  fr: 'Français',
  it: 'Italiano'
};