import { getHttpErrorResponse } from "./helpers";
import http, { TOKEN_API_URL } from "./http";

export type ApiResponse = Promise<{ data: string; error: string }>;

export async function getToken(
  username: string,
  password: string
): ApiResponse {
  try {
    const response = await http.post(TOKEN_API_URL, { username, password });
    return { data: response.data.token, error: "" };
  } catch (error) {
    return getHttpErrorResponse(error, "Failed to get token");
  }
}

export async function checkToken(token?: string): ApiResponse {
  try {
    const headers = { Authorization: token };
    const response = await http.post("/checkToken", {}, { headers });
    return { data: response.data, error: "" };
  } catch (error) {
    return getHttpErrorResponse(error, "Failed to check token");
  }
}
