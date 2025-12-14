# Framer Site Scraping Pipeline

Framer로 제작된 웹사이트를 React/Tailwind/motion 컴포넌트로 변환하는 파이프라인입니다.

## 개요

이 파이프라인은 Framer 사이트의 특수한 구조를 활용하여 더 정확한 컴포넌트 변환을 수행합니다:

1. Framer 사이트 자동 감지
2. `data-framer-*` 속성 기반 레이어 구조 파악
3. 애니메이션 패턴 추출 및 motion/react 코드 변환
4. 섹션별 컴포넌트 생성

### 일반 URL 파이프라인과의 차이점

| 특징          | 일반 URL                | Framer 사이트                          |
| ------------- | ----------------------- | -------------------------------------- |
| 섹션 분할     | 시맨틱 태그 + 높이 기반 | `data-framer-name` 레이어 구조 활용    |
| 애니메이션    | CSS transition 추출     | `data-framer-appear-id` 기반 정밀 추출 |
| 카테고리 추론 | 클래스/ID 텍스트 분석   | Framer 레이어명으로 의미 파악          |
| 출력          | 기본 스크래핑 결과      | `framer.json` 추가 생성                |

---

## 아키텍처

```
[Framer URL]
     │
     ▼ (pnpm scrape:url)
┌─────────────────────────────────────┐
│ Puppeteer 스크래핑                   │
│  └─ Framer 사이트 자동 감지          │
│  └─ data-framer-* 속성 추출         │
│  └─ 애니메이션 데이터 파싱           │
└─────────────────────────────────────┘
     │
     ▼
┌─────────────────────────────────────┐
│ 출력 파일                            │
│  ├─ full-page.png                   │
│  ├─ sections.json                   │
│  ├─ framer.json  ← [Framer 특화]    │
│  └─ sections/*.png, *.html          │
└─────────────────────────────────────┘
     │
     ▼ (@agent url-to-page)
┌─────────────────────────────────────┐
│ 컴포넌트 생성                        │
│  └─ Framer 애니메이션 → motion/react │
│  └─ 레이어명 → 카테고리 추론         │
└─────────────────────────────────────┘
     │
     ▼
┌─────────────────────────────────────┐
│ Registry 컴포넌트                    │
│  ├─ src/components/registry/{name}/ │
│  └─ src/components/registry/pages/  │
└─────────────────────────────────────┘
```

---

## Framer 특화 기능

### 1. data-framer-\* 속성 추출

Framer에서 생성된 HTML에는 다음과 같은 내부 속성이 포함됩니다:

| 속성                         | 설명                        | 활용                 |
| ---------------------------- | --------------------------- | -------------------- |
| `data-framer-name`           | Framer 에디터의 레이어 이름 | 섹션 카테고리 추론   |
| `data-framer-appear-id`      | 애니메이션 고유 ID          | 애니메이션 패턴 매핑 |
| `data-framer-component-type` | 컴포넌트 유형               | 구조 분석            |

**추출 예시:**

```typescript
interface FramerElementInfo {
  selector: string;
  framerName?: string; // "Hero Section"
  framerAppearId?: string; // "abc123"
  framerComponentType?: string; // "RichText"
  initialTransform?: string; // "translateY(30px)"
  initialOpacity?: string; // "0"
  transition?: string; // "opacity 0.3s ease-out"
}
```

### 2. 애니메이션 패턴 감지

Framer의 애니메이션 패턴을 motion/react 코드로 변환합니다:

| Framer 패턴  | 감지 조건                        | motion/react 변환                     |
| ------------ | -------------------------------- | ------------------------------------- |
| **Fade-Up**  | `translateY > 0` + `opacity < 1` | `initial={{ opacity: 0, y: 30 }}`     |
| **Fade-In**  | `opacity < 1` only               | `initial={{ opacity: 0 }}`            |
| **Scale-In** | `scale < 1`                      | `initial={{ scale: 0.9 }}`            |
| **Slide-In** | `translateX !== 0`               | `initial={{ x: -50 }}`                |
| **Stagger**  | 동일 부모 내 순차 delay          | `transition={{ delay: index * 0.1 }}` |

**변환 예시:**

```tsx
// Framer에서 추출된 데이터
{
  type: "fade-up",
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" }
}

// motion/react 코드로 변환
<motion.div
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6, ease: "easeOut" }}
  viewport={{ once: true }}
>
  {/* content */}
</motion.div>
```

### 3. 레이어명 기반 카테고리 추론

`data-framer-name` 값을 분석하여 섹션 카테고리를 추론합니다:

