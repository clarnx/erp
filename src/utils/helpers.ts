import { AxiosError, AxiosRequestConfig } from "axios";

import { ApiResponse, mongodbInstance } from "@/config";

import logger from "./logger";

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

export async function onParseResponse<T>(args: AxiosRequestConfig<any>) {
  let formattedResponse: ApiResponse<T>;

  try {
    const { data } = await mongodbInstance({ ...args });

    formattedResponse = data;
  } catch (error) {
    const axiosError = error as AxiosError;
    const data = axiosError.response?.data as ApiResponse<T>;

    logger(error);

    formattedResponse = data;
  }

  return formattedResponse;
}

// eslint-disable-next-line @typescript-eslint/no-empty-function
export const noop = () => {};
