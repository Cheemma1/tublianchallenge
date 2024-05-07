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
      text: "Sofware Developer",
    },
  ];
  return (
    <div className="flex items-center justify-between my-4">
      <div className="flex items-center gap-4">
        <button className="btn2  p-2">Discover</button>
        {btn.map((btns, index) => (
          <button
            key={index}
            className="border border-dark100  bg-dark50 rounded-md p-2"
          >
            {btns.text}
          </button>
        ))}
      </div>
      <div className="border border-dark100 rounded-md p-2">
        <Image src={filter} />
      </div>
    </div>
  );
};

export default ButtonComponent;
