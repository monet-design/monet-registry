import { describe, it, expect } from "vitest";
import { apiGet } from "../helpers/api-client";
import * as fs from "fs";
import * as path from "path";
import yaml from "js-yaml";

interface PageItem {
  id: string;
  name: string;
  title?: string;
  sections_count: number;
  status: string;
}

interface ListPagesResponse {
  success: boolean;
  pagination: {
    total: number;
    offset: number;
    limit: number;
    hasNext: boolean;
  };
  pages: PageItem[];
}

interface MetadataYaml {
  draft?: boolean;
  [key: string]: unknown;
}

function countNonDraftPagesFromMetadata(): number {
  const pagesDir = path.join(process.cwd(), "src/components/pages");

  if (!fs.existsSync(pagesDir)) {
    return 0;
  }

  const pageFolders = fs
    .readdirSync(pagesDir, { withFileTypes: true })
    .filter((dirent) => dirent.isDirectory())
    .map((dirent) => dirent.name);

  let count = 0;
  for (const folder of pageFolders) {
    const metadataPath = path.join(pagesDir, folder, "metadata.yaml");
    if (fs.existsSync(metadataPath)) {
      try {
        const content = fs.readFileSync(metadataPath, "utf-8");
        const metadata = yaml.load(content) as MetadataYaml;
        if (metadata.draft !== true) {
          count++;
        }
      } catch {
        // Skip invalid metadata files
      }
    }
  }

  return count;
}

describe("GET /api/v1/pages", () => {
  it("should return pages from the correct location (src/components/pages)", async () => {
    const { status, data } = await apiGet<ListPagesResponse>("/api/v1/pages", {
      limit: "1",
    });

    expect(status).toBe(200);
    expect(data.success).toBe(true);
    expect(data.pagination).toBeDefined();
  });

  it("should return the same count as non-draft pages in metadata", async () => {
    const { data } = await apiGet<ListPagesResponse>("/api/v1/pages", {
      limit: "1",
    });

    const apiTotal = data.pagination.total;
    const metadataCount = countNonDraftPagesFromMetadata();

    expect(apiTotal).toBe(metadataCount);
    expect(apiTotal).toBeGreaterThan(0);
  });

  it("should have valid page data structure", async () => {
    const { data } = await apiGet<ListPagesResponse>("/api/v1/pages", {
      limit: "5",
    });

    expect(data.pages.length).toBeGreaterThan(0);

    for (const page of data.pages) {
      expect(page.id).toBeDefined();
      expect(typeof page.id).toBe("string");
      expect(page.name).toBeDefined();
      expect(typeof page.sections_count).toBe("number");
      expect(page.sections_count).toBeGreaterThan(0);
    }
  });

  it("should return all pages when fetching with high limit", async () => {
    const { data } = await apiGet<ListPagesResponse>("/api/v1/pages", {
      limit: "50",
    });

    const metadataCount = countNonDraftPagesFromMetadata();

    expect(data.pages.length).toBe(Math.min(metadataCount, 50));
    expect(data.pagination.total).toBe(metadataCount);
  });
});
