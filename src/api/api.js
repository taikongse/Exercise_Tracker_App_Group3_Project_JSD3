import axios from "axios";

export const host = "http://localhost:8081";

export const api = axios.create({
  baseURL: `${host}`,
});
