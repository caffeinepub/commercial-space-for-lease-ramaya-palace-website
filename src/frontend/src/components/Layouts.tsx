import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Download, Building2, Grid3x3, Store } from 'lucide-react';

const layoutOptions = [
  {
    icon: Building2,
    title: 'Full Floor Lease',
    description: 'Lease entire floors (5,500 sq ft each) for maximum flexibility and brand presence',
    features: ['Dedicated floor space', 'Private entrance option', 'Custom fit-out'],
  },
  {
    icon: Grid3x3,
    title: 'Split into 2 Units',
    description: 'Divide floors into two separate units, ideal for multiple tenants or departments',
    features: ['Independent access', 'Shared amenities', 'Cost-effective'],
  },
  {
    icon: Store,
    title: 'Ground-Floor Focused',
    description: 'Prime ground floor space with high visibility and direct street access',
    features: ['Maximum footfall', 'Excellent signage', 'Parking access'],
  },
];

export default function Layouts() {
  const handleDownloadBrochure = () => {
    // Placeholder for brochure download
    alert('Brochure download will be available soon. Please contact us for detailed information.');
  };

  return (
    <section id="layouts" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-navy-dark mb-4">
            Flexible <span className="text-gold">Layout Options</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Choose the configuration that best suits your business needs
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {layoutOptions.map((layout, index) => (
            <Card
              key={index}
              className="border-gold/20 hover:border-gold/40 transition-all hover:shadow-xl"
            >
              <CardHeader>
                <div className="w-14 h-14 rounded-lg bg-gold/10 flex items-center justify-center mb-4">
                  <layout.icon className="w-7 h-7 text-gold" />
                </div>
                <CardTitle className="text-navy-dark">{layout.title}</CardTitle>
                <CardDescription className="text-base">{layout.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {layout.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 rounded-full bg-gold" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button
            onClick={handleDownloadBrochure}
            size="lg"
            className="bg-navy text-white hover:bg-navy-dark"
          >
            <Download className="w-5 h-5 mr-2" />
            Download Brochure (PDF)
          </Button>
        </div>
      </div>
    </section>
  );
}
