import React, { useState } from "react";
import { FaCartPlus } from "react-icons/fa";
import { FaRegMoon } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { LuSun } from "react-icons/lu";
import Image from "next/image";

export const Navbar = () => {
  const [lite, setLite] = useState(false);

  const handleDaymode = () => {
    setLite(!lite);
  };

  return (
    <div className=" w-full   fixed z-10 top-0 left-0  border-b-2 ">
      <div className="md:w-[80%]  flex items-center justify-between mx-auto w-full  h-14   bg-white">
        <h2 className="font-bold md:text-[20px]">ShoeVista</h2>

        <div className="flex  px-2 w-[178px] items-center gap-10">
          <FaCartPlus size={20} />
          <div className="cursor-pointer" onClick={() => handleDaymode()}>
            {lite ? <FaRegMoon size={20} /> : <LuSun size={22} />}
          </div>

          <div
            className="cursor-pointer relative"
            onClick={() => handleDaymode()}
          >
            {lite ? (
              <div className="w-[33px] h-[33px] relative rounded-full border">
                <Image
                  fill
                  src="https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5?s=250"
                  alt="profile-pic"
                  className="object-cover rounded-full"
                />
              </div>
            ) : (
              <CgProfile size={23} />
            )}
          </div>
        </div>
      </div>
      {lite && (
        <div className="  text-center absolute right-2 md:right-[190px] bg-white w-[130px] h-[80px] rounded-md shadow-lg ">
          <p className="cursor-pointer py-2">Profile</p>
          <p className="cursor-pointer">Login</p>
        </div>
      )}
    </div>
  );
};
