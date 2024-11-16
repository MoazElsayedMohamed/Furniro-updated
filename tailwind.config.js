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
          DEFAULT: "#9F9F9F",
          light: "#D9D9D9",
          "light-1": "#F4F5F7",
          dark: "#0000002B",
          "dark-1": "#898989",
          opacityDark: "#3a3a3a75",
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
