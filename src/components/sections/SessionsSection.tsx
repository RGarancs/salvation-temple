import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { ChevronDown, ChevronUp, Wrench, Calendar, Snowflake, CalendarDays } from 'lucide-react';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';

const sessions = [
  { num: 1, month: 'session.1.month', date: 'session.1.date', color: 'sunset' },
  { num: 2, month: 'session.2.month', date: 'session.2.date', color: 'terracotta' },
  { num: 3, month: 'session.3.month', date: 'session.3.date', color: 'amber' },
  { num: 4, month: 'session.4.month', date: 'session.4.date', color: 'cashmere', break: true },
  { num: 5, month: 'session.5.month', date: 'session.5.date', color: 'burnt' },
  { num: 6, month: 'session.6.month', date: 'session.6.date', color: 'coral' },
  { num: 7, month: 'session.7.month', date: 'session.7.date', color: 'sunset' },
  { num: 8, month: 'session.8.month', date: 'session.8.date', color: 'terracotta' },
  { num: 9, month: 'session.9.month', date: 'session.9.date', color: 'amber' },
  { num: 10, month: 'session.10.month', date: 'session.10.date', color: 'coral' },
];

const colorClasses: Record<string, { bg: string; border: string; text: string }> = {
  sunset: { bg: 'bg-sunset', border: 'border-sunset/30', text: 'text-sunset' },
  terracotta: { bg: 'bg-terracotta', border: 'border-terracotta/30', text: 'text-terracotta' },
  amber: { bg: 'bg-amber', border: 'border-amber/30', text: 'text-amber' },
  cashmere: { bg: 'bg-cashmere-dark', border: 'border-cashmere/30', text: 'text-cashmere-dark' },
  burnt: { bg: 'bg-burnt', border: 'border-burnt/30', text: 'text-burnt' },
  coral: { bg: 'bg-coral', border: 'border-coral/30', text: 'text-coral' },
};

export const SessionsSection = () => {
  const { t } = useLanguage();
  const [openSession, setOpenSession] = useState<number | null>(1);

  return (
    <section id="program" className="py-12 md:py-16 lg:py-24 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-br from-sunset/20 to-coral/20 mb-6">
            <CalendarDays className="w-7 h-7 text-sunset" />
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-gradient-earth">
            {t('sessions.title')}
          </h2>
        </div>

        <div className="max-w-3xl mx-auto space-y-3">
          {sessions.map((session) => {
            const colors = colorClasses[session.color];
            const isOpen = openSession === session.num;

            return (
              <div key={session.num}>
                {/* Winter break indicator */}
                {session.break && (
                  <div className="flex items-center justify-center gap-4 py-6 my-3">
                    <div className="h-px flex-1 bg-gradient-to-r from-transparent via-amber/40 to-transparent" />
                    <div className="flex items-center gap-2 text-amber">
                      <Snowflake className="w-4 h-4" />
                      <span className="text-sm font-medium">{t('sessions.break')}</span>
                    </div>
                    <div className="h-px flex-1 bg-gradient-to-r from-transparent via-amber/40 to-transparent" />
                  </div>
                )}

                <Collapsible open={isOpen} onOpenChange={() => setOpenSession(isOpen ? null : session.num)}>
                  <CollapsibleTrigger className="w-full">
                    <div className={`flex items-center gap-4 p-4 rounded-xl border transition-all duration-300 ${
                      isOpen 
                        ? `${colors.border} bg-card shadow-md` 
                        : 'border-border bg-card hover:border-sunset/20 hover:shadow-sm'
                    }`}>
                      {/* Date badge */}
                      <div className={`flex flex-col items-center justify-center w-14 h-14 rounded-xl ${colors.bg} text-white`}>
                        <Calendar className="w-3.5 h-3.5 mb-0.5" />
                        <span className="text-xs font-bold">{t(session.date)}</span>
                      </div>

                      {/* Session info */}
                      <div className="flex-1 text-left">
                        <span className={`text-xs font-semibold ${colors.text} uppercase tracking-wide`}>
                          {t(session.month)}
                        </span>
                        <h3 className="font-display text-lg font-bold text-foreground">
                          {t(`session.${session.num}.title`)}
                        </h3>
                      </div>

                      {/* Toggle icon */}
                      <div className={`w-8 h-8 rounded-full ${isOpen ? colors.bg : 'bg-muted'} flex items-center justify-center transition-colors`}>
                        {isOpen ? (
                          <ChevronUp className="w-4 h-4 text-white" />
                        ) : (
                          <ChevronDown className="w-4 h-4 text-foreground/70" />
                        )}
                      </div>
                    </div>
                  </CollapsibleTrigger>

                  <CollapsibleContent className="overflow-hidden data-[state=open]:animate-collapsible-down data-[state=closed]:animate-collapsible-up">
                    <div className="pt-3 pb-2 px-4 space-y-3">
                      {/* About */}
                      <div className="bg-muted/50 rounded-xl p-4">
                        <h4 className={`text-sm font-bold ${colors.text} mb-2`}>
                          {t('sessions.about')}
                        </h4>
                        <p className="text-foreground/70 text-sm leading-relaxed">
                          {t(`session.${session.num}.about`)}
                        </p>
                      </div>

                      {/* Tools */}
                      <div className="bg-muted/50 rounded-xl p-4">
                        <h4 className={`text-sm font-bold ${colors.text} mb-2 flex items-center gap-2`}>
                          <Wrench className="w-3.5 h-3.5" />
                          {t('sessions.tools')}
                        </h4>
                        <ul className="space-y-1">
                          {t(`session.${session.num}.tools`).split('\n').map((tool, i) => (
                            <li key={i} className="text-foreground/70 text-sm flex items-start gap-2">
                              <span className={`w-1.5 h-1.5 rounded-full ${colors.bg} mt-1.5 flex-shrink-0`} />
                              {tool}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </CollapsibleContent>
                </Collapsible>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
