import axios from "axios";
import * as fs from "fs/promises";
import * as path from "path";

interface ImageEntry {
  name: string;
  url: string;
}

function parseMarkdownFile(content: string): ImageEntry[] {
  const pattern = /\*\*(.+?)\*\*.*?`(https?:\/\/[^`]+)`/g;
  const entries: ImageEntry[] = [];
  let match;

  while ((match = pattern.exec(content)) !== null) {
    entries.push({
      name: match[1],
      url: match[2],
    });
  }

  return entries;
}

function toKebabCase(str: string): string {
  return str
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

function getExtensionFromUrl(url: string): string {
  const urlWithoutQuery = url.split("?")[0];
  const ext = path.extname(urlWithoutQuery);
  return ext || ".png";
}

async function downloadImage(
  entry: ImageEntry,
  outputDir: string
): Promise<{ success: boolean; name: string; path?: string; error?: string }> {
  const kebabName = toKebabCase(entry.name);
  const ext = getExtensionFromUrl(entry.url);
  const fileName = `${kebabName}${ext}`;
  const filePath = path.join(outputDir, fileName);

  try {
    const response = await axios.get(entry.url, {
      responseType: "arraybuffer",
      timeout: 30000,
    });

    await fs.writeFile(filePath, response.data);
    return { success: true, name: entry.name, path: filePath };
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unknown error";
    return { success: false, name: entry.name, error: message };
  }
}

async function main() {
  const args = process.argv.slice(2);

  if (args.length < 2) {
    console.error("Usage: pnpm tsx scripts/download-images.ts <groupName> <dataFilePath>");
    console.error("");
    console.error("Example:");
    console.error("  pnpm tsx scripts/download-images.ts landingfolio-stats ./data/images.md");
    process.exit(1);
  }

  const [groupName, dataFilePath] = args;
  const projectRoot = path.resolve(__dirname, "..");
  const outputDir = path.join(projectRoot, "agent-input", groupName);

  // Read data file
  let content: string;
  try {
    const resolvedPath = path.resolve(dataFilePath);
    content = await fs.readFile(resolvedPath, "utf-8");
  } catch {
    console.error(`Error: Cannot read file "${dataFilePath}"`);
    process.exit(1);
  }

  // Parse markdown
  const entries = parseMarkdownFile(content);
  if (entries.length === 0) {
    console.error("Error: No image entries found in file");
    process.exit(1);
  }

  console.log(`Found ${entries.length} images to download`);

  // Create output directory
  await fs.mkdir(outputDir, { recursive: true });

  // Download all images in parallel
  const results = await Promise.allSettled(
    entries.map((entry) => downloadImage(entry, outputDir))
  );

  // Process results
  const succeeded: string[] = [];
  const failed: { name: string; error: string }[] = [];

  for (const result of results) {
    if (result.status === "fulfilled") {
      const value = result.value;
      if (value.success && value.path) {
        succeeded.push(value.path);
        console.log(`Downloaded: ${value.path}`);
      } else if (!value.success) {
        failed.push({ name: value.name, error: value.error || "Unknown error" });
      }
    } else {
      failed.push({ name: "Unknown", error: result.reason?.message || "Unknown error" });
    }
  }

  // Summary
  console.log("");
  if (succeeded.length > 0) {
    console.log(`✓ ${succeeded.length} images downloaded successfully`);
  }
  if (failed.length > 0) {
    console.log(`✗ ${failed.length} images failed:`);
    for (const f of failed) {
      console.log(`  - ${f.name}: ${f.error}`);
    }
    process.exit(1);
  }
}

main();
