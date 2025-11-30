/**
 * Registry 데이터 로딩 및 관리
 * metadata.yaml 파일들을 직접 읽어서 런타임에 인덱싱
 */

import * as fs from "fs";
import * as path from "path";
import { fileURLToPath } from "url";
import yaml from "js-yaml";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/**
 * metadata.yaml 파일 스키마
 */
interface MetadataYaml {
  schemaVersion: string;
  name: string;
  category: string;
  images: {
    preview: string;
    thumbnail?: string;
  };
  title?: string;
  description?: {
    short?: string;
    detailed?: string;
  };
  tags?: {
    functional?: string[];
    style?: string[];
    layout?: string[];
    industry?: string[];
  };
  freeformKeywords?: string[];
  useCases?: string[];
  fontFamily?: string[];
  createdAt?: string;
  status?: string;
}

export interface RegistryEntry {
  id: string;
  name: string;
  category: string;
  images: {
    preview: string;
    thumbnail?: string;
  };
  title?: string;
  description?: {
    short?: string;
    detailed?: string;
  };
  tags: {
    functional: string[];
    style: string[];
    layout: string[];
    industry: string[];
  };
  freeformKeywords: string[];
  searchableText: string;
  fontFamily: string[];
  componentPath: string;
  createdAt?: string;
  status: string;
}

export type CategoryIndex = Record<string, string[]>;
export type TagIndex = {
  functional: Record<string, string[]>;
  style: Record<string, string[]>;
  layout: Record<string, string[]>;
  industry: Record<string, string[]>;
};

class RegistryService {
  private registry: Map<string, RegistryEntry> = new Map();
  private categoryIndex: CategoryIndex = {};
  private tagIndex: TagIndex = {
    functional: {},
    style: {},
    layout: {},
    industry: {},
  };
  private initialized = false;

  async initialize(): Promise<void> {
    if (this.initialized) return;

    const registryDir =
      process.env.REGISTRY_DIR ||
      path.join(__dirname, "../../../src/components/registry");

    try {
      // 디렉토리 존재 확인
      await fs.promises.access(registryDir);

      // 컴포넌트 디렉토리 목록 조회
      const dirs = await fs.promises.readdir(registryDir, {
        withFileTypes: true,
      });
      const componentDirs = dirs
        .filter((d) => d.isDirectory())
        .map((d) => d.name);

      // 병렬 로딩
      const entries = await Promise.all(
        componentDirs.map((id) => this.loadComponent(id, registryDir))
      );

      // 레지스트리 및 인덱스 구성
      for (const entry of entries) {
        if (!entry) continue;
        this.registry.set(entry.id, entry);
        this.indexEntry(entry);
      }

      this.initialized = true;
      console.log(`Registry loaded: ${this.registry.size} components`);
    } catch (error) {
      const err = error as NodeJS.ErrnoException;
      if (err.code === "ENOENT") {
        console.error(`Registry directory not found: ${registryDir}`);
        console.error("Hint: Set REGISTRY_DIR environment variable");
      } else {
        console.error("Failed to load registry:", error);
      }
      throw error;
    }
  }

  /**
   * 개별 컴포넌트 로드
   */
  private async loadComponent(
    id: string,
    basePath: string
  ): Promise<RegistryEntry | null> {
    const metadataPath = path.join(basePath, id, "metadata.yaml");

    try {
      const content = await fs.promises.readFile(metadataPath, "utf-8");
      const metadata = yaml.load(content) as MetadataYaml;

      // 필수 필드 검증
      if (!metadata.name || !metadata.category) {
        console.warn(
          `[Registry] Invalid metadata in ${id}: missing required fields`
        );
        return null;
      }

      return this.transformToRegistryEntry(id, metadata);
    } catch (err) {
      const error = err as NodeJS.ErrnoException;
      if (error.code === "ENOENT") {
        // metadata.yaml 없음 - 정상 스킵
        return null;
      }
      console.warn(`[Registry] Failed to load ${id}: ${error.message}`);
      return null;
    }
  }

