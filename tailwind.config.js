/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      gridTemplateRows: {
        8: "repeat(8, minmax(0, 1fr))",
      },
      margin: {
        primary: "90px",
      },
      colors: {
        "primary-blue": "#438FFE",
        "chess-gray": "#E1E1E1",
        dark: "#262522",
      },
      transformOrigin: {
        "top-left-center-2vw": "center 30vw",
      },
    },
  },
  plugins: [require(`@tailwindcss/typography`)],
};
