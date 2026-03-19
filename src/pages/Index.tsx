import { LanguageProvider } from '@/contexts/LanguageContext';
import { ChurchHeader } from '@/components/ChurchHeader';
import { ChurchHero } from '@/components/sections/ChurchHero';
import { AboutSection } from '@/components/sections/AboutSection';
import { StatisticsSection } from '@/components/sections/StatisticsSection';
import { EventsSection } from '@/components/sections/EventsSection';
import { MinistriesSection } from '@/components/sections/MinistriesSection';
import { GalleryPreviewSection } from '@/components/sections/GalleryPreviewSection';
import { ContactsSection } from '@/components/sections/ContactsSection';
import { ChurchFooter } from '@/components/sections/ChurchFooter';

const Index = () => {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-background font-body">
        <ChurchHeader />
        <ChurchHero />
        <EventsSection />
        <AboutSection />
        <StatisticsSection />
        <MinistriesSection />
        <GalleryPreviewSection />
        <ContactsSection />
        <ChurchFooter />
      </div>
    </LanguageProvider>
  );
};

export default Index;
