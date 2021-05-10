import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";

const initializers: AxiosRequestConfig = {
  baseURL: "http://localhost:3001",
  headers: {
    "Content-Type": "application/json"
  },
  timeout: 5000
}

function axiosInstanceCreator(): AxiosInstance {
  return axios.create(initializers);
}

export function get(url: string): Promise<AxiosResponse<any>> {
  const axios = axiosInstanceCreator();
  return axios.get(url);
}