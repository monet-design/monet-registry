# API Reference

Landing Mon Components API는 컴포넌트 검색, 조회, 코드 제공을 위한 RESTful API입니다.

## 기본 정보

| 항목 | 값 |
|------|---|
| Base URL | `https://registry.monet.design/api` |
| API Version | `v1` |
| 응답 형식 | JSON |
| 인증 | 불필요 (Public API) |

## 응답 형식

모든 응답은 `success` 필드를 포함합니다:

```json
// 성공
{
  "success": true,
  ...data
}

// 실패
{
  "success": false,
  "error": {
    "code": "ERROR_CODE",
    "message": "에러 설명",
    "recovery": "복구 방법 (선택)"
  }
}
```

---

## Endpoints

### Health Check

서버 상태를 확인합니다.

```
GET /api/health
```

#### Response

```json
{
  "status": "ok",
  "version": "1.0.0",
  "initialized": true,
  "component_count": 42
}
```

| 필드 | 타입 | 설명 |
|------|------|------|
| status | `"ok"` \| `"error"` | 서버 상태 |
| version | string | API 버전 |
| initialized | boolean | 레지스트리 초기화 여부 |
| component_count | number | 등록된 컴포넌트 수 |

#### Status Codes

| 코드 | 설명 |
|------|------|
| 200 | 정상 |
| 503 | 서버 에러 |

---

### Search Components

컴포넌트를 검색합니다. 텍스트 검색과 태그 필터링을 지원합니다.

```
GET /api/v1/components/search
```

#### Query Parameters

| 파라미터 | 타입 | 필수 | 기본값 | 설명 |
|----------|------|------|--------|------|
| query | string | - | `""` | 검색어 |
| category | string | - | - | 카테고리 필터 |
| language | string | - | - | 언어 필터 (en, ko) |
| limit | number | - | `10` | 결과 개수 (최대 50) |
| offset | number | - | `0` | 건너뛸 결과 수 (페이지네이션) |
| functional | string | - | - | 기능 태그 (쉼표 구분) |
| style | string | - | - | 스타일 태그 (쉼표 구분) |
| layout | string | - | - | 레이아웃 태그 (쉼표 구분) |
| industry | string | - | - | 산업 태그 (쉼표 구분) |

#### Response

```json
{
  "success": true,
  "query": "hero modern",
  "total": 5,
  "offset": 0,
  "limit": 10,
  "hasNext": false,
  "elapsed_ms": 12,
  "results": [
    {
      "id": "hero-gradient-01",
      "name": "hero-gradient-01",
      "category": "hero",
      "preview_image": "/images/hero-gradient-01.png",
      "tags": {
        "functional": ["cta", "headline"],
        "style": ["modern", "gradient"],
        "layout": ["centered"],
        "industry": ["saas", "tech"]
      },
      "keywords": ["hero", "landing", "gradient"]
    }
  ]
}
```

#### Example

```bash
# 텍스트 검색
curl "https://registry.monet.design/api/v1/components/search?query=modern+hero"

# 태그 필터링
curl "https://registry.monet.design/api/v1/components/search?category=hero&style=modern,gradient"

# 복합 검색
curl "https://registry.monet.design/api/v1/components/search?query=pricing&industry=saas&limit=20"
```

#### Caching

```
Cache-Control: public, s-maxage=300, stale-while-revalidate=600
```

---

### List Components

컴포넌트 목록을 조회합니다. 검색어 없이 필터링과 페이지네이션을 지원합니다.

```
GET /api/v1/components
```

#### Query Parameters

