import * as React from "react";
import { SVGProps } from "react";
const TickIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={20}
    height={20}
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <circle cx={10} cy={10} r={9.25} stroke="#FFB800" strokeWidth={1.5} />
    <g clipPath="url(#clip0_718_871)">
      <path
        d="M3.47754 9.86037C5.42852 11.9713 7.32016 13.8717 9.13851 16.2752C11.1155 12.3432 13.1389 8.39748 16.4776 4.12447L15.578 3.7124C12.7588 6.70217 10.5686 9.53225 8.66547 12.8955C7.34203 11.7033 5.2032 10.0162 3.89727 9.14943L3.47754 9.86037Z"
        fill="#FFB800"
      />
    </g>
    <defs>
      <clipPath id="clip0_718_871">
        <rect width={14} height={14} fill="white" transform="translate(3 3)" />
      </clipPath>
    </defs>
  </svg>
);
export default TickIcon;
