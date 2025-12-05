import fs from "fs";
import path from "path";
import yaml from "js-yaml";

const REGISTRY_DIR = path.join(process.cwd(), "src/components/registry");

interface MetadataWithTags {
  tags?: {
    functional?: string[];
    style?: string[];
    layout?: string[];
    industry?: string[];
  };
  [key: string]: unknown;
}

async function addEmptyTags() {
  // registry 디렉토리 내 모든 컴포넌트 찾기
  const componentDirs = fs.readdirSync(REGISTRY_DIR).filter((dir) => {
    const metadataPath = path.join(REGISTRY_DIR, dir, "metadata.yaml");
    return fs.existsSync(metadataPath);
  });

  console.log(`Found ${componentDirs.length} components with metadata.yaml`);

  let updatedCount = 0;

  for (const componentName of componentDirs) {
    const metadataPath = path.join(REGISTRY_DIR, componentName, "metadata.yaml");
    const content = fs.readFileSync(metadataPath, "utf-8");
    const data = yaml.load(content) as MetadataWithTags;

    // tags가 없거나, 하위 필드가 없는 경우 처리
    const needsUpdate =
      !data.tags ||
      (!data.tags.functional &&
        !data.tags.style &&
        !data.tags.layout &&
        !data.tags.industry);

    if (needsUpdate) {
      data.tags = {
        functional: [],
        style: [],
        layout: [],
        industry: [],
      };

      const yamlStr = yaml.dump(data, {
        lineWidth: -1,
        noRefs: true,
        quotingType: '"',
        forceQuotes: false,
      });

      fs.writeFileSync(metadataPath, yamlStr);
      console.log(`Updated: ${componentName}`);
      updatedCount++;
    }
  }

  console.log(`\nDone! Updated ${updatedCount} files.`);
}

addEmptyTags().catch(console.error);
