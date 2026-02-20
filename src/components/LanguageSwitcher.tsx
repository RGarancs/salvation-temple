import { useLanguage, Language } from '@/contexts/LanguageContext';
import { Globe } from 'lucide-react';

const languages: { code: Language; label: string }[] = [
  { code: 'ru', label: 'RU' },
  { code: 'en', label: 'EN' },
  { code: 'lv', label: 'LV' },
];

export const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center gap-1 glass rounded-full px-2 py-1">
      <Globe className="w-4 h-4 text-foreground/80" />
      {languages.map((lang) => (
        <button
          key={lang.code}
          onClick={() => setLanguage(lang.code)}
          className={`px-2 py-1 rounded-full text-sm font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-1 ${
            language === lang.code
              ? 'bg-primary text-primary-foreground'
              : 'text-foreground/70 hover:text-foreground hover:bg-muted'
          }`}
          aria-label={`Switch to ${lang.label}`}
          aria-current={language === lang.code ? 'true' : 'false'}
        >
          {lang.label}
        </button>
      ))}
    </div>
  );
};
