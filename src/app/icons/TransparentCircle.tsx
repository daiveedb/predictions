import * as React from "react";
import { SVGProps } from "react";
const TransparentCircle = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={78}
    height={112}
    viewBox="0 0 78 112"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <rect
      x={-16}
      y={26.8818}
      width={106.987}
      height={111}
      rx={53.4934}
      transform="rotate(-23.6289 -16 26.8818)"
      fill="url(#paint0_linear_391_618)"
      fillOpacity={0.5}
    />
    <defs>
      <linearGradient
        id="paint0_linear_391_618"
        x1={-18.193}
        y1={108.177}
        x2={101.507}
        y2={108.773}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="white" stopOpacity={0.15} />
        <stop offset={1} stopColor="white" stopOpacity={0.1} />
      </linearGradient>
    </defs>
  </svg>
);
export default TransparentCircle;
