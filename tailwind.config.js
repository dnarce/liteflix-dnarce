/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'bebas-neue': ['Bebas Neue', 'sans-serif'],
      },
      colors: {
        'dark-grey': '#242424',
        primary: '#64EEBC',
        error: '#FF0000',
      },
      fontSize: {
        drawer: ['22px', '1'],
      },
      maxHeight: {
        '1/2-screen': '50vh',
        '1/3-screen': '60vh',
        '2/3-screen': '66vh',
        '3/4-screen': '75vh',
      },
      maxWidth: {
        '1/2-screen': '50vw',
        '1/3-screen': '60vw',
        '2/3-screen': '66vw',
        '3/4-screen': '75vw',
      },
    },
  },
  plugins: [],
};
