import { DM_Sans, Wix_Madefor_Display } from "next/font/google";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        main_darker_blue: "#05022B",
        main_dark_blue: "#00205B",
        cardBg_blue: "#14112D",
        disabledGray: "#C1C1C1",
        helperText: "#D9D9D9",
        helperTitle: "#606C87",
        darkGray: "#181B2A",
      },
      fontFamily: {
        wix: ['"Wix Madefor Display"', "sans-serif"],
        montserrat: ['"Montserrat"', "sans-serif"],
      },
      borderRadius: {
        "2.5": "2.5rem",
      },
    },
  },
  plugins: [],
};
export default config;
