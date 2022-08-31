/** @type {import('tailwindcss').Config} */
// const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    `${__dirname}/src/**/*.{tsx,ts,jsx,js}`,
    `${__dirname}/next.config.js`,
  ],
  safelist: [
    {
      pattern: /(bg|text)-slate-800/,
      variants: ["dark"],
    },
  ],
  darkMode: "class",
  variants: {
    extend: {
      display: ["group-hover"],
    },
  },
  theme: {
    extend: {
      transitionProperty: {
        width: "width",
      },
      fontFamily: {
        // "sans": ["SF Pro Rounded", defaultTheme.fontFamily.sans],
      },
      colors: {
        "background": "rgb(255, 255, 255)",
        "background-dark": "rgb(21, 42, 53)",
        "skeleton": "rgb(226, 232, 240)",
        "skeleton-dark": "rgb(41, 62, 73)",
        "transparent": "transparent",
        "primary": "rgb(36, 124, 196)",
        "secondary": "rgb(77, 161, 59)",
        "lead-black": {
          100: "#F3F2F3",
          200: "#E8E5E8",
          300: "#BCB8BB",
          400: "#797779",
          500: "#212021",
          600: "#1B171C",
          700: "#161017",
          800: "#100A13",
          900: "#0C060F",
        },
      },
      height: {
        "10vh": "10vh",
        "20vh": "20vh",
        "30vh": "30vh",
        "40vh": "40vh",
        "50vh": "50vh",
        "60vh": "60vh",
        "70vh": "70vh",
        "80vh": "80vh",
        "90vh": "90vh",
        "100vh": "100vh",
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
  ],
};
