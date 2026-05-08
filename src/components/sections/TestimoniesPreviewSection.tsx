import { useEffect, useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Heart, ArrowRight, Quote } from 'lucide-react';
import { Link } from 'react-router-dom';
import { supabase } from '@/integrations/supabase/client';

interface PreviewItem { key: string; name: string; summary: string; }

export const TestimoniesPreviewSection = () => {
  const { t, language } = useLanguage();
  const [dbRows, setDbRows] = useState<any[] | null>(null);

  useEffect(() => {
    supabase.from('testimonials').select('*').eq('published', true).order('sort_order').limit(3)
      .then(({ data }) => { if (data) setDbRows(data); });
  }, []);

  const fallback: PreviewItem[] = [
    { key: 'testimony1', name: t('testimonies.testimony1.name'), summary: t('testimonies.testimony1.summary') },
    { key: 'testimony2', name: t('testimonies.testimony2.name'), summary: t('testimonies.testimony2.summary') },
    { key: 'testimony3', name: t('testimonies.testimony3.name'), summary: t('testimonies.testimony3.summary') },
  ];

  const testimonies: PreviewItem[] =
    dbRows && dbRows.length > 0
      ? dbRows.map((r: any) => ({
          key: r.id,
          name: r.name?.[language] || r.name?.en || 'Anonymous',
          summary: r.encounter_text?.[language] || r.before_text?.[language] || r.encounter_text?.en || '',
        }))
      : fallback;

  return (
    <section id="testimonies" className="section-py bg-cream-dark">
      <div className="section-container">
        <div className="section-header">
          <div className="section-icon bg-gradient-to-br from-coral/20 to-sunset/20">
            <Heart className="w-7 h-7 text-coral" />
          </div>
          <h2 className="section-title text-gradient-earth mb-4">
            {t('testimonies.title')}
          </h2>
          <p className="text-subtitle max-w-2xl mx-auto">
            {t('testimonies.subtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-4 md:gap-6 max-w-5xl mx-auto">
          {testimonies.map((testimony) => (
            <div key={testimony.key} className="card-warm p-6">
              <Quote className="w-8 h-8 text-sunset/40 mb-4" />
              <h3 className="font-display text-lg font-bold text-foreground mb-2">
                {testimony.name}
              </h3>
              <p className="text-foreground/70 text-sm line-clamp-4">
                {testimony.summary}
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
