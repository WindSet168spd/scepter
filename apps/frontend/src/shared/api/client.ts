enum HttpMethod {
  GET = "GET",
  POST = "POST",
  PUT = "PUT",
  DELETE = "DELETE",
}

async function apiRequest<T>(
  endpoint: string,
  method: HttpMethod,
  body?: unknown,
  headers: HeadersInit = { "Content-Type": "application/json" },
): Promise<T> {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;
  const response = await fetch(apiUrl + endpoint, {
    method,
    headers,
    body: body ? JSON.stringify(body) : undefined,
  });

  return (await response.json()) as T;
}

export const apiClient = {
  get: <T>(endpoint: string) => apiRequest<T>(endpoint, HttpMethod.GET),

  post: <T>(endpoint: string, body: unknown) =>
    apiRequest<T>(endpoint, HttpMethod.POST, body),

  put: <T>(endpoint: string, body: unknown) =>
    apiRequest<T>(endpoint, HttpMethod.PUT, body),

  delete: <T>(endpoint: string, body: unknown) =>
    apiRequest<T>(endpoint, HttpMethod.DELETE, body),
};
