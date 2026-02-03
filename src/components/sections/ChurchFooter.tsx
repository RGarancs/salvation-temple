import { useLanguage } from '@/contexts/LanguageContext';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Youtube, MapPin, Phone, Mail, Heart } from 'lucide-react';
import churchLogo from '@/assets/church-logo.png';

export const ChurchFooter = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-[hsl(350_30%_4%)] text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-10 mb-12">
          {/* About Column */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <img src={churchLogo} alt={t('church.name')} className="w-12 h-12 rounded-xl" />
              <div>
                <h3 className="font-display font-bold text-lg text-white">{t('church.name')}</h3>
              </div>
            </div>
            <p className="text-white/60 text-sm leading-relaxed">
              {t('footer.aboutText')}
            </p>
          </div>

          {/* Navigation Column */}
          <div>
            <h4 className="font-display font-bold mb-4 text-white/90">{t('footer.navigation')}</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="/#about" className="text-white/60 hover:text-white transition-colors">{t('nav.about')}</a></li>
              <li><Link to="/history" className="text-white/60 hover:text-white transition-colors">{t('nav.history')}</Link></li>
              <li><a href="/#events" className="text-white/60 hover:text-white transition-colors">{t('nav.events')}</a></li>
              <li><a href="/#ministries" className="text-white/60 hover:text-white transition-colors">{t('nav.ministries')}</a></li>
              <li><Link to="/testimonies" className="text-white/60 hover:text-white transition-colors">{t('nav.testimonies')}</Link></li>
            </ul>
          </div>

          {/* Resources Column */}
          <div>
            <h4 className="font-display font-bold mb-4 text-white/90">{t('footer.resources')}</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/gallery" className="text-white/60 hover:text-white transition-colors">{t('gallery.title')}</Link></li>
              <li><Link to="/donations" className="text-white/60 hover:text-white transition-colors">{t('nav.donations')}</Link></li>
              <li><Link to="/training" className="text-white/60 hover:text-white transition-colors">{t('events.training.title')}</Link></li>
              <li><a href="/#contacts" className="text-white/60 hover:text-white transition-colors">{t('nav.contacts')}</a></li>
            </ul>
          </div>

          {/* Social Column */}
          <div>
            <h4 className="font-display font-bold mb-4 text-white/90">{t('contacts.socialMedia')}</h4>
            <div className="flex gap-3 mb-6">
              <a
                href="https://www.facebook.com/SalvationTempleLV/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://www.instagram.com/salvationtemplelv/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://www.youtube.com/@SalvationTemple"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>
            
            {/* Contact Info */}
            <div className="space-y-2 text-sm text-white/60">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>Lāčplēša 117, Rīga</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <span>+371 26025329</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <span>salvtemp117@gmail.com</span>
              </div>
            </div>
          </div>
        </div>

        {/* Donations Bar */}
        <div className="border-t border-white/10 pt-8 mb-8">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <Heart className="w-5 h-5 text-coral" />
              <span className="text-white/60 text-sm">{t('donations.footer')}</span>
            </div>
            <Link
              to="/donations"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-sunset to-coral text-white px-5 py-2.5 rounded-full font-semibold text-sm transition-all hover:shadow-lg"
            >
              {t('donations.cta')}
            </Link>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center text-white/40 text-sm">
          <p>© {new Date().getFullYear()} {t('church.name')}. {t('footer.rights')}</p>
        </div>
      </div>
    </footer>
  );
};
