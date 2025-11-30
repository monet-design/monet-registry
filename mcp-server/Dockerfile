# 빌드 명령: docker build -f mcp-server/Dockerfile . (프로젝트 루트에서 실행)
FROM node:20-alpine AS builder

WORKDIR /app

# 패키지 파일 복사 및 설치
COPY mcp-server/package*.json ./
RUN npm ci

# 소스 복사 및 빌드
COPY mcp-server/tsconfig.json ./
COPY mcp-server/src ./src
RUN npm run build

# 프로덕션 이미지
FROM node:20-alpine

WORKDIR /app

# 프로덕션 의존성만 설치
COPY mcp-server/package*.json ./
RUN npm ci --only=production

# 빌드 결과 복사
COPY --from=builder /app/dist ./dist

# metadata.yaml 파일들 복사
COPY src/components/registry ./components/registry

# 환경 변수
ENV NODE_ENV=production
ENV PORT=3001
ENV REGISTRY_DIR=/app/components/registry
ENV COMPONENTS_PATH=/app/components/registry

EXPOSE 3001

# 헬스체크 (YAML 로딩으로 시작 시간 증가 대응)
HEALTHCHECK --interval=30s --timeout=10s --start-period=30s --retries=3 \
  CMD wget --no-verbose --tries=1 --spider http://localhost:3001/health || exit 1

CMD ["node", "dist/index.js"]
