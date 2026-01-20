import { useLanguage } from '@/contexts/LanguageContext';
import { Sparkles, ChevronDown, Calendar, Users, Clock, Target } from 'lucide-react';
import churchLogo from '@/assets/church-logo.png';

export const HeroSection = () => {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero">
      {/* Decorative Elements - Enhanced */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Flowing wave shapes */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-teal/10 blob animate-float-slow" />
        <div className="absolute bottom-40 right-20 w-56 h-56 bg-amber/20 blob-alt animate-float" />
        <div className="absolute top-1/3 right-1/4 w-40 h-40 bg-olive/15 blob animate-float-slow" />
        <div className="absolute bottom-1/4 left-1/3 w-48 h-48 bg-coral/10 blob-alt animate-float" />
        <div className="absolute top-1/2 left-1/6 w-32 h-32 bg-sage/15 blob animate-float" />
        
        {/* Glowing orbs */}
        <div className="absolute top-1/4 right-1/3 w-4 h-4 rounded-full bg-amber animate-pulse-glow" />
        <div className="absolute bottom-1/3 left-1/4 w-3 h-3 rounded-full bg-teal animate-pulse-glow" style={{ animationDelay: '1s' }} />
        <div className="absolute top-2/3 right-1/5 w-2 h-2 rounded-full bg-coral animate-pulse-glow" style={{ animationDelay: '2s' }} />
        
        {/* Subtle gradient overlay */}
        <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-background/60" />
      </div>

      <div className="container mx-auto px-4 pt-28 pb-16 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Church Logo Badge */}
          <div className="inline-flex items-center gap-3 glass-coral px-6 py-3 rounded-full mb-8 animate-fade-in">
            <img src={churchLogo} alt="Храм Спасения" className="w-8 h-8 rounded-lg" />
            <span className="font-semibold text-sm text-foreground">Храм Спасения • 2026</span>
          </div>

          {/* Info Pills with Icons */}
          <div className="flex flex-wrap justify-center gap-3 mb-8 animate-fade-in" style={{ animationDelay: '0.1s' }}>
            <span className="glass-sage px-5 py-2.5 rounded-full text-sm font-semibold text-sage-dark flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              {t('hero.dates')}
            </span>
            <span className="glass-teal px-5 py-2.5 rounded-full text-sm font-semibold text-teal-dark flex items-center gap-2">
              <Users className="w-4 h-4" />
              {t('hero.age')}
            </span>
            <span className="glass-amber px-5 py-2.5 rounded-full text-sm font-semibold text-amber-dark flex items-center gap-2">
              <Clock className="w-4 h-4" />
              {t('hero.rhythm')}
            </span>
          </div>

          {/* Main Title with Glow */}
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-extrabold mb-6 animate-fade-in-up leading-tight">
            <span className="text-gradient-wave glow-text-amber">{t('hero.title')}</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-fade-in font-body leading-relaxed" style={{ animationDelay: '0.2s' }}>
            {t('hero.subtitle')}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <a
              href="https://forms.gle/2GkmmrRmaKdAxdaV7"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 bg-gradient-to-r from-sage via-teal to-sage-dark text-primary-foreground px-10 py-5 rounded-full font-bold text-lg transition-all duration-500 hover:shadow-xl hover:-translate-y-1 glow-sage"
            >
              <Sparkles className="w-5 h-5 group-hover:animate-pulse" />
              {t('hero.cta')}
            </a>
            <a
              href="#about"
              className="inline-flex items-center gap-2 glass px-8 py-4 rounded-full font-semibold text-foreground transition-all duration-300 hover:bg-sage/10"
            >
              <Target className="w-5 h-5" />
              {t('nav.about')}
            </a>
          </div>

          {/* Decorative Wheel Preview - Enhanced */}
          <div className="mt-20 relative animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <div className="w-56 h-56 mx-auto relative">
              {/* Outer glow ring */}
              <div className="absolute inset-0 rounded-full animate-pulse-glow" />
              
              {/* Rings */}
              <div className="absolute inset-0 rounded-full border-4 border-sage/30 animate-spin-slow" style={{ animationDuration: '30s' }} />
              <div className="absolute inset-4 rounded-full border-2 border-amber/40" />
              <div className="absolute inset-8 rounded-full border-2 border-teal/30" />
              
              {/* Center - Shalom */}
              <div className="absolute inset-12 rounded-full bg-gradient-to-br from-sage/20 to-teal/20 backdrop-blur-sm flex items-center justify-center border border-amber/30">
                <span className="font-display text-2xl font-bold text-gradient-amber">שָׁלוֹם</span>
              </div>
              
              {/* Wheel segments indicators */}
              {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => (
                <div
                  key={angle}
                  className="absolute w-4 h-4 rounded-full transition-all duration-300 hover:scale-150"
                  style={{
                    top: `${50 - 45 * Math.cos((angle * Math.PI) / 180)}%`,
                    left: `${50 + 45 * Math.sin((angle * Math.PI) / 180)}%`,
                    transform: 'translate(-50%, -50%)',
                    background: [
                      'hsl(85 35% 50%)',   // sage
                      'hsl(175 55% 50%)',  // teal
                      'hsl(35 90% 55%)',   // amber
                      'hsl(75 45% 45%)',   // olive
                      'hsl(25 85% 55%)',   // orange
                      'hsl(25 45% 40%)',   // chocolate
                      'hsl(85 40% 35%)',   // sage-dark
                      'hsl(175 60% 40%)',  // teal-dark
                    ][i],
                    boxShadow: `0 0 15px ${[
                      'hsl(85 35% 50% / 0.5)',
                      'hsl(175 55% 50% / 0.5)',
                      'hsl(35 90% 55% / 0.5)',
                      'hsl(75 45% 45% / 0.5)',
                      'hsl(25 85% 55% / 0.5)',
                      'hsl(25 45% 40% / 0.5)',
                      'hsl(85 40% 35% / 0.5)',
                      'hsl(175 60% 40% / 0.5)',
                    ][i]}`,
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <a href="#about" className="flex flex-col items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
          <span className="text-xs font-medium uppercase tracking-wider">Scroll</span>
          <ChevronDown className="w-5 h-5" />
        </a>
      </div>
    </section>
  );
};
