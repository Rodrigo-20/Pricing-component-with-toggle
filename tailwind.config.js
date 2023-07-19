/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./dist/*.{html,js}",
    "./images/*.{svg,jpg}",
  ],
  theme: {
    colors:{
      'white':'#ffffff',
      'gradient-start':	'#a3a8f0',
      'gradient-end':	'#696fdd',
      'very-light-graysh-blue': '#f6f6fe',
      'light-graysh-blue':'#b3b5c6',
      'graysh-blue': '#6d708d',
      'dark-graysh-blue': '#494c5f',
      'transparent':'transparent',
    },
    fontFamily:{
      'monserrat':['Monserrat','sans-serif']
    },
    extend: {},
  },
  plugins: [],
}

