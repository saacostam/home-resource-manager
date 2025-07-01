export interface BackendErrorResponse {
  success: boolean;
  message: string;
  errors?: { field: string; message: string }[];
}
