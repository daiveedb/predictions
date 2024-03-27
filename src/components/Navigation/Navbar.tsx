import React from "react";
import Logo from "./Logo";
import NavLinks from "./NavLinks";

const Navbar = () => {
  return (
    <div className="lg:px-16 md:px-12 sm:px-8 px-4 xl:px-20 py-5 md:flex justify-between w-full items-center hidden">
      <div className="flex-1">
        <Logo />
      </div>
      <div className="flex-[2] lg:flex-1">
        <NavLinks />
      </div>
    </div>
  );
};

export default Navbar;
