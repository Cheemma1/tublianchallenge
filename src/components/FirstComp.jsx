import React from "react";
import ProfileCard from "./ProfileCard";
import avatar from "../../public/avatar2.png";
import CardOne from "./CardOne";
import CardTwo from "./CardTwo";

const FirstComp = () => {
  return (
    <div className="bg-dark50 border border-dark100 py-6 px-4 rounded-md">
      <ProfileCard
        img={avatar}
        txt1={"John Doe"}
        txt2={"New jersy USA., $250,000(USD)"}
        txt3={"Frontend Developer"}
      />
      <div className="flex items-center gap-8 w-full mt-8">
        <CardOne />
        <CardTwo />
      </div>
    </div>
  );
};

export default FirstComp;
