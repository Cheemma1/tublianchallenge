import React from "react";

const CardTwo = () => {
  return (
    <div className="bg-dark100 border border-dark200 p-2 mt-6 rounded-md md:w-[300px] md:h-[170px] h-1/2 w-full">
      <div className="flex flex-col gap-3 w-full">
        <p className="border-2 border-white rounded-full px-2 w-[60%] lg:w-[22%]">
          Other
        </p>
        <h3>My_Resume</h3>
        <p className="text-textclr">
          I am updating my Resume, as completing my project
        </p>
        <p className="text-textclr pb-2">
          last updated:<span className="text-white">Tue Dec 13, 2022</span>
        </p>
      </div>
    </div>
  );
};

export default CardTwo;
