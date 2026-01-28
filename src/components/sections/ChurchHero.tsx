import { useState, useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Clock, MapPin, Play, Globe } from 'lucide-react';
import churchLogo from '@/assets/church-logo.png';

export const ChurchHero = () => {
  const { t } = useLanguage();
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const changingTexts = [
    t('hero.changing.hearts'),
    t('hero.changing.lives'),
    t('hero.changing.relationships'),
    t('hero.changing.minds'),
    t('hero.changing.personality'),
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentTextIndex((prev) => (prev + 1) % changingTexts.length);
        setIsAnimating(false);
      }, 500);
    }, 3000);

    return () => clearInterval(interval);
  }, [changingTexts.length]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero pt-20">
      {/* Parallax background elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-20 right-10 w-96 h-96 rounded-full bg-sunset/10 blur-3xl animate-float-slow" />
        <div className="absolute bottom-20 left-10 w-80 h-80 rounded-full bg-amber/10 blur-3xl animate-float" />
        <div className="absolute top-1/3 left-1/4 w-64 h-64 rounded-full bg-coral/8 blur-2xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Logo */}
          <div className="flex justify-center mb-8">
            <div className="w-28 h-28 rounded-2xl overflow-hidden shadow-xl animate-fade-in">
              <img 
                src={churchLogo} 
                alt={t('church.name')} 
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Church Name */}
          <h1 className="font-display text-5xl md:text-7xl font-bold mb-4 text-gradient-earth animate-fade-in-up">
            {t('church.name')}
          </h1>
          
          {/* Changing Text */}
          <div className="h-16 flex items-center justify-center mb-6">
            <p 
              className={`text-2xl md:text-3xl font-display font-bold text-gradient-warm transition-all duration-500 ${
                isAnimating ? 'opacity-0 transform -translate-y-4' : 'opacity-100 transform translate-y-0'
              }`}
            >
              {changingTexts[currentTextIndex]}
            </p>
          </div>

          {/* Service times */}
          <div className="flex flex-wrap justify-center gap-4 mb-10 animate-fade-in">
            <div className="glass px-6 py-3 rounded-full flex items-center gap-2">
              <Clock className="w-5 h-5 text-sunset" />
              <span className="font-semibold text-foreground">{t('church.serviceSunday')}</span>
            </div>
            <div className="glass px-6 py-3 rounded-full flex items-center gap-2">
              <Globe className="w-5 h-5 text-amber" />
              <span className="font-semibold text-foreground">{t('church.serviceLanguages')}</span>
            </div>
            <div className="glass px-6 py-3 rounded-full flex items-center gap-2">
              <MapPin className="w-5 h-5 text-coral" />
              <span className="font-semibold text-foreground">Lāčplēša 117, Rīga</span>
            </div>
          </div>

          {/* Welcome message */}
          <p className="text-muted-foreground max-w-2xl mx-auto mb-10 text-lg leading-relaxed animate-fade-in">
            {t('church.welcome')}
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap justify-center gap-4 animate-fade-in-up">
            <a
              href="#about"
              className="inline-flex items-center gap-3 bg-gradient-to-r from-sunset via-coral to-amber text-white px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              {t('church.planVisit')}
            </a>
            <a
              href="https://www.youtube.com/@SalvationTemple"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 glass-sunset px-8 py-4 rounded-full font-bold text-lg text-foreground transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
            >
              <Play className="w-5 h-5 text-sunset" />
              {t('church.watchLive')}
            </a>
          </div>
        </div>
      </div>

      {/* Wave divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path 
            d="M0 60L48 54C96 48 192 36 288 36C384 36 480 48 576 54C672 60 768 60 864 54C960 48 1056 36 1152 30C1248 24 1344 24 1392 24L1440 24V120H1392C1344 120 1248 120 1152 120C1056 120 960 120 864 120C768 120 672 120 576 120C480 120 384 120 288 120C192 120 96 120 48 120H0V60Z" 
            fill="hsl(var(--background))"
          />
        </svg>
      </div>
    </section>
  );
};
