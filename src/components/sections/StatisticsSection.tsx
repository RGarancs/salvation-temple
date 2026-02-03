import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Users, Droplets, BookOpen, Sun, Home, Gift, Heart, History, ArrowRight, Info } from 'lucide-react';
import { Link } from 'react-router-dom';
import galleryCongregation from '@/assets/gallery-congregation.jpg';

export const StatisticsSection = () => {
  const { t } = useLanguage();
  const [hoveredStat, setHoveredStat] = useState<string | null>(null);

  // Historical statistics - moved to the end
  const historicalStats = [
    { key: 'baptismsHistory', value: '+350', icon: Droplets, label: 'statistics.history.baptisms' },
    { key: 'sundaySchoolHistory', value: '+700', icon: BookOpen, label: 'statistics.history.sundaySchool' },
    { key: 'summerCampsHistory', value: '+5000', icon: Sun, label: 'statistics.history.summerCamps' },
    { key: 'familiesHistory', value: '+500', icon: Home, label: 'statistics.history.families' },
    { key: 'childrenHistory', value: '+400', icon: Gift, label: 'statistics.history.children' },
  ];

  // Current year activity stats - updated numbers
  const activityStats = [
    { 
      key: 'baptisms', 
      value: 12, 
      icon: Droplets, 
      label: 'statistics.baptisms',
      hoverInfo: 'statistics.baptisms.hover',
      hasLink: true,
      linkText: 'statistics.baptisms.learnMore'
    },
    { 
      key: 'sundaySchool', 
      value: 80, 
      icon: BookOpen, 
      label: 'statistics.sundaySchoolPeople',
      hoverInfo: 'statistics.sundaySchool.hover',
      hasLink: true,
      linkText: 'statistics.sundaySchool.learnMore'
    },
    { 
      key: 'summerCamp', 
      value: 90, 
      icon: Sun, 
      label: 'statistics.summerCamp',
      hoverInfo: 'statistics.summerCamp.hover',
      hasLink: true,
      linkText: 'statistics.summerCamp.learnMore'
    },
    { 
      key: 'childrenGifts', 
      value: 800, 
      icon: Gift, 
      label: 'statistics.childrenGifts',
      hoverInfo: 'statistics.childrenGifts.hover'
    },
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
    <section id="statistics" className="py-24 relative overflow-hidden">
      {/* Background image with 25% opacity (75% transparent) */}
      <div className="absolute inset-0">
        <img 
          src={galleryCongregation} 
          alt="" 
          className="w-full h-full object-cover opacity-[0.25]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/85 via-background/90 to-background" />
      </div>

      {/* Soft glowing overlay */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-10 left-20 w-80 h-80 rounded-full bg-amber/10 blur-3xl animate-float-slow" />
        <div className="absolute bottom-10 right-20 w-72 h-72 rounded-full bg-coral/10 blur-3xl animate-float" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-br from-amber/20 to-coral/20 mb-6">
            <Heart className="w-7 h-7 text-amber" />
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-gradient-earth mb-4">
            {t('statistics.title')}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {t('statistics.subtitle')}
          </p>
        </div>

        {/* Main Community Stat - Circle Shape */}
        <div className="max-w-md mx-auto mb-12">
          <div 
            className="relative overflow-hidden rounded-full aspect-square max-w-[280px] mx-auto flex items-center justify-center transition-all duration-300 hover:shadow-xl group"
            style={bordeauxCardStyle}
          >
            {/* Circular texture overlay */}
            <div className="absolute inset-0 opacity-20 rounded-full" style={{
              backgroundImage: `radial-gradient(circle at 20% 80%, hsl(350 30% 25%) 0%, transparent 50%),
                                radial-gradient(circle at 80% 20%, hsl(25 30% 25%) 0%, transparent 50%)`,
            }} />
            <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-full" style={{
              background: 'linear-gradient(135deg, transparent 0%, hsl(30 80% 70%) 50%, transparent 100%)',
            }} />
            <div className="relative z-10 text-center p-8">
              <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center mx-auto mb-4 border border-white/10">
                <Users className="w-8 h-8 text-sunset-light" />
              </div>
              <div className="font-display text-5xl font-bold text-sunset-light mb-2">
                150
              </div>
              <p className="text-white/70 text-lg">
                {t('statistics.total')}
              </p>
              {/* Hover info */}
              <div className="absolute inset-0 flex items-center justify-center rounded-full bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="p-6 text-center">
                  <p className="text-white/90 text-sm leading-relaxed">
                    {t('statistics.members.hover')}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Past Year Label */}
        <div className="text-center mb-8">
          <h3 className="font-display text-xl font-bold text-gradient-warm">
            {t('statistics.pastYear.title')}
          </h3>
        </div>

        {/* Activity Stats Grid - Dark Bordeaux with hover */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-16">
          {activityStats.map((stat) => {
            const Icon = stat.icon;
            const isHovered = hoveredStat === stat.key;
            return (
              <div 
                key={stat.key} 
                className="relative overflow-hidden rounded-2xl p-6 text-center transition-all duration-300 hover:shadow-xl hover:-translate-y-1 group cursor-pointer"
                style={bordeauxCardStyle}
                onMouseEnter={() => setHoveredStat(stat.key)}
                onMouseLeave={() => setHoveredStat(null)}
              >
                {bordeauxTextureOverlay}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-2xl" style={{
                  background: 'linear-gradient(135deg, transparent 0%, hsl(30 80% 70%) 50%, transparent 100%)',
                }} />
                
                {/* Normal content */}
                <div className={`relative z-10 transition-opacity duration-300 ${isHovered ? 'opacity-0' : 'opacity-100'}`}>
                  <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center mx-auto mb-3 border border-white/10">
                    <Icon className="w-6 h-6 text-sunset-light" />
                  </div>
                  <div className="font-display text-3xl font-bold text-sunset-light mb-1">
                    {stat.value}
                  </div>
                  <p className="text-white/60 text-sm">
                    {t(stat.label)}
                  </p>
                  <Info className="w-4 h-4 text-white/30 mx-auto mt-2" />
                </div>

                {/* Hover content */}
                <div className={`absolute inset-0 flex flex-col items-center justify-center p-4 transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
                  <p className="text-white/90 text-xs leading-relaxed mb-3 text-center">
                    {t(stat.hoverInfo)}
                  </p>
                  {stat.hasLink && (
                    <Link
                      to={`/${stat.key === 'baptisms' ? 'baptism' : stat.key === 'sundaySchool' ? 'sunday-school' : 'summer-camps'}`}
                      className="inline-flex items-center gap-1 text-sunset-light text-xs font-semibold hover:underline"
                    >
                      {t(stat.linkText)}
                      <ArrowRight className="w-3 h-3" />
                    </Link>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Historical Statistics - moved to the end */}
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center justify-center gap-2 mb-8">
            <History className="w-5 h-5 text-sunset" />
            <h3 className="font-display text-xl font-bold text-gradient-warm">
              {t('statistics.history.title')}
            </h3>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {historicalStats.map((stat) => {
              const Icon = stat.icon;
              return (
                <div 
                  key={stat.key} 
                  className="relative overflow-hidden rounded-2xl p-4 text-center transition-all duration-300 hover:shadow-xl hover:-translate-y-1 group"
                  style={bordeauxCardStyle}
                >
                  {bordeauxTextureOverlay}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-2xl" style={{
                    background: 'linear-gradient(135deg, transparent 0%, hsl(30 80% 70%) 50%, transparent 100%)',
                  }} />
                  <div className="relative z-10">
                    <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center mx-auto mb-2 border border-white/10">
                      <Icon className="w-5 h-5 text-sunset-light" />
                    </div>
                    <div className="font-display text-2xl font-bold text-sunset-light mb-1">
                      {stat.value}
                    </div>
                    <p className="text-white/60 text-xs">
                      {t(stat.label)}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
