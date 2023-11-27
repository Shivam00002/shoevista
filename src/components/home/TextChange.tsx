import Image from "next/image";
import { useState } from "react";
import { BsArrowLeft, BsArrowRight } from "react-icons/Bs";

const TextChange = () => {
  const [text, setText] = useState(0);
  const Names = [
    {
      text: "The final collection went well. The Relieve process was very smooth, everything was great and I’m very glad we were able to support and partner with yourselves in this way. We’ll have some more furniture in the coming months so we’ll reach out as soon as we can.",
      img: "https://www.relievefurniture.com/_next/image?url=%2Fstatic%2Fimages%2Fv3%2Fsothebys-logo.png&w=1080&q=75",
      paratext: "  MAIRIE-PAULE FASSIN OFFICE MANAGER",
    },
    {
      text: "Handle the sustainable removal of a few unwanted items, or even an entire office, at zero cost, all by yourself. Hassle free removals that work at your own pace.",
      img: "https://logos-world.net/wp-content/uploads/2022/01/iPhone-Logo-700x394.png",
      paratext: "Removal methods",
    },
    {
      text: "Embracing flexible working? Create a private, branded portal just for your employees so they can have access to their own office furniture for home.",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRi3ukKgl52q141INMTnBNTuCM4vJvIJELNeA&usqp=CAU",
      paratext: "Circularity matters",
    },
  ];

  const handlePrevClick = () => {
    if (text > 0) {
      setText(text - 1);
    }
  };

  const handleNextClick = () => {
    if (text < Names.length - 1) {
      setText(text + 1);
    }
  };

  return (
    <div className="w-full mt-10 md:mt-20 md:h-[400px] h-[300px] relative  items-center gap-5 flex justify-around">
      <div
        onClick={handlePrevClick}
        className="md:w-[200px] w-fit absolute gap-2 left-1 bottom-1 h-fit px-4 md:px-2 py-2 cursor-pointer border border-gray-400  flex items-center justify-around rounded-md "
      >
        <BsArrowLeft color="black" /> <p>Prev</p>
      </div>
      <div className="w-full text-center h-fit ">
        <p className="md:text-[38px] text-[19px] leading-[25px] transition-all ease-linear     md:leading-[50px] text-[#3994ba]">
          {Names[text].text}
        </p>
        <div className=" mt-10  mx-auto w-[200px]  h-fit">
          <div className="w-[100px] mx-auto h-[50px] relative">
            <Image
              fill
              src={Names[text].img}
              alt="img-logo"
              className="object-contain"
            />
          </div>
          <div className="w-[100px] h-[1px] bg-black mx-auto  "></div>
          <p className="md:text-[12px] text-[10px] text-[#3994ba]">
            {Names[text].paratext}
          </p>
        </div>
      </div>
      <div
        onClick={handleNextClick}
        className="md:w-[200px] gap-2 w-fit absolute bottom-1 right-0 h-fit px-4 md:px-2 py-2 cursor-pointer border border-gray-400 flex items-center justify-around rounded-md "
      >
        <p>Next</p> <BsArrowRight color="black" />
      </div>
    </div>
  );
};

export default TextChange;
