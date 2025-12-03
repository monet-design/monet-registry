# MCP Server API Documentation

## 개요

MCP Server는 랜딩 페이지 컴포넌트 레지스트리를 제공하는 REST API 서버입니다. 컴포넌트 검색, 상세 조회, 코드 가져오기, 카테고리 탐색, 통계 정보 조회 등의 기능을 제공합니다.

## 기본 정보

- **Base URL**: `/api/v1`
- **Content-Type**: `application/json`
- **인증**: 별도 인증 필요 없음

## API 목록

### 1. 컴포넌트 검색 API

**엔드포인트**: `GET /api/v1/components/search`

**설명**: 키워드, 카테고리, 태그 등을 기반으로 컴포넌트를 검색합니다.

**쿼리 파라미터**:
- `query` (string, 필수): 검색어
- `category` (string, 선택): 카테고리 필터
- `style` (string, 선택): 스타일 태그 (쉼표 구분, 예: "minimal,dark-theme")
- `layout` (string, 선택): 레이아웃 태그 (쉼표 구분)
- `functional` (string, 선택): 기능 태그 (쉼표 구분)
- `industry` (string, 선택): 산업 태그 (쉼표 구분)
- `limit` (number, 선택): 결과 수 제한 (기본값: 10)

**응답 형식 (성공)**:
```json
{
  "success": true,
  "query": "hero",
  "total": 25,
  "elapsed_ms": 45,
  "results": [
    {
      "id": "hero-001",
      "name": "Hero Section",
      "category": "hero",
      "preview_image": "/registry/hero-001/preview.png",
      "tags": {
        "functional": ["cta", "hero"],
        "style": ["minimal", "modern"],
        "layout": ["centered"],
        "industry": ["saas", "landing"]
      },
      "keywords": ["hero", "landing", "cta"]
    }
  ],
  "suggestions": {
    "related_categories": ["pricing", "features"],
    "related_tags": ["dark-theme", "animated"],
    "example_queries": ["hero pricing", "minimal hero"]
  }
}
```

**에러 응답**:
```json
{
  "success": false,
  "error": {
    "code": "EMPTY_RESULTS",
    "message": "No components found matching the search criteria"
  }
}
```

### 2. 컴포넌트 상세 정보 API

**엔드포인트**: `GET /api/v1/components/{id}`

**설명**: 특정 컴포넌트의 상세 정보를 조회합니다.

**경로 파라미터**:
- `id` (string, 필수): 컴포넌트 ID

**쿼리 파라미터**:
- `include_similar` (boolean, 선택): 유사 컴포넌트 포함 여부 (기본값: true)

**응답 형식 (성공)**:
```json
{
  "success": true,
  "component": {
    "id": "hero-001",
    "name": "Hero Section",
    "category": "hero",
    "title": "Modern Hero Section",
    "description": {
      "short": "A clean, modern hero section for landing pages",
      "detailed": "This hero component features a centered layout with gradient text effects and call-to-action buttons..."
    },
    "images": {
      "preview": "/registry/hero-001/preview.png",
      "thumbnail": "/registry/hero-001/thumbnail.png"
    },
    "tags": {
      "functional": ["cta", "hero"],
      "style": ["minimal", "modern"],
      "layout": ["centered"],
      "industry": ["saas", "landing"]
    },
    "keywords": ["hero", "landing", "cta"],
    "fonts": ["Inter", "JetBrains Mono"],
    "dependencies": ["lucide-react", "tailwindcss"],
    "component_path": "src/components/hero-001.tsx",
    "status": "published",
    "created_at": "2024-01-15T10:30:00Z"
  },
  "similar_components": [
    {
      "id": "hero-002",
      "name": "Dark Hero Section",
      "category": "hero",
      "match_reason": "Similar layout and functionality"
    }
  ],
  "usage_hints": {
    "best_for": ["SaaS landing pages", "Product websites"],
    "not_recommended_for": ["Mobile apps", "Complex dashboards"]
  }
}
```

**에러 응답**:
```json
{
  "success": false,
  "error": {
    "code": "COMPONENT_NOT_FOUND",
    "message": "Component with ID 'hero-999' not found"
  },
  "recovery": {
    "suggestions": ["Try searching for 'hero' instead"],
    "similar_ids": ["hero-001", "hero-002", "hero-003"]
  }
}
```

### 3. 컴포넌트 코드 API

**엔드포인트**: `GET /api/v1/components/{id}/code`

**설명**: 특정 컴포넌트의 소스 코드를 조회합니다.

**경로 파라미터**:
- `id` (string, 필수): 컴포넌트 ID

