import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Calendar, Newspaper, GraduationCap, Droplets, ChevronDown, ChevronRight, CalendarCheck, Clock, Facebook, Instagram, Youtube, LucideIcon } from 'lucide-react';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { Link } from 'react-router-dom';
import { bordeauxCardStyle } from '@/styles/bordeaux';
import { BordeauxOverlay } from '@/components/ui/bordeaux-overlay';

interface EventCategory {
  key: string;
  icon: LucideIcon;
  content?: string;
  hasSocial?: boolean;
  hasLink?: boolean;
  linkText?: string;
}

const eventCategories: EventCategory[] = [
  { key: 'news', icon: Newspaper, content: 'events.news.content', hasSocial: true },
  { key: 'training', icon: GraduationCap, hasLink: true, linkText: 'events.training.link' },
  { key: 'baptism', icon: Droplets, content: 'events.baptism.content' },
];

const socialLinks = [
  { href: 'https://www.facebook.com/SalvationTempleLV/', icon: Facebook, label: 'Facebook' },
  { href: 'https://www.instagram.com/salvationtemplelv/', icon: Instagram, label: 'Instagram' },
  { href: 'https://www.youtube.com/@SalvationTemple', icon: Youtube, label: 'YouTube' },
];

const getUpcomingSundays = (): Date[] => {
  const sundays: Date[] = [];
  const today = new Date();
  const nextSunday = new Date(today);
  nextSunday.setDate(today.getDate() + (7 - today.getDay()) % 7);
  if (today.getDay() === 0) nextSunday.setTime(today.getTime());
  for (let i = 0; i < 4; i++) {
    const sunday = new Date(nextSunday);
    sunday.setDate(nextSunday.getDate() + (i * 7));
    sundays.push(sunday);
  }
  return sundays;
};

const getThisFriday = (): Date => {
  const today = new Date();
  const daysUntilFriday = (5 - today.getDay() + 7) % 7;
  const friday = new Date(today);
  friday.setDate(today.getDate() + (daysUntilFriday === 0 ? 7 : daysUntilFriday));
  return friday;
};

const formatDate = (date: Date): string =>
  date.toLocaleDateString('en-GB', { day: 'numeric', month: 'short' });

const isFirstSundayOfMonth = (date: Date): boolean => {
  return date.getDate() <= 7;
};

const EventContentBlock = ({ category, t }: { category: EventCategory; t: (key: string) => string }) => {
  if (category.hasLink) {
    return (
      <div className="mt-4 p-4 bg-muted/50 rounded-xl">
        <p className="text-foreground/70 mb-4">{t('events.training.content')}</p>
        <Link
          to="/training"
          className="inline-flex items-center gap-2 bg-gradient-to-r from-sunset to-coral text-white btn-md rounded-full font-semibold transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
        >
          {t('events.training.link')}
          <ChevronRight className="w-4 h-4" />
        </Link>
      </div>
    );
  }

  if (category.hasSocial) {
    return (
      <div className="mt-4 p-4 bg-muted/50 rounded-xl">
        <p className="text-foreground/70 mb-4">{t(category.content!)}</p>
        <div className="flex flex-wrap gap-3">
          {socialLinks.map((link) => {
            const SocialIcon = link.icon;
            return (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-sunset to-coral text-white btn-sm rounded-full font-semibold transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
              >
                <SocialIcon className="w-4 h-4" />
                {link.label}
              </a>
            );
          })}
        </div>
      </div>
    );
  }

  if (category.key === 'baptism') {
    return (
      <div className="mt-4 p-4 bg-muted/50 rounded-xl">
        <p className="text-foreground/70 mb-2">{t('events.baptism.content')}</p>
        <p className="text-foreground font-semibold mb-2">{t('events.baptism.nextDate')}</p>
        <p className="text-foreground/70 text-sm">{t('events.baptism.contactPastor')}</p>
      </div>
    );
  }

  return (
    <div className="mt-4 p-4 bg-muted/50 rounded-xl">
      <p className="text-foreground/70">{t(category.content!)}</p>
    </div>
  );
};

