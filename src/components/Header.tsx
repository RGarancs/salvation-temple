import { useState, useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { LanguageSwitcher } from './LanguageSwitcher';
import { Menu, X } from 'lucide-react';

export const Header = () => {
  const { t } = useLanguage();
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
    { key: 'nav.about', href: '#about' },
    { key: 'nav.program', href: '#program' },
    { key: 'nav.team', href: '#team' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'glass py-3 shadow-lg'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <a href="#" className="font-display text-2xl font-bold text-gradient-earth">
          ЦЖ
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.key}
              href={item.href}
              className="link-underline text-foreground/80 hover:text-foreground transition-colors font-medium"
            >
              {t(item.key)}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <LanguageSwitcher />
          <a
            href="#register"
            className="bg-sage hover:bg-sage-dark text-primary-foreground px-5 py-2.5 rounded-full font-medium transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
          >
            {t('nav.register')}
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden p-2 text-foreground"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute top-full left-0 right-0 glass transition-all duration-300 overflow-hidden ${
          isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
          {navItems.map((item) => (
            <a
              key={item.key}
              href={item.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-foreground/80 hover:text-foreground transition-colors font-medium py-2"
            >
              {t(item.key)}
            </a>
          ))}
          <div className="flex items-center justify-between pt-4 border-t border-border">
            <LanguageSwitcher />
            <a
              href="#register"
              onClick={() => setIsMobileMenuOpen(false)}
              className="bg-sage hover:bg-sage-dark text-primary-foreground px-5 py-2.5 rounded-full font-medium transition-all"
            >
              {t('nav.register')}
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};
