import { BASE_URL, DEFAULT_HEADERS } from "@constants";
import axios from "axios";
import { getStorageItem, removeStorageItem, setStorageItem } from "helpers";

import { PATHS } from "../router";

const axiosInstance = axios.create({
  withCredentials: true,
  baseURL: BASE_URL,
});

export const HttpService = ({
  url,
  body = {},
  method = "GET",
  headers = {},
  params = {},
}) => {
  const config = {
    method,
    url,
    data: body,
    params,
    withCredentials: true,
  };

  config.headers = {
    ...DEFAULT_HEADERS,
    ...headers,
    "Access-Control-Allow-Credentials": "*",
  };

  return axiosInstance(config);
};

let isRefreshing = false;
let failedQueue = [];

const processQueue = (error, token = null) => {
  failedQueue.forEach((promise) => {
    if (error) {
      promise.reject(error);
    } else {
      promise.resolve(token);
    }
  });

  failedQueue = [];
};

axiosInstance.interceptors.request.use(
  (config) => {
    const accessToken = getStorageItem("accessToken");

    if (accessToken) {
      config.headers["Authorization"] = `Bearer ${accessToken}`;
    }

    return config;
  },
  (error) => {
    void Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    const originalRequest = error.config;
    const refreshToken = getStorageItem("refreshToken");

    if (
      error.response.status === 401 &&
      !originalRequest._retry &&
      refreshToken
    ) {
      if (isRefreshing) {
        return new Promise((resolve, reject) => {
          failedQueue.push({ resolve, reject });
        })
          .then((token) => {
            originalRequest.headers["Authorization"] = "Bearer " + token;
            return axiosInstance.request(originalRequest);
          })
          .catch((err) => {
            return Promise.reject(err);
          });
      }
      originalRequest._retry = true;
      isRefreshing = true;
      await refreshAccessToken();
      const access_token = getStorageItem("refreshToken");
      processQueue(null, access_token);
      isRefreshing = false;

      return axiosInstance(originalRequest);
    }

    if (error.response) {
      error.data =
        error.response.status === 500
          ? { message: "Something went wrong, please try again." }
          : error.response.data;
    } else {
      error.data = {
        message: "Something went wrong, please try again.",
      };
    }

    return Promise.reject(error.response);
  }
);

const refreshAccessToken = async () => {
  try {
    const { data } = await axios.post(`/auth/refresh`, null, {
      withCredentials: true,
    });

    setStorageItem("accessToken", data.accessToken);
    setStorageItem("refreshToken", data.refreshToken);
    processQueue(null, data.accessToken);

    return data.accessToken;
  } catch (error) {
    processQueue(error, null);
    removeStorageItem("accessToken");
    removeStorageItem("refreshToken");
    window.location.replace(PATHS.LOGIN);
  } finally {
    isRefreshing = false;
  }
};
