import { MethodBox } from "@/components/home/MethodBox";
import { BoxData } from "@/components/home/data/ImgData";
import { Navbar } from "@/components/navbar/Navbar";
import { ShoeBox } from "@/components/shoes/shoebox";
import { useCartStore } from "@/lib/zustand";
import React from "react";
import MyuseStore from "@/lib/zustand";

const Cart = () => {
  const { cartItems, removeFromCart }: any = useCartStore();
  const user = MyuseStore((state) => state.user);

  console.log("items", cartItems);

  const handleDelete = (index: number) => {
    removeFromCart(index);
  };

  return (
    <>
      <Navbar
        user={user}
        userName={user?.displayName}
        imgUrl={user?.photoURL}
      />
      <div className="md:w-[80%] h-fit mt-16 border mx-auto ">
        <h2>Your Items</h2>

        <div className="w-full grid md:grid-cols-4 grid-cols-2 gap-3">
          {cartItems?.map((el: any, index: number) => (
            <div key={index}>
              <ShoeBox
                img={el.images.portraitURL}
                name={el.title}
                toptext="Saved up to 2k"
                price={el.price.currentPrice}
              />

              <div className="flex items-center -mt-3 gap-x-3">
                <button className="md:w-[200px] whitespace-normal w-full py-2 bg-[#3994ba] text-white rounded-md text-[15px] text-center cursor-pointer">
                  Buy now
                </button>
                <button
                  className="md:w-[200px] w-full py-2 border text-green-900 rounded-md text-[15px] text-center cursor-pointer"
                  onClick={() => handleDelete(index)}
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Cart;
