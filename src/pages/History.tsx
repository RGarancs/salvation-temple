import { LanguageProvider } from '@/contexts/LanguageContext';
import { ChurchHeader } from '@/components/ChurchHeader';
import { HistorySection } from '@/components/sections/HistorySection';
import { ChurchFooter } from '@/components/sections/ChurchFooter';

const History = () => {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-background font-body">
        <ChurchHeader />
        <div className="pt-20">
          <HistorySection />
        </div>
        <ChurchFooter />
      </div>
    </LanguageProvider>
  );
};

export default History;
