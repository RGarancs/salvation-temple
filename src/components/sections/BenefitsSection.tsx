import { useLanguage } from '@/contexts/LanguageContext';
import { Compass, Shield, Lightbulb, Users } from 'lucide-react';

const benefits = [
  { key: 'clarity', icon: Compass, color: 'sage' },
  { key: 'core', icon: Shield, color: 'teal' },
  { key: 'wisdom', icon: Lightbulb, color: 'amber' },
  { key: 'connections', icon: Users, color: 'olive' },
];

export const BenefitsSection = () => {
  const { t } = useLanguage();

  return (
    <section className="py-24 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4">
        <h2 className="font-display text-4xl md:text-5xl font-bold text-center mb-16 text-gradient-earth">
          {t('benefits.title')}
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            const colorClasses: Record<string, { bg: string; icon: string; border: string }> = {
              sage: { bg: 'bg-sage/10', icon: 'text-sage', border: 'border-sage/20' },
              teal: { bg: 'bg-teal/10', icon: 'text-teal', border: 'border-teal/20' },
              amber: { bg: 'bg-amber/10', icon: 'text-amber', border: 'border-amber/20' },
              olive: { bg: 'bg-olive/10', icon: 'text-olive', border: 'border-olive/20' },
            };
            const colors = colorClasses[benefit.color];

            return (
              <div
                key={benefit.key}
                className="group card-warm p-6 hover:border-sage/30 transition-all duration-500"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div
                  className={`w-14 h-14 rounded-2xl ${colors.bg} ${colors.border} border flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110`}
                >
                  <Icon className={`w-7 h-7 ${colors.icon}`} />
                </div>
                
                <h3 className="font-display text-2xl font-bold mb-3 text-foreground">
                  {t(`benefits.${benefit.key}.title`)}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed">
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