```typescript
const framerNameToCategory: Record<string, string> = {
  hero: "hero",
  navigation: "header",
  nav: "header",
  navbar: "header",
  footer: "footer",
  pricing: "pricing",
  features: "feature",
  testimonials: "testimonial",
  faq: "faq",
  cta: "cta",
  contact: "contact",
};
```

---

## 사용 방법

### 방법 1: Agent 사용 (권장)

```bash
@agent url-to-page https://your-site.framer.app
```

Agent가 자동으로:

1. Framer 사이트 감지 (`.framer.app` 도메인 또는 내부 속성)
2. `data-framer-*` 속성 추출
3. 애니메이션 패턴 분석
4. motion/react 코드가 포함된 컴포넌트 생성

컴포넌트 생성 후:

```bash
@agent build-and-screenshot
```

### 방법 2: 수동 실행

#### Step 1: 스크래핑

```bash
pnpm scrape:url --url "https://your-site.framer.app"

# 또는
npx tsx scripts/scrape/scrape-website.ts --url "https://your-site.framer.app"
```

#### Step 2: 출력 확인

```bash
# Framer 특화 데이터 확인
cat public/scraped/{domain}-{date}/framer.json

# 섹션 분할 확인
cat public/scraped/{domain}-{date}/sections.json
```

#### Step 3: 컴포넌트 생성

각 섹션에 대해 `img-to-component` agent 호출 또는 수동 생성:

```bash
python3 scripts/create-registry-component.py \
  --name "framer-site-hero-0" \
  --category "hero" \
  --image-path "scraped/framer-site-2025-12-14/sections/section-0.png" \
  --keywords "hero, framer, animated" \
  --language "en" \
  --parent-page "framer-site-landing" \
  --source-url "https://your-site.framer.app" \
  --section-index 0 \
  --tags-functional "animation, scroll-animation" \
  --tags-style "modern, gradient" \
  --tags-layout "full-width, centered" \
  --tags-industry "saas"
```

#### Step 4: Page 컴포넌트 생성

```bash
npx tsx scripts/generate-page-component.ts \
  --name "framer-site-landing" \
  --sections "framer-site-header-0,framer-site-hero-1,framer-site-feature-2,..." \
  --source-url "https://your-site.framer.app" \
  --scraped-dir "public/scraped/framer-site-2025-12-14"
```

#### Step 5: Registry 업데이트

```bash
pnpm metadata:build
```

---

## 출력 파일 구조

### 스크래핑 결과

```
public/scraped/{domain}-{date}/
├── full-page.png          # 전체 페이지 스크린샷
├── page.html              # HTML 소스
├── styles.json            # 계산된 CSS 스타일
├── dom-tree.json          # DOM 구조 분석
├── sections.json          # 섹션 분할 정보
├── images.json            # 추출된 이미지 정보
├── fonts.json             # 추출된 폰트 정보
├── videos.json            # 추출된 비디오 정보
├── metadata.json          # 스크래핑 메타데이터
├── framer.json            # [Framer 특화] 아래 참조
├── sections/
│   ├── section-0.png
│   ├── section-0.html
│   └── ...
├── images/
├── fonts/
└── videos/
```

### framer.json 구조

```json
{
  "isFramerSite": true,
  "elements": [
    {
      "selector": "[data-framer-appear-id=\"abc123\"]",
      "framerName": "Hero Title",
      "framerAppearId": "abc123",
      "initialTransform": "translateY(30px)",
      "initialOpacity": "0",
      "transition": "opacity 0.5s ease-out, transform 0.5s ease-out"
    }
  ],
  "animations": [
    {
      "type": "fade-up",
      "target": "Hero Title",
      "initial": { "opacity": 0, "y": 30 },
      "animate": { "opacity": 1, "y": 0 },
      "transition": { "duration": 0.5, "ease": "easeOut" }
    }
  ],
  "cssVariables": {
    "--framer-aspect-ratio-supported": "auto",
    "--framer-link-text-color": "#0066cc"
  }
}
```

---

## 메타데이터 구조

### Section 메타데이터

Framer 사이트에서 생성된 섹션은 `source.type`이 `framer`로 표기됩니다:

```yaml
schemaVersion: "2.0"
name: framer-site-hero-0
category: hero

images:
  preview: scraped/framer-site-2025-12-14/sections/section-0.png

tags:
  functional:
    - animation
    - scroll-animation
  style:
    - modern
    - gradient
  layout:
    - full-width
    - centered
  industry:
    - saas

freeformKeywords:
  - framer
  - hero
  - animated landing

fontFamily:
  - Inter

parentPage: framer-site-landing

source:
  type: framer # 일반 URL은 'url'
  url: https://your-site.framer.app
  scrapedAt: "2025-12-14T10:00:00Z"
  sectionIndex: 0
  framer: # Framer 특화 필드
    detectedAnimations:
      - type: fade-up
        target: "heading"
      - type: stagger
        target: "feature-cards"
        delay: 0.1

createdAt: "2025-12-14T10:30:00Z"
status: stable
language: en
```

