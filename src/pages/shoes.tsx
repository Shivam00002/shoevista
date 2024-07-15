import { Toaster, toast } from "react-hot-toast";
import React, { useEffect, useState } from "react";
import { useCartStore } from "@/lib/zustand";
import { Navbar } from "@/components/navbar/Navbar";
import { ShoeBox } from "@/components/shoes/shoebox";
import MyuseStore from "@/lib/zustand";
import { ShoeData } from "../components/home/shoe";
import { Filter } from "@/components/filter/Filter";
import { useRouter } from "next/router";

const Shoe = () => {
  const { cartItems, addToCart }: any = useCartStore();
  const user = MyuseStore((state) => state.user);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredShoes, setFilteredShoes] = useState(ShoeData);
  const router = useRouter();

  console.log("data", filteredShoes);

  const handleBuyNow = (id: any) => {
    console.log("myId", id);
    router.push(`Checkout/${id}`);
  };

  const showToast = (message: string) => {
    toast.success(message, {
      duration: 3000,
    });
  };

  const showToast2 = (message: string) => {
    toast.error(message, {
      duration: 3000,
    });
  };

  const handleAddToCart = (el: any) => {
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

  const handleSearch = (query: any) => {
    setSearchQuery(String(query));
  };

  useEffect(() => {
    //  console.log("SearchQuery:", searchQuery);
    const filteredResults = ShoeData.filter((shoe) =>
      shoe.title.toLowerCase().includes(String(searchQuery).toLowerCase())
    );
    //   console.log("FilteredResults:", filteredResults);
    setFilteredShoes(filteredResults);
  }, [searchQuery]);

  return (
    <>
      <Navbar
        user={user}
        userName={user?.displayName}
        imgUrl={user?.photoURL}
        onSearch={handleSearch}
      />
      <div className="md:w-[80%]  mt-14 md:flex relative  gap-2 w-full mx-auto ">
        <div className="w-[20%] hidden md:block sticky top-0 h-screen border">
          <Filter />
        </div>

        <div className="w-full grid md:grid-cols-4 grid-cols-2 gap-3">
          {filteredShoes?.map((el, index) => (
            <div key={index}>
              <ShoeBox
                id={el.id}
                img={el.images.portraitURL}
                name={el.title}
                toptext="Saved upto 2k"
                price={el.price.currentPrice}
              />

              <div className="flex w items-center -mt-3 gap-x-3">
                <button
                  className="md:w-[200px]  md:px-0 px-2  whitespace-normal w-fit py-2 bg-[#3994ba] text-white rounded-md text-[15px] text-center cursor-pointer"
                  onClick={() => handleBuyNow(el.id)}
                >
                  Buy now
                </button>
                <button
                  onClick={() => handleAddToCart(el)}
                  className="md:w-[200px] md:px-0 px-2 w-fit py-2 border text-green-900 rounded-md text-[15px] text-center cursor-pointer"
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
