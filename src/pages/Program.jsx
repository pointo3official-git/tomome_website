import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import ProgramEnquiry from "../components/Program/ProgramEnqury";

export default function ProgramPage() {
  return (
    <div className="min-h-screen bg-cream font-sans text-ink">
      <Navbar />
      <ProgramEnquiry />
      <Footer />
    </div>
  );
}
