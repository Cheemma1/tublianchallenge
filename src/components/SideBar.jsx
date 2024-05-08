"use client";

import Image from "next/image";
import React from "react";
// import avatar from "../../public/avatar1.png";
// import dashboard from "../../public/element-3.png";
// import monietization from "../../public/money-2.png";
// import notification from "../../public/notification.png";
// import setting from "../../public/setting-2.png";
// import logout from "../../public/logout.png";

import Nav from "./Nav";
import IconNav from "./IconNav";

const SideBar = () => {
  // const sideLinks = [
  //   {
  //     icon: dashboard,
  //     text: "Dashboard",
  //   },
  //   {
  //     icon: monietization,
  //     text: "Monietization",
  //   },
  //   {
  //     icon: notification,
  //     text: "Notification",
  //   },
  // ];
  return (
    <div className="h-screen">
      <Nav />
      <IconNav />
    </div>
  );
};

export default SideBar;
