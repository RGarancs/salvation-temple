import { useState, useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { LanguageSwitcher } from './LanguageSwitcher';
import { ThemeToggle } from './ThemeToggle';
import { Menu, X, Sparkles } from 'lucide-react';
import churchLogo from '@/assets/church-logo.png';

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
          ? 'glass py-2 shadow-lg'
          : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Church Logo and Name */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="w-12 h-12 rounded-xl overflow-hidden transition-all duration-300 group-hover:scale-105 group-hover:glow-coral">
            <img 
              src={churchLogo} 
              alt="Храм Спасения" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="hidden sm:flex flex-col">
            <span className="font-display text-sm font-bold text-foreground/90 tracking-wide">
              Храм Спасения
            </span>
            <span className="text-xs text-muted-foreground font-medium">
              ЦЖ 2026
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.key}
              href={item.href}
              className="link-underline text-foreground/80 hover:text-foreground transition-colors font-medium text-sm uppercase tracking-wider"
            >
              {t(item.key)}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <ThemeToggle />
          <LanguageSwitcher />
          <a
            href="https://forms.gle/2GkmmrRmaKdAxdaV7"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 bg-gradient-to-r from-sage to-teal text-primary-foreground px-5 py-2.5 rounded-full font-semibold text-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 glow-sage"
          >
            <Sparkles className="w-4 h-4 group-hover:animate-pulse" />
            {t('nav.register')}
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center gap-2">
          <ThemeToggle />
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 text-foreground glass rounded-lg"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute top-full left-0 right-0 glass transition-all duration-300 overflow-hidden ${
          isMobileMenuOpen ? 'max-h-[400px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
          {navItems.map((item) => (
            <a
              key={item.key}
              href={item.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-foreground/80 hover:text-foreground transition-colors font-medium py-2 text-sm uppercase tracking-wider"
            >
              {t(item.key)}
            </a>
          ))}
          <div className="flex items-center justify-between pt-4 border-t border-border">
            <LanguageSwitcher />
            <a
              href="https://forms.gle/2GkmmrRmaKdAxdaV7"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsMobileMenuOpen(false)}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-sage to-teal text-primary-foreground px-5 py-2.5 rounded-full font-semibold text-sm transition-all"
            >
              <Sparkles className="w-4 h-4" />
              {t('nav.register')}
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};
