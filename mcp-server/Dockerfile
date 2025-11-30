FROM node:20-alpine AS builder

WORKDIR /app

# 패키지 파일 복사 및 설치
COPY package*.json ./
RUN npm ci

# 소스 복사 및 빌드
COPY tsconfig.json ./
COPY src ./src
RUN npm run build

# 프로덕션 이미지
FROM node:20-alpine

WORKDIR /app

# 프로덕션 의존성만 설치
COPY package*.json ./
RUN npm ci --only=production

# 빌드 결과 복사
COPY --from=builder /app/dist ./dist

# 데이터 디렉토리 생성
RUN mkdir -p /app/data /app/components

# 환경 변수
ENV NODE_ENV=production
ENV PORT=3001
ENV REGISTRY_PATH=/app/data/registry.json
ENV CATEGORY_INDEX_PATH=/app/data/category-index.json
ENV TAG_INDEX_PATH=/app/data/tag-index.json
ENV COMPONENTS_PATH=/app/components

EXPOSE 3001

# 헬스체크
HEALTHCHECK --interval=30s --timeout=10s --start-period=5s --retries=3 \
  CMD wget --no-verbose --tries=1 --spider http://localhost:3001/health || exit 1

CMD ["node", "dist/index.js"]
