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
        title: '#333333',
        primary: '#2E8B57',
        secondary: '#66CDAA',
        bg: 'rgb(232, 255, 247)',
        bodyBg: '#d0d0d0',
        bgCard: 'rgba(0,0,0,.03)',
        brderCard: 'rgba(0,0,0,.125)',
      },
      fontSize: {
        '10px': '10px',
        '1.75rem': '1.75rem',
        '2rem': '2rem',
        '2.5rem': '2.5rem',
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