**응답 형식 (성공)**:
```json
{
  "success": true,
  "component_id": "hero-001",
  "code": "import React from 'react';\nimport { Button } from '@/components/ui/button';\n\nexport function HeroSection() {\n  return (\n    <section className=\"py-20 px-4\">\n      <div className=\"max-w-4xl mx-auto text-center\">\n        <h1 className=\"text-5xl font-bold mb-6\">Welcome</h1>\n        <p className=\"text-xl mb-8\">Your amazing product description</p>\n        <Button>Get Started</Button>\n      </div>\n    </section>\n  );\n}",
  "code_info": {
    "line_count": 15,
    "has_client_directive": true,
    "exports": ["HeroSection"],
    "imports": [
      {
        "package": "react",
        "items": ["React"]
      },
      {
        "package": "@/components/ui/button",
        "items": ["Button"]
      }
    ]
  },
  "dependencies": {
    "npm": ["react", "@/components/ui/button"],
    "internal": ["@/lib/utils"]
  },
  "integration_guide": {
    "import_statement": "import { HeroSection } from '@/components/hero-001';",
    "basic_usage": "<HeroSection />"
  }
}
```

**에러 응답**:
```json
{
  "success": false,
  "error": {
    "code": "CODE_NOT_FOUND",
    "message": "Source code for component 'hero-999' not found"
  }
}
```

### 4. 카테고리 목록 API

**엔드포인트**: `GET /api/v1/categories`

**설명**: 사용 가능한 모든 카테고리 목록을 조회합니다.

**파라미터**: 없음

**응답 형식 (성공)**:
```json
{
  "success": true,
  "categories": [
    {
      "name": "hero",
      "count": 15,
      "description": "Hero sections and landing page headers"
    },
    {
      "name": "pricing",
      "count": 8,
      "description": "Pricing tables and payment components"
    },
    {
      "name": "features",
      "count": 12,
      "description": "Feature showcases and benefit sections"
    }
  ]
}
```

### 5. 통계 정보 API

**엔드포인트**: `GET /api/v1/stats`

**설명**: 레지스트리의 전체 통계 정보를 조회합니다.

**쿼리 파라미터**:
- `include_examples` (boolean, 선택): 예시 컴포넌트 ID 포함 여부 (기본값: true)

**응답 형식 (성공)**:
```json
{
  "success": true,
  "total_components": 120,
  "categories": [
    {
      "name": "hero",
      "count": 15,
      "description": "Hero sections and landing page headers",
      "examples": ["hero-001", "hero-002", "hero-003"]
    }
  ],
  "tags": {
    "functional": [
      { "tag": "cta", "count": 45 },
      { "tag": "hero", "count": 23 },
      { "tag": "pricing", "count": 18 }
    ],
    "style": [
      { "tag": "minimal", "count": 67 },
      { "tag": "modern", "count": 52 },
      { "tag": "dark-theme", "count": 34 }
    ],
    "layout": [
      { "tag": "centered", "count": 89 },
      { "tag": "grid", "count": 43 },
      { "tag": "full-width", "count": 28 }
    ],
    "industry": [
      { "tag": "saas", "count": 78 },
      { "tag": "ecommerce", "count": 32 },
      { "tag": "landing", "count": 56 }
    ]
  },
  "fonts_used": [
    { "tag": "Inter", "count": 89 },
    { "tag": "JetBrains Mono", "count": 45 },
    { "tag": "Poppins", "count": 23 }
  ],
  "query_tips": [
    "Use multiple keywords for better results",
    "Try category-specific searches like 'pricing minimal'",
    "Combine style tags: 'hero minimal dark-theme'"
  ]
}
```

## 공통 에러 코드

- `INTERNAL_ERROR`: 서버 내부 오류
- `COMPONENT_NOT_FOUND`: 컴포넌트를 찾을 수 없음
- `CODE_NOT_FOUND`: 컴포넌트 코드를 찾을 수 없음
- `EMPTY_RESULTS`: 검색 결과가 없음

## 사용 예시

### 기본 검색
```bash
GET /api/v1/components/search?query=hero&limit=5
```

### 카테고리 필터링
```bash
GET /api/v1/components/search?query=&category=pricing&style=minimal
```

### 컴포넌트 상세 조회
```bash
GET /api/v1/components/hero-001?include_similar=true
```

### 코드 조회
```bash
GET /api/v1/components/hero-001/code
```

### 통계 조회
```bash
GET /api/v1/stats?include_examples=false
```

## 참고 사항

- 모든 API는 JSON 형식으로 응답합니다.
- 성공 응답은 `success: true`를 포함합니다.
- 에러 응답은 `success: false`와 함께 `error` 객체를 포함합니다.
- 일부 API는 복구 정보를 포함한 `recovery` 객체를 제공합니다.
- 검색 API는 성능 최적화를 위해 결과 수를 제한할 수 있습니다.






