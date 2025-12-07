import * as fs from 'fs';
import * as path from 'path';

const STATE_FILE_PATH = path.join(__dirname, 'screenshot-state.json');

export interface ScreenshotRecord {
  path: string;
  capturedAt: string;
}

export interface ScreenshotState {
  completed: Record<string, ScreenshotRecord>;
  pageCompleted: Record<string, ScreenshotRecord>;
}

export function loadState(): ScreenshotState {
  try {
    if (fs.existsSync(STATE_FILE_PATH)) {
      const data = fs.readFileSync(STATE_FILE_PATH, 'utf-8');
      const parsed = JSON.parse(data);
      return {
        completed: parsed.completed || {},
        pageCompleted: parsed.pageCompleted || {},
      };
    }
  } catch (error) {
    console.error('Failed to load state file:', error);
  }
  return { completed: {}, pageCompleted: {} };
}

export function saveState(state: ScreenshotState): void {
  try {
    fs.writeFileSync(STATE_FILE_PATH, JSON.stringify(state, null, 2), 'utf-8');
  } catch (error) {
    console.error('Failed to save state file:', error);
  }
}

export function isCompleted(state: ScreenshotState, componentId: string): boolean {
  return componentId in state.completed;
}

export function markCompleted(
  state: ScreenshotState,
  componentId: string,
  screenshotPath: string
): void {
  state.completed[componentId] = {
    path: screenshotPath,
    capturedAt: new Date().toISOString(),
  };
}

export function resetState(): void {
  const emptyState: ScreenshotState = { completed: {}, pageCompleted: {} };
  saveState(emptyState);
}

export function isPageCompleted(state: ScreenshotState, pageId: string): boolean {
  return pageId in state.pageCompleted;
}

export function markPageCompleted(
  state: ScreenshotState,
  pageId: string,
  screenshotPath: string
): void {
  state.pageCompleted[pageId] = {
    path: screenshotPath,
    capturedAt: new Date().toISOString(),
  };
}

export function getStateFilePath(): string {
  return STATE_FILE_PATH;
}
