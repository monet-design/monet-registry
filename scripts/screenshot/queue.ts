export class ScreenshotQueue {
  private queue: string[] = [];

  enqueue(componentId: string): void {
    this.queue.push(componentId);
  }

  enqueueAll(componentIds: string[]): void {
    this.queue.push(...componentIds);
  }

  dequeue(): string | undefined {
    return this.queue.shift();
  }

  isEmpty(): boolean {
    return this.queue.length === 0;
  }

  size(): number {
    return this.queue.length;
  }

  peek(): string | undefined {
    return this.queue[0];
  }
}
