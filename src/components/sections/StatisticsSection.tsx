import { useLanguage } from '@/contexts/LanguageContext';
import { Users, Baby, GraduationCap, UserCheck, UserCircle, Heart } from 'lucide-react';

export const StatisticsSection = () => {
  const { t } = useLanguage();

  const stats = [
    { key: 'total', value: 150, icon: Users, color: 'sunset' },
    { key: 'children', value: 25, icon: Baby, color: 'coral' },
    { key: 'youth', value: 30, icon: GraduationCap, color: 'amber' },
    { key: 'adults', value: 70, icon: UserCheck, color: 'terracotta' },
    { key: 'seniors', value: 25, icon: UserCircle, color: 'burnt' },
  ];

  const genderStats = [
    { key: 'male', percentage: 45, color: 'bg-sunset' },
    { key: 'female', percentage: 55, color: 'bg-coral' },
  ];

  const colorMap: Record<string, { bg: string; icon: string; border: string }> = {
    sunset: { bg: 'bg-sunset/10', icon: 'text-sunset', border: 'border-sunset/30' },
    coral: { bg: 'bg-coral/10', icon: 'text-coral', border: 'border-coral/30' },
    amber: { bg: 'bg-amber/10', icon: 'text-amber', border: 'border-amber/30' },
    terracotta: { bg: 'bg-terracotta/10', icon: 'text-terracotta', border: 'border-terracotta/30' },
    burnt: { bg: 'bg-burnt/10', icon: 'text-burnt', border: 'border-burnt/30' },
  };

  return (
    <section id="statistics" className="py-24 bg-cream-dark">
      <div className="container mx-auto px-4">
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

        {/* Main Stats */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-5xl mx-auto mb-12">
          {stats.map((stat) => {
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
                  {t(`statistics.${stat.key}`)}
                </p>
              </div>
            );
          })}
        </div>

        {/* Gender Distribution */}
        <div className="max-w-md mx-auto">
          <h3 className="font-display text-lg font-bold text-center text-foreground mb-6">
            {t('statistics.genderDistribution')}
          </h3>
          <div className="card-warm p-6">
            <div className="flex items-center gap-4 mb-4">
              {genderStats.map((gender) => (
                <div key={gender.key} className="flex-1 text-center">
                  <div className={`font-display text-2xl font-bold ${gender.key === 'male' ? 'text-sunset' : 'text-coral'}`}>
                    {gender.percentage}%
                  </div>
                  <p className="text-muted-foreground text-sm">
                    {t(`statistics.${gender.key}`)}
                  </p>
                </div>
              ))}
            </div>
            <div className="h-4 rounded-full bg-muted overflow-hidden flex">
              {genderStats.map((gender) => (
                <div
                  key={gender.key}
                  className={`${gender.color} h-full transition-all duration-500`}
                  style={{ width: `${gender.percentage}%` }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
