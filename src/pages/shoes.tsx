import { Toaster, toast } from "react-hot-toast";
import React from "react";
import { useCartStore } from "@/lib/zustand";
import { Navbar } from "@/components/navbar/Navbar";
import { ShoeBox } from "@/components/shoes/shoebox";
import MyuseStore from "@/lib/zustand";
import { ShoeData } from "../components/home/shoe";

const Shoe = () => {
  const { cartItems, addToCart }: any = useCartStore();
  const user = MyuseStore((state) => state.user);

  const showToast = (message: string) => {
    toast.success(message, {
      duration: 3000,
    });
  };

  const showToast2=( message :string) =>{
    toast.error(message, {
      duration: 3000,
    });
  }

  const handleAddToCart = (el: any) => {
    // Check if the item is already in the cart
    const isItemInCart = cartItems.some(
      (cartItem: any) => cartItem.title === el.title
    );

    if (isItemInCart) {
      showToast2("Item is already added to the cart!");
    } else {
      addToCart(el);
      showToast("Item added successfully!");
    }
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

        <div className="w-full grid md:grid-cols-4 grid-cols-2 gap-3">
          {ShoeData?.map((el, index) => (
            <div key={index}>
              <ShoeBox
                img={el.images.portraitURL}
                name={el.title}
                toptext="Saved upto 2k"
                price={el.price.currentPrice}
              />

              <div className="flex items-center -mt-3 gap-x-3">
                <button className="md:w-[200px] whitespace-normal w-full py-2 bg-[#3994ba] text-white rounded-md text-[15px] text-center cursor-pointer">
                  Buy now
                </button>
                <button
                  onClick={() => handleAddToCart(el)}
                  className="md:w-[200px] w-full py-2 border text-green-900 rounded-md text-[15px] text-center cursor-pointer"
                >
                  Add to cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Toaster position="top-center" />
    </>
  );
};

export default Shoe;
