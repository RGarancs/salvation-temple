import { useLanguage } from '@/contexts/LanguageContext';
import { Target } from 'lucide-react';

export const TargetSection = () => {
  const { t } = useLanguage();

  return (
    <section className="py-20 bg-sage relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="absolute top-10 left-10 w-32 h-32 border-2 border-primary-foreground/20 rounded-full" />
        <div className="absolute bottom-10 right-10 w-48 h-48 border-2 border-primary-foreground/20 rounded-full" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary-foreground/10 mb-6">
            <Target className="w-8 h-8 text-primary-foreground" />
          </div>
          
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6 text-primary-foreground">
            {t('target.title')}
          </h2>
          
          <p className="text-xl text-primary-foreground/90 leading-relaxed">
            {t('target.text')}
          </p>
        </div>
      </div>
    </section>
  );
};
