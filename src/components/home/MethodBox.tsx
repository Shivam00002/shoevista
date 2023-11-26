

import Image from "next/image";
import React from "react";
export const MethodBox = ({ icon, work, detail }:any) => {
  return (
    <div className="w-full px-2 py-4 h-fit cursor-pointer ">
      <div className="md:w-[200px] border w-[120px] h-[120px] md:h-[200px] relative">
      <Image src={icon} fill alt="img" />
      </div>
      
      <div className="md:w-[140px] w-[100px] mt-5 h-[1px] bg-black"></div>
      <h2 className="md:ml-16 ml-10 md:text-[14px] text-[13px]">1.</h2>
      <h2 className="md:text-[30px] text-[18px] ">{work}</h2>
      <p className="md:text-[16px] text-[12px] text-[#3994ba]">{detail}</p>
    </div>
  );
};
