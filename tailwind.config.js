/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      primary: '#292929',
      secondary: '#808080',
      accent: '#FFA31A',
      black: '#000000',
      white: '#FFFFFF'
    },
    boxShadow: {
      caca: 'rgba(0, 0, 0, 0.35) 0px 0px 15px'
    },
    plugins: [],
  }
}