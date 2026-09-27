import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import HowItWorks from "../components/program/HowItWorks";
import Experts from "../components/program/MeetTheExperts";
import ProgramEnquiry from "../components/program/ProgramEnquiry";
import WhatWeCanOffer from "../components/program/WhatWeCanOffer";

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