| 파라미터 | 타입 | 필수 | 기본값 | 설명 |
|----------|------|------|--------|------|
| limit | number | - | `20` | 결과 개수 (최대 50) |
| offset | number | - | `0` | 건너뛸 결과 수 (페이지네이션) |
| category | string | - | - | 카테고리 필터 |
| language | string | - | - | 언어 필터 (en, ko) |
| status | string | - | - | 상태 필터 (stable, draft, deprecated) |
| functional | string | - | - | 기능 태그 (쉼표 구분) |
| style | string | - | - | 스타일 태그 (쉼표 구분) |
| layout | string | - | - | 레이아웃 태그 (쉼표 구분) |
| industry | string | - | - | 산업 태그 (쉼표 구분) |

#### Response

```json
{
  "success": true,
  "pagination": {
    "total": 120,
    "offset": 0,
    "limit": 20,
    "hasNext": true
  },
  "components": [
    {
      "id": "hero-gradient-01",
      "name": "hero-gradient-01",
      "category": "hero",
      "preview_image": "/images/hero-gradient-01.png",
      "tags": {
        "functional": ["cta", "headline"],
        "style": ["modern", "gradient"],
        "layout": ["centered"],
        "industry": ["saas", "tech"]
      },
      "status": "stable",
      "language": "ko",
      "created_at": "2024-01-15T00:00:00.000Z"
    }
  ]
}
```

#### Example

```bash
# 전체 목록 (첫 20개)
curl "https://registry.monet.design/api/v1/components"

# 카테고리 필터링
curl "https://registry.monet.design/api/v1/components?category=hero"

# 페이지네이션
curl "https://registry.monet.design/api/v1/components?offset=20&limit=20"

# 복합 필터링
curl "https://registry.monet.design/api/v1/components?category=hero&style=modern,gradient&limit=10"
```

#### Caching

```
Cache-Control: public, s-maxage=300, stale-while-revalidate=600
```

---

### Get Component Details

특정 컴포넌트의 상세 정보를 조회합니다.

```
GET /api/v1/components/:id
```

#### Path Parameters

| 파라미터 | 타입 | 설명 |
|----------|------|------|
| id | string | 컴포넌트 ID |

#### Query Parameters

| 파라미터 | 타입 | 기본값 | 설명 |
|----------|------|--------|------|
| include_similar | boolean | `true` | 유사 컴포넌트 포함 여부 |

#### Response

```json
{
  "success": true,
  "component": {
    "id": "hero-gradient-01",
    "name": "hero-gradient-01",
    "category": "hero",
    "title": "Gradient Hero Section",
    "description": "Modern hero section with gradient background",
    "images": {
      "preview": "/images/hero-gradient-01.png",
      "thumbnail": "/images/hero-gradient-01-thumb.png"
    },
    "tags": {
      "functional": ["cta", "headline"],
      "style": ["modern", "gradient"],
      "layout": ["centered"],
      "industry": ["saas"]
    },
    "keywords": ["hero", "gradient"],
    "fonts": ["Inter", "Poppins"],
    "component_path": "hero/hero-gradient-01",
    "status": "active",
    "language": "ko",
    "created_at": "2024-01-15T00:00:00.000Z"
  },
  "similar_components": [
    {
      "id": "hero-modern-02",
      "name": "hero-modern-02",
      "category": "hero",
      "match_reason": "Same category and style"
    }
  ],
  "usage_hints": {
    "best_for": ["SaaS landing pages", "Product launches"],
    "not_recommended_for": ["Enterprise B2B"]
  }
}
```

#### Status Codes

| 코드 | 설명 |
|------|------|
| 200 | 성공 |
| 404 | 컴포넌트를 찾을 수 없음 |
| 500 | 서버 에러 |

#### Caching

```
Cache-Control: public, s-maxage=3600, stale-while-revalidate=7200
```

---

### Get Component Code

컴포넌트의 소스 코드와 분석 정보를 조회합니다.

```
GET /api/v1/components/:id/code
```

#### Path Parameters

| 파라미터 | 타입 | 설명 |
|----------|------|------|
| id | string | 컴포넌트 ID |

#### Response

