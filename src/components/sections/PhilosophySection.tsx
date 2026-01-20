import { useLanguage } from '@/contexts/LanguageContext';
import { Quote } from 'lucide-react';

export const PhilosophySection = () => {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-24 bg-cream-dark relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-sage/5 blob-alt" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-amber/5 blob" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-sage/10 mb-6">
            <Quote className="w-8 h-8 text-sage" />
          </div>
          
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-8 text-gradient-earth">
            {t('philosophy.title')}
          </h2>
          
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed font-body">
            {t('philosophy.text')}
          </p>
        </div>
      </div>
    </section>
  );
};
