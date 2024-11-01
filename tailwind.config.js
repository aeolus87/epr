/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        slogan: ["Permanent Marker", "cursive"], 
      },
      animation: {
        slide: "slide 30s linear infinite",
      },
      keyframes: {
        slide: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(calc(-280px * 11 - 1.5rem * 11))" }, 
        },
      },
    },
  },
  plugins: [],
};
