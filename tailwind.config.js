module.exports = {
  purge: [ "./src/_includes/**/*.njk", "./src/*.html" ],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {
      typography: ['dark']
    }
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
