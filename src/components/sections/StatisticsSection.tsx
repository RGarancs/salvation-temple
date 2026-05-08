import { useState, useEffect, useMemo } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Users, Droplets, BookOpen, Sun, Home, Gift, Heart, LucideIcon } from 'lucide-react';
import galleryCongregation from '@/assets/gallery-congregation.jpg';
import { bordeauxCardStyle } from '@/styles/bordeaux';
import { BordeauxOverlay } from '@/components/ui/bordeaux-overlay';
import { supabase } from '@/integrations/supabase/client';

const STAT_ICONS: Record<string, LucideIcon> = {
  members: Users, baptisms: Droplets, sundaySchool: BookOpen, summerCamp: Sun, childrenGifts: Gift, familiesHelped: Home,
};

const fallbackStats = [
  { key: 'members', value: '150', icon: Users, label: 'statistics.total' },
  { key: 'baptisms', value: '12', icon: Droplets, label: 'statistics.baptisms', hoverInfo: 'statistics.baptisms.hover' },
  { key: 'sundaySchool', value: '80', icon: BookOpen, label: 'statistics.sundaySchoolPeople', hoverInfo: 'statistics.sundaySchool.hover' },
  { key: 'summerCamp', value: '90', icon: Sun, label: 'statistics.summerCamp', hoverInfo: 'statistics.summerCamp.hover' },
  { key: 'childrenGifts', value: '800', icon: Gift, label: 'statistics.childrenGifts', hoverInfo: 'statistics.childrenGifts.hover' },
  { key: 'familiesHelped', value: '75', icon: Home, label: 'statistics.familiesHelped', hoverInfo: 'statistics.familiesHelped.hover' },
];

export const StatisticsSection = () => {
  const { t, language } = useLanguage();
  const [hoveredStat, setHoveredStat] = useState<string | null>(null);
  const [dbRows, setDbRows] = useState<any[] | null>(null);

  useEffect(() => {
    supabase.from('site_statistics').select('*').then(({ data }) => {
      if (data) setDbRows(data);
    });
  }, []);

  const communityStats = useMemo(() => {
    if (dbRows && dbRows.length > 0) {
      return dbRows.map((r: any) => {
        const fb = fallbackStats.find((s) => s.key === r.key);
        return {
          key: r.key,
          value: String(r.value),
          icon: STAT_ICONS[r.key] || fb?.icon || Heart,
          label: r.label?.[language] || r.label?.en || (fb ? t(fb.label) : r.key),
          isLabelText: true,
          hoverInfo: fb?.hoverInfo,
        };
      });
    }
    return fallbackStats.map((s) => ({ ...s, isLabelText: false }));
  }, [dbRows, language, t]);


  return (
    <section id="statistics" className="section-py relative overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={galleryCongregation}
          alt=""
          loading="lazy"
          className="w-full h-full object-cover opacity-[0.25]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/85 via-background/90 to-background" />
      </div>

      <div className="section-container relative z-10">
        <div className="section-header">
          <div className="section-icon bg-gradient-to-br from-amber/20 to-coral/20">
            <Heart className="w-7 h-7 text-amber" />
          </div>
          <h2 className="section-title text-gradient-earth mb-4">
            {t('statistics.title')}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-sm">
            {t('statistics.subtitle')}
          </p>
        </div>

        {/* Compact stats grid — single row on desktop */}
        <div className="grid grid-cols-3 lg:grid-cols-6 gap-3 md:gap-4 max-w-5xl mx-auto">
          {communityStats.map((stat) => {
            const Icon = stat.icon;
            const isHovered = hoveredStat === stat.key;
            return (
              <div
                key={stat.key}
                className="relative overflow-hidden rounded-2xl p-3 text-center transition-all duration-300 hover:shadow-xl hover:-translate-y-1 group cursor-pointer"
                style={bordeauxCardStyle}
                onMouseEnter={() => setHoveredStat(stat.key)}
                onMouseLeave={() => setHoveredStat(null)}
                tabIndex={0}
                onFocus={() => setHoveredStat(stat.key)}
                onBlur={() => setHoveredStat(null)}
                role="button"
                aria-label={`${t(stat.label)}: ${stat.value}`}
              >
                <BordeauxOverlay />
                <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-2xl bg-shine" />

                {/* Normal content */}
                <div className={`relative z-10 transition-opacity duration-300 ${isHovered && stat.hoverInfo ? 'opacity-0' : 'opacity-100'}`}>
                  <div className="w-8 h-8 rounded-xl bg-white/10 flex items-center justify-center mx-auto mb-1 border border-white/10">
                    <Icon className="w-4 h-4 text-sunset-light" />
                  </div>
                  <div className="font-display text-xl md:text-2xl font-bold text-sunset-light mb-1">
                    {stat.value}
                  </div>
                  <p className="text-white/60 text-xs leading-tight">
                    {t(stat.label)}
                  </p>
                </div>

                {/* Hover content */}
                {stat.hoverInfo && (
                  <div className={`absolute inset-0 flex items-center justify-center p-3 transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
                    <p className="text-white/90 text-xs leading-relaxed text-center">
                      {t(stat.hoverInfo)}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
