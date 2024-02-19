import axios from "axios";
import { AxiosError } from "axios";

const http = axios.create({ baseURL: process.env.MUNERO_API_BASE });

export async function getToken(username: string, password: string) {
  try {
    const response = await http.post("/generateToken", { username, password });
    return { token: response.data.token };
  } catch (error) {
    let message;
    if (error instanceof AxiosError) {
      message = error.response?.data.message;
    }
    return { error: message || "Failed to get token" };
  }
}
