import React, { useState } from "react";
import { InputBox } from "./InputBox";

export const Filter = () => {
   const [data , setData] = useState(true)
  


  return (
    <div className="mt-20 px-2">
      <h2 className="font-semibold text-gray-500">Color</h2>
      <InputBox color="red" />
      <InputBox color="golden" />
      <InputBox color="black" />
      <InputBox color="white" />
      <InputBox color="gray" />

      <h2 className="font-semibold text-gray-500 mt-8">Price</h2>
      <select className="w-[200px]  mt-2 h-fit" name="" id="">
        <option value="">Select</option>
        <option value="high-to-low">High to low</option>
        <option value="Low-to-high">Low to high</option>

      </select>

      <h2 className="font-semibold text-gray-500 mt-8">Price range</h2>
      <h3>222</h3>
      <input type="range" className="w-[200px] mt-2 h-[6px]" />
    </div>
  );
};

