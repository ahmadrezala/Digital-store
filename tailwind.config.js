/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  
  theme: {
    extend: {

      colors:{
        darkGray:'#f8f8f8',
        hoverColor:"#626262",
    
          },



      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
          "headerPhone": "url('../public/homeImg/header1500.jpg')",
          
      },

     
    },
  },
  plugins: [],
}
