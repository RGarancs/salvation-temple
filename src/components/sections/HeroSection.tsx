import { useLanguage } from '@/contexts/LanguageContext';
import { ChevronDown, Calendar, Users, Clock } from 'lucide-react';
import trainingLogo from '@/assets/training-logo.png';

export const HeroSection = () => {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero">
      {/* Subtle decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-sunset/8 blob animate-float-slow" />
        <div className="absolute bottom-40 right-20 w-56 h-56 bg-amber/12 blob-alt animate-float" />
        <div className="absolute top-1/3 right-1/4 w-40 h-40 bg-coral/8 blob animate-float-slow" />
        
        {/* Subtle gradient overlay */}
        <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-background/40" />
      </div>

      <div className="container mx-auto px-4 pt-28 pb-16 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Training Logo */}
          <div className="inline-flex items-center justify-center mb-8 animate-fade-in">
            <img src={trainingLogo} alt="Целостная Жизнь" className="w-32 h-32 md:w-40 md:h-40 object-contain drop-shadow-lg" />
          </div>

          {/* Info tags - reordered: dates, time, age */}
          <div className="flex flex-wrap justify-center gap-3 mb-10 animate-fade-in" style={{ animationDelay: '0.1s' }}>
            <span className="px-4 py-2 rounded-full text-sm font-medium bg-card border border-border text-foreground flex items-center gap-2">
              <Calendar className="w-4 h-4 text-sunset" />
              {t('hero.dates')}
            </span>
            <span className="px-4 py-2 rounded-full text-sm font-medium bg-card border border-border text-foreground flex items-center gap-2">
              <Clock className="w-4 h-4 text-amber" />
              {t('hero.time')}
            </span>
            <span className="px-4 py-2 rounded-full text-sm font-medium bg-card border border-border text-foreground flex items-center gap-2">
              <Users className="w-4 h-4 text-coral" />
              {t('hero.age')}
            </span>
          </div>

          {/* Main Title */}
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-extrabold mb-6 animate-fade-in-up leading-tight">
            <span className="text-gradient-warm">{t('hero.title')}</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 animate-fade-in font-body leading-relaxed" style={{ animationDelay: '0.2s' }}>
            {t('hero.subtitle')}
          </p>

          {/* CTA Button - single, prominent */}
          <div className="animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <a
              href="https://forms.gle/2GkmmrRmaKdAxdaV7"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-gradient-to-r from-sunset via-coral to-amber text-white px-10 py-5 rounded-full font-bold text-lg transition-all duration-500 hover:shadow-xl hover:-translate-y-1 glow-sunset"
            >
              {t('hero.cta')}
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <a href="#about" className="flex flex-col items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
          <ChevronDown className="w-5 h-5" />
        </a>
      </div>
    </section>
  );
};
