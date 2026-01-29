import { LanguageProvider } from '@/contexts/LanguageContext';
import { ChurchHeader } from '@/components/ChurchHeader';
import { ChurchFooter } from '@/components/sections/ChurchFooter';
import { useLanguage } from '@/contexts/LanguageContext';
import { Images, Facebook, Instagram, Youtube } from 'lucide-react';
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
import galleryChristmasChild from '@/assets/gallery-christmas-child.jpg';
import galleryChoirCandles from '@/assets/gallery-choir-candles.jpg';
import galleryBanner from '@/assets/gallery-banner.jpg';
import galleryAudience from '@/assets/gallery-audience.jpg';
import galleryChildrenChoir from '@/assets/gallery-children-choir.jpg';
import gallerySpeaker from '@/assets/gallery-speaker.jpg';
import galleryCameraman from '@/assets/gallery-cameraman.jpg';
import galleryPastorPreaching from '@/assets/gallery-pastor-preaching.jpg';
import galleryKidsSinging from '@/assets/gallery-kids-singing.jpg';
import galleryPastorPulpit from '@/assets/gallery-pastor-pulpit.jpg';
import galleryPastorReading from '@/assets/gallery-pastor-reading.jpg';
import galleryCampfire from '@/assets/gallery-campfire.jpg';
import galleryKidsGroup from '@/assets/gallery-kids-group.jpg';
import galleryChoirPerformance from '@/assets/gallery-choir-performance.jpg';
import galleryYouthEvent from '@/assets/gallery-youth-event.jpg';
import galleryKidsCrafts from '@/assets/gallery-kids-crafts.jpg';
import galleryChristmasChoir from '@/assets/gallery-christmas-choir.jpg';

const GalleryContent = () => {
  const { t } = useLanguage();

  const images = [
    { src: galleryChoir, alt: 'Choir worship' },
    { src: galleryPastor, alt: 'Pastor preaching' },
    { src: galleryChristmasChild, alt: 'Christmas celebration' },
    { src: galleryChoirCandles, alt: 'Choir with candles' },
    { src: galleryService, alt: 'Church service' },
    { src: galleryCross, alt: 'Cross in sanctuary' },
    { src: galleryBanner, alt: 'Church banner' },
    { src: galleryCommunion, alt: 'Communion service' },
    { src: galleryPastorPulpit, alt: 'Pastor at pulpit' },
    { src: galleryAudience, alt: 'Church audience' },
    { src: galleryBible, alt: 'Bible reading' },
    { src: galleryWorship, alt: 'Worship team' },
    { src: galleryChildrenChoir, alt: 'Children choir' },
    { src: galleryPastorReading, alt: 'Pastor reading Bible' },
    { src: galleryCommunionNew, alt: 'Communion' },
    { src: galleryKids, alt: 'Sunday school kids' },
    { src: gallerySpeaker, alt: 'Speaker' },
    { src: galleryCampfire, alt: 'Community campfire' },
    { src: galleryLife, alt: 'Church life' },
    { src: galleryPreaching, alt: 'Preaching' },
    { src: galleryCameraman, alt: 'Media team filming' },
    { src: galleryKidsGroup, alt: 'Kids group photo' },
    { src: galleryMedia, alt: 'Media team' },
    { src: galleryPulpit, alt: 'Pulpit' },
    { src: galleryChoirPerformance, alt: 'Choir performance' },
    { src: galleryPastorPreaching, alt: 'Pastor preaching' },
    { src: galleryBaptism, alt: 'Baptism' },
    { src: galleryYouthEvent, alt: 'Youth event' },
    { src: galleryCongregation, alt: 'Congregation' },
    { src: galleryKidsSinging, alt: 'Kids singing' },
    { src: galleryKidsCrafts, alt: 'Kids doing crafts' },
    { src: galleryChristmasChoir, alt: 'Christmas choir performance' },
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
            {t('gallery.pageTitle')}
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {t('gallery.pageSubtitle')}
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
