import { LanguageProvider } from '@/contexts/LanguageContext';
import { ChurchHeader } from '@/components/ChurchHeader';
import { ChurchHero } from '@/components/sections/ChurchHero';
import { EventsSection } from '@/components/sections/EventsSection';
import { MinistriesSection } from '@/components/sections/MinistriesSection';
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
        <EventsSection />
        <MinistriesSection />
        <CareSection />
        <ContactsSection />
        <DonationsSection />
        <ChurchFooter />
      </div>
    </LanguageProvider>
  );
};

export default Index;
