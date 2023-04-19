/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        'titilium': ['Titillium', 'sans-serif'],
      },
      colors: {
        'purple100': '#996DFF',
        'purple200': '#7C3AED',
        'gray900': '#0F172A',
      },
      screens: {
        'mobile': {'max':'769px'}
      }
    },
  },
  plugins: [],
}
