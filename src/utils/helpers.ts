export const capitalizeFirstLetter = (string: string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

export const GeneratePageTitle = (pathname: string) => {
  return pathname
    .substring(pathname.lastIndexOf("/"), pathname.length)
    .replaceAll("/", "")
    .split("-")
    .map((str) => {
      return capitalizeFirstLetter(str);
    })
    .join(" ");
};

export const camelize = (string: string) => {
  return string
    .replace(/(?:^\w|[A-Z]|\b\w)/g, function (word, index) {
      return index === 0 ? word.toLowerCase() : word.toUpperCase();
    })
    .replace(/\s+/g, "");
};
