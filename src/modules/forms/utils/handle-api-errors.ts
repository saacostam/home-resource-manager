import type { AxiosError } from "axios";
import type { FieldPath, FieldValues, UseFormSetError } from "react-hook-form";
import type { BackendErrorResponse } from "@/modules/fetcher";

export function handleApiErrors<
  TFormValues extends FieldValues = FieldValues,
>(args: {
  axiosError: AxiosError;
  setError: UseFormSetError<TFormValues>;
}): void {
  const { axiosError, setError } = args;

  if (axiosError.response) {
    const errorData = axiosError.response.data as BackendErrorResponse;

    if (errorData.errors && errorData.errors.length > 0) {
      errorData.errors.forEach((err) => {
        setError(err.field as FieldPath<TFormValues>, {
          type: "server",
          message: err.message,
        });
      });
    } else {
      setError("root", {
        type: "server",
        message: errorData.message || "An unexpected server error occurred.",
      });
    }
  } else if (axiosError.request) {
    setError("root", {
      type: "network",
      message: "Network error: Please check your internet connection.",
    });
  } else {
    setError("root", {
      type: "unknown",
      message: "An unexpected client-side error occurred.",
    });
  }
}
