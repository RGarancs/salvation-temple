import { useLanguage } from '@/contexts/LanguageContext';
import { Compass, Shield, Lightbulb, Users, Sparkles } from 'lucide-react';

const benefits = [
  { key: 'clarity', icon: Compass, color: 'sage', gradient: 'from-sage to-sage-dark' },
  { key: 'core', icon: Shield, color: 'teal', gradient: 'from-teal to-teal-dark' },
  { key: 'wisdom', icon: Lightbulb, color: 'amber', gradient: 'from-amber to-amber-dark' },
  { key: 'connections', icon: Users, color: 'olive', gradient: 'from-olive to-sage-dark' },
];

export const BenefitsSection = () => {
  const { t } = useLanguage();

  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 right-20 w-64 h-64 bg-amber/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-48 h-48 bg-teal/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 glass-amber px-4 py-2 rounded-full mb-6">
            <Sparkles className="w-4 h-4 text-amber" />
            <span className="text-sm font-semibold text-amber">Преимущества</span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-gradient-earth">
            {t('benefits.title')}
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div
                key={benefit.key}
                className="group card-glass p-6 hover:border-sage/30 transition-all duration-500"
              >
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${benefit.gradient} flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110 shadow-lg`}>
                  <Icon className="w-8 h-8 text-primary-foreground" />
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
