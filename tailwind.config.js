/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1200px",
    },
    backgroundImage: {
      "custom-image": "url('/public/hero.webp')",
    },
    screenHeight: {
      "2vh": "150vh",
    },
    extend: {
      height: {
        "2-screen": "150vh",
      },
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        primary: {
          DEFAULT: "#B88E2F",
        },
        secondary: {
          DEFAULT: "#FFF3E3",
        },

        gray: {
          200: "#9F9F9F", //gray
          100: "#D9D9D9", // light
          50: "#F4F5F7", //50 light-1
          700: "#0000002B", //700 dark
          400: "#898989", //400 dark-1
          500: "#3a3a3a75", //500 opacityDark
          600: "#333333", //600
          300: "#666666", //300
          800: "#66666659",
          900: "#3a3a3a",
        },
        red: {
          50: "#E97171",
        },
        blue: {
          200: "#2EC1AC",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          1: "hsl(var(--chart-1))",
          2: "hsl(var(--chart-2))",
          3: "hsl(var(--chart-3))",
          4: "hsl(var(--chart-4))",
          5: "hsl(var(--chart-5))",
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
