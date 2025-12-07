import fs from "fs";
import path from "path";
import yaml from "js-yaml";
import { PageList } from "./page-list";

export const dynamicParams = true;

export interface PageMetadata {
  name: string;
  category?: string;
  createdAt?: string;
  status?: string;
}

function getPageMetadata(pagesDir: string, pageName: string): PageMetadata {
  const metadataPath = path.join(pagesDir, pageName, "metadata.yaml");
  let metadata: PageMetadata = { name: pageName };

  if (fs.existsSync(metadataPath)) {
    try {
      const content = fs.readFileSync(metadataPath, "utf-8");
      const parsed = yaml.load(content) as Record<string, unknown>;
      metadata = {
        name: pageName,
        category: parsed.category as string | undefined,
        createdAt: parsed.createdAt as string | undefined,
        status: parsed.status as string | undefined,
      };
    } catch {
      // If parsing fails, use default metadata
    }
  }

  return metadata;
}

export default async function ExamplePageListPage() {
  const pagesDir = path.join(process.cwd(), "src/components/registry/pages");

  if (!fs.existsSync(pagesDir)) {
    return <div>Pages directory not found: {pagesDir}</div>;
  }

  const pages = fs.readdirSync(pagesDir).filter((file) => {
    return fs.statSync(path.join(pagesDir, file)).isDirectory();
  });

  const pagesWithMetadata = pages.map((pageName) => ({
    name: pageName,
    metadata: getPageMetadata(pagesDir, pageName),
  }));

  const uniqueDates = [
    ...new Set(
      pagesWithMetadata
        .map((p) => p.metadata.createdAt?.split("T")[0])
        .filter((date): date is string => !!date)
    ),
  ].sort((a, b) => new Date(b).getTime() - new Date(a).getTime());

  return <PageList pages={pagesWithMetadata} availableDates={uniqueDates} />;
}
