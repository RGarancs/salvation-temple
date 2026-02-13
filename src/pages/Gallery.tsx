import { LanguageProvider } from '@/contexts/LanguageContext';
import { ChurchHeader } from '@/components/ChurchHeader';
import { ChurchFooter } from '@/components/sections/ChurchFooter';
import { useLanguage } from '@/contexts/LanguageContext';
import { Images, Facebook, Instagram, Youtube } from 'lucide-react';

const galleryModules = import.meta.glob<{ default: string }>(
  '@/assets/gallery-*.jpg',
  { eager: true }
);

const images = Object.entries(galleryModules).map(([path, mod]) => ({
  src: mod.default,
  alt: (path.split('/').pop()?.replace(/^gallery-/, '').replace(/\.jpg$/, '') ?? '')
    .split('-')
    .map(w => w.charAt(0).toUpperCase() + w.slice(1))
    .join(' '),
}));

const GalleryContent = () => {
  const { t } = useLanguage();

  return (
    <section className="py-24 bg-background min-h-screen pt-32">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-br from-coral/20 to-sunset/20 mb-6">
            <Images className="w-7 h-7 text-coral" />
          </div>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-gradient-earth mb-4">
            {t('gallery.title')}
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
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
          <p className="text-muted-foreground mb-4">{t('gallery.followUs')}</p>
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