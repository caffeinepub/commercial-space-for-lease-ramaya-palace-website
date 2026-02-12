import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { MapPin, TrendingUp, Route, Users } from 'lucide-react';

const advantages = [
  {
    icon: MapPin,
    title: 'Prime Landmarks Nearby',
    items: ['Railway Station (500m)', 'Main Market (200m)', 'Bus Stand (800m)'],
  },
  {
    icon: Users,
    title: 'Strong Daily Footfall',
    description: 'Located on one of the busiest commercial corridors in Hapur with thousands of daily visitors',
  },
  {
    icon: Route,
    title: 'Excellent Connectivity',
    description: 'Direct access to major roads with easy connectivity to Delhi, Meerut, and surrounding areas',
  },
  {
    icon: TrendingUp,
    title: 'Established Market',
    description: 'Surrounded by banks, retail stores, restaurants, and professional offices',
  },
];

export default function Location() {
  return (
    <section id="location" className="py-20 bg-luxury-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-navy-dark mb-4">
            Location <span className="text-champagne">Advantages</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Strategically positioned in the heart of Hapur's commercial district
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {advantages.map((advantage, index) => (
            <Card
              key={index}
              className="border-champagne/30 hover:border-champagne/60 transition-all duration-500 hover:shadow-luxury group"
            >
              <CardHeader>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-champagne/15 flex items-center justify-center shrink-0 group-hover:bg-champagne/25 transition-all duration-500 shadow-champagne">
                    <advantage.icon className="w-6 h-6 text-champagne group-hover:scale-110 transition-transform duration-500" />
                  </div>
                  <div>
                    <CardTitle className="text-navy-dark mb-2">{advantage.title}</CardTitle>
                    {advantage.description && (
                      <p className="text-muted-foreground">{advantage.description}</p>
                    )}
                  </div>
                </div>
              </CardHeader>
              {advantage.items && (
                <CardContent>
                  <ul className="space-y-2">
                    {advantage.items.map((item, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-foreground">
                        <div className="w-1.5 h-1.5 rounded-full bg-champagne" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              )}
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

