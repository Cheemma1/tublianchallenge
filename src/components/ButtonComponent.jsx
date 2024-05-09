import React from "react";
import filter from "../../public/filter.png";
import Image from "next/image";

const ButtonComponent = () => {
  const btn = [
    {
      text: "Frontend Developer",
    },
    {
      text: "Backend Developer",
    },
    {
      text: "Software Developer",
    },
  ];
  return (
    <div className="flex items-center justify-between my-4 lg:px-4  container mx-auto overflow-x-scroll  scrollbar-hide">
      <div className="flex items-center gap-4">
        <button className="box  py-2 px-8 ">Discover</button>
        {/* <div className="flex items-center w-full flex-row"> */}
        {btn.map((btns, index) => (
          <button
            key={index}
            className="border border-dark100 bg-dark50 rounded-md  p-2 w-full"
          >
            {btns.text}
          </button>
        ))}
        {/* </div> */}
      </div>
      <div className="border border-dark100 rounded-md p-2 hidden md:block">
        <Image src={filter} alt="filter-icon" />
      </div>
    </div>
  );
};

export default ButtonComponent;
