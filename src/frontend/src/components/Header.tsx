import { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { SiWhatsapp } from 'react-icons/si';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

interface HeaderProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

const menuItems = [
  { id: 'overview', label: 'Overview', href: '#hero' },
  { id: 'gallery', label: 'Gallery', href: '#gallery' },
  { id: 'specs', label: 'Specs', href: '#specifications' },
  { id: 'layouts', label: 'Layouts', href: '#layouts' },
  { id: 'location', label: 'Location', href: '#location' },
  { id: 'faqs', label: 'FAQs', href: '#faqs' },
  { id: 'contact', label: 'Contact', href: '#contact' },
];

export default function Header({ activeSection, setActiveSection }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string, id: string) => {
    const element = document.querySelector(href);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
      setActiveSection(id);
      setMobileMenuOpen(false);
    }
  };

  const handleCall = () => {
    window.location.href = 'tel:9719559999';
  };

  const handleWhatsApp = () => {
    window.open('https://wa.me/919719559999', '_blank');
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? 'bg-navy-dark/98 backdrop-blur-xl shadow-luxury-lg' : 'bg-luxury-gradient'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Brand Lockup */}
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center shadow-champagne glossy p-1.5">
              <img 
                src="/assets/PHOTO-2026-01-27-22-07-24.jpg" 
                alt="Ramaya Palace - Gold embossed logo with star-burst design" 
                className="w-full h-full object-contain"
              />
            </div>
            <div>
              <h1 className="text-xl font-bold text-white tracking-tight">Ramaya Palace</h1>
              <p className="text-xs text-champagne-light">Premium Commercial Space</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.href, item.id)}
                className={`px-4 py-2 text-sm font-medium transition-all duration-300 rounded-md ${
                  activeSection === item.id
                    ? 'text-champagne bg-white/15 shadow-champagne'
                    : 'text-white/90 hover:text-champagne hover:bg-white/10'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Desktop CTAs */}
          <div className="hidden lg:flex items-center gap-3">
            <Button
              onClick={handleCall}
              variant="outline"
              size="sm"
              className="border-champagne/60 text-champagne hover:bg-champagne hover:text-navy-dark hover:border-champagne transition-all duration-300 shadow-champagne"
            >
              <Phone className="w-4 h-4 mr-2" />
              Call Now
            </Button>
            <Button
              onClick={handleWhatsApp}
              size="sm"
              className="bg-champagne-gradient text-navy-dark hover:shadow-champagne-glow transition-all duration-300 glossy font-semibold"
            >
              <SiWhatsapp className="w-4 h-4 mr-2" />
              WhatsApp
            </Button>
          </div>

          {/* Mobile Menu */}
          <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="ghost" size="icon" className="text-white hover:bg-white/10">
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-luxury-gradient border-champagne/30 w-[280px]">
              <div className="flex flex-col gap-6 mt-8">
                <nav className="flex flex-col gap-2">
                  {menuItems.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => scrollToSection(item.href, item.id)}
                      className={`px-4 py-3 text-left text-base font-medium transition-all duration-300 rounded-md ${
                        activeSection === item.id
                          ? 'text-champagne bg-white/15 shadow-champagne'
                          : 'text-white/90 hover:text-champagne hover:bg-white/10'
                      }`}
                    >
                      {item.label}
                    </button>
                  ))}
                </nav>
                <div className="flex flex-col gap-3 pt-4 border-t border-champagne/30">
                  <Button
                    onClick={handleCall}
                    variant="outline"
                    className="border-champagne/60 text-champagne hover:bg-champagne hover:text-navy-dark w-full transition-all duration-300"
                  >
                    <Phone className="w-4 h-4 mr-2" />
                    Call Now
                  </Button>
                  <Button
                    onClick={handleWhatsApp}
                    className="bg-champagne-gradient text-navy-dark hover:shadow-champagne-glow w-full transition-all duration-300 glossy font-semibold"
                  >
                    <SiWhatsapp className="w-4 h-4 mr-2" />
                    WhatsApp
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
