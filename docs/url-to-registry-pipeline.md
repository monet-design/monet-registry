# URL-to-Registry Pipeline

웹사이트 URL을 입력하면 해당 페이지를 스크래핑하여 registry 컴포넌트들로 자동 변환하는 파이프라인입니다.

## 개요

이 파이프라인은 다음을 자동으로 수행합니다:

1. 웹사이트 스크래핑 (스크린샷, HTML, CSS 수집)
2. 페이지를 섹션으로 분할 (하이브리드: HTML 구조 + AI 검증)
3. 각 섹션을 독립적인 registry section 컴포넌트로 생성
4. 전체 페이지를 registry page 컴포넌트로 생성

## 컴포넌트 분류

| 타입 | 설명 | 저장 위치 |
|------|------|----------|
| Section | 개별 섹션 (hero, pricing, footer 등) | `src/components/registry/{name}/` |
| Page | 여러 섹션을 조합한 전체 페이지 | `src/components/registry/pages/{name}/` |

## 사용 방법

### 방법 1: Agent 사용 (권장)

Claude Code에서 `url-to-page` agent를 호출합니다:

```
@agent url-to-page https://example.com
```

Agent가 자동으로 스크래핑, 섹션 분할, 컴포넌트 생성을 수행합니다.

### 방법 2: 수동 실행

#### Step 1: 웹사이트 스크래핑

```bash
pnpm scrape:url --url "https://example.com"

# 또는 출력 디렉토리 지정
npx tsx scripts/scrape/scrape-website.ts \
  --url "https://example.com" \
  --output-dir "./public/scraped/my-custom-dir"
```

**생성되는 파일:**

```
public/scraped/{domain}-{date}/
├── full-page.png      # 전체 페이지 스크린샷
├── page.html          # HTML 소스
├── styles.json        # 계산된 CSS 스타일
├── dom-tree.json      # DOM 구조 분석 결과
├── sections.json      # 분할된 섹션 정보
├── images.json        # 추출된 이미지 정보
├── fonts.json         # 추출된 폰트 정보
├── videos.json        # 추출된 비디오 정보
├── metadata.json      # 스크래핑 메타데이터
├── sections/
│   ├── section-0.png  # 섹션별 스크린샷
│   ├── section-0.html # 섹션별 HTML
│   ├── section-1.png
│   ├── section-1.html
│   └── ...
├── images/            # 다운로드된 이미지 파일
│   ├── image-0.png
│   ├── image-1.jpg
│   └── ...
├── fonts/             # 다운로드된 폰트 파일
│   ├── CustomFont.woff2
│   └── ...
└── videos/            # 비디오 썸네일 파일
    ├── thumb-0.jpg    # YouTube/HTML5 비디오 썸네일
    └── ...
```

#### Step 2: 섹션 분할 확인

`sections.json`을 확인하여 섹션이 올바르게 분할되었는지 검토합니다:

```json
[
  {
    "index": 0,
    "tag": "header",
    "selector": "header.navbar",
    "category": "header",
    "rect": { "top": 0, "height": 80 },
    "confidence": 0.9
  },
  {
    "index": 1,
    "tag": "section",
    "selector": "section#hero",
    "category": "hero",
    "rect": { "top": 80, "height": 600 },
    "confidence": 0.9
  }
]
```

#### Step 2.5: 이미지 및 폰트 확인

`images.json`과 `fonts.json`을 확인하여 추출된 리소스를 검토합니다:

**images.json 예시:**
```json
[
  {
    "originalUrl": "https://example.com/hero-image.png",
    "localPath": "images/image-0.png",
    "type": "img",
    "sectionIndex": 1,
    "alt": "Hero banner",
    "width": 1200,
    "height": 600,
    "downloaded": true
  },
  {
    "originalUrl": "https://example.com/bg-pattern.svg",
    "localPath": "images/image-1.svg",
    "type": "background",
    "sectionIndex": 0,
    "downloaded": true
  }
]
```

**fonts.json 예시:**
```json
[
  {
    "family": "Inter",
    "url": "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700",
    "source": "google-fonts",
    "weights": ["400", "500", "600", "700"],
    "styles": ["normal"],
    "downloaded": false
  },
  {
    "family": "CustomBrand",
    "url": "https://example.com/fonts/custom-brand.woff2",
    "localPath": "fonts/CustomBrand.woff2",
    "source": "custom",
    "weights": ["400"],
    "styles": ["normal"],
    "format": "woff2",
    "downloaded": true
  }
]
```

#### Step 3: 섹션별 컴포넌트 생성

각 섹션에 대해 `img-to-component` agent를 호출하거나 수동으로 생성합니다:

