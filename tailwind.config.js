module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false,
  theme: {
    extend: {
      colors: {
        lightBlue: 'var(--color-light-blue)',
        borderBlue: 'var(--color-border-blue)',
        searchBarBlue: 'var(--color-search-bar-blue)',
      },
    },
  },
  variants: {
      extend: {},
  },
  plugins: [],
};
