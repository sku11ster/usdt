/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    './node_modules/preline/dist/*.js'

  

  ],
  theme: {
    extend: {
      fontFamily: {
        'mons': ['Montserrat','arial'],
        
      },
      colors: {
        'custom-color': '#030304',
        'colorbg':'#E1D694', // Replace '#ABCDEF' with your desired hex color code
      },
      boxShadow: {
        'black': '2px 2px 4px 0px rgba(0,0,0,1)'
      },
    },
  },
  plugins: [
    require('preline/plugin'),

  ],
}


