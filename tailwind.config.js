/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        body: ['rawline'],
        sans: ['rawline'],
      },
      screens: {
        sm: '640px',
        md: '768px',
        lg: '992px',
        xl: '1400px',
        '2xl': '1920px',
      },
      fontSize: {
        xs: [
          '10px',
          {
            lineHeight: '12px',
          },
        ],
        sm: [
          '12px',
          {
            lineHeight: '14px',
          },
        ],
        base: [
          '14px',
          {
            lineHeight: '16px',
          },
        ],
        lg: [
          '24px',
          {
            lineHeight: '44px',
          },
        ],
        xl: [
          '32px',
          {
            lineHeight: '52px',
          },
        ],
        xxl: [
          '40px',
          {
            lineHeight: '50px',
          },
        ],
        xxxl: [
          '60px',
          {
            lineHeight: '70px',
          },
        ],
      },
    },
  },
  plugins: [],
}
