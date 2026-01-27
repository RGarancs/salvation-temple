import { useLanguage } from '@/contexts/LanguageContext';
import { Phone, Mail, MapPin, Clock, Car, Users } from 'lucide-react';

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
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-br from-sunset/20 to-amber/20 mb-6">
            <Phone className="w-7 h-7 text-sunset" />
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-gradient-earth mb-4">
            {t('contacts.title')}
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Cards */}
          <div className="space-y-6">
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

            {/* Location Info */}
            <div className="card-warm p-6">
              <div className="flex items-center gap-2 mb-4">
                <MapPin className="w-5 h-5 text-coral" />
                <h3 className="font-display text-lg font-bold text-foreground">{t('contacts.address')}</h3>
              </div>
              <p className="text-muted-foreground mb-4">
                Lāčplēša iela 117<br />
                Rīga, LV-1003<br />
                Latvijas Republika
              </p>
              
              <div className="flex items-center gap-2 mb-2">
                <Clock className="w-4 h-4 text-amber" />
                <span className="text-sm text-muted-foreground">{t('contacts.serviceTimes')}</span>
              </div>
              <p className="text-sm text-foreground ml-6 mb-4">
                {t('church.serviceSunday')}<br />
                {t('church.serviceWednesday')}
              </p>

              <div className="flex items-center gap-2">
                <Car className="w-4 h-4 text-sunset" />
                <span className="text-sm text-muted-foreground">{t('contacts.parking')}</span>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="card-warm overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2176.7047892651614!2d24.13200431594647!3d56.94604798089477!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46eecfb0e5e5b8c5%3A0x4c7b7b7b7b7b7b7b!2sL%C4%81%C4%8Dpl%C4%93%C5%A1a%20iela%20117%2C%20Centra%20rajons%2C%20R%C4%ABga%2C%20LV-1003!5e0!3m2!1sen!2slv!4v1635000000000!5m2!1sen!2slv"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: '400px' }}
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
