import { useEffect, useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { supabase } from '@/integrations/supabase/client';

const SITE_URL = 'https://salvation-temple.lovable.app';

const DEFAULT_TITLE = 'Храм Спасения | Salvation Temple — Церковь в Риге';
const DEFAULT_DESCRIPTION =
  'Храм Спасения — многоязычная христианская церковь в Риге. Богослужения на русском, латышском и английском языках. Salvation Temple — a multilingual church in Riga, Latvia.';

interface PageMetaOptions {
  titleKey: string;
  descriptionKey: string;
  canonicalPath: string;
}

const setMetaContent = (selector: string, content: string): void => {
  const el = document.querySelector<HTMLMetaElement>(selector);
  if (el) el.content = content;
};

const setLinkHref = (rel: string, href: string): void => {
  let el = document.querySelector<HTMLLinkElement>(`link[rel="${rel}"]`);
  if (!el) {
    el = document.createElement('link');
    el.rel = rel;
    document.head.appendChild(el);
  }
  el.href = href;
};

export const usePageMeta = ({ titleKey, descriptionKey, canonicalPath }: PageMetaOptions): void => {
  const { t, language } = useLanguage();
  const [override, setOverride] = useState<{ title?: string; description?: string; keywords?: string } | null>(null);

  // Fetch admin-managed SEO override for this route
  useEffect(() => {
    let cancelled = false;
    (supabase.from('seo_meta' as any) as any)
      .select('title,description,keywords')
      .eq('route', canonicalPath)
      .maybeSingle()
      .then(({ data }: any) => {
        if (cancelled || !data) return;
        setOverride({
          title: data.title?.[language] || data.title?.en || '',
          description: data.description?.[language] || data.description?.en || '',
          keywords: data.keywords || '',
        });
      });
    return () => { cancelled = true; };
  }, [canonicalPath, language]);

  useEffect(() => {
    const title = override?.title || t(titleKey);
    const description = override?.description || t(descriptionKey);
    const canonicalUrl = `${SITE_URL}${canonicalPath}`;

    document.title = title;
    setMetaContent('meta[name="description"]', description);
    setMetaContent('meta[property="og:title"]', title);
    setMetaContent('meta[property="og:description"]', description);
    setMetaContent('meta[property="og:url"]', canonicalUrl);
    setMetaContent('meta[name="twitter:title"]', title);
    setMetaContent('meta[name="twitter:description"]', description);
    setLinkHref('canonical', canonicalUrl);
    if (override?.keywords) setMetaContent('meta[name="keywords"]', override.keywords);

    return () => {
      document.title = DEFAULT_TITLE;
      setMetaContent('meta[name="description"]', DEFAULT_DESCRIPTION);
      setMetaContent('meta[property="og:title"]', DEFAULT_TITLE);
      setMetaContent('meta[property="og:description"]', DEFAULT_DESCRIPTION);
      setMetaContent('meta[property="og:url"]', SITE_URL);
      setMetaContent('meta[name="twitter:title"]', DEFAULT_TITLE);
      setMetaContent('meta[name="twitter:description"]', DEFAULT_DESCRIPTION);
      setLinkHref('canonical', `${SITE_URL}/`);
    };
  }, [t, titleKey, descriptionKey, canonicalPath, override]);
};
