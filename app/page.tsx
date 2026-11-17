import Navbar from "./components/Navbar";
import { Background } from "@/lib/icon";
import Footer from "./components/Footer";
import OurNewsLatter from "./components/OurNewsLatter";
import FAQ from "./components/FAQ";
import TestimonialBentoSection from "./components/TestimonialBentoSection";
import ProductSection from "./components/ProductSection";
import WhatWeOfferSection from "./components/WhatWeOfferSection";
import Hero from "./components/Hero";
import Characterstics from "./components/Characterstics";
import Conditions from "./components/Conditions";

export default function Home() {
  return (
    <div className="relative min-h-screen w-full  ">
     <div className="absolute inset-0  -z-10 pointer-events-none">
        <Background />
      </div>
      <Navbar />
      <Hero/>
      <Characterstics/>
      <WhatWeOfferSection/>
      <Conditions/>
       <ProductSection />
      <TestimonialBentoSection />
     
      <FAQ />
      <OurNewsLatter />
      <Footer />
    </div>
  );
}
