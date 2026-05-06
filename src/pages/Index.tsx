import { LanguageProvider } from '@/contexts/LanguageContext';
import { ChurchHeader } from '@/components/ChurchHeader';
import { ChurchHero } from '@/components/sections/ChurchHero';
import { AboutSection } from '@/components/sections/AboutSection';
import { StatisticsSection } from '@/components/sections/StatisticsSection';
import { EventsSection } from '@/components/sections/EventsSection';
import { GoogleCalendarSection } from '@/components/sections/GoogleCalendarSection';
import { NewsSection } from '@/components/sections/NewsSection';
import { MinistriesSection } from '@/components/sections/MinistriesSection';
import { GalleryPreviewSection } from '@/components/sections/GalleryPreviewSection';
import { ContactsSection } from '@/components/sections/ContactsSection';
import { ChurchFooter } from '@/components/sections/ChurchFooter';
import { usePageMeta } from '@/hooks/usePageMeta';
import { WebSiteJsonLd, EventJsonLd } from '@/components/seo/JsonLd';

const IndexContent = () => {
  usePageMeta({
    titleKey: 'meta.home.title',
    descriptionKey: 'meta.home.description',
    canonicalPath: '/',
  });

  return (
    <div className="min-h-screen bg-background font-body">
      <WebSiteJsonLd />
      <EventJsonLd />
      <ChurchHeader />
      <ChurchHero />
      <EventsSection />
      <GoogleCalendarSection />
      <NewsSection />
      <AboutSection />
      <StatisticsSection />
      <MinistriesSection />
      <GalleryPreviewSection />
      <ContactsSection />
      <ChurchFooter />
    </div>
  );
};

const Index = () => {
  return (
    <LanguageProvider>
      <IndexContent />
    </LanguageProvider>
  );
};

export default Index;
