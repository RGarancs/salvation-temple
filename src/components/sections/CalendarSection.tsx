import { useLanguage } from '@/contexts/LanguageContext';
import { CalendarDays, Snowflake } from 'lucide-react';

const calendarData = [
  { num: 1, month: 'SEP', day: '19', year: '2026', color: 'sunset' },
  { num: 2, month: 'OCT', day: '17', year: '2026', color: 'terracotta' },
  { num: 3, month: 'NOV', day: '21', year: '2026', color: 'amber' },
  { num: 4, month: 'DEC', day: '12', year: '2026', color: 'cashmere', beforeBreak: true },
  { num: 5, month: 'JAN', day: '30', year: '2027', color: 'burnt', afterBreak: true },
  { num: 6, month: 'FEB', day: '20', year: '2027', color: 'coral' },
  { num: 7, month: 'MAR', day: '20', year: '2027', color: 'sunset' },
  { num: 8, month: 'APR', day: '24', year: '2027', color: 'terracotta' },
  { num: 9, month: 'MAY', day: '22', year: '2027', color: 'amber' },
  { num: 10, month: 'JUN', day: '12', year: '2027', color: 'coral', finale: true },
];

const colorClasses: Record<string, string> = {
  sunset: 'bg-sunset',
  terracotta: 'bg-terracotta',
  amber: 'bg-amber',
  cashmere: 'bg-cashmere-dark',
  burnt: 'bg-burnt',
  coral: 'bg-coral',
};

export const CalendarSection = () => {
  const { t } = useLanguage();

  return (
    <section id="calendar" className="section-py bg-background relative overflow-hidden">
      <div className="section-container">
        <div className="text-center mb-12">
          <div className="section-icon bg-gradient-to-br from-sunset/20 to-coral/20">
            <CalendarDays className="w-7 h-7 text-sunset" />
          </div>
          <h2 className="section-title text-gradient-earth">
            {t('calendar.title')}
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            {t('calendar.subtitle')}
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          {/* Timeline */}
          <div className="relative">
            {/* Horizontal line for desktop */}
            <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-sunset via-amber to-coral opacity-30" />

            {/* Calendar items */}
            <div className="flex flex-wrap justify-center gap-3 md:gap-2">
              {calendarData.map((item, index) => (
                <div key={item.num} className="relative">
                  {/* Winter break indicator */}
                  {item.beforeBreak && (
                    <div className="hidden md:flex absolute -right-8 top-1/2 -translate-y-1/2 items-center justify-center w-16">
                      <div className="flex flex-col items-center gap-1 text-amber">
                        <Snowflake className="w-4 h-4" />
                        <span className="text-[10px] font-medium whitespace-nowrap">{t('calendar.break')}</span>
                      </div>
                    </div>
                  )}

                  {/* Mobile winter break */}
                  {item.afterBreak && (
                    <div className="md:hidden flex items-center justify-center gap-2 py-2 w-full mb-2">
                      <Snowflake className="w-4 h-4 text-amber" />
                      <span className="text-xs font-medium text-amber">{t('calendar.break')}</span>
                    </div>
                  )}

                  {/* Date card */}
                  <div className={`flex flex-col items-center justify-center w-16 h-20 md:w-20 md:h-24 rounded-xl ${colorClasses[item.color]} text-white shadow-lg transition-transform hover:scale-105 ${item.finale ? 'ring-2 ring-amber ring-offset-2 ring-offset-background' : ''}`}>
                    <span className="text-[10px] font-medium opacity-80">{item.year}</span>
                    <span className="text-xs font-bold">{item.month}</span>
                    <span className="text-xl md:text-2xl font-bold">{item.day}</span>
                    {item.finale && (
                      <span className="text-[8px] font-bold mt-0.5 uppercase tracking-wide">Finale</span>
                    )}
                  </div>

                  {/* Session number */}
                  <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-5 h-5 rounded-full bg-background border-2 border-current flex items-center justify-center" style={{ borderColor: `var(--${item.color}, currentColor)` }}>
                    <span className="text-[10px] font-bold text-foreground">{item.num}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
