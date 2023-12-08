import React from "react";

export const InputBox = ({ color }: any) => {
  return (
    <div className="flex items-center  py-[2px] gap-2">
      <input type="checkbox" className="border" />
      <p>{color}</p>
    </div>
  );
};
