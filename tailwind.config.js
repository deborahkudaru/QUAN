/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ "./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      fontFamily : {
        mateSC : ["Mate SC", "serif"],
        CrimsonText: ["Crimson Text", "serif"]
      },
      backgroundImage: {
        'sza': "url(./images/photo2.JPG)",
      }
    },
  },
  plugins: [],
}

