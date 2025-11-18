/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        gold: {
          400: "#D4AF37",
          500: "#B8941F",
          600: "#9C7C1A",
        },
      },
      fontFamily: {
        serif: ["Playfair Display", "serif"],
      },
      animation: {
        fadeInUp: "fadeInUp 0.8s ease-out",
        float: "float 3s ease-in-out infinite",
        glow: "glow 2s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