```json
{
  "success": true,
  "component_id": "hero-gradient-01",
  "code": "export default function HeroGradient01() { ... }",
  "code_info": {
    "line_count": 85,
    "has_client_directive": false,
    "exports": ["HeroGradient01"],
    "imports": [
      { "package": "react", "items": ["useState"] },
      { "package": "next/image", "items": ["Image"] }
    ]
  },
  "dependencies": {
    "npm": ["react", "next"],
    "internal": ["@/components/ui/button"]
  },
  "integration_guide": {
    "import_statement": "import HeroGradient01 from '@/components/registry/hero-gradient-01'",
    "basic_usage": "<HeroGradient01 />"
  }
}
```

| 필드 | 설명 |
|------|------|
| code | 전체 소스 코드 |
| code_info.line_count | 코드 라인 수 |
| code_info.has_client_directive | `"use client"` 포함 여부 |
| code_info.exports | export된 함수/컴포넌트 목록 |
| code_info.imports | import 목록 |
| dependencies.npm | 사용된 npm 패키지 |
| dependencies.internal | 내부 모듈 의존성 |

#### Caching

```
Cache-Control: public, s-maxage=3600, immutable
```

---

### List Categories

사용 가능한 모든 카테고리 목록을 조회합니다.

```
GET /api/v1/categories
```

#### Response

```json
{
  "success": true,
  "categories": [
    {
      "name": "hero",
      "count": 12,
      "description": "Hero sections for landing pages",
      "examples": ["hero-gradient-01", "hero-modern-02"]
    },
    {
      "name": "pricing",
      "count": 8,
      "description": "Pricing tables and plans"
    }
  ]
}
```

#### Available Categories

| 카테고리 | 설명 |
|----------|------|
| hero | Hero sections for landing pages |
| stats | Statistics and metrics displays |
| testimonial | Customer testimonials and reviews |
| feature | Product features and benefits |
| pricing | Pricing tables and plans |
| cta | Call-to-action sections |
| contact | Contact forms and information |
| faq | Frequently asked questions |
| how-it-works | Process explanations |
| biography | Personal or company bios |
| before-after | Before and after comparisons |
| showcase | Product or project showcases |
| header | Navigation headers |
| footer | Page footers |
| gallery | Image galleries |
| team | Team member displays |
| logo-cloud | Partner and client logos |
| newsletter | Newsletter subscription forms |
| waitlist | Waitlist signup forms |
| other | Other components |

#### Caching

```
Cache-Control: public, s-maxage=3600, stale-while-revalidate=7200
```

---

### Get Filters

사용 가능한 필터링 옵션과 각 옵션별 컴포넌트 개수를 조회합니다.

```
GET /api/v1/filters
```

#### Response

```json
{
  "success": true,
  "categories": [
    { "value": "hero", "label": "Hero", "count": 45 },
    { "value": "feature", "label": "Feature", "count": 38 }
  ],
  "tags": {
    "functional": [
      { "value": "animation", "label": "Animation", "count": 52 },
      { "value": "carousel", "label": "Carousel", "count": 23 }
    ],
    "style": [
      { "value": "minimal", "label": "Minimal", "count": 89 }
    ],
    "layout": [
      { "value": "centered", "label": "Centered", "count": 120 }
    ],
    "industry": [
      { "value": "saas", "label": "Saas", "count": 67 }
    ]
  },
  "status": [
    { "value": "stable", "label": "Stable", "count": 380 },
    { "value": "draft", "label": "Draft", "count": 10 }
  ]
}
```

| 필드 | 설명 |
|------|------|
| categories | 카테고리 필터 옵션 목록 |
| tags.functional | 기능 태그 필터 옵션 목록 |
| tags.style | 스타일 태그 필터 옵션 목록 |
| tags.layout | 레이아웃 태그 필터 옵션 목록 |
| tags.industry | 산업 태그 필터 옵션 목록 |
| status | 상태 필터 옵션 목록 |

