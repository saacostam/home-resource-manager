import type { AxiosError } from "axios";
import { describe, it, expect, vi, beforeEach } from "vitest";
import { handleApiErrors } from "./handle-api-errors";

describe("handleApiErrors", () => {
  const setError = vi.fn();

  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("should set field-specific errors when response has errors array", () => {
    const axiosError = {
      response: {
        data: {
          errors: [
            { field: "email", message: "Invalid email" },
            { field: "password", message: "Too short" },
          ],
        },
      },
    } as unknown as AxiosError;

    handleApiErrors({ axiosError, setError });

    expect(setError).toHaveBeenCalledTimes(2);
    expect(setError).toHaveBeenCalledWith("email", {
      type: "server",
      message: "Invalid email",
    });
    expect(setError).toHaveBeenCalledWith("password", {
      type: "server",
      message: "Too short",
    });
  });

  it("should set root error with message when response has no errors array", () => {
    const axiosError = {
      response: {
        data: {
          message: "Something went wrong",
        },
      },
    } as unknown as AxiosError;

    handleApiErrors({ axiosError, setError });

    expect(setError).toHaveBeenCalledTimes(1);
    expect(setError).toHaveBeenCalledWith("root", {
      type: "server",
      message: "Something went wrong",
    });
  });

  it("should set root error with default message when response has no message or errors", () => {
    const axiosError = {
      response: {
        data: {},
      },
    } as unknown as AxiosError;

    handleApiErrors({ axiosError, setError });

    expect(setError).toHaveBeenCalledWith("root", {
      type: "server",
      message: "An unexpected server error occurred.",
    });
  });

  it("should set network error when request exists but response is missing", () => {
    const axiosError = {
      request: {},
    } as unknown as AxiosError;

    handleApiErrors({ axiosError, setError });

    expect(setError).toHaveBeenCalledWith("root", {
      type: "network",
      message: "Network error: Please check your internet connection.",
    });
  });

  it("should set unknown error when neither request nor response exist", () => {
    const axiosError = {} as AxiosError;

    handleApiErrors({ axiosError, setError });

    expect(setError).toHaveBeenCalledWith("root", {
      type: "unknown",
      message: "An unexpected client-side error occurred.",
    });
  });
});
