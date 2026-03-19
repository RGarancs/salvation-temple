import { ReactNode } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { MapPin, Phone, Mail, Clock, Car, Facebook, Instagram, Youtube, CreditCard, LucideIcon } from 'lucide-react';
import leaderPastor from '@/assets/leader-pastor.jpg';
import leaderStanislav from '@/assets/leader-stanislav.jpg';
import galleryCommunity from '@/assets/gallery-community.jpg';
import { bordeauxCardStyle } from '@/styles/bordeaux';
import { BordeauxOverlay } from '@/components/ui/bordeaux-overlay';

const contacts = [
  {
    role: 'pastor',
    name: { ru: 'Александр Звиридс', en: 'Aleksandrs Zvirids', lv: 'Aleksandrs Zvirids' },
    phone: '+371 26025329',
    email: 'zvirid@gmail.com',
    image: leaderPastor,
  },
  {
    role: 'manager',
    name: { ru: 'Станислав Исаков', en: 'Stanislav Isakov', lv: 'Staņislavs Isakovs' },
    phone: '+371 26025329',
    email: 'ctacbanan@gmail.com',
    image: leaderStanislav,
  },
];

const socialLinks = [
  { href: 'https://www.facebook.com/SalvationTempleLV/', icon: Facebook, label: 'Facebook' },
  { href: 'https://www.instagram.com/salvationtemplelv/', icon: Instagram, label: 'Instagram' },
  { href: 'https://www.youtube.com/@SalvationTemple', icon: Youtube, label: 'YouTube' },
];

const InfoCard = ({ icon: Icon, iconColor, children }: { icon: LucideIcon; iconColor: string; children: ReactNode }) => (
  <div
    className="relative overflow-hidden rounded-2xl p-4 transition-all duration-300 hover:shadow-xl group"
    style={bordeauxCardStyle}
  >
    <BordeauxOverlay />
    <div className="relative z-10 flex items-start gap-3">
      <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0 border border-white/10">
        <Icon className={`w-5 h-5 ${iconColor}`} />
      </div>
      <div>{children}</div>
    </div>
  </div>
);

