import { useLanguage } from '@/contexts/LanguageContext';
import { MapPin, Mail, Phone, Heart, ExternalLink } from 'lucide-react';
import churchLogo from '@/assets/church-logo.png';

export const ChurchFooter = () => {
  const { t } = useLanguage();

  const socialLinks = [
    { name: 'Facebook', url: 'https://www.facebook.com/SalvationTempleLV/', icon: '📘' },
    { name: 'Instagram', url: 'https://www.instagram.com/salvationtemplelv/', icon: '📷' },
    { name: 'YouTube', url: 'https://www.youtube.com/@SalvationTemple', icon: '🎬' },
  ];

  return (
    <footer className="relative py-16 bg-chocolate text-white overflow-hidden">
      {/* Decorative top border */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-sunset via-amber to-coral opacity-50" />

      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-12 max-w-5xl mx-auto">
          {/* Church Info */}
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl overflow-hidden">
                <img src={churchLogo} alt={t('church.name')} className="w-full h-full object-cover" />
              </div>
              <div>
                <h3 className="font-display text-lg font-bold text-white">
                  {t('church.name')}
                </h3>
                <p className="text-white/50 text-sm">{t('church.officialName')}</p>
              </div>
            </div>
            <p className="text-white/60 text-sm leading-relaxed mb-6">
              {t('church.shortDesc')}
            </p>
            
            {/* Social Links */}
            <div className="flex items-center justify-center md:justify-start gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-lg hover:bg-white/20 transition-colors"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div className="text-center md:text-left">
            <h4 className="font-display text-lg font-bold text-white mb-4">
              {t('contacts.title')}
            </h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-3 justify-center md:justify-start">
                <MapPin className="w-4 h-4 text-coral mt-0.5 flex-shrink-0" />
                <span className="text-white/70">
                  Lāčplēša iela 117<br />
                  Rīga, LV-1003
                </span>
              </div>
              <div className="flex items-center gap-3 justify-center md:justify-start">
                <Phone className="w-4 h-4 text-amber flex-shrink-0" />
                <a href="tel:+37126025329" className="text-white/70 hover:text-white transition-colors">
                  +371 26025329
                </a>
              </div>
              <div className="flex items-center gap-3 justify-center md:justify-start">
                <Mail className="w-4 h-4 text-sunset flex-shrink-0" />
                <a href="mailto:salvtemp117@gmail.com" className="text-white/70 hover:text-white transition-colors">
                  salvtemp117@gmail.com
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links & Donations */}
          <div className="text-center md:text-left">
            <h4 className="font-display text-lg font-bold text-white mb-4">
              {t('donations.title')}
            </h4>
            <p className="text-white/60 text-sm mb-4">
              {t('donations.footer')}
            </p>
            <a
              href="#donations"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-sunset to-coral text-white px-5 py-2.5 rounded-full font-semibold text-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
            >
              <Heart className="w-4 h-4" />
              {t('donations.cta')}
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-white/10 text-center">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-sm text-white/40">
            <p>© 2025 {t('church.name')}. {t('footer.rights')}</p>
          </div>
        </div>
      </div>
    </footer>
  );
};
