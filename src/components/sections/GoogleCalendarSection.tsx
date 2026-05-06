import { useEffect, useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { supabase } from '@/integrations/supabase/client';
import { CalendarDays } from 'lucide-react';

export const GoogleCalendarSection = () => {
  const { t } = useLanguage();
  const [embedUrl, setEmbedUrl] = useState<string>('');

  useEffect(() => {
    supabase
      .from('site_settings')
      .select('value')
      .eq('key', 'google_calendar_embed_url')
      .maybeSingle()
      .then(({ data }) => {
        const url = (data?.value as any)?.url || '';
        setEmbedUrl(url);
      });
  }, []);

  if (!embedUrl) return null;

  return (
    <section id="google-calendar" className="section-py bg-background">
      <div className="section-container">
        <div className="section-header">
          <div className="section-icon bg-gradient-to-br from-sunset/20 to-coral/20">
            <CalendarDays className="w-7 h-7 text-sunset" />
          </div>
          <h2 className="section-title text-gradient-earth mb-4">
            {t('googleCalendar.title') || 'Church Calendar'}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {t('googleCalendar.subtitle') || 'Stay up to date with all church events and services'}
          </p>
        </div>
        <div className="max-w-5xl mx-auto rounded-2xl overflow-hidden border border-white/10 shadow-xl">
          <iframe
            src={embedUrl}
            title="Google Calendar"
            className="w-full h-[600px] border-0"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
};
