import { useEffect, useState } from 'react';
import { LanguageProvider, useLanguage } from '@/contexts/LanguageContext';
import { ChurchHeader } from '@/components/ChurchHeader';
import { ChurchFooter } from '@/components/sections/ChurchFooter';
import { useParams, Link } from 'react-router-dom';
import { Music, BookOpen, Fish, Users, Heart, Mic2, Home, Dumbbell, HeartHandshake, Camera, Tent, Stethoscope, ArrowLeft, HandHeart, Sparkles, MessageCircle, Send, Instagram, Youtube, Facebook, Globe, type LucideIcon } from 'lucide-react';
import { bordeauxCardStyle } from '@/styles/bordeaux';
import { BordeauxOverlay } from '@/components/ui/bordeaux-overlay';
import { supabase } from '@/integrations/supabase/client';

const SOCIAL_META: Record<string, { icon: LucideIcon; label: string; color: string }> = {
  whatsapp: { icon: MessageCircle, label: 'WhatsApp', color: 'bg-green-600 hover:bg-green-700' },
  telegram: { icon: Send, label: 'Telegram', color: 'bg-sky-600 hover:bg-sky-700' },
  instagram: { icon: Instagram, label: 'Instagram', color: 'bg-pink-600 hover:bg-pink-700' },
  youtube: { icon: Youtube, label: 'YouTube', color: 'bg-red-600 hover:bg-red-700' },
  facebook: { icon: Facebook, label: 'Facebook', color: 'bg-blue-600 hover:bg-blue-700' },
  website: { icon: Globe, label: 'Website', color: 'bg-zinc-700 hover:bg-zinc-800' },
};

const iconMap: Record<string, LucideIcon> = {
  worship: Music, sundaySchool: BookOpen, ribaClub: Fish, youth: Users,
  youngLife: Tent, loveAndCare: Heart, choir: Mic2, smallGroups: Home,
  mensMinistry: Dumbbell, womensMinistry: HeartHandshake, media: Camera, counselling: Stethoscope,
};

const fallbackLeader: Record<string, Record<string, string>> = {
  worship: { ru: 'Давид Самойлич', en: 'David Samoylich', lv: 'Dāvids Samoiličs' },
  sundaySchool: { ru: 'Кристина Полтарак', en: 'Kristina Poltarak', lv: 'Kristīna Poltaraka' },
  ribaClub: { ru: 'Рамона и Артём Дударевы', en: 'Ramona & Artem Dudarevi', lv: 'Ramona un Artjoms Dudarevi' },
  youth: { ru: 'Пётр Вознарски', en: 'Peter Voznarsky', lv: 'Pēteris Vozniarskis' },
  youngLife: { ru: 'Алёна Мюллер', en: 'Aljona Muller', lv: 'Aļona Millere' },
  loveAndCare: { ru: 'Кристиана Вятере', en: 'Kristiāna Vjatere', lv: 'Kristiāna Vjātere' },
  choir: { ru: 'Алёна Исаков', en: 'Alena Isakov', lv: 'Aļena Isakova' },
  smallGroups: { ru: 'Даниил Полтарак', en: 'Daniel Poltarak', lv: 'Daniēls Poltaraks' },
  mensMinistry: { ru: 'Илья Ничипуенко', en: 'Ilya Nichipuenko', lv: 'Iļja Ničipuenko' },
  womensMinistry: { ru: 'Йоланта', en: 'Jolanta', lv: 'Jolanta' },
  media: { ru: 'Станислав Исаков', en: 'Stanislav Isakov', lv: 'Staņislavs Isakovs' },
  counselling: { ru: 'Эля Файзулина', en: 'Elya Fayzulina', lv: 'Eļa Faizuļina' },
};

interface MinistryRow {
  mission: Record<string, string> | null;
  prayer_needs: Record<string, string> | null;
  how_to_help: Record<string, string> | null;
  description: Record<string, string> | null;
  leader_name: string | null;
  leader_image_url: string | null;
  external_links: Record<string, string> | null;
}

const pickLang = (obj: Record<string, string> | null | undefined, lang: string, fallback = ''): string => {
  if (!obj) return fallback;
  return obj[lang] || obj.en || obj.ru || fallback;
};

