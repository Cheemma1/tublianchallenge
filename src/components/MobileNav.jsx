import React from "react";
import Image from "next/image";
import avatar from "../../public/avatar1.png";
import dashboard from "../../public/element-3.png";
import monietization from "../../public/money-2.png";
import menu from "../../public/menu_mobile.png";
import notification from "../../public/notification.png";
import setting from "../../public/setting-2.png";
import logout from "../../public/logout.png";

const MobileNav = ({ open, setOpen }) => {
  return (
    <div className="flex items-center flex-col md:hidden w-[10%] fixed top-0 right-0 h-screen bg-dark50 ">
      <div className="mt-4">
        <button onClick={() => setOpen(!open)}>
          <Image src={menu} alt="menu-icon" />
        </button>
      </div>
      <div className="flex flex-col items-center gap-8 ">
        <Image src={avatar} alt="avatar" className="" />
        <Image src={dashboard} alt="dashboard-icon" />
        <Image src={monietization} alt="monietization-icon" />
        <Image src={notification} alt="notification-icon" />
      </div>
      <div className="flex flex-col items-center mt-[18rem] gap-6">
        <Image src={setting} alt="setting-icon" />
        <Image src={logout} alt="notification-icon" />
      </div>
    </div>
  );
};

export default MobileNav;
