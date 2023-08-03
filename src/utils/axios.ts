import axios from "axios";
import { getEnv } from "../resources/env";

// TODO: https://gist.github.com/klequis/fd9c3cf5b025cc26a282ea30ef8ff6da
const axiosInstance = axios.create({
  baseURL: getEnv("APP_BASE_API_URL"),
});

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error?.response?.status === 401) {
      window.location.replace("/");
    }
    return Promise.reject(
      (error?.response && error?.response?.data) ||
        error ||
        "Something went wrong"
    );
  }
);

export default axiosInstance;
