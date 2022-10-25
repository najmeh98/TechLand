/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      maxsm: { max: "480px" },
      maxlg: { max: "976px" },
      maxmd: { max: "768px" },
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1200px",
    },

    extend: {
      colors: {
        extra_text: "rgba(117, 117, 117, 1)",
        bg_gradient:
          "linear-gradient(120deg, #e5e5e5 30%, #f0f0f0 38%, #f0f0f0 40%, #e5e5e5 48%)",
      },

      fontSize: {
        h1: "42px",
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
