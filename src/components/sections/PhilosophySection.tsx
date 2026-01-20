import { useLanguage } from '@/contexts/LanguageContext';
import { Quote, Sparkles, BookOpen, Heart } from 'lucide-react';

export const PhilosophySection = () => {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-24 bg-cream-dark dark:bg-card relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-sage/5 blob-alt blur-2xl" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-amber/5 blob blur-2xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-teal/3 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 glass-sage px-4 py-2 rounded-full mb-6">
            <Sparkles className="w-4 h-4 text-sage" />
            <span className="text-sm font-semibold text-sage">Философия</span>
          </div>

          <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-sage to-teal mb-8 glow-sage">
            <Quote className="w-10 h-10 text-primary-foreground" />
          </div>
          
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-8 text-gradient-earth">
            {t('philosophy.title')}
          </h2>
          
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed font-body mb-8">
            {t('philosophy.text')}
          </p>

          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <div className="glass-sage px-5 py-3 rounded-xl flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-sage" />
              <span className="text-sm font-medium">Библейские истины</span>
            </div>
            <div className="glass-amber px-5 py-3 rounded-xl flex items-center gap-2">
              <Heart className="w-5 h-5 text-amber" />
              <span className="text-sm font-medium">Внутренний мир</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
