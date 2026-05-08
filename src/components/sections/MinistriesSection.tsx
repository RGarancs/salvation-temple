import { useState, useCallback, useMemo, useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Music, BookOpen, Fish, Users, Heart, Mic2, Home, Dumbbell, HeartHandshake, Camera, Tent, Hand, Stethoscope, Church } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { bordeauxCardStyle } from '@/styles/bordeaux';
import { BordeauxOverlay } from '@/components/ui/bordeaux-overlay';
import { supabase } from '@/integrations/supabase/client';

const ICONS: Record<string, any> = {
  Music, BookOpen, Fish, Users, Heart, Mic2, Home, Dumbbell, HeartHandshake, Camera, Tent, Stethoscope, Church,
};

const staticMinistries = [
  { key: 'worship', icon: Music, leader: { ru: 'Давид Самойлич', en: 'David Samoylich', lv: 'Dāvids Samoiličs' } },
  { key: 'sundaySchool', icon: BookOpen, leader: { ru: 'Кристина Полтарак', en: 'Kristina Poltarak', lv: 'Kristīna Poltaraka' } },
  { key: 'ribaClub', icon: Fish, leader: { ru: 'Рамона и Артём Дударевы', en: 'Ramona & Artem Dudarevi', lv: 'Ramona un Artjoms Dudarevi' } },
  { key: 'youth', icon: Users, leader: { ru: 'Пётр Вознарски', en: 'Peter Voznarsky', lv: 'Pēteris Vozniarskis' } },
  { key: 'youngLife', icon: Tent, leader: { ru: 'Алёна Мюллер', en: 'Aljona Muller', lv: 'Aļona Millere' } },
  { key: 'loveAndCare', icon: Heart, leader: { ru: 'Кристиана Вятере', en: 'Kristiāna Vjatere', lv: 'Kristiāna Vjātere' } },
  { key: 'choir', icon: Mic2, leader: { ru: 'Алёна Исаков', en: 'Alena Isakov', lv: 'Aļena Isakova' } },
  { key: 'smallGroups', icon: Home, leader: { ru: 'Даниил Полтарак', en: 'Daniel Poltarak', lv: 'Daniēls Poltaraks' } },
  { key: 'mensMinistry', icon: Dumbbell, leader: { ru: 'Илья Ничипуенко', en: 'Ilya Nichipuenko', lv: 'Iļja Ničipuenko' } },
  { key: 'womensMinistry', icon: HeartHandshake, leader: { ru: 'Йоланта', en: 'Jolanta', lv: 'Jolanta' } },
  { key: 'media', icon: Camera, leader: { ru: 'Станислав Исаков', en: 'Stanislav Isakov', lv: 'Staņislavs Isakovs' } },
  { key: 'counselling', icon: Stethoscope, leader: { ru: 'Эля Файзулина', en: 'Elya Fayzulina', lv: 'Eļa Faizuļina' } },
];

interface DisplayMinistry {
  key: string;
  icon: any;
  leader: Record<string, string> | null;
  title?: string;
  desc?: string;
  hover?: string;
}

