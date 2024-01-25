import * as React from "react";
import { SVGProps } from "react";
const TransparentSquare = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={137}
    height={139}
    viewBox="0 0 137 139"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <rect
      x={-3}
      y={39.8818}
      width={106.987}
      height={111}
      rx={10}
      transform="rotate(-23.6289 -3 39.8818)"
      fill="url(#paint0_linear_391_627)"
      fillOpacity={0.5}
    />
    <defs>
      <linearGradient
        id="paint0_linear_391_627"
        x1={-5.19299}
        y1={121.177}
        x2={114.507}
        y2={121.773}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="white" stopOpacity={0.15} />
        <stop offset={1} stopColor="white" stopOpacity={0.1} />
      </linearGradient>
    </defs>
  </svg>
);
export default TransparentSquare;
