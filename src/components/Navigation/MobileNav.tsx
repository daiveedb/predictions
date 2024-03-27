"use client";
import CloseModalIcon from "@/app/icons/CloseModalIcon";
import CloseNavIcon from "@/app/icons/CloseNavIcon";
import { navLinks } from "@/dummydata";
import React, { useEffect, useState } from "react";
import { navLinkProps } from "./NavLink";
import Link from "next/link";
import { usePathname } from "next/navigation";
import cn from "@/utils/classNames";

const MobileNav = () => {
  const pathname = usePathname();
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  useEffect(() => {
    setIsMobileNavOpen(false);
  }, [pathname]);
  return (
    <div className="md:hidden p-5 py-7">
      <div className="bg-[#02184D] w-full flex justify-between p-2 items-center rounded-full">
        <p className="px-4">Predict Wiser</p>
        <button
          onClick={() => setIsMobileNavOpen(true)}
          className="rounded-full h-full p-2 w-[100px] bg-[#040834]"
        >
          Menu
        </button>
      </div>
      <div
        className={cn(
          "fixed p-10 right-0 top-0 bg-[#02184D] w-[300px] transition-all h-screen z-30",
          { "-right-[300px]": !isMobileNavOpen }
        )}
      >
        <button
          onClick={() => setIsMobileNavOpen(false)}
          className="w-full flex justify-end"
        >
          <CloseNavIcon />
        </button>
        <div className="grid grid-cols-1 gap-2 py-5">
          {navLinks.map((item: navLinkProps, index: number) => {
            return (
              <Link
                className={cn("w-full p-3 rounded-md text-lg", {
                  "bg-[#FFB800] text-black": pathname === item.url,
                })}
                key={index}
                href={item.url}
              >
                {item.title}
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default MobileNav;
