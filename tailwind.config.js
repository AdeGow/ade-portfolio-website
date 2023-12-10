/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './src/**/*.html',
    './src/**/*.tsx',
  ],
  theme: {
    extend: {
      colors: {
        'floral': '#FFFAF2',
        'coral': '#FF8B5C',
        'jet': '#2C2C2C',
        'dark-grey': '#1F1F1F',
        'white': '#FFFFFF',
        'black': '#000000',
      },
      fontFamily: {
        title: ['Poppins', 'sans-serif'],
        text: ['Roboto', 'sans-serif'],
      },
      backgroundImage: {
        'plant': "url('../assets/plant.jpeg')",
        'wave-orange-bottom-three-layers': "url('../assets/wave-orange-bottom-three-layers.svg')",
      }
    },
  },
  plugins: [],
}
