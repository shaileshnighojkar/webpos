import axios from "axios";
import { getXGiftlovDate, getSignature } from "./helpers";

const http = axios.create({ baseURL: process.env.MUNERO_API_BASE });

export const TOKEN_API_URL = "/generateToken";

http.interceptors.request.use((config) => {
  const xGiftlovDate = getXGiftlovDate();
  const token = config.headers.Authorization as string;

  config.headers["Accept"] = "application/json";
  config.headers["Content-Type"] = "application/json";
  config.headers["X-GIFTLOV-DATE"] = xGiftlovDate;

  if (config.url != TOKEN_API_URL) {
    config.headers["signature"] = getSignature(config, xGiftlovDate, token);
  }

  console.log("--- url", config.url);
  console.log(config.headers);

  return config;
});

export default http;
