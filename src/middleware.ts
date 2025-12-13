import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

/**
 * Basic Auth Middleware for API v1 routes
 *
 * Validates Authorization header against environment variables:
 * - API_BASIC_AUTH_USER
 * - API_BASIC_AUTH_PASSWORD
 */
export function middleware(request: NextRequest) {
  const user = process.env.API_BASIC_AUTH_USER;
  const password = process.env.API_BASIC_AUTH_PASSWORD;

  // If credentials are not configured, skip authentication
  if (!user || !password) {
    return NextResponse.next();
  }

  const authHeader = request.headers.get("authorization");

  // Check for Basic Auth header
  if (!authHeader || !authHeader.startsWith("Basic ")) {
    return unauthorizedResponse();
  }

  // Decode and validate credentials
  try {
    const base64Credentials = authHeader.slice(6); // Remove "Basic " prefix
    const credentials = atob(base64Credentials);
    const [providedUser, providedPassword] = credentials.split(":");

    if (providedUser === user && providedPassword === password) {
      return NextResponse.next();
    }
  } catch {
    // Invalid base64 encoding
    return unauthorizedResponse();
  }

  return unauthorizedResponse();
}

function unauthorizedResponse(): NextResponse {
  return NextResponse.json(
    {
      success: false,
      error: {
        code: "UNAUTHORIZED",
        message:
          "Authentication required. Please provide valid Basic Auth credentials.",
      },
      recovery: {
        suggestions: [
          "Include Authorization header with Basic Auth",
          "Format: Authorization: Basic base64(username:password)",
        ],
      },
    },
    {
      status: 401,
      headers: {
        "WWW-Authenticate": 'Basic realm="API v1"',
      },
    }
  );
}

// Only apply to /api/v1/* routes
export const config = {
  matcher: "/api/v1/:path*",
};
