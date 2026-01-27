import { useLanguage } from '@/contexts/LanguageContext';
import { Heart, MessageCircle, HandHeart } from 'lucide-react';

export const CareSection = () => {
  const { t } = useLanguage();

  return (
    <section id="care" className="py-24 bg-cream-dark">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-br from-coral/20 to-sunset/20 mb-6">
            <Heart className="w-7 h-7 text-coral" />
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-gradient-earth mb-4">
            {t('care.title')}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {t('care.subtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Prayer Support */}
          <div className="card-warm p-8 text-center">
            <div className="w-16 h-16 rounded-full bg-sunset/10 flex items-center justify-center mx-auto mb-6">
              <HandHeart className="w-8 h-8 text-sunset" />
            </div>
            <h3 className="font-display text-2xl font-bold text-foreground mb-4">
              {t('care.prayer.title')}
            </h3>
            <p className="text-muted-foreground mb-6">
              {t('care.prayer.desc')}
            </p>
            <a
              href="#prayer-request"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-sunset to-coral text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
            >
              {t('care.prayer.cta')}
            </a>
          </div>

          {/* Counseling */}
          <div className="card-warm p-8 text-center">
            <div className="w-16 h-16 rounded-full bg-amber/10 flex items-center justify-center mx-auto mb-6">
              <MessageCircle className="w-8 h-8 text-amber" />
            </div>
            <h3 className="font-display text-2xl font-bold text-foreground mb-4">
              {t('care.counseling.title')}
            </h3>
            <p className="text-muted-foreground mb-6">
              {t('care.counseling.desc')}
            </p>
            <a
              href="mailto:salvtemp117@gmail.com"
              className="inline-flex items-center gap-2 glass-amber px-6 py-3 rounded-full font-semibold text-foreground transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
            >
              {t('care.counseling.cta')}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
