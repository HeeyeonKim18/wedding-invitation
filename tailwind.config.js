/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        serif: ["'Noto Serif KR'", "serif"],
        sans: ["'Noto Sans KR'", "sans-serif"],
      },
      colors: {
        brand: "#f4f1ea",
        text: "#333333",
        accent: "#8c8375",
      },
    },
  },
  plugins: [],
};
