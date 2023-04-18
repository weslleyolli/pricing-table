/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        'titilium': ['Titillium', 'sans-serif'],
      },
      colors: {
        'purple200': '#7C3AED',
        'gray900': '#0F172A'
      }
    },
  },
  plugins: [],
}
