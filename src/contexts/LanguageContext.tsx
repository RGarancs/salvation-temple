import { createContext, useContext, useState, type ReactNode } from 'react';
import { translations, type Language } from '@/i18n';

export type { Language };

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const defaultT = (key: string): string => key;

const defaultContextValue: LanguageContextType = {
  language: 'ru',
  setLanguage: () => {},
  t: defaultT,
};

const LanguageContext = createContext<LanguageContextType>(defaultContextValue);

if (import.meta.hot) {
  import.meta.hot.accept();
}

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>(() => {
    const saved = localStorage.getItem('language') as Language;
    return saved || 'ru';
  });

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang);
    localStorage.setItem('language', lang);
  };

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  return useContext(LanguageContext);
};
