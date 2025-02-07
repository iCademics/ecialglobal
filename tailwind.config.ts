import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: "#0C032E", // Cetacean Blue
          white: "#FFFFFF", // White
          rose: "#E977D6", // Brilliant Rose
          // Add complementary shades
          "blue-light": "#1A1140",
          "rose-light": "#ED8DDD",
          "rose-dark": "#D65BC0",
        },
      },
      fontFamily: {
        sans: ["var(--font-42dot)"],
      },
    },
  },
  plugins: [],
} satisfies Config;
