import axios from "axios";
import * as fs from "fs/promises";
import * as path from "path";

// ============================================================
// Configuration - 여기에 DATA_STRING과 카테고리명을 설정하세요
// ============================================================
const CATEGORY_NAME = "unsection-hero-sections";

// name,url 형식의 문자열 (각 줄마다 name,url)
const DATA_STRING = `Whalesync Case Study Hero Section Design,https://unsection.b-cdn.net/unsection/Whalesync%20Case%20Study%20Hero%20Section%20Design.png?class=thumbnail
Whalesync Data Syncing Solution Hero Section Design,https://unsection.b-cdn.net/unsection/Whalesync%20Data%20Syncing%20Solution%20Hero%20Section%20Design.png?class=thumbnail
Whalesync Tools connected showcase Hero Section Design,https://unsection.b-cdn.net/unsection/Whalesync%20Tools%20connected%20showcase%20Hero%20Section%20Design.png?class=thumbnail
Conversion Workflow Automation Hero Design,https://unsection.b-cdn.net/Conversion%20Workflow%20Automation%20Hero%20Design.webp?class=thumbnail
Conversion Marketing Performance Dashboard Dashboard Design,https://unsection.b-cdn.net/Conversion%20Marketing%20Performance%20Dashboard%20Dashboard%20Design.webp?class=thumbnail
Conversion Email editing Email editor Design,https://unsection.b-cdn.net/Conversion%20Email%20editing%20Email%20editor%20Design.webp?class=thumbnail
Conversion Audience Segmentation Feature Section Design,https://unsection.b-cdn.net/Conversion%20Audience%20Segmentation%20Feature%20Section%20Design.webp?class=thumbnail
Conversion Integrations Section Design,https://unsection.b-cdn.net/Conversion%20Integrations%20Section%20Design.webp?class=thumbnail
Conversion CRM Integration Hero Section Design,https://unsection.b-cdn.net/Conversion%20CRM%20Integration%20Hero%20Section%20Design.webp?class=thumbnail
GetJoy Hero Joy Design,https://unsection.b-cdn.net/GetJoy_Hero_Joy_Design.jpeg?class=thumbnail
Payy Hero Design,https://unsection.b-cdn.net/Payy_Hero_Design.jpg?class=thumbnail
Holocene Hero Section Design,https://unsection.b-cdn.net/Holocene_Hero_Section_Design.webp?class=thumbnail
Intercom Customers Hero Design,https://unsection.b-cdn.net/Intercom_Customers_Hero_Design.jpg?class=thumbnail
Intercom Blog Page Section Hero,https://unsection.b-cdn.net/Intercom_Blog_Header.jpg?class=thumbnail
Intercom Suite Hero Design,https://unsection.b-cdn.net/Intercom_Suite_Hero_Design.jpg?class=thumbnail
FIN AI Enterprise Hero Design,https://unsection.b-cdn.net/FIN_AI_Enterprise_Hero_Design.jpg?class=thumbnail
FIN AI Financial Service Hero Design,https://unsection.b-cdn.net/FIN_AI_Financial_Service_Hero_Design.jpg?class=thumbnail
FIN AI Ecommerce Hero Design,https://unsection.b-cdn.net/FIN_AI_Ecommerce_Hero_Design.jpg?class=thumbnail
Fin AI CX Model Hero Section,https://unsection.b-cdn.net/Fin_AI_CX_Model_Hero_Section.jpg?class=thumbnail
Fin AI Zendesk Hero Design,https://unsection.b-cdn.net/Fin_AI_Zendesk_Hero_Design.jpg?class=thumbnail
Fin AI Tasks Hero Design,https://unsection.b-cdn.net/Fin_AI_Tasks_Hero_Design.jpg?class=thumbnail
Fin AI Insights Hero Design,https://unsection.b-cdn.net/Fin_AI_Insights_Hero_Design.jpg?class=thumbnail
Fin AI Capabilities Hero Design,https://unsection.b-cdn.net/Fin_AI_Capabilities_Hero_Design.jpg?class=thumbnail
Fin AI Home Page Hero Design,https://unsection.b-cdn.net/Fin_AI_Home_Page_Hero_Design.jpg?class=thumbnail
Oyster Homepage Hero Section,https://unsection.b-cdn.net/Oyster_Homepage_Hero_Section.jpg?class=thumbnail
Tines University Page Hero Section,https://unsection.b-cdn.net/Tines_University_Page_Hero_Section.webp?class=thumbnail
Tines Services Page Hero Section,https://unsection.b-cdn.net/Tines_Services_Page_Hero_Section.webp?class=thumbnail
Tines Security Page Hero Section,https://unsection.b-cdn.net/Tines_Security_Page_Hero_Section.webp?class=thumbnail
Tines Platform Page Hero Section,https://unsection.b-cdn.net/Tines_Platform_Page_Hero_Section.webp?class=thumbnail
Tines Home Page Hero Section,https://unsection.b-cdn.net/Tines_Home_Page_Hero_Section.webp?class=thumbnail
Tines Case Studies Page Hero Section,https://unsection.b-cdn.net/Tines_Case_Studies_Page_Hero_Section.webp?class=thumbnail
Tines Career Page Hero Section,https://unsection.b-cdn.net/Tines_Career_Page_Hero_Section.webp?class=thumbnail
Tines Bootcamps Page Hero Section,https://unsection.b-cdn.net/Tines_Bootcamps_Page_Hero_Section.webp?class=thumbnail
Tines About Page Hero Section,https://unsection.b-cdn.net/Tines_About_Page_Hero_Section.webp?class=thumbnail
Jimo Home Page Hero Section,https://unsection.b-cdn.net/Jimo_Home_Page_Hero_Section.webp?class=thumbnail
Plain Product Page Section Hero,https://unsection.b-cdn.net/Plain_Product_Page_Section_Hero.webp?class=thumbnail
Plain Home Page Section Hero,https://unsection.b-cdn.net/Plain_Home_Page_Section_Hero.webp?class=thumbnail
Github Security Hero Section,https://unsection.b-cdn.net/Github_Security_Hero_Section.webp?class=thumbnail
Github Copilot Hero Section,https://unsection.b-cdn.net/Github_Copilot_Hero_Section.webp?class=thumbnail
GitHub Home Page Section Hero,https://unsection.b-cdn.net/cf-cc9ea830-1788-45e9-531a-1e473cd59b00.jpg?class=thumbnail
Sophia Amoruso My Story Page Section Hero,https://unsection.b-cdn.net/cf-84afafad-dc18-4804-7d3a-f54117205900.jpg?class=thumbnail
Sophia Amoruso Home Page Section Hero,https://unsection.b-cdn.net/cf-406e2643-0d08-4605-8ed7-4c34bab63400.jpg?class=thumbnail
Modal LM Page Section Hero,https://unsection.b-cdn.net/cf-86374b7e-848b-4c2e-b9da-f377d1dd8000.jpg?class=thumbnail
Flaghsip Home Page Section Hero,https://unsection.b-cdn.net/cf-8682bbac-2c9c-434b-9792-1ed524679e00.jpg?class=thumbnail
Popcorn Research Page Section Hero,https://unsection.b-cdn.net/cf-011d27ba-e6da-489c-ff45-868e384de400.jpg?class=thumbnail
Popcorn Manifesto Page Section Hero,https://unsection.b-cdn.net/cf-e2519aa8-fe47-4659-b4aa-653dbe5fe800.jpg?class=thumbnail
Popcorn Home Page Section Hero,https://unsection.b-cdn.net/cf-cedf6e06-8fff-407f-98be-7c2dceb2a800.jpg?class=thumbnail
`;
// ============================================================

