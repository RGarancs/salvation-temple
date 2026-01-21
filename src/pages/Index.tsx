import { LanguageProvider } from '@/contexts/LanguageContext';
import { Header } from '@/components/Header';
import { HeroSection } from '@/components/sections/HeroSection';
import { PhilosophySection } from '@/components/sections/PhilosophySection';
import { BenefitsSection } from '@/components/sections/BenefitsSection';
import { TargetSection } from '@/components/sections/TargetSection';
import { MethodSection } from '@/components/sections/MethodSection';
import { ApproachSection } from '@/components/sections/ApproachSection';
import { WheelSection } from '@/components/sections/WheelSection';
import { SessionsSection } from '@/components/sections/SessionsSection';
import { TeamSection } from '@/components/sections/TeamSection';
import { OrganizationSection } from '@/components/sections/OrganizationSection';
import { Footer } from '@/components/sections/Footer';

const Index = () => {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-background font-body">
        <Header />
        <HeroSection />
        <PhilosophySection />
        <BenefitsSection />
        <TargetSection />
        <MethodSection />
        <ApproachSection />
        <WheelSection />
        <SessionsSection />
        <TeamSection />
        <OrganizationSection />
        <Footer />
      </div>
    </LanguageProvider>
  );
};

export default Index;
