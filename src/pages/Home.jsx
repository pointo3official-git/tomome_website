import Footer from "../components/Footer";
import Hero from "../components/home/Hero";
import PartnerOrbit from "../components/home/PartnerOrbit";
import Programs from "../components/home/Programs";
import Testimonials from "../components/home/Testimonials";
import Navbar from "../components/Navbar";
import HowTomomeWorks from "../components/home/How";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-cream font-sans text-ink">
      <Navbar />
      <Hero />
      <PartnerOrbit />
      <Programs />
      <HowTomomeWorks />
      <Testimonials />  
      <Footer />
    </div>
  );
}
