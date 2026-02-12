import { MapPin, ExternalLink, CheckCircle2 } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const floorAreas = [
  { floor: 'Basement Parking', area: '6,000 sq ft' },
  { floor: 'Ground Floor', area: '4,700 sq ft' },
  { floor: 'First Floor', area: '5,500 sq ft' },
  { floor: 'Second Floor', area: '5,500 sq ft' },
  { floor: 'Terrace/Rooftop', area: '5,500 sq ft' },
];

const features = [
  { label: 'Lift', value: 'Yes' },
  { label: 'Washrooms', value: 'Yes' },
  { label: 'Power Load', value: '250 kW' },
  { label: 'Space for Backup', value: 'Yes' },
  { label: 'Water Supply', value: 'Yes' },
  { label: 'Signage Visibility', value: 'High' },
];

export default function Specifications() {
  const openGoogleMaps = () => {
    window.open(
      'https://www.google.com/maps/search/?api=1&query=Ramaya+Palace+Railway+Road+Hapur+Uttar+Pradesh+245101',
      '_blank'
    );
  };

  return (
    <section id="specifications" className="py-20 bg-luxury-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-navy-dark mb-4">
            Property <span className="text-champagne">Specifications</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Detailed information about the property features and amenities
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-8">
          {/* Address & Map */}
          <Card className="border-champagne/30 hover:border-champagne/50 transition-all duration-300 shadow-luxury">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-navy-dark">
                <MapPin className="w-5 h-5 text-champagne" />
                Location
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <p className="text-base font-medium text-foreground">
                  Ramaya Palace, Railway Road, Hapur, Uttar Pradesh 245101
                </p>
              </div>
              
              <div className="aspect-video rounded-lg overflow-hidden border border-champagne/30 shadow-champagne">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3493.8!2d77.7!3d28.7!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjjCsDQyJzAwLjAiTiA3N8KwNDInMDAuMCJF!5e0!3m2!1sen!2sin!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Ramaya Palace Location Map"
                />
              </div>

              <Button
                onClick={openGoogleMaps}
                variant="outline"
                className="w-full border-champagne/60 text-champagne hover:bg-champagne hover:text-navy-dark transition-all duration-300 shadow-champagne"
              >
                <ExternalLink className="w-4 h-4 mr-2" />
                Open in Google Maps
              </Button>
            </CardContent>
          </Card>

          {/* Floor-wise Areas */}
          <Card className="border-champagne/30 shadow-luxury">
            <CardHeader>
              <CardTitle className="text-navy-dark">Floor-wise Area Breakdown</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {floorAreas.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-4 rounded-lg bg-muted/50 hover:bg-muted transition-colors duration-300"
                  >
                    <span className="font-medium text-foreground">{item.floor}</span>
                    <Badge variant="secondary" className="bg-champagne/15 text-champagne border-champagne/40 shadow-champagne">
                      {item.area}
                    </Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Features */}
        <Card className="border-champagne/30 shadow-luxury">
          <CardHeader>
            <CardTitle className="text-navy-dark">Key Features & Amenities</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 p-4 rounded-lg bg-muted/50 hover:bg-muted transition-colors duration-300"
                >
                  <CheckCircle2 className="w-5 h-5 text-champagne shrink-0" />
                  <div>
                    <p className="text-sm text-muted-foreground">{feature.label}</p>
                    <p className="font-semibold text-foreground">{feature.value}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="p-6 rounded-lg bg-champagne/10 border border-champagne/30 shadow-champagne">
              <p className="text-center text-base font-medium text-navy-dark">
                <CheckCircle2 className="w-5 h-5 text-champagne inline mr-2" />
                Clear title and approved building plan available. Lease-ready documentation.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}