const CONCURRENCY_LIMIT = 5;

interface ImageEntry {
  name: string;
  url: string;
}

function toKebabCase(str: string): string {
  return str
    .trim()
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^a-z0-9-]/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "");
}

function parseDataString(data: string): ImageEntry[] {
  const lines = data
    .split("\n")
    .map((line) => line.trim())
    .filter((line) => line.length > 0);

  const entries: ImageEntry[] = [];

  for (const line of lines) {
    const commaIndex = line.indexOf(",");
    if (commaIndex === -1) continue;

    const name = line.substring(0, commaIndex).trim();
    const url = line.substring(commaIndex + 1).trim();

    if (name && url) {
      entries.push({
        name: toKebabCase(name),
        url,
      });
    }
  }

  return entries;
}

async function downloadImage(
  entry: ImageEntry,
  outputDir: string
): Promise<{ success: boolean; name: string; path?: string; error?: string }> {
  const { name, url } = entry;
  const fileName = `${name}.jpg`;
  const filePath = path.join(outputDir, fileName);

  try {
    const response = await axios.get(url, {
      responseType: "arraybuffer",
      timeout: 30000,
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36",
      },
    });

    await fs.writeFile(filePath, response.data);
    return { success: true, name, path: filePath };
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unknown error";
    return { success: false, name, error: message };
  }
}

async function downloadWithConcurrencyLimit<T, R>(
  items: T[],
  limit: number,
  fn: (item: T) => Promise<R>
): Promise<R[]> {
  const results: R[] = [];
  const executing: Promise<void>[] = [];

  for (const item of items) {
    const p = fn(item).then((result) => {
      results.push(result);
    });

    executing.push(p as unknown as Promise<void>);

    if (executing.length >= limit) {
      await Promise.race(executing);
      executing.splice(
        executing.findIndex((e) => e === p),
        1
      );
    }
  }

  await Promise.all(executing);
  return results;
}

async function main() {
  const entries = parseDataString(DATA_STRING);

  if (entries.length === 0) {
    console.error("Error: DATA_STRING이 비어있거나 유효한 데이터가 없습니다.");
    console.error(
      "스크립트 상단의 DATA_STRING에 name,url 형식의 데이터를 추가하세요."
    );
    process.exit(1);
  }

  const projectRoot = path.resolve(__dirname, "..");
  const outputDir = path.join(projectRoot, "agent-input", CATEGORY_NAME);

  console.log(`Category: ${CATEGORY_NAME}`);
  console.log(`Output directory: ${outputDir}`);
  console.log(`Found ${entries.length} images to download`);
  console.log(`Concurrency limit: ${CONCURRENCY_LIMIT}`);
  console.log("");

  // Create output directory
  await fs.mkdir(outputDir, { recursive: true });

  // Download images with concurrency limit
  const results = await downloadWithConcurrencyLimit(
    entries,
    CONCURRENCY_LIMIT,
    (entry) => downloadImage(entry, outputDir)
  );

  // Process results
  const succeeded: string[] = [];
  const failed: { name: string; error: string }[] = [];

  for (const result of results) {
    if (result.success && result.path) {
      succeeded.push(result.path);
      console.log(`✓ Downloaded: ${result.name}`);
    } else if (!result.success) {
      failed.push({
        name: result.name,
        error: result.error || "Unknown error",
      });
      console.log(`✗ Failed: ${result.name} - ${result.error}`);
    }
  }

  // Summary
  console.log("");
  console.log("=".repeat(50));
  console.log(`Total: ${entries.length}`);
  console.log(`Success: ${succeeded.length}`);
  console.log(`Failed: ${failed.length}`);

  if (failed.length > 0) {
    console.log("");
    console.log("Failed images:");
    for (const f of failed) {
      console.log(`  - ${f.name}: ${f.error}`);
    }
    process.exit(1);
  }
}

main();
