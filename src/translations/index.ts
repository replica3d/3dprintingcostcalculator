import { en } from './en';
import { es } from './es';
import { de } from './de';
import { fr } from './fr';
import { it } from './it';

export const translations = {
  en,
  es,
  de,
  fr,
  it
} as const;

export type Language = keyof typeof translations;
export type Translation = typeof en;

export function getTranslation(path: string): Language {
  const pathSegments = window.location.pathname.split('/');
  const lang = pathSegments[1];
  
  if (!lang || !(lang in translations)) {
    return 'en';
  }
  
  return (lang in translations ? lang : 'en') as Language;
}
