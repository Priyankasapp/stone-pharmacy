import Image from "next/image";
import Navbar from "./components/Navbar";
import { Background } from "@/lib/icon";
import Footer from "./components/Footer";
import OurNewsLatter from "./components/OurNewsLatter";

export default function Home() {
  return (
    <div className="absolute top-0 right-0 w-full  ">
      <Background/>
     <Navbar/>
     <OurNewsLatter/>
     <Footer/>
    </div>
  );
}
