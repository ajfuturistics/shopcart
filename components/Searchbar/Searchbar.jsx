import React from "react";
import { FiSearch } from "react-icons/fi";

const Searchbar = () => {
  return (
    <div className="w-full h-full bg-slate-100 rounded-full flex justify-center items-center gap-2 px-4 py-1">
      <input
        type="text"
        placeholder="Search Product"
        className="w-full bg-slate-100 outline-none"
      />{" "}
      <FiSearch size={18} />
    </div>
  );
};

export default Searchbar;
