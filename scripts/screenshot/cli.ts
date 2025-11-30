#!/usr/bin/env tsx
import * as path from "path";
import {
  ScreenshotCapture,
  getComponentList,
  defaultViewports,
  Viewport,
} from "./capture";

interface CLIOptions {
  component?: string;
  components?: string[];
  all?: boolean;
  viewports: Viewport[];
  baseUrl: string;
  outputDir: string;
  waitTime: number;
  concurrency: number;
}

function parseArgs(): CLIOptions {
  const args = process.argv.slice(2);
  const options: CLIOptions = {
    viewports: defaultViewports,
    baseUrl: "http://localhost:4173",
    outputDir: path.resolve(process.cwd(), "../screenshots"),
    waitTime: 1500,
    concurrency: 3,
  };

  for (let i = 0; i < args.length; i++) {
    const arg = args[i];
    const value = args[i + 1];

    switch (arg) {
      case "--component":
      case "-c":
        options.component = value;
        i++;
        break;

      case "--components":
        options.components = value.split(",").map((s) => s.trim());
        i++;
        break;

      case "--all":
      case "-a":
        options.all = true;
        break;

      case "--viewport":
      case "-v":
        if (value === "desktop") {
          options.viewports = [defaultViewports[0]];
        } else if (value === "mobile") {
          options.viewports = [defaultViewports[1]];
        }
        i++;
        break;

      case "--url":
      case "-u":
        options.baseUrl = value;
        i++;
        break;

      case "--output":
      case "-o":
        options.outputDir = path.resolve(process.cwd(), value);
        i++;
        break;

      case "--wait":
      case "-w":
        options.waitTime = parseInt(value, 10);
        i++;
        break;

      case "--concurrency":
        options.concurrency = parseInt(value, 10);
        i++;
        break;

      case "--help":
      case "-h":
        printHelp();
        process.exit(0);
    }
  }

  return options;
}

function printHelp(): void {
  console.log(`
Component Screenshot CLI

Usage:
  pnpm capture [options]

Options:
  -c, --component <name>     Capture a single component
  --components <list>        Capture multiple components (comma-separated)
  -a, --all                  Capture all components
  -v, --viewport <type>      Viewport type: desktop, mobile (default: both)
  -u, --url <url>            Base URL (default: http://localhost:4173)
  -o, --output <dir>         Output directory (default: ../screenshots)
  -w, --wait <ms>            Wait time for animations (default: 1500)
  --concurrency <n>          Number of concurrent captures (default: 3)
  -h, --help                 Show this help message

Examples:
  pnpm capture --components stats-1,feature-tabs
  pnpm capture --all
`);
}

async function main(): Promise<void> {
  const options = parseArgs();
  const registryPath = path.resolve(
    process.cwd(),
    "../src/components/registry"
  );

  // 캡처할 컴포넌트 목록 결정
  let components: string[] = [];

  if (options.component) {
    components = [options.component];
  } else if (options.components) {
    components = options.components;
  } else if (options.all) {
    console.log("Fetching component list...");
    components = await getComponentList(registryPath);
  } else {
    console.error(
      "Error: Specify a component with -c, --components, or --all"
    );
    printHelp();
    process.exit(1);
  }

  console.log(`\nCapturing ${components.length} component(s)...`);
  console.log(`Base URL: ${options.baseUrl}`);
  console.log(`Output: ${options.outputDir}`);
  console.log(
    `Viewports: ${options.viewports.map((v) => v.name).join(", ")}`
  );
  console.log(`Wait time: ${options.waitTime}ms`);
  console.log("");

  const capture = new ScreenshotCapture();

  try {
    await capture.initialize();
    console.log("Browser initialized\n");

    const startTime = Date.now();

    if (components.length === 1) {
      // 단일 컴포넌트
      const component = components[0];
      console.log(`Capturing: ${component}`);

      const screenshots = await capture.captureComponent({
        component,
        baseUrl: options.baseUrl,
        outputDir: options.outputDir,
        viewports: options.viewports,
        waitTime: options.waitTime,
      });

      console.log(`  Saved ${screenshots.length} screenshot(s):`);
      for (const screenshot of screenshots) {
        console.log(`    - ${screenshot}`);
      }
    } else {
      // 여러 컴포넌트
      const results = await capture.captureMultiple(
        components,
        {
          baseUrl: options.baseUrl,
          outputDir: options.outputDir,
          viewports: options.viewports,
          waitTime: options.waitTime,
        },
        options.concurrency
      );

      let successCount = 0;
      let totalScreenshots = 0;

      for (const [component, screenshots] of results) {
        successCount++;
        totalScreenshots += screenshots.length;
        console.log(`✓ ${component} (${screenshots.length} screenshots)`);
      }

      const failedCount = components.length - successCount;
      console.log(
        `\nCompleted: ${successCount}/${components.length} components`
      );
      console.log(`Total screenshots: ${totalScreenshots}`);

      if (failedCount > 0) {
        console.log(`Failed: ${failedCount}`);
      }
    }

    const elapsed = ((Date.now() - startTime) / 1000).toFixed(1);
    console.log(`\nDone in ${elapsed}s`);
  } catch (error) {
    console.error("Error:", error);
    process.exit(1);
  } finally {
    await capture.close();
  }
}

main();
