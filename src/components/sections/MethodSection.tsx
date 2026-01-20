import { useLanguage } from '@/contexts/LanguageContext';
import { BookOpen, Wrench, Users2, GraduationCap } from 'lucide-react';

const methods = [
  { key: 'theory', icon: BookOpen, color: 'sage' },
  { key: 'apply', icon: Wrench, color: 'amber' },
  { key: 'groups', icon: Users2, color: 'teal' },
  { key: 'mentor', icon: GraduationCap, color: 'chocolate' },
];

export const MethodSection = () => {
  const { t } = useLanguage();

  return (
    <section className="py-24 bg-cream-dark relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6 text-gradient-earth">
            {t('method.title')}
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            {t('method.subtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {methods.map((method, index) => {
            const Icon = method.icon;
            const colorClasses: Record<string, { bg: string; icon: string }> = {
              sage: { bg: 'bg-sage', icon: 'text-primary-foreground' },
              amber: { bg: 'bg-amber', icon: 'text-amber-foreground' },
              teal: { bg: 'bg-teal', icon: 'text-primary-foreground' },
              chocolate: { bg: 'bg-chocolate', icon: 'text-primary-foreground' },
            };
            const colors = colorClasses[method.color];

            return (
              <div
                key={method.key}
                className="group relative bg-background rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all duration-500 border border-border hover:border-sage/30"
              >
                {/* Number indicator */}
                <div className="absolute -top-3 -left-3 w-8 h-8 rounded-full bg-amber text-amber-foreground flex items-center justify-center text-sm font-bold shadow-md">
                  {index + 1}
                </div>

                <div
                  className={`w-12 h-12 rounded-xl ${colors.bg} flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110`}
                >
                  <Icon className={`w-6 h-6 ${colors.icon}`} />
                </div>

                <h3 className="font-display text-xl font-bold mb-3 text-foreground">
                  {t(`method.${method.key}.title`)}
                </h3>

                <p className="text-muted-foreground text-sm leading-relaxed">
                  {t(`method.${method.key}.text`)}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
