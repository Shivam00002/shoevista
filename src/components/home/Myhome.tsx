"use client";
import Image from "next/image";
import React, { useEffect } from "react";
import Link from "next/link";
import { useState } from "react";
import { Globe } from "./Globe";
import { PlatformBox } from "./PlatformBox";
import { SolutionsBox } from "./SolutionsBox";
import { MethodBox } from "./MethodBox";
import TextChange from "./TextChange";

import { BoxData, PlateformImages, Solutions } from "./data/ImgData";
import { BsArrowRight } from "react-icons/Bs";

export const Myhome = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [showDropdown, setShowDropdown] = useState(false);
  const Platforms = ["MENS", "WOMENS", "KIDS", "ATHLETIC", "CASUAL"];

  const NavigationTab = [
    {
      title: "All Shoes",
      content: [
        "Running Shoes",
        "Casual Shoes",
        "Formal Shoes",
        "Sneakers",
        "Sandals",
        "Boots",
      ],
    },
    {
      title: "Men's Shoes",
      content: [
        "Running Shoes",
        "Casual Shoes",
        "Formal Shoes",
        "Sneakers",
        "Boots",
      ],
    },
    {
      title: "Women's Shoes",
      content: [
        "Running Shoes",
        "Casual Shoes",
        "Formal Shoes",
        "Sneakers",
        "Sandals",
        "Boots",
      ],
    },
    {
      title: "Sports Shoes",
      content: ["Running Shoes", "Sneakers"],
    },
    {
      title: "Sandals",
      content: ["Casual Sandals", "Formal Sandals", "Sport Sandals"],
    },
    {
      title: "Boots",
      content: ["Ankle Boots", "Knee-High Boots", "Snow Boots"],
    },
    {
      title: "Slippers",
      content: ["Indoor Slippers", "Outdoor Slippers"],
    },
    {
      title: "Accessories",
      content: ["Shoe Care Products", "Insoles", "Laces"],
    },
  ];

  const handleSelect = (index: React.SetStateAction<number>) => {
    setActiveTab(index);
  };

  const handleMouseEnter = () => {
    setShowDropdown(true);
  };

  const handleMouseLeave = () => {
    setShowDropdown(false);
  };

  return (
    <>
      <div className="w-full px-4 md:h-[730px] mt-14 h-[550px] relative ">
        <div className="w-full md:flex justify-around items-center px-2 h-10  shadow-lg  hidden absolute z-10 left-0 top-0 ">
          {NavigationTab?.map(({ content, title }, index) => {
            return (
              <div className="relative group">
                <p
                  className="cursor-pointer text-[#4eb9e7] font-semibold "
                  key={index}
                >
                  {title}
                </p>
                <div className="absolute   px-5 hover:z-10  py-1 rounded-sm text-center bg-white h-fit hidden group-hover:block ">
                  {content.map((text, i) => (
                    <p
                      key={i}
                      className="hover:text-[#4eb9e7] cursor-pointer py-[2px] whitespace-nowrap"
                    >
                      {text}
                    </p>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
        <Image
          src="https://images.pexels.com/photos/48262/pexels-photo-48262.jpeg?cs=srgb&dl=pexels-kaique-rocha-48262.jpg&fm=jpg"
          alt="bg-img"
          fill
          className="object-cover"
          loading="lazy"
        />
        <div className="md:w-[610px] w-[95%] px-8 py-8  bg-white rounded-2xl absolute bottom-10 md:bottom-16 left-[10px] md:left-[140px] h-fit md:h-[420px] mx-auto z-10 ">
          <div className="flex items-center absolute z-1 left-0 md:-top-16  -top-10">
            <button className="w-fit py-4 md:py-7 px-4 md:px-6 text-[13px]  md:text-[17px] bg-white rounded-t-[14px]">
              Remove
            </button>
            <button className="w-fit py-4 md:py-7 px-4 md:px-6   text-[13px]  md:text-[17px] bg-white rounded-t-[14px]">
              Buy
            </button>
            <button className="w-fit py-4 md:py-7 px-4 md:px-6  text-[13px]  md:text-[17px] bg-white rounded-t-[14px]">
              Our Impact
            </button>
          </div>

          <h1 className="md:text-[40px] text-[26px] text-[#3994ba] md:leading-[48px]  ">
            The premier{" "}
            <span className="text-green-500 border-b-2 border-green-500">
              destination
            </span>{" "}
            for stylish and sustainable shoe shopping
          </h1>

          <p className="md:text-[20px] text-[14px] mt-10 md:mt-16 font-[530px] text-gray-500">
            Elevate your shoe game sustainably – Discover, recycle, or refresh
            your footwear collection, all at zero cost.
          </p>

          <div className="md:flex  gap-16 items-center w-full h-fit">
            <div className="w-fit cursor-pointer h-fit py-2 px-6  rounded-md mt-8 md:mt-8 bg-[#54c1f0] hover:bg-[#54c1f0]  flex items-center gap-2">
              <p className="md:text-[14px] text-[12px] whitespace-nowrap">
                Get started now{" "}
              </p>{" "}
              <BsArrowRight color="black" />
            </div>
            <p className="md:text-[14px] text-[11px] cursor-pointer md:border-b-[1px] text-gray-500 mt-4 md:mt-8">
              Discover our removal solutinons
            </p>
          </div>
        </div>
      </div>

      <Globe />

      <div className="md:w-full  w-full h-fit py-4  px-2 mx-auto">
        <h1 className="md:text-[30px] text-[20px] text-[#3994ba]">
          Available now on the platform
        </h1>

        <div className=" mt-4 grid md:grid-cols-6 gap-3 grid-cols-3">
          {Platforms?.map((el, index) => {
            return (
              <div
                key={index}
                onClick={() => handleSelect(index)}
                className={`md:w-[200px] w-[100px] text-gray-600 text-center cursor-pointer py-[1px] transition ease-in-out duration-150 text-[11px] rounded-md md:text-[13px] ${
                  activeTab === index ? "bg-[#9dd6ef]" : ""
                }`}
              >
                {el}
              </div>
            );
          })}
        </div>
        <div className=" grid md:grid-cols-4 grid-cols-2 mt-3 gap-3">
          {PlateformImages?.map((el, index) => {
            return (
              <Link href={"/shoes"}>
                <PlatformBox
                  key={index}
                  img={el.img}
                  name={el.name}
                  toptext="Saved upto 2k"
                />
              </Link>
            );
          })}
        </div>
        <div className="w-full  mt-10 md:mt-20 h-[200px] px-2 md:px-20  grid place-content-center  bg-[#E7F2F0]">
          <div className="md:flex items-center   md:gap-x-52  justify-between">
            <div>
              <h2 className="md:text-[30px]  text-[#3994ba]">
                Have items you want to get rid of?
              </h2>
              <p className="md:text-[18px] text-[14px] text-[#3994ba]">
                Recycle them through Relieve and see how easy and quick it is to
                turn unwanted items into positive climate impact.
              </p>
            </div>
            <div className="w-fit h-fit px-4 py-2  mt-4 cursor-pointer bg-[#3994ba] text-white flex items-center gap-2  rounded-md ">
              <p className="whitespace-nowrap md:text-[13px]  text-[12px] ">
                Start now
              </p>{" "}
              <BsArrowRight color="white" />
            </div>
          </div>
        </div>
      </div>
      <div className="w-full mt-10  md:mt-20 md:h-[600px] h-[600px] relative">
        <Image
          fill
          src="https://wallpapers.com/images/hd/shoes-background-jigxiq43xd9wpyul.jpg"
          alt="bg-img"
          loading="lazy"
          className="object-cover"
        />
        <div className="absolute top-16 md:left-[130px] w-full md:w-[85%] h-fit">
          <p className="md:text-[16px] px-2 text-[13px] text-white">
            EXPLORE OUR COLLECTION
          </p>
          <h1 className="md:text-[60px] px-2 text-[26px] md:leading-[80px] text-white">
            Step into style and sustainability,
            <span className="border-b-2">where fashion meets conscience.</span>
            Join us in reducing the environmental impact – one step at a time.
          </h1>
          <div className="md:flex px-2 mt-10 items-center justify-between w-full h-fit">
            <p className="md:text-[20px] text-[14px] text-white">
              Ready to step into a greener world? Find your perfect pair today.
            </p>

            <div className="w-fit cursor-pointer h-fit py-2 px-3 md:px-6 rounded-md mt-8 bg-[#54c1f0] hover:bg-[#54c1f0] flex items-center gap-2">
              <p className="md:text-[14px] text-[12px]">Shop Now</p>
              <BsArrowRight color="black" />
            </div>
          </div>
        </div>
      </div>

      <div className="md:w-full w-full px-2 mx-auto mt-20">
        <div className="w-full  mt-10 md:mt-20 h-[200px] px-2 md:px-20  grid place-content-center  bg-[#E7F2F0]">
          <div className="md:flex items-center   md:gap-x-52  justify-between">
            <div>
              <h2 className="md:text-[30px]  text-[#3994ba]">
                Circularity matters
              </h2>
              <p className="md:text-[18px] text-[14px] text-[#3994ba]">
                Creating more circular economies are essential to the future of
                business, and can be the key to drastically lowering corporate
                carbon emissions… as well as costs
              </p>
            </div>
            <div className="w-fit h-fit px-4 py-2  mt-4 cursor-pointer bg-[#54c1f0] text-white  flex items-center gap-2  rounded-md ">
              <p className="whitespace-nowrap md:text-[13px]  text-[12px] ">
                Read more
              </p>{" "}
              <BsArrowRight color="white" />
            </div>
          </div>
        </div>

        <h1 className="md:text-[50px] text-[24px] mt-10 md:mt-20 text-[#3994ba]">
          Discover collection of Shoes
        </h1>
        <div className=" grid md:grid-cols-4 grid-cols-2 mt-3 gap-3">
          {Solutions?.map((el, index) => {
            return (
              <SolutionsBox
                key={index}
                img={el.img}
                work={el.work}
                description={el.description}
              />
            );
          })}
        </div>

        <div className="w-full mt-10 md:mt-20  py-2 h-fit md:h-[200px] px-2 md:px-20 border border-gray-600  grid place-content-center  ">
          <div className="md:flex items-center   md:gap-x-52  justify-between">
            <div>
              <h2 className="md:text-[30px]  text-[#3994ba]">
                Circularity matters
              </h2>
              <p className="md:text-[18px] text-[14px] text-[#3994ba]">
                Creating more circular economies are essential to the future of
                business, and can be the key to drastically lowering corporate
                carbon emissions… as well as costs
              </p>
            </div>
            <div className="w-fit h-fit px-4 py-2  mt-4 cursor-pointer bg-[#3994ba] text-white  flex items-center gap-2  rounded-md ">
              <p className="whitespace-nowrap md:text-[13px]  text-[12px] ">
                Read more
              </p>{" "}
              <BsArrowRight color="white" />
            </div>
          </div>
        </div>

        <div className="md:mt-20 mt-10">
          <h1 className="md:text-[50px] text-[24px] text-[#3994ba] ">
            Our green removal methods
          </h1>
          <div className="grid md:grid-cols-4 grid-cols-2 gap-3 mt-4 w-full h-fit">
            {BoxData?.map((el, index) => {
              return (
                <MethodBox
                  key={index}
                  icon={el.imgSrc}
                  detail={el.detail}
                  work={el.work}
                />
              );
            })}
          </div>
        </div>

        <TextChange />

        <div className="md:mt-20 mt-10">
          <h1 className="md:text-[34px] text-[18px] text-[#3994ba]">
            Active campaigns
          </h1>
          <div className="w-full gap-7 mt-4 grid-cols-1 grid md:grid-cols-2">
            <div className="w-full h-fit">
              <div className="w-full h-[300px] md:h-[470px] relative rounded-sm">
                <Image
                  src="https://e0.pxfuel.com/wallpapers/340/500/desktop-wallpaper-the-new-black-red-adidas-messi-2015-2016-football.jpg"
                  alt="img"
                  fill
                  loading="lazy"
                  className="object-cover rounded-sm"
                />
              </div>
              <div className="flex mt-4 items-center gap-4">
                <div className="md:w-[50px] w-[40px] h-[40px] md:h-[50px] relative rounded-full">
                  <Image
                    src="https://www.relievefurniture.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Frelieve-image-cloud-store%2Fimage%2Fupload%2Fv1690900938%2Fcompany-logo%2F9c8934f5-719c-4af9-bebc-4347ecdfc725.png&w=128&q=75"
                    alt="img"
                    fill
                    loading="lazy"
                    className="object-cover rounded-full"
                  />
                </div>
                <h3 className="md:text-[20px] text-[14px] text-[#3994ba]">
                  Relivele Showroom{" "}
                </h3>
              </div>
            </div>

            <div className="w-full h-fit">
              <div className="w-full h-[300px] md:h-[470px] relative rounded-sm">
                <Image
                  src="https://rare-gallery.com/uploads/posts/563628-Shoes-Sports.jpg"
                  alt="img"
                  fill
                  loading="lazy"
                  className="object-cover rounded-sm"
                />
              </div>
              <div className="flex mt-4 items-center gap-4">
                <div className="md:w-[50px] w-[40px] h-[40px] md:h-[50px]  relative rounded-full">
                  <Image
                    src="https://www.relievefurniture.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Frelieve-image-cloud-store%2Fimage%2Fupload%2Fv1696511495%2Fcompany-logo%2Fa071e84a-5388-402c-813a-6d39cdf614d4.png&w=128&q=75"
                    alt="img"
                    fill
                    loading="lazy"
                    className="object-cover rounded-full"
                  />
                </div>
                <h3 className="md:text-[20px] text-[14px] text-[#3994ba]">
                  ING{" "}
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
