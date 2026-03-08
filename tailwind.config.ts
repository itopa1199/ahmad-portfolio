import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ["var(--font-bebas)", "sans-serif"],
        serif: ["var(--font-instrument)", "serif"],
        body: ["var(--font-dm)", "sans-serif"],
      },
      colors: {
        bg: "#0a0a08",
        surface: "#111110",
        border: "#1e1e1c",
        accent: "#c8f542",
        accent2: "#f5a623",
        text: "#e8e6df",
        muted: "#6b6a65",
      },
    },
  },
  plugins: [],
};
export default config;
