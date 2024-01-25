import React from "react";
import Logo from "./Logo";
import NavLinks from "./NavLinks";

const Navbar = () => {
  return (
    <div className="px-20 py-5 flex justify-between w-full items-center">
      <div className="flex-1">
        <Logo />
      </div>
      <div className="flex-1">
        <NavLinks />
      </div>
    </div>
  );
};

export default Navbar;
