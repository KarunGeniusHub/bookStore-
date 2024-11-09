/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode:"class",
  theme: {
    extend: {},
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: ["light"], // Set to "light" or any other preferred theme
  },
}
