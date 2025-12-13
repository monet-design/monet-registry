declare namespace NodeJS {
  interface ProcessEnv {
    // Basic Auth for API v1
    API_BASIC_AUTH_USER?: string;
    API_BASIC_AUTH_PASSWORD?: string;

    // Existing env variables
    MY_HOST?: string;
    API_BASE_URL?: string;
  }
}
