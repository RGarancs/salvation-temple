import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { BookOpen, Wrench, Users2, GraduationCap, Brain, ChevronDown } from 'lucide-react';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';

const methods = [
  { key: 'theory', icon: BookOpen, color: 'sunset' },
  { key: 'apply', icon: Wrench, color: 'amber' },
  { key: 'groups', icon: Users2, color: 'terracotta' },
  { key: 'mentor', icon: GraduationCap, color: 'coral' },
];

const colorMap: Record<string, string> = {
  sunset: 'bg-sunset',
  amber: 'bg-amber',
  terracotta: 'bg-terracotta',
  coral: 'bg-coral',
};

export const MethodSection = () => {
  const { t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="py-12 md:py-16 lg:py-24 bg-cream-dark relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <Collapsible open={isOpen} onOpenChange={setIsOpen}>
          <CollapsibleTrigger className="w-full">
            <div className="text-center mb-8 cursor-pointer group">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-br from-amber/20 to-coral/20 mb-6">
                <Brain className="w-7 h-7 text-amber" />
              </div>
              <div className="flex items-center justify-center gap-3">
                <h2 className="font-display text-4xl md:text-5xl font-bold text-gradient-earth">
                  {t('method.title')}
                </h2>
                <ChevronDown className={`w-6 h-6 text-foreground/70 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
              </div>
              <p className="text-lg text-subtitle max-w-3xl mx-auto leading-relaxed mt-4">
                {t('method.subtitle')}
              </p>
            </div>
          </CollapsibleTrigger>

          <CollapsibleContent className="overflow-hidden data-[state=open]:animate-collapsible-down data-[state=closed]:animate-collapsible-up">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto mt-8">
              {methods.map((method, index) => {
                const Icon = method.icon;
                return (
                  <div
                    key={method.key}
                    className="group relative bg-background rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300 border border-border"
                  >
                    {/* Number indicator */}
                    <div className="absolute -top-3 -left-3 w-7 h-7 rounded-full bg-amber text-white flex items-center justify-center text-sm font-bold shadow-md">
                      {index + 1}
                    </div>

                    <div className={`w-12 h-12 rounded-xl ${colorMap[method.color]} flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-105`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>

                    <h3 className="font-display text-lg font-bold mb-3 text-foreground">
                      {t(`method.${method.key}.title`)}
                    </h3>

                    <p className="text-foreground/70 text-sm leading-relaxed">
                      {t(`method.${method.key}.text`)}
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
