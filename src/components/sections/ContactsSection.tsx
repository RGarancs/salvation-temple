import { useLanguage } from '@/contexts/LanguageContext';
import { MapPin, Phone, Mail, Clock, Car, Facebook, Instagram, Youtube, CreditCard } from 'lucide-react';
import leaderPastor from '@/assets/leader-pastor.jpg';
import leaderStanislav from '@/assets/leader-stanislav.jpg';
import galleryCommunity from '@/assets/gallery-community.jpg';

export const ContactsSection = () => {
  const { t, language } = useLanguage();

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

  // Dark bordeaux card style
  const bordeauxCardStyle = {
    background: 'linear-gradient(135deg, hsl(350 35% 18%) 0%, hsl(350 40% 12%) 100%)',
  };

  const bordeauxTextureOverlay = (
    <div className="absolute inset-0 opacity-20 rounded-2xl" style={{
      backgroundImage: `radial-gradient(circle at 20% 80%, hsl(350 30% 25%) 0%, transparent 50%),
                        radial-gradient(circle at 80% 20%, hsl(25 30% 25%) 0%, transparent 50%),
                        linear-gradient(135deg, transparent 0%, hsl(350 20% 20% / 0.5) 100%)`,
    }} />
  );

  return (
    <section id="contacts" className="py-24 relative overflow-hidden bg-gradient-to-b from-[hsl(350_30%_8%)] via-[hsl(350_35%_6%)] to-[hsl(350_30%_5%)]">
      {/* Background image with opacity */}
      <div className="absolute inset-0">
        <img 
          src={galleryCommunity} 
          alt="" 
          className="w-full h-full object-cover opacity-[0.08]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[hsl(350_30%_8%)/90] via-[hsl(350_35%_6%)/95] to-[hsl(350_30%_5%)]" />
      </div>

      {/* Soft glowing overlay */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-20 right-10 w-80 h-80 rounded-full bg-terracotta/10 blur-3xl animate-float-slow" />
        <div className="absolute bottom-20 left-10 w-72 h-72 rounded-full bg-sunset/10 blur-3xl animate-float" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-br from-terracotta/20 to-sunset/20 mb-6">
            <MapPin className="w-7 h-7 text-terracotta" />
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-gradient-earth mb-4">
            {t('contacts.title')}
          </h2>
        </div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
          {/* Left Side - Contact Info */}
          <div className="space-y-6">
            {/* Staff Cards with photos - Dark Bordeaux */}
            {contacts.map((contact) => (
              <div 
                key={contact.role} 
                className="relative overflow-hidden rounded-2xl p-6 transition-all duration-300 hover:shadow-xl group"
                style={bordeauxCardStyle}
              >
                {bordeauxTextureOverlay}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-2xl" style={{
                  background: 'linear-gradient(135deg, transparent 0%, hsl(30 80% 70%) 50%, transparent 100%)',
                }} />
                <div className="relative z-10 flex items-start gap-4">
                  <div className="w-16 h-16 rounded-full overflow-hidden flex-shrink-0 border-2 border-white/20">
                    <img 
                      src={contact.image} 
                      alt={contact.name[language]} 
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

            {/* Address - Dark Bordeaux */}
            <div 
              className="relative overflow-hidden rounded-2xl p-6 transition-all duration-300 hover:shadow-xl group"
              style={bordeauxCardStyle}
            >
              {bordeauxTextureOverlay}
              <div className="relative z-10 flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0 border border-white/10">
                  <MapPin className="w-6 h-6 text-sunset-light" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-white/95 mb-1">{t('contacts.address')}</h3>
                  <p className="text-white/70">Lāčplēša iela 117</p>
                  <p className="text-white/70">Rīga, LV-1003, Latvia</p>
                </div>
              </div>
            </div>

            {/* Service Times - Dark Bordeaux */}
            <div 
              className="relative overflow-hidden rounded-2xl p-6 transition-all duration-300 hover:shadow-xl group"
              style={bordeauxCardStyle}
            >
              {bordeauxTextureOverlay}
              <div className="relative z-10 flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0 border border-white/10">
                  <Clock className="w-6 h-6 text-coral" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-white/95 mb-1">{t('contacts.serviceTimes')}</h3>
                  <p className="text-white/70">{t('church.serviceSunday')}</p>
                  <p className="text-white/70">{t('contacts.prayerFriday')}</p>
                </div>
              </div>
            </div>

            {/* Parking - Dark Bordeaux */}
            <div 
              className="relative overflow-hidden rounded-2xl p-6 transition-all duration-300 hover:shadow-xl group"
              style={bordeauxCardStyle}
            >
              {bordeauxTextureOverlay}
              <div className="relative z-10 flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0 border border-white/10">
                  <Car className="w-6 h-6 text-amber" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-white/95 mb-1">{t('contacts.parking')}</h3>
                  <p className="text-white/70">{t('contacts.parkingAvailable')}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Map, Socials, Donation */}
          <div className="space-y-6">
            {/* Map - with correct address */}
            <div className="relative overflow-hidden rounded-2xl h-[350px]" style={bordeauxCardStyle}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2175.7!2d24.1247!3d56.9496!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46eecfb0e5073ded%3A0x400cfcd68f2fe30!2sL%C4%81%C4%8Dpl%C4%93%C5%A1a%20iela%20117%2C%20Centra%20rajons%2C%20R%C4%ABga%2C%20LV-1003!5e0!3m2!1sen!2slv!4v1640000000000!5m2!1sen!2slv"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Church Location - Lāčplēša 117, Rīga"
              />
            </div>

            {/* Donation Info - Dark Bordeaux */}
            <div 
              className="relative overflow-hidden rounded-2xl p-6 transition-all duration-300 hover:shadow-xl group"
              style={bordeauxCardStyle}
            >
              {bordeauxTextureOverlay}
              <div className="relative z-10 flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0 border border-white/10">
                  <CreditCard className="w-6 h-6 text-terracotta" />
                </div>
                <div className="flex-1">
                  <h3 className="font-display font-bold text-white/95 mb-3">{t('donations.title')}</h3>
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

            {/* Social Media - Dark Bordeaux */}
            <div 
              className="relative overflow-hidden rounded-2xl p-6 transition-all duration-300 hover:shadow-xl group"
              style={bordeauxCardStyle}
            >
              {bordeauxTextureOverlay}
              <div className="relative z-10">
                <h3 className="font-display font-bold text-white/95 mb-4">{t('contacts.socialMedia')}</h3>
                <div className="flex flex-wrap gap-3">
                  <a
                    href="https://www.facebook.com/SalvationTempleLV/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-sunset to-coral text-white transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
                  >
                    <Facebook className="w-5 h-5" />
                    <span className="text-sm font-medium">Facebook</span>
                  </a>
                  <a
                    href="https://www.instagram.com/salvationtemplelv/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-sunset to-coral text-white transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
                  >
                    <Instagram className="w-5 h-5" />
                    <span className="text-sm font-medium">Instagram</span>
                  </a>
                  <a
                    href="https://www.youtube.com/@SalvationTemple"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-sunset to-coral text-white transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
                  >
                    <Youtube className="w-5 h-5" />
                    <span className="text-sm font-medium">YouTube</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};