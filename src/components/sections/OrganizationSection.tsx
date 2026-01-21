import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { MapPin, Gift, Heart, Info, Clock, Coffee, Settings, ChevronDown } from 'lucide-react';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';

export const OrganizationSection = () => {
  const { t } = useLanguage();
  const [isScheduleOpen, setIsScheduleOpen] = useState(false);

  const orgItems = [
    { key: 'location', icon: MapPin, color: 'sunset' },
    { key: 'cost', icon: Gift, color: 'amber' },
    { key: 'commitment', icon: Heart, color: 'terracotta' },
    { key: 'details', icon: Info, color: 'coral' },
  ];

  const colorMap: Record<string, { bg: string; icon: string }> = {
    sunset: { bg: 'bg-sunset/10', icon: 'text-sunset' },
    amber: { bg: 'bg-amber/10', icon: 'text-amber' },
    terracotta: { bg: 'bg-terracotta/10', icon: 'text-terracotta' },
    coral: { bg: 'bg-coral/10', icon: 'text-coral' },
  };

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
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-br from-sunset/20 to-amber/20 mb-6">
            <Settings className="w-7 h-7 text-sunset" />
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-gradient-earth">
            {t('org.title')}
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16 max-w-5xl mx-auto">
          {orgItems.map((item) => {
            const Icon = item.icon;
            const colors = colorMap[item.color];
            return (
              <div key={item.key} className="card-warm p-6 text-center">
                <div className={`w-12 h-12 rounded-full ${colors.bg} flex items-center justify-center mx-auto mb-4`}>
                  <Icon className={`w-6 h-6 ${colors.icon}`} />
                </div>
                <h3 className="font-display text-lg font-bold mb-2 text-foreground">{t(`org.${item.key}`)}</h3>
                <p className="text-muted-foreground text-sm whitespace-pre-line">{t(`org.${item.key}.value`)}</p>
              </div>
            );
          })}
        </div>

        {/* Saturday Schedule - Collapsible */}
        <div className="max-w-3xl mx-auto">
          <Collapsible open={isScheduleOpen} onOpenChange={setIsScheduleOpen}>
            <CollapsibleTrigger className="w-full">
              <div className="flex items-center justify-center gap-3 cursor-pointer group mb-4">
                <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-br from-amber/20 to-coral/20">
                  <Clock className="w-5 h-5 text-amber" />
                </div>
                <h3 className="font-display text-2xl font-bold text-gradient-earth">{t('schedule.title')}</h3>
                <ChevronDown className={`w-5 h-5 text-muted-foreground transition-transform duration-300 ${isScheduleOpen ? 'rotate-180' : ''}`} />
              </div>
            </CollapsibleTrigger>

            <CollapsibleContent className="overflow-hidden data-[state=open]:animate-accordion-down data-[state=closed]:animate-accordion-up">
              <div className="space-y-2 mt-4">
                {schedule.map((item) => (
                  <div key={item.key} className="flex items-start gap-4 p-4 bg-background rounded-xl border border-border">
                    <span className="text-sm font-mono text-sunset font-semibold whitespace-nowrap">{item.time}</span>
                    <div className="flex-1">
                      <h4 className="font-semibold text-foreground text-sm">{t(`schedule.${item.key}`)}</h4>
                      <p className="text-xs text-muted-foreground whitespace-pre-line">{t(`schedule.${item.key}.desc`)}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CollapsibleContent>
          </Collapsible>
        </div>
      </div>
    </section>
  );
};
