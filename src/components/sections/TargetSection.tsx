import { useLanguage } from '@/contexts/LanguageContext';
import { Target } from 'lucide-react';

export const TargetSection = () => {
  const { t } = useLanguage();

  return (
    <section className="py-20 bg-sunset relative overflow-hidden">
      {/* Subtle decorative elements */}
      <div className="absolute inset-0 pointer-events-none opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 border-2 border-white/20 rounded-full" />
        <div className="absolute bottom-10 right-10 w-48 h-48 border-2 border-white/20 rounded-full" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-white/10 mb-6">
            <Target className="w-7 h-7 text-white" />
          </div>
          
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-6 text-white">
            {t('target.title')}
          </h2>
          
          <p className="text-lg text-white/85 leading-relaxed">
            {t('target.text')}
          </p>
        </div>
      </div>
    </section>
  );
};
