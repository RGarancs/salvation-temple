import { LanguageProvider } from '@/contexts/LanguageContext';
import { ChurchHeader } from '@/components/ChurchHeader';
import { ChurchFooter } from '@/components/sections/ChurchFooter';
import { useLanguage } from '@/contexts/LanguageContext';
import { Quote, Heart } from 'lucide-react';

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

  return (
    <section className="py-24 bg-cream-dark min-h-screen pt-32">
      <div className="container mx-auto px-4">
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
            <div key={testimony.key} className="card-warm p-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-sunset/20 to-coral/20 flex items-center justify-center flex-shrink-0">
                  <Quote className="w-6 h-6 text-sunset" />
                </div>
                <div className="flex-1">
                  <h3 className="font-display text-xl font-bold text-foreground mb-2">
                    {t(`testimonies.${testimony.key}.name`)}
                  </h3>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-sunset uppercase tracking-wide mb-2">
                      {t('testimonies.before')}
                    </h4>
                    <p className="text-muted-foreground">
                      {t(`testimonies.${testimony.key}.before`)}
                    </p>
                  </div>

                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-coral uppercase tracking-wide mb-2">
                      {t('testimonies.encounter')}
                    </h4>
                    <p className="text-muted-foreground">
                      {t(`testimonies.${testimony.key}.encounter`)}
                    </p>
                  </div>

                  <div>
                    <h4 className="text-sm font-semibold text-amber uppercase tracking-wide mb-2">
                      {t('testimonies.after')}
                    </h4>
                    <p className="text-muted-foreground">
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
            href="#contacts"
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
