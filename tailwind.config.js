module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    backgroundColor: theme => ({
      ...theme('colors'),
      'primary': '#0B255B',
    })
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
