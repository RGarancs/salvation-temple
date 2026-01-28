import { useLanguage } from '@/contexts/LanguageContext';
import { Church, Baby, Users, Heart, Music, Home, Hand, Smile, UserCircle, Video, Sparkles } from 'lucide-react';

export const MinistriesSection = () => {
  const { t } = useLanguage();

  const ministries = [
    { key: 'worship', icon: Church, color: 'sunset', leader: 'David Samoylich' },
    { key: 'sundaySchool', icon: Baby, color: 'amber', leader: 'Kristina Poltarak' },
    { key: 'ribaClub', icon: Users, color: 'terracotta', leader: 'Ramona & Artem Dudarevi' },
    { key: 'youth', icon: Sparkles, color: 'coral', leader: 'Peter Voznarsky' },
    { key: 'youngLife', icon: Smile, color: 'sunset', leader: null },
    { key: 'charity', icon: Heart, color: 'amber', leader: 'Kristiana Vjatere' },
    { key: 'choir', icon: Music, color: 'terracotta', leader: 'Alena Isakov' },
    { key: 'smallGroups', icon: Home, color: 'coral', leader: 'Daniel Poltarak' },
    { key: 'mensMinistry', icon: UserCircle, color: 'sunset', leader: 'Ilya Nichipuenko' },
    { key: 'womensMinistry', icon: UserCircle, color: 'coral', leader: 'Viktorija & Jolanta' },
    { key: 'loveAndCare', icon: Heart, color: 'amber', leader: 'Kristiana Vjatere' },
    { key: 'media', icon: Video, color: 'terracotta', leader: null },
  ];

  const colorMap: Record<string, { bg: string; icon: string; border: string }> = {
    sunset: { bg: 'bg-sunset/10', icon: 'text-sunset', border: 'hover:border-sunset/30' },
    amber: { bg: 'bg-amber/10', icon: 'text-amber', border: 'hover:border-amber/30' },
    terracotta: { bg: 'bg-terracotta/10', icon: 'text-terracotta', border: 'hover:border-terracotta/30' },
    coral: { bg: 'bg-coral/10', icon: 'text-coral', border: 'hover:border-coral/30' },
  };

  return (
    <section id="ministries" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-br from-sunset/20 to-amber/20 mb-6">
            <Church className="w-7 h-7 text-sunset" />
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-gradient-earth mb-4">
            {t('ministries.title')}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {t('ministries.subtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {ministries.map((ministry) => {
            const Icon = ministry.icon;
            const colors = colorMap[ministry.color];
            return (
              <div
                key={ministry.key}
                className={`card-warm p-6 text-center group cursor-pointer ${colors.border}`}
              >
                <div className={`w-14 h-14 rounded-xl ${colors.bg} flex items-center justify-center mx-auto mb-4 transition-transform group-hover:scale-110`}>
                  <Icon className={`w-7 h-7 ${colors.icon}`} />
                </div>
                <h3 className="font-display text-lg font-bold mb-2 text-foreground">
                  {t(`ministries.${ministry.key}.title`)}
                </h3>
                <p className="text-muted-foreground text-sm mb-3">
                  {t(`ministries.${ministry.key}.desc`)}
                </p>
                {ministry.leader && (
                  <p className="text-xs font-medium text-sunset">
                    {t('ministries.leader')}: {ministry.leader}
                  </p>
                )}
              </div>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <a
            href="#serve"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-sunset to-coral text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
          >
            <Hand className="w-5 h-5" />
            {t('ministries.wantToServe')}
          </a>
        </div>
      </div>
    </section>
  );
};
