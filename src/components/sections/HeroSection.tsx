import { useLanguage } from '@/contexts/LanguageContext';
import { Sparkles } from 'lucide-react';

export const HeroSection = () => {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero">
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Floating organic shapes */}
        <div className="absolute top-20 left-10 w-64 h-64 bg-sage/10 blob animate-float-slow" />
        <div className="absolute bottom-40 right-20 w-48 h-48 bg-amber/20 blob-alt animate-float" />
        <div className="absolute top-1/3 right-1/4 w-32 h-32 bg-teal/10 blob animate-float-slow" />
        <div className="absolute bottom-1/4 left-1/3 w-40 h-40 bg-peach/30 blob-alt animate-float" />
        
        {/* Subtle gradient overlay */}
        <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-background/50" />
      </div>

      <div className="container mx-auto px-4 pt-24 pb-16 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Info Pills */}
          <div className="flex flex-wrap justify-center gap-3 mb-8 animate-fade-in">
            <span className="glass-sage px-4 py-2 rounded-full text-sm font-medium text-sage-dark">
              {t('hero.year')}
            </span>
            <span className="glass-sage px-4 py-2 rounded-full text-sm font-medium text-sage-dark">
              {t('hero.dates')}
            </span>
            <span className="glass-sage px-4 py-2 rounded-full text-sm font-medium text-sage-dark">
              {t('hero.age')}
            </span>
            <span className="glass-sage px-4 py-2 rounded-full text-sm font-medium text-sage-dark">
              {t('hero.rhythm')}
            </span>
          </div>

          {/* Main Title */}
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold mb-6 animate-fade-in-up text-gradient-earth leading-tight">
            {t('hero.title')}
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-fade-in font-body leading-relaxed" style={{ animationDelay: '0.2s' }}>
            {t('hero.subtitle')}
          </p>

          {/* CTA Button */}
          <div className="animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <a
              href="#register"
              className="group inline-flex items-center gap-3 bg-gradient-to-r from-sage to-sage-dark text-primary-foreground px-8 py-4 rounded-full font-semibold text-lg transition-all duration-500 hover:shadow-xl hover:-translate-y-1 glow-sage"
            >
              <Sparkles className="w-5 h-5 group-hover:animate-pulse" />
              {t('hero.cta')}
            </a>
          </div>

          {/* Decorative Wheel Preview */}
          <div className="mt-20 relative animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <div className="w-48 h-48 mx-auto relative">
              <div className="absolute inset-0 rounded-full border-4 border-sage/20 animate-pulse-glow" />
              <div className="absolute inset-4 rounded-full border-2 border-amber/30" />
              <div className="absolute inset-8 rounded-full border-2 border-teal/20" />
              <div className="absolute inset-12 rounded-full bg-sage/5 flex items-center justify-center">
                <span className="font-display text-lg font-bold text-sage">שָׁלוֹם</span>
              </div>
              {/* Wheel segments indicators */}
              {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => (
                <div
                  key={angle}
                  className="absolute w-3 h-3 rounded-full"
                  style={{
                    top: `${50 - 45 * Math.cos((angle * Math.PI) / 180)}%`,
                    left: `${50 + 45 * Math.sin((angle * Math.PI) / 180)}%`,
                    transform: 'translate(-50%, -50%)',
                    background: [
                      'hsl(85 25% 42%)',   // sage
                      'hsl(175 35% 40%)',  // teal
                      'hsl(35 85% 55%)',   // amber
                      'hsl(75 30% 35%)',   // olive
                      'hsl(25 80% 55%)',   // orange
                      'hsl(25 40% 25%)',   // chocolate
                      'hsl(85 30% 30%)',   // sage-dark
                      'hsl(175 35% 35%)',  // teal-dark
                    ][i],
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-sage/50 flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-sage/50 rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
};
