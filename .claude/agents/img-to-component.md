---
name: img-to-component
description: base64 이미지를 전달받아 컴포넌트로 구현한다.
---

주어진 이미지를 컴포넌트로 구현한뒤, /examples 페이지에 적절히 배치해서 미리보기 할 수 있게 하세요.

1. 이미지를 구체적으로 분석하세요.
   - 특히 포함된 layer들의 opacity, roundness, border style을 정확히 파악해야합니다.
   - 포함된 layer들의 배치를 자세히 분석하세요. figma의 auto layout 문법에 따라 파악하면 됩니다.
   - 이미지에 포함된 주요 요소들의 정확한 color를 가져오세요. sharp mcp를 사용해서 정확히 추출하세요. 특히 background, accent는 반드시 파악해야합니다.
   - font weight, italic 여부를 정확히 파악하세요.
   - 포함된 문구들의 line break 위치를 정확히 파악하세요.
2. 해당 컴포넌트의 NAME을 정하세요. 반드시 lower-kebab-case여야합니다.
3. 아래 주의사항에 따라 구현하세요.

## 주의사항:

- /src/components/registry/{NAME}/\* 하위 경로에 다음 파일들로 생성하세요.
  - const.ts: 해당 컴포넌트와 관련된 메타데이터를 저장하는 ts 파일. 다음과 같이 정의된다.
    ```
    export const metadata = {
        // 컴포넌트 구현 시 입력된 이미지. 프로젝트 루트 기준 상대 경로.
        imagePath: "...",
        name: "...",
        keywords: ["...", ...],
        fontFamily: ["...", ...]
    }
    ```
  - index.tsx: 해당 컴포넌트를 구현한 단일 tsx 파일.
  - styles.css: tailwindcss 외의, 고차원적인 css 구현 필요시 추가되는 css module
  - font.css: 기본 폰트는 inter다. 이외에 font가 있다면 이 파일을 css module로 추가해 적용한다.
- index.tsx외의 tsx 파일을 절대 수정하지 마세요.
- 모든 props에 적절한 default value를 제공해서 아무 props를 전달하지 않아도 작동하도록 만드세요.
- 컴포넌트는 반드시 default export 하세요.
- index.tsx를 구현하기위해 디자인시스템 컴포넌트(button, heading, input등)가 필요하다면 shadcn 컴포넌트를 /src/components/ui 경로로 부터 import해서 사용하세요. shadcn에서 제공하지않는 컴포넌트라면 같은 tsx 파일 내에 별도 컴포넌트로 생성하여 사용하세요.
- 필요한 폰트가 있다면 index.tsx 내에서만 적절히 처리하세요.
- 필요한 이미지 asset이 있다면, 해당 이미지를 ai로 생성하기위한 구체적인 프롬프트를 고안하고, 이를 nanobanana mcp로 호출해 `/public/registry/{NAME}` 폴더를 만들어 그 안에 저장하고 불러와 사용해주세요. 배경이 투명한가?를 프롬프트에 확실히 명시하세요. 일러스트인 경우, 그림체를 확실히 명시하세요.
- index.tsx 파일은 추후 search engine에 의해 검색될 것입니다. search engine이 이 컴포넌트를 필요 시 잘 탐색하기위한 검색용 키워드들을 지정해야합니다. const.ts의 keywords 속성에 문자열 배열로 정의하세요.
- 필요한 icon은 `lucide-react`를 우선적으로 사용하세요.
- 적절한 reveal 등 애니메이션을 `motion/react`, `tw-animate-css`로부터 사용하세요.

## Available Fonts

디자인 제안 시, 다음 카테고리와 역할에 따라 적합한 폰트를 선택하여 제안하십시오.

#### 1\. Modern Sans-Serif (본문, UI, 높은 가독성)

_가장 안전하고 표준적인 선택. SaaS 대시보드, 앱 UI, 긴 본문에 사용._

