import Image from "next/image";
import React from "react";
import search from "../../public/search-normal.png";
import ButtonComponent from "./ButtonComponent";
import FirstComp from "./FirstComp";
import SecondComp from "./SecondComp";
const Content = () => {
  return (
    <div className="mt-4 px-4 pb-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2 bg-dark50 border border-dark100 py-2 rounded-md w-[65%] px-2">
          <Image src={search} alt="search-png" className="w-4" />
          <input
            type="text"
            placeholder="Try searching 'Fullstack backend developer'"
            className="bg-transparent w-full text-textclr outline-none"
          />
        </div>
        <div className="flex items-center bg-dark50 border border-dark100 px-1 py-1 rounded-md gap-1 cursor-pointer">
          <button className="button px-4 py-2 rounded-md">Full Time</button>
          Freelance
        </div>
      </div>
      <ButtonComponent />
      <FirstComp />
      <SecondComp />
    </div>
  );
};

export default Content;
