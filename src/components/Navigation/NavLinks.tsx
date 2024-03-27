import React from "react";
import { navLinks } from "@/dummydata";
import NavLink, { navLinkProps } from "./NavLink";
import ButtonWithIcon from "../General/ButtonWithIcon";
import UpRightArrow from "@/app/icons/UpRightArrow";
import Link from "next/link";

const NavLinks = () => {
  return (
    <div className="flex justify-between xl:justify-around items-center">
      {navLinks.map((item: navLinkProps) => {
        return <NavLink key={item.id} {...item} />;
      })}
      <Link href={"/pricing"}>
        <ButtonWithIcon
          title="Subscribe to VIP plan"
          classNames="bg-yellow-400 rounded-full text-sm text-black py-2 xl:py-3 px-3 xl:px-5"
          icon={<UpRightArrow />}
        />
      </Link>
    </div>
  );
};

export default NavLinks;
