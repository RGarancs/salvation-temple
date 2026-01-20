import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { ChevronDown, ChevronUp, Wrench, Calendar, SunMedium } from 'lucide-react';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';

const sessions = [
  { num: 1, month: 'session.1.month', date: 'session.1.date', color: 'sage' },
  { num: 2, month: 'session.2.month', date: 'session.2.date', color: 'teal' },
  { num: 3, month: 'session.3.month', date: 'session.3.date', color: 'amber' },
  { num: 4, month: 'session.4.month', date: 'session.4.date', color: 'olive' },
  { num: 5, month: 'session.5.month', date: 'session.5.date', color: 'orange' },
  { num: 6, month: 'session.6.month', date: 'session.6.date', color: 'chocolate', break: true },
  { num: 7, month: 'session.7.month', date: 'session.7.date', color: 'sage' },
  { num: 8, month: 'session.8.month', date: 'session.8.date', color: 'teal' },
  { num: 9, month: 'session.9.month', date: 'session.9.date', color: 'amber' },
];

export const SessionsSection = () => {
  const { t } = useLanguage();
  const [openSession, setOpenSession] = useState<number | null>(1);

  const colorClasses: Record<string, { bg: string; border: string; text: string }> = {
    sage: { bg: 'bg-sage', border: 'border-sage', text: 'text-sage' },
    teal: { bg: 'bg-teal', border: 'border-teal', text: 'text-teal' },
    amber: { bg: 'bg-amber', border: 'border-amber', text: 'text-amber' },
    olive: { bg: 'bg-olive', border: 'border-olive', text: 'text-olive' },
    orange: { bg: 'bg-orange', border: 'border-orange', text: 'text-orange' },
    chocolate: { bg: 'bg-chocolate', border: 'border-chocolate', text: 'text-chocolate' },
  };

  return (
    <section id="program" className="py-24 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4">
        <h2 className="font-display text-4xl md:text-5xl font-bold text-center mb-16 text-gradient-earth">
          {t('sessions.title')}
        </h2>

        <div className="max-w-3xl mx-auto space-y-4">
          {sessions.map((session, index) => {
            const colors = colorClasses[session.color];
            const isOpen = openSession === session.num;

            return (
              <div key={session.num}>
                {/* Summer break indicator */}
                {session.break && (
                  <div className="flex items-center justify-center gap-4 py-8 my-4">
                    <div className="h-px flex-1 bg-gradient-to-r from-transparent via-amber/50 to-transparent" />
                    <div className="flex items-center gap-2 text-amber">
                      <SunMedium className="w-5 h-5" />
                      <span className="text-sm font-medium">{t('sessions.break')}</span>
                      <SunMedium className="w-5 h-5" />
                    </div>
                    <div className="h-px flex-1 bg-gradient-to-r from-transparent via-amber/50 to-transparent" />
                  </div>
                )}

                <Collapsible open={isOpen} onOpenChange={() => setOpenSession(isOpen ? null : session.num)}>
                  <CollapsibleTrigger className="w-full">
                    <div className={`flex items-center gap-4 p-4 rounded-xl border transition-all duration-300 ${
                      isOpen 
                        ? `${colors.border} bg-card shadow-lg` 
                        : 'border-border bg-card hover:border-sage/30 hover:shadow-md'
                    }`}>
                      {/* Date badge */}
                      <div className={`flex flex-col items-center justify-center w-16 h-16 rounded-xl ${colors.bg} text-primary-foreground`}>
                        <Calendar className="w-4 h-4 mb-1" />
                        <span className="text-xs font-bold">{t(session.date)}</span>
                      </div>

                      {/* Session info */}
                      <div className="flex-1 text-left">
                        <span className={`text-xs font-semibold ${colors.text} uppercase tracking-wide`}>
                          {t(session.month)}
                        </span>
                        <h3 className="font-display text-xl font-bold text-foreground">
                          {t(`session.${session.num}.title`)}
                        </h3>
                      </div>

                      {/* Toggle icon */}
                      <div className={`w-8 h-8 rounded-full ${isOpen ? colors.bg : 'bg-muted'} flex items-center justify-center transition-colors`}>
                        {isOpen ? (
                          <ChevronUp className="w-5 h-5 text-primary-foreground" />
                        ) : (
                          <ChevronDown className="w-5 h-5 text-muted-foreground" />
                        )}
                      </div>
                    </div>
                  </CollapsibleTrigger>

                  <CollapsibleContent className="overflow-hidden data-[state=open]:animate-accordion-down data-[state=closed]:animate-accordion-up">
                    <div className="pt-4 pb-2 px-4 space-y-4">
                      {/* About */}
                      <div className="bg-muted/50 rounded-xl p-4">
                        <h4 className={`text-sm font-bold ${colors.text} mb-2`}>
                          {t('sessions.about')}
                        </h4>
                        <p className="text-muted-foreground leading-relaxed">
                          {t(`session.${session.num}.about`)}
                        </p>
                      </div>

                      {/* Tools */}
                      <div className="bg-muted/50 rounded-xl p-4">
                        <h4 className={`text-sm font-bold ${colors.text} mb-2 flex items-center gap-2`}>
                          <Wrench className="w-4 h-4" />
                          {t('sessions.tools')}
                        </h4>
                        <ul className="space-y-1">
                          {t(`session.${session.num}.tools`).split('\n').map((tool, i) => (
                            <li key={i} className="text-muted-foreground flex items-start gap-2">
                              <span className={`w-1.5 h-1.5 rounded-full ${colors.bg} mt-2 flex-shrink-0`} />
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
