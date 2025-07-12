import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/modules/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "#9C9C9C",
        dark: "#080808",
        light: "#FFFFFF",
        stroke: "#1B1B1B"
      },
      fontFamily: {
        ibm: ["var(--font-ibm)"],
      },
    },
  },
  plugins: [],
};
export default config;
