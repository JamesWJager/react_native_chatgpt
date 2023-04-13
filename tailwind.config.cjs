const colors = require('./src/styles/colors.cjs')

/** @type {import('tailwindcss').Config} */
const tailwindConfig = {
  content: ['App.tsx', './src/**/*.{js,jsx,ts,tsx}', './src/**/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors,
    },
  },
  plugins: [],
}

module.exports = tailwindConfig
