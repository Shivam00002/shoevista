import Image from "next/image";
import { Inter } from "next/font/google";
import { Myhome } from "@/components/home/Myhome";
import { Checkout } from "@/components/checkout/Checkout";
import { Navbar } from "@/components/navbar/Navbar";
import MyuseStore from "@/lib/zustand";
import { Toaster } from 'react-hot-toast';

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const user = MyuseStore((state) => state.user);


 
  return (
    <div className="">
     
      <div className="container  md:max-w-[80%] w-full mx-auto">
        <Navbar user={user} userName={user?.displayName} imgUrl={user?.photoURL} />
        <Myhome />
        <Checkout />
      </div>
    </div>
  );
}