각 필터 옵션에는 `value` (API 파라미터 값), `label` (표시용 이름), `count` (해당 필터를 가진 컴포넌트 수)가 포함됩니다.

#### Example

```bash
curl "https://registry.monet.design/api/v1/filters"
```

#### Caching

```
Cache-Control: public, s-maxage=3600, stale-while-revalidate=7200
```

---

### Get Registry Stats

컴포넌트 레지스트리의 전체 통계를 조회합니다. 특정 카테고리로 필터링할 수 있습니다.

```
GET /api/v1/stats
```

#### Query Parameters

| 파라미터 | 타입 | 기본값 | 설명 |
|----------|------|--------|------|
| category | string | - | 카테고리 필터 (지정 시 해당 카테고리만 통계 계산) |
| include_examples | boolean | `true` | 카테고리별 예제 포함 여부 |

#### Response

```json
{
  "success": true,
  "total_components": 42,
  "categories": [
    {
      "name": "hero",
      "count": 12,
      "description": "Hero sections for landing pages",
      "examples": ["hero-gradient-01"]
    }
  ],
  "tags": {
    "functional": [
      { "tag": "cta", "count": 25 },
      { "tag": "form", "count": 15 }
    ],
    "style": [
      { "tag": "modern", "count": 30 },
      { "tag": "minimal", "count": 20 }
    ],
    "layout": [
      { "tag": "centered", "count": 18 }
    ],
    "industry": [
      { "tag": "saas", "count": 22 },
      { "tag": "ecommerce", "count": 15 }
    ]
  },
  "fonts_used": [
    { "tag": "Inter", "count": 35 },
    { "tag": "Poppins", "count": 20 }
  ],
  "query_tips": [
    "Use natural language queries like 'modern pricing table'",
    "Combine categories with tags for precise results",
    "Try industry-specific searches like 'saas hero'"
  ]
}
```

#### Example

```bash
# 전체 통계 조회
curl "https://registry.monet.design/api/v1/stats"

# 특정 카테고리 통계 조회
curl "https://registry.monet.design/api/v1/stats?category=hero"

# 예제 제외하고 조회
curl "https://registry.monet.design/api/v1/stats?include_examples=false"
```

#### Caching

```
Cache-Control: public, s-maxage=3600, stale-while-revalidate=7200
```

---

## Page Endpoints

페이지 컴포넌트는 여러 섹션 컴포넌트로 구성된 전체 랜딩 페이지입니다.

---

### List Pages

페이지 목록을 조회합니다. 필터링과 페이지네이션을 지원합니다.

```
GET /api/v1/pages
```

#### Query Parameters

| 파라미터 | 타입 | 필수 | 기본값 | 설명 |
|----------|------|------|--------|------|
| limit | number | - | `20` | 결과 개수 (최대 50) |
| offset | number | - | `0` | 건너뛸 결과 수 (페이지네이션) |
| language | string | - | - | 언어 필터 (en, ko) |
| status | string | - | - | 상태 필터 (stable, draft, deprecated) |
| sort_by | string | - | - | 정렬 기준 (`created_at`, `sections_count`) |
| sort_order | string | - | `desc` | 정렬 순서 (`asc`, `desc`) |

#### Response

```json
{
  "success": true,
  "pagination": {
    "total": 25,
    "offset": 0,
    "limit": 20,
    "hasNext": true
  },
  "pages": [
    {
      "id": "bolta-io",
      "name": "bolta-io",
      "title": "Bolta.io Landing Page",
      "preview_image": "/registry/preview/pages/bolta-io.png",
      "sections_count": 8,
      "section_categories": ["hero", "feature", "stats", "testimonial", "pricing", "cta", "footer"],
      "status": "stable",
      "language": "ko",
      "source": {
        "type": "url",
        "url": "https://bolta.io"
      },
      "created_at": "2024-01-15T00:00:00.000Z"
    }
  ]
}
```

