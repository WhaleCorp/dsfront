/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        '3xl': '3000px',
        '2xlm': { 'max': '1535px' },
        'xlm': { 'max': '1279px' },
        'lgm': { 'max': '1023px' },
        'mdm': { 'max': '767px' },
        'smm': { 'max': '639px' },
      },
      fontSize: {
        xxs: ['0.625rem','0.875rem'],
      }
    },

  },
  plugins: [],
}
