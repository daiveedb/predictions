import * as React from "react";
import { SVGProps } from "react";
const TransparentRectangle = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={140}
    height={178}
    viewBox="0 0 140 178"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <rect
      x={-89}
      y={78.7656}
      width={204}
      height={111}
      rx={10}
      transform="rotate(-23.6289 -89 78.7656)"
      fill="url(#paint0_linear_391_626)"
      fillOpacity={0.5}
    />
    <defs>
      <linearGradient
        id="paint0_linear_391_626"
        x1={-93.1815}
        y1={160.061}
        x2={135.045}
        y2={162.226}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="white" stopOpacity={0.15} />
        <stop offset={1} stopColor="white" stopOpacity={0.1} />
      </linearGradient>
    </defs>
  </svg>
);
export default TransparentRectangle;
