import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const faqs = [
  {
    question: 'What is the expected rent for the property?',
    answer:
      'Rent is negotiable based on the area leased and lease duration. Please contact us for a detailed quotation tailored to your requirements.',
  },
  {
    question: 'Can I lease individual floors or partial areas?',
    answer:
      'Yes, we offer flexible leasing options including full floors, split units, or ground-floor focused configurations to suit your business needs.',
  },
  {
    question: 'Is parking available for tenants and customers?',
    answer:
      'Yes, the property includes a 6,000 sq ft basement parking area with ample space for both tenant and customer vehicles.',
  },
  {
    question: 'What is the lock-in period for the lease?',
    answer:
      'The standard lock-in period is negotiable and typically ranges from 3 to 5 years. Terms can be customized based on mutual agreement.',
  },
  {
    question: 'Are all legal documents and approvals in place?',
    answer:
      'Yes, the property has a clear title and approved building plan. All lease-ready documentation is available for review.',
  },
  {
    question: 'Can I install my brand signage on the building?',
    answer:
      'Absolutely. The property offers high signage visibility with a 73 ft frontage on Railway Road, perfect for brand promotion.',
  },
  {
    question: 'What about lift and power backup facilities?',
    answer:
      'The building is equipped with a lift for easy access to all floors and has a 250 kW power load with dedicated space for backup generators.',
  },
  {
    question: 'How soon can I move in after signing the lease?',
    answer:
      'The property is ready for immediate fit-out. Timeline depends on your interior requirements, but possession can be provided within days of lease execution.',
  },
];

export default function FAQs() {
  return (
    <section id="faqs" className="py-20 bg-gradient-to-b from-muted/30 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-navy-dark mb-4">
            Frequently Asked <span className="text-gold">Questions</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Find answers to common questions about leasing Ramaya Palace
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border border-gold/20 rounded-lg px-6 bg-card hover:border-gold/40 transition-colors"
              >
                <AccordionTrigger className="text-left font-semibold text-navy-dark hover:text-gold">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
