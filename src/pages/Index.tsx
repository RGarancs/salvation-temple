import { LanguageProvider } from '@/contexts/LanguageContext';
import { ChurchHeader } from '@/components/ChurchHeader';
import { ChurchHero } from '@/components/sections/ChurchHero';
import { AboutSection } from '@/components/sections/AboutSection';
import { HistorySection } from '@/components/sections/HistorySection';
import { StatisticsSection } from '@/components/sections/StatisticsSection';
import { EventsSection } from '@/components/sections/EventsSection';
import { MinistriesSection } from '@/components/sections/MinistriesSection';
import { GallerySection } from '@/components/sections/GallerySection';
import { CareSection } from '@/components/sections/CareSection';
import { ContactsSection } from '@/components/sections/ContactsSection';
import { DonationsSection } from '@/components/sections/DonationsSection';
import { ChurchFooter } from '@/components/sections/ChurchFooter';

const Index = () => {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-background font-body">
        <ChurchHeader />
        <ChurchHero />
        <AboutSection />
        <HistorySection />
        <StatisticsSection />
        <EventsSection />
        <MinistriesSection />
        <GallerySection />
        <CareSection />
        <ContactsSection />
        <DonationsSection />
        <ChurchFooter />
      </div>
    </LanguageProvider>
  );
};

export default Index;
