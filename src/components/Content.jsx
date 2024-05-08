import Image from "next/image";
import React from "react";
import search from "../../public/search-normal.png";
import filter from "../../public/filter.png";
import ButtonComponent from "./ButtonComponent";
import FirstComp from "./FirstComp";
import SecondComp from "./SecondComp";
const Content = () => {
  return (
    <div className="mt-4  pt-6 md:px-4  h-full">
      <div className="flex items-center justify-between ">
        <div className="md:flex items-center gap-2 bg-dark50 border border-dark100 py-2 rounded-md w-[65%] px-2 hidden">
          <Image src={search} alt="search-png" className="w-4" />
          <input
            type="text"
            placeholder="Try searching 'Fullstack backend developer'"
            className="bg-transparent w-full text-textclr outline-none"
          />
        </div>
        <div className="md:flex items-center bg-dark50 border border-dark100 px-1 py-1 rounded-md gap-1 cursor-pointer hidden ">
          <button className="button px-4 py-2 rounded-md">Full Time</button>
          Freelance
        </div>
        <div className="container mx-auto flex items-center justify-between md:hidden">
          <div className="flex items-center bg-dark50 border border-dark100 px-1 py-1 rounded-md gap-1 cursor-pointer">
            <button className="button px-4 py-2 rounded-md">Full Time</button>
            Freelance
          </div>
          <div className="border border-dark100 rounded-md p-2 block md:hidden">
            <Image src={filter} alt="filter-icon" />
          </div>
        </div>
      </div>
      <ButtonComponent />
      <FirstComp />
      <SecondComp />
    </div>
  );
};

export default Content;
