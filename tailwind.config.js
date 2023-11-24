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
      white: '#FFFFFF',
      validBet: '#00FF00',
      invalidBet: '#FF0000'
    },
    boxShadow: {
      caca: '0px 0px 15px'
    },
    dropShadow: {
      logo: '0px 0px 35px #FFA31A',
      banner: '0px 0px 15px #FFA31A'
    },
    plugins: [],
  }
}