import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";

const initializers: AxiosRequestConfig = {
  baseURL: "http://localhost:3001",
  headers: {
    "Content-Type": "application/json"
  }
}

function AxiosInstanceCreator(): AxiosInstance {
  return axios.create(initializers);
}

export function Get(url: string): Promise<AxiosResponse<any>> {
  const axios = AxiosInstanceCreator();
  return axios.get(url);
}