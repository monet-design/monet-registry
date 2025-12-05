import waitOn from "wait-on";

export async function setup() {
  const baseUrl = process.env.API_BASE_URL || "http://localhost:4413";

  console.log(`Waiting for server at ${baseUrl}...`);

  try {
    await waitOn({
      resources: [`${baseUrl}/api/health`],
      timeout: 30000,
      interval: 1000,
      validateStatus: (status: number) => status === 200,
    });
    console.log("Server is ready!");
  } catch {
    console.error(
      "Server not available. Please start with: pnpm dev --port 4413"
    );
    process.exit(1);
  }
}

export async function teardown() {
  // Cleanup if needed
}
