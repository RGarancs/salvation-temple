import { useLanguage } from '@/contexts/LanguageContext';
import { MapPin, Gift, Heart, Info, Clock, Coffee } from 'lucide-react';

export const OrganizationSection = () => {
  const { t } = useLanguage();

  const orgItems = [
    { key: 'location', icon: MapPin, color: 'sage' },
    { key: 'cost', icon: Gift, color: 'amber' },
    { key: 'commitment', icon: Heart, color: 'teal' },
    { key: 'details', icon: Info, color: 'chocolate' },
  ];

  const schedule = [
    { time: '09:50 - 10:00', key: 'welcome', icon: Coffee },
    { time: '10:00 - 10:45', key: 'part1', icon: Clock },
    { time: '10:45 - 11:45', key: 'part2', icon: Clock },
    { time: '11:45 - 12:15', key: 'coffee', icon: Coffee },
    { time: '12:15 - 13:00', key: 'part3', icon: Clock },
    { time: '13:00 - 13:45', key: 'part4', icon: Clock },
    { time: '13:45 - 14:00', key: 'checkout', icon: Clock },
  ];

  return (
    <section className="py-24 bg-cream-dark">
      <div className="container mx-auto px-4">
        <h2 className="font-display text-4xl md:text-5xl font-bold text-center mb-16 text-gradient-earth">
          {t('org.title')}
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {orgItems.map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.key} className="card-warm p-6 text-center">
                <div className={`w-12 h-12 rounded-full bg-${item.color}/10 flex items-center justify-center mx-auto mb-4`}>
                  <Icon className={`w-6 h-6 text-${item.color}`} />
                </div>
                <h3 className="font-display text-xl font-bold mb-2">{t(`org.${item.key}`)}</h3>
                <p className="text-muted-foreground text-sm whitespace-pre-line">{t(`org.${item.key}.value`)}</p>
              </div>
            );
          })}
        </div>

        <div className="max-w-3xl mx-auto">
          <h3 className="font-display text-2xl font-bold text-center mb-8">{t('schedule.title')}</h3>
          <div className="space-y-3">
            {schedule.map((item) => (
              <div key={item.key} className="flex items-start gap-4 p-4 bg-background rounded-xl border border-border">
                <span className="text-sm font-mono text-sage font-semibold whitespace-nowrap">{item.time}</span>
                <div className="flex-1">
                  <h4 className="font-semibold text-foreground">{t(`schedule.${item.key}`)}</h4>
                  <p className="text-sm text-muted-foreground whitespace-pre-line">{t(`schedule.${item.key}.desc`)}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
