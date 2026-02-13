import { useState, useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { LanguageSwitcher } from './LanguageSwitcher';
import { ThemeToggle } from './ThemeToggle';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import churchLogo from '@/assets/church-logo.png';

export const ChurchHeader = () => {
  const { t, language } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { key: 'nav.about', href: '/#about' },
    { key: 'nav.history', href: '/history', isLink: true },
    { key: 'nav.events', href: '/#events' },
    { key: 'nav.ministries', href: '/#ministries' },
    { key: 'nav.testimonies', href: '/testimonies', isLink: true },
    { key: 'nav.contacts', href: '/#contacts' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'glass py-2 shadow-lg'
          : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-xl overflow-hidden transition-all duration-300 group-hover:scale-105">
            <img 
              src={churchLogo} 
              alt={t('church.name')} 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="hidden sm:flex flex-col">
            <span className="font-display text-sm font-bold text-foreground tracking-wide">
              {t('church.name')}
            </span>
            <span className="text-xs text-muted-foreground">
              {t('church.shortName')}
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-6">
          {navItems.map((item) => (
            item.isLink ? (
              <Link
                key={item.key}
                to={item.href}
                className="text-foreground/70 hover:text-foreground focus:text-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 rounded-md px-2 py-1 transition-all font-medium text-sm"
              >
                {t(item.key)}
              </Link>
            ) : (
              <a
                key={item.key}
                href={item.href}
                className="text-foreground/70 hover:text-foreground focus:text-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 rounded-md px-2 py-1 transition-all font-medium text-sm"
              >
                {t(item.key)}
              </a>
            )
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <ThemeToggle />
          <LanguageSwitcher />
          <a
            href="/#contacts"
            className={`inline-flex items-center gap-2 bg-gradient-to-r from-sunset to-coral text-white px-5 py-2.5 rounded-full font-semibold transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 ${
              language === 'ru' ? 'text-xs' : 'text-sm'
            }`}
          >
            {t('church.planVisit')}
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden flex items-center gap-2">
          <ThemeToggle />
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2.5 text-foreground glass rounded-lg min-w-[44px] min-h-[44px] flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 transition-all"
            aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden absolute top-full left-0 right-0 glass transition-all duration-300 overflow-hidden ${
          isMobileMenuOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="container mx-auto px-4 py-4 flex flex-col gap-3">
          {navItems.map((item) => (
            item.isLink ? (
              <Link
                key={item.key}
                to={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-foreground/80 hover:text-foreground focus:text-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 rounded-md px-2 py-2 transition-all font-medium text-sm"
              >
                {t(item.key)}
              </Link>
            ) : (
              <a
                key={item.key}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-foreground/80 hover:text-foreground focus:text-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 rounded-md px-2 py-2 transition-all font-medium text-sm"
              >
                {t(item.key)}
              </a>
            )
          ))}
          <div className="flex items-center justify-between pt-4 border-t border-border">
            <LanguageSwitcher />
            <a
              href="/#contacts"
              onClick={() => setIsMobileMenuOpen(false)}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-sunset to-coral text-white px-5 py-2.5 rounded-full font-semibold text-sm transition-all"
            >
              {t('church.planVisit')}
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};
