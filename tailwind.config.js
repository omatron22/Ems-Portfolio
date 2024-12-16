/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Scans all JS, JSX, TS, TSX files
    "./public/index.html",        // Includes your index.html
  ],
  theme: {
    extend: {
      fontFamily: {
        clash: ['"Clash Display"', "sans-serif"],
      },
      colors: {
        'deep-black-blue': '#1A1A2E',
        'jet-black': '#111827',
        'light-mist': '#F8FAFC',
        'neon-yellow': '#FACC15',
      }
    },
  },
  plugins: [],
}
