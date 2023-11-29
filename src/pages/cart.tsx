import { MethodBox } from "@/components/home/MethodBox";
import { BoxData } from "@/components/home/data/ImgData";
import React from "react";

const cart = () => {
  return (
    <div className="md:w-[80%] h-fit border mx-auto ">
      <h2>Your Items</h2>

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
  );
};

export default cart;