const MinistryContent = () => {
  const { key } = useParams<{ key: string }>();
  const { t, language } = useLanguage();
  const [row, setRow] = useState<MinistryRow | null>(null);
  const [gallery, setGallery] = useState<{ id: string; image_url: string }[]>([]);

  useEffect(() => {
    if (!key) return;
    supabase.from('ministries').select('mission,prayer_needs,how_to_help,description,leader_name,leader_image_url,external_links').eq('key', key).maybeSingle()
      .then(({ data }) => setRow(data as any));
    supabase.from('ministry_gallery').select('id,image_url').eq('ministry_key', key).order('sort_order')
      .then(({ data }) => data && setGallery(data));
  }, [key]);

  const Icon = key && iconMap[key] ? iconMap[key] : Heart;

  if (!key || !iconMap[key]) {
    return (
      <section className="page-py bg-background min-h-screen">
        <div className="section-container text-center">
          <h1 className="section-title text-gradient-earth mb-4">Ministry not found</h1>
          <Link to="/#ministries" className="text-sunset hover:underline">← Back to ministries</Link>
        </div>
      </section>
    );
  }

  const leaderName = row?.leader_name || fallbackLeader[key]?.[language] || '';
  const mission = pickLang(row?.mission, language);
  const prayer = pickLang(row?.prayer_needs, language);
  const help = pickLang(row?.how_to_help, language);
  const description = pickLang(row?.description, language) || t(`ministries.${key}.hoverInfo`);

  return (
    <section className="page-py bg-background min-h-screen">
      <div className="section-container">
        <Link to="/#ministries" className="inline-flex items-center gap-2 text-sunset hover:text-sunset/80 transition-colors mb-8">
          <ArrowLeft className="w-4 h-4" />{t('ministries.title')}
        </Link>

        <div className="max-w-5xl mx-auto space-y-6">
          {/* Hero */}
          <div className="relative overflow-hidden rounded-2xl p-8 md:p-12" style={bordeauxCardStyle}>
            <BordeauxOverlay />
            <div className="relative z-10 flex flex-col md:flex-row gap-6 items-start">
              <div className="flex-1">
                <div className="w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-sm flex items-center justify-center mb-6 border border-white/10">
                  <Icon className="w-8 h-8 text-sunset-light" />
                </div>
                <h1 className="font-display text-3xl md:text-4xl font-bold text-white/95 mb-4">
                  {t(`ministries.${key}.title`)}
                </h1>
                <p className="text-white/70 text-lg leading-relaxed mb-6">{description}</p>
                <div className="pt-4 border-t border-white/10 flex items-center gap-4">
                  {row?.leader_image_url && (
                    <img src={row.leader_image_url} alt={leaderName} className="w-16 h-16 rounded-full object-cover border-2 border-white/20" />
                  )}
                  <div>
                    <p className="text-xs text-white/50 uppercase tracking-wide">{t('ministries.leader')}</p>
                    <p className="font-semibold text-white/90">{leaderName}</p>
                  </div>
                </div>
                {row?.external_links && Object.entries(row.external_links).some(([, v]) => !!v) && (
                  <div className="mt-6 pt-4 border-t border-white/10">
                    <p className="text-xs text-white/50 uppercase tracking-wide mb-3">{t('ministry.detail.followUs') || 'Connect with this ministry'}</p>
                    <div className="flex flex-wrap gap-2">
                      {Object.entries(row.external_links).map(([k, url]) => {
                        if (!url) return null;
                        const meta = SOCIAL_META[k];
                        if (!meta) return null;
                        const Icon = meta.icon;
                        return (
                          <a
                            key={k}
                            href={url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-white text-sm font-medium transition-all ${meta.color}`}
                          >
                            <Icon className="w-4 h-4" /> {meta.label}
                          </a>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Mission */}
          {mission && (
            <div className="card-warm p-6">
              <h3 className="font-display text-xl font-bold text-foreground mb-3 flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-sunset" />
                {t('ministry.detail.mission') || 'Our Mission'}
              </h3>
              <p className="text-foreground/70 leading-relaxed whitespace-pre-line">{mission}</p>
            </div>
          )}

          {/* Prayer + Help grid */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="card-warm p-6">
              <h3 className="font-display text-xl font-bold text-foreground mb-3 flex items-center gap-2">
                <Heart className="w-5 h-5 text-coral" />
                {t('ministry.detail.prayerNeeds') || 'Pray For This Ministry'}
              </h3>
              <p className="text-foreground/70 leading-relaxed whitespace-pre-line">
                {prayer || (t('ministry.detail.prayerNeedsEmpty') || 'Please pray for this ministry, its leaders and the people we serve.')}
              </p>
            </div>

            <div className="card-warm p-6">
              <h3 className="font-display text-xl font-bold text-foreground mb-3 flex items-center gap-2">
                <HandHeart className="w-5 h-5 text-amber" />
                {t('ministry.detail.joinUs')}
              </h3>
              <p className="text-foreground/70 leading-relaxed whitespace-pre-line mb-4">
                {help || t('ministry.detail.joinDesc')}
              </p>
              <Link
                to="/serve"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-sunset to-coral text-white btn-md rounded-full font-semibold transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
              >
                {t('ministries.wantToServe')}
              </Link>
            </div>
          </div>

          {/* Gallery */}
          {gallery.length > 0 && (
            <div className="card-warm p-6">
              <h3 className="font-display text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                <Camera className="w-5 h-5 text-sunset" />
                {t('ministry.detail.gallery') || 'Gallery'}
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {gallery.map(g => (
                  <img key={g.id} src={g.image_url} alt="" loading="lazy" className="w-full h-40 object-cover rounded-lg" />
                ))}
              </div>
            </div>
          )}
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