export const ContactsSection = () => {
  const { t, language } = useLanguage();

  return (
    <section id="contacts" className="section-py relative overflow-hidden bg-gradient-to-b from-section-dark via-section-dark-mid to-section-dark-deep">
      {/* Background image with opacity */}
      <div className="absolute inset-0">
        <img
          src={galleryCommunity}
          alt=""
          loading="lazy"
          className="w-full h-full object-cover opacity-[0.08]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-section-dark/90 via-section-dark-mid/95 to-section-dark-deep" />
      </div>

      {/* Soft glowing overlay */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-20 right-10 w-80 h-80 rounded-full bg-terracotta/10 blur-3xl animate-float-slow" />
        <div className="absolute bottom-20 left-10 w-72 h-72 rounded-full bg-sunset/10 blur-3xl animate-float" />
      </div>

      <div className="section-container relative z-10">
        <div className="section-header">
          <div className="section-icon bg-gradient-to-br from-terracotta/20 to-sunset/20">
            <MapPin className="w-7 h-7 text-terracotta" />
          </div>
          <h2 className="section-title text-gradient-earth mb-4">
            {t('contacts.title')}
          </h2>
        </div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-6">
          {/* Left Side - Contact Info */}
          <div className="space-y-4">
            {/* Staff Cards */}
            {contacts.map((contact) => (
              <div
                key={contact.role}
                className="relative overflow-hidden rounded-2xl p-4 transition-all duration-300 hover:shadow-xl group"
                style={bordeauxCardStyle}
              >
                <BordeauxOverlay />
                <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-2xl bg-shine" />
                <div className="relative z-10 flex items-start gap-4">
                  <div className="w-16 h-16 rounded-full overflow-hidden flex-shrink-0 border-2 border-white/20">
                    <img
                      src={contact.image}
                      alt={contact.name[language]}
                      loading="lazy"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-white/50 uppercase tracking-wider mb-1">
                      {t(`contacts.${contact.role}`)}
                    </p>
                    <h3 className="font-display text-xl font-bold text-white/95 mb-3">
                      {contact.name[language]}
                    </h3>
                    <div className="space-y-2 text-sm">
                      <a href={`tel:${contact.phone}`} className="flex items-center gap-2 text-white/70 hover:text-sunset-light transition-colors">
                        <Phone className="w-4 h-4" />
                        {contact.phone}
                      </a>
                      <a href={`mailto:${contact.email}`} className="flex items-center gap-2 text-white/70 hover:text-sunset-light transition-colors">
                        <Mail className="w-4 h-4" />
                        {contact.email}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            <InfoCard icon={MapPin} iconColor="text-sunset-light">
              <h3 className="font-display text-sm font-bold text-white/95 mb-1">{t('contacts.address')}</h3>
              <p className="text-white/70 text-sm">Lāčplēša iela 117, Rīga, LV-1003</p>
            </InfoCard>

            <InfoCard icon={Clock} iconColor="text-coral">
              <h3 className="font-display text-sm font-bold text-white/95 mb-1">{t('contacts.serviceTimes')}</h3>
              <p className="text-white/70 text-sm">{t('church.serviceSunday')} · {t('contacts.prayerFriday')}</p>
            </InfoCard>

            <InfoCard icon={Car} iconColor="text-amber">
              <h3 className="font-display text-sm font-bold text-white/95 mb-1">{t('contacts.parking')}</h3>
              <p className="text-white/70 text-sm">{t('contacts.parkingAvailable')}</p>
            </InfoCard>
          </div>

          {/* Right Side - Map, Socials, Donation */}
          <div className="space-y-4">
            {/* Map */}
            <div className="relative overflow-hidden rounded-2xl h-[250px]" style={bordeauxCardStyle}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2175.7!2d24.1247!3d56.9496!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46eecfb0e5073ded%3A0x400cfcd68f2fe30!2sL%C4%81%C4%8Dpl%C4%93%C5%A1a%20iela%20117%2C%20Centra%20rajons%2C%20R%C4%ABga%2C%20LV-1003!5e0!3m2!1sen!2slv!4v1640000000000!5m2!1sen!2slv"
                width="100%"
                height="100%"
                className="border-0"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Church Location - Lāčplēša 117, Rīga"
              />
            </div>

            {/* Donation Info */}
            <div
              className="relative overflow-hidden rounded-2xl p-4 transition-all duration-300 hover:shadow-xl group"
              style={bordeauxCardStyle}
            >
              <BordeauxOverlay />
              <div className="relative z-10 flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0 border border-white/10">
                  <CreditCard className="w-5 h-5 text-terracotta" />
                </div>
                <div className="flex-1">
                  <h3 className="font-display text-sm font-bold text-white/95 mb-3">{t('donations.title')}</h3>
                  <div className="space-y-2 text-sm">
                    <p className="text-white/70">
                      <span className="font-semibold text-white/90">{t('donations.recipient')}:</span><br />
                      RĪGAS MISIONES BAPTISTU DRAUDZE
                    </p>
                    <p className="text-white/70">
                      <span className="font-semibold text-white/90">IBAN:</span><br />
                      LV80UNLA0050011859310
                    </p>
                    <p className="text-white/70">
                      <span className="font-semibold text-white/90">{t('donations.bank')}:</span> SEB
                    </p>
                    <p className="text-white/70">
                      <span className="font-semibold text-white/90">SWIFT:</span> UNLALV2X
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div
              className="relative overflow-hidden rounded-2xl p-4 transition-all duration-300 hover:shadow-xl group flex flex-col"
              style={bordeauxCardStyle}
            >
              <BordeauxOverlay />
              <div className="relative z-10 flex-1 flex flex-col">
                <h3 className="font-display text-sm font-bold text-white/95 mb-3">{t('contacts.socialMedia')}</h3>
                <p className="text-white/60 text-sm mb-4">{t('contacts.followUs')}</p>
                <div className="flex flex-wrap gap-3 mt-auto">
                  {socialLinks.map((link) => {
                    const SocialIcon = link.icon;
                    return (
                      <a
                        key={link.label}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 btn-sm rounded-full bg-gradient-to-r from-sunset to-coral text-white transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
                      >
                        <SocialIcon className="w-5 h-5" />
                        <span className="text-sm font-medium">{link.label}</span>
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
