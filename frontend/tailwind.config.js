/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'marianne-blue': '#143552',
        'marianne-red': '#DF3A2F',
      },
      fontFamily: {
        'faustina': ['Faustina', 'serif'],
      },
    },
  },
  plugins: [],
} 