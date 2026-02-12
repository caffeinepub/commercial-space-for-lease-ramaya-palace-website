import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import {
  Building2,
  Landmark,
  Shield,
  UtensilsCrossed,
  PartyPopper,
  ShoppingBag,
  Briefcase,
  Stethoscope,
} from 'lucide-react';

const tenantTypes = [
  {
    icon: Building2,
    title: 'Banks / ATM',
    reason: 'High visibility location with excellent footfall and secure infrastructure',
  },
  {
    icon: Landmark,
    title: 'NBFCs',
    reason: 'Professional setting with ample space for customer service and operations',
  },
  {
    icon: Shield,
    title: 'Insurance Companies',
    reason: 'Prime location for walk-in customers with flexible floor layouts',
  },
  {
    icon: UtensilsCrossed,
    title: 'Food Court / Restaurant',
    reason: 'Ground floor access, high footfall, and adequate parking facilities',
  },
  {
    icon: PartyPopper,
    title: 'Banquet Hall',
    reason: 'Spacious floors, dedicated parking, and excellent accessibility',
  },
  {
    icon: ShoppingBag,
    title: 'Brand Retail / Electronics',
    reason: 'Premium frontage with 73 ft visibility and high signage potential',
  },
  {
    icon: Briefcase,
    title: 'Professional Offices',
    reason: 'Modern amenities, lift access, and flexible space configurations',
  },
  {
    icon: Stethoscope,
    title: 'Diagnostics / Clinics',
    reason: 'Accessible location with parking and adequate power backup',
  },
];

export default function IdealTenants() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-navy-dark mb-4">
            Ideal for <span className="text-gold">Various Businesses</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            This premium space is perfect for a wide range of commercial ventures
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {tenantTypes.map((tenant, index) => (
            <Card
              key={index}
              className="border-gold/20 hover:border-gold/40 transition-all hover:shadow-lg group"
            >
              <CardHeader>
                <div className="w-14 h-14 rounded-lg bg-gold/10 flex items-center justify-center mb-4 group-hover:bg-gold/20 transition-colors">
                  <tenant.icon className="w-7 h-7 text-gold" />
                </div>
                <CardTitle className="text-lg text-navy-dark">{tenant.title}</CardTitle>
                <CardDescription className="text-sm leading-relaxed">
                  {tenant.reason}
                </CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
