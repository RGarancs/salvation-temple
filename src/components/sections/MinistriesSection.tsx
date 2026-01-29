import { useLanguage } from '@/contexts/LanguageContext';
import { Music, BookOpen, Fish, Users, Heart, Mic2, Home, Dumbbell, HeartHandshake, Camera, Sparkles, Tent, Hand } from 'lucide-react';

export const MinistriesSection = () => {
  const { t, language } = useLanguage();

  const ministries = [
    { 
      key: 'worship', 
      icon: Music, 
      color: 'sunset',
      leader: { ru: 'Давид Самойлич', en: 'David Samoylich', lv: 'Dāvids Samoiličs' }
    },
    { 
      key: 'sundaySchool', 
      icon: BookOpen, 
      color: 'coral',
      leader: { ru: 'Кристина Полтарак', en: 'Kristina Poltarak', lv: 'Kristīna Poltaraka' }
    },
    { 
      key: 'ribaClub', 
      icon: Fish, 
      color: 'amber',
      leader: { ru: 'Рамона и Артём Дударевы', en: 'Ramona & Artem Dudarevi', lv: 'Ramona un Artjoms Dudarevi' }
    },
    { 
      key: 'youth', 
      icon: Users, 
      color: 'terracotta',
      leader: { ru: 'Пётр Вознарски', en: 'Peter Voznarsky', lv: 'Pēteris Vozniarskis' }
    },
    { 
      key: 'youngLife', 
      icon: Tent, 
      color: 'burnt',
      leader: { ru: 'Алёна Мюллер', en: 'Aljona Muller', lv: 'Aļona Millere' }
    },
    { 
      key: 'loveAndCare', 
      icon: Heart, 
      color: 'sunset',
      leader: { ru: 'Кристиана Вятере', en: 'Kristiāna Vjatere', lv: 'Kristiāna Vjātere' }
    },
    { 
      key: 'choir', 
      icon: Mic2, 
      color: 'coral',
      leader: { ru: 'Алёна Исаков', en: 'Alena Isakov', lv: 'Aļena Isakova' }
    },
    { 
      key: 'smallGroups', 
      icon: Home, 
      color: 'amber',
      leader: { ru: 'Даниил Полтарак', en: 'Daniel Poltarak', lv: 'Daniēls Poltaraks' }
    },
    { 
      key: 'mensMinistry', 
      icon: Dumbbell, 
      color: 'terracotta',
      leader: { ru: 'Илья Ничипуенко', en: 'Ilya Nichipuenko', lv: 'Iļja Ničipuenko' }
    },
    { 
      key: 'womensMinistry', 
      icon: HeartHandshake, 
      color: 'burnt',
      leader: { ru: 'Виктория и Йоланта', en: 'Viktorija & Jolanta', lv: 'Viktorija un Jolanta' }
    },
    { 
      key: 'charity', 
      icon: Sparkles, 
      color: 'sunset',
      leader: { ru: 'Кристиана Вятере', en: 'Kristiana Vjatere', lv: 'Kristiāna Vjātere' }
    },
    { 
      key: 'media', 
      icon: Camera, 
      color: 'coral',
      leader: { ru: 'Станислав Исаков', en: 'Stanislav Isakov', lv: 'Staņislavs Isakovs' }
    },
  ];

  const colorMap: Record<string, { bg: string; icon: string; border: string }> = {
    sunset: { bg: 'bg-sunset/10', icon: 'text-sunset', border: 'border-sunset/20' },
    coral: { bg: 'bg-coral/10', icon: 'text-coral', border: 'border-coral/20' },
    amber: { bg: 'bg-amber/10', icon: 'text-amber', border: 'border-amber/20' },
    terracotta: { bg: 'bg-terracotta/10', icon: 'text-terracotta', border: 'border-terracotta/20' },
    burnt: { bg: 'bg-burnt/10', icon: 'text-burnt', border: 'border-burnt/20' },
  };

  return (
    <section id="ministries" className="py-24 bg-cream-dark">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-br from-coral/20 to-amber/20 mb-6">
            <Users className="w-7 h-7 text-coral" />
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-gradient-earth mb-4">
            {t('ministries.title')}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {t('ministries.subtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {ministries.map((ministry) => {
            const Icon = ministry.icon;
            const colors = colorMap[ministry.color];
            return (
              <div 
                key={ministry.key} 
                className={`card-warm p-6 text-center border ${colors.border} transition-all duration-300 hover:shadow-lg hover:-translate-y-1`}
              >
                <div className={`w-12 h-12 rounded-xl ${colors.bg} flex items-center justify-center mx-auto mb-4`}>
                  <Icon className={`w-6 h-6 ${colors.icon}`} />
                </div>
                <h3 className="font-display text-lg font-bold text-foreground mb-2">
                  {t(`ministries.${ministry.key}.title`)}
                </h3>
                <p className="text-muted-foreground text-sm mb-3">
                  {t(`ministries.${ministry.key}.desc`)}
                </p>
                {ministry.leader && (
                  <div className="pt-3 border-t border-border">
                    <p className="text-xs text-muted-foreground">
                      {t('ministries.leader')}: <span className="font-semibold text-foreground">{ministry.leader[language]}</span>
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Want to Serve CTA */}
        <div className="text-center mt-12">
          <a
            href="https://forms.gle/example"
            target="_blank"
            rel="noopener noreferrer"
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
