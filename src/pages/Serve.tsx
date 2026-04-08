import { useState, type FormEvent } from 'react';
import { LanguageProvider, useLanguage } from '@/contexts/LanguageContext';
import { ChurchHeader } from '@/components/ChurchHeader';
import { ChurchFooter } from '@/components/sections/ChurchFooter';
import { Hand, Send, CheckCircle } from 'lucide-react';
import { usePageMeta } from '@/hooks/usePageMeta';
import { bordeauxCardStyle } from '@/styles/bordeaux';
import { BordeauxOverlay } from '@/components/ui/bordeaux-overlay';

const ServeContent = () => {
  const { t } = useLanguage();
  const [name, setName] = useState('');
  const [where, setWhere] = useState('');
  const [why, setWhy] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);

  usePageMeta({
    titleKey: 'serve.meta.title',
    descriptionKey: 'serve.meta.description',
    canonicalPath: '/serve',
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSending(true);

    const subject = encodeURIComponent(`I Want to Serve — ${name}`);
    const body = encodeURIComponent(
      `Name: ${name}\n\nWhere I want to serve: ${where}\n\nWhy I want to serve: ${why}`
    );

    window.location.href = `mailto:salvtemp117@gmail.com?subject=${subject}&body=${body}`;

    setTimeout(() => {
      setSending(false);
      setSubmitted(true);
    }, 1000);
  };

  return (
    <section className="page-py bg-background min-h-screen">
      <div className="section-container">
        <div className="section-header">
          <div className="section-icon bg-gradient-to-br from-sunset/20 to-coral/20">
            <Hand className="w-7 h-7 text-sunset" />
          </div>
          <h1 className="section-title text-gradient-earth mb-4">
            {t('serve.title')}
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {t('serve.subtitle')}
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          {submitted ? (
            <div
              className="relative overflow-hidden rounded-2xl p-8 text-center"
              style={bordeauxCardStyle}
            >
              <BordeauxOverlay />
              <div className="relative z-10">
                <CheckCircle className="w-16 h-16 text-sunset mx-auto mb-4" />
                <h2 className="font-display text-2xl font-bold text-white/95 mb-2">
                  {t('serve.thankYou')}
                </h2>
                <p className="text-white/70">
                  {t('serve.thankYouDesc')}
                </p>
              </div>
            </div>
          ) : (
            <div
              className="relative overflow-hidden rounded-2xl p-6 md:p-8"
              style={bordeauxCardStyle}
            >
              <BordeauxOverlay />
              <form onSubmit={handleSubmit} className="relative z-10 space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-white/80 mb-2">
                    {t('serve.name')} *
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-sunset/50 focus:border-sunset/50 transition-colors"
                    placeholder={t('serve.namePlaceholder')}
                  />
                </div>

                <div>
                  <label htmlFor="where" className="block text-sm font-semibold text-white/80 mb-2">
                    {t('serve.where')} *
                  </label>
                  <input
                    id="where"
                    type="text"
                    required
                    value={where}
                    onChange={(e) => setWhere(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-sunset/50 focus:border-sunset/50 transition-colors"
                    placeholder={t('serve.wherePlaceholder')}
                  />
                </div>

                <div>
                  <label htmlFor="why" className="block text-sm font-semibold text-white/80 mb-2">
                    {t('serve.why')} *
                  </label>
                  <textarea
                    id="why"
                    required
                    rows={4}
                    value={why}
                    onChange={(e) => setWhy(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-sunset/50 focus:border-sunset/50 transition-colors resize-none"
                    placeholder={t('serve.whyPlaceholder')}
                  />
                </div>

                <button
                  type="submit"
                  disabled={sending}
                  className="w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-sunset to-coral text-white btn-md rounded-full font-semibold transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 disabled:opacity-50"
                >
                  <Send className="w-5 h-5" />
                  {sending ? t('serve.sending') : t('serve.submit')}
                </button>
              </form>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

const ServePage = () => (
  <LanguageProvider>
    <div className="min-h-screen bg-background font-body">
      <ChurchHeader />
      <ServeContent />
      <ChurchFooter />
    </div>
  </LanguageProvider>
);

export default ServePage;
