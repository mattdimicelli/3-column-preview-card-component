module.exports = {
  mode: 'jit',
  purge: [
    './dist/**/*.html',
    './src/**/*.js',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'bright-orange': 'hsl(31, 77%, 52%)',
        'dark-cyan': 'hsl(184, 100%, 22%)',
        'very-dark-cyan': 'hsl(179, 100%, 13%)',
        'white-par': 'hsla(0, 0%, 100%, 0.75)',
        'very-light-grey': 'hsl(0, 0%, 95%)',
      }
    },
    fontSize: {
      'xs': '.75rem',
      'sm': '.875rem',
      'tiny': '.938rem',
       'base': '1rem',
       'lg': '1.125rem',
       'xl': '1.25rem',
       '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
       '5xl': '3rem',
       '6xl': '4rem',
      '7xl': '5rem',
     },
     fontFamily: {
       'lexend-deca': ['Lexend Deca', 'sans-serif'],
       'big-shoulders': ['Big Shoulders Display', 'cursive'],
     }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
