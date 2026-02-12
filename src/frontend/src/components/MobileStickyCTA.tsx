import { Phone } from 'lucide-react';
import { SiWhatsapp } from 'react-icons/si';
import { Button } from '@/components/ui/button';

export default function MobileStickyCTA() {
  const handleCall = () => {
    window.location.href = 'tel:9719559999';
  };

  const handleWhatsApp = () => {
    window.open('https://wa.me/919719559999', '_blank');
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 lg:hidden bg-luxury-gradient border-t border-champagne/30 shadow-luxury-lg backdrop-blur-xl">
      <div className="container mx-auto px-4 py-3">
        <div className="flex gap-3">
          <Button
            onClick={handleCall}
            variant="outline"
            className="flex-1 border-champagne/60 text-champagne hover:bg-champagne hover:text-navy-dark transition-all duration-300 shadow-champagne"
          >
            <Phone className="w-4 h-4 mr-2" />
            Call Now
          </Button>
          <Button
            onClick={handleWhatsApp}
            className="flex-1 bg-champagne-gradient text-navy-dark hover:shadow-champagne-glow transition-all duration-300 glossy font-semibold"
          >
            <SiWhatsapp className="w-4 h-4 mr-2" />
            WhatsApp
          </Button>
        </div>
      </div>
    </div>
  );
}

