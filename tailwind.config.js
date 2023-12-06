/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.html',
    './src/**/*.tsx',
  ],
  theme: {
    extend: {
      colors: {
        'floral': '#FFFAF2',
        'orange': '#FF8B5C',
        'jet': '#2C2C2C',
        'dark-grey': '#1F1F1F',
        'white': '#FFFFFF',
        'black': '#000000',
      },
      fontFamily: {
        title: ['Poppins', 'sans-serif'],
        text: ['Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
