const BASE_URL = process.env.API_BASE_URL || "http://localhost:4413";

export interface ApiResponse<T> {
  status: number;
  data: T;
  headers: Headers;
}

export async function apiGet<T>(
  path: string,
  params?: Record<string, string>
): Promise<ApiResponse<T>> {
  const url = new URL(path, BASE_URL);
  if (params) {
    Object.entries(params).forEach(([key, value]) => {
      url.searchParams.set(key, value);
    });
  }

  const response = await fetch(url.toString());
  const data = await response.json();

  return {
    status: response.status,
    data,
    headers: response.headers,
  };
}

export function getBaseUrl(): string {
  return BASE_URL;
}
