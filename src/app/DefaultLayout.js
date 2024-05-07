import NavBar from "@/components/NavBar";
import SideBar from "@/components/SideBar";
import React from "react";

const DefaultLayout = ({ children }) => {
  return (
    <div className="flex bg-dark900 h-full p-4  ">
      <SideBar />
      <div className="bclass flex-1 rounded-lg ml-[10rem]">
        <NavBar />
        <main>{children}</main>
      </div>
    </div>
  );
};

export default DefaultLayout;
