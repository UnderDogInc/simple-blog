import axios from "axios";
import { router } from "@/app/providers/router";
import { RouteNames } from "@/app/providers/router/routes";

export const BASE_URL = import.meta.env.VITE_BACKEND_URL;

const API = axios.create({
  baseURL: BASE_URL,
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
  },
});

API.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response && error.response.status >= 400) {
      if (
        router &&
        router.currentRoute.value &&
        router.currentRoute.value.name !== RouteNames.NOT_FOUND
      ) {
        setTimeout(() => {
          router.push({ name: RouteNames.NOT_FOUND });
        }, 0);
      }
    }
    return Promise.reject(error);
  }
);

export default API;
