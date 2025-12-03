import * as fs from 'fs';
import * as path from 'path';
import { resetState, getStateFilePath } from './state';

const PREVIEW_DIR = path.join(__dirname, '../../public/registry/preview');

function deleteScreenshots(): number {
  if (!fs.existsSync(PREVIEW_DIR)) {
    return 0;
  }

  const files = fs.readdirSync(PREVIEW_DIR);
  const pngFiles = files.filter((f) => f.endsWith('.png'));

  for (const file of pngFiles) {
    fs.unlinkSync(path.join(PREVIEW_DIR, file));
  }

  return pngFiles.length;
}

function main(): void {
  console.log('='.repeat(50));
  console.log('Screenshot Reset');
  console.log('='.repeat(50));

  // 1. Delete screenshot files
  const deletedCount = deleteScreenshots();
  console.log(`Deleted ${deletedCount} screenshot files from ${PREVIEW_DIR}`);

  // 2. Reset state file
  resetState();
  console.log(`Reset state file: ${getStateFilePath()}`);

  console.log('='.repeat(50));
  console.log('Done!');
}

main();
