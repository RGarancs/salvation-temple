import { useEffect, useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { supabase } from '@/integrations/supabase/client';
import { Newspaper, Droplets } from 'lucide-react';
import { bordeauxCardStyle } from '@/styles/bordeaux';
import { BordeauxOverlay } from '@/components/ui/bordeaux-overlay';

interface NewsItem {
  id: string;
  title: Record<string, string>;
  content: Record<string, string>;
  image_url: string | null;
  published_at: string;
}

export const NewsSection = () => {
  const { t, language } = useLanguage();
  const [items, setItems] = useState<NewsItem[]>([]);
  const [baptisms, setBaptisms] = useState<any[]>([]);

  useEffect(() => {
    supabase
      .from('news')
      .select('*')
      .eq('published', true)
      .order('published_at', { ascending: false })
      .limit(6)
      .then(({ data }) => {
        if (data) setItems(data.map((d: any) => ({ ...d, title: d.title, content: d.content })));
      });
    const today = new Date().toISOString().slice(0, 10);
    supabase
      .from('calendar_events')
      .select('*')
      .eq('event_type', 'baptism')
      .gte('event_date', today)
      .order('event_date')
      .limit(5)
      .then(({ data }) => { if (data) setBaptisms(data); });
  }, []);

  if (items.length === 0 && baptisms.length === 0) return null;

  return (
    <section id="news" className="section-py bg-background">
      <div className="section-container">
        <div className="section-header">
          <div className="section-icon bg-gradient-to-br from-amber/20 to-coral/20">
            <Newspaper className="w-7 h-7 text-amber" />
          </div>
          <h2 className="section-title text-gradient-earth mb-4">{t('news.title') || 'News'}</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">{t('news.subtitle') || 'Latest from our community'}</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {items.map(item => (
            <article
              key={item.id}
              className="relative overflow-hidden rounded-2xl transition-all duration-300 hover:shadow-2xl hover:-translate-y-1"
              style={bordeauxCardStyle}
            >
              <BordeauxOverlay />
              {item.image_url && (
                <img src={item.image_url} alt="" loading="lazy" className="relative z-10 w-full h-48 object-cover" />
              )}
              <div className="relative z-10 p-5">
                <h3 className="font-display text-lg font-bold text-white/95 mb-2">
                  {item.title[language] || item.title.en || item.title.ru}
                </h3>
                <p className="text-white/70 text-sm line-clamp-3">
                  {item.content[language] || item.content.en || item.content.ru}
                </p>
                <p className="text-xs text-white/40 mt-3">
                  {new Date(item.published_at).toLocaleDateString()}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
