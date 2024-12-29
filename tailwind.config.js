/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      fontFamily: {
        mateSC: ["Mate SC", "serif"],
        CrimsonText: ["Crimson Text", "serif"],
        NotoSerif: ["Noto Serif Display", "serif"],
      },
    },
  },
  plugins: [],
}

