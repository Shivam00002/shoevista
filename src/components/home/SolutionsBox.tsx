import Image from "next/image";
import React from "react";

export const SolutionsBox = ({ img, work, description }:any) => {
  return (
    <div className="w-full h-fit">
      <div className="w-full md:h-[435px]  h-[230px] rounded-md relative ">
        <Image
          src={img}
          alt="img"
          fill
          className="object-cover rounded-md"
          loading="lazy"
        />
      </div>
      <div className="w-full h-fit md:h-[150px] ">
        <div className="md:w-[140px]  w-[110px] mt-5 h-[1px] bg-black"></div>
        <h2 className="md:ml-16 ml-12 md:text-[14px] text-[13px]">1.</h2>
        <h1 className="md:text-[30px] text-[16px] text-[#3994ba]">{work}</h1>
        <p className="md:text-[18px] text-[12px] text-[#777474]">{description}</p>
      </div>
    </div>
  );
};
