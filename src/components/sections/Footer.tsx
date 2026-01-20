import { useLanguage } from '@/contexts/LanguageContext';

export const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer id="register" className="py-16 bg-chocolate text-primary-foreground">
      <div className="container mx-auto px-4 text-center">
        <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">{t('footer.church')}</h2>
        <a
          href="mailto:info@temple.lv"
          className="inline-block bg-amber hover:bg-amber-dark text-foreground px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:shadow-xl mb-8"
        >
          {t('hero.cta')}
        </a>
        <p className="text-primary-foreground/60 text-sm">{t('footer.copyright')}</p>
      </div>
    </footer>
  );
};
