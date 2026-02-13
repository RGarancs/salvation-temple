import { useLanguage } from '@/contexts/LanguageContext';
import { BookOpen } from 'lucide-react';

export const PhilosophySection = () => {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-24 bg-cream-dark dark:bg-card relative overflow-hidden">
      {/* Subtle decorative background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-sunset/5 blob-alt blur-2xl" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-amber/5 blob blur-2xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-br from-sunset/20 to-coral/20 mb-6">
            <BookOpen className="w-7 h-7 text-sunset" />
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
