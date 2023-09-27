/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily:{
        open : 'var(--font-open)',
        raleway : 'var(--font-raleway)',
      },
      colors:{
        gray:{
          100: '#D9D9D9',
          200: '#292B32',
          600: '#1E1E22',
        },
        blue: {
          100: '#ECF4FF',
          200: '#B6BFDC',
          300: '#C8CAFF',
          500: '#809CFF',
          600: '#11297C',
          900: '#12121B'
        },
        violet:{
          100: '#D9D9D9',
          300: '#A6A7C2',
          700: '#6A62CC',
          900: '#756B9B',
        },
        purple: {
          950: '#12121B',
        }
      },
      transitionDuration: {
        '500' : '500ms',
      },
      rotate: {
        '225' : '225deg',
      }
      
    },
  },
  plugins: [],
}
