# Registry 컴포넌트 커스터마이징 가이드

## 개요

Registry 컴포넌트들은 다른 Next.js + TailwindCSS 프로젝트에 삽입한 후 쉽게 커스터마이징할 수 있도록 설계되었습니다. 각 컴포넌트의 `index.tsx` 파일 최상단에 `CUSTOMIZATION` 블록이 있으며, 여기에서 색상과 이미지를 관리합니다.

## 파일 구조

```
src/components/registry/[component-name]/
├── index.tsx        # CUSTOMIZATION 블록 포함
├── metadata.yaml    # 컴포넌트 메타데이터
└── font.css         # (선택적) 폰트 정의
```

## CUSTOMIZATION 블록 구조

### 기본 구조

```typescript
"use client";

// ============================================================================
// CUSTOMIZATION - 이 섹션의 값들을 수정하여 프로젝트에 맞게 조정하세요
// ============================================================================

const COLORS = {
  light: {
    // 라이트 모드 색상
  },
  dark: {
    // 다크 모드 색상
  },
} as const;

const IMAGES = {
  // 이미지 에셋
} as const;

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

// ... 나머지 컴포넌트 코드
```

### COLORS 객체

브랜드 고유 컬러만 정의합니다. Grayscale은 Tailwind semantic color를 사용합니다.

```typescript
const COLORS = {
  light: {
    // 브랜드 Primary
    accent: "#3B82F6",          // 주요 강조색 (버튼, 링크)
    accentHover: "#2563EB",     // 호버 상태

    // 브랜드 Secondary (선택적)
    accentSecondary: "#10B981",

    // 배경 (특수한 경우만)
    background: "#E6EBE7",      // 브랜드 배경색
    gradientFrom: "#D4D6EA",    // 그라데이션 시작
    gradientTo: "#C8CAE0",      // 그라데이션 끝

    // 보더 (특수한 경우만)
    border: "#B8BAD4",          // 브랜드 보더색
  },
  dark: {
    // 다크 모드 색상 (구조 동일)
  },
} as const;
```

### IMAGES 객체

이미지 경로, alt 텍스트, AI 재생성용 프롬프트를 포함합니다.

```typescript
const IMAGES = {
  hero: {
    path: "/registry/component-name/hero.jpg",
    alt: "Hero background image",
    prompt: `Professional dashboard interface screenshot.
Style: Clean, minimal, modern SaaS aesthetic
Layout: Main chart on left (70%), sidebar with stats on right (30%)
Composition: Dark mode UI with purple/blue accent colors
Elements: Line chart showing upward trend, 3 stat cards below
Color palette: Dark gray background, purple accents, white text
Mood: Professional, trustworthy, data-driven
Technical: 16:9 aspect ratio, high resolution`,
  },
} as const;
```

## 색상 사용 가이드라인

### Tailwind Semantic Color 사용 (권장)

Grayscale, 기본 상태 색상은 Tailwind를 사용합니다:

```tsx
// ✅ 좋은 예
<div className="bg-white dark:bg-gray-950" />
<p className="text-gray-600 dark:text-gray-400" />
<div className="border border-gray-200 dark:border-gray-800" />
<span className="text-gray-500" />
```

### 커스텀 컬러 사용

브랜드 컬러처럼 Tailwind에 없는 색상만 COLORS에 정의합니다:

```tsx
// ✅ 좋은 예
<button style={{ backgroundColor: colors.accent }} />
<span style={{ color: colors.accentSecondary }} />

// ❌ 나쁜 예 - grayscale을 커스텀으로 정의하지 마세요
const COLORS = {
  background: "#F8F9FB",  // ❌ bg-gray-50 사용
  text: "#1A1A1A",        // ❌ text-gray-900 사용
}
```

## Tailwind 색상 매핑 참고

| Hex 값 | Tailwind 클래스 |
|--------|----------------|
| #FFFFFF | `white` |
| #F9FAFB | `gray-50` |
| #F3F4F6 | `gray-100` |
| #E5E7EB | `gray-200` |
| #D1D5DB | `gray-300` |
| #9CA3AF | `gray-400` |
| #6B7280 | `gray-500` |
| #4B5563 | `gray-600` |
| #374151 | `gray-700` |
| #1F2937 | `gray-800` |
| #111827 | `gray-900` |
| #030712 | `gray-950` |
| #000000 | `black` |

## 이미지 프롬프트 작성 가이드

AI 이미지 재생성을 위한 프롬프트에는 다음 정보를 포함하세요:

1. **콘텐츠 설명**: 무엇이 보이는지
2. **스타일**: 사진, 일러스트, 3D 렌더 등
3. **레이아웃**: 구도, 배치
4. **구성 요소**: 주요 오브젝트, 요소
5. **색감**: 색상 팔레트, 분위기
6. **기술적 세부사항**: 해상도, 비율 등

### 프롬프트 예시

```typescript
prompt: `Professional headshot portrait of a young woman.
Style: Natural lighting, soft focus background, editorial quality
Layout: Head and shoulders, 3/4 view angle
Composition: Subject centered, confident smile
Background: Neutral, blurred office setting
Color palette: Warm skin tones, neutral background
Mood: Approachable, confident, professional
Technical: High resolution, sharp focus on facial features`
```

## 마이그레이션 체크리스트

새 컴포넌트를 마이그레이션할 때:

- [ ] `index.tsx` 최상단에 CUSTOMIZATION 블록 추가
- [ ] 하드코딩된 색상 분석
  - [ ] Grayscale → Tailwind semantic color로 변환
  - [ ] 브랜드 컬러 → COLORS 객체로 분리
- [ ] `COLORS.light` 정의
- [ ] `COLORS.dark` 정의 (다크 모드 지원 시)
- [ ] 이미지 경로를 IMAGES 객체로 이동
- [ ] 각 이미지에 프롬프트 작성
- [ ] `mode` prop 추가 및 `COLORS[mode]` 사용
- [ ] 컴포넌트에서 `colors.xxx` 및 `IMAGES.xxx.path` 참조
- [ ] 빌드 테스트

## 컴포넌트 사용 예시

```tsx
import MercuryHero from "@/components/registry/mercury-hero";

export default function Page() {
  return (
    <MercuryHero
      mode="light"
      headline="Your Custom Headline"
      primaryCtaText="Get Started"
    />
  );
}
```

## 커스터마이징 예시

프로젝트에 삽입 후, CUSTOMIZATION 블록만 수정하면 됩니다:

```typescript
// Before (원본)
const COLORS = {
  light: {
    accent: "#3B82F6",        // 파란색
    accentHover: "#2563EB",
  },
};

// After (프로젝트에 맞게 수정)
const COLORS = {
  light: {
    accent: "#8B5CF6",        // 보라색으로 변경
    accentHover: "#7C3AED",
  },
};
```

## 파일럿 컴포넌트

다음 컴포넌트들이 이미 마이그레이션되어 참고용으로 사용할 수 있습니다:

1. `mercury-hero` - 복잡한 색상 + 이미지 + 다크모드
2. `glow-guide` - 이미지 중심 + 그라데이션
3. `seedesign` - 다크 테마 전용
4. `pencil-hero` - 라이트 테마 + 폼 요소
