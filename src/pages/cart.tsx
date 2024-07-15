import { Toaster, toast } from "react-hot-toast";
import React from "react";
import { useCartStore } from "@/lib/zustand";
import MyuseStore from "@/lib/zustand";
import { Navbar } from "@/components/navbar/Navbar";
import { ShoeBox } from "@/components/shoes/shoebox";
import { useRouter } from "next/router";

const Cart = () => {
  const { cartItems, removeFromCart }: any = useCartStore();
  const user = MyuseStore((state) => state.user);
  const router = useRouter();

  const handleNavigate = (id: any) => {
    router.push(`checkout/${id}`);
  };

  const handleDelete = (index: number) => {
    removeFromCart(index);
    showToast();
  };

  const showToast = () => {
    toast.success("Item deleted successfully!", {
      duration: 3000, // milliseconds
    });
  };

  return (
    <>
      <Navbar
        user={user}
        userName={user?.displayName}
        imgUrl={user?.photoURL}
      />
      <div className="md:max-w-[1280px] w-full h-fit mt-16  mx-auto ">
        {cartItems.length === 0 ? (
          <h2 className="md:text-[17px] py-2 px-1 text-sm text-red-500 font-semibold">
            {" "}
            Please add your choice{" "}
          </h2>
        ) : (
          <h2 className="md:text-[17px] py-2 px-1 text-sm text-green-500 font-semibold">
            {" "}
            Your Items{" "}
          </h2>
        )}

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
                <button
                  onClick={() => handleNavigate(el.id)}
                  className="md:w-[200px] whitespace-normal w-full py-2 bg-[#3994ba] text-white rounded-md text-[15px] text-center cursor-pointer"
                >
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
      <Toaster position="top-center" />
    </>
  );
};

export default Cart;
