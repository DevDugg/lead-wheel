import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      background: {
        GRADIENT_BLUE: "linear-gradient(180deg, rgba(249,250,251,1) 0%, rgba(142,162,187,1) 100%)",
      },
      colors: {
        BLACK: "#0A0A0A",
        LIGHTBLACK: "#131313",
        WHITE: "#F5F5F5",
        GRAY: "#5D5D5D",
      },
    },
  },
  plugins: [],
};
export default config;
