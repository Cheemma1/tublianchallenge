import React from "react";

const NavBar = () => {
  return (
    <>
      <div className="flex items-center justify-between py-6 px-4">
        <h1>Find Developer </h1>
        <button>Sort by high streetcard</button>
      </div>
      <div className="h-px w-full bg-dark50"></div>
    </>
  );
};

export default NavBar;
