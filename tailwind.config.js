const colors = require('tailwindcss/colors');

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    './node_modules/tw-elements/dist/js/**/*.js',
  ],
  theme: {
    extend: {},
    screens: {
      sm: '480px',
      md: '960px',
      lg: '1440px',
      slg: '1280px',
      xl: '1900px',
      '2xl': '2560px'
    },

  },
  plugins: [
  
  ],
  darkMode: 'class',
}