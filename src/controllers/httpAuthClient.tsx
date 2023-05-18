import axios from "axios";

const LOGIN_API_URL = process.env.REACT_APP_LOGIN_API_URL;

const authClient = axios.create({
  baseURL: LOGIN_API_URL,
  timeout: 100000,
  headers: { "content-type": "application/json" },
});

export default authClient;
