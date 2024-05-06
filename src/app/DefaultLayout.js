import NavBar from "@/components/NavBar";
import SideBar from "@/components/SideBar";
import React from "react";

const DefaultLayout = ({ children }) => {
  return (
    <div className="flex bg-dark900 h-full p-4">
      <SideBar />
      <div>
        <NavBar />
        <main>{children}</main>
      </div>
    </div>
  );
};

export default DefaultLayout;
