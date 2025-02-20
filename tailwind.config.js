import plugin from "tailwindcss/plugin.js";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'blue-moon': '#2F59ED',
        'dark-moon': '#2041B7',
        'subtle-blue': '#C1D5F2',
        'off-white': '#F9F9F9',
        'white': '#FFFFFF',
        'light-grey': '#D9D9D9',
        'generic-grey': '#777777',
        'text-light': '#5F6D7E',
        'matt-black': '#2E343F',
        'accent-red': '#F93149',
        'dark-red': '#C12538',
        'accent-green': '#62C476',
        'accent-yellow': '#EDBC0D',
      },
      fontFamily: {
        'manrope': ['Manrope', {
          fontVariations: {
            wght: '200 800'
          },
          fontFeatureSettings: {
            'cv11': 'on',
            'cv06': 'on',
            'cv09': 'on'
          }
        }],
      },
      fontSize: {
        'h1': ['96px', { lineHeight: '110%', letterSpacing: '0px', color: '#2E343F' }],
        'h2': ['54px', { lineHeight: '110%', letterSpacing: '0px', color: '#2E343F' }],
        'h3': ['36px', { lineHeight: '130%', letterSpacing: '0px', color: '#2E343F' }],
        'h4': ['32px', { lineHeight: '140%', letterSpacing: '0px', color: '#2E343F' }],
        'h5': ['24px', { lineHeight: '140%', letterSpacing: '0px', color: '#2E343F' }],
        'h6': ['20px', { lineHeight: '160%', letterSpacing: '0px', color: '#2E343F' }],
        'h7': ['18px', { lineHeight: '160%', letterSpacing: '0px', color: '#2E343F' }],
        'p-large': ['24px', { lineHeight: '200%', letterSpacing: '0px', color: '#2E343F' }],
        'p': ['18px', { lineHeight: '200%', letterSpacing: '0px', color: '#2E343F' }],
        'p-small': ['16px', { lineHeight: '200%', letterSpacing: '0px', color: '#2E343F' }],
        'cta': ['14px', { lineHeight: '140%', letterSpacing: '1px', color: '#2E343F' }],
        'terms': ['14px', { lineHeight: '180%', letterSpacing: '0px', color: '#2E343F' }],
      },
      boxShadow: {
        'warning': '0 0 0 4px rgba(226, 111, 32, 0.24)',
        'error': '0 0 0 4px rgba(208, 48, 47, 0.24)',
        'success': '0 0 0 4px rgba(74, 201, 126, 0.24)',
        'default': '0 0 0 4px rgba(54, 58, 61, 0.24)',
      },
      borderColor: {
        'warning': '#EDBC0D',
        'error': '#F93149',
        'success': '#62C476',
      },
    },
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      addUtilities({
        '.scrollbar-hide': {
          /* IE and Edge */
          '-ms-overflow-style': 'none',

          /* Firefox */
          'scrollbar-width': 'none',

          /* Safari and Chrome */
          '&::-webkit-scrollbar': {
            display: 'none'
          }
        }
      })
    })
  ],
}
