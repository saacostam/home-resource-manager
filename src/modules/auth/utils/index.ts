export interface AuthApiError {
  response: {
    status: number;
  };
}

/**
 * Checks if an error is an `AuthApiError` by validating its partial shape.
 *
 * @param error - The error to check.
 * @returns `AuthApiError` if the error is an `AuthApiError`, otherwise `false`.
 */
export function isAuthError(error: unknown): AuthApiError | false {
  if (
    typeof error === "object" &&
    error !== null &&
    "response" in error &&
    error.response !== null &&
    typeof error.response === "object" &&
    "status" in error.response &&
    typeof error.response.status === "number" &&
    error.response.status === 401
  ) {
    return {
      response: {
        status: error.response.status,
      },
    };
  }

  return false;
}
