import { useLanguage } from '@/contexts/LanguageContext';
import { Compass, Shield, Lightbulb, Users } from 'lucide-react';

const benefits = [
  { key: 'clarity', icon: Compass, color: 'sunset' },
  { key: 'core', icon: Shield, color: 'terracotta' },
  { key: 'wisdom', icon: Lightbulb, color: 'amber' },
  { key: 'connections', icon: Users, color: 'coral' },
];

const colorMap: Record<string, string> = {
  sunset: 'bg-sunset',
  terracotta: 'bg-terracotta',
  amber: 'bg-amber',
  coral: 'bg-coral',
};

export const BenefitsSection = () => {
  const { t } = useLanguage();

  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Subtle decorative */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 right-20 w-64 h-64 bg-amber/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-48 h-48 bg-sunset/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-gradient-earth">
            {t('benefits.title')}
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit) => {
            const Icon = benefit.icon;
            return (
              <div
                key={benefit.key}
                className="group text-center"
              >
                <div className={`w-16 h-16 rounded-2xl ${colorMap[benefit.color]} flex items-center justify-center mx-auto mb-5 transition-transform duration-300 group-hover:scale-110 shadow-lg`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="font-display text-xl font-bold mb-3 text-foreground">
                  {t(`benefits.${benefit.key}.title`)}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed text-sm">
                  {t(`benefits.${benefit.key}.text`)}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
