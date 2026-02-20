import { useLanguage } from '@/contexts/LanguageContext';
import { History, Church, BookOpen } from 'lucide-react';
import historyTent from '@/assets/history-tent.png';
import historyBuilding from '@/assets/history-building.png';
import historyFetler from '@/assets/history-fetler.png';

export const HistorySection = () => {
  const { t } = useLanguage();

  return (
    <section id="history" className="py-12 md:py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-br from-terracotta/20 to-burnt/20 mb-6">
            <History className="w-7 h-7 text-terracotta" />
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-gradient-earth mb-4">
            {t('history.title')}
          </h2>
          <p className="text-foreground/70 max-w-2xl mx-auto">
            {t('history.subtitle')}
          </p>
        </div>

        {/* Founder Section */}
        <div className="max-w-5xl mx-auto mb-16">
          <div className="card-warm p-8">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <img
                  src={historyFetler}
                  alt="Viljams Fetlers"
                  loading="lazy"
                  className="rounded-xl shadow-lg w-full"
                />
                <p className="text-sm text-foreground/70 mt-3 text-center italic">
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
                <p className="text-foreground/70 leading-relaxed mb-4">
                  {t('history.fetler.desc')}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* History Timeline */}
        <div className="max-w-5xl mx-auto space-y-8">
          {/* OBDS Formation */}
          <div className="card-warm p-8">
            <h3 className="font-display text-xl font-bold text-foreground mb-4">
              {t('history.obds.title')}
            </h3>
            <p className="text-foreground/70 leading-relaxed">
              {t('history.obds.text')}
            </p>
          </div>

          {/* Evangelization */}
          <div className="card-warm p-8">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="font-display text-xl font-bold text-foreground mb-4">
                  {t('history.evangelization.title')}
                </h3>
                <p className="text-foreground/70 leading-relaxed">
                  {t('history.evangelization.text')}
                </p>
              </div>
              <div>
                <img
                  src={historyTent}
                  alt="Evangelization tent"
                  loading="lazy"
                  className="rounded-xl shadow-lg w-full"
                />
                <p className="text-sm text-foreground/70 mt-3 text-center italic">
                  {t('history.tent.caption')}
                </p>
              </div>
            </div>
          </div>

          {/* Temple Building */}
          <div className="card-warm p-8">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="order-2 md:order-1">
                <img
                  src={historyBuilding}
                  alt="Salvation Temple 1927"
                  loading="lazy"
                  className="rounded-xl shadow-lg w-full"
                />
                <p className="text-sm text-foreground/70 mt-3 text-center italic">
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
                <p className="text-foreground/70 leading-relaxed">
                  {t('history.temple.text')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
