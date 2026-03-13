import { AxiosError } from "axios";

export interface FieldError {
  field: string;
  message: string;
}

export class ErrorResponse extends Error {
  public status: number;
  public errors?: FieldError[];

  constructor(message: string, status: number, errors?: FieldError[]) {
    super(message);
    this.status = status;
    this.errors = errors;
  }

  mockAxiosError(): AxiosError<ErrorResponse> {
    const axiosErr = new AxiosError(this.message);

    axiosErr.response = {
      data: this, // ⬅️ the class itself becomes `response.data`
      status: this.status,
      statusText: String(this.status),
      headers: {},
      config: {} as never,
    };

    return axiosErr as AxiosError<ErrorResponse>;
  }
}
