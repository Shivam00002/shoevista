import React from "react";

export const SpecificationBox = () => {
  return (
    <div className="w-full shadow-md h-fit border px-2 py-4 rounded-md">
      <p className="md:text-[14px] text-[12px] text-green-900">HEIGHT</p>
      <div className="flex mt-6 items-center justify-between">
        <p className="md:text-[34px] text-[18px] text-green-900">N/A</p>
        <p className="md:text-[16px] text-[12px] text-green-900">CM</p>
      </div>
    </div>
  );
};
