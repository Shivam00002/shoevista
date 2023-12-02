import { PlatformBox } from "@/components/home/PlatformBox";
import { PlateformImages } from "@/components/home/data/ImgData";
import { ShoeBox } from "@/components/shoes/shoebox";
import { Linden_Hill } from "next/font/google";
import { ShoeData } from "../components/home/shoe";
import Link from "next/link";
import MyuseStore from "@/lib/zustand";
import React from "react";
import { useCartStore } from "@/lib/zustand";
import { Navbar } from "@/components/navbar/Navbar";

const shoe = () => {
  const { cartItems, addToCart }: any = useCartStore();
  const user = MyuseStore((state) => state.user);

  const handleAddToCart = (el: any) => {
    // Replace this with your actual item data
    addToCart(el);
    console.log(cartItems);
  };

  return (
    <>
      <Navbar
        user={user}
        userName={user?.displayName}
        imgUrl={user?.photoURL}
      />
      <div className="md:w-[80%] mt-14 flex relative  gap-2 w-full mx-auto ">
        <div className="w-[20%] sticky top-0 h-screen border">
          <h3>filter</h3>
          <h3>filter</h3>
          <h3>filter</h3>
          <h3>filter</h3>
        </div>

        <div className=" w-full grid md:grid-cols-4 grid-cols-2  gap-3">
          {ShoeData?.map((el, index) => {
            return (
              <div>
                <ShoeBox
                  key={index}
                  img={el.images.portraitURL}
                  name={el.title}
                  toptext="Saved upto 2k"
                  price={el.price.currentPrice}
                />

                <div className="flex items-center -mt-3 gap-x-3">
                  <button className="md:w-[200px] whitespace-normal w-full  py-2  bg-[#3994ba] text-white rounded-md text-[15px]  text-center cursor-pointer">
                    Buy now
                  </button>
                  <button
                    onClick={() => handleAddToCart(el)}
                    className="md:w-[200px] w-full  py-2  border text-green-900 rounded-md text-[15px]  text-center cursor-pointer"
                  >
                    Add to cart
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default shoe;
