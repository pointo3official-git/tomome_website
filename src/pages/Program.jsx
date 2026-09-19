import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import HowItWorks from "../components/Program/HowItWorks";
import Experts from "../components/Program/MeetTheExperts";
import ProgramEnquiry from "../components/program/ProgramEnqury";
import WhatWeCanOffer from "../components/Program/WhatWeCanOffer";

export default function ProgramPage() {
  return (
    <div className="min-h-screen bg-cream font-sans text-ink">
      <Navbar />
      <ProgramEnquiry />
      <WhatWeCanOffer/>
      <HowItWorks />
      <Experts/>
      <Footer />
    </div>
  );
}
