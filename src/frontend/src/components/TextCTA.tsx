import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { CheckCircle2 } from 'lucide-react';

const badges = [
  'Prime frontage',
  'Flexible areas',
  'Ready for fit-out',
  'Duly Approved Plan',
];

export default function TextCTA() {
  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <section id="text-cta" className="relative bg-white border-t border-gray-200">
      <div className="container mx-auto px-4 py-16 md:py-20">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-navy-dark leading-tight">
            Prime Commercial Space for Lease on Railway Road, Hapur
          </h1>

          {/* CTA Button */}
          <div className="pt-2">
            <Button
              onClick={scrollToContact}
              size="lg"
              className="bg-white text-navy-dark border-2 border-champagne hover:bg-champagne/10 hover:shadow-champagne-glow text-lg px-8 py-6 h-auto font-bold shadow-luxury transition-all duration-500"
            >
              Schedule Site Visit
            </Button>
          </div>

          {/* Badges */}
          <div className="flex flex-wrap justify-center gap-3 pt-4">
            {badges.map((badge, index) => (
              <Badge
                key={index}
                variant="outline"
                className="bg-white text-navy-dark border-champagne/60 px-4 py-2 text-sm font-medium hover:bg-champagne/10 hover:border-champagne transition-all duration-300"
              >
                <CheckCircle2 className="w-4 h-4 mr-2 text-champagne" />
                {badge}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
