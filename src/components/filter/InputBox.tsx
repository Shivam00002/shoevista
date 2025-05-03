import React, { useState } from "react";

export const InputBox = ({ color }: any) => {
   const [ text ,setText] = useState([])
   
  const handleClick = () =>{
    console.log("Ram" , text)
  }
   const handleChange = (e:any)=>{
   
   }

  return (
    <div className="flex items-center  py-[2px] gap-2">
      <input type="checkbox " className="border" />
      <p>{color}</p>
    </div>
  );
};
