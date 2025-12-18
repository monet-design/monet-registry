const BASE_URL = process.env.API_BASE_URL || "http://localhost:4413";

// Basic Auth credentials from environment
const API_USER = process.env.API_BASIC_AUTH_USER;
const API_PASSWORD = process.env.API_BASIC_AUTH_PASSWORD;

export interface ApiResponse<T> {
  status: number;
  data: T;
  headers: Headers;
}

function getAuthHeader(): Record<string, string> {
  if (API_USER && API_PASSWORD) {
    const credentials = Buffer.from(`${API_USER}:${API_PASSWORD}`).toString(
      "base64"
    );
    return { Authorization: `Basic ${credentials}` };
  }
  return {};
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

  const response = await fetch(url.toString(), {
    headers: getAuthHeader(),
  });
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
