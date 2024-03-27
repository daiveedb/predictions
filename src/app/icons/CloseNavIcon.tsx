import * as React from "react";
import { SVGProps } from "react";
const CloseNavIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={60}
    height={60}
    viewBox="0 0 60 60"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <rect width={60} height={60} rx={12} fill="#040834" />
    <path
      d="M37.5 22.5L22.5 37.5M22.5 22.5L37.5 37.5"
      stroke="white"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default CloseNavIcon;
