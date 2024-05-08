import NavBar from "@/components/NavBar";
import SideBar from "@/components/SideBar";
import React from "react";

const DefaultLayout = ({ children }) => {
  return (
    <div className="flex bg-dark900 h-full lg:p-4 overflow-hidden scrollbar-hide">
      {" "}
      {/* Added overflow-hidden */}
      <SideBar />
      <div className="md:border border-dark50 flex-1 rounded-lg lg:ml-[10rem] overflow-auto scrollbar-hide">
        {" "}
        {/* Added overflow-auto */}
        <NavBar />
        <main className="p-4">{children}</main>{" "}
        {/* Added padding to main content */}
      </div>
    </div>
  );
};

export default DefaultLayout;
