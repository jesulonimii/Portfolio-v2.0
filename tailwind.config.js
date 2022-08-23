/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./src/components/*.vue"
  ],
  theme: {
    fontFamily: {
      'ubuntu': ['Ubuntu'],
      'sans': ['Poppins'] // Ensure fonts with spaces have " " surrounding it.
    },
    extend: {},
  },
  plugins: [],
}
