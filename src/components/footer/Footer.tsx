import React, { useRef } from "react";
import toast from "react-hot-toast";
import { MdOutlineMail } from "react-icons/md";
import { MdAddIcCall } from "react-icons/md";
import { CiFacebook } from "react-icons/ci";
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";



const Footer = () => {
  return (
    <div>
      <div className="w-full md:px-10 md:mt-5 px-4 md:py-10 py-6 h-fit md:h-[400px] bg-gray-700">
        <div className="flex md:px-1 items-center gap-4">
          <h2 className="font-semibold md:text-[25px]  text-[20px] text-white">
            With us stylish and sustainable shoe shopping.
          </h2>
        </div>

        <div className="grid md:grid-cols-3 grid-cols-1 w-full gap-5 md:gap-9 py-4  mt-5 md:mt-10 ">
          <div>
            <p className="font-semibold text-white">Address</p>
            <p className="text-[#3994ba] text-sm">Contact us</p>


            <p className="text-white  text-sm">2, 1st Floor, Road No 7,</p>
            <p className="text-white  text-sm">118, Vethadhri Nagar</p>
            <p className="text-white  text-sm">Chengicherla</p>
            <p className="text-white  text-sm">Hyderabad </p>
            <p className="text-white  text-sm">Telangana</p>
            <p className="text-white  text-sm">India</p>
          </div>

          <div>
            <p className="font-semibold text-white"> Shoevista</p>
            <p className="text-[#3994ba] text-sm">Services</p>

            <p className="text-white  text-sm"> Web Sites development</p>
            <p className="text-white  text-sm">SaaS Apps development</p>
            <p className="text-white  text-sm">Machine Learning Apps</p>
            <p className="text-white  text-sm">Artificial Intelligence ,</p>
            <p className="text-white  text-sm">Software development</p>
            <p className="text-white  text-sm">App development</p>
          </div>

          <div className="md:-mt-20 ">
            <p className="font-semibold text-white md:text-[18px]">
              Subscribe to our newsletter
            </p>

            <form>
              <input
                type="email"
                placeholder="Email Address"
                className=" border-2 rounded-md md:w-[250px] md:mt-4 mt-3 w-full h-[35px] px-2"
              />

              <button className="    md:w-[250px] w-full  md:mt-5 mt-5  mx-auto px-4  h-fit md:text-[17px] py-3  md:py-1 bg-[#3994ba] text-white font-semibold whitespace-nowrap rounded-lg">
                Subscribe
              </button>
            </form>

            <p className="font-semibold mt-5 text-[17px] text-white">
              Reach out to us
            </p>
            <div className="flex items-center  mt-2 gap-2">
              <MdOutlineMail size={20} color="white" />
              <p className="text-sm text-white">shoevista@gamil.com</p>
            </div>

            <div className="flex items-center  mt-2 gap-2">
              <MdAddIcCall size={20} color="white" />
              <p className="text-sm text-white">+ 91-12345678</p>
            </div>
          </div>
        </div>
      </div>
      <div className="h-[50px] w-full py-5  hidden bg-[#edfbed] md:flex items-center justify-around">
        <CiFacebook size={20} />
        <FaInstagram size={20} />
        <FaTwitter size={20} />
        <FaLinkedin size={20} />
        <p className="text-sm font-semibold">
          2024 Shoevista All Rights Reserved.
        </p>
        <p className="text-sm font-semibold">Privacy Policy</p>
        <p className="text-sm font-semibold">Cookie Policy</p>
        <p className="text-sm font-semibold">Support</p>
      </div>
    </div>
  );
};

export default Footer;
