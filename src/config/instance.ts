import axios, { AxiosInstance } from "axios";

const instance: AxiosInstance = axios.create({
  baseURL: "INSERT ENDPOINT INSTANCE HERE",
});

export { instance };
