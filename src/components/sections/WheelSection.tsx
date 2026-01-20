import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { Compass, Users, Heart, Brain, Wallet, Fingerprint, Church, Star, Sparkles } from 'lucide-react';

const wheelSegments = [
  { key: 'purpose', icon: Compass, angle: 0, color: 'bg-sage', glowClass: 'glow-sage' },
  { key: 'people', icon: Users, angle: 45, color: 'bg-teal', glowClass: 'glow-teal' },
  { key: 'body', icon: Heart, angle: 90, color: 'bg-amber', glowClass: 'glow-amber' },
  { key: 'mind', icon: Brain, angle: 135, color: 'bg-olive', glowClass: 'glow-sage' },
  { key: 'finance', icon: Wallet, angle: 180, color: 'bg-orange', glowClass: 'glow-amber' },
  { key: 'character', icon: Fingerprint, angle: 225, color: 'bg-chocolate-light', glowClass: 'glow-coral' },
  { key: 'church', icon: Church, angle: 270, color: 'bg-sage-dark', glowClass: 'glow-sage' },
  { key: 'piety', icon: Star, angle: 315, color: 'bg-teal-dark', glowClass: 'glow-teal' },
];

export const WheelSection = () => {
  const { t } = useLanguage();
  const [activeSegment, setActiveSegment] = useState<string | null>(null);

  return (
    <section className="py-24 bg-chocolate text-primary-foreground relative overflow-hidden">
      {/* Decorative background - Enhanced */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 right-20 w-96 h-96 border border-primary-foreground/10 rounded-full" />
        <div className="absolute bottom-20 left-20 w-72 h-72 border border-primary-foreground/10 rounded-full" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-amber/5 blur-3xl" />
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-teal via-amber to-coral opacity-40" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 glass-amber px-4 py-2 rounded-full mb-6">
            <Sparkles className="w-4 h-4 text-amber" />
            <span className="text-sm font-semibold text-amber">8 Сфер Жизни</span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4 text-gradient-coral">
            {t('wheel.title')}
          </h2>
          <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto">
            {t('wheel.subtitle')}
          </p>
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-center gap-16">
          {/* Interactive Wheel - Enhanced */}
          <div className="relative w-80 h-80 lg:w-96 lg:h-96">
            {/* Outer glow */}
            <div className="absolute inset-0 rounded-full animate-pulse-glow opacity-50" />
            
            {/* Center - Shalom */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-28 h-28 rounded-full bg-gradient-to-br from-amber/30 to-coral/20 backdrop-blur-md border border-amber/40 flex items-center justify-center animate-pulse-glow">
                <div className="text-center">
                  <span className="font-display text-2xl font-bold text-gradient-coral block">
                    {t('wheel.shalom')}
                  </span>
                  <span className="text-xs text-amber/80">שָׁלוֹם</span>
                </div>
              </div>
            </div>

            {/* Wheel rings */}
            <div className="absolute inset-10 rounded-full border-2 border-primary-foreground/20 animate-spin-slow" style={{ animationDuration: '40s' }} />
            <div className="absolute inset-6 rounded-full border border-amber/20" />
            <div className="absolute inset-2 rounded-full border-2 border-primary-foreground/30" />

            {/* Segments */}
            <TooltipProvider delayDuration={100}>
              {wheelSegments.map((segment) => {
                const Icon = segment.icon;
                const radius = 150;
                const x = radius * Math.sin((segment.angle * Math.PI) / 180);
                const y = -radius * Math.cos((segment.angle * Math.PI) / 180);

                return (
                  <Tooltip key={segment.key}>
                    <TooltipTrigger asChild>
                      <button
                        className={`absolute w-14 h-14 rounded-full ${segment.color} flex items-center justify-center transition-all duration-300 hover:scale-125 border-2 border-white/20 ${
                          activeSegment === segment.key ? `scale-125 ring-4 ring-amber/60 ${segment.glowClass}` : 'hover:shadow-lg'
                        }`}
                        style={{
                          left: `calc(50% + ${x}px - 28px)`,
                          top: `calc(50% + ${y}px - 28px)`,
                        }}
                        onMouseEnter={() => setActiveSegment(segment.key)}
                        onMouseLeave={() => setActiveSegment(null)}
                      >
                        <Icon className="w-6 h-6 text-primary-foreground" />
                      </button>
                    </TooltipTrigger>
                    <TooltipContent 
                      side="top" 
                      className="glass-chocolate border-amber/30 max-w-xs text-primary-foreground"
                    >
                      <p className="font-bold mb-1 text-amber">{t(`wheel.${segment.key}`)}</p>
                      <p className="text-sm text-primary-foreground/80">{t(`wheel.${segment.key}.desc`)}</p>
                    </TooltipContent>
                  </Tooltip>
                );
              })}
            </TooltipProvider>
          </div>

          {/* Segment labels - Enhanced */}
          <div className="grid grid-cols-2 gap-4 max-w-md">
            {wheelSegments.map((segment) => {
              const Icon = segment.icon;
              return (
                <div
                  key={segment.key}
                  className={`flex items-center gap-3 p-4 rounded-xl transition-all duration-300 cursor-pointer backdrop-blur-sm border ${
                    activeSegment === segment.key
                      ? 'bg-primary-foreground/20 scale-105 border-amber/40'
                      : 'hover:bg-primary-foreground/10 border-transparent hover:border-primary-foreground/20'
                  }`}
                  onMouseEnter={() => setActiveSegment(segment.key)}
                  onMouseLeave={() => setActiveSegment(null)}
                >
                  <div className={`w-12 h-12 rounded-xl ${segment.color} flex items-center justify-center shadow-lg`}>
                    <Icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <span className="font-semibold block">{t(`wheel.${segment.key}`)}</span>
                    <span className="text-xs text-primary-foreground/60 line-clamp-1">
                      {t(`wheel.${segment.key}.desc`).substring(0, 30)}...
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Active segment description */}
        <div className="mt-12 text-center h-20">
          {activeSegment ? (
            <div className="glass-chocolate inline-block px-8 py-4 rounded-2xl animate-fade-in">
              <p className="text-lg text-primary-foreground/90">
                <span className="font-bold text-gradient-coral">{t(`wheel.${activeSegment}`)}</span>
                {' — '}
                {t(`wheel.${activeSegment}.desc`)}
              </p>
            </div>
          ) : (
            <p className="text-lg text-primary-foreground/50 italic">
              {t('wheel.hover')}
            </p>
          )}
        </div>
      </div>
    </section>
  );
};
