/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    container: {
      // default breakpoints but with 40px removed
      center: true,
    },
    screens: {
      sm: '575px',
      md: '767px',
      xlg: '872px',
      lg: '991px',
      xl: '1200px',
      xxl: '1500px',
    },

    extend: {
      colors: {
        body: '#212529',
        title: '#222222',
        primary: '#2E8B57',
        secondary: '#66CDAA',
        bg: 'rgb(232, 255, 247)',
        bodyBg: '#d0d0d0',
      },
      fontSize: {
        '14px': '14px',
        '32px': '32px',
        '50px': '50px',
        '54px': '54px',
      },
      spacing: {
        '30px': '30px',
        '120px': '120px',
        '70px': '70px',
        '80px': '80px',
        '500px': '500px',
      },
      boxShadow: {},
      animation: {
        shine: 'shine 1s',
      },
      keyframes: {
        shine: {
          '100%': { left: '125%' },
        },
      },
    },

    fontFamily: {
      main: ["'Baloo Da 2', cursive"],
      title: ["'Tiro Bangla', serif"],
      eng: ["'Open Sans', sans-serif"],
    },
  },

  plugins: [],
}
