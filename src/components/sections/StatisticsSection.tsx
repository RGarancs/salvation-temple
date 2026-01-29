import { useLanguage } from '@/contexts/LanguageContext';
import { Users, Droplets, BookOpen, Sun, Home, Backpack, Heart } from 'lucide-react';
import galleryCongregation from '@/assets/gallery-congregation.jpg';

export const StatisticsSection = () => {
  const { t } = useLanguage();

  const activityStats = [
    { key: 'baptisms', value: 12, icon: Droplets, color: 'sunset', label: 'statistics.baptisms' },
    { key: 'sundaySchool', value: 35, icon: BookOpen, color: 'coral', label: 'statistics.sundaySchoolPeople' },
    { key: 'summerCamp', value: 200, icon: Sun, color: 'amber', label: 'statistics.summerCamp' },
    { key: 'familiesHelped', value: 150, icon: Home, color: 'terracotta', label: 'statistics.familiesHelped' },
    { key: 'childrenSchool', value: 80, icon: Backpack, color: 'burnt', label: 'statistics.childrenSchool' },
  ];

  const colorMap: Record<string, { bg: string; icon: string; border: string }> = {
    sunset: { bg: 'bg-sunset/10', icon: 'text-sunset', border: 'border-sunset/30' },
    coral: { bg: 'bg-coral/10', icon: 'text-coral', border: 'border-coral/30' },
    amber: { bg: 'bg-amber/10', icon: 'text-amber', border: 'border-amber/30' },
    terracotta: { bg: 'bg-terracotta/10', icon: 'text-terracotta', border: 'border-terracotta/30' },
    burnt: { bg: 'bg-burnt/10', icon: 'text-burnt', border: 'border-burnt/30' },
  };

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

        {/* Main Community Stat */}
        <div className="max-w-md mx-auto mb-12">
          <div className="card-warm p-8 text-center border border-sunset/30">
            <div className="w-16 h-16 rounded-xl bg-sunset/10 flex items-center justify-center mx-auto mb-4">
              <Users className="w-8 h-8 text-sunset" />
            </div>
            <div className="font-display text-5xl font-bold text-sunset mb-2">
              150
            </div>
            <p className="text-muted-foreground text-lg">
              {t('statistics.total')}
            </p>
          </div>
        </div>

        {/* Activity Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-5xl mx-auto">
          {activityStats.map((stat) => {
            const Icon = stat.icon;
            const colors = colorMap[stat.color];
            return (
              <div key={stat.key} className={`card-warm p-6 text-center border ${colors.border}`}>
                <div className={`w-12 h-12 rounded-xl ${colors.bg} flex items-center justify-center mx-auto mb-3`}>
                  <Icon className={`w-6 h-6 ${colors.icon}`} />
                </div>
                <div className={`font-display text-3xl font-bold ${colors.icon} mb-1`}>
                  {stat.value}
                </div>
                <p className="text-muted-foreground text-sm">
                  {t(stat.label)}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
