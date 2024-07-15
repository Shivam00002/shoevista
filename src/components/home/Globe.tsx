import Image from "next/image";
import React from "react";

export const Globe = () => {
  return (
    <>
      <div className="w-full h-full  ">
        <div className="md:w-full w-full h-full mx-auto block  md:flex   md:py-10   ">
          <div className="md:w-[50%] w-full  h-fit md:h-[480px] px-4 ">
            <h2 className="md:text-[37px] text-[24px] text-[#3994ba] md:leading-[48px]  ">
              Step into Style
              <br />
              with Expert Guidance from
              <br />
              <span className="text-[#3994ba]">fashion enthusiasts</span>{" "}
            </h2>
            <div>
              <div className="flex md:w-fit w-full md:px-2 bg-[#bcedfd] rounded-2xl md:h-24 h-20 items-center   mt-4  justify-center md:py-6 md:mt-10">
                <div className="border-r-2 border-white px-2 md:px-5 h-fit  ">
                  <h1 className="md:text-[27px] text-lg  text-[#3994ba] ">
                    1K
                  </h1>{" "}
                  <p className="md:text-[16px] text-sm text-[#3994ba]">
                    shoe styles
                  </p>{" "}
                </div>

                <div className="border-r-2 border-white px-2 md:px-5 h-fit  ">
                  <h1 className="md:text-[27px] text-lg  text-[#3994ba]">
                    500
                  </h1>{" "}
                  <p className="md:text-[16px] text-sm text-[#3994ba]">
                    shoe designers
                  </p>{" "}
                </div>

                <div className="border-r-2 border-white px-2  md:px-5 h-fit  ">
                  <h1 className="md:text-[27px] text-lg  text-[#3994ba] ">
                    20
                  </h1>{" "}
                  <p className="md:text-[16px] text-sm text-[#3994ba]">
                    countries
                  </p>{" "}
                </div>
                <div className=" md:px-5 h-fit px-2   ">
                  <h1 className="md:text-[27px] text-lg  text-[#3994ba] ">
                    5K+
                  </h1>{" "}
                  <p className="md:text-[16px] text-sm text-[#3994ba] whitespace-pre">
                    happy feet
                  </p>{" "}
                </div>
              </div>
            </div>

            <div className="w-fit bg-[#3994ba] text-white px-6 py-3 md:mt-10  mt-4 rounded-full md:text-[17px] text-[14px]  cursor-pointer">
              Find your perfect pair{" "}
            </div>
          </div>

          <div className=" md:w-[50%] relative   w-full  hidden   md:grid place-content-center ">
            <div className="relative w-full h-full z-20">
              <div className="w-[120px] h-[120px]  rounded-full  absolute top-[68px]  -left-[114px]">
                <div className="">
                  <div className="w-[100px] h-[100px] hidden md:flex border rounded-full right-[-28px] relative ml-5">
                    <Image
                      src="https://thumbs.dreamstime.com/b/walking-world-human-39612159.jpg"
                      alt="small-pro-pic"
                      fill
                      className="rounded-full object-cover"
                    />
                    <div className=" w-[200px]  top-[274px]  p-1 bg-white  shadow-lg z-30 text-sm md:mb-0 mb-7 w  px-2 absolute rounded-lg ">
                      <p className="text-[13px]  leading-[15px] ">
                        I am excels in crafting efficient, user-centric web
                        applications.
                      </p>
                    </div>
                  </div>
                </div>

                <div className=" w-[165px] h-fit  px-2  py-1 hidden md:flex bg-white shadow-lg  text-black text-sm  top-[84px] rounded-lg absolute  right-[-53px]">
                  <p className="text-[13px]  leading-[15px] ">
                    Efficiency and elegance define my{" "}
                    <span className="text-[#4181ac]"> web mastery.</span>
                  </p>
                </div>
              </div>
            </div>

            <div className="md:w-[540px]  md:h-[540px]   w-[350px] h-[350px] left-[20px] md:left-auto   rounded-full flex items-center border-[#390765e8]  absolute  border  rotate md:right-[27px] top-[282px] md:top-[0px]">
              <div className=" rounded-full absolute -top-0 right-0 md:translate-x-[-169px] translate-x-[-225px] ">
                <div className="md:w-7 md:h-7 w-6 h-6 relative rounded-full ">
                  {" "}
                  <Image
                    src="https://e0.pxfuel.com/wallpapers/834/260/desktop-wallpaper-air-jordan-logo-phone.jpg"
                    alt="react-logo-img"
                    fill
                    className="rounded-full object-cover"
                  />
                </div>
              </div>
            </div>

            <div className=" md:px-10 md:py-10 border border-[#390765e8] mx-auto rotate rounded-full mt-[-109px] md:left-[26px]   relative top-[85px]  w-[18em] h-[18em] md:w-[28em] md:h-[28em]">
              <div className="  rounded-full absolute md:translate-x-[-48px]   right-[17px]">
                <div className="md:w-7 md:h-7 w-6 h-6 relative rounded-full ">
                  {" "}
                  <Image
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTp0oBrkzoPAizBZ2_4jOFMeX1P-SlCjQKjNC8sPHQ36EtkHMcIErANQYNeTvkH6BRXeEE&usqp=CAU"
                    alt="javaScript-logo"
                    fill
                    className="rounded-full object-cover"
                  />
                </div>
              </div>
            </div>

            <div className="   rounded-full absolute top-[340px] right-20 md:top-[49px] md:right-[22px]">
              <div className="relative md:w-[24em] md:h-[24em] md:top-[25px] md:right-[74px] w-[230px] h-[230px]">
                <Image
                  src="https://thumbs.dreamstime.com/b/old-shoe-work-5823435.jpg"
                  className="rounded-full object-cover"
                  fill
                  alt="profile-img"
                />
              </div>

              <div className="md:w-11 md:h-11 w-6 h-6  md:left-[-57px] rounded-full  translate-x-[0px]  absolute right-[210px]  top-[145px] md:top-[305px]">
                <div className="w-full h-full rounded-full relative">
                  <Image
                    src="https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/f655b4fb-35e9-4a63-acf8-c02dfd78cfda/zoom-fly-5-road-running-shoes-lkx7Zp.png"
                    fill
                    alt="indian-flag"
                    className="rounded-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
