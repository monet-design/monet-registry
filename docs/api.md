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
| limit | number | - | `10` | 결과 개수 (최대 50) |
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

### Get Registry Stats

컴포넌트 레지스트리의 전체 통계를 조회합니다.

```
GET /api/v1/stats
```

#### Query Parameters

| 파라미터 | 타입 | 기본값 | 설명 |
|----------|------|--------|------|
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
```

### cURL

```bash
# Health check
curl https://registry.monet.design/api/health

# 컴포넌트 검색
curl "https://registry.monet.design/api/v1/components/search?query=hero&limit=5"

# 컴포넌트 상세 조회
curl https://registry.monet.design/api/v1/components/hero-gradient-01

# 컴포넌트 코드 조회
curl https://registry.monet.design/api/v1/components/hero-gradient-01/code

# 카테고리 목록
curl https://registry.monet.design/api/v1/categories

# 통계 조회
curl https://registry.monet.design/api/v1/stats
```

---

## Rate Limiting

현재 Rate Limiting은 적용되어 있지 않습니다.

## CORS

모든 origin에서 접근 가능합니다.
