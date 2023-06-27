/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    screens: {
      md1300: { max: "1300px" },
      md1200: { max: "1200px" },
      md1090: { max: "1090px" },
      min970: { max: "970px" },
      min900: { max: "900px" },
      min700: { max: "700px" },
      min600: { max: "600px" },
      min450: { max: "450px" },
      min375: { max: "375px" },
    },
  },
  plugins: [],
};
