import { LanguageProvider } from '@/contexts/LanguageContext';
import { ChurchHeader } from '@/components/ChurchHeader';
import { ChurchFooter } from '@/components/sections/ChurchFooter';
import { useLanguage } from '@/contexts/LanguageContext';
import { Heart, Copy, Check, Building2 } from 'lucide-react';
import { useState } from 'react';

const DonationsContent = () => {
  const { t } = useLanguage();
  const [copiedField, setCopiedField] = useState<string | null>(null);

  const bankDetails = {
    recipient: 'RĪGAS MISIONES BAPTISTU DRAUDZE',
    iban: 'LV80UNLA0050011859310',
    bank: 'SEB',
    swift: 'UNLALV2X',
  };

  const copyToClipboard = (text: string, field: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2000);
  };

  return (
    <section className="py-24 bg-cream-dark min-h-screen pt-32">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-br from-amber/20 to-sunset/20 mb-6">
            <Heart className="w-7 h-7 text-amber" />
          </div>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-gradient-earth mb-4">
            {t('donations.title')}
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {t('donations.subtitle')}
          </p>
        </div>

        {/* Why Give Section */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="card-warm p-8 text-center">
            <h2 className="font-display text-2xl font-bold text-gradient-warm mb-4">
              {t('donations.whyGive')}
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              {t('donations.whyGiveText')}
            </p>
          </div>
        </div>

        {/* Bank Details */}
        <div className="max-w-2xl mx-auto">
          <div className="card-warm p-8">
            <div className="flex items-center gap-3 mb-6">
              <Building2 className="w-6 h-6 text-sunset" />
              <h3 className="font-display text-xl font-bold text-foreground">
                {t('donations.bankDetails')}
              </h3>
            </div>

            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 bg-muted/30 rounded-xl">
                <div>
                  <p className="text-sm text-muted-foreground">{t('donations.recipient')}</p>
                  <p className="font-semibold text-foreground">{bankDetails.recipient}</p>
                </div>
                <button
                  onClick={() => copyToClipboard(bankDetails.recipient, 'recipient')}
                  className="p-2 hover:bg-muted rounded-lg transition-colors"
                >
                  {copiedField === 'recipient' ? (
                    <Check className="w-5 h-5 text-green-500" />
                  ) : (
                    <Copy className="w-5 h-5 text-muted-foreground" />
                  )}
                </button>
              </div>

              <div className="flex items-center justify-between p-4 bg-muted/30 rounded-xl">
                <div>
                  <p className="text-sm text-muted-foreground">IBAN</p>
                  <p className="font-mono font-semibold text-foreground">{bankDetails.iban}</p>
                </div>
                <button
                  onClick={() => copyToClipboard(bankDetails.iban, 'iban')}
                  className="p-2 hover:bg-muted rounded-lg transition-colors"
                >
                  {copiedField === 'iban' ? (
                    <Check className="w-5 h-5 text-green-500" />
                  ) : (
                    <Copy className="w-5 h-5 text-muted-foreground" />
                  )}
                </button>
              </div>

              <div className="flex items-center justify-between p-4 bg-muted/30 rounded-xl">
                <div>
                  <p className="text-sm text-muted-foreground">{t('donations.bank')}</p>
                  <p className="font-semibold text-foreground">{bankDetails.bank}</p>
                </div>
                <button
                  onClick={() => copyToClipboard(bankDetails.bank, 'bank')}
                  className="p-2 hover:bg-muted rounded-lg transition-colors"
                >
                  {copiedField === 'bank' ? (
                    <Check className="w-5 h-5 text-green-500" />
                  ) : (
                    <Copy className="w-5 h-5 text-muted-foreground" />
                  )}
                </button>
              </div>

              <div className="flex items-center justify-between p-4 bg-muted/30 rounded-xl">
                <div>
                  <p className="text-sm text-muted-foreground">SWIFT</p>
                  <p className="font-mono font-semibold text-foreground">{bankDetails.swift}</p>
                </div>
                <button
                  onClick={() => copyToClipboard(bankDetails.swift, 'swift')}
                  className="p-2 hover:bg-muted rounded-lg transition-colors"
                >
                  {copiedField === 'swift' ? (
                    <Check className="w-5 h-5 text-green-500" />
                  ) : (
                    <Copy className="w-5 h-5 text-muted-foreground" />
                  )}
                </button>
              </div>
            </div>

            <div className="mt-8 p-4 bg-gradient-to-r from-sunset/10 to-amber/10 rounded-xl text-center">
              <p className="text-foreground font-medium">
                {t('donations.thankYou')}
              </p>
            </div>
          </div>
        </div>

        {/* Impact Section */}
        <div className="max-w-4xl mx-auto mt-12">
          <div className="card-warm p-8">
            <h2 className="font-display text-2xl font-bold text-gradient-warm mb-6 text-center">
              {t('donations.impact')}
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 rounded-full bg-sunset/10 flex items-center justify-center mx-auto mb-3">
                  <span className="text-2xl">🏠</span>
                </div>
                <p className="text-muted-foreground">{t('donations.impactBuilding')}</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 rounded-full bg-coral/10 flex items-center justify-center mx-auto mb-3">
                  <span className="text-2xl">👨‍👩‍👧‍👦</span>
                </div>
                <p className="text-muted-foreground">{t('donations.impactMinistries')}</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 rounded-full bg-amber/10 flex items-center justify-center mx-auto mb-3">
                  <span className="text-2xl">❤️</span>
                </div>
                <p className="text-muted-foreground">{t('donations.impactCharity')}</p>
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
