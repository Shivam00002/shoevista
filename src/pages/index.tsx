import Image from "next/image";
import { Inter } from "next/font/google";
import { Myhome } from "@/components/home/Myhome";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <div className="container md:max-w-[80%] w-full mx-auto">
        <Myhome />
      </div>
    </>
  );
}
