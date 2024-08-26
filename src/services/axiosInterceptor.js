import axios from "axios";

// Creating new axios instance
export const instance = axios.create({
  withCredentials: true,
  baseURL: `${
    import.meta.env.VITE_REACT_APP_WORKING_ENVIRONMENT === "development"
      ? import.meta.env.VITE_REACT_APP_API_BASE_URL_DEVELOPMENT
      : import.meta.env.VITE_REACT_APP_API_BASE_URL_PRODUCTION
  }`,
});
