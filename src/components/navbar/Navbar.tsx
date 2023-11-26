import React from "react";
import { FaCartPlus } from "react-icons/fa";
import { FaRegMoon } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
export const Navbar = () => {
  return (
    <div className="  m w-full fixed z-10 top-0 left-0  border-b-2 ">
      <div className="md:w-[80%] flex items-center justify-between mx-auto w-full  h-14   bg-white">
        <h2 className="font-bold md:text-[20px]">ShoeVista</h2>

        <div className="flex items-center gap-7">
          <FaCartPlus size={20} />
          <FaRegMoon size={20} />
          <CgProfile size={23} />
        </div>
      </div>
    </div>
  );
};
