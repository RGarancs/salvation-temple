import { LanguageProvider } from '@/contexts/LanguageContext';
import { ChurchHeader } from '@/components/ChurchHeader';
import { ChurchFooter } from '@/components/sections/ChurchFooter';
import { useLanguage } from '@/contexts/LanguageContext';
import { Quote, Heart } from 'lucide-react';
import galleryCommunity from '@/assets/gallery-community.jpg';

const TestimoniesContent = () => {
  const { t } = useLanguage();

  const testimonies = [
    {
      key: 'testimony1',
      name: { ru: 'Мария К.', en: 'Maria K.', lv: 'Marija K.' },
    },
    {
      key: 'testimony2',
      name: { ru: 'Алексей П.', en: 'Alexey P.', lv: 'Aleksejs P.' },
    },
    {
      key: 'testimony3',
      name: { ru: 'Елена С.', en: 'Elena S.', lv: 'Jeļena S.' },
    },
    {
      key: 'testimony4',
      name: { ru: 'Дмитрий В.', en: 'Dmitry V.', lv: 'Dmitrijs V.' },
    },
    {
      key: 'testimony5',
      name: { ru: 'Анна Л.', en: 'Anna L.', lv: 'Anna L.' },
    },
  ];

  // Dark bordeaux card style
  const bordeauxCardStyle = {
    background: 'linear-gradient(135deg, hsl(350 35% 18%) 0%, hsl(350 40% 12%) 100%)',
  };

  const bordeauxTextureOverlay = (
    <div className="absolute inset-0 opacity-20 rounded-2xl" style={{
      backgroundImage: `radial-gradient(circle at 20% 80%, hsl(350 30% 25%) 0%, transparent 50%),
                        radial-gradient(circle at 80% 20%, hsl(25 30% 25%) 0%, transparent 50%),
                        linear-gradient(135deg, transparent 0%, hsl(350 20% 20% / 0.5) 100%)`,
    }} />
  );

  return (
    <section className="py-24 min-h-screen pt-32 relative overflow-hidden">
      {/* Background image with opacity */}
      <div className="absolute inset-0">
        <img 
          src={galleryCommunity} 
          alt="" 
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-cream-dark/90 via-cream-dark/95 to-cream-dark" />
      </div>

      {/* Soft glowing overlay */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-20 right-10 w-96 h-96 rounded-full bg-coral/10 blur-3xl animate-float-slow" />
        <div className="absolute bottom-20 left-10 w-80 h-80 rounded-full bg-sunset/10 blur-3xl animate-float" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-br from-coral/20 to-sunset/20 mb-6">
            <Heart className="w-7 h-7 text-coral" />
          </div>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-gradient-earth mb-4">
            {t('testimonies.title')}
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {t('testimonies.subtitle')}
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {testimonies.map((testimony, index) => (
            <div 
              key={testimony.key} 
              className="relative overflow-hidden rounded-2xl p-8 transition-all duration-300 hover:shadow-xl group"
              style={bordeauxCardStyle}
            >
              {bordeauxTextureOverlay}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-2xl" style={{
                background: 'linear-gradient(135deg, transparent 0%, hsl(30 80% 70%) 50%, transparent 100%)',
              }} />
              <div className="relative z-10 flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0 border border-white/10">
                  <Quote className="w-6 h-6 text-sunset-light" />
                </div>
                <div className="flex-1">
                  <h3 className="font-display text-xl font-bold text-white/95 mb-2">
                    {t(`testimonies.${testimony.key}.name`)}
                  </h3>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-sunset-light uppercase tracking-wide mb-2">
                      {t('testimonies.before')}
                    </h4>
                    <p className="text-white/70">
                      {t(`testimonies.${testimony.key}.before`)}
                    </p>
                  </div>

                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-coral uppercase tracking-wide mb-2">
                      {t('testimonies.encounter')}
                    </h4>
                    <p className="text-white/70">
                      {t(`testimonies.${testimony.key}.encounter`)}
                    </p>
                  </div>

                  <div>
                    <h4 className="text-sm font-semibold text-amber uppercase tracking-wide mb-2">
                      {t('testimonies.after')}
                    </h4>
                    <p className="text-white/70">
                      {t(`testimonies.${testimony.key}.after`)}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
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