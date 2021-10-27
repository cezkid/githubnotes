module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'disqo-blue': '#39ACDC',
        'disqo-red' : '#EC3646',
        'disqo-green' : '#57B93E'
      }
    },
  },
  variants: {
    extend: {},
  },
  corePlugins: {
    //disable default container class
    container: false
  },
  plugins: [],
}
