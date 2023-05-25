import axios from "axios";

const apiURLDomain = process.env.REACT_APP_API_URL;

export const apiClient = axios.create({
  baseURL: apiURLDomain,
  withCredentials: true,
});
