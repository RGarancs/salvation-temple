import { useMemo } from 'react';
import { useJsonLd } from '@/hooks/useJsonLd';
import { useLanguage } from '@/contexts/LanguageContext';

const SITE_URL = 'https://salvation-temple.lovable.app';

const SITE_NAME_BY_LANG: Record<string, string> = {
  ru: 'Храм Спасения',
  en: 'Salvation Temple',
  lv: 'Pestīšanas Templis',
};

export const WebSiteJsonLd = (): null => {
  const { language } = useLanguage();

  const data = useMemo(
    () => ({
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      name: SITE_NAME_BY_LANG[language] ?? SITE_NAME_BY_LANG.ru,
      alternateName: ['Храм Спасения', 'Salvation Temple', 'Pestīšanas Templis'],
      url: SITE_URL,
      inLanguage: language,
    }),
    [language],
  );

  useJsonLd(data);
  return null;
};

export const EventJsonLd = (): null => {
  const { language } = useLanguage();

  const data = useMemo(() => {
    const churchName = SITE_NAME_BY_LANG[language] ?? SITE_NAME_BY_LANG.ru;
    const eventName: Record<string, string> = {
      ru: 'Богослужения — Храм Спасения',
      en: 'Worship Services — Salvation Temple',
      lv: 'Dievkalpojumi — Pestīšanas Templis',
    };
    const eventDescription: Record<string, string> = {
      ru: 'Еженедельные богослужения: воскресенье в 11:00, среда в 18:00. Адрес: Lāčplēša iela 117, Rīga.',
      en: 'Weekly worship services: Sunday at 11:00, Wednesday at 18:00. Address: Lāčplēša iela 117, Rīga.',
      lv: 'Iknedēļas dievkalpojumi: svētdienā 11:00, trešdienā 18:00. Adrese: Lāčplēša iela 117, Rīga.',
    };

    return {
      '@context': 'https://schema.org',
      '@type': 'Event',
      name: eventName[language] ?? eventName.ru,
      description: eventDescription[language] ?? eventDescription.ru,
      organizer: {
        '@type': 'Church',
        name: churchName,
        url: SITE_URL,
      },
      location: {
        '@type': 'Place',
        name: churchName,
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'Lāčplēša iela 117',
          addressLocality: 'Rīga',
          postalCode: 'LV-1003',
          addressCountry: 'LV',
        },
      },
      eventSchedule: [
        {
          '@type': 'Schedule',
          byDay: 'https://schema.org/Sunday',
          startTime: '11:00',
          endTime: '13:00',
          scheduleTimezone: 'Europe/Riga',
          repeatFrequency: 'P1W',
        },
        {
          '@type': 'Schedule',
          byDay: 'https://schema.org/Wednesday',
          startTime: '18:00',
          endTime: '20:00',
          scheduleTimezone: 'Europe/Riga',
          repeatFrequency: 'P1W',
        },
      ],
      eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
      eventStatus: 'https://schema.org/EventScheduled',
      isAccessibleForFree: true,
      inLanguage: ['ru', 'lv'],
    };
  }, [language]);

  useJsonLd(data);
  return null;
};

interface BreadcrumbJsonLdProps {
  pageName: string;
  pagePath: string;
}

export const BreadcrumbJsonLd = ({ pageName, pagePath }: BreadcrumbJsonLdProps): null => {
  const data = useMemo(
    () => ({
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Home',
          item: SITE_URL,
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: pageName,
          item: `${SITE_URL}${pagePath}`,
        },
      ],
    }),
    [pageName, pagePath],
  );

  useJsonLd(data);
  return null;
};
