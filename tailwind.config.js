module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false,
  theme: {
    extend: {
      colors: {
        lightBlue: 'var(--color-light-blue)',
        borderBlue: 'var(--color-border-blue)',
        searchBarBlue: 'var(--color-search-bar-blue)',
        deepBlue: 'var(--color-deep-blue)',
        darkBlue: 'var(--color-dark-blue)',
        buttonInitialBackground: 'var(--button-initial-background)',
        buttonHoverBackground: 'var(--button-hover-background)',
      },
    },
  },
  variants: {
      extend: {},
  },
  plugins: [],
};
