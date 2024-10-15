/** @type {import('tailwindcss').Config} */
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
  plugins: [],
};
