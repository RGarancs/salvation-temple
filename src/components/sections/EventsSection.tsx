import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Calendar, Newspaper, GraduationCap, Droplets, ChevronDown, ChevronRight, CalendarCheck, Clock, Facebook, Instagram, Youtube } from 'lucide-react';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { Link } from 'react-router-dom';

export const EventsSection = () => {
  const { t } = useLanguage();
  const [openSection, setOpenSection] = useState<string | null>('training');

  // Get upcoming Sundays including March 1st
  const getUpcomingSundays = () => {
    const sundays = [];
    const today = new Date();
    
    // Add March 1st, 2026 as a special date (it's a Sunday)
    const march1st = new Date(2026, 2, 1); // March 1, 2026
    
    let nextSunday = new Date(today);
    nextSunday.setDate(today.getDate() + (7 - today.getDay()) % 7);
    if (today.getDay() === 0) nextSunday = today;
    
    for (let i = 0; i < 4; i++) {
      const sunday = new Date(nextSunday);
      sunday.setDate(nextSunday.getDate() + (i * 7));
      sundays.push(sunday);
    }
    
    return sundays;
  };

  const upcomingSundays = getUpcomingSundays();
  
  // Get this Friday
  const getThisFriday = () => {
    const today = new Date();
    const daysUntilFriday = (5 - today.getDay() + 7) % 7;
    const friday = new Date(today);
    friday.setDate(today.getDate() + (daysUntilFriday === 0 ? 7 : daysUntilFriday));
    return friday;
  };

  const thisFriday = getThisFriday();

  const formatDate = (date: Date) => {
    return date.toLocaleDateString('en-GB', { day: 'numeric', month: 'short' });
  };

  // Check if date is March 1st
  const isMarch1st = (date: Date) => {
    return date.getDate() === 1 && date.getMonth() === 2;
  };

  // Check if first Sunday (communion)
  const isFirstSunday = (index: number) => index === 0;

  const eventCategories = [
    { 
      key: 'news', 
      icon: Newspaper, 
      color: 'sunset',
      content: 'events.news.content',
      hasSocial: true
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

        {/* Upcoming Services Calendar */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="card-warm p-6">
            <div className="flex items-center gap-3 mb-6">
              <CalendarCheck className="w-6 h-6 text-sunset" />
              <h3 className="font-display text-xl font-bold text-foreground">
                {t('events.upcoming')}
              </h3>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              {/* This Friday Prayer */}
              <div className="p-4 bg-terracotta/10 rounded-xl text-center border border-terracotta/20">
                <p className="text-xs text-terracotta font-semibold mb-1">{t('events.prayerMeeting')}</p>
                <p className="font-display text-lg font-bold text-foreground">{formatDate(thisFriday)}</p>
                <p className="text-sm text-muted-foreground flex items-center justify-center gap-1">
                  <Clock className="w-3 h-3" /> 18:00
                </p>
              </div>
              
              {/* Upcoming Sundays - all labeled as Sunday Service */}
              {upcomingSundays.map((sunday, index) => {
                const hasCommunion = isFirstSunday(index) || isMarch1st(sunday);
                return (
                  <div 
                    key={index} 
                    className={`p-4 rounded-xl text-center border ${
                      hasCommunion 
                        ? 'bg-sunset/10 border-sunset/20' 
                        : 'bg-muted/30 border-border'
                    }`}
                  >
                    <p className="text-xs font-semibold mb-1 text-sunset">
                      {t('events.sundayService')}
                    </p>
                    <p className="font-display text-lg font-bold text-foreground">{formatDate(sunday)}</p>
                    <p className="text-sm text-muted-foreground flex items-center justify-center gap-1">
                      <Clock className="w-3 h-3" /> 11:00
                    </p>
                    {hasCommunion && (
                      <p className="text-xs text-coral mt-1 font-medium">
                        {t('events.holyCommunion')}
                      </p>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
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
                        <Link
                          to="/training"
                          className="inline-flex items-center gap-2 bg-gradient-to-r from-sunset to-coral text-white px-5 py-2.5 rounded-full font-semibold text-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
                        >
                          {t('events.training.link')}
                          <ChevronRight className="w-4 h-4" />
                        </Link>
                      </div>
                    ) : category.hasSocial ? (
                      <div className="mt-4 p-4 bg-muted/50 rounded-xl">
                        <p className="text-muted-foreground mb-4">{t(category.content!)}</p>
                        <div className="flex flex-wrap gap-3">
                          <a
                            href="https://www.facebook.com/SalvationTempleLV/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 bg-gradient-to-r from-sunset to-coral text-white px-4 py-2 rounded-full font-semibold text-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
                          >
                            <Facebook className="w-4 h-4" />
                            Facebook
                          </a>
                          <a
                            href="https://www.instagram.com/salvationtemplelv/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 bg-gradient-to-r from-sunset to-coral text-white px-4 py-2 rounded-full font-semibold text-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
                          >
                            <Instagram className="w-4 h-4" />
                            Instagram
                          </a>
                          <a
                            href="https://www.youtube.com/@SalvationTemple"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 bg-gradient-to-r from-sunset to-coral text-white px-4 py-2 rounded-full font-semibold text-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
                          >
                            <Youtube className="w-4 h-4" />
                            YouTube
                          </a>
                        </div>
                      </div>
                    ) : category.key === 'baptism' ? (
                      <div className="mt-4 p-4 bg-muted/50 rounded-xl">
                        <p className="text-muted-foreground mb-2">{t('events.baptism.content')}</p>
                        <p className="text-foreground font-semibold mb-2">{t('events.baptism.nextDate')}</p>
                        <p className="text-muted-foreground text-sm">{t('events.baptism.contactPastor')}</p>
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
