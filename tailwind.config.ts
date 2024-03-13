import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontSize: {
        TITLE: "40px",
      },
      backgroundImage: {
        GRADIENT_BLUE: "linear-gradient(180deg, rgba(249,250,251,1) 0%, rgba(142,162,187,1) 100%)",
      },
      colors: {
        BLACK: "#0A0A0A",
        LIGHTBLACK: "#131313",
        WHITE: "#F5F5F5",
        GRAY: "#5D5D5D",
      },
      lineHeight: {
        LOW: "100%",
        NORMAL: "120%",
      },
      dropShadow: {
        BENEFIT: "0px 0px 160px rgba(177, 191, 208, 0.6)",
      },
      gridTemplateColumns: {
        BENEFITS: "100fr 62.5fr",
        BENEFITS_REVERSE: "62.5fr 100fr",
      },
      boxShadow: {
        FADEIN: "0px -38px 11px 31px rgba(10,10,10,1)",
      },
    },
  },
  plugins: [],
};
export default config;
