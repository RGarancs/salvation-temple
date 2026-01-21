import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Target, ChevronDown, Check, Circle } from 'lucide-react';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';

const personas = [
  'target.persona.1',
  'target.persona.2',
  'target.persona.3',
  'target.persona.4',
  'target.persona.5',
  'target.persona.6',
  'target.persona.7',
  'target.persona.8',
];

export const TargetSection = () => {
  const { t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [checkedItems, setCheckedItems] = useState<number[]>([]);

  const toggleCheck = (index: number) => {
    setCheckedItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  return (
    <section className="py-20 bg-sunset relative overflow-hidden">
      {/* Subtle decorative elements */}
      <div className="absolute inset-0 pointer-events-none opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 border-2 border-white/20 rounded-full" />
        <div className="absolute bottom-10 right-10 w-48 h-48 border-2 border-white/20 rounded-full" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <Collapsible open={isOpen} onOpenChange={setIsOpen}>
          <CollapsibleTrigger className="w-full">
            <div className="max-w-3xl mx-auto text-center cursor-pointer group">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-white/10 mb-6">
                <Target className="w-7 h-7 text-white" />
              </div>
              
              <div className="flex items-center justify-center gap-3">
                <h2 className="font-display text-3xl md:text-4xl font-bold text-white">
                  {t('target.title')}
                </h2>
                <ChevronDown className={`w-6 h-6 text-white/70 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
              </div>
              
              <p className="text-lg text-white/85 leading-relaxed mt-4">
                {t('target.text')}
              </p>
            </div>
          </CollapsibleTrigger>

          <CollapsibleContent className="overflow-hidden data-[state=open]:animate-accordion-down data-[state=closed]:animate-accordion-up">
            <div className="max-w-2xl mx-auto mt-8 space-y-3">
              <p className="text-center text-white/70 text-sm mb-4 font-medium uppercase tracking-wide">
                {t('target.checklist.title')}
              </p>
              {personas.map((personaKey, index) => (
                <button
                  key={index}
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleCheck(index);
                  }}
                  className={`w-full flex items-start gap-3 p-4 rounded-xl transition-all duration-300 text-left ${
                    checkedItems.includes(index)
                      ? 'bg-white/20 border border-white/30'
                      : 'bg-white/5 border border-white/10 hover:bg-white/10'
                  }`}
                >
                  <div className={`w-5 h-5 rounded flex-shrink-0 mt-0.5 flex items-center justify-center transition-colors ${
                    checkedItems.includes(index)
                      ? 'bg-white text-sunset'
                      : 'border-2 border-white/50'
                  }`}>
                    {checkedItems.includes(index) ? (
                      <Check className="w-3 h-3" />
                    ) : null}
                  </div>
                  <span className="text-white/90 text-sm leading-relaxed">
                    {t(personaKey)}
                  </span>
                </button>
              ))}
            </div>
          </CollapsibleContent>
        </Collapsible>
      </div>
    </section>
  );
};
