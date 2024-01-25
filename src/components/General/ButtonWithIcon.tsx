"use client";
import cn from "@/utils/classNames";
import React from "react";

export interface buttonWithIconProps {
  title: string;
  icon?: React.ReactNode;
  classNames?: string;
  url?: string;
  action?: () => void;
}
const ButtonWithIcon: React.FunctionComponent<buttonWithIconProps> = ({
  title,
  icon,
  classNames,
  url,
  action,
}) => {
  return (
    <button
      className={cn("flex items-center justify-center p-3 px-5", classNames)}
      onClick={action}
    >
      <div className="flex items-center gap-x-2 justify-between w-full">
        <p>{title}</p>
        <div>{icon}</div>
      </div>
    </button>
  );
};

export default ButtonWithIcon;
