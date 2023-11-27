import Image from "next/image";
import { Inter } from "next/font/google";
import { Myhome } from "@/components/home/Myhome";
import { Checkout } from "@/components/checkout/Checkout";
import { Navbar } from "@/components/navbar/Navbar";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <div className="container  md:max-w-[80%] w-full mx-auto">
        <Navbar />
        <Myhome />
        <Checkout />
      </div>
    </>
  );
}
