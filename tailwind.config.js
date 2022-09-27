/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        extra_text: "rgba(117, 117, 117, 1)",
      },
      fontSize: {
        h1: "42px",
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
