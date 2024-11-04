/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/catalog.js', './src/productCard.js'],
  theme: {
    extend: {
      colors: {
        beige: '#F5F5DC', // Replace with your exact beige color
        taupe: '#B38B5D', // Replace with your exact taupe color
        coolGrey: '#f1f0ee',
        coolBrown: '#cbad91',
        customBlue: '#007bff'
      },
    },
  },
}