#### Example

```bash
# 전체 목록 (첫 20개)
curl "https://registry.monet.design/api/v1/pages"

# 페이지네이션
curl "https://registry.monet.design/api/v1/pages?offset=20&limit=20"

# 섹션 개수로 정렬
curl "https://registry.monet.design/api/v1/pages?sort_by=sections_count&sort_order=desc"
```

#### Caching

```
Cache-Control: public, s-maxage=300, stale-while-revalidate=600
```

---

### Get Page Details

특정 페이지의 상세 정보를 조회합니다.

```
GET /api/v1/pages/:id
```

#### Path Parameters

| 파라미터 | 타입 | 설명 |
|----------|------|------|
| id | string | 페이지 ID |

#### Query Parameters

| 파라미터 | 타입 | 기본값 | 설명 |
|----------|------|--------|------|
| include_sections | boolean | `true` | 섹션 목록 포함 여부 |
| include_similar | boolean | `true` | 유사 페이지 포함 여부 |

#### Response

```json
{
  "success": true,
  "page": {
    "id": "bolta-io",
    "name": "bolta-io",
    "title": "Bolta.io Landing Page",
    "images": {
      "preview": "/registry/preview/pages/bolta-io.png"
    },
    "tags": {
      "functional": ["animation", "form"],
      "style": ["modern", "gradient"],
      "layout": ["centered"],
      "industry": ["saas", "fintech"]
    },
    "keywords": ["landing", "saas", "fintech"],
    "source": {
      "type": "url",
      "url": "https://bolta.io",
      "scrapedAt": "2024-01-15T00:00:00.000Z"
    },
    "component_path": "pages/bolta-io",
    "status": "stable",
    "language": "ko",
    "created_at": "2024-01-15T00:00:00.000Z"
  },
  "sections": [
    {
      "id": "bolta-io-hero-1",
      "name": "bolta-io-hero-1",
      "category": "hero",
      "order": 1,
      "preview_image": "/registry/preview/bolta-io-hero-1.png",
      "details": {
        "name": "bolta-io-hero-1",
        "tags": {
          "functional": ["cta", "animation"],
          "style": ["modern", "gradient"],
          "layout": ["centered"],
          "industry": ["saas"]
        },
        "keywords": ["hero", "landing"],
        "component_path": "hero/bolta-io-hero-1"
      }
    }
  ],
  "page_info": {
    "total_sections": 8,
    "categories_used": ["hero", "feature", "stats", "testimonial", "pricing", "cta", "footer"]
  },
  "similar_pages": [
    {
      "id": "acme-landing",
      "name": "acme-landing",
      "title": "Acme Landing Page",
      "sections_count": 7,
      "match_reason": "Similar section composition"
    }
  ]
}
```

#### Status Codes

| 코드 | 설명 |
|------|------|
| 200 | 성공 |
| 404 | 페이지를 찾을 수 없음 (유사 ID 제안 포함) |
| 500 | 서버 에러 |

#### Caching

```
Cache-Control: public, s-maxage=3600, stale-while-revalidate=7200
```

---

### Get Page Sections

특정 페이지의 섹션 목록을 조회합니다.

```
GET /api/v1/pages/:id/sections
```

#### Path Parameters

| 파라미터 | 타입 | 설명 |
|----------|------|------|
| id | string | 페이지 ID |

#### Query Parameters

| 파라미터 | 타입 | 기본값 | 설명 |
|----------|------|--------|------|
| include_details | boolean | `false` | 섹션 상세 정보 포함 여부 |
| category | string | - | 특정 카테고리 섹션만 필터링 |

#### Response