export const EventsSection = () => {
  const { t } = useLanguage();
  const [openSection, setOpenSection] = useState<string | null>(null);

  const upcomingSundays = getUpcomingSundays();
  const thisFriday = getThisFriday();

  return (
    <section id="events" className="section-py bg-background">
      <div className="section-container">
        <div className="section-header">
          <div className="section-icon bg-gradient-to-br from-amber/20 to-sunset/20">
            <Calendar className="w-7 h-7 text-amber" />
          </div>
          <h2 className="section-title text-gradient-earth mb-4">
            {t('events.title')}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {t('events.subtitle')}
          </p>
        </div>

        {/* Event Categories */}
        <div className="max-w-4xl mx-auto space-y-4 mb-8">
          {eventCategories.map((category) => {
            const Icon = category.icon;
            const isOpen = openSection === category.key;

            return (
              <Collapsible
                key={category.key}
                open={isOpen}
                onOpenChange={(open) => setOpenSection(open ? category.key : null)}
              >
                <CollapsibleTrigger className="w-full">
                  <div
                    className="relative overflow-hidden rounded-2xl p-4 md:p-5 flex items-center gap-4 cursor-pointer transition-all duration-300 hover:shadow-xl group"
                    style={bordeauxCardStyle}
                  >
                    <BordeauxOverlay />
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-2xl bg-shine" />
                    <div className="relative z-10 w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0 border border-white/10">
                      <Icon className="w-6 h-6 text-sunset-light" />
                    </div>
                    <div className="relative z-10 flex-1 text-left">
                      <h3 className="font-display text-lg font-bold text-white/95">
                        {t(`events.${category.key}.title`)}
                      </h3>
                      <p className="text-sm text-white/60">
                        {t(`events.${category.key}.desc`)}
                      </p>
                    </div>
                    <div className="relative z-10">
                      {isOpen ? (
                        <ChevronDown className="w-5 h-5 text-white/60" />
                      ) : (
                        <ChevronRight className="w-5 h-5 text-white/60" />
                      )}
                    </div>
                  </div>
                </CollapsibleTrigger>

                <CollapsibleContent className="overflow-hidden data-[state=open]:animate-collapsible-down data-[state=closed]:animate-collapsible-up">
                  <div className="px-4 pb-4 md:px-5 md:pb-5">
                    <EventContentBlock category={category} t={t} />
                  </div>
                </CollapsibleContent>
              </Collapsible>
            );
          })}
        </div>

        {/* Upcoming Services Calendar */}
        <div className="max-w-4xl mx-auto">
          <div
            className="relative overflow-hidden rounded-2xl p-5 md:p-6"
            style={bordeauxCardStyle}
          >
            <BordeauxOverlay />
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-4">
                <CalendarCheck className="w-6 h-6 text-sunset-light" />
                <h3 className="font-display text-xl font-bold text-white/95">
                  {t('events.upcoming')}
                </h3>
              </div>

              <div className="grid grid-cols-3 md:grid-cols-5 gap-3">
                {/* This Friday Prayer */}
                <div className="p-3 bg-white/5 rounded-xl text-center border border-white/10">
                  <p className="text-xs text-sunset-light font-semibold mb-1">{t('events.prayerMeeting')}</p>
                  <p className="font-display text-lg font-bold text-white/95">{formatDate(thisFriday)}</p>
                  <p className="text-sm text-white/60 flex items-center justify-center gap-1">
                    <Clock className="w-3 h-3" /> 18:00
                  </p>
                </div>

                {/* Upcoming Sundays */}
                {upcomingSundays.map((sunday, index) => {
                  const hasCommunion = index === 0 || isMarch1st(sunday);
                  return (
                    <div
                      key={index}
                      className={`p-3 rounded-xl text-center border ${
                        hasCommunion
                          ? 'bg-sunset/20 border-sunset/30'
                          : 'bg-white/5 border-white/10'
                      }`}
                    >
                      <p className="text-xs font-semibold mb-1 text-sunset-light">
                        {t('events.sundayService')}
                      </p>
                      <p className="font-display text-lg font-bold text-white/95">{formatDate(sunday)}</p>
                      <p className="text-sm text-white/60 flex items-center justify-center gap-1">
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
        </div>
      </div>
    </section>
  );
};
