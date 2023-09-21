/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'bar': 'bar 2s linear 1',
      },
      keyframes: {
        bar: {
          '0%': { width: '100%' },
          '100%': { width: '0' },
        }
      }
    },
  },
  plugins: [],
}

