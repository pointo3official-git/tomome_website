import Contact from "../components/contact/Contact";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-cream font-sans text-ink">
      <Navbar />
      <Contact />
      <Footer />
    </div>
  );
}
