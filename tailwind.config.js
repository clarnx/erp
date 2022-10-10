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
        nero: withOpacityValue("--tw-color-nero"),
        improbable: withOpacityValue("--tw-color-improbable"),
        adirondack: withOpacityValue("--tw-color-adirondack"),
        beluga: withOpacityValue("--tw-color-beluga"),
        maculataBark: withOpacityValue("--tw-color-maculata-bark"),
        belcherMetal: withOpacityValue("--tw-color-belcher-metal"),
        platinumGrey: withOpacityValue("--tw-color-platinum-grey"),
        poppySurprise: withOpacityValue("--tw-color-poppy-surprise"),
        icicles: withOpacityValue("--tw-color-icicles"),
        polarDrift: withOpacityValue("--tw-color-polar-drift"),
        shishaCoal: withOpacityValue("--tw-color-shisha-coal"),
        blackOut: withOpacityValue("--tw-color-black-out"),
        superSilver: withOpacityValue("--tw-color-super-silver"),
        silverback: withOpacityValue("--tw-color-silverback"),
        disable: withOpacityValue("--tw-color-disable"),
        whiteSmoke: withOpacityValue("--tw-color-white-smoke"),
        whisper: withOpacityValue("--tw-color-whisper"),
        white: "#fff",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
