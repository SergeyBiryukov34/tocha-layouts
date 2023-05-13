/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,ts,jsx,pug}",
  ],
  theme: {
    extend: {
      container: {
        padding: '1.25rem',
        center: true
      },
      fontFamily: {
        sans: 'Gilroy, sans-serif'
      },
      colors: {
        paragraph: '#1D2530',
        primary: '#685ED6',
        secondary: '#F1E4FF'
      },
      boxShadow: {
        'button': '0px 10px 20px rgba(0, 0, 0, 0.07)'
      },
      backgroundColor: {
        'gray-70': 'rgba(242, 247, 255, 0.5)'
      }
    },
  },
  plugins: [],
}