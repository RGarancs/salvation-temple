import { useLanguage } from '@/contexts/LanguageContext';

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
    <section id="team" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="font-display text-4xl md:text-5xl font-bold text-center mb-16 text-gradient-earth">
          {t('team.title')}
        </h2>

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
                <p className="text-sm text-muted-foreground leading-relaxed">{t(`team.${member.key}.desc`)}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
