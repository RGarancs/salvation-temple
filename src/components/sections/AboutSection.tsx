import { useLanguage } from '@/contexts/LanguageContext';
import { Target, Compass, Heart, BookOpen, Cross, Users, Sparkles, ArrowRight } from 'lucide-react';

export const AboutSection = () => {
  const { t } = useLanguage();

  const values = [
    { key: 'christ', icon: Cross, color: 'sunset' },
    { key: 'bible', icon: BookOpen, color: 'coral' },
    { key: 'discipleship', icon: Users, color: 'amber' },
    { key: 'mission', icon: Sparkles, color: 'terracotta' },
  ];

  const colorMap: Record<string, { bg: string; icon: string }> = {
    sunset: { bg: 'bg-sunset/10', icon: 'text-sunset' },
    coral: { bg: 'bg-coral/10', icon: 'text-coral' },
    amber: { bg: 'bg-amber/10', icon: 'text-amber' },
    terracotta: { bg: 'bg-terracotta/10', icon: 'text-terracotta' },
  };

  return (
    <section id="about" className="py-24 bg-cream-dark">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-br from-sunset/20 to-amber/20 mb-6">
            <Compass className="w-7 h-7 text-sunset" />
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-gradient-earth mb-4">
            {t('about.title')}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            {t('about.intro')}
          </p>
        </div>

        {/* Vision */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="card-warm p-8 text-center">
            <h3 className="font-display text-2xl font-bold text-gradient-warm mb-4">
              {t('about.vision.title')}
            </h3>
            <p className="text-muted-foreground text-lg leading-relaxed">
              {t('about.vision.text')}
            </p>
          </div>
        </div>

        {/* Values - 4 cards with new structure */}
        <div className="max-w-5xl mx-auto">
          <h3 className="font-display text-2xl font-bold text-center text-gradient-earth mb-8">
            {t('about.values.title')}
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value) => {
              const Icon = value.icon;
              const colors = colorMap[value.color];
              return (
                <div key={value.key} className="card-warm p-6">
                  <div className={`w-14 h-14 rounded-xl ${colors.bg} flex items-center justify-center mb-4`}>
                    <Icon className={`w-7 h-7 ${colors.icon}`} />
                  </div>
                  <h4 className="font-display text-lg font-bold mb-2 text-foreground">
                    {t(`about.values.${value.key}.title`)}
                  </h4>
                  <p className="text-muted-foreground text-sm mb-2">
                    {t(`about.values.${value.key}.desc`)}
                  </p>
                  <ul className="text-muted-foreground text-xs space-y-1">
                    <li className="flex items-start gap-1">
                      <ArrowRight className="w-3 h-3 mt-0.5 text-muted-foreground/50" />
                      {t(`about.values.${value.key}.sub1`)}
                    </li>
                    <li className="flex items-start gap-1">
                      <ArrowRight className="w-3 h-3 mt-0.5 text-muted-foreground/50" />
                      {t(`about.values.${value.key}.sub2`)}
                    </li>
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
