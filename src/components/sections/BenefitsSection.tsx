import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Compass, Shield, Lightbulb, Users, Sparkles, ChevronDown } from 'lucide-react';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';

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
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="py-12 md:py-16 lg:py-24 bg-background relative overflow-hidden">
      {/* Subtle decorative */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 right-20 w-64 h-64 bg-amber/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-48 h-48 bg-sunset/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
        <Collapsible open={isOpen} onOpenChange={setIsOpen}>
          <CollapsibleTrigger className="w-full">
            <div className="text-center mb-8 cursor-pointer group">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-br from-sunset/20 to-amber/20 mb-6">
                <Sparkles className="w-7 h-7 text-sunset" />
              </div>
              <div className="flex items-center justify-center gap-3">
                <h2 className="font-display text-4xl md:text-5xl font-bold text-gradient-earth">
                  {t('benefits.title')}
                </h2>
                <ChevronDown className={`w-6 h-6 text-foreground/70 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
              </div>
            </div>
          </CollapsibleTrigger>

          <CollapsibleContent className="overflow-hidden data-[state=open]:animate-collapsible-down data-[state=closed]:animate-collapsible-up">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-8">
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
                    
                    <p className="text-foreground/70 leading-relaxed text-sm">
                      {t(`benefits.${benefit.key}.text`)}
                    </p>
                  </div>
                );
              })}
            </div>
          </CollapsibleContent>
        </Collapsible>
      </div>
    </section>
  );
};
