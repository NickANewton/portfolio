/** @type {import('tailwindcss').Config} */
const { createThemes } = require("tw-colors");

module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        "bg-change": "bgChange 4s linear infinite",
      },
      keyframes: {
        bgChange: {
          "50%": { backgroundColor: "white" }, // green-400 color
        },
      },
    },
  },
  plugins: [
    createThemes({
      dark: {
        header: {
          primary: "rgb(1,2,5)",
          secondary: "rgb(211,211,211)",
        },
      },
      light: {
        header: {
          primary: "#9ca3af",
          secondary: "black",
        },
      },
    }),
  ],
};
