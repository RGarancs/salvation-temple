import { useLanguage } from '@/contexts/LanguageContext';
import { BookOpen } from 'lucide-react';

export const PhilosophySection = () => {
  const { t } = useLanguage();

  return (
    <section id="about" className="section-py bg-cream-dark dark:bg-card relative overflow-hidden">
      {/* Subtle decorative background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-sunset/5 blob-alt blur-2xl" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-amber/5 blob blur-2xl" />
      </div>

      <div className="section-container relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <div className="section-icon bg-gradient-to-br from-sunset/20 to-coral/20">
            <BookOpen className="w-7 h-7 text-sunset" />
          </div>
          
          <h2 className="section-title mb-8 text-gradient-earth">
            {t('philosophy.title')}
          </h2>
          
          <p className="text-lg md:text-xl text-foreground/70 leading-relaxed font-body">
            {t('philosophy.text')}
          </p>
        </div>
      </div>
    </section>
  );
};
