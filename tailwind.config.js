module.exports = {
  mode: "jit",
  purge: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#6E7D60",
          light: "#7F977B",
          dark: "#65895F",
        },
        secondary: "#FF725E",
        yellow: {
          DEFAULT: "#E0DA48",
          dark: "#BEA363",
        },
        gray: {
          100: "#E5E5E5",
          200: "#EDEDED",
          300: "#9E9E9E",
          400: "#737373",
          500: "#2F2F2F",
          600: "#1F1F1F",
          DEFAULT: "#646464",
          dark: "#1E1E1E",
          light: "#F9F9F9",
        },
      },
      container: {
        padding: "0.9375rem",
        center: true,
      },
      fontFamily: {
        sans: [
          "Noto Sans TC",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Roboto",
          "Helvetica Neue",
          "Arial",
          "Noto Sans",
          "sans-serif",
          "Apple Color Emoji",
          "Segoe UI Emoji",
          "Segoe UI Symbol",
          "Noto Color Emoji",
        ],
      },
      borderRadius: {
        xs: "4px",
        DEFAULT: "5px",
        nr: "8px",
        sm: "12px",
        md: "16px",
        lg: "20px",
        xl: "24px",
        "2xl": "30px",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/typography"),
    require("@tailwindcss/aspect-ratio"),
    require("@tailwindcss/line-clamp"),
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
            maxWidth: "1110px",
          },
        },
      });
    },
  ],
};
