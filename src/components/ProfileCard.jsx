import Image from "next/image";
import React from "react";

const ProfileCard = ({ img, txt1, txt2, txt3 }) => {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-4">
        <Image src={img} />
        <div className="flex flex-col gap-1">
          <h2>{txt1}</h2>
          <p className="text-textclr">{txt2}</p>
          <p className="border-2 border-white rounded-full px-2 md:w-[75%] mt-2">
            {txt3}
          </p>
        </div>
      </div>
      <button className="bg-gold300 rounded-lg text-black p-2">Hire me</button>
    </div>
  );
};

export default ProfileCard;
