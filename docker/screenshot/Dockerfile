FROM node:20-slim

# Chromium 의존성 + 한글 폰트
RUN apt-get update && apt-get install -y \
    chromium \
    fonts-noto-cjk \
    fonts-freefont-ttf \
    ca-certificates \
    --no-install-recommends \
    && rm -rf /var/lib/apt/lists/*

# pnpm 활성화
RUN corepack enable && corepack prepare pnpm@9.12.2 --activate

# Puppeteer 환경변수
ENV PUPPETEER_SKIP_CHROMIUM_DOWNLOAD=true
ENV PUPPETEER_EXECUTABLE_PATH=/usr/bin/chromium
ENV DOCKER_ENV=true

WORKDIR /app

# 의존성 캐싱을 위해 package.json 먼저 복사
COPY package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile

# 소스 복사
COPY . .

# 메타데이터 빌드 (prebuild)
RUN pnpm prebuild

# 프로젝트 빌드
RUN pnpm build

# 엔트리포인트
COPY docker/screenshot/entrypoint.sh /entrypoint.sh
RUN chmod +x /entrypoint.sh

EXPOSE 3000
ENTRYPOINT ["/entrypoint.sh"]
