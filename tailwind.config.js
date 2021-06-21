module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        'ig-hero': "url('./images/hero-mobile_2021.jpg')",
        'ig-hero-desk': "url('./images/xl-hero-desktop_2021.png')",
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
