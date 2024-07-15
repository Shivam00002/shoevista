import React from "react";
import { useState } from "react";
import { LuEuro } from "react-icons/lu";

export const CheckBox = ({ price }: any) => {
  const [quentity, setQuentity] = useState(1);
  const [currentPrice, setCurrentPrice] = useState(0);

  const handleQuentityPlus = () => {
    if (quentity == 5) {
      return;
    } else {
      setQuentity(quentity + 1);
    }
  };
  const handleQuentityMinus = () => {
    if (quentity == 1) {
      return;
    } else {
      setQuentity(quentity - 1);
    }
  };

  return (
    <div className="md:w-[350px] px-2 py-2 w-full sticky  top-40 shadow-lg  h-fit md:h-[500px] rounded-md  ">
      <div className="w-full h-14 px-4 bg-[#C3FF52] flex justify-between items-center ">
        <div>
          <p className="text-[12px] text-green-900">YOUR IMPACT</p>
          <p className="text-[12px] text-gray-500">
            THE CO2 SAVED FROM PURCHASING
          </p>
        </div>

        <h2>
          11 <span>%</span>
        </h2>
      </div>

      <div className="flex   items-center gap-1">
        <p>Price : INR</p>
        <h3 className="md:text-[35px] text-[2px] md:mt-0 mt-3">
          {quentity === 0 && 1 ? price : quentity * price}
        </h3>

        <p className="md:text-[10px] text-[8px]  -mt-5 text-gray-500">EX VAT</p>
      </div>

      <div className="flex  py-2 items-center  gap-2 ">
        <div className="w-3 h-3 rounded-full bg-red-500"></div>
        <p className="md:text-[13px] text-[10px] text-green-900">
          2 items available
        </p>
      </div>

      <p className="text-[12px]">QTY</p>
      <div className="flex py-2 items-start gap-1">
        <button
          onClick={() => handleQuentityMinus()}
          className="px-5 py-3 border  rounded-md "
        >
          -
        </button>
        <button className="px-5 py-3 border  cursor-default rounded-md ">
          {quentity}
        </button>
        <button
          onClick={() => handleQuentityPlus()}
          className="px-5 py-3 border rounded-md "
        >
          +
        </button>
      </div>

      <div className="flex items-center gap-3">
        <div className="md:w-fit w-full px-8 py-2 mt-4 bg-green-400 text-green-900 rounded-md text-[18px]  text-center cursor-pointer">
          Place Order
        </div>
      </div>
      <div className="mt-10 md:block hidden">
        <p className="text-[12px]">DIMENSIONS</p>
        <div className="flex items-center border-b-[1px]  py-2 justify-between">
          <p className="text-[16px] text-green-900">Height</p>
          <p className="text-[16px] text-green-900">N/A</p>
        </div>
        <div className="flex items-center border-b-[1px]  py-2 justify-between">
          <p className="text-[16px] text-green-900">Width</p>
          <p className="text-[16px] text-green-900">N/A</p>
        </div>
        <div className="flex items-center border-b-[1px]  py-2 justify-between">
          <p className="text-[16px] text-green-900">Depth</p>
          <p className="text-[16px] text-green-900">N/A</p>
        </div>
      </div>
    </div>
  );
};
