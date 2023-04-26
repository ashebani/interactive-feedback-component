/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primaryOrange: "hsl(25, 97%, 53%)",
        primaryWhite: "hsl(0, 0%, 100%)",
        primaryLightGrey: "hsl(217, 12%, 63%)",
        primaryMediumGrey: "hsl(216, 12%, 54%)",
        primaryDarkBlue: "hsl(213, 19%, 18%)",
        primaryVeryDarkBlue: "hsl(216, 12%, 8%)",
      },
    },
  },
  plugins: [],
};
