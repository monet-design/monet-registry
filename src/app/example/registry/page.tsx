import fs from "fs";
import path from "path";
import { notFound } from "next/navigation";
import dynamic from "next/dynamic";
import yaml from "js-yaml";
import { RegistryList } from "./registry-list";

// Force dynamic rendering since we are reading from the filesystem and using searchParams
export const dynamicParams = true;

export interface ComponentMetadata {
  name: string;
  category?: string;
  createdAt?: string;
  status?: string;
}

interface PageProps {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

function getComponentMetadata(
  registryDir: string,
  componentName: string
): ComponentMetadata {
  const metadataPath = path.join(registryDir, componentName, "metadata.yaml");
  let metadata: ComponentMetadata = { name: componentName };

  if (fs.existsSync(metadataPath)) {
    try {
      const content = fs.readFileSync(metadataPath, "utf-8");
      const parsed = yaml.load(content) as Record<string, unknown>;
      metadata = {
        name: componentName,
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

export default async function RegistryPage({ searchParams }: PageProps) {
  const resolvedSearchParams = await searchParams;
  const name = resolvedSearchParams.name;

  const registryDir = path.join(process.cwd(), "src/components/registry");

  // Ensure registry directory exists
  if (!fs.existsSync(registryDir)) {
    return <div>Registry directory not found: {registryDir}</div>;
  }

  const components = fs.readdirSync(registryDir).filter((file) => {
    return fs.statSync(path.join(registryDir, file)).isDirectory();
  });

  if (name?.length > 0) {
    const componentName = Array.isArray(name) ? name[0] : name;

    if (!components.includes(componentName)) {
      notFound();
    }

    const Component = dynamic(() =>
      import(`@/components/registry/${componentName}/index`).catch(() => {
        return () => <div>Failed to load component</div>;
      })
    );

    return (
      <>
        <style>{`
          header, footer { display: none !important; }
          #app-root { min-height: 0 !important; display: block !important; }
        `}</style>
        <div className="min-h-screen flex items-center justify-center bg-white">
          <Component />
        </div>
      </>
    );
  }

  // Get metadata for all components
  const componentsWithMetadata = components.map((componentName) => ({
    name: componentName,
    metadata: getComponentMetadata(registryDir, componentName),
  }));

  // Extract unique dates for filtering (date part only, e.g., "2025-11-30")
  const uniqueDates = [
    ...new Set(
      componentsWithMetadata
        .map((c) => c.metadata.createdAt?.split("T")[0])
        .filter((date): date is string => !!date)
    ),
  ].sort((a, b) => new Date(b).getTime() - new Date(a).getTime());

  return (
    <RegistryList
      components={componentsWithMetadata}
      availableDates={uniqueDates}
    />
  );
}