export const MinistriesSection = () => {
  const { t, language } = useLanguage();
  const [expandedMinistry, setExpandedMinistry] = useState<string | null>(null);
  const [isPaused, setIsPaused] = useState(false);
  const [dbRows, setDbRows] = useState<any[] | null>(null);

  const navigate = useNavigate();

  useEffect(() => {
    supabase.from('ministries').select('*').order('sort_order').then(({ data }) => {
      if (data) setDbRows(data);
    });
  }, []);

  const toggleExpand = useCallback((key: string) => {
    setExpandedMinistry((prev) => (prev === key ? null : key));
  }, []);

  const handleCardClick = useCallback((key: string) => {
    navigate(`/ministry/${key}`);
  }, [navigate]);

  const handleMouseEnter = useCallback((key: string) => {
    setExpandedMinistry(key);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setExpandedMinistry(null);
  }, []);

  const ministries: DisplayMinistry[] = useMemo(() => {
    if (dbRows && dbRows.length > 0) {
      return dbRows.map((r) => {
        const staticMatch = staticMinistries.find((s) => s.key === r.key);
        return {
          key: r.key,
          icon: ICONS[r.icon] || staticMatch?.icon || Church,
          leader: r.leader_name ? { ru: r.leader_name, en: r.leader_name, lv: r.leader_name } : (staticMatch?.leader ?? null),
          title: r.title?.[language] || r.title?.en || '',
          desc: r.description?.[language] || r.description?.en || '',
          hover: r.mission?.[language] || r.mission?.en || '',
        };
      });
    }
    return staticMinistries.map((s) => ({ ...s, leader: s.leader }));
  }, [dbRows, language]);

  const carouselCards = useMemo(() => [...ministries, ...ministries], [ministries]);

  return (
    <section id="ministries" className="section-py bg-cream-dark">
      <div className="section-container">
        <div className="section-header">
          <div className="section-icon bg-gradient-to-br from-coral/20 to-amber/20">
            <Users className="w-7 h-7 text-coral" />
          </div>
          <h2 className="section-title text-gradient-earth mb-4">
            {t('ministries.title')}
          </h2>
          <p className="text-subtitle max-w-2xl mx-auto">
            {t('ministries.subtitle')}
          </p>
        </div>

        {/* Carousel viewport */}
        <div
          className="carousel-viewport overflow-y-visible py-4"
          role="region"
          aria-roledescription="carousel"
          aria-label={t('ministries.title')}
        >
          <div
            className="flex gap-4 w-max carousel-track will-change-transform animate-scroll-left hover:[animation-play-state:paused]"
            style={{ animationPlayState: isPaused ? 'paused' : undefined }}
            onTouchStart={() => setIsPaused(true)}
            onTouchEnd={() => setIsPaused(false)}
          >
            {carouselCards.map((ministry, i) => {
              const Icon = ministry.icon;
              const isExpanded = expandedMinistry === ministry.key;
              return (
                <div
                  key={`${ministry.key}-${i}`}
                  className={`relative overflow-hidden rounded-2xl p-6 text-center transition-all duration-300 group cursor-pointer min-h-[180px] min-w-[260px] md:min-w-[280px] flex-shrink-0 ${
                    isExpanded
                      ? 'scale-105 z-10 shadow-2xl'
                      : 'scale-100 z-0 hover:shadow-xl'
                  }`}
                  style={bordeauxCardStyle}
                  onMouseEnter={() => handleMouseEnter(ministry.key)}
                  onMouseLeave={handleMouseLeave}
                  onClick={() => handleCardClick(ministry.key)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      handleCardClick(ministry.key);
                    }
                  }}
                  tabIndex={0}
                  onFocus={() => {
                    handleMouseEnter(ministry.key);
                    setIsPaused(true);
                  }}
                  onBlur={() => {
                    handleMouseLeave();
                    setIsPaused(false);
                  }}
                  role="button"
                  aria-expanded={isExpanded}
                  aria-label={t(`ministries.${ministry.key}.title`)}
                >
                  <BordeauxOverlay />
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 bg-shine" />

                  {/* Normal content */}
                  <div className={`relative z-10 transition-all duration-300 ${isExpanded ? 'opacity-0 scale-95' : 'opacity-100 scale-100'}`}>
                    <div className="w-12 h-12 rounded-xl bg-white/10 backdrop-blur-sm flex items-center justify-center mx-auto mb-4 border border-white/10">
                      <Icon className="w-6 h-6 text-sunset-light" />
                    </div>
                    <h3 className="font-display text-lg font-bold text-white/95 mb-2">
                      {t(`ministries.${ministry.key}.title`)}
                    </h3>
                    <p className="text-white/60 text-sm mb-3">
                      {t(`ministries.${ministry.key}.desc`)}
                    </p>
                    {ministry.leader && (
                      <div className="pt-3 border-t border-white/10">
                        <p className="text-xs text-white/50">
                          {t('ministries.leader')}: <span className="font-semibold text-white/80">{ministry.leader[language]}</span>
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Expanded content */}
                  <div className={`absolute inset-0 flex flex-col items-center justify-center p-5 transition-all duration-300 ${isExpanded ? 'opacity-100 scale-100' : 'opacity-0 scale-105'}`}>
                    <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center mb-3 border border-white/10">
                      <Icon className="w-5 h-5 text-sunset-light" />
                    </div>
                    <h3 className="font-display text-base font-bold text-white/95 mb-2">
                      {t(`ministries.${ministry.key}.title`)}
                    </h3>
                    <p className="text-white/80 text-xs leading-relaxed text-center mb-2">
                      {t(`ministries.${ministry.key}.hoverInfo`)}
                    </p>
                    <p className="text-xs text-sunset-light font-semibold">
                      {ministry.leader[language]}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Want to Serve CTA */}
        <div className="text-center mt-12">
          <Link
            to="/serve"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-sunset to-coral text-white btn-md rounded-full font-semibold transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
          >
            <Hand className="w-5 h-5" />
            {t('ministries.wantToServe')}
          </Link>
        </div>
      </div>
    </section>
  );
};
