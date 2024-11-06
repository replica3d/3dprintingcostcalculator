import React from 'react';
import { Globe } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../context/LanguageContext';
import type { Language } from '../translations';

const languages: Record<Language, string> = {
  en: 'English',
  es: 'Español',
  de: 'Deutsch',
  fr: 'Français',
  it: 'Italiano'
};

export function LanguageSwitcher() {
  const { language } = useLanguage();
  
  const switchLanguage = (newLang: Language) => {
    if (newLang === language) return;
    const newPath = newLang === 'en' ? '/' : `/${newLang}`;
    const baseUrl = window.location.origin;
    window.location.href = `${baseUrl}${newPath}`;
  };

  return (
    <div className="flex items-center gap-2">
      <Globe className="w-4 h-4 text-gray-600 dark:text-gray-400" />
      <label htmlFor="language-select" className="sr-only">
        Select Language
      </label>
      <select
        id="language-select"
        value={language}
        onChange={(e) => switchLanguage(e.target.value as Language)}
        className="bg-transparent text-gray-600 dark:text-gray-400 border-none focus:ring-0 cursor-pointer text-sm"
      >
        {Object.entries(languages).map(([code, name]) => (
          <option key={code} value={code}>
            {name}
          </option>
        ))}
      </select>
    </div>
  );
}