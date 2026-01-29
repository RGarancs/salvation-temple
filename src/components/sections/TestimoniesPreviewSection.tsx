import { useLanguage } from '@/contexts/LanguageContext';
import { Heart, ArrowRight, Quote } from 'lucide-react';
import { Link } from 'react-router-dom';

export const TestimoniesPreviewSection = () => {
  const { t } = useLanguage();

  const testimonies = [
    { key: 'testimony1' },
    { key: 'testimony2' },
    { key: 'testimony3' },
  ];

  return (
    <section id="testimonies" className="py-24 bg-cream-dark">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-br from-coral/20 to-sunset/20 mb-6">
            <Heart className="w-7 h-7 text-coral" />
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-gradient-earth mb-4">
            {t('testimonies.title')}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {t('testimonies.subtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {testimonies.map((testimony) => (
            <div key={testimony.key} className="card-warm p-6">
              <Quote className="w-8 h-8 text-sunset/40 mb-4" />
              <h3 className="font-display text-lg font-bold text-foreground mb-2">
                {t(`testimonies.${testimony.key}.name`)}
              </h3>
              <p className="text-muted-foreground text-sm line-clamp-4">
                {t(`testimonies.${testimony.key}.summary`)}
              </p>
            </div>
          ))}
        </div>

        {/* View All Testimonies Button */}
        <div className="text-center mt-10">
          <Link
            to="/testimonies"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-sunset to-coral text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
          >
            {t('testimonies.viewAll')}
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
};
