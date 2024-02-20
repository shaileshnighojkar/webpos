import { AxiosError, AxiosRequestConfig } from "axios";
import crypto from "crypto";

/**
 * Get 'X-GIFTLOV-DATE' header value, current date in ddMMyyyyHHmmss format
 *
 * @returns {string} formatted current date
 */
export function getXGiftlovDate() {
  const date = new Date();

  // TODO: Convert to UCS time zone.
  return [
    date.getDate(),
    date.getMonth() + 1,
    date.getFullYear(),
    date.getHours(),
    date.getMinutes(),
    date.getSeconds(),
  ]
    .map((num) => String(num).padStart(2, "0"))
    .join("");
}

/**
 * Request signature is hashed using SHA-512 hashing algorithm using the supplier API Encryption Key.
 *
 * @param {AxiosRequestConfig} config axios request
 * @param {string} xGiftlovDate X-GIFTLOV-DATE header value
 * @param {string} token Authorization token
 * @returns {string} SHA-512 encrypted signature
 */
export function getSignature(
  config: AxiosRequestConfig,
  xGiftlovDate: string,
  token: string
) {
  const { method, url, params = {} } = config;
  const secret = process.env.MUNERO_SIGNATURE_SECRET || "";
  const hmac = crypto.createHmac("sha512", secret);

  hmac.update(
    [
      url?.slice(1),
      method?.toUpperCase(),
      Object.values(params).sort().join(""),
      xGiftlovDate,
      token,
    ].join("")
  );

  return hmac.digest("hex");
}

/**
 * Get displayable http error message for frontend consumption.
 *
 * @param {unknown} error Error object (possibly AxiosError)
 * @param {string} defaultErrorMessage Error message to show when 'error' is not from axios.
 * @returns {string} error message
 */
export function getHttpErrorResponse(
  error: unknown,
  defaultErrorMessage: string
) {
  let errorMessage;

  if (error instanceof AxiosError) {
    errorMessage = error.response?.data?.message;
  }

  return {
    data: "",
    error: errorMessage || defaultErrorMessage,
  };
}

export function getError(error: unknown, defaultErrorMessage: string) {
  let status = 500;
  let message = "Error fetching data from munero server";

  if (error instanceof AxiosError && error.response) {
    status = error.response.status;
    message = error.response.data?.message;
  }

  return { status, message };
}
