/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        premium: {
          black: '#050505',
          gold: '#D4AF37',
          gray: '#1A1A1A',
        }
      }
    },
  },
  plugins: [],
}