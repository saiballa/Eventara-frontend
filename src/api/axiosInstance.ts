import axios, { type AxiosInstance } from "axios";

export const api: AxiosInstance = axios.create({
  baseURL: "https://event-ticketing-managemnt-system.onrender.com",
  headers: {
    Accept: "application/json",
  },
});
