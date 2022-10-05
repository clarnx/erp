import type { TypographyPresets } from "../types";

const typographyPresets: TypographyPresets = [
  {
    key: "heading",
    props: {
      variant: "h1",
      color: "text-nero",
      size: "text-3xl", // 26px
      textAlign: "text-left",
      fontFamily: "font-primary",
      className: "font-bold", // 700
    },
  },
  {
    key: "heading2",
    props: {
      variant: "h2",
      color: "text-nero",
      size: "text-xl", // 20px
      textAlign: "text-left",
      fontFamily: "font-primary",
      className: "font-bold", // 700
    },
  },
  {
    key: "heading3",
    props: {
      variant: "h3",
      color: "text-nero",
      size: "text-lg", // 18px
      textAlign: "text-left",
      fontFamily: "font-primary",
      className: "font-medium", // 500
    },
  },
  {
    key: "subheading",
    props: {
      variant: "h4",
      color: "text-nero",
      size: "text-base", // 16px
      textAlign: "text-left",
      fontFamily: "font-primary",
      className: "font-bold", // 700
    },
  },
  {
    key: "subheading2",
    props: {
      variant: "h5",
      color: "text-nero",
      size: "text-sm", // 14px
      textAlign: "text-left",
      fontFamily: "font-primary",
      className: "font-medium", // 500
    },
  },
  {
    key: "paragraph",
    props: {
      variant: "h6",
      color: "text-nero",
      size: "text-sm", // 14px
      textAlign: "text-left",
      fontFamily: "font-primary",
      className: "font-light", // 400
    },
  },
  {
    key: "regular",
    props: {
      variant: "p",
      color: "text-nero",
      size: "text-base", // 16px
      textAlign: "text-left",
      fontFamily: "font-primary",
      className: "font-medium", // 500
    },
  },
];

export { typographyPresets };
