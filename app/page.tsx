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
      <Suspense fallback={<section className="w-full px-4 py-10 text-center" role="status">Loading health services...</section>}>
        <WhatWeOfferSection/>
      </Suspense>
      <Suspense fallback={<section className="w-full px-4 py-10 text-center" role="status">Loading conditions...</section>}>
        <Conditions/>
      </Suspense>
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
      <Suspense fallback={<section className="w-full px-4 py-10 text-center" role="status">Loading testimonials...</section>}>
        <TestimonialBentoSection />
      </Suspense>
      <Suspense fallback={<section className="w-full px-4 py-10 text-center" role="status">Loading FAQs...</section>}>
        <FAQ />
      </Suspense>
      <OurNewsLatter />
      <Footer />
    </div>
  );
}
