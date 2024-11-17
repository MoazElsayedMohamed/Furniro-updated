/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      xs: "480px",
      sm: "640px",
      md: "800px",
      lg: "1200px",
      "2xl": "1536px",
    },
    backgroundImage: {
      "custom-image": "url('/public/hero.webp')",
    },
    screenHeight: {
      "2vh": "150vh",
    },
    extend: {
      container: {
        center: true,
        screens: {
          lg: "1200px",
        },
      },
      height: {
        "2-screen": "150vh",
      },
      colors: {
        primary: {
          DEFAULT: "#B88E2F",
        },
        secondary: {
          DEFAULT: "#FFF3E3",
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
