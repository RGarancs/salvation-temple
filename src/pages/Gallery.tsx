import { useEffect, useState } from 'react';
import { LanguageProvider } from '@/contexts/LanguageContext';
import { ChurchHeader } from '@/components/ChurchHeader';
import { ChurchFooter } from '@/components/sections/ChurchFooter';
import { useLanguage } from '@/contexts/LanguageContext';
import { Images, Facebook, Instagram, Youtube } from 'lucide-react';
import { usePageMeta } from '@/hooks/usePageMeta';
import { BreadcrumbJsonLd } from '@/components/seo/JsonLd';
import { supabase } from '@/integrations/supabase/client';

const galleryModules = import.meta.glob<{ default: string }>(
  '@/assets/gallery-*.jpg',
  { eager: true }
);

const bundledImages = Object.entries(galleryModules).map(([path, mod]) => ({
  src: mod.default,
  alt: (path.split('/').pop()?.replace(/^gallery-/, '').replace(/\.jpg$/, '') ?? '')
    .split('-')
    .map(w => w.charAt(0).toUpperCase() + w.slice(1))
    .join(' '),
}));

const GalleryContent = () => {
  const { t, language } = useLanguage();
  const [dbImages, setDbImages] = useState<{ src: string; alt: string }[] | null>(null);

  useEffect(() => {
    supabase
      .from('gallery_images')
      .select('image_url, caption')
      .order('sort_order')
      .then(({ data }) => {
        if (data && data.length > 0) {
          setDbImages(
            data.map((d: any) => ({
              src: d.image_url,
              alt: d.caption?.[language] || d.caption?.en || '',
            })),
          );
        } else {
          setDbImages([]);
        }
      });
  }, [language]);

  const images = dbImages && dbImages.length > 0 ? dbImages : bundledImages;
  usePageMeta({
    titleKey: 'meta.gallery.title',
    descriptionKey: 'meta.gallery.description',
    canonicalPath: '/gallery',
  });

  return (
    <section className="page-py bg-background min-h-screen">
      <BreadcrumbJsonLd pageName={t('gallery.title')} pagePath="/gallery" />
      <div className="section-container">
        <div className="section-header">
          <div className="section-icon bg-gradient-to-br from-coral/20 to-sunset/20">
            <Images className="w-7 h-7 text-coral" />
          </div>
          <h1 className="section-title text-gradient-earth mb-4">
            {t('gallery.title')}
          </h1>
          <p className="text-foreground/70 max-w-2xl mx-auto">
            {t('gallery.subtitle')}
          </p>
        </div>

        <div className="columns-2 md:columns-3 lg:columns-4 gap-4 max-w-7xl mx-auto">
          {images.map((image, index) => (
            <div
              key={index}
              className="mb-4 overflow-hidden rounded-xl shadow-lg group cursor-pointer break-inside-avoid"
            >
              <img
                src={image.src}
                alt={image.alt}
                loading="lazy"
                className="w-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
          ))}
        </div>

        {/* Social Media Links */}
        <div className="text-center mt-16">
          <p className="text-foreground/70 mb-4">{t('gallery.followUs')}</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://www.facebook.com/SalvationTempleLV/photos"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-sunset to-coral text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
            >
              <Facebook className="w-5 h-5" />
              Facebook
            </a>
            <a
              href="https://www.instagram.com/salvationtemplelv/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-sunset to-coral text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
            >
              <Instagram className="w-5 h-5" />
              Instagram
            </a>
            <a
              href="https://www.youtube.com/@SalvationTemple"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-sunset to-coral text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
            >
              <Youtube className="w-5 h-5" />
              YouTube
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

const Gallery = () => {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-background font-body">
        <ChurchHeader />
        <GalleryContent />
        <ChurchFooter />
      </div>
    </LanguageProvider>
  );
};

export default Gallery;