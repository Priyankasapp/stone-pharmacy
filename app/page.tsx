import { Suspense } from "react";
import Navbar from "./components/Navbar";
import { Background } from "@/lib/icon";
import Footer from "./components/Footer";
import OurNewsLatter from "./components/OurNewsLatter";
import FAQ from "./components/FAQ";
import TestimonialBentoSection from "./components/TestimonialBentoSection";
import WhatWeOfferSection from "./components/WhatWeOfferSection";
import Hero from "./components/Hero";
import Characterstics from "./components/Characterstics";
import Conditions from "./components/Conditions";
import SanityProducts from "./components/SanityProducts";

export default function Home() {
  return (
    <div className="relative min-h-screen w-full overflow-x-hidden">
     <div className="absolute inset-0  -z-10 pointer-events-none">
      <Background />
      </div>
      <Navbar />
      <Hero/>
      <Characterstics/>
      <WhatWeOfferSection/>
      <Conditions/>
      <Suspense
        fallback={
          <section
            id="products"
            aria-labelledby="products-heading"
            className="w-full px-4 py-10 sm:px-6 lg:px-10 xl:px-16"
          >
            <h2
              id="products-heading"
              className="mb-6 text-center font-nightSerif text-2xl font-semibold text-dark-charcoal sm:text-3xl"
            >
              Best Selling Products
            </h2>
            <p className="text-center" role="status">
              Loading products...
            </p>
          </section>
        }
      >
        <SanityProducts />
      </Suspense>
      <TestimonialBentoSection />
      <FAQ />
      <OurNewsLatter />
      <Footer />
    </div>
  );
}
