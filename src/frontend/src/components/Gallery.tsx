import { Card } from '@/components/ui/card';

const images = [
  {
    src: '/assets/FrontElevation.jpg',
    label: 'Front Elevation',
    alt: 'Front Elevation of Ramaya Palace',
  },
  {
    src: '/assets/Gemini_Generated_Image_jk3jx6jk3jx6jk3j.png',
    label: 'Floor Plan',
    alt: 'Floor Plan Layout',
  },
  {
    src: '/assets/basement.jpg',
    label: 'Basement Parking',
    alt: 'Basement Parking Area',
  },
  {
    src: '/assets/Gemini_Generated_Image_1y1vp1y1vp1y1vp1.png',
    label: 'Terrace / Rooftop',
    alt: 'Terrace and Rooftop Area',
  },
  {
    src: '/assets/generated/high-capacity-26-passenger-lifts.dim_1536x1024.png',
    label: 'High Capacity 26 Passenger Lifts',
    alt: 'Two modern elevator doors with champagne gold finish in marble lobby',
  },
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-navy-dark mb-4">
            Property <span className="text-gold">Gallery</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore the premium features and spaces of Ramaya Palace
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {images.map((image, index) => (
            <Card
              key={index}
              className="overflow-hidden border-gold/20 hover:border-gold/40 transition-all hover:shadow-xl group"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-navy/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <p className="text-white font-semibold text-lg">{image.label}</p>
                </div>
              </div>
              <div className="p-4 bg-card">
                <p className="text-center font-medium text-navy-dark">{image.label}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
