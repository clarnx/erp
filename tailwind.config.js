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
        primary: ["Gotham", "sans-serif"],
        secondary: ["Inter", ...fontFamily.sans],
        tertiary: ["Open Sans", ...fontFamily.sans],
      },
      colors: {
        primary: {
          50: withOpacityValue("--tw-color-primary-50"),
          100: withOpacityValue("--tw-color-primary-100"),
          200: withOpacityValue("--tw-color-primary-200"),
          300: withOpacityValue("--tw-color-primary-300"),
          400: withOpacityValue("--tw-color-primary-400"),
        },
        secondary: {
          50: withOpacityValue("--tw-color-secondary-50"),
          100: withOpacityValue("--tw-color-secondary-100"),
          200: withOpacityValue("--tw-color-secondary-200"),
          300: withOpacityValue("--tw-color-secondary-300"),
        },
        tertiary: {
          50: withOpacityValue("--tw-color-tertiary-50"),
          100: withOpacityValue("--tw-color-tertiary-100"),
          200: withOpacityValue("--tw-color-tertiary-200"),
          300: withOpacityValue("--tw-color-tertiary-300"),
        },
        white: "#fff",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
