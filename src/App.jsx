import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './components/home/Hero';
import Programs from './components/home/Programs';
import PartnerOrbit from './components/home/PartnerOrbit';
import Pricing from './components/home/Pricing';
import Testimonials from './components/home/Testimonials';
import HowTomomeWorks from './components/home/How';

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
