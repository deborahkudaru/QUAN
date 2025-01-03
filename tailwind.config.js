/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      fontFamily: {
        playFair: ["Playfair", "serif"],
        lato: [ "Playfair", "serif"],
      },
    },
  },
  plugins: [],
}

