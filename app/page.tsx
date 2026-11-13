import Navbar from "./components/Navbar";
import { Background } from "@/lib/icon";
import Footer from "./components/Footer";
import OurNewsLatter from "./components/OurNewsLatter";
import FAQ from "./components/FAQ";
import TestimonialBentoSection from "./components/TestimonialBentoSection";
import ProductSection from "./components/ProductSection";
import WhatWeOfferSection from "./components/WhatWeOfferSection";
import Hero from "./components/Hero";

export default function Home() {
  return (
    <div className="absolute top-0 right-0 w-full ">
      <Background />
      <Navbar />
      <Hero/>
      <WhatWeOfferSection/>
      <TestimonialBentoSection />
      <ProductSection />
      <FAQ />
      <OurNewsLatter />
      <Footer />
    </div>
  );
}
