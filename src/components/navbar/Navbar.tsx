import React, { useState } from "react";
import { FaCartPlus } from "react-icons/fa";
import { FaRegMoon } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { LuSun } from "react-icons/lu";
import Image from "next/image";
import Link from "next/link";
import MyuseStore from "@/lib/zustand";
import { useRouter } from "next/router";
import { auth } from "@/lib/firebase";

export const Navbar = ({ imgUrl, userName, user }: any) => {
  const [lite, setLite] = useState(false);
  const [profile, showProfile] = useState(false);
  const router = useRouter();
  const { setUser }: { setUser: (newUser: any) => void } = MyuseStore();

  const handleDaymode = () => {
    setLite(!lite);
  };


  const handleshowProfile = () => {
    showProfile(!profile);
  };

  const signOut = async () => {
    try {
      await auth.signOut();
      setUser(null);
      router.push("/"); // Redirect to the login page or any other desired page
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  return (
    <div className=" w-full   fixed z-50 top-0 left-0  border-b-2 ">
      <div className="md:w-[80%]  flex items-center justify-between mx-auto w-full  h-14   bg-white">
        <Link href="/" className="font-bold md:text-[20px]">ShoeVista</Link>

        <div className="flex     px-2  items-center gap-5">
          {user && (
            <h2 className="md:text-[14px] text-[12px] whitespace-nowrap font-semibold">
              <span className="text-[#3994ba] px-1 md:px-2 font-serif">
                Welcome @{" "}
              </span>
              {userName}
            </h2>
          )}

<Link href="/cart"><FaCartPlus size={20} /></Link>
  
          <div className="cursor-pointer w-5 " onClick={() => handleDaymode()}>
            {lite ? <FaRegMoon size={20} /> : <LuSun size={22} />}
          </div>

          <div
            className="cursor-pointer  relative"
            onClick={() => handleshowProfile()}
          >
            {user ? (
              <div className="w-[33px] h-[33px] select-none relative rounded-full border">
                <Image
                  fill
                  src={imgUrl}
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
      {profile && (
        <div className="  -z-50 text-center absolute right-2 md:right-[190px] bg-white w-[130px] h-[80px] rounded-md shadow-lg ">
          <p className="cursor-pointer py-2">Profile</p>

          {user ? (
            <button onClick={signOut} className="cursor-pointer">
              Logout
            </button>
          ) : (
            <Link href={"/login"} className="cursor-pointer">
              Login
            </Link>
          )}
        </div>
      )}
    </div>
  );
};
