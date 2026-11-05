import Image from "next/image";
import Navbar from "./components/Navbar";
import { Background } from "@/lib/icon";

export default function Home() {
  return (
    <div className="absolute top-0 right-0 w-full  ">
      <Background/>
     <Navbar/>
    </div>
  );
}
