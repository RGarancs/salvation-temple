import { useLanguage } from '@/contexts/LanguageContext';
import { MapPin, Mail, Heart } from 'lucide-react';
import qrCode from '@/assets/qr-code.png';
import churchLogo from '@/assets/church-logo.png';

export const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer id="register" className="relative py-20 bg-chocolate text-white overflow-hidden">
      {/* Subtle decorative background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-sunset via-amber to-coral opacity-50" />
        <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-amber/5 blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-4xl mx-auto">
          {/* Left side - Registration */}
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-4 mb-6">
              <div className="w-14 h-14 rounded-xl overflow-hidden">
                <img 
                  src={churchLogo} 
                  alt="Храм Спасения" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h2 className="font-display text-xl font-bold text-white">
                  Храм Спасения
                </h2>
                <p className="text-white/50 text-sm">{t('footer.church')}</p>
              </div>
            </div>
            
            <h3 className="font-display text-3xl md:text-4xl font-bold mb-4 text-gradient-coral">
              {t('hero.cta')}
            </h3>
            
            <p className="text-white/60 mb-8 max-w-md text-sm leading-relaxed">
              {t('philosophy.text').substring(0, 120)}...
            </p>

            <a
              href="https://forms.gle/2GkmmrRmaKdAxdaV7"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-gradient-to-r from-sunset via-coral to-amber text-white px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              {t('hero.cta')}
            </a>

            <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 mt-8 text-sm text-white/50">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>Lāčplēša 117, Riga</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <span>salvtemp117@gmail.com</span>
              </div>
            </div>
          </div>

          {/* Right side - QR Code */}
          <div className="flex flex-col items-center">
            <div className="bg-white/5 rounded-2xl p-6 text-center border border-white/10">
              <p className="text-sm text-white/50 mb-4 uppercase tracking-wider font-medium">
                {t('nav.register')}
              </p>
              <div className="w-40 h-40 mx-auto mb-3 rounded-xl overflow-hidden bg-white p-2">
                <img
                  src={qrCode}
                  alt="QR Code для регистрации"
                  loading="lazy"
                  className="w-full h-full object-contain"
                />
              </div>
              <p className="text-xs text-white/40">
                {t('footer.scanQR')}
              </p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-white/10 text-center">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-sm text-white/40">
            <p>{t('footer.copyright')}</p>
            <span className="hidden sm:inline">•</span>
            <p className="flex items-center gap-2">
              Made with <Heart className="w-4 h-4 text-coral" /> by Храм Спасения
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
