import Image from "next/image";
import React, { useEffect, useState } from "react";
import { CheckBox } from "./CheckBox";
import { ShoeData } from "../home/shoe";

export const Check = (props: { iTemid: any }) => {
  const [item, setItem] = useState([]);

 
  useEffect(() => {
    const filteredItems:any = ShoeData.filter((shoe) => shoe.id === props.iTemid);
    setItem(filteredItems);
  }, [props.iTemid]);

  console.log("item", item);
  item.map((el: any) => {
    console.log(el.images);
  });

  return (
    <div className="container md:max-w-[1280px] w-full mx-auto">
      {item.map((el: any) => {
        return (
          <div className="md:w-full mx-auto relative w-full h-full px-2 py-2 md:flex gap-5">
            <div className="md:w-full w-full h-full ">
              <h1 className="md:text-[45px] text-[20px] text-green-900">
                {el.title}
              </h1>
              <p className="md:text-[18px] text-gray-500">{el.subtitle}</p>
              <div className="md:flex md:mt-5 mt-3 pb-5 gap-4">
                <div className="md:w-full w-[100%] cursor-pointer h-[300px] md:h-[400px] relative rounded-sm">
                  <Image
                    src={el.images.portraitURL}
                    alt="product-img"
                    fill
                    className="object-cover rounded-sm"
                  />
                </div>
                <div className="md:w-full md:mt-0 mt-4 w-[100%] cursor-pointer h-[300px] md:h-[400px] relative rounded-sm">
                  <Image
                    src={el.images.squarishURL}
                    alt="product-img"
                    fill
                    className="object-cover rounded-sm"
                  />
                </div>
              </div>
              <div className="md:flex hidden items-center justify-around">
                <p className="text-[14px] text-green-900">MATERIAL</p>
                <div>
                  <p className="text-[14px] text-green-900">COLOR</p>
                  <p className="text-[14px] text-green-900">
                    {" "}
                    {el.colorDescription}
                  </p>
                </div>
              </div>

              <div className="md:mt-10 w-full md:w-fit hit-fit md:py-6 py-3 px-2 border-b-2">
                <p className="text-[14px] text-gray-500 mt-5">
                  Color Description
                </p>
                <p className="text-[16px] py-2 md:py-4 text-green-900">
                  {el.colorDescription}
                </p>
              </div>

              <p className="text-[13px] py-2 md:py-4 text-green-900">
                LOCATION
              </p>
              <p>Jabalpur, Madhya Pradesh 482002 India</p>
              <div className="w-full h-[200px] md:h-[300px] border mt-6 rounded-md">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1922908.9022786145!2d77.5769962465013!3d12.965534649859961!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670c9b44e6d%3A0xf8dfc3e8517e4fe0!2sBengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1698484505877!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: "0" }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>

            <div className="md:w-fit w-full h-fit md:h-screen ">
              <CheckBox price={el.price.currentPrice} />
            </div>
          </div>
        );
      })}
    </div>
  );
};
