import * as React from "react";
import { SVGProps } from "react";
const CloseModalIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={32}
    height={32}
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <circle cx={16} cy={16} r={16} fill="white" fillOpacity={0.2} />
    <line
      x1={13.0638}
      y1={12.0024}
      x2={20.7758}
      y2={19.7144}
      stroke="white"
      strokeWidth={1.5}
    />
    <line
      y1={-0.75}
      x2={10.9064}
      y2={-0.75}
      transform="matrix(-0.707107 0.707107 0.707107 0.707107 20.7966 12.5327)"
      stroke="white"
      strokeWidth={1.5}
    />
  </svg>
);
export default CloseModalIcon;
