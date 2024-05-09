import React from "react";

const CardOne = () => {
  return (
    <div className="bg-dark100 border border-dark200 p-2 mt-6 rounded-md md:w-[300px] h-full w-full  md:h-[170px]">
      <div className="flex flex-col gap-4">
        <p className="border-2 border-white rounded-full px-2 w-[22%]">Other</p>
        <h3>Portfolio</h3>
      </div>

      <p className="text-textclr mt-16">
        last updated:<span className="text-white">Tue Dec 13, 2022</span>
      </p>
    </div>
  );
};

export default CardOne;
