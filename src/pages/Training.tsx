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
import { CalendarSection } from '@/components/sections/CalendarSection';
import { TeamSection } from '@/components/sections/TeamSection';
import { OrganizationSection } from '@/components/sections/OrganizationSection';
import { Footer } from '@/components/sections/Footer';
import { usePageMeta } from '@/hooks/usePageMeta';
import { useLanguage } from '@/contexts/LanguageContext';
import { BreadcrumbJsonLd } from '@/components/seo/JsonLd';

const TrainingContent = () => {
  const { t } = useLanguage();
  usePageMeta({
    titleKey: 'meta.training.title',
    descriptionKey: 'meta.training.description',
    canonicalPath: '/training',
  });

  return (
    <div className="min-h-screen bg-background font-body">
      <BreadcrumbJsonLd pageName={t('hero.title')} pagePath="/training" />
      <Header />
      <HeroSection />
      <PhilosophySection />
      <BenefitsSection />
      <TargetSection />
      <MethodSection />
      <ApproachSection />
      <WheelSection />
      <SessionsSection />
      <CalendarSection />
      <TeamSection />
      <OrganizationSection />
      <Footer />
    </div>
  );
};

const Training = () => {
  return (
    <LanguageProvider>
      <TrainingContent />
    </LanguageProvider>
  );
};

export default Training;
