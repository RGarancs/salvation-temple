import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { Compass, Users, Heart, Brain, Wallet, Fingerprint, Church, Star, CircleDot, ChevronDown } from 'lucide-react';

const wheelSegments = [
  { key: 'purpose', icon: Compass, angle: 0, color: 'bg-sunset', quote: 'wheel.purpose.quote' },
  { key: 'people', icon: Users, angle: 45, color: 'bg-terracotta', quote: 'wheel.people.quote' },
  { key: 'body', icon: Heart, angle: 90, color: 'bg-amber', quote: 'wheel.body.quote' },
  { key: 'mind', icon: Brain, angle: 135, color: 'bg-cashmere', quote: 'wheel.mind.quote' },
  { key: 'finance', icon: Wallet, angle: 180, color: 'bg-burnt', quote: 'wheel.finance.quote' },
  { key: 'character', icon: Fingerprint, angle: 225, color: 'bg-chocolate-light', quote: 'wheel.character.quote' },
  { key: 'church', icon: Church, angle: 270, color: 'bg-coral', quote: 'wheel.church.quote' },
  { key: 'piety', icon: Star, angle: 315, color: 'bg-sunset-dark', quote: 'wheel.piety.quote' },
];

export const WheelSection = () => {
  const { t } = useLanguage();
  const [activeSegment, setActiveSegment] = useState<string | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="py-12 md:py-16 lg:py-24 bg-chocolate text-white relative overflow-hidden">
      {/* Subtle decorative background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-amber/5 blur-3xl" />
      </div>

      <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
        <Collapsible open={isOpen} onOpenChange={setIsOpen}>
          <CollapsibleTrigger className="w-full">
            <div className="text-center mb-8 cursor-pointer group">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-white/10 mb-6">
                <CircleDot className="w-7 h-7 text-amber" />
              </div>
              <div className="flex items-center justify-center gap-3">
                <h2 className="font-display text-4xl md:text-5xl font-bold text-gradient-coral">
                  {t('wheel.title')}
                </h2>
                <ChevronDown className={`w-6 h-6 text-white/70 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
              </div>
              <p className="text-lg text-white/70 max-w-2xl mx-auto mt-4">
                {t('wheel.subtitle')}
              </p>
            </div>
          </CollapsibleTrigger>

          <CollapsibleContent className="overflow-hidden data-[state=open]:animate-collapsible-down data-[state=closed]:animate-collapsible-up">
            <div className="flex flex-col lg:flex-row items-center justify-center gap-16 mt-8">
              {/* Interactive Wheel */}
              <div className="relative w-72 h-72 lg:w-80 lg:h-80">
                {/* Center - Shalom */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-24 h-24 rounded-full bg-gradient-to-br from-amber/25 to-coral/20 backdrop-blur-md border border-amber/30 flex items-center justify-center">
                    <div className="text-center">
                      <span className="font-display text-xl font-bold text-gradient-coral block">
                        {t('wheel.shalom')}
                      </span>
                      <span className="text-xs text-amber/70">שָׁלוֹם</span>
                    </div>
                  </div>
                </div>

                {/* Wheel rings */}
                <div className="absolute inset-8 rounded-full border border-white/10 animate-spin-slow" style={{ animationDuration: '50s' }} />
                <div className="absolute inset-4 rounded-full border border-amber/15" />

                {/* Segments */}
                <TooltipProvider delayDuration={100}>
                  {wheelSegments.map((segment) => {
                    const Icon = segment.icon;
                    const radius = 130;
                    const x = radius * Math.sin((segment.angle * Math.PI) / 180);
                    const y = -radius * Math.cos((segment.angle * Math.PI) / 180);

                    return (
                      <Tooltip key={segment.key}>
                        <TooltipTrigger asChild>
                          <button
                            className={`absolute w-12 h-12 rounded-full ${segment.color} flex items-center justify-center transition-all duration-300 hover:scale-110 ${
                              activeSegment === segment.key ? 'scale-110 ring-2 ring-amber/50' : ''
                            }`}
                            style={{
                              left: `calc(50% + ${x}px - 24px)`,
                              top: `calc(50% + ${y}px - 24px)`,
                            }}
                            onMouseEnter={() => setActiveSegment(segment.key)}
                            onMouseLeave={() => setActiveSegment(null)}
                          >
                            <Icon className="w-5 h-5 text-white" />
                          </button>
                        </TooltipTrigger>
                        <TooltipContent 
                          side="top" 
                          className="bg-chocolate-dark border-amber/20 max-w-xs text-white"
                        >
                          <p className="font-bold mb-1 text-amber">{t(`wheel.${segment.key}`)}</p>
                          <p className="text-sm text-white/80 mb-2">{t(`wheel.${segment.key}.desc`)}</p>
                          <p className="text-xs italic text-amber/80 border-t border-amber/20 pt-2">
                            {t(segment.quote)}
                          </p>
                        </TooltipContent>
                      </Tooltip>
                    );
                  })}
                </TooltipProvider>
              </div>

              {/* Segment labels - Clean grid */}
              <div className="grid grid-cols-2 gap-3 max-w-sm">
                {wheelSegments.map((segment) => {
                  const Icon = segment.icon;
                  return (
                    <div
                      key={segment.key}
                      className={`flex items-center gap-3 p-3 rounded-xl transition-all duration-300 cursor-pointer ${
                        activeSegment === segment.key
                          ? 'bg-white/10'
                          : 'hover:bg-white/5'
                      }`}
                      onMouseEnter={() => setActiveSegment(segment.key)}
                      onMouseLeave={() => setActiveSegment(null)}
                    >
                      <div className={`w-10 h-10 rounded-lg ${segment.color} flex items-center justify-center`}>
                        <Icon className="w-5 h-5 text-white" />
                      </div>
                      <span className="font-medium text-sm text-white/90">{t(`wheel.${segment.key}`)}</span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Active segment description */}
            <div className="mt-12 text-center h-16">
              {activeSegment ? (
                <div className="inline-block px-6 py-3 rounded-xl bg-white/5 animate-fade-in">
                  <p className="text-white/80">
                    <span className="font-bold text-amber">{t(`wheel.${activeSegment}`)}</span>
                    {' — '}
                    {t(`wheel.${activeSegment}.desc`)}
                  </p>
                </div>
              ) : (
                <p className="text-white/40 italic">
                  {t('wheel.hover')}
                </p>
              )}
            </div>
          </CollapsibleContent>
        </Collapsible>
      </div>
    </section>
  );
};
