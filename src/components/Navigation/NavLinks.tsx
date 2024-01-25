import React from "react";
import { navLinks } from "@/dummydata";
import NavLink, { navLinkProps } from "./NavLink";
import ButtonWithIcon from "../General/ButtonWithIcon";
import UpRightArrow from "@/app/icons/UpRightArrow";

const NavLinks = () => {
  return (
    <div className="flex justify-around items-center">
      {navLinks.map((item: navLinkProps) => {
        return <NavLink key={item.id} {...item} />;
      })}
      <ButtonWithIcon
        title="Subscribe to VIP plan"
        classNames="bg-yellow-400 rounded-full text-black py-2 cursor-not-allowed px-5"
        icon={<UpRightArrow />}
      />
    </div>
  );
};

export default NavLinks;
