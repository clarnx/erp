import axios, { AxiosInstance } from "axios";

const mongodbInstance: AxiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
});

export { mongodbInstance };
