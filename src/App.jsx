import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FeatureSplit from './components/FeatureSplit';
import PartnerOrbit from './components/PartnerOrbit';
import Pricing from './components/Pricing';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-cream font-sans text-ink">
      <Navbar />
      <Hero />
      <FeatureSplit />
      <PartnerOrbit />
      <Pricing />
      <Testimonials />
      <Footer />
    </div>
  );
}
