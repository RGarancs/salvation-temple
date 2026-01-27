import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Calendar, Newspaper, GraduationCap, Droplets, ChevronDown, ChevronRight } from 'lucide-react';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';

export const EventsSection = () => {
  const { t } = useLanguage();
  const [openSection, setOpenSection] = useState<string | null>('training');

  const eventCategories = [
    { 
      key: 'news', 
      icon: Newspaper, 
      color: 'sunset',
      content: 'events.news.content'
    },
    { 
      key: 'calendar', 
      icon: Calendar, 
      color: 'amber',
      content: 'events.calendar.content'
    },
    { 
      key: 'training', 
      icon: GraduationCap, 
      color: 'terracotta',
      hasLink: true,
      linkText: 'events.training.link'
    },
    { 
      key: 'baptism', 
      icon: Droplets, 
      color: 'coral',
      content: 'events.baptism.content'
    },
  ];

  const colorMap: Record<string, { bg: string; icon: string }> = {
    sunset: { bg: 'bg-sunset/10', icon: 'text-sunset' },
    amber: { bg: 'bg-amber/10', icon: 'text-amber' },
    terracotta: { bg: 'bg-terracotta/10', icon: 'text-terracotta' },
    coral: { bg: 'bg-coral/10', icon: 'text-coral' },
  };

  return (
    <section id="events" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-br from-amber/20 to-sunset/20 mb-6">
            <Calendar className="w-7 h-7 text-amber" />
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-gradient-earth mb-4">
            {t('events.title')}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {t('events.subtitle')}
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {eventCategories.map((category) => {
            const Icon = category.icon;
            const colors = colorMap[category.color];
            const isOpen = openSection === category.key;

            return (
              <Collapsible 
                key={category.key} 
                open={isOpen}
                onOpenChange={(open) => setOpenSection(open ? category.key : null)}
              >
                <CollapsibleTrigger className="w-full">
                  <div className="card-warm p-5 flex items-center gap-4 cursor-pointer">
                    <div className={`w-12 h-12 rounded-xl ${colors.bg} flex items-center justify-center flex-shrink-0`}>
                      <Icon className={`w-6 h-6 ${colors.icon}`} />
                    </div>
                    <div className="flex-1 text-left">
                      <h3 className="font-display text-lg font-bold text-foreground">
                        {t(`events.${category.key}.title`)}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {t(`events.${category.key}.desc`)}
                      </p>
                    </div>
                    {isOpen ? (
                      <ChevronDown className="w-5 h-5 text-muted-foreground" />
                    ) : (
                      <ChevronRight className="w-5 h-5 text-muted-foreground" />
                    )}
                  </div>
                </CollapsibleTrigger>

                <CollapsibleContent className="overflow-hidden data-[state=open]:animate-accordion-down data-[state=closed]:animate-accordion-up">
                  <div className="p-5 pt-0 ml-16">
                    {category.hasLink ? (
                      <div className="mt-4 p-4 bg-muted/50 rounded-xl">
                        <p className="text-muted-foreground mb-4">{t('events.training.content')}</p>
                        <a
                          href="/training"
                          className="inline-flex items-center gap-2 bg-gradient-to-r from-sunset to-coral text-white px-5 py-2.5 rounded-full font-semibold text-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
                        >
                          {t('events.training.link')}
                          <ChevronRight className="w-4 h-4" />
                        </a>
                      </div>
                    ) : (
                      <div className="mt-4 p-4 bg-muted/50 rounded-xl">
                        <p className="text-muted-foreground">{t(category.content!)}</p>
                      </div>
                    )}
                  </div>
                </CollapsibleContent>
              </Collapsible>
            );
          })}
        </div>
      </div>
    </section>
  );
};
