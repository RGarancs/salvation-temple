import { useLanguage } from '@/contexts/LanguageContext';
import { Eye, Target, Wrench, ListChecks, Repeat, ArrowRight, Sparkles } from 'lucide-react';

const steps = [
  { num: '01', key: '1', icon: Eye, color: 'sage', gradient: 'from-sage to-sage-dark' },
  { num: '02', key: '2', icon: Target, color: 'teal', gradient: 'from-teal to-teal-dark' },
  { num: '03', key: '3', icon: Wrench, color: 'amber', gradient: 'from-amber to-amber-dark' },
  { num: '04', key: '4', icon: ListChecks, color: 'olive', gradient: 'from-olive to-sage-dark' },
  { num: '05', key: '5', icon: Repeat, color: 'chocolate', gradient: 'from-chocolate to-chocolate-dark' },
];

export const ApproachSection = () => {
  const { t } = useLanguage();

  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-teal/5 blur-3xl" />
        <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-amber/5 blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 glass-teal px-4 py-2 rounded-full mb-6">
            <Sparkles className="w-4 h-4 text-teal" />
            <span className="text-sm font-semibold text-teal">5 Шагов</span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-gradient-earth">
            {t('approach.title')}
          </h2>
        </div>

        <div className="relative max-w-6xl mx-auto">
          {/* Connection line for desktop */}
          <div className="absolute left-0 right-0 top-1/2 h-1 bg-gradient-to-r from-sage via-amber to-chocolate hidden lg:block transform -translate-y-1/2 rounded-full opacity-30" />

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 lg:gap-4">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const colorClasses: Record<string, { num: string; bg: string; icon: string; glass: string }> = {
                sage: { num: 'text-sage', bg: 'bg-gradient-to-br from-sage to-sage-dark', icon: 'text-primary-foreground', glass: 'glass-sage' },
                teal: { num: 'text-teal', bg: 'bg-gradient-to-br from-teal to-teal-dark', icon: 'text-primary-foreground', glass: 'glass-teal' },
                amber: { num: 'text-amber', bg: 'bg-gradient-to-br from-amber to-amber-dark', icon: 'text-primary-foreground', glass: 'glass-amber' },
                olive: { num: 'text-olive', bg: 'bg-gradient-to-br from-olive to-sage-dark', icon: 'text-primary-foreground', glass: 'glass-sage' },
                chocolate: { num: 'text-chocolate', bg: 'bg-gradient-to-br from-chocolate-light to-chocolate', icon: 'text-primary-foreground', glass: 'glass-chocolate' },
              };
              const colors = colorClasses[step.color];

              return (
                <div
                  key={step.key}
                  className="group relative flex flex-col items-center text-center"
                >
                  {/* Step number */}
                  <span className={`font-display text-5xl font-extrabold ${colors.num} mb-4 opacity-20 group-hover:opacity-100 transition-all duration-300 group-hover:scale-110`}>
                    {step.num}
                  </span>

                  {/* Icon with gradient background */}
                  <div className={`relative w-20 h-20 rounded-2xl ${colors.bg} flex items-center justify-center mb-5 transition-all duration-300 group-hover:scale-110 group-hover:shadow-xl shadow-lg`}>
                    <Icon className={`w-10 h-10 ${colors.icon}`} />
                    {/* Glow effect on hover */}
                    <div className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${colors.glass}`} />
                  </div>

                  {/* Title */}
                  <h3 className="font-display text-xl font-bold mb-2 text-foreground">
                    {t(`approach.${step.key}.title`)}
                  </h3>

                  {/* Text */}
                  <p className="text-sm text-muted-foreground leading-relaxed max-w-[200px]">
                    {t(`approach.${step.key}.text`)}
                  </p>

                  {/* Arrow for larger screens */}
                  {index < steps.length - 1 && (
                    <div className="hidden lg:flex absolute top-1/3 -right-2 items-center justify-center w-8 h-8 rounded-full bg-background border border-border text-muted-foreground z-10">
                      <ArrowRight className="w-4 h-4" />
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
