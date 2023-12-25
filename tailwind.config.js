/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {screens: {
      '3xl': '3000px',
    },},
    
  },
  plugins: [],
}
