import { useLanguage } from '@/contexts/LanguageContext';
import { Images, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import galleryChoir from '@/assets/gallery-choir.jpg';
import galleryPastor from '@/assets/gallery-pastor.jpg';
import galleryService from '@/assets/gallery-service.jpg';
import galleryCross from '@/assets/gallery-cross.jpg';
import galleryWorship from '@/assets/gallery-worship.jpg';
import galleryBaptism from '@/assets/gallery-baptism.jpg';
import galleryStage from '@/assets/gallery-stage.jpg';
import galleryCommunity from '@/assets/gallery-community.jpg';

export const GalleryPreviewSection = () => {
  const { t } = useLanguage();

  const images = [
    { src: galleryChoir, alt: 'Choir worship' },
    { src: galleryPastor, alt: 'Pastor preaching' },
    { src: galleryService, alt: 'Church service' },
    { src: galleryCross, alt: 'Cross in sanctuary' },
    { src: galleryWorship, alt: 'Worship' },
    { src: galleryBaptism, alt: 'Baptism' },
    { src: galleryStage, alt: 'Stage' },
    { src: galleryCommunity, alt: 'Community' },
  ];

  return (
    <section id="gallery" className="section-py bg-background">
      <div className="section-container">
        <div className="section-header">
          <div className="section-icon bg-gradient-to-br from-coral/20 to-sunset/20">
            <Images className="w-7 h-7 text-coral" />
          </div>
          <h2 className="section-title text-gradient-earth mb-4">
            {t('gallery.title')}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {t('gallery.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
          {images.map((image, index) => (
            <div
              key={index}
              className={`overflow-hidden rounded-xl shadow-lg group cursor-pointer ${
                index === 0 ? 'md:col-span-2 md:row-span-2' : ''
              }`}
            >
              <img
                src={image.src}
                alt={image.alt}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                style={{ 
                  aspectRatio: index === 0 ? '1/1' : '4/3',
                  minHeight: index === 0 ? '400px' : '180px'
                }}
              />
            </div>
          ))}
        </div>

        {/* View Full Gallery Button */}
        <div className="text-center mt-10">
          <Link
            to="/gallery"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-sunset to-coral text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
          >
            {t('gallery.viewAll')}
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
};
