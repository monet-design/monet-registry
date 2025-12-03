import fs from 'fs';
import path from 'path';

const REGISTRY_PATH = path.join(process.cwd(), 'src/components/registry');

function findMetadataFiles(dir) {
  const files = [];
  const entries = fs.readdirSync(dir, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...findMetadataFiles(fullPath));
    } else if (entry.name === 'metadata.yaml') {
      files.push(fullPath);
    }
  }

  return files;
}

function getNameFromYaml(content) {
  const match = content.match(/^name:\s*(.+)$/m);
  return match ? match[1].trim() : null;
}

function getCategoryFromYaml(content) {
  const match = content.match(/^category:\s*(.+)$/m);
  return match ? match[1].trim() : null;
}

function updateCategoryInYaml(content, newCategory) {
  // If category exists, replace it
  if (content.match(/^category:/m)) {
    return content.replace(/^category:\s*.+$/m, `category: ${newCategory}`);
  }
  // If category doesn't exist, add it after name
  return content.replace(/^(name:\s*.+)$/m, `$1\ncategory: ${newCategory}`);
}

async function updateHeroCategories() {
  const metadataFiles = findMetadataFiles(REGISTRY_PATH);

  let updatedCount = 0;
  const updatedFiles = [];

  for (const filePath of metadataFiles) {
    const content = fs.readFileSync(filePath, 'utf-8');
    const name = getNameFromYaml(content);
    const currentCategory = getCategoryFromYaml(content);

    // Check if name contains 'hero' (case insensitive)
    if (name && name.toLowerCase().includes('hero')) {
      // Only update if category is not already 'hero'
      if (currentCategory !== 'hero') {
        const newContent = updateCategoryInYaml(content, 'hero');
        fs.writeFileSync(filePath, newContent);
        updatedCount++;
        updatedFiles.push({
          file: path.relative(REGISTRY_PATH, filePath),
          oldCategory: currentCategory,
          name: name
        });

        console.log(`Updated: ${name} (${currentCategory || 'undefined'} -> hero)`);
      }
    }
  }

  console.log(`\n✅ Total updated: ${updatedCount} files`);

  if (updatedFiles.length > 0) {
    console.log('\nUpdated files:');
    updatedFiles.forEach(f => {
      console.log(`  - ${f.name}: ${f.oldCategory || 'undefined'} -> hero`);
    });
  }
}

updateHeroCategories().catch(console.error);
