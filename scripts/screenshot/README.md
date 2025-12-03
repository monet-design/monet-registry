# Screenshot Script

컴포넌트 레지스트리의 모든 컴포넌트 스크린샷을 자동으로 촬영하는 Puppeteer 기반 스크립트입니다.

## 요구사항

- Node.js 18+
- pnpm
- 로컬 dev 서버 실행 중 (`pnpm dev`)

## 사용법

### 기본 사용 (증분 모드)

이미 촬영된 컴포넌트는 건너뛰고, 새로운 컴포넌트만 촬영합니다.

```bash
# dev 서버 먼저 실행 (별도 터미널)
pnpm dev

# 스크린샷 촬영
pnpm screenshot:capture
```

### 전체 다시 촬영

상태 파일을 무시하고 모든 컴포넌트를 다시 촬영합니다.

```bash
pnpm screenshot:all
# 또는
pnpm screenshot:capture --all
```

### 특정 컴포넌트만 촬영

```bash
pnpm screenshot:capture --component=hero-9
pnpm screenshot:capture --component=hero-9 --all  # 이미 촬영했어도 다시 촬영
```

### 동시 실행 탭 개수 조정

기본값은 20개입니다.

```bash
pnpm screenshot:capture --concurrency=10
```

## CLI 옵션

| 옵션 | 설명 | 기본값 |
|------|------|--------|
| `--all` | 상태 무시하고 전체 다시 촬영 | `false` |
| `--concurrency=N` | 동시 실행 탭 개수 | `20` |
| `--component=ID` | 특정 컴포넌트만 촬영 | - |

## 설정

`browser.ts`의 `CONFIG` 객체에서 설정을 변경할 수 있습니다.

```typescript
export const CONFIG = {
  TAB_COUNT: 20,              // 기본 탭 개수
  BASE_URL: 'http://localhost:3000',
  WAIT_TIME: 10000,           // 애니메이션 대기 시간 (ms)
  VIEWPORT: { width: 1280, height: 720 },
} as const;
```

## 파일 구조

```
scripts/screenshot/
├── cli.ts              # 메인 CLI 진입점
├── queue.ts            # FIFO 큐 구현
├── browser.ts          # Puppeteer 브라우저/탭 관리
├── screenshot.ts       # 스크린샷 촬영 로직
├── state.ts            # 상태 관리
├── screenshot-state.json  # 촬영 상태 (자동 생성)
└── README.md           # 이 문서
```

## 출력

- **스크린샷 저장 경로**: `public/registry/preview/[component-id].png`
- **상태 파일**: `scripts/screenshot/screenshot-state.json`

### 상태 파일 형식

```json
{
  "completed": {
    "hero-9": {
      "path": "/absolute/path/to/public/registry/preview/hero-9.png",
      "capturedAt": "2025-12-03T14:32:27.736Z"
    }
  }
}
```

## 동작 방식

1. `public/generated/registry.json`에서 컴포넌트 목록 로드
2. `screenshot-state.json`에서 이미 촬영된 목록 확인
3. 미촬영 컴포넌트만 FIFO 큐에 추가
4. Puppeteer 브라우저 시작 (visible 모드)
5. 지정된 개수의 탭 생성
6. 각 탭에서:
   - 탭 활성화 (`bringToFront`)
   - 컴포넌트 페이지 이동
   - 스크롤/마우스 이동으로 애니메이션 트리거
   - 10초 대기
   - 스크린샷 촬영
7. 완료 시 상태 파일 업데이트
8. 모든 작업 완료 후 브라우저 종료

## 애니메이션 트리거

framer-motion 등의 애니메이션이 제대로 실행되도록 다음 조치를 수행합니다:

- `prefers-reduced-motion: no-preference` 설정
- 페이지 로드 후 스크롤 (whileInView 트리거)
- 마우스 이동 (hover 애니메이션 트리거)
- 탭 활성화 (`bringToFront`)

## 에러 처리

- 실패한 컴포넌트는 건너뛰고 로그에 기록
- 실행 완료 시 실패 목록 출력
- 상태 파일에는 성공한 컴포넌트만 기록

## 문제 해결

### 애니메이션이 실행되지 않음

- `headless: false`로 설정되어 있는지 확인
- `WAIT_TIME`을 늘려보기
- dev 서버가 정상 실행 중인지 확인

### 스크린샷이 비어있음

- 해당 컴포넌트 페이지가 정상 로드되는지 브라우저에서 직접 확인
- 네트워크 오류 여부 확인

### 메모리 부족

- `--concurrency` 값을 낮춰서 실행
