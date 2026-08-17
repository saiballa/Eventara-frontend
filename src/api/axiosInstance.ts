import axios, {
  type AxiosInstance,
  InternalAxiosRequestConfig,
  AxiosError,
} from "axios";
import Cookies from "js-cookie";

export const api: AxiosInstance = axios.create({
  baseURL: "https://event-ticketing-managemnt-system.onrender.com",
  headers: {
    Accept: "application/json",
  },
});

// -------------------------
// REQUEST INTERCEPTOR
// -------------------------

api.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    const accessToken = Cookies.get("access-token");

    console.log("REQUEST INTERCEPTOR");
  console.log("URL:", config.url);
  console.log("ACCESS TOKEN:", accessToken);

    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }

    console.log(
    "AUTH HEADER:",
    config.headers.Authorization
  );


    return config;
  },
  (error: AxiosError) => {
    return Promise.reject(error);
  },
);

// -------------------------
// RESPONSE INTERCEPTOR
// -------------------------

api.interceptors.response.use(
  (response) => {
    return response;
  },

  async (error: AxiosError) => {

    const originalRequest = error.config as InternalAxiosRequestConfig & {
      _retry?: boolean;
    };

    // Only handle 401 responses
    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      try {
        const refreshToken = Cookies.get("refresh-token");

        if (!refreshToken) {
          return Promise.reject(error);
        }

        // Call refresh-token API
        const response = await api.post(
          "/api/v1/auth/refresh-token",
          {
            refreshToken,
          },
          {
            headers: {
              Authorization: `Bearer ${refreshToken}`,
            },
          },
        );

        const { accessToken: newAccessToken, refreshToken: newRefreshToken } =
          response.data.data;

        // Replace old tokens with new tokens
        Cookies.set("access-token", newAccessToken);
        Cookies.set("refresh-token", newRefreshToken);

        // Put new access token on the original request
        originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;

        // Retry original request
        return api(originalRequest);
      } catch (refreshError) {
        // Refresh token is invalid/expired
        Cookies.remove("access-token");
        Cookies.remove("refresh-token");

        return Promise.reject(refreshError);
      }
    }

    return Promise.reject(error);
  },
);