  /**
   * MetadataYaml → RegistryEntry 변환
   */
  private transformToRegistryEntry(
    id: string,
    metadata: MetadataYaml
  ): RegistryEntry {
    return {
      id,
      name: metadata.name,
      category: metadata.category,
      images: metadata.images,
      title: metadata.title,
      description: metadata.description,
      tags: {
        functional: metadata.tags?.functional || [],
        style: metadata.tags?.style || [],
        layout: metadata.tags?.layout || [],
        industry: metadata.tags?.industry || [],
      },
      freeformKeywords: metadata.freeformKeywords || [],
      searchableText: this.buildSearchableText(metadata),
      fontFamily: metadata.fontFamily || [],
      componentPath: `@/components/registry/${id}`,
      createdAt: metadata.createdAt,
      status: metadata.status || "stable",
    };
  }

  /**
   * 검색용 텍스트 생성
   */
  private buildSearchableText(metadata: MetadataYaml): string {
    const parts: string[] = [
      metadata.name,
      metadata.category,
      metadata.title || "",
      metadata.description?.short || "",
      metadata.description?.detailed || "",
      ...(metadata.tags?.functional || []),
      ...(metadata.tags?.style || []),
      ...(metadata.tags?.layout || []),
      ...(metadata.tags?.industry || []),
      ...(metadata.freeformKeywords || []),
      ...(metadata.useCases || []),
    ];

    return parts.filter(Boolean).join(" ").toLowerCase();
  }

  /**
   * 카테고리/태그 인덱스 업데이트
   */
  private indexEntry(entry: RegistryEntry): void {
    // 카테고리 인덱스
    if (!this.categoryIndex[entry.category]) {
      this.categoryIndex[entry.category] = [];
    }
    this.categoryIndex[entry.category].push(entry.id);

    // 태그 인덱스
    for (const tag of entry.tags.functional) {
      if (!this.tagIndex.functional[tag]) {
        this.tagIndex.functional[tag] = [];
      }
      this.tagIndex.functional[tag].push(entry.id);
    }

    for (const tag of entry.tags.style) {
      if (!this.tagIndex.style[tag]) {
        this.tagIndex.style[tag] = [];
      }
      this.tagIndex.style[tag].push(entry.id);
    }

    for (const tag of entry.tags.layout) {
      if (!this.tagIndex.layout[tag]) {
        this.tagIndex.layout[tag] = [];
      }
      this.tagIndex.layout[tag].push(entry.id);
    }

    for (const tag of entry.tags.industry) {
      if (!this.tagIndex.industry[tag]) {
        this.tagIndex.industry[tag] = [];
      }
      this.tagIndex.industry[tag].push(entry.id);
    }
  }

  getComponent(id: string): RegistryEntry | undefined {
    return this.registry.get(id);
  }

  getAllComponents(): RegistryEntry[] {
    return Array.from(this.registry.values());
  }

  getComponentsByCategory(category: string): string[] {
    return this.categoryIndex[category] || [];
  }

  getCategoryIndex(): CategoryIndex {
    return this.categoryIndex;
  }

  getTagIndex(): TagIndex {
    return this.tagIndex;
  }

  getTotalCount(): number {
    return this.registry.size;
  }

  isInitialized(): boolean {
    return this.initialized;
  }

  findSimilarIds(componentId: string, limit = 5): string[] {
    const component = this.registry.get(componentId);
    if (!component) return [];

    const candidates: { id: string; score: number }[] = [];
    const sameCategory = this.categoryIndex[component.category] || [];

    for (const id of sameCategory) {
      if (id === componentId) continue;
      const candidate = this.registry.get(id);
      if (!candidate) continue;

      let score = 0;
      const styleTags = new Set(component.tags.style);
      for (const tag of candidate.tags.style) {
        if (styleTags.has(tag)) score += 2;
      }
      const layoutTags = new Set(component.tags.layout);
      for (const tag of candidate.tags.layout) {
        if (layoutTags.has(tag)) score += 1;
      }
      candidates.push({ id, score });
    }

    candidates.sort((a, b) => b.score - a.score);
    return candidates.slice(0, limit).map((c) => c.id);
  }
}

export const registryService = new RegistryService();
