import * as React from "react";
import { SVGProps } from "react";
const DownArrow = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={11}
    height={6}
    viewBox="0 0 11 6"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M7.50168 4.79367C6.43208 5.86327 4.72006 5.89893 3.60763 4.90063L3.49474 4.79367L0.747342 1.87573C0.47072 1.59911 0.47072 1.15062 0.747342 0.873999C1.00268 0.618656 1.40447 0.599015 1.68235 0.815074L1.74908 0.873999L4.49647 3.79194C5.0206 4.31606 5.85323 4.34365 6.40983 3.87469L6.49994 3.79194L9.24734 0.873999C9.52396 0.597378 9.97246 0.597378 10.2491 0.873999C10.5044 1.12934 10.5241 1.53113 10.308 1.809L10.2491 1.87573L7.50168 4.79367Z"
      fill="#333333"
    />
  </svg>
);
export default DownArrow;
