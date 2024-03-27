import React from "react";
import Logo from "./Logo";
import NavLinks from "./NavLinks";

const Navbar = () => {
  return (
    <div className="lg:px-16 md:px-12 sm:px-8 px-4 xl:px-20 py-5 flex justify-between w-full items-center">
      <div className="flex-1">
        <Logo />
      </div>
      <div className="flex-1 hidden sm:block">
        <NavLinks />
      </div>
    </div>
  );
};

export default Navbar;
