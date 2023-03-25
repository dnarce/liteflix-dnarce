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
      maxHeight: {
        '1/2-screen': '50vh',
        '1/3-screen': '60vh',
        '2/3-screen': '66vh',
        '3/4-screen': '75vh',
      },
    },
  },
  plugins: [],
};
