/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#00FFF5',
        secondary: '#0000FF', 
        
      },
      fontFamily: {
        primary: ["Bebas Neue", "sans-serif"],
        secondary: ["Open Sans", "sans-serif"],
      },
      boxShadow: {
        'custom': '0 0 20px #00FFF5', 
      },
    },
  },
  plugins: [],
}
