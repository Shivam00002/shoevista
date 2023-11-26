import Image from "next/image";
import React from "react";
import { LuEuro } from "react-icons/lu";
export const PlatformBox = ({ img, toptext ,name }:any) => {
  return (
    <div className="w-full h-fit">
      <div className="w-full h-[240px] md:h-[435px]  rounded-md relative ">
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
      <div className="w-full h-[150px] ">
        <p className="md:text-[18px] text-[14px] md:leading-none leading-[17px] py-2 text-[#307e9f] ">
       
          {name}
        </p>
        <p className="md:text-[11px] text-[10px] text-gray-500">
          COMFORTABLE CHAIRS
        </p>
        <div className="flex  items-center gap-1">
          <LuEuro className="md:w-10 md:h-10 h-7 w-7" />
          <h3 className="md:text-[36px] text-[26px] ">90</h3>
          <p className="md:text-[10px] text-[8px]  -mt-5 text-gray-500">EX VAT</p>
        </div>
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
      </div>
    </div>
  );
};
