/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      xs: "520px",
      sm: "640px",
      md: "800px",
      lg: "1200px",
      "2xl": "1536px",
    },
    backgroundImage: {
      "custom-image": "url('/public/hero.webp')",
      "shop-hero": "url('/public/shop-hero.webp')",
    },
    extend: {
      animation: {
        "spin-slow": "spin 3s linear infinite",
      },
      gridTemplateColumns: {
        double: "2fr 1fr",
      },
      container: {
        center: true,
        screens: {
          lg: "1200px",
        },
      },
      colors: {
        primary: {
          DEFAULT: "#B88E2F",
        },
        secondary: {
          DEFAULT: "#FFF3E3",
        },
        ghost: {
          DEFAULT: "#242424",
        },
        violet: {
          400: "#816DFA",
        },

        gray: {
          50: "#F4F5F7", //50 light-1
          100: "#D9D9D9", // light
          200: "#9F9F9F", //gray
          300: "#666666", //300
          400: "#898989", //400 dark-1
          500: "#3a3a3a75", //500 opacityDark
          600: "#333333", //600
          700: "#0000002B", //700 dark
          800: "#66666659",
          900: "#3a3a3a",
        },
        red: {
          50: "#E97171",
        },
        blue: {
          200: "#2EC1AC",
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
