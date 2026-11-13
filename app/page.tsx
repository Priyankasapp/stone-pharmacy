
import Navbar from "./components/Navbar";
import { Background } from "@/lib/icon";
import Footer from "./components/Footer";
import OurNewsLatter from "./components/OurNewsLatter";
import FAQ from "./components/FAQ";
import TestimonialBentoSection from "./components/TestimonialBentoSection";
import ProductCard from "./components/ProductCard";
import { productData } from "@/lib/data";

export default function Home() {
  return (
    <div className="absolute top-0 right-0 w-full  ">
      <Background/>
     <Navbar/>
     <TestimonialBentoSection/>
     {productData.map((product) => (
      <ProductCard
        key={product.name}
        name={product.name}
        categories={product.categories}
        description={product.description}
        price={product.price}
        image={product.image}
      />
     ))}

     <FAQ/>
     <OurNewsLatter/>
     <Footer/>
    </div>
  );
}
