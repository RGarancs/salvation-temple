import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { Compass, Users, Heart, Brain, Wallet, Fingerprint, Church, Star } from 'lucide-react';

const wheelSegments = [
  { key: 'purpose', icon: Compass, angle: 0, color: 'bg-sage' },
  { key: 'people', icon: Users, angle: 45, color: 'bg-teal' },
  { key: 'body', icon: Heart, angle: 90, color: 'bg-amber' },
  { key: 'mind', icon: Brain, angle: 135, color: 'bg-olive' },
  { key: 'finance', icon: Wallet, angle: 180, color: 'bg-orange' },
  { key: 'character', icon: Fingerprint, angle: 225, color: 'bg-chocolate' },
  { key: 'church', icon: Church, angle: 270, color: 'bg-sage-dark' },
  { key: 'piety', icon: Star, angle: 315, color: 'bg-teal' },
];

export const WheelSection = () => {
  const { t } = useLanguage();
  const [activeSegment, setActiveSegment] = useState<string | null>(null);

  return (
    <section className="py-24 bg-chocolate text-primary-foreground relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 pointer-events-none opacity-10">
        <div className="absolute top-20 right-20 w-96 h-96 border border-primary-foreground/20 rounded-full" />
        <div className="absolute bottom-20 left-20 w-72 h-72 border border-primary-foreground/20 rounded-full" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            {t('wheel.title')}
          </h2>
          <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto">
            {t('wheel.subtitle')}
          </p>
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-center gap-16">
          {/* Interactive Wheel */}
          <div className="relative w-80 h-80">
            {/* Center - Shalom */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-24 h-24 rounded-full bg-amber/20 backdrop-blur-sm border border-amber/30 flex items-center justify-center animate-pulse-glow">
                <span className="font-display text-xl font-bold text-amber">
                  {t('wheel.shalom')}
                </span>
              </div>
            </div>

            {/* Wheel rings */}
            <div className="absolute inset-8 rounded-full border-2 border-primary-foreground/20" />
            <div className="absolute inset-4 rounded-full border border-primary-foreground/10" />
            <div className="absolute inset-0 rounded-full border-2 border-primary-foreground/30" />

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
                        className={`absolute w-12 h-12 rounded-full ${segment.color} flex items-center justify-center transition-all duration-300 hover:scale-125 hover:shadow-lg ${
                          activeSegment === segment.key ? 'scale-125 ring-4 ring-amber/50' : ''
                        }`}
                        style={{
                          left: `calc(50% + ${x}px - 24px)`,
                          top: `calc(50% + ${y}px - 24px)`,
                        }}
                        onMouseEnter={() => setActiveSegment(segment.key)}
                        onMouseLeave={() => setActiveSegment(null)}
                      >
                        <Icon className="w-5 h-5 text-primary-foreground" />
                      </button>
                    </TooltipTrigger>
                    <TooltipContent 
                      side="top" 
                      className="bg-background text-foreground border-sage/20 max-w-xs"
                    >
                      <p className="font-semibold mb-1">{t(`wheel.${segment.key}`)}</p>
                      <p className="text-sm text-muted-foreground">{t(`wheel.${segment.key}.desc`)}</p>
                    </TooltipContent>
                  </Tooltip>
                );
              })}
            </TooltipProvider>
          </div>

          {/* Segment labels */}
          <div className="grid grid-cols-2 gap-4 max-w-md">
            {wheelSegments.map((segment) => {
              const Icon = segment.icon;
              return (
                <div
                  key={segment.key}
                  className={`flex items-center gap-3 p-3 rounded-xl transition-all duration-300 cursor-pointer ${
                    activeSegment === segment.key
                      ? 'bg-primary-foreground/20 scale-105'
                      : 'hover:bg-primary-foreground/10'
                  }`}
                  onMouseEnter={() => setActiveSegment(segment.key)}
                  onMouseLeave={() => setActiveSegment(null)}
                >
                  <div className={`w-10 h-10 rounded-lg ${segment.color} flex items-center justify-center`}>
                    <Icon className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <span className="font-medium">{t(`wheel.${segment.key}`)}</span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Active segment description */}
        <div className="mt-12 text-center h-16">
          {activeSegment ? (
            <p className="text-lg text-primary-foreground/90 animate-fade-in">
              <span className="font-bold text-amber">{t(`wheel.${activeSegment}`)}</span>
              {' — '}
              {t(`wheel.${activeSegment}.desc`)}
            </p>
          ) : (
            <p className="text-lg text-primary-foreground/60 italic">
              {t('wheel.hover')}
            </p>
          )}
        </div>
      </div>
    </section>
  );
};
