import { useLanguage } from '@/contexts/LanguageContext';
import { Eye, Target, Wrench, ListChecks, Repeat } from 'lucide-react';

const steps = [
  { num: '01', key: '1', icon: Eye, color: 'sage' },
  { num: '02', key: '2', icon: Target, color: 'teal' },
  { num: '03', key: '3', icon: Wrench, color: 'amber' },
  { num: '04', key: '4', icon: ListChecks, color: 'olive' },
  { num: '05', key: '5', icon: Repeat, color: 'chocolate' },
];

export const ApproachSection = () => {
  const { t } = useLanguage();

  return (
    <section className="py-24 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4">
        <h2 className="font-display text-4xl md:text-5xl font-bold text-center mb-16 text-gradient-earth">
          {t('approach.title')}
        </h2>

        <div className="relative max-w-5xl mx-auto">
          {/* Connection line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-sage via-amber to-chocolate hidden lg:block transform -translate-x-1/2" />

          <div className="space-y-8 lg:space-y-0 lg:grid lg:grid-cols-5 lg:gap-4">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const colorClasses: Record<string, { num: string; bg: string; icon: string }> = {
                sage: { num: 'text-sage', bg: 'bg-sage/10', icon: 'text-sage' },
                teal: { num: 'text-teal', bg: 'bg-teal/10', icon: 'text-teal' },
                amber: { num: 'text-amber', bg: 'bg-amber/10', icon: 'text-amber' },
                olive: { num: 'text-olive', bg: 'bg-olive/10', icon: 'text-olive' },
                chocolate: { num: 'text-chocolate', bg: 'bg-chocolate/10', icon: 'text-chocolate' },
              };
              const colors = colorClasses[step.color];

              return (
                <div
                  key={step.key}
                  className="group relative flex flex-col items-center text-center"
                >
                  {/* Step number */}
                  <span className={`font-display text-4xl font-bold ${colors.num} mb-3 opacity-30 group-hover:opacity-100 transition-opacity`}>
                    {step.num}
                  </span>

                  {/* Icon */}
                  <div className={`w-16 h-16 rounded-2xl ${colors.bg} flex items-center justify-center mb-4 transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg`}>
                    <Icon className={`w-8 h-8 ${colors.icon}`} />
                  </div>

                  {/* Title */}
                  <h3 className="font-display text-xl font-bold mb-2 text-foreground">
                    {t(`approach.${step.key}.title`)}
                  </h3>

                  {/* Text */}
                  <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
                    {t(`approach.${step.key}.text`)}
                  </p>

                  {/* Arrow for larger screens */}
                  {index < steps.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-4 transform translate-x-1/2 -translate-y-1/2 text-sage/30">
                      →
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
