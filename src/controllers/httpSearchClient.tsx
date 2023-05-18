import axios from "axios";
import { accessKey, apiRoot } from "../helpers/constants";

const searchClient = axios.create({
  baseURL: apiRoot,
  timeout: 100000,
  params: {
    "api-key": `${accessKey}`,
  },
  headers: {
    "Content-Type": "application/json",
  },
});

export default searchClient;
