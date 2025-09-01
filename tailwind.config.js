/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['JMH Beda', 'system-ui', 'sans-serif'],
        serif: ['JMH Beda', 'Georgia', 'serif'],
        display: ['Chomsky', 'JMH Beda', 'system-ui', 'sans-serif'],
        chomsky: ['Chomsky', 'system-ui', 'sans-serif'],
        beda: ['JMH Beda', 'system-ui', 'sans-serif'],
      },
      animation: {
        'pulse-slow': 'pulse 3s ease-in-out infinite',
        'scan': 'scan 4s linear infinite',
      },
    },
  },
  plugins: [],
}