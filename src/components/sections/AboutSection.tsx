import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Target, Compass, Heart, BookOpen, Cross, Users, Sparkles, ArrowRight, ChevronDown, ChevronUp } from 'lucide-react';
import { Link } from 'react-router-dom';
import historyBuilding from '@/assets/history-building.png';

export const AboutSection = () => {
  const { t } = useLanguage();
  const [isExpanded, setIsExpanded] = useState(false);

  const values = [
    { key: 'christ', icon: Cross, color: 'sunset' },
    { key: 'bible', icon: BookOpen, color: 'coral' },
    { key: 'discipleship', icon: Users, color: 'amber' },
    { key: 'mission', icon: Sparkles, color: 'terracotta' },
  ];

  // Dark bordeaux card style
  const bordeauxCardStyle = {
    background: 'linear-gradient(135deg, hsl(350 35% 18%) 0%, hsl(350 40% 12%) 100%)',
  };

  const bordeauxTextureOverlay = (
    <div className="absolute inset-0 opacity-20 rounded-2xl" style={{
      backgroundImage: `radial-gradient(circle at 20% 80%, hsl(350 30% 25%) 0%, transparent 50%),
                        radial-gradient(circle at 80% 20%, hsl(25 30% 25%) 0%, transparent 50%),
                        linear-gradient(135deg, transparent 0%, hsl(350 20% 20% / 0.5) 100%)`,
    }} />
  );

  return (
    <section id="about" className="py-12 md:py-16 lg:py-24 relative overflow-hidden">
      {/* Background image of church building with 50% opacity */}
      <div className="absolute inset-0">
        <img 
          src={historyBuilding} 
          alt="" 
          className="w-full h-full object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-cream-dark/85 via-cream-dark/90 to-cream-dark" />
      </div>
      
      {/* Soft glowing overlay - same effect as hero, slowly moving */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-20 right-10 w-96 h-96 rounded-full bg-sunset/15 blur-3xl animate-float-slow" />
        <div className="absolute bottom-20 left-10 w-80 h-80 rounded-full bg-amber/15 blur-3xl animate-float" />
        <div className="absolute top-1/3 left-1/4 w-64 h-64 rounded-full bg-coral/10 blur-2xl animate-float-slow" />
        <div className="absolute bottom-1/4 right-1/3 w-48 h-48 rounded-full bg-terracotta/8 blur-2xl animate-float" />
      </div>

      <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-br from-sunset/20 to-amber/20 mb-6">
            <Compass className="w-7 h-7 text-sunset" />
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-gradient-earth mb-4">
            {t('about.title')}
          </h2>
          {/* Always visible intro text */}
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg mb-8">
            {t('about.intro')}
          </p>
          
          {/* Get to know us button */}
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-sunset via-coral to-amber text-white px-6 py-3 rounded-full font-bold text-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
          >
            {t('about.getToKnowUs')}
            {isExpanded ? (
              <ChevronUp className="w-5 h-5" />
            ) : (
              <ChevronDown className="w-5 h-5" />
            )}
          </button>
        </div>

        {/* Collapsible content */}
        <div className={`transition-all duration-500 overflow-hidden ${isExpanded ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'}`}>
          {/* Mission - Dark Bordeaux */}
          <div className="max-w-4xl mx-auto mb-12 mt-12">
            <div
              className="relative overflow-hidden rounded-2xl p-6 md:p-8 text-center transition-all duration-300 hover:shadow-xl"
              style={bordeauxCardStyle}
            >
              {bordeauxTextureOverlay}
              <div className="relative z-10">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/10 mb-4">
                  <Target className="w-6 h-6 text-sunset-light" />
                </div>
                <h3 className="font-display text-2xl font-bold text-white/95 mb-4">
                  {t('about.mission.title')}
                </h3>
                <p className="text-white/70 text-lg leading-relaxed">
                  {t('about.mission.text')}
                </p>
              </div>
            </div>
          </div>

          {/* Vision - Dark Bordeaux */}
          <div className="max-w-4xl mx-auto mb-12">
            <div
              className="relative overflow-hidden rounded-2xl p-6 md:p-8 text-center transition-all duration-300 hover:shadow-xl"
              style={bordeauxCardStyle}
            >
              {bordeauxTextureOverlay}
              <div className="relative z-10">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/10 mb-4">
                  <Heart className="w-6 h-6 text-amber" />
                </div>
                <h3 className="font-display text-2xl font-bold text-white/95 mb-4">
                  {t('about.vision.title')}
                </h3>
                <p className="text-white/70 text-lg leading-relaxed">
                  {t('about.vision.textShort')}
                </p>
              </div>
            </div>
          </div>

          {/* Values - centered icons and text, Dark Bordeaux */}
          <div className="max-w-5xl mx-auto mb-12">
            <h3 className="font-display text-2xl font-bold text-center text-gradient-earth mb-8">
              {t('about.values.title')}
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value) => {
                const Icon = value.icon;
                return (
                  <div 
                    key={value.key} 
                    className="relative overflow-hidden rounded-2xl p-6 text-center transition-all duration-300 hover:shadow-xl hover:-translate-y-1 group"
                    style={bordeauxCardStyle}
                  >
                    {bordeauxTextureOverlay}
                    {/* Shine effect on hover */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-2xl" style={{
                      background: 'linear-gradient(135deg, transparent 0%, hsl(30 80% 70%) 50%, transparent 100%)',
                    }} />
                    <div className="relative z-10">
                      <div className="w-14 h-14 rounded-xl bg-white/10 backdrop-blur-sm flex items-center justify-center mx-auto mb-4 border border-white/10">
                        <Icon className="w-7 h-7 text-sunset-light" />
                      </div>
                      <h4 className="font-display text-lg font-bold mb-3 text-white/95">
                        {t(`about.values.${value.key}.title`)}
                      </h4>
                      <p className="text-white/60 text-sm leading-relaxed">
                        {t(`about.values.${value.key}.paragraph`)}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* History Button */}
          <div className="text-center">
            <Link
              to="/history"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-terracotta to-burnt text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
            >
              {t('about.historyButton')}
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
