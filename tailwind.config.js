module.exports = {
  mode: "jit",
  purge: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#1EB893",
        },
        secondary: "#0085FF",
        gray: {
          100: "#F6F6F6",
          200: "#F0F0F0",
          DEFAULT: "#A8A8A8",
          dark: "#333333",
        },
      },
      container: {
        padding: "0.9375rem",
        center: true,
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/typography"),
    require("@tailwindcss/aspect-ratio"),
    function ({ addComponents }) {
      addComponents({
        ".container": {
          maxWidth: "100%",
          "@screen sm": {
            maxWidth: "540px",
          },
          "@screen md": {
            maxWidth: "720px",
          },
          "@screen lg": {
            maxWidth: "960px",
          },
          "@screen xl": {
            maxWidth: "1296px",
          },
        },
      });
    },
  ],
};
