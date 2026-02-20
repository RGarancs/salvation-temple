import { useLanguage } from '@/contexts/LanguageContext';
import { Heart, CreditCard, Building, Copy } from 'lucide-react';
import { useState } from 'react';

export const DonationsSection = () => {
  const { t } = useLanguage();
  const [copied, setCopied] = useState<string | null>(null);

  const bankDetails = {
    bankName: 'Swedbank',
    accountName: 'Rīgas Misionāru baptistu draudze "Pestīšanas Templis"',
    iban: 'LV00HABA0000000000000',
    swift: 'HABALV22',
    regNr: '90000000000',
  };

  const copyToClipboard = (text: string, field: string) => {
    navigator.clipboard.writeText(text);
    setCopied(field);
    setTimeout(() => setCopied(null), 2000);
  };

  return (
    <section id="donations" className="py-12 md:py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-br from-amber/20 to-coral/20 mb-6">
            <Heart className="w-7 h-7 text-coral" />
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-gradient-earth mb-4">
            {t('donations.title')}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {t('donations.subtitle')}
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="card-warm p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-amber/10 flex items-center justify-center">
                <Building className="w-5 h-5 text-amber" />
              </div>
              <h3 className="font-display text-xl font-bold text-foreground">
                {t('donations.bankDetails')}
              </h3>
            </div>

            <div className="space-y-4">
              <div className="p-4 bg-muted/50 rounded-xl">
                <p className="text-sm text-foreground/70 mb-1">{t('donations.recipient')}</p>
                <div className="flex items-center justify-between gap-4">
                  <p className="font-medium text-foreground text-sm">{bankDetails.accountName}</p>
                  <button
                    onClick={() => copyToClipboard(bankDetails.accountName, 'name')}
                    className="p-2 hover:bg-muted rounded-lg transition-colors"
                  >
                    <Copy className={`w-4 h-4 ${copied === 'name' ? 'text-sunset' : 'text-foreground/70'}`} />
                  </button>
                </div>
              </div>

              <div className="p-4 bg-muted/50 rounded-xl">
                <p className="text-sm text-foreground/70 mb-1">IBAN</p>
                <div className="flex items-center justify-between gap-4">
                  <p className="font-mono font-medium text-foreground">{bankDetails.iban}</p>
                  <button
                    onClick={() => copyToClipboard(bankDetails.iban, 'iban')}
                    className="p-2 hover:bg-muted rounded-lg transition-colors"
                  >
                    <Copy className={`w-4 h-4 ${copied === 'iban' ? 'text-sunset' : 'text-foreground/70'}`} />
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 bg-muted/50 rounded-xl">
                  <p className="text-sm text-foreground/70 mb-1">SWIFT</p>
                  <p className="font-mono font-medium text-foreground">{bankDetails.swift}</p>
                </div>
                <div className="p-4 bg-muted/50 rounded-xl">
                  <p className="text-sm text-foreground/70 mb-1">{t('donations.bank')}</p>
                  <p className="font-medium text-foreground">{bankDetails.bankName}</p>
                </div>
              </div>
            </div>

            <div className="mt-8 p-4 bg-sunset/5 rounded-xl border border-sunset/10">
              <p className="text-sm text-foreground/70 text-center">
                {t('donations.thankYou')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
