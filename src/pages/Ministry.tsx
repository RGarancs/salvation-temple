import { LanguageProvider, useLanguage } from '@/contexts/LanguageContext';
import { ChurchHeader } from '@/components/ChurchHeader';
import { ChurchFooter } from '@/components/sections/ChurchFooter';
import { useParams, Link } from 'react-router-dom';
import { Music, BookOpen, Fish, Users, Heart, Mic2, Home, Dumbbell, HeartHandshake, Camera, Tent, Stethoscope, ArrowLeft, type LucideIcon } from 'lucide-react';
import { bordeauxCardStyle } from '@/styles/bordeaux';
import { BordeauxOverlay } from '@/components/ui/bordeaux-overlay';

interface MinistryMeta {
  icon: LucideIcon;
  leader: Record<string, string>;
}

const ministryMeta: Record<string, MinistryMeta> = {
  worship: { icon: Music, leader: { ru: 'Давид Самойлич', en: 'David Samoylich', lv: 'Dāvids Samoiličs' } },
  sundaySchool: { icon: BookOpen, leader: { ru: 'Кристина Полтарак', en: 'Kristina Poltarak', lv: 'Kristīna Poltaraka' } },
  ribaClub: { icon: Fish, leader: { ru: 'Рамона и Артём Дударевы', en: 'Ramona & Artem Dudarevi', lv: 'Ramona un Artjoms Dudarevi' } },
  youth: { icon: Users, leader: { ru: 'Пётр Вознарски', en: 'Peter Voznarsky', lv: 'Pēteris Vozniarskis' } },
  youngLife: { icon: Tent, leader: { ru: 'Алёна Мюллер', en: 'Aljona Muller', lv: 'Aļona Millere' } },
  loveAndCare: { icon: Heart, leader: { ru: 'Кристиана Вятере', en: 'Kristiāna Vjatere', lv: 'Kristiāna Vjātere' } },
  choir: { icon: Mic2, leader: { ru: 'Алёна Исаков', en: 'Alena Isakov', lv: 'Aļena Isakova' } },
  smallGroups: { icon: Home, leader: { ru: 'Даниил Полтарак', en: 'Daniel Poltarak', lv: 'Daniēls Poltaraks' } },
  mensMinistry: { icon: Dumbbell, leader: { ru: 'Илья Ничипуенко', en: 'Ilya Nichipuenko', lv: 'Iļja Ničipuenko' } },
  womensMinistry: { icon: HeartHandshake, leader: { ru: 'Йоланта', en: 'Jolanta', lv: 'Jolanta' } },
  media: { icon: Camera, leader: { ru: 'Станислав Исаков', en: 'Stanislav Isakov', lv: 'Staņislavs Isakovs' } },
  counselling: { icon: Stethoscope, leader: { ru: 'Эля Файзулина', en: 'Elya Fayzulina', lv: 'Eļa Faizuļina' } },
};

const MinistryContent = () => {
  const { key } = useParams<{ key: string }>();
  const { t, language } = useLanguage();

  const ministry = key ? ministryMeta[key] : null;

  if (!ministry || !key) {
    return (
      <section className="page-py bg-background min-h-screen">
        <div className="section-container text-center">
          <h1 className="section-title text-gradient-earth mb-4">Ministry not found</h1>
          <Link to="/#ministries" className="text-sunset hover:underline">
            ← Back to ministries
          </Link>
        </div>
      </section>
    );
  }

  const Icon = ministry.icon;

  return (
    <section className="page-py bg-background min-h-screen">
      <div className="section-container">
        <Link
          to="/#ministries"
          className="inline-flex items-center gap-2 text-sunset hover:text-sunset/80 transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          {t('ministries.title')}
        </Link>

        <div className="max-w-4xl mx-auto">
          {/* Hero card */}
          <div
            className="relative overflow-hidden rounded-2xl p-8 md:p-12 mb-8"
            style={bordeauxCardStyle}
          >
            <BordeauxOverlay />
            <div className="relative z-10">
              <div className="w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-sm flex items-center justify-center mb-6 border border-white/10">
                <Icon className="w-8 h-8 text-sunset-light" />
              </div>
              <h1 className="font-display text-3xl md:text-4xl font-bold text-white/95 mb-4">
                {t(`ministries.${key}.title`)}
              </h1>
              <p className="text-white/70 text-lg leading-relaxed mb-6">
                {t(`ministries.${key}.hoverInfo`)}
              </p>
              <div className="pt-4 border-t border-white/10">
                <p className="text-white/50 text-sm">
                  {t('ministries.leader')}: <span className="font-semibold text-white/80">{ministry.leader[language]}</span>
                </p>
              </div>
            </div>
          </div>

          {/* Details */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="card-warm p-6">
              <h3 className="font-display text-xl font-bold text-foreground mb-3">
                {t(`ministry.detail.whatWeDo`)}
              </h3>
              <p className="text-foreground/70 leading-relaxed">
                {t(`ministries.${key}.hoverInfo`)}
              </p>
            </div>

            <div className="card-warm p-6">
              <h3 className="font-display text-xl font-bold text-foreground mb-3">
                {t(`ministry.detail.joinUs`)}
              </h3>
              <p className="text-foreground/70 leading-relaxed mb-4">
                {t('ministry.detail.joinDesc')}
              </p>
              <Link
                to="/serve"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-sunset to-coral text-white btn-md rounded-full font-semibold transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
              >
                {t('ministries.wantToServe')}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const MinistryPage = () => (
  <LanguageProvider>
    <div className="min-h-screen bg-background font-body">
      <ChurchHeader />
      <MinistryContent />
      <ChurchFooter />
    </div>
  </LanguageProvider>
);

export default MinistryPage;
