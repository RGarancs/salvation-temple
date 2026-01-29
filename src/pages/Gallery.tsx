import { LanguageProvider } from '@/contexts/LanguageContext';
import { ChurchHeader } from '@/components/ChurchHeader';
import { ChurchFooter } from '@/components/sections/ChurchFooter';
import { useLanguage } from '@/contexts/LanguageContext';
import { Images } from 'lucide-react';
import galleryPastor from '@/assets/gallery-pastor.jpg';
import galleryService from '@/assets/gallery-service.jpg';
import galleryChoir from '@/assets/gallery-choir.jpg';
import galleryCross from '@/assets/gallery-cross.jpg';
import galleryCommunion from '@/assets/gallery-communion.jpg';
import galleryBible from '@/assets/gallery-bible.jpg';
import galleryWorship from '@/assets/gallery-worship.jpg';
import galleryCommunionNew from '@/assets/gallery-communion-new.jpg';
import galleryKids from '@/assets/gallery-kids.jpg';
import galleryLife from '@/assets/gallery-life.jpg';
import galleryPreaching from '@/assets/gallery-preaching.jpg';
import galleryMedia from '@/assets/gallery-media.jpg';
import galleryPulpit from '@/assets/gallery-pulpit.jpg';
import galleryBaptism from '@/assets/gallery-baptism.jpg';
import galleryCongregation from '@/assets/gallery-congregation.jpg';
import galleryCollage from '@/assets/gallery-collage.jpg';

const GalleryContent = () => {
  const { t } = useLanguage();

  const images = [
    { src: galleryChoir, alt: 'Choir worship' },
    { src: galleryPastor, alt: 'Pastor preaching' },
    { src: galleryService, alt: 'Church service' },
    { src: galleryCross, alt: 'Cross in sanctuary' },
    { src: galleryCommunion, alt: 'Communion service' },
    { src: galleryBible, alt: 'Bible reading' },
    { src: galleryWorship, alt: 'Worship team' },
    { src: galleryCommunionNew, alt: 'Communion' },
    { src: galleryKids, alt: 'Sunday school kids' },
    { src: galleryLife, alt: 'Church life' },
    { src: galleryPreaching, alt: 'Preaching' },
    { src: galleryMedia, alt: 'Media team' },
    { src: galleryPulpit, alt: 'Pulpit' },
    { src: galleryBaptism, alt: 'Baptism' },
    { src: galleryCongregation, alt: 'Congregation' },
    { src: galleryCollage, alt: 'Church moments' },
  ];

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
              className="glass px-6 py-3 rounded-full font-semibold text-foreground hover:bg-sunset/10 transition-colors flex items-center gap-2"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
              Facebook
            </a>
            <a
              href="https://www.instagram.com/salvationtemplelv/"
              target="_blank"
              rel="noopener noreferrer"
              className="glass px-6 py-3 rounded-full font-semibold text-foreground hover:bg-coral/10 transition-colors flex items-center gap-2"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
              Instagram
            </a>
            <a
              href="https://www.youtube.com/@SalvationTemple"
              target="_blank"
              rel="noopener noreferrer"
              className="glass px-6 py-3 rounded-full font-semibold text-foreground hover:bg-amber/10 transition-colors flex items-center gap-2"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
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
