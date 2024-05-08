"use client";
import Image from "next/image";
import React, { useState } from "react";
import menu from "../../public/menu_mobile.png";
import search from "../../public/search-normal.png";
import MobileNav from "./MobileNav";
const NavBar = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className="flex md:hidden items-center justify-between px-4 container mx-auto">
        <h1>Find Developer </h1>
        <div className="flex items-center gap-4 md:hidden ">
          <Image src={search} alt="search-icon" />
          <button onClick={() => setOpen(!open)}>
            <Image src={menu} alt="menu-icon" />
          </button>
        </div>
      </div>
      {open && <MobileNav open={open} setOpen={setOpen} />}

      <div className=" items-center justify-between py-6 px-4 hidden md:flex">
        <h1>Find Developer </h1>
        <button>Sort by high streetcard</button>
      </div>
      <div className="hidden md:block h-px w-full bg-dark50"></div>
    </>
  );
};

export default NavBar;