### Page 메타데이터

```yaml
schemaVersion: "2.0"
name: framer-site-landing
category: page

images:
  preview: scraped/framer-site-2025-12-14/full-page.png

title: Framer Site Landing Page

sections:
  - id: framer-site-header-0
    category: header
    order: 0
  - id: framer-site-hero-1
    category: hero
    order: 1
  - id: framer-site-feature-2
    category: feature-showcase
    order: 2

source:
  type: framer
  url: https://your-site.framer.app
  scrapedAt: "2025-12-14T10:00:00Z"

pageInfo:
  totalSections: 3

createdAt: "2025-12-14T10:30:00Z"
status: stable
```

---

## 컴포넌트 생성 가이드

### 애니메이션 구현

`framer.json`의 animations 배열을 참고하여 motion/react 코드를 작성합니다:

```tsx
"use client";

import { motion } from "motion/react";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen">
      {/* Fade-up 애니메이션 */}
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
        className="text-5xl font-bold"
      >
        Welcome to Our Product
      </motion.h1>

      {/* Stagger 애니메이션 (카드 목록) */}
      <div className="grid grid-cols-3 gap-6">
        {features.map((feature, index) => (
          <motion.div
            key={feature.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              ease: "easeOut",
              delay: index * 0.1, // stagger delay
            }}
            viewport={{ once: true }}
            className="p-6 rounded-lg bg-white shadow"
          >
            {feature.title}
          </motion.div>
        ))}
      </div>
    </section>
  );
}
```

### CSS 변수 처리

Framer는 `--framer-*` CSS 변수를 사용합니다. 필요시 Tailwind 설정에 추가:

```typescript
// tailwind.config.ts (필요 시)
export default {
  theme: {
    extend: {
      colors: {
        "framer-link": "var(--framer-link-text-color)",
      },
    },
  },
};
```

---

## Framer 사이트 감지 로직

스크래핑 시 다음 조건으로 Framer 사이트를 자동 감지합니다:

```typescript
async function isFramerSite(page: Page): Promise<boolean> {
  return await page.evaluate(() => {
    // 1. Framer 스크립트 확인
    const hasFramerScript =
      document.querySelector('script[src*="framer.com"]') !== null;

    // 2. Generator 메타 태그 확인
    const hasFramerMeta =
      document.querySelector('meta[name="generator"][content*="Framer"]') !==
      null;

    // 3. data-framer-* 속성 확인
    const hasFramerAttributes =
      document.querySelector("[data-framer-name]") !== null;

    // 4. Framer 스타일시트 확인
    const hasFramerStyles = Array.from(document.styleSheets).some((sheet) =>
      sheet.href?.includes("framer")
    );

    return (
      hasFramerScript || hasFramerMeta || hasFramerAttributes || hasFramerStyles
    );
  });
}
```

---

## 제한사항

- Framer의 복잡한 인터랙션 (드래그, 스크롤 기반 변환 등)은 정적 분석에 한계가 있음
- 프로텍티드 페이지 (비밀번호 보호)는 스크래핑 불가
- 매우 긴 페이지는 최대 높이 (기본 5400px)까지만 캡처
- Framer의 일부 커스텀 컴포넌트는 표준 HTML로 변환되지 않을 수 있음

---

## 트러블슈팅

### Framer 사이트로 감지되지 않는 경우

일부 커스텀 도메인 Framer 사이트는 자동 감지되지 않을 수 있습니다. 이 경우 수동으로 `framer.json`을 생성하거나, 스크래핑 후 섹션 분할을 수동 조정하세요.

### 애니메이션이 캡처되지 않는 경우

Framer의 일부 애니메이션은 JavaScript로 런타임에 적용됩니다. 스크래핑 대기 시간을 늘려보세요:

```bash
npx tsx scripts/scrape/scrape-website.ts \
  --url "https://site.framer.app" \
  --wait-time 5000
```

### 스타일이 정확하지 않은 경우

Framer의 반응형 스타일은 뷰포트에 따라 달라집니다. 기본 뷰포트 (1440x900)에서 캡처되므로, 필요시 컴포넌트 구현 시 반응형 스타일을 조정하세요.

---

## 관련 문서

- [URL-to-Registry Pipeline](./url-to-registry-pipeline.md) - 일반 URL 스크래핑 파이프라인
- [img-to-component Agent](./../.claude/agents/img-to-component.md) - 이미지 → 컴포넌트 변환
- [url-to-page Agent](./../.claude/agents/url-to-page.md) - URL → 페이지 변환
