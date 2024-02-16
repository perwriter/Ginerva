/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        libreBaskerville: ["Libre Baskerville", "serif"],
      },
      colors: {
        primary: "#022D8a",
        mary: "#ec4899",
        secondary: {
          100: "#E2E2D5",
          200: "#888883",
        },
        dark: "#111111",
      },backgroundImage:{
        "banner-bg":"url('/public/bannerBg.jpg')"
      },
      
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "3rem",
        },
      },
    },
  },
  plugins: [],
};
