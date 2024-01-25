"use client";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";
import cn from "@/utils/classNames";

export interface navLinkProps {
  title: string;
  url: string;
  disabled: boolean;
  id: number;
}
const NavLink: React.FunctionComponent<navLinkProps> = ({
  title,
  url,
  disabled,
  id,
}) => {
  const pathname = usePathname();
  return (
    <div className={cn({ "cursor-not-allowed": disabled })}>
      <Link className={cn({ "pointer-events-none": disabled })} href={url}>
        <p
          className={cn("text-disabledGray", {
            "font-semibold text-white": pathname === url,
          })}
        >
          {title}
        </p>
      </Link>
    </div>
  );
};

export default NavLink;
