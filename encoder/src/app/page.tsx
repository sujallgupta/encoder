import { Footer } from "../../components/Footer";
import Navbar from "../../components/Navbar";
import { AIIntelligence } from "./Aiintelligence";
import Hero from "./Hero";
import { HowItWorks } from "./Howitworks";
import { Problem } from "./Problem";
import { Vision } from "./Vision";
import { Waitlist } from "./Waitlist";
import { WhatYouReplace } from "./WhatYouReplace";

export default function Home() {
  return (
    <main className="bg-black text-white overflow-x-hidden">
      <Navbar />
      <Hero />
      <Problem />
      <HowItWorks />
      <WhatYouReplace />
      <Vision />
      <AIIntelligence />
      <Waitlist />
      <Footer />
    </main>
  );
}
