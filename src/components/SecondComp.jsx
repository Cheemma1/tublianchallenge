import React from "react";
import ProfileCard from "./ProfileCard";
import CardOne from "./CardOne";
import CardTwo from "./CardTwo";
import avatar from "../../public/avatar3.png";
import Image from "next/image";
import cardimg from "../../public/frame455.png";

const SecondComp = () => {
  return (
    <div className="bg-dark50 border border-dark100 py-6 px-4 rounded-md mt-4 container mx-auto w-full">
      <ProfileCard
        img={avatar}
        txt1={"John Doe"}
        txt2={"Lagos, Nigeria. $250,000(USD)"}
        txt3={"Frontend Developer"}
      />
      <div className="flex items-center gap-8 w-full mt-8">
        <CardOne />
        <Image src={cardimg} alt="image" className="h-[170px] mt-8" />
        <CardTwo />
      </div>
    </div>
  );
};

export default SecondComp;
