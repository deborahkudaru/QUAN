/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      fontFamily: {
        playFair: ["Playfair", "serif"],
        lato: ["Playfair", "serif"],
      },
      keyframes: {
        'text-reveal': {
          '0%': { transform: 'translateY(100%)' },
          '100%': { transform: 'translateY(0)' },
        },
      },
      animation: {
        'text-reveal': 'text-reveal 1.5s cubic-bezier(0.77, 0, 0.175, 1) forwards',
      },
    },
  },
  plugins: [],
}

