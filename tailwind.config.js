/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'selector',
  mode: 'jit',
  content: ["./dist/*.{html,js}"],
  theme: {
      colors: {
        green: '#86bc25',
        red: '#FF0000',
        white: '#ffffff',
        lightBg: '#F3EFE7',
        darkBg: '#F3EFE7',
        black: '#000000',
        bodyText: '#6b6b6b',
        border: '#c9c9c9',
        borderDark: '#292929',

      },
    fontFamily: {
      'sans': ['Open Sans'],
      'serif': ['Open Sans'],
      'mono': ['Open Sans',],
      'display': ['Open Sans'],
      'body': ['"Open Sans"',],
    },
    extend: {
      animation: {
        marquee: 'marquee 25s linear infinite',
        marquee2: 'marquee2 25s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        marquee2: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0%)' },
        },
      },
    },
  },
  plugins: [],
}

