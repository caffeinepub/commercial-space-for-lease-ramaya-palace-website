import { Building2, Layers, Ruler, Car, Clock } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const highlights = [
  {
    icon: Ruler,
    label: 'Total Area',
    value: '27,000 sq ft',
  },
  {
    icon: Layers,
    label: 'Floors',
    value: 'G+2+T',
  },
  {
    icon: Building2,
    label: 'Frontage',
    value: '73 ft',
  },
  {
    icon: Car,
    label: 'Parking',
    value: 'Yes',
  },
  {
    icon: Clock,
    label: 'Availability',
    value: 'Immediate',
  },
];

export default function QuickHighlights() {
  return (
    <section className="py-16 bg-luxury-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {highlights.map((item, index) => (
            <Card
              key={index}
              className="border-champagne/30 hover:border-champagne/60 transition-all duration-500 hover:shadow-luxury bg-card/80 backdrop-blur-sm group"
            >
              <CardContent className="p-6 text-center">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-champagne/15 mb-4 group-hover:bg-champagne/25 transition-all duration-500 shadow-champagne">
                  <item.icon className="w-7 h-7 text-champagne group-hover:scale-110 transition-transform duration-500" />
                </div>
                <p className="text-sm text-muted-foreground font-medium mb-1">{item.label}</p>
                <p className="text-xl font-bold text-navy-dark">{item.value}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

