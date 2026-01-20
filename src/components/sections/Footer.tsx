import { useLanguage } from '@/contexts/LanguageContext';
import { Sparkles, MapPin, Mail, ExternalLink, Heart } from 'lucide-react';
import qrCode from '@/assets/qr-code.png';
import churchLogo from '@/assets/church-logo.png';

export const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer id="register" className="relative py-20 bg-chocolate text-primary-foreground overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-teal via-amber to-coral opacity-60" />
        <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-amber/5 blur-3xl" />
        <div className="absolute -bottom-32 -left-32 w-80 h-80 rounded-full bg-teal/5 blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
          {/* Left side - Registration */}
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-4 mb-6">
              <div className="w-16 h-16 rounded-2xl overflow-hidden glow-coral">
                <img 
                  src={churchLogo} 
                  alt="Храм Спасения" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h2 className="font-display text-2xl md:text-3xl font-bold text-gradient-coral">
                  Храм Спасения
                </h2>
                <p className="text-primary-foreground/60 text-sm">{t('footer.church')}</p>
              </div>
            </div>
            
            <h3 className="font-display text-3xl md:text-4xl font-bold mb-4 text-primary-foreground">
              {t('hero.cta')}
            </h3>
            
            <p className="text-primary-foreground/70 mb-6 max-w-md">
              {t('philosophy.text').substring(0, 120)}...
            </p>

            <a
              href="https://forms.gle/2GkmmrRmaKdAxdaV7"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 bg-gradient-to-r from-amber to-orange text-foreground px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1 glow-amber"
            >
              <Sparkles className="w-5 h-5 group-hover:animate-pulse" />
              {t('hero.cta')}
              <ExternalLink className="w-4 h-4" />
            </a>

            <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 mt-8 text-sm text-primary-foreground/60">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>Lāčplēša 117, Riga</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <span>info@temple.lv</span>
              </div>
            </div>
          </div>

          {/* Right side - QR Code */}
          <div className="flex flex-col items-center">
            <div className="glass-chocolate rounded-3xl p-8 text-center">
              <p className="text-sm text-primary-foreground/60 mb-4 uppercase tracking-wider font-semibold">
                {t('nav.register')}
              </p>
              <div className="w-48 h-48 mx-auto mb-4 rounded-2xl overflow-hidden bg-white p-2 glow-amber">
                <img 
                  src={qrCode} 
                  alt="QR Code для регистрации" 
                  className="w-full h-full object-contain"
                />
              </div>
              <p className="text-xs text-primary-foreground/50">
                Сканируйте для регистрации
              </p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-primary-foreground/10 text-center">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-sm text-primary-foreground/50">
            <p className="flex items-center gap-2">
              {t('footer.copyright')}
            </p>
            <span className="hidden sm:inline">•</span>
            <p className="flex items-center gap-2">
              Made with <Heart className="w-4 h-4 text-coral animate-pulse" /> by Храм Спасения
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
