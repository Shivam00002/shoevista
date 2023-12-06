import React, { useState } from "react";

export const SearchBox = ({ onSearch }: any) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchClick = () => {
    onSearch(searchQuery);
  };

  return (
    <div className="flex items-center gap-1">
      <input
        type="text"
        placeholder="Search"
        value={searchQuery}
        onChange={handleInputChange}
        className="md:w-[450px] md:h-[30px] px-2 border rounded-lg border-[#3994ba]  "
      />
      <button
        onClick={handleSearchClick}
        className="px-3 py-[2px] border rounded-lg bg-[#3994ba] text-white hover:bg-black"
      >
        Search
      </button>
    </div>
  );
};
