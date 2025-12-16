/**
 * 빌드 완료 후 캐시 무효화 스크립트
 * Vercel 커스텀 빌드 스크립트에서 호출
 *
 * Usage:
 *   pnpm postbuild:revalidate
 *
 * Required env vars:
 *   - MY_HOST: 프로덕션 호스트 (e.g., registry.monet.design)
 *   - API_BASIC_AUTH_USER: Basic Auth 사용자
 *   - API_BASIC_AUTH_PASSWORD: Basic Auth 비밀번호
 */

const MY_HOST = process.env.MY_HOST;
const AUTH_USER = process.env.API_BASIC_AUTH_USER;
const AUTH_PASS = process.env.API_BASIC_AUTH_PASSWORD;

async function main() {
  console.log("[postbuild] Starting cache revalidation...");

  if (!MY_HOST) {
    console.log("[postbuild] MY_HOST not set, skipping revalidate");
    console.log("[postbuild] This is expected for local builds");
    return;
  }

  if (!AUTH_USER || !AUTH_PASS) {
    console.log("[postbuild] API_BASIC_AUTH credentials not set, skipping");
    return;
  }

  const API_URL = `https://${MY_HOST}/api/v1/revalidate`;
  console.log(`[postbuild] Calling revalidate API: ${API_URL}`);

  try {
    const credentials = Buffer.from(`${AUTH_USER}:${AUTH_PASS}`).toString(
      "base64"
    );

    const response = await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Basic ${credentials}`,
      },
      body: JSON.stringify({ target: "all" }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error(`[postbuild] Revalidate failed: ${response.status}`);
      console.error(`[postbuild] Response: ${errorText}`);
      // 빌드 실패로 처리하지 않음 (캐시 무효화 실패는 치명적이지 않음)
      return;
    }

    const result = await response.json();
    console.log("[postbuild] Revalidate success:", JSON.stringify(result));
  } catch (error) {
    console.error("[postbuild] Revalidate error:", error);
    // 빌드 실패로 처리하지 않음
  }
}

main();
