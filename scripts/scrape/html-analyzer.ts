/**
 * HTML 구조 분석 및 섹션 분할 로직
 */

import {
  DOMNode,
  DOMSection,
  CATEGORY_HINTS,
  SEMANTIC_PRIORITY,
} from "./types";

/**
 * DOM 노드에서 CSS 선택자 생성
 */
function buildSelector(node: DOMNode): string {
  let selector = node.tag;
  if (node.id) {
    selector += `#${node.id}`;
  } else if (node.className) {
    const firstClass = node.className.split(" ")[0];
    if (firstClass && !firstClass.includes(":")) {
      selector += `.${firstClass}`;
    }
  }
  return selector;
}

/**
 * DOM 노드의 텍스트에서 카테고리 추론
 */
function inferCategory(node: DOMNode): string | null {
  const textToSearch = [node.tag, node.id, node.className]
    .filter(Boolean)
    .join(" ")
    .toLowerCase();

  for (const [category, hints] of Object.entries(CATEGORY_HINTS)) {
    if (hints.some((hint) => textToSearch.includes(hint))) {
      return category;
    }
  }

  return null;
}

/**
 * DOM 트리에서 섹션 분할 (하이브리드 1차 단계)
 */
export function analyzeDOM(domTree: DOMNode): DOMSection[] {
  const sections: DOMSection[] = [];
  const coveredRanges: { start: number; end: number }[] = [];

  // 1차: 시맨틱 태그 기반 분할
  function findSemanticSections(node: DOMNode, depth: number = 0): void {
    const isSemanticTag = SEMANTIC_PRIORITY.includes(node.tag);
    const hasSignificantHeight = node.rect.height > 100;

    if (isSemanticTag && hasSignificantHeight) {
      const selector = buildSelector(node);
      const category = inferCategory(node);

      sections.push({
        index: sections.length,
        tag: node.tag,
        selector,
        category,
        rect: {
          top: node.rect.top,
          height: node.rect.height,
        },
        confidence: node.tag === "section" ? 0.9 : 0.8,
      });

      coveredRanges.push({
        start: node.rect.top,
        end: node.rect.top + node.rect.height,
      });

      // 시맨틱 태그 내부는 더 깊이 탐색하지 않음 (단, main은 제외)
      if (node.tag !== "main") {
        return;
      }
    }

    // 자식 탐색
    for (const child of node.children) {
      findSemanticSections(child, depth + 1);
    }
  }

  findSemanticSections(domTree);

  // 2차: 높이 기반 추가 분할 (시맨틱 태그로 분할되지 않은 영역)
  function findGaps(node: DOMNode, depth: number = 0): void {
    if (node.rect.height < 200 || depth > 5) return;

    const nodeStart = node.rect.top;
    const nodeEnd = nodeStart + node.rect.height;

    // 이미 커버된 영역인지 확인
    const isCovered = coveredRanges.some(
      (range) => nodeStart >= range.start && nodeEnd <= range.end
    );

    // div이고 충분히 크고 아직 커버되지 않은 경우
    if (!isCovered && node.tag === "div" && node.rect.height > 300) {
      // 자식 중 하나라도 시맨틱 태그면 스킵
      const hasSemanticChild = node.children.some((c) =>
        SEMANTIC_PRIORITY.includes(c.tag)
      );

      if (!hasSemanticChild) {
        const selector = buildSelector(node);
        sections.push({
          index: sections.length,
          tag: node.tag,
          selector,
          category: inferCategory(node),
          rect: {
            top: node.rect.top,
            height: node.rect.height,
          },
          confidence: 0.5,
        });

        coveredRanges.push({
          start: nodeStart,
          end: nodeEnd,
        });
      }
    }

    for (const child of node.children) {
      findGaps(child, depth + 1);
    }
  }

  findGaps(domTree);

  // 정렬 및 인덱스 재할당
  sections.sort((a, b) => a.rect.top - b.rect.top);
  sections.forEach((s, i) => {
    s.index = i;
  });

  // 중복/겹침 제거
  return deduplicateSections(sections);
}

/**
 * 겹치는 섹션 제거 (더 높은 confidence 유지)
 */
function deduplicateSections(sections: DOMSection[]): DOMSection[] {
  const result: DOMSection[] = [];

  for (const section of sections) {
    const overlapping = result.find((existing) => {
      const overlapStart = Math.max(existing.rect.top, section.rect.top);
      const overlapEnd = Math.min(
        existing.rect.top + existing.rect.height,
        section.rect.top + section.rect.height
      );
      const overlapHeight = overlapEnd - overlapStart;

      // 50% 이상 겹치면 중복으로 판단
      const minHeight = Math.min(existing.rect.height, section.rect.height);
      return overlapHeight > minHeight * 0.5;
    });

    if (overlapping) {
      // confidence가 더 높은 것을 유지
      if (section.confidence > overlapping.confidence) {
        const idx = result.indexOf(overlapping);
        result[idx] = section;
      }
    } else {
      result.push(section);
    }
  }

  // 인덱스 재할당
  result.forEach((s, i) => {
    s.index = i;
  });

  return result;
}

/**
 * 섹션 조정 적용 (AI 피드백 기반)
 */
export function applySectionAdjustments(
  sections: DOMSection[],
  adjustments: Array<{
    type: "merge" | "split" | "recategorize";
    indices: number[];
    newCategory?: string;
    splitAt?: number;
  }>
): DOMSection[] {
  let result = [...sections];

  for (const adj of adjustments) {
    switch (adj.type) {
      case "merge":
        // 여러 섹션을 하나로 병합
        const toMerge = adj.indices
          .map((i) => result[i])
          .filter(Boolean)
          .sort((a, b) => a.rect.top - b.rect.top);

        if (toMerge.length >= 2) {
          const first = toMerge[0];
          const last = toMerge[toMerge.length - 1];

          const merged: DOMSection = {
            index: first.index,
            tag: first.tag,
            selector: first.selector,
            category: adj.newCategory || first.category,
            rect: {
              top: first.rect.top,
              height: last.rect.top + last.rect.height - first.rect.top,
            },
            confidence: 0.7,
          };

          // 병합된 섹션들 제거하고 새 섹션 추가
          result = result.filter((s) => !adj.indices.includes(s.index));
          result.push(merged);
        }
        break;

      case "recategorize":
        // 카테고리 변경
        for (const idx of adj.indices) {
          if (result[idx] && adj.newCategory) {
            result[idx].category = adj.newCategory;
          }
        }
        break;

      case "split":
        // 섹션 분할 (추후 구현)
        break;
    }
  }

  // 정렬 및 인덱스 재할당
  result.sort((a, b) => a.rect.top - b.rect.top);
  result.forEach((s, i) => {
    s.index = i;
  });

  return result;
}