```bash
python3 scripts/create-registry-component.py \
  --name "example-com-hero-0" \
  --category "hero" \
  --image-path "scraped/example-com-2025-01-15/sections/section-0.png" \
  --keywords "hero, landing, saas" \
  --parent-page "example-com-landing" \
  --source-url "https://example.com" \
  --section-index 0
```

#### Step 4: Page 컴포넌트 생성

모든 섹션 컴포넌트 생성 후:

```bash
pnpm generate:page \
  --name "example-com-landing" \
  --sections "example-com-header-0,example-com-hero-1,example-com-footer-2" \
  --source-url "https://example.com" \
  --scraped-dir "public/scraped/example-com-2025-01-15"
```

#### Step 5: Registry 업데이트

```bash
pnpm metadata:build
```

## 메타데이터 구조

### Section 메타데이터

URL에서 생성된 섹션은 추가 필드를 가집니다:

```yaml
schemaVersion: "2.0"
name: example-com-hero-0
category: hero

images:
  preview: scraped/example-com-2025-01-15/sections/section-0.png

freeformKeywords:
  - hero
  - landing page

fontFamily:
  - Inter

# URL 스크래핑 시 추가되는 필드
parentPage: example-com-landing

source:
  type: url
  url: https://example.com
  scrapedAt: "2025-01-15T10:30:00Z"
  sectionIndex: 0

# 스크래핑된 리소스 참조
scrapedAssets:
  images:
    - originalUrl: https://example.com/hero-image.png
      localPath: images/image-0.png
  fonts:
    - family: Inter
      source: google-fonts
      weights: ["400", "500", "600", "700"]

createdAt: "2025-01-15T10:35:00Z"
status: stable
```

### Page 메타데이터

```yaml
schemaVersion: "2.0"
name: example-com-landing
category: page

images:
  preview: scraped/example-com-2025-01-15/full-page.png

title: Example.com Landing Page

sections:
  - id: example-com-header-0
    category: header
    order: 0
  - id: example-com-hero-1
    category: hero
    order: 1
  - id: example-com-footer-2
    category: footer
    order: 2

source:
  type: url
  url: https://example.com
  scrapedAt: "2025-01-15T10:30:00Z"

pageInfo:
  totalSections: 3

freeformKeywords:
  - complete landing page
  - example.com

createdAt: "2025-01-15T10:30:00Z"
status: stable
```

## 생성되는 Registry 인덱스

`pnpm metadata:build` 실행 시 다음 파일들이 생성됩니다:

| 파일 | 설명 |
|------|------|
| `public/generated/page-registry.json` | Page 컴포넌트 레지스트리 |
| `public/generated/page-index.json` | Page → Sections 매핑 |
| `public/generated/section-to-page.json` | Section → Page 역참조 |

### page-index.json 예시

```json
{
  "example-com-landing": [
    "example-com-header-0",
    "example-com-hero-1",
    "example-com-footer-2"
  ]
}
```

### section-to-page.json 예시

```json
{
  "example-com-header-0": "example-com-landing",
  "example-com-hero-1": "example-com-landing",
  "example-com-footer-2": "example-com-landing"
}
```

## 섹션 카테고리

자동 분류되는 섹션 카테고리:

| 카테고리 | 설명 | 인식 키워드 |
|---------|------|------------|
| `header` | 최상단 네비게이션 | header, nav, navbar |
| `hero` | 메인 배너 | hero, banner, splash, intro |
| `feature` | 기능 소개 | feature, benefit, service |
| `pricing` | 가격표 | pricing, price, plan, tier |
| `testimonial` | 고객 후기 | testimonial, review, quote |
| `cta` | 행동 유도 | cta, get-started, signup |
| `faq` | 자주 묻는 질문 | faq, question, accordion |
| `contact` | 연락처 | contact, form, reach |
| `footer` | 푸터 | footer, bottom, copyright |
| `stats` | 통계 | stats, number, metric |
| `logo-cloud` | 로고 클라우드 | logo, partner, client |
| `how-it-works` | 프로세스 설명 | how-it-works, process, steps |

## 이미지 추출

스크래핑 시 다음 소스에서 이미지를 추출합니다:

| 소스 | 설명 | 타입 |
|------|------|------|
| `<img>` 태그 | src, data-src, data-lazy-src 속성 | `img` |
| `<picture>` 태그 | srcset의 첫 번째 URL | `img` |
| CSS background-image | url() 함수 내 이미지 | `background` |
| SVG 외부 참조 | `<use>`, `<image>` 태그의 href | `svg` |

**이미지 정보:**
- 원본 URL을 절대 경로로 변환
- 가능한 경우 alt 텍스트, 너비/높이 추출
- 이미지가 속한 섹션 인덱스 매핑
- data: URL (인라인 이미지)은 제외

## 폰트 추출

