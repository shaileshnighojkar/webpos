import axios, { AxiosError } from "axios";
import { LOCAL_STORAGE_KEY } from "../store/auth.store";

const http = axios.create({ baseURL: import.meta.env.VITE_API_BASE });

http.interceptors.request.use((config) => {
  if (config.url != "/auth/token") {
    config.headers.Authorization = localStorage.getItem(LOCAL_STORAGE_KEY);
  }

  return config;
});

export type SuccessApiResponse<T> = [T, string];
export type ErrorApiResponse = [null, string];
export type ApiResponse<T> = Promise<SuccessApiResponse<T> | ErrorApiResponse>;
export type TokenResponse = { data: { token: string } };

export async function getToken(
  username: string,
  password: string
): ApiResponse<string> {
  try {
    const payload = { username, password };
    const response = await http.post<{ data: string }>("/auth/token", payload);

    return [response.data.data, ""];
  } catch (error) {
    let errorMessage = "Error in getting auth token";

    if (error instanceof AxiosError) {
      errorMessage = error.response?.data?.error || "Invalid credentials";
    }

    return [null, errorMessage];
  }
}

export async function checkToken(): ApiResponse<boolean> {
  try {
    const response = await http.get<{ data: { isValid: boolean } }>(
      "/auth/check"
    );
    console.log(response);

    return [response.data.data.isValid, ""];
  } catch (error) {
    return [null, "Error in checking auth token"];
  }
}
