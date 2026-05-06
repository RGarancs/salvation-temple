import { useEffect, useState } from 'react';
import { LanguageProvider } from '@/contexts/LanguageContext';
import { ChurchHeader } from '@/components/ChurchHeader';
import { ChurchFooter } from '@/components/sections/ChurchFooter';
import { useLanguage } from '@/contexts/LanguageContext';
import { Quote, Heart } from 'lucide-react';
import galleryCommunity from '@/assets/gallery-community.jpg';
import { bordeauxCardStyle } from '@/styles/bordeaux';
import { BordeauxOverlay } from '@/components/ui/bordeaux-overlay';
import { usePageMeta } from '@/hooks/usePageMeta';
import { BreadcrumbJsonLd } from '@/components/seo/JsonLd';
import { supabase } from '@/integrations/supabase/client';

interface DbTestimonial {
  id: string;
  name: Record<string, string>;
  before_text: Record<string, string>;
  encounter_text: Record<string, string>;
  after_text: Record<string, string>;
}

const fallbackKeys = ['testimony1', 'testimony2', 'testimony3', 'testimony4', 'testimony5'];

const TestimoniesContent = () => {
  const { t, language } = useLanguage();
  const [dbItems, setDbItems] = useState<DbTestimonial[]>([]);
  usePageMeta({
    titleKey: 'meta.testimonies.title',
    descriptionKey: 'meta.testimonies.description',
    canonicalPath: '/testimonies',
  });

  useEffect(() => {
    supabase.from('testimonials').select('*').eq('published', true).order('sort_order').then(({ data }) => {
      if (data) setDbItems(data as any);
    });
  }, []);

  const pick = (obj: Record<string, string>) => obj?.[language] || obj?.en || obj?.ru || '';

  return (
    <section className="page-py min-h-screen relative overflow-hidden bg-gradient-to-b from-chocolate-dark via-chocolate to-chocolate-dark">
      <BreadcrumbJsonLd pageName={t('testimonies.title')} pagePath="/testimonies" />
      {/* Background image with opacity */}
      <div className="absolute inset-0">
        <img
          src={galleryCommunity}
          alt=""
          loading="lazy"
          className="w-full h-full object-cover opacity-15"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-chocolate-dark/90 via-chocolate/80 to-chocolate-dark" />
      </div>

      {/* Soft glowing overlay */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-20 right-10 w-96 h-96 rounded-full bg-amber/15 blur-3xl animate-float-slow" />
        <div className="absolute bottom-20 left-10 w-80 h-80 rounded-full bg-sunset/10 blur-3xl animate-float" />
        <div className="absolute top-1/2 left-1/3 w-64 h-64 rounded-full bg-terracotta/10 blur-3xl animate-float" />
      </div>

      <div className="section-container relative z-10">
        <div className="section-header">
          <div className="section-icon bg-gradient-to-br from-coral/20 to-sunset/20">
            <Heart className="w-7 h-7 text-coral" />
          </div>
          <h1 className="section-title text-gradient-earth mb-4">
            {t('testimonies.title')}
          </h1>
          <p className="text-foreground/70 max-w-2xl mx-auto">
            {t('testimonies.subtitle')}
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {dbItems.length > 0 ? (
            dbItems.map((item) => (
              <div
                key={item.id}
                className="relative overflow-hidden rounded-2xl p-8 transition-all duration-500 hover:shadow-2xl hover:-translate-y-1 group border border-white/5"
                style={bordeauxCardStyle}
              >
                <BordeauxOverlay />
                <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-2xl bg-shine" />
                <div className="relative z-10 flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0 border border-white/10">
                    <Quote className="w-6 h-6 text-sunset-light" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-display text-xl font-bold text-white/95 mb-2">{pick(item.name)}</h3>
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-sunset-light uppercase tracking-wide mb-2">{t('testimonies.before')}</h4>
                      <p className="text-white/70 whitespace-pre-line">{pick(item.before_text)}</p>
                    </div>
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-coral uppercase tracking-wide mb-2">{t('testimonies.encounter')}</h4>
                      <p className="text-white/70 whitespace-pre-line">{pick(item.encounter_text)}</p>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-amber uppercase tracking-wide mb-2">{t('testimonies.after')}</h4>
                      <p className="text-white/70 whitespace-pre-line">{pick(item.after_text)}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            fallbackKeys.map((key) => (
              <div
                key={key}
                className="relative overflow-hidden rounded-2xl p-8 transition-all duration-500 hover:shadow-2xl hover:-translate-y-1 group border border-white/5"
                style={bordeauxCardStyle}
              >
                <BordeauxOverlay />
                <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-2xl bg-shine" />
                <div className="relative z-10 flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0 border border-white/10">
                    <Quote className="w-6 h-6 text-sunset-light" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-display text-xl font-bold text-white/95 mb-2">{t(`testimonies.${key}.name`)}</h3>
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-sunset-light uppercase tracking-wide mb-2">{t('testimonies.before')}</h4>
                      <p className="text-white/70">{t(`testimonies.${key}.before`)}</p>
                    </div>
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-coral uppercase tracking-wide mb-2">{t('testimonies.encounter')}</h4>
                      <p className="text-white/70">{t(`testimonies.${key}.encounter`)}</p>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-amber uppercase tracking-wide mb-2">{t('testimonies.after')}</h4>
                      <p className="text-white/70">{t(`testimonies.${key}.after`)}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        <div className="text-center mt-12">
          <p className="text-foreground/70 mb-4">
            {t('testimonies.share')}
          </p>
          <a
            href="/#contacts"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-sunset to-coral text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 hover:shadow-lg"
          >
            {t('testimonies.shareButton')}
          </a>
        </div>
      </div>
    </section>
  );
};

const Testimonies = () => {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-background font-body">
        <ChurchHeader />
        <TestimoniesContent />
        <ChurchFooter />
      </div>
    </LanguageProvider>
  );
};

export default Testimonies;