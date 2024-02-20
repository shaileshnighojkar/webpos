import axios, { AxiosError } from "axios";
import { LOCAL_STORAGE_KEY } from "../store/auth.store";

const http = axios.create({ baseURL: import.meta.env.VITE_API_BASE });

http.interceptors.request.use((config) => {
  if (config.url != "/auth/token") {
    config.headers.Authorization = localStorage.getItem(LOCAL_STORAGE_KEY);
  }

  return config;
});

export type ApiResponse<T> = Promise<[T | null, string]>;

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

type CheckTokenResponse = { data: { isValid: boolean } };

export async function checkToken(): ApiResponse<boolean> {
  try {
    const response = await http.get<CheckTokenResponse>("/auth/check");

    return [response.data.data.isValid, ""];
  } catch (error) {
    return [null, "Error in checking auth token"];
  }
}

type ItemsResponse = { data: { items: MuneroItem[] } };

export async function getItems(): ApiResponse<MuneroItem[]> {
  try {
    const response = await http.get<ItemsResponse>("/items");

    return [response.data.data.items, ""];
  } catch (error) {
    return [null, "Error in getting items"];
  }
}
