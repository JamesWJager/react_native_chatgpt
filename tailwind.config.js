/** @type {import('./src/styles/colors')} */
const colors = require('./src/styles/colors')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['App.tsx', './src/**/*.{js,jsx,ts,tsx}', './src/**/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors,
    },
  },
  plugins: [],
}
