import axios from "axios";

const API_URL = process.env.LOGIN_API_URL;

export default axios.create({
  baseURL: API_URL,
  headers: { "content-type": "application/json" },
});
