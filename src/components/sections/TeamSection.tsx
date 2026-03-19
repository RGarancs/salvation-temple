import { useLanguage } from '@/contexts/LanguageContext';
import { Users } from 'lucide-react';

const team = [
  { key: 'elya', color: 'sunset' },
  { key: 'alex', color: 'terracotta' },
  { key: 'tanya', color: 'amber' },
  { key: 'sasha', color: 'coral' },
  { key: 'richards', color: 'burnt' },
  { key: 'victoria', color: 'cashmere' },
];

const colorMap: Record<string, { bg: string; text: string }> = {
  sunset: { bg: 'bg-sunset/15', text: 'text-sunset' },
  terracotta: { bg: 'bg-terracotta/15', text: 'text-terracotta' },
  amber: { bg: 'bg-amber/15', text: 'text-amber' },
  coral: { bg: 'bg-coral/15', text: 'text-coral' },
  burnt: { bg: 'bg-burnt/15', text: 'text-burnt' },
  cashmere: { bg: 'bg-cashmere/15', text: 'text-cashmere-dark' },
};

export const TeamSection = () => {
  const { t } = useLanguage();

  return (
    <section id="team" className="section-py bg-background">
      <div className="section-container">
        <div className="text-center mb-12">
          <div className="section-icon bg-gradient-to-br from-terracotta/20 to-coral/20">
            <Users className="w-7 h-7 text-terracotta" />
          </div>
          <h2 className="section-title text-gradient-earth">
            {t('team.title')}
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {team.map((member) => {
            const colors = colorMap[member.color];
            return (
              <div key={member.key} className="group card-warm p-6 text-center">
                <div className={`w-16 h-16 rounded-full ${colors.bg} mx-auto mb-4 flex items-center justify-center text-xl font-display font-bold ${colors.text}`}>
                  {t(`team.${member.key}.name`).charAt(0)}
                </div>
                <span className={`text-xs font-bold ${colors.text} uppercase tracking-wider`}>
                  {t(`team.${member.key}.role`)}
                </span>
                <h3 className="font-display text-lg font-bold mt-1 mb-3 text-foreground">{t(`team.${member.key}.name`)}</h3>
                <p className="text-sm text-foreground/70 leading-relaxed">{t(`team.${member.key}.desc`)}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
