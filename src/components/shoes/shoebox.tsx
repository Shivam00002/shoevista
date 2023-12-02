import { useCartStore } from "@/lib/zustand";
import Image from "next/image";
import React from "react";
import { PiCurrencyInrBold } from "react-icons/pi";

export const ShoeBox = ({ img, toptext, name, price }: any) => {
 

  

  

  return (
    <div className="w-full h-fit">
      <div className="w-full  h-[240px] md:h-[375px]  rounded-md relative ">
        <Image
          src={img}
          alt="img"
          fill
          className="object-cover rounded-md"
          loading="lazy"
        />
        <div className="absolute top-2 left-2 text-[10px] w-fit py-[2px] rounded-md h-fit bg-[#bae6f8] px-2">
          {toptext}
        </div>
      </div>
      <div className="w-full  h-[150px] ">
        <p className="md:text-[18px] whitespace-nowrap text-[14px] md:leading-none leading-[17px] py-2 text-[#307e9f] ">
          {name}
        </p>
        <p className="md:text-[11px] text-[10px] text-gray-500">
          COMFORTABLE FOOTWERE
        </p>

        <div className="flex  items-center  gap-2 ">
          <div className="w-2 h-2 rounded-full bg-green-400"></div>
          <p className="md:text-[13px] text-[10px] text-[#3994ba]">
            32 items available
          </p>
        </div>
        <div className="flex  items-center  gap-2 ">
          <div className="w-2 h-2 rounded-full bg-green-400"></div>
          <p className="md:text-[13px] text-[10px] text-[#3994ba]">
            Ettereek, 1040
          </p>
        </div>
        <div className="flex  gap-2 items-center">
          <PiCurrencyInrBold color="gray" />
          <p className="text-gray-500">{price}</p>
        </div>

      
      </div>
    </div>
  );
};
