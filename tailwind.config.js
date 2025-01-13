/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html, js}"],
  theme: {
    extend: {
      container: {
        center: true,
        screens: {
          md: "1080px",
        },
      },
      backgroundImage: {
        "hero-desktop": "url('../images/desktop/image-hero.jpg')",
        "hero-mobile": "url('../images/mobile/image-hero.jpg')",
      },
      fontFamily: {
        primary: ["Alata", "sans-serif"],
        josefin: ["Josefin Sans", "sans-serif"],
      },

      colors: {
        "dark-gray": "hsl(0, 0%, 55%)",
        "darker-gray": "hsl(0, 0%, 41%)",
      },
    },
  },
  plugins: [],
};