스크래핑 시 다음 소스에서 폰트 정보를 추출합니다:

| 소스 | 설명 | 타입 |
|------|------|------|
| `@font-face` 규칙 | CSS에서 정의된 웹폰트 | `custom` |
| Google Fonts 링크 | `fonts.googleapis.com` 링크 | `google-fonts` |
| Adobe Fonts 링크 | `use.typekit.net` 링크 | `adobe-fonts` |
| 사용 중인 폰트 | computed style에서 감지 | `system` |

**폰트 정보:**
- 폰트 패밀리 이름
- 사용된 weight 및 style 목록
- 웹폰트 URL (있는 경우)
- 폰트 포맷 (woff2, woff, ttf 등)

**다운로드 정책:**
- 커스텀 웹폰트 파일: 직접 다운로드
- Google Fonts / Adobe Fonts: CSS 링크만 저장 (라이선스 준수)
- 시스템 폰트: 다운로드하지 않음

## 비디오 추출

스크래핑 시 다음 소스에서 비디오를 추출합니다:

| 소스 | 설명 | 플랫폼 |
|------|------|--------|
| `<iframe>` YouTube | `youtube.com/embed/*` 또는 `youtu.be/*` URL | `youtube` |
| `<video>` 태그 | src 속성 또는 `<source>` 태그의 src | `html5` |

**videos.json 예시:**
```json
[
  {
    "originalUrl": "https://www.youtube.com/embed/dQw4w9WgXcQ",
    "platform": "youtube",
    "type": "iframe",
    "videoId": "dQw4w9WgXcQ",
    "embedCode": "<iframe src=\"https://www.youtube.com/embed/dQw4w9WgXcQ\" ...></iframe>",
    "posterUrl": "https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg",
    "thumbnailPath": "videos/thumb-0.jpg",
    "sectionIndex": 1,
    "width": 560,
    "height": 315,
    "thumbnailDownloaded": true
  },
  {
    "originalUrl": "https://example.com/video.mp4",
    "platform": "html5",
    "type": "video",
    "posterUrl": "https://example.com/poster.jpg",
    "thumbnailPath": "videos/thumb-1.jpg",
    "sectionIndex": 3,
    "width": 1280,
    "height": 720,
    "thumbnailDownloaded": true
  }
]
```

**비디오 정보:**
- YouTube: video ID 추출, 고품질 썸네일 URL 자동 생성
- HTML5 video: poster 속성에서 썸네일 URL 추출
- 비디오가 속한 섹션 인덱스 매핑
- 썸네일 이미지 자동 다운로드

**컴포넌트 구현 시:**
- YouTube: `<iframe>` 또는 썸네일 클릭 시 재생 패턴 사용
- HTML5 video: `<video>` 태그에 controls, poster 속성 활용
- 비디오가 포함된 섹션은 `tags.functional`에 `video` 태그 추가

## 스크래핑 설정

기본 설정:

| 설정 | 기본값 | 설명 |
|------|--------|------|
| 뷰포트 너비 | 1440px | 스크린샷 너비 |
| 뷰포트 높이 | 900px | 초기 뷰포트 높이 |
| 최대 캡처 높이 | 5400px | 전체 페이지 최대 높이 |
| 대기 시간 | 3000ms | 페이지 로드 후 대기 |

## 제한 사항

- 한 페이지당 최대 10개 섹션까지 처리
- 무한 스크롤 페이지는 최대 높이까지만 캡처
- 팝업/모달은 제외
- 로그인이 필요한 페이지는 스크래핑 불가
- JavaScript로 동적 로드되는 콘텐츠는 대기 시간 이후 캡처

## 트러블슈팅

### 스크래핑 실패

```bash
# 더 긴 대기 시간으로 재시도
npx tsx scripts/scrape/scrape-website.ts --url "https://example.com" --wait-time 5000
```

### 섹션 분할이 정확하지 않음

1. `sections.json`을 수동으로 편집
2. AI에게 분할 조정 요청
3. 수정된 섹션 정보로 컴포넌트 생성

### TypeScript 에러

```bash
# 타입 에러 확인
npx tsc --noEmit

# 특정 파일만 확인
npx tsc --noEmit src/components/registry/{component-name}/index.tsx
```

## 예시: cal.com 스크래핑

```bash
# 1. 스크래핑
pnpm scrape:url --url "https://cal.com"

# 2. 결과 확인
cat public/scraped/cal-com-*/sections.json

# 3. 섹션별 컴포넌트 생성 (img-to-component agent 사용)

# 4. Page 컴포넌트 생성
pnpm generate:page \
  --name "cal-com-landing" \
  --sections "cal-com-header-0,cal-com-hero-1,..." \
  --source-url "https://cal.com"

# 5. Registry 업데이트
pnpm metadata:build
```
