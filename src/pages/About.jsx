import AboutHero from "../components/About/AboutHero";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Experts from "../components/Program/MeetTheExperts";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-cream font-sans text-ink">
      <Navbar />
      <AboutHero />
      <Experts/>
      <Footer />
    </div>
  );
}
