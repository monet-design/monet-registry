# Landing Components Server

AI 코딩 에이전트 및 일반 클라이언트를 위한 컴포넌트 Registry 검색/코드 조회 서버

## 기능

**MCP Protocol** (AI 에이전트용) + **HTTP REST API** (일반 클라이언트용)

### MCP 도구 (5개)

- **search_components**: 자연어/구조화 쿼리로 컴포넌트 검색
- **get_component_code**: 컴포넌트 TSX 소스 코드 조회
- **get_component_details**: 컴포넌트 상세 메타데이터 조회
- **list_categories**: 카테고리 목록 및 통계
- **get_registry_stats**: Registry 전체 통계

## 설치

```bash
cd mcp-server
npm install
```

## 실행

### 개발 모드

```bash
npm run dev
```

### 프로덕션 빌드

```bash
npm run build
npm start
```

## 환경 변수

`.env.example`을 `.env`로 복사하고 설정:

```bash
cp .env.example .env
```

| 변수            | 설명               | 기본값                      |
| --------------- | ------------------ | --------------------------- |
| API_KEY         | 인증용 API 키      | (설정 안하면 인증 비활성화) |
| PORT            | 서버 포트          | 3001                        |
| REGISTRY_PATH   | registry.json 경로 | ../public/generated/registry.json |
| COMPONENTS_PATH | 컴포넌트 소스 경로 | ../src/components/registry  |

## 엔드포인트

### MCP Protocol

- `POST /mcp` - MCP 프로토콜 엔드포인트

### HTTP REST API

| Method | Endpoint                      | 설명          |
| ------ | ----------------------------- | ------------- |
| GET    | `/api/v1/components/search`   | 컴포넌트 검색 |
| GET    | `/api/v1/components/:id`      | 상세 정보     |
| GET    | `/api/v1/components/:id/code` | 소스 코드     |
| GET    | `/api/v1/categories`          | 카테고리 목록 |
| GET    | `/api/v1/stats`               | 통계 정보     |

### 기타

- `GET /health` - 헬스 체크

## 테스트

### Health Check

```bash
curl http://localhost:3001/health
```

### MCP Inspector

```bash
npx @modelcontextprotocol/inspector http://localhost:3001/mcp
```

## Claude Desktop 연동

`~/.claude.json`에 추가:

```json
{
  "mcpServers": {
    "landing-components": {
      "url": "http://localhost:3001/mcp",
      "headers": {
        "Authorization": "Bearer your-api-key"
      }
    }
  }
}
```

## Claude Code 연동

```shell
claude mcp add --transport http monet-mcp http://localhost:3001/mcp
```

## Docker

### 빌드

```bash
docker build -t landing-components-mcp .
```

### 실행

```bash
docker run -p 3001:3001 \
  -e API_KEY=your-secret-key \
  -v $(pwd)/../public/generated:/app/data \
  -v $(pwd)/../src/components/registry:/app/components \
  landing-components-mcp
```

## 사용 예시

### MCP 도구 (AI 에이전트용)

```typescript
// 컴포넌트 검색
search_components({ query: "dark theme hero for SaaS" });

// 코드 조회
get_component_code({ component_id: "hero-1" });

// 상세 정보
get_component_details({ component_id: "stats-10", include_similar: true });
```

### HTTP REST API

```bash
# 컴포넌트 검색
curl "http://localhost:3001/api/v1/components/search?query=hero%20dark%20theme&limit=5"

# 카테고리 필터 + 스타일 태그
curl "http://localhost:3001/api/v1/components/search?query=pricing&category=pricing&style=dark-theme,minimal"

# 컴포넌트 상세 정보
curl "http://localhost:3001/api/v1/components/hero-1"

# 컴포넌트 소스 코드
curl "http://localhost:3001/api/v1/components/hero-1/code"

# 카테고리 목록
curl "http://localhost:3001/api/v1/categories"

# 통계 정보
curl "http://localhost:3001/api/v1/stats"
```

### 검색 쿼리 파라미터

| 파라미터   | 설명                    | 예시                       |
| ---------- | ----------------------- | -------------------------- |
| query      | 검색어 (필수)           | `hero dark theme`          |
| category   | 카테고리 필터           | `hero`, `pricing`, `stats` |
| style      | 스타일 태그 (쉼표 구분) | `dark-theme,minimal`       |
| layout     | 레이아웃 태그           | `two-column,centered`      |
| functional | 기능 태그               | `carousel,tabs`            |
| industry   | 산업 태그               | `saas,fintech`             |
| limit      | 결과 수                 | `10` (기본값)              |
