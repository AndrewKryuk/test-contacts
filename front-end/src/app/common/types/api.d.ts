interface ApiResponse<T = unknown> {
  statusCode: number;
  data: T;
}

interface ApiErrorResponse extends ApiResponse {
  statusCode: number;
  message: string;
  error?: Record<string, string | string[]> | string[];
}