```json
{
  "success": true,
  "page_id": "bolta-io",
  "total_sections": 8,
  "sections": [
    {
      "id": "bolta-io-hero-1",
      "name": "bolta-io-hero-1",
      "category": "hero",
      "order": 1,
      "preview_image": "/registry/preview/bolta-io-hero-1.png",
      "details": {
        "name": "bolta-io-hero-1",
        "tags": {
          "functional": ["cta"],
          "style": ["modern"],
          "layout": ["centered"],
          "industry": ["saas"]
        },
        "keywords": ["hero"],
        "component_path": "hero/bolta-io-hero-1"
      }
    }
  ]
}
```

#### Example

```bash
# 페이지의 모든 섹션
curl "https://registry.monet.design/api/v1/pages/bolta-io/sections"

# 상세 정보 포함
curl "https://registry.monet.design/api/v1/pages/bolta-io/sections?include_details=true"

# 특정 카테고리만 필터링
curl "https://registry.monet.design/api/v1/pages/bolta-io/sections?category=hero"
```

#### Caching

```
Cache-Control: public, s-maxage=3600, stale-while-revalidate=7200
```

---

### Search Pages

페이지를 검색합니다. 텍스트 검색과 섹션 개수 필터링을 지원합니다.

```
GET /api/v1/pages/search
```

#### Query Parameters

| 파라미터 | 타입 | 필수 | 기본값 | 설명 |
|----------|------|------|--------|------|
| query | string | O | - | 검색어 |
| language | string | - | - | 언어 필터 (en, ko) |
| limit | number | - | `10` | 결과 개수 (최대 50) |
| offset | number | - | `0` | 건너뛸 결과 수 (페이지네이션) |
| min_sections | number | - | - | 최소 섹션 개수 |
| max_sections | number | - | - | 최대 섹션 개수 |

#### Response

```json
{
  "success": true,
  "query": "saas landing",
  "total": 5,
  "offset": 0,
  "limit": 10,
  "hasNext": false,
  "elapsed_ms": 8,
  "results": [
    {
      "id": "bolta-io",
      "name": "bolta-io",
      "title": "Bolta.io Landing Page",
      "preview_image": "/registry/preview/pages/bolta-io.png",
      "sections_count": 8,
      "keywords": ["saas", "fintech", "landing"]
    }
  ]
}
```

#### Example

```bash
# 텍스트 검색
curl "https://registry.monet.design/api/v1/pages/search?query=saas+landing"

# 섹션 개수 필터링
curl "https://registry.monet.design/api/v1/pages/search?query=landing&min_sections=5"

# 페이지네이션
curl "https://registry.monet.design/api/v1/pages/search?query=modern&limit=20&offset=0"
```

#### Caching

```
Cache-Control: public, s-maxage=300, stale-while-revalidate=600
```

---

### Get Pages Stats

페이지 레지스트리의 전체 통계를 조회합니다.

```
GET /api/v1/pages/stats
```

#### Response

```json
{
  "success": true,
  "total_pages": 25,
  "total_sections_across_pages": 180,
  "average_sections_per_page": 7.2,
  "section_categories": [
    { "category": "hero", "count": 25 },
    { "category": "feature", "count": 42 },
    { "category": "testimonial", "count": 18 },
    { "category": "pricing", "count": 15 },
    { "category": "cta", "count": 30 },
    { "category": "footer", "count": 25 }
  ],
  "sources": {
    "url": 20,
    "manual": 5
  },
  "query_tips": [
    "Search for pages by source URL or title",
    "Filter pages by minimum section count: min_sections=3",
    "View all sections of a page with /pages/{id}/sections",
    "Get detailed section info with include_details=true"
  ]
}
```

| 필드 | 설명 |
|------|------|
| total_pages | 등록된 전체 페이지 수 |
| total_sections_across_pages | 모든 페이지의 총 섹션 수 |
| average_sections_per_page | 페이지당 평균 섹션 수 |
| section_categories | 카테고리별 섹션 분포 |
| sources.url | URL에서 스크래핑한 페이지 수 |
| sources.manual | 수동으로 추가한 페이지 수 |

