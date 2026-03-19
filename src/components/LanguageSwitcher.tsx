import { useLanguage, Language } from '@/contexts/LanguageContext';

const languages: { code: Language; label: string }[] = [
  { code: 'ru', label: 'RU' },
  { code: 'en', label: 'EN' },
  { code: 'lv', label: 'LV' },
];

export const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center rounded-full bg-muted/60 p-0.5">
      {languages.map((lang, index) => (
        <button
          key={lang.code}
          onClick={() => setLanguage(lang.code)}
          className={`relative px-3 py-1 rounded-full text-xs font-semibold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-1 ${
            language === lang.code
              ? 'bg-primary text-primary-foreground shadow-sm'
              : `text-foreground/60 hover:text-foreground ${index > 0 ? 'border-l border-transparent' : ''}`
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
