import { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import TextCTA from './components/TextCTA';
import QuickHighlights from './components/QuickHighlights';
import Gallery from './components/Gallery';
import Specifications from './components/Specifications';
import Layouts from './components/Layouts';
import Location from './components/Location';
import IdealTenants from './components/IdealTenants';
import FAQs from './components/FAQs';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import MobileStickyCTA from './components/MobileStickyCTA';
import { Toaster } from '@/components/ui/sonner';

function App() {
  const [activeSection, setActiveSection] = useState('overview');

  return (
    <div className="min-h-screen bg-background">
      <Header activeSection={activeSection} setActiveSection={setActiveSection} />
      
      <main>
        <Hero />
        <TextCTA />
        <QuickHighlights />
        <Gallery />
        <Specifications />
        <Layouts />
        <Location />
        <IdealTenants />
        <FAQs />
        <ContactForm />
      </main>

      <Footer />
      <MobileStickyCTA />
      <Toaster />
    </div>
  );
}

export default App;
