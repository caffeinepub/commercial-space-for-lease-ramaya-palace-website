import { ChevronDown } from 'lucide-react';

export default function Hero() {
  const scrollToNext = () => {
    const element = document.querySelector('#text-cta');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative w-full">
      {/* Pure Image Section */}
      <div className="relative w-full bg-navy-dark">
        <img
          src="/assets/front.png"
          alt="Ramaya Palace - Modern illuminated commercial building facade with premium architectural design"
          className="w-full h-screen object-contain"
        />
        
        {/* Subtle Scroll Indicator */}
        <button
          onClick={scrollToNext}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/70 hover:text-white transition-all duration-300 animate-bounce"
          aria-label="Scroll to content"
        >
          <ChevronDown className="w-8 h-8" />
        </button>
      </div>
    </section>
  );
}
