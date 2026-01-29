import { useLanguage } from '@/contexts/LanguageContext';
import { Target, Compass, Heart, BookOpen, Cross, Users, Sparkles, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import historyBuilding from '@/assets/history-building.png';

export const AboutSection = () => {
  const { t } = useLanguage();

  const values = [
    { key: 'christ', icon: Cross, color: 'sunset' },
    { key: 'bible', icon: BookOpen, color: 'coral' },
    { key: 'discipleship', icon: Users, color: 'amber' },
    { key: 'mission', icon: Sparkles, color: 'terracotta' },
  ];

  const colorMap: Record<string, { bg: string; icon: string }> = {
    sunset: { bg: 'bg-sunset/10', icon: 'text-sunset' },
    coral: { bg: 'bg-coral/10', icon: 'text-coral' },
    amber: { bg: 'bg-amber/10', icon: 'text-amber' },
    terracotta: { bg: 'bg-terracotta/10', icon: 'text-terracotta' },
  };

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Background image of church building with 50% opacity */}
      <div className="absolute inset-0">
        <img 
          src={historyBuilding} 
          alt="" 
          className="w-full h-full object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-cream-dark/85 via-cream-dark/90 to-cream-dark" />
      </div>
      
      {/* Soft glowing overlay - same effect as hero */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-20 right-10 w-96 h-96 rounded-full bg-sunset/15 blur-3xl animate-float-slow" />
        <div className="absolute bottom-20 left-10 w-80 h-80 rounded-full bg-amber/15 blur-3xl animate-float" />
        <div className="absolute top-1/3 left-1/4 w-64 h-64 rounded-full bg-coral/10 blur-2xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-br from-sunset/20 to-amber/20 mb-6">
            <Compass className="w-7 h-7 text-sunset" />
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-gradient-earth mb-4">
            {t('about.title')}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            {t('about.intro')}
          </p>
        </div>

        {/* Mission */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="card-warm p-8 text-center">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-coral/20 to-sunset/20 mb-4">
              <Target className="w-6 h-6 text-coral" />
            </div>
            <h3 className="font-display text-2xl font-bold text-gradient-warm mb-4">
              {t('about.mission.title')}
            </h3>
            <p className="text-muted-foreground text-lg leading-relaxed">
              {t('about.mission.text')}
            </p>
          </div>
        </div>

        {/* Vision */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="card-warm p-8 text-center">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-amber/20 to-coral/20 mb-4">
              <Heart className="w-6 h-6 text-amber" />
            </div>
            <h3 className="font-display text-2xl font-bold text-gradient-warm mb-4">
              {t('about.vision.title')}
            </h3>
            <p className="text-muted-foreground text-lg leading-relaxed">
              {t('about.vision.text')}
            </p>
          </div>
        </div>

        {/* Values - centered icons and text, paragraph format */}
        <div className="max-w-5xl mx-auto mb-12">
          <h3 className="font-display text-2xl font-bold text-center text-gradient-earth mb-8">
            {t('about.values.title')}
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value) => {
              const Icon = value.icon;
              const colors = colorMap[value.color];
              return (
                <div key={value.key} className="card-warm p-6 text-center">
                  <div className={`w-14 h-14 rounded-xl ${colors.bg} flex items-center justify-center mx-auto mb-4`}>
                    <Icon className={`w-7 h-7 ${colors.icon}`} />
                  </div>
                  <h4 className="font-display text-lg font-bold mb-3 text-foreground">
                    {t(`about.values.${value.key}.title`)}
                  </h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {t(`about.values.${value.key}.paragraph`)}
                  </p>
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
    </section>
  );
};
