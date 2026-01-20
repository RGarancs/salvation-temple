import { useLanguage } from '@/contexts/LanguageContext';

const team = [
  { key: 'elya', color: 'amber' },
  { key: 'alex', color: 'sage' },
  { key: 'tanya', color: 'teal' },
  { key: 'sasha', color: 'olive' },
  { key: 'richards', color: 'chocolate' },
  { key: 'victoria', color: 'orange' },
];

export const TeamSection = () => {
  const { t } = useLanguage();

  return (
    <section id="team" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="font-display text-4xl md:text-5xl font-bold text-center mb-16 text-gradient-earth">
          {t('team.title')}
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {team.map((member) => (
            <div key={member.key} className="group card-warm p-6 text-center hover:border-sage/30">
              <div className={`w-20 h-20 rounded-full bg-${member.color}/20 mx-auto mb-4 flex items-center justify-center text-2xl font-display font-bold text-${member.color}`}>
                {t(`team.${member.key}.name`).charAt(0)}
              </div>
              <span className={`text-xs font-bold text-${member.color} uppercase tracking-wider`}>
                {t(`team.${member.key}.role`)}
              </span>
              <h3 className="font-display text-xl font-bold mt-1 mb-3">{t(`team.${member.key}.name`)}</h3>
              <p className="text-sm text-muted-foreground">{t(`team.${member.key}.desc`)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
