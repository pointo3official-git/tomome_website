import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Programs from './components/Programs';
import PartnerOrbit from './components/PartnerOrbit';
import Pricing from './components/Pricing';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import HowTomomeWorks from './components/How';

export default function App() {
  return (
    <div className="min-h-screen bg-cream font-sans text-ink">
      <Navbar />
      <Hero />
      <PartnerOrbit />
      <Programs />
      <HowTomomeWorks/>
      {/* <Pricing /> */}
      <Testimonials />
      <Footer />
    </div>
  );
}