#### Caching

```
Cache-Control: public, s-maxage=3600, stale-while-revalidate=7200
```

---

## Error Codes

| 코드 | HTTP Status | 설명 |
|------|-------------|------|
| NOT_FOUND | 404 | 요청한 리소스를 찾을 수 없음 |
| INTERNAL_ERROR | 500 | 서버 내부 에러 |
| INVALID_PARAMETER | 400 | 잘못된 파라미터 |

---

## Usage Examples

### JavaScript (fetch)

```javascript
const BASE_URL = 'https://registry.monet.design';

// 컴포넌트 검색
const searchComponents = async (query) => {
  const res = await fetch(`${BASE_URL}/api/v1/components/search?query=${encodeURIComponent(query)}`);
  const data = await res.json();

  if (!data.success) {
    throw new Error(data.error.message);
  }

  return data.results;
};

// 컴포넌트 상세 조회
const getComponent = async (id) => {
  const res = await fetch(`${BASE_URL}/api/v1/components/${id}`);
  const data = await res.json();

  if (!data.success) {
    throw new Error(data.error.message);
  }

  return data.component;
};

// 컴포넌트 코드 가져오기
const getComponentCode = async (id) => {
  const res = await fetch(`${BASE_URL}/api/v1/components/${id}/code`);
  const data = await res.json();

  if (!data.success) {
    throw new Error(data.error.message);
  }

  return data.code;
};

// 페이지 검색
const searchPages = async (query) => {
  const res = await fetch(`${BASE_URL}/api/v1/pages/search?query=${encodeURIComponent(query)}`);
  const data = await res.json();

  if (!data.success) {
    throw new Error(data.error.message);
  }

  return data.results;
};

// 페이지 상세 조회
const getPage = async (id) => {
  const res = await fetch(`${BASE_URL}/api/v1/pages/${id}`);
  const data = await res.json();

  if (!data.success) {
    throw new Error(data.error.message);
  }

  return data.page;
};

// 페이지 섹션 목록 조회
const getPageSections = async (id, includeDetails = false) => {
  const res = await fetch(`${BASE_URL}/api/v1/pages/${id}/sections?include_details=${includeDetails}`);
  const data = await res.json();

  if (!data.success) {
    throw new Error(data.error.message);
  }

  return data.sections;
};
```

### cURL

```bash
# Health check
curl https://registry.monet.design/api/health

# 컴포넌트 검색 (페이지네이션 포함)
curl "https://registry.monet.design/api/v1/components/search?query=hero&limit=10&offset=0"

# 컴포넌트 목록 조회
curl "https://registry.monet.design/api/v1/components?limit=20&offset=0"

# 필터링과 함께 목록 조회
curl "https://registry.monet.design/api/v1/components?category=hero&style=modern"

# 컴포넌트 상세 조회
curl https://registry.monet.design/api/v1/components/hero-gradient-01

# 컴포넌트 코드 조회
curl https://registry.monet.design/api/v1/components/hero-gradient-01/code

# 카테고리 목록
curl https://registry.monet.design/api/v1/categories

# 필터링 옵션 조회
curl https://registry.monet.design/api/v1/filters

# 통계 조회
curl https://registry.monet.design/api/v1/stats

# 페이지 목록 조회
curl "https://registry.monet.design/api/v1/pages"

# 페이지 검색
curl "https://registry.monet.design/api/v1/pages/search?query=saas+landing"

# 페이지 상세 조회
curl https://registry.monet.design/api/v1/pages/bolta-io

# 페이지 섹션 목록 조회
curl "https://registry.monet.design/api/v1/pages/bolta-io/sections?include_details=true"

# 페이지 통계 조회
curl https://registry.monet.design/api/v1/pages/stats
```

---

## Rate Limiting

현재 Rate Limiting은 적용되어 있지 않습니다.

## CORS

모든 origin에서 접근 가능합니다.
