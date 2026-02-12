import { Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-navy text-white py-12 border-t border-gold/20">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-bold mb-2">Ramaya Palace</h3>
            <p className="text-white/70 text-sm">
              Premium Commercial Space on Railway Road, Hapur
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-3 text-gold">Contact</h4>
            <div className="space-y-2 text-sm text-white/70">
              <p>Phone: +91 97195 59999</p>
              <p>Email: ramaya.corp@gmail.com</p>
              <p>Railway Road, Hapur, UP 245101</p>
            </div>
          </div>

          {/* Disclaimer */}
          <div>
            <h4 className="font-semibold mb-3 text-gold">Important Note</h4>
            <p className="text-sm text-white/70">
              Details indicative; subject to site visit. All specifications and features are
              subject to verification during property inspection.
            </p>
          </div>
        </div>

        <div className="pt-8 border-t border-gold/20 text-center text-sm text-white/70">
          <p className="flex items-center justify-center gap-2 flex-wrap">
            © 2025. Built with{' '}
            <Heart className="w-4 h-4 text-gold fill-gold inline" /> using{' '}
            <a
              href="https://caffeine.ai"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gold hover:text-gold-light transition-colors"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
