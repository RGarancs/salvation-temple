import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Eye, Target, Wrench, ListChecks, Repeat, Route, ChevronDown } from 'lucide-react';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';

const steps = [
  { num: '01', key: '1', icon: Eye, color: 'sunset' },
  { num: '02', key: '2', icon: Target, color: 'terracotta' },
  { num: '03', key: '3', icon: Wrench, color: 'amber' },
  { num: '04', key: '4', icon: ListChecks, color: 'coral' },
  { num: '05', key: '5', icon: Repeat, color: 'burnt' },
];

const colorMap: Record<string, string> = {
  sunset: 'bg-sunset',
  terracotta: 'bg-terracotta',
  amber: 'bg-amber',
  coral: 'bg-coral',
  burnt: 'bg-burnt',
};

const textColorMap: Record<string, string> = {
  sunset: 'text-sunset',
  terracotta: 'text-terracotta',
  amber: 'text-amber',
  coral: 'text-coral',
  burnt: 'text-burnt',
};

export const ApproachSection = () => {
  const { t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Subtle decorative elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-sunset/5 blur-3xl" />
        <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-amber/5 blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <Collapsible open={isOpen} onOpenChange={setIsOpen}>
          <CollapsibleTrigger className="w-full">
            <div className="text-center mb-8 cursor-pointer group">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-br from-terracotta/20 to-burnt/20 mb-6">
                <Route className="w-7 h-7 text-terracotta" />
              </div>
              <div className="flex items-center justify-center gap-3">
                <h2 className="font-display text-4xl md:text-5xl font-bold text-gradient-earth">
                  {t('approach.title')}
                </h2>
                <ChevronDown className={`w-6 h-6 text-muted-foreground transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
              </div>
            </div>
          </CollapsibleTrigger>

          <CollapsibleContent className="overflow-hidden data-[state=open]:animate-accordion-down data-[state=closed]:animate-accordion-up">
            <div className="relative max-w-5xl mx-auto mt-8">
              {/* Connection line for desktop */}
              <div className="absolute left-0 right-0 top-16 h-0.5 bg-gradient-to-r from-sunset via-amber to-burnt hidden lg:block opacity-20 rounded-full" />

              <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-6">
                {steps.map((step) => {
                  const Icon = step.icon;
                  return (
                    <div
                      key={step.key}
                      className="group flex flex-col items-center text-center"
                    >
                      {/* Step number */}
                      <span className={`font-display text-4xl font-extrabold ${textColorMap[step.color]} mb-4 opacity-30 group-hover:opacity-100 transition-all duration-300`}>
                        {step.num}
                      </span>

                      {/* Icon */}
                      <div className={`w-16 h-16 rounded-2xl ${colorMap[step.color]} flex items-center justify-center mb-5 transition-all duration-300 group-hover:scale-105 shadow-lg`}>
                        <Icon className="w-8 h-8 text-white" />
                      </div>

                      {/* Title */}
                      <h3 className="font-display text-lg font-bold mb-2 text-foreground">
                        {t(`approach.${step.key}.title`)}
                      </h3>

                      {/* Text */}
                      <p className="text-sm text-muted-foreground leading-relaxed max-w-[180px]">
                        {t(`approach.${step.key}.text`)}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </CollapsibleContent>
        </Collapsible>
      </div>
    </section>
  );
};
