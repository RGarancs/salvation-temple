import { useLanguage } from '@/contexts/LanguageContext';
import { MapPin, Phone, Mail, Clock, Car, Facebook, Instagram, Youtube, Users } from 'lucide-react';

export const ContactsSection = () => {
  const { t } = useLanguage();

  const contacts = [
    {
      role: 'pastor',
      name: 'Aleksandrs Zvirids',
      phone: '+371 26025329',
      email: 'salvtemp117@gmail.com',
    },
    {
      role: 'manager',
      name: 'Staņislavs Isakovs',
      phone: '+371 26025329',
      email: 'salvtemp117@gmail.com',
    },
  ];

  return (
    <section id="contacts" className="py-24 bg-cream-dark">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-br from-terracotta/20 to-sunset/20 mb-6">
            <MapPin className="w-7 h-7 text-terracotta" />
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-gradient-earth mb-4">
            {t('contacts.title')}
          </h2>
        </div>

        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
          {/* Contact Info */}
          <div className="space-y-6">
            {/* Staff Cards */}
            {contacts.map((contact) => (
              <div key={contact.role} className="card-warm p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-sunset/10 flex items-center justify-center flex-shrink-0">
                    <Users className="w-6 h-6 text-sunset" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-muted-foreground uppercase tracking-wider mb-1">
                      {t(`contacts.${contact.role}`)}
                    </p>
                    <h3 className="font-display text-xl font-bold text-foreground mb-3">
                      {contact.name}
                    </h3>
                    <div className="space-y-2 text-sm">
                      <a href={`tel:${contact.phone}`} className="flex items-center gap-2 text-muted-foreground hover:text-sunset transition-colors">
                        <Phone className="w-4 h-4" />
                        {contact.phone}
                      </a>
                      <a href={`mailto:${contact.email}`} className="flex items-center gap-2 text-muted-foreground hover:text-sunset transition-colors">
                        <Mail className="w-4 h-4" />
                        {contact.email}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {/* Address */}
            <div className="card-warm p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-sunset/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-sunset" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-foreground mb-1">{t('contacts.address')}</h3>
                  <p className="text-muted-foreground">Lāčplēša iela 117</p>
                  <p className="text-muted-foreground">Rīga, LV-1003, Latvia</p>
                </div>
              </div>
            </div>

            {/* Service Times */}
            <div className="card-warm p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-coral/10 flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-coral" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-foreground mb-1">{t('contacts.serviceTimes')}</h3>
                  <p className="text-muted-foreground">{t('church.serviceSunday')}</p>
                  <p className="text-muted-foreground">{t('contacts.prayerFriday')}</p>
                </div>
              </div>
            </div>

            {/* Parking */}
            <div className="card-warm p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-amber/10 flex items-center justify-center flex-shrink-0">
                  <Car className="w-6 h-6 text-amber" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-foreground mb-1">{t('contacts.parking')}</h3>
                  <p className="text-muted-foreground">{t('contacts.parkingAvailable')}</p>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="card-warm p-6">
              <h3 className="font-display font-bold text-foreground mb-4">{t('contacts.socialMedia')}</h3>
              <div className="flex flex-wrap gap-3">
                <a
                  href="https://www.facebook.com/SalvationTempleLV/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-full bg-muted/50 hover:bg-sunset/10 transition-colors"
                >
                  <Facebook className="w-5 h-5 text-sunset" />
                  <span className="text-sm font-medium">Facebook</span>
                </a>
                <a
                  href="https://www.instagram.com/salvationtemplelv/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-full bg-muted/50 hover:bg-coral/10 transition-colors"
                >
                  <Instagram className="w-5 h-5 text-coral" />
                  <span className="text-sm font-medium">Instagram</span>
                </a>
                <a
                  href="https://www.youtube.com/@SalvationTemple"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-full bg-muted/50 hover:bg-amber/10 transition-colors"
                >
                  <Youtube className="w-5 h-5 text-amber" />
                  <span className="text-sm font-medium">YouTube</span>
                </a>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="card-warm overflow-hidden h-[600px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2175.5!2d24.1247!3d56.9496!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46eecfb0e5073ded%3A0x400cfcd68f2fe30!2sL%C4%81%C4%8Dpl%C4%93%C5%A1a%20iela%20117%2C%20Centra%20rajons%2C%20R%C4%ABga%2C%20LV-1003!5e0!3m2!1sen!2slv!4v1640000000000!5m2!1sen!2slv"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Church Location"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
