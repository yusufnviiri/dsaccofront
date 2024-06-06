


/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{html,js,jsx}",
    "./src/components/*.{html,js,jsx}",
  ],
  theme: {
    extend: { fontFamily: {
      'roboto': ["Roboto", "sans-serif"],
      'robotoCo':["Roboto Condensed", "sans-serif"],
      'poppins': ["Poppins", "sans-serif"],
      'prime': ["Courier Prime", "cursive"],
      'rubik': ["Rubik", "sans"],
      'mul': ["Mulish", "sans-serif"],
      'lobs': [ "Quicksand", "sans-serif"],
      'oxygen': ["Edu TAS Beginner", "cursive"],
      'anton': ['Anton', 'sans-serif']
},    colors: {
  'brownish':'#2c2620',
  'light':'#bde4c3',
  'syellow':'#cca362',
  'darkened':'#241f21',
  'slightx':'#eef9f0',
  'bluish':'#042e69'
},
  },
  plugins: [],
}}