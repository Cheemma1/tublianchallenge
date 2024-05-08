import React from "react";
import Image from "next/image";
import avatar from "../../public/avatar1.png";
import dashboard from "../../public/element-3.png";
import monietization from "../../public/money-2.png";
import notification from "../../public/notification.png";
import setting from "../../public/setting-2.png";
import logout from "../../public/logout.png";

const IconNav = () => {
  return (
    <div className="hidden md:block lg:hidden">
      <div className="flex flex-col gap-8 mt-16">
        <Image src={avatar} alt="avatar" className="" />
        <Image src={dashboard} alt="dashboard-icon" />
        <Image src={monietization} alt="monietization-icon" />
        <Image src={notification} alt="notification-icon" />
      </div>
      <div className="flex flex-col mt-[18rem] gap-6">
        <Image src={setting} alt="setting-icon" />
        <Image src={logout} alt="notification-icon" />
      </div>
    </div>
  );
};

export default IconNav;
