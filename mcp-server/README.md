# Landing Components MCP Server

AI 코딩 에이전트(Claude Code, Cursor 등)를 위한 컴포넌트 Registry 검색 및 코드 조회 MCP Server

## 기능

5개의 MCP 도구 제공:

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

| 변수 | 설명 | 기본값 |
|------|------|--------|
| API_KEY | 인증용 API 키 | (설정 안하면 인증 비활성화) |
| PORT | 서버 포트 | 3001 |
| REGISTRY_PATH | registry.json 경로 | ../dist/registry.json |
| COMPONENTS_PATH | 컴포넌트 소스 경로 | ../src/components/registry |

## API 엔드포인트

- `POST /mcp` - MCP 프로토콜 엔드포인트
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

## Docker

### 빌드

```bash
docker build -t landing-components-mcp .
```

### 실행

```bash
docker run -p 3001:3001 \
  -e API_KEY=your-secret-key \
  -v $(pwd)/../dist:/app/data \
  -v $(pwd)/../src/components/registry:/app/components \
  landing-components-mcp
```

## 사용 예시

### 컴포넌트 검색

```
search_components({ query: "dark theme hero for SaaS" })
```

### 코드 조회

```
get_component_code({ component_id: "hero-1" })
```

### 상세 정보

```
get_component_details({ component_id: "stats-10", include_similar: true })
```
