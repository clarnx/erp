/* eslint-disable @typescript-eslint/no-var-requires */
const { fontFamily } = require("tailwindcss/defaultTheme");

const withOpacityValue = (variable) => {
  return ({ opacityValue }) => {
    if (opacityValue === undefined) {
      return `rgb(var(${variable}))`;
    }

    return `rgb(var(${variable}) / ${opacityValue})`;
  };
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        primary: ["Gotham", ...fontFamily.sans],
        secondary: ["Inter", ...fontFamily.sans],
        tertiary: ["Open Sans", ...fontFamily.sans],
      },
      colors: {
        gray: {
          // Customize it on globals.css :root
          50: withOpacityValue("--tw-color-gray-50"),
          100: withOpacityValue("--tw-color-gray-100"),
          200: withOpacityValue("--tw-color-gray-200"),
          300: withOpacityValue("--tw-color-gray-300"),
          400: withOpacityValue("--tw-color-gray-400"),
          500: withOpacityValue("--tw-color-gray-500"),
          600: withOpacityValue("--tw-color-gray-600"),
          700: withOpacityValue("--tw-color-gray-700"),
          800: withOpacityValue("--tw-color-gray-800"),
        },
        white: "#fff",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
