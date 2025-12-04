/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          yellow: '#fba201', // Primary brand color
          black: '#3c3c3c',  // Text and dark elements
          dark: '#1a1a1a',   // Deep contrast for sections
          gray: '#f3f4f6',   // Background accents
        }
      },
      fontFamily: {
        sans: ['Instrument Sans', 'sans-serif'], // Modern geometric sans-serif for clean, professional look
      },
      animation: {
        'marquee': 'marquee 25s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        }
      }
    },
  },
  plugins: [],
}
