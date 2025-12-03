import * as fs from 'fs';
import * as path from 'path';

const STATE_FILE_PATH = path.join(__dirname, 'screenshot-state.json');

export interface ScreenshotRecord {
  path: string;
  capturedAt: string;
}

export interface ScreenshotState {
  completed: Record<string, ScreenshotRecord>;
}

export function loadState(): ScreenshotState {
  try {
    if (fs.existsSync(STATE_FILE_PATH)) {
      const data = fs.readFileSync(STATE_FILE_PATH, 'utf-8');
      return JSON.parse(data);
    }
  } catch (error) {
    console.error('Failed to load state file:', error);
  }
  return { completed: {} };
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
  const emptyState: ScreenshotState = { completed: {} };
  saveState(emptyState);
}

export function getStateFilePath(): string {
  return STATE_FILE_PATH;
}
