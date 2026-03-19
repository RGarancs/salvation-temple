import { LanguageProvider } from '@/contexts/LanguageContext';
import { ChurchHeader } from '@/components/ChurchHeader';
import { ChurchFooter } from '@/components/sections/ChurchFooter';
import { useLanguage } from '@/contexts/LanguageContext';
import { Heart, Copy, Check, Building2, Church, Users, BookOpen, Sun, Home } from 'lucide-react';
import { useState } from 'react';
import { bordeauxCardStyle } from '@/styles/bordeaux';
import { BordeauxOverlay } from '@/components/ui/bordeaux-overlay';

const DonationsContent = () => {
  const { t } = useLanguage();
  const [copiedField, setCopiedField] = useState<string | null>(null);

  const bankDetails = {
    recipient: 'RĪGAS MISIONES BAPTISTU DRAUDZE',
    iban: 'LV80UNLA0050011859310',
    bank: 'SEB',
    swift: 'UNLALV2X',
  };

  const projects = [
    { key: 'building', icon: Church, color: 'sunset' },
    { key: 'sundaySchool', icon: BookOpen, color: 'coral' },
    { key: 'summerCamp', icon: Sun, color: 'amber' },
    { key: 'charity', icon: Users, color: 'terracotta' },
    { key: 'families', icon: Home, color: 'burnt' },
  ];

  const copyToClipboard = (text: string, field: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2000);
  };

  return (
    <section className="page-py bg-cream-dark min-h-screen">
      <div className="section-container">
        <div className="section-header">
          <div className="section-icon bg-gradient-to-br from-amber/20 to-sunset/20">
            <Heart className="w-7 h-7 text-amber" />
          </div>
          <h1 className="section-title text-gradient-earth mb-4">
            {t('donations.title')}
          </h1>
          <p className="text-foreground/70 max-w-2xl mx-auto">
            {t('donations.subtitle')}
          </p>
        </div>

        {/* Why Give Section - Dark Bordeaux */}
        <div className="max-w-4xl mx-auto mb-12">
          <div 
            className="relative overflow-hidden rounded-2xl p-8 text-center transition-all duration-300 hover:shadow-xl"
            style={bordeauxCardStyle}
          >
            <BordeauxOverlay />
            <div className="relative z-10">
              <h2 className="font-display text-2xl font-bold text-white/95 mb-4">
                {t('donations.whyGive')}
              </h2>
              <p className="text-white/70 text-lg leading-relaxed">
                {t('donations.whyGiveText')}
              </p>
            </div>
          </div>
        </div>

        {/* Church Projects Section */}
        <div className="max-w-5xl mx-auto mb-12">
          <h2 className="font-display text-2xl font-bold text-center text-gradient-warm mb-8">
            {t('donations.projects.title')}
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {projects.map((project) => {
              const Icon = project.icon;
              return (
                <div 
                  key={project.key}
                  className="relative overflow-hidden rounded-2xl p-4 text-center transition-all duration-300 hover:shadow-xl hover:-translate-y-1 group"
                  style={bordeauxCardStyle}
                >
                  <BordeauxOverlay />
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-2xl bg-shine" />
                  <div className="relative z-10">
                    <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center mx-auto mb-3 border border-white/10">
                      <Icon className="w-5 h-5 text-sunset-light" />
                    </div>
                    <h3 className="font-display text-sm font-bold text-white/95 mb-1">
                      {t(`donations.projects.${project.key}.title`)}
                    </h3>
                    <p className="text-white/60 text-xs">
                      {t(`donations.projects.${project.key}.desc`)}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bank Details - Dark Bordeaux */}
        <div className="max-w-2xl mx-auto">
          <div 
            className="relative overflow-hidden rounded-2xl p-8 transition-all duration-300 hover:shadow-xl"
            style={bordeauxCardStyle}
          >
            <BordeauxOverlay />
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-6">
                <Building2 className="w-6 h-6 text-sunset-light" />
                <h3 className="font-display text-xl font-bold text-white/95">
                  {t('donations.bankDetails')}
                </h3>
              </div>

              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-white/5 rounded-xl border border-white/10">
                  <div>
                    <p className="text-sm text-white/50">{t('donations.recipient')}</p>
                    <p className="font-semibold text-white/95">{bankDetails.recipient}</p>
                  </div>
                  <button
                    onClick={() => copyToClipboard(bankDetails.recipient, 'recipient')}
                    className="p-2 hover:bg-white/10 rounded-lg transition-colors"
                  >
                    {copiedField === 'recipient' ? (
                      <Check className="w-5 h-5 text-green-400" />
                    ) : (
                      <Copy className="w-5 h-5 text-white/50" />
                    )}
                  </button>
                </div>

                <div className="flex items-center justify-between p-4 bg-white/5 rounded-xl border border-white/10">
                  <div>
                    <p className="text-sm text-white/50">IBAN</p>
                    <p className="font-mono font-semibold text-white/95">{bankDetails.iban}</p>
                  </div>
                  <button
                    onClick={() => copyToClipboard(bankDetails.iban, 'iban')}
                    className="p-2 hover:bg-white/10 rounded-lg transition-colors"
                  >
                    {copiedField === 'iban' ? (
                      <Check className="w-5 h-5 text-green-400" />
                    ) : (
                      <Copy className="w-5 h-5 text-white/50" />
                    )}
                  </button>
                </div>

                <div className="flex items-center justify-between p-4 bg-white/5 rounded-xl border border-white/10">
                  <div>
                    <p className="text-sm text-white/50">{t('donations.bank')}</p>
                    <p className="font-semibold text-white/95">{bankDetails.bank}</p>
                  </div>
                  <button
                    onClick={() => copyToClipboard(bankDetails.bank, 'bank')}
                    className="p-2 hover:bg-white/10 rounded-lg transition-colors"
                  >
                    {copiedField === 'bank' ? (
                      <Check className="w-5 h-5 text-green-400" />
                    ) : (
                      <Copy className="w-5 h-5 text-white/50" />
                    )}
                  </button>
                </div>

                <div className="flex items-center justify-between p-4 bg-white/5 rounded-xl border border-white/10">
                  <div>
                    <p className="text-sm text-white/50">SWIFT</p>
                    <p className="font-mono font-semibold text-white/95">{bankDetails.swift}</p>
                  </div>
                  <button
                    onClick={() => copyToClipboard(bankDetails.swift, 'swift')}
                    className="p-2 hover:bg-white/10 rounded-lg transition-colors"
                  >
                    {copiedField === 'swift' ? (
                      <Check className="w-5 h-5 text-green-400" />
                    ) : (
                      <Copy className="w-5 h-5 text-white/50" />
                    )}
                  </button>
                </div>
              </div>

              <div className="mt-8 p-4 bg-gradient-to-r from-sunset/20 to-amber/20 rounded-xl text-center border border-sunset/30">
                <p className="text-white/90 font-medium">
                  {t('donations.thankYou')}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Impact Section - Dark Bordeaux */}
        <div className="max-w-4xl mx-auto mt-12">
          <div 
            className="relative overflow-hidden rounded-2xl p-8 transition-all duration-300 hover:shadow-xl"
            style={bordeauxCardStyle}
          >
            <BordeauxOverlay />
            <div className="relative z-10">
              <h2 className="font-display text-2xl font-bold text-white/95 mb-6 text-center">
                {t('donations.impact')}
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center mx-auto mb-3 border border-white/10">
                    <span className="text-2xl">🏠</span>
                  </div>
                  <p className="text-white/70">{t('donations.impactBuilding')}</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center mx-auto mb-3 border border-white/10">
                    <span className="text-2xl">👨‍👩‍👧‍👦</span>
                  </div>
                  <p className="text-white/70">{t('donations.impactMinistries')}</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center mx-auto mb-3 border border-white/10">
                    <span className="text-2xl">❤️</span>
                  </div>
                  <p className="text-white/70">{t('donations.impactCharity')}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Donations = () => {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-background font-body">
        <ChurchHeader />
        <DonationsContent />
        <ChurchFooter />
      </div>
    </LanguageProvider>
  );
};

export default Donations;