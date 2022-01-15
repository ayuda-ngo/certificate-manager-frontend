import axios from "axios";
import { API_URI } from "../config";

const instance = axios.create({
  baseURL: API_URI,
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
    "Access-Control-Allow-Headers":
      "X-Requested-With, content-type, Authorization",
    "Authorization": `Bearer ${process.env.API_KEY}`,
  },
  validateStatus: (status) => {
    return status < 500;
  },
});

export default instance;