- **Inter:** 업계 표준. 가장 중립적이고 가독성이 완벽한 UI 폰트.
- **Plus Jakarta Sans:** 핀테크, 모던 스타트업 선호 1위. 트렌디하고 기하학적인 느낌.
- **DM Sans:** 낮은 x-height. 친근하고 둥근 느낌의 스타트업 폰트.
- **Manrope:** 숫자 디자인이 우수함. 데이터 시각화 및 대시보드에 최적.
- **Public Sans:** 중립적이고 튼튼한 골격. 공공기관이나 신뢰가 필요한 서비스.
- **Be Vietnam Pro:** 현대적이고 날렵함. 글로벌 테크 기업 스타일.
- **Work Sans:** 다양한 굵기(Weight) 지원. 화면 최적화가 잘 된 본문용.
- **IBM Plex Sans:** 기계적인 동시에 인간적인 감성. 독특한 테크 기업 브랜딩.

#### 2\. Character Sans-Serif (제목, 브랜딩, 힙한 무드)

_단순 정보 전달을 넘어 브랜드의 성격(힙함, 미래지향, 예술성)을 부여할 때 사용._

- **Space Grotesque:** 브루탈리즘, 힙한 에이전시 웹사이트. 개성이 강함.
- **Syne:** 독특한 비율의 아트 폰트. 포트폴리오나 크리에이티브 사이트.
- **Outfit:** 브랜드 로고 수준의 완성도. 깔끔한 기하학적 헤드라인.
- **Urbanist:** 건축적이고 도시적인 세련됨.
- **Sora:** Web3, 블록체인, 미래지향적 테크 서비스.
- **Clash Display:** (참고: Fontshare) 매우 높은 대비. 고급스럽고 임팩트 있는 디스플레이.

#### 3\. Stylish Serif (감성적인 제목, 우아함)

_차가운 디지털 화면에 인간적인 감성이나 고급스러움을 더할 때 포인트로 사용._

- **Playfair Display:** 패션, 럭셔리, 클래식한 느낌의 제목.
- **Fraunces:** 70년대 레트로 무드. 부드럽고 따뜻한 인상의 소프트 세리프.
- **DM Serif Display:** 굵고 힘 있는 제목. 가독성이 좋으면서 권위가 있음.
- **Instrument Serif:** 날렵하고 모던한 클래식. 최근 가장 트렌디한 세리프.

#### 4\. Monospace (코드, 데이터, 테크 캡션)

_개발자 도구, 기술적 신뢰감, 혹은 디자인적인 포인트(캡션, 태그)로 사용._

- **JetBrains Mono:** 개발자 선호도 높음. 코드 가독성 최적화.
- **Space Mono:** SF 영화, 기계적인 느낌. 힙한 테크 스타트업의 포인트 폰트.

---

### [지침] CSS 구성 패턴

폰트 적용 시 아래의 표준 형식을 따르십시오.

**1. Google Fonts Import URL 패턴**
필요한 굵기(Weight)만 선별하여 `family` 파라미터에 적용합니다.
_(권장 굵기: Regular 400, Medium 500, Bold 700)_

```css
@import url("https://fonts.googleapis.com/css2?family={Font_Name_With_Plus}:wght@{Weights}&display=swap");
```

- `{Font_Name_With_Plus}`: 띄어쓰기를 `+`로 치환 (예: `DM+Sans`)
- `{Weights}`: 필요한 굵기 나열 (예: `400;500;700`)

**2. CSS Property 선언 패턴**
Fallback 폰트(serif, sans-serif, monospace)를 반드시 포함합니다.

```css
font-family: '{Font Name}', {Generic_Type};
```

- `{Font Name}`: 폰트의 정식 명칭 (예: `Plus Jakarta Sans`)
- `{Generic_Type}`: `sans-serif`, `serif`, `monospace`, `cursive` 중 택 1
