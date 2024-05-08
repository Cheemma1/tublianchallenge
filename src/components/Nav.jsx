import Image from "next/image";
import React from "react";
import avatar from "../../public/avatar1.png";
import dashboard from "../../public/element-3.png";
import monietization from "../../public/money-2.png";
import notification from "../../public/notification.png";
import setting from "../../public/setting-2.png";
import logout from "../../public/logout.png";

const Nav = () => {
  const sideLinks = [
    {
      icon: dashboard,
      text: "Dashboard",
    },
    {
      icon: monietization,
      text: "Monietization",
    },
    {
      icon: notification,
      text: "Notification",
    },
  ];
  return (
    <div className="w-[150px]  fixed py-6 hidden md:hidden lg:block">
      <Image src={avatar} alt="avatar" className="absolute right-2" />
      <div>
        <div className="flex flex-col gap-8 mt-16">
          {sideLinks.map((item, index) => (
            <div
              className="flex items-center gap-2 hover:bg-dark200 hover:rounded-md hover:p-2   cursor-pointer"
              key={index}
            >
              <Image src={item.icon} alt="avatar" />
              <p>{item.text}</p>
            </div>
          ))}
        </div>

        <div className="flex flex-col mt-[18rem] gap-6">
          <div className="flex items-center gap-2 hover:bg-dark200 hover:rounded-md hover:p-2 cursor-pointer">
            <Image src={setting} alt="avatar" />
            <p>Setting</p>
          </div>
          <div className="flex items-center gap-2 hover:bg-dark200 hover:rounded-md hover:p-2 cursor-pointer ">
            <Image src={logout} alt="avatar" />
            <p>Logout</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
