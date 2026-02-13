import { LanguageProvider } from '@/contexts/LanguageContext';
import { ChurchHeader } from '@/components/ChurchHeader';
import { ChurchFooter } from '@/components/sections/ChurchFooter';
import { useLanguage } from '@/contexts/LanguageContext';
import { History, Church, BookOpen, Users, Globe, Heart, ExternalLink } from 'lucide-react';
import historyTent from '@/assets/history-tent.png';
import historyBuilding from '@/assets/history-building.png';
import historyFetler from '@/assets/history-fetler.png';
import historyTemple from '@/assets/history-temple-1927.png';

const HistoryContent = () => {
  const { t } = useLanguage();

  return (
    <section className="py-24 bg-background min-h-screen pt-32">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-br from-terracotta/20 to-burnt/20 mb-6">
            <History className="w-7 h-7 text-terracotta" />
          </div>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-gradient-earth mb-4">
            {t('history.title')}
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {t('history.subtitle')}
          </p>
        </div>

        {/* Founder Section - Viljams Fetlers */}
        <div className="max-w-5xl mx-auto mb-16">
          <div className="card-warm p-8">
            <div className="grid md:grid-cols-2 gap-8 items-start">
              <div>
                <img
                  src={historyFetler}
                  alt="Viljams Fetlers (1883-1957)"
                  loading="lazy"
                  className="rounded-xl shadow-lg w-full"
                />
                <p className="text-sm text-muted-foreground mt-3 text-center italic">
                  {t('history.fetler.caption')}
                </p>
              </div>
              <div>
                <div className="inline-flex items-center gap-2 text-sunset mb-4">
                  <BookOpen className="w-5 h-5" />
                  <span className="text-sm font-semibold uppercase tracking-wide">{t('history.founder')}</span>
                </div>
                <h3 className="font-display text-2xl font-bold text-foreground mb-4">
                  {t('history.fetler.name')}
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  {t('history.fetler.desc')}
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  {t('history.fetler.extended')}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Return to Latvia 1923 */}
        <div className="max-w-5xl mx-auto mb-12">
          <div className="card-warm p-8">
            <div className="inline-flex items-center gap-2 text-amber mb-4">
              <Globe className="w-5 h-5" />
              <span className="text-sm font-semibold uppercase tracking-wide">1923</span>
            </div>
            <h3 className="font-display text-xl font-bold text-foreground mb-4">
              {t('history.return.title')}
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              {t('history.return.text')}
            </p>
          </div>
        </div>

        {/* OBDS Formation */}
        <div className="max-w-5xl mx-auto mb-12">
          <div className="card-warm p-8">
            <div className="inline-flex items-center gap-2 text-coral mb-4">
              <Users className="w-5 h-5" />
              <span className="text-sm font-semibold uppercase tracking-wide">1926</span>
            </div>
            <h3 className="font-display text-xl font-bold text-foreground mb-4">
              {t('history.obds.title')}
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              {t('history.obds.text')}
            </p>
          </div>
        </div>

        {/* Evangelization with tent */}
        <div className="max-w-5xl mx-auto mb-12">
          <div className="card-warm p-8">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <div className="inline-flex items-center gap-2 text-terracotta mb-4">
                  <Heart className="w-5 h-5" />
                  <span className="text-sm font-semibold uppercase tracking-wide">{t('history.evangelization.label')}</span>
                </div>
                <h3 className="font-display text-xl font-bold text-foreground mb-4">
                  {t('history.evangelization.title')}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {t('history.evangelization.text')}
                </p>
              </div>
              <div>
                <img
                  src={historyTent}
                  alt={t('history.tent.caption')}
                  loading="lazy"
                  className="rounded-xl shadow-lg w-full"
                />
                <p className="text-sm text-muted-foreground mt-3 text-center italic">
                  {t('history.tent.caption')}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Temple Building 1927 */}
        <div className="max-w-5xl mx-auto mb-12">
          <div className="card-warm p-8">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="order-2 md:order-1">
                <img
                  src={historyTemple}
                  alt={t('history.building.caption')}
                  loading="lazy"
                  className="rounded-xl shadow-lg w-full"
                />
                <p className="text-sm text-muted-foreground mt-3 text-center italic">
                  {t('history.building.caption')}
                </p>
              </div>
              <div className="order-1 md:order-2">
                <div className="inline-flex items-center gap-2 text-amber mb-4">
                  <Church className="w-5 h-5" />
                  <span className="text-sm font-semibold uppercase tracking-wide">1927</span>
                </div>
                <h3 className="font-display text-xl font-bold text-foreground mb-4">
                  {t('history.temple.title')}
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  {t('history.temple.text')}
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  {t('history.temple.details')}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Church Interior */}
        <div className="max-w-5xl mx-auto mb-12">
          <div className="card-warm p-8">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="font-display text-xl font-bold text-foreground mb-4">
                  {t('history.interior.title')}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {t('history.interior.text')}
                </p>
              </div>
              <div>
                <img
                  src={historyBuilding}
                  alt={t('history.interior.caption')}
                  loading="lazy"
                  className="rounded-xl shadow-lg w-full"
                />
                <p className="text-sm text-muted-foreground mt-3 text-center italic">
                  {t('history.interior.caption')}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Legacy */}
        <div className="max-w-5xl mx-auto mb-12">
          <div className="card-warm p-8 text-center">
            <h3 className="font-display text-xl font-bold text-foreground mb-4">
              {t('history.legacy.title')}
            </h3>
            <p className="text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              {t('history.legacy.text')}
            </p>
          </div>
        </div>

        {/* Historical Resources Links */}
        <div className="max-w-5xl mx-auto">
          <div className="card-warm p-8">
            <h3 className="font-display text-xl font-bold text-foreground mb-6 text-center">
              {t('history.resources.title')}
            </h3>
            <div className="grid sm:grid-cols-2 gap-4">
              <a
                href="https://www.laikmetazimes.ebaznica.lv/2012/10/01/viljams-fetlers-ii-darbs-latvija-un-muza-pedejie-gadi/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-4 rounded-xl bg-muted/50 hover:bg-sunset/10 transition-colors group"
              >
                <ExternalLink className="w-5 h-5 text-sunset group-hover:scale-110 transition-transform" />
                <span className="text-sm font-medium text-foreground">{t('history.resources.fetlerArticle')}</span>
              </a>
              <a
                href="https://bible.lv/lbc-ekas-vesture/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-4 rounded-xl bg-muted/50 hover:bg-sunset/10 transition-colors group"
              >
                <ExternalLink className="w-5 h-5 text-coral group-hover:scale-110 transition-transform" />
                <span className="text-sm font-medium text-foreground">{t('history.resources.lbcHistory')}</span>
              </a>
              <a
                href="https://enciklopedija.lv/skirklis/22208-baptistu-baznīca-Latvijā"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-4 rounded-xl bg-muted/50 hover:bg-sunset/10 transition-colors group"
              >
                <ExternalLink className="w-5 h-5 text-amber group-hover:scale-110 transition-transform" />
                <span className="text-sm font-medium text-foreground">{t('history.resources.encyclopedia')}</span>
              </a>
              <a
                href="https://zudusilatvija.lv/objects/object/31132/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-4 rounded-xl bg-muted/50 hover:bg-sunset/10 transition-colors group"
              >
                <ExternalLink className="w-5 h-5 text-terracotta group-hover:scale-110 transition-transform" />
                <span className="text-sm font-medium text-foreground">{t('history.resources.lostLatvia')}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const HistoryPage = () => {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-background font-body">
        <ChurchHeader />
        <HistoryContent />
        <ChurchFooter />
      </div>
    </LanguageProvider>
  );
};

export default HistoryPage;
