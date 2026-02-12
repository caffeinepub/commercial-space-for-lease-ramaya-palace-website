import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Phone, Mail, MapPin } from 'lucide-react';
import { SiWhatsapp } from 'react-icons/si';

export default function ContactForm() {
  const handleCall = () => {
    window.location.href = 'tel:9719559999';
  };

  const handleWhatsApp = () => {
    window.open('https://wa.me/919719559999', '_blank');
  };

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-navy-dark mb-4">
            Get in <span className="text-champagne">Touch</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Schedule a site visit or request more information about Ramaya Palace
          </p>
        </div>

        <div className="flex justify-center max-w-md mx-auto">
          {/* Contact Information */}
          <Card className="border-champagne/30 hover:border-champagne/50 transition-all duration-300 shadow-luxury w-full">
            <CardHeader>
              <CardTitle className="text-navy-dark">Contact Information</CardTitle>
              <CardDescription>We respond within 24 hours</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-champagne mt-1 shrink-0" />
                <div>
                  <p className="text-sm text-muted-foreground">Phone</p>
                  <a
                    href="tel:9719559999"
                    className="font-medium text-foreground hover:text-champagne transition-colors"
                  >
                    +91 97195 59999
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-champagne mt-1 shrink-0" />
                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <a
                    href="mailto:ramaya.corp@gmail.com"
                    className="font-medium text-foreground hover:text-champagne transition-colors break-all"
                  >
                    ramaya.corp@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-champagne mt-1 shrink-0" />
                <div>
                  <p className="text-sm text-muted-foreground">Address</p>
                  <p className="font-medium text-foreground">
                    Ramaya Palace, Railway Road, Hapur, Uttar Pradesh 245101
                  </p>
                </div>
              </div>

              <div className="pt-4 space-y-3">
                <Button
                  onClick={handleCall}
                  variant="outline"
                  className="w-full border-champagne/60 text-champagne hover:bg-champagne hover:text-navy-dark transition-all duration-300 shadow-champagne"
                >
                  <Phone className="w-4 h-4 mr-2" />
                  Call Now
                </Button>
                <Button
                  onClick={handleWhatsApp}
                  className="w-full bg-champagne-gradient text-navy-dark hover:shadow-champagne-glow transition-all duration-300 glossy font-semibold"
                >
                  <SiWhatsapp className="w-4 h-4 mr-2" />
                  WhatsApp
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
