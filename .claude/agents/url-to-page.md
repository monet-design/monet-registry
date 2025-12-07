---
name: url-to-page
description: URL을 입력받아 전체 페이지를 스크래핑하고, 섹션별 컴포넌트와 페이지 컴포넌트를 생성한다.
model: inherit
---

주어진 URL을 분석하여 registry 컴포넌트들로 변환하세요.

## 1단계: 스크래핑

다음 스크립트를 실행하여 웹사이트를 스크래핑하세요:

```bash
npx tsx scripts/scrape/scrape-website.ts --url "{URL}"
```

**생성되는 파일:**
- `public/scraped/{domain}-{date}/full-page.png` - 전체 페이지 스크린샷
- `public/scraped/{domain}-{date}/page.html` - HTML 소스
- `public/scraped/{domain}-{date}/styles.json` - 계산된 CSS
- `public/scraped/{domain}-{date}/dom-tree.json` - DOM 구조 분석
- `public/scraped/{domain}-{date}/sections.json` - 1차 분할된 섹션 정보
- `public/scraped/{domain}-{date}/sections/section-*.png` - 섹션별 스크린샷
- `public/scraped/{domain}-{date}/sections/section-*.html` - 섹션별 HTML

## 2단계: 섹션 분할 검증

스크래핑 결과를 분석하세요:

1. `full-page.png`를 읽고 시각적으로 섹션 경계를 파악하세요.
2. `sections.json`에서 1차 분할된 섹션 정보를 확인하세요.
3. 시각적 분석과 DOM 분석 결과를 비교하여 조정이 필요한지 판단하세요:
   - 시각적으로 하나의 섹션인데 DOM이 분리한 경우 → 병합 필요
   - 시각적으로 분리되어야 하는데 DOM이 하나로 본 경우 → 분할 필요
4. 각 섹션의 카테고리를 확인/수정하세요 (hero, feature, pricing, footer 등).
5. 페이지 텍스트의 언어를 파악하세요 (en: 영어, ko: 한국어).

**섹션 카테고리 기준:**
- `header`: 최상단 네비게이션 바
- `hero`: 메인 배너, 첫 화면 콘텐츠
- `feature`: 기능/서비스 소개
- `pricing`: 가격표, 플랜 비교
- `testimonial`: 고객 후기, 리뷰
- `cta`: 행동 유도 버튼/섹션
- `faq`: 자주 묻는 질문
- `contact`: 연락처, 문의 폼
- `footer`: 최하단 푸터
- `stats`: 숫자/통계 섹션
- `logo-cloud`: 파트너/클라이언트 로고
- `how-it-works`: 프로세스/단계 설명

## 3단계: 섹션별 컴포넌트 생성

각 섹션에 대해 img-to-component agent를 **병렬로** 호출하세요:

**섹션 이름 규칙**: `{domain}-{category}-{index}`
- 예: `example-com-hero-0`, `example-com-pricing-1`, `example-com-footer-2`

**호출 예시:**
```
이미지: public/scraped/{domain}-{date}/sections/section-0.png

python3 scripts/create-registry-component.py \
  --name "{domain}-{category}-{index}" \
  --category "{category}" \
  --image-path "scraped/{domain}-{date}/sections/section-{index}.png" \
  --keywords "{키워드1}, {키워드2}, ..." \
  --language "{en 또는 ko}" \
  --parent-page "{domain}-landing" \
  --source-url "{URL}" \
  --section-index {index} \
  --tags-functional "{기능태그들}" \
  --tags-style "{스타일태그들}" \
  --tags-layout "{레이아웃태그들}" \
  --tags-industry "{산업태그들}"
```

**Tags 카테고리 참조:**
- `functional`: email-capture, lead-capture, video, hover-effect, animation, accordion, dropdown, search
- `style`: light-theme, dark-theme, modern, minimal, bold, warm, elegant, serif, sans-serif, gradient, shadow
- `layout`: centered, single-column, two-column, split-layout, grid, full-width, responsive, left-aligned
- `industry`: saas, fintech, ai, startup, creative, travel, portfolio, agency

**주의사항:**
- 모든 섹션에 `--parent-page`, `--source-url`, `--section-index` 옵션 반드시 포함
- **모든 섹션에 `--language` 옵션을 반드시 포함** (페이지 텍스트 언어에 따라 en/ko 지정)
- **모든 섹션에 `--tags-*` 옵션을 반드시 포함** (이미지 분석 후 적절한 태그 생성)
- 섹션별 HTML snippet (`section-*.html`)을 참고하여 더 정확한 구현
- 한 페이지에서 최대 10개 섹션까지만 처리
- 중복 디자인의 섹션은 하나만 생성

## 4단계: Page 컴포넌트 생성

모든 섹션 컴포넌트 생성 완료 후:

```bash
npx tsx scripts/generate-page-component.ts \
  --name "{domain}-landing" \
  --sections "{section-id-1},{section-id-2},{section-id-3},..." \
  --source-url "{URL}" \
  --scraped-dir "public/scraped/{domain}-{date}"
```

**생성 위치:** `src/components/registry/pages/{domain}-landing/`

## 5단계: Registry 업데이트

```bash
pnpm metadata:build
```

## 주의사항

- 팝업/모달은 제외
- 네비게이션 바가 고정(sticky)인 경우 header 섹션으로 분류
- 무한 스크롤 페이지는 첫 뷰포트 5배까지만 캡처됨
- 스크래핑 실패 시 최대 3회 재시도
- 각 섹션 컴포넌트 생성 후 TypeScript 에러가 없는지 확인
- 절대 `npm run build`를 실행하지 마세요

## 최종 결과물

1. **Section 컴포넌트들**: `src/components/registry/{domain}-{category}-{index}/`
   - `index.tsx` - React 컴포넌트
   - `metadata.yaml` - 메타데이터 (parentPage, source 포함)

2. **Page 컴포넌트**: `src/components/registry/pages/{domain}-landing/`
   - `index.tsx` - 섹션들을 조합한 전체 페이지
   - `metadata.yaml` - 페이지 메타데이터 (sections 배열 포함)

3. **Registry 인덱스**: `public/generated/`
   - `page-registry.json` - 페이지 레지스트리
   - `page-index.json` - 페이지 → 섹션 매핑
   - `section-to-page.json` - 섹션 → 페이지 역참조
