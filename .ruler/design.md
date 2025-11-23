## 규칙 1. “좁고 깊게” – 1200px 중심 레이아웃

**설명**
Hyprnote / Deepcon 둘 다 공통적으로, 화면 전체를 다 쓰지 않고 `~1100–1200px` 정도의 **좁은 중앙 레이아웃**을 유지해요. 양옆에 여백을 많이 두면, 콘텐츠가 적어도 고급스럽고 안정된 느낌이 납니다. ([hyprnote.com][1])

**스타일 코드 구현**

```tsx
// 예: 메인 레이아웃 컨테이너
export function PageContainer({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-50">
      <div className="mx-auto flex min-h-screen max-w-6xl flex-col px-4 sm:px-6 lg:px-8">
        {children}
      </div>
    </div>
  );
}
```

---

## 규칙 2. 2단 히어로 – 왼쪽 카피 / 오른쪽 비주얼

**설명**
Deepcon, Hyprnote 둘 다 상단 히어로에서 **왼쪽에 텍스트(헤드라인, 서브카피, CTA)**, **오른쪽에 제품 UI/그래프/코드 샘플**을 배치하는 2단 구성입니다. 데스크톱에서는 좌우, 모바일에서는 상하로 스택되게 합니다. ([hyprnote.com][1])

**스타일 코드 구현**

```tsx
export function HeroSection() {
  return (
    <section className="flex flex-col gap-10 py-16 md:flex-row md:items-center md:py-24">
      {/* Left: copy */}
      <div className="flex-1 space-y-6">
        <div className="inline-flex items-center gap-2 rounded-full border border-slate-800 bg-slate-900/60 px-3 py-1 text-xs font-medium text-slate-300">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
          Backed by YC • Privacy-first AI
        </div>

        <h1 className="text-balance text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
          The AI notepad for
          <span className="block bg-gradient-to-r from-emerald-300 via-cyan-300 to-sky-400 bg-clip-text text-transparent">
            private meetings
          </span>
        </h1>

        <p className="max-w-xl text-balance text-sm text-slate-300 sm:text-base">
          Summarize every call locally on your device, with zero data leaving
          your machine.
        </p>

        <div className="flex flex-wrap items-center gap-3">
          <button className="rounded-full bg-emerald-400 px-5 py-2.5 text-sm font-semibold text-slate-950 shadow-lg shadow-emerald-500/40 hover:bg-emerald-300">
            Get started
          </button>
          <button className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-medium text-slate-200 hover:border-slate-500 hover:bg-slate-900/60">
            Join waitlist
          </button>
        </div>
      </div>

      {/* Right: mock UI / image */}
      <div className="flex-1">
        <div className="relative">
          <div className="absolute inset-0 -z-10 blur-3xl">
            <div className="h-full w-full bg-[radial-gradient(circle_at_top,_rgba(34,197,235,0.25),_transparent_60%),_radial-gradient(circle_at_bottom,_rgba(16,185,129,0.2),_transparent_55%)]" />
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-4 shadow-2xl shadow-emerald-500/20 backdrop-blur-xl">
            {/* 여기 안에는 제품 UI / 코드 / 그래프 등 원하는 컴포넌트 넣기 */}
            <div className="h-64 rounded-xl border border-slate-800 bg-gradient-to-br from-slate-900 via-slate-900 to-slate-950" />
          </div>
        </div>
      </div>
    </section>
  );
}
```

---

## 규칙 3. “소프트 다크” 팔레트 + 네온 포인트

**설명**
세 사이트 모두 완전한 블랙보다는 **짙은 네이비/차콜** 배경에, 민트/하늘/보라 계열 네온 포인트 컬러를 섞어요. 카드/섹션은 배경보다 살짝 밝은 톤에, 테두리와 글로우로 레이어를 나눕니다. Hyprnote의 로컬-프라이버시 느낌, Deepcon의 기술/성능 느낌이 모두 이 조합에서 나와요. ([hyprnote.com][1])

**스타일 코드 구현 – Tailwind 설정 예시**

```ts
// tailwind.config.ts
export default {
  theme: {
    extend: {
      colors: {
        app: {
          // backgrounds
          body: "#020617", // slate-950 느낌
          surface: "#020617", // base
          card: "#020617",
          cardSoft: "#020617", // 필요시 더 밝게

          // accents
          primary: "#22c55e", // emerald-400
          primarySoft: "#4ade80",
          secondary: "#38bdf8", // sky-400
          accent: "#a855f7", // purple-500

          // text
          textMain: "#e5e7eb",
          textMuted: "#9ca3af",
          border: "#1f2937",
        },
      },
      boxShadow: {
        "glow-primary": "0 0 40px rgba(56, 189, 248, 0.35)",
        "glow-emerald": "0 0 40px rgba(16, 185, 129, 0.35)",
      },
      borderRadius: {
        "2xl": "1.25rem",
        "3xl": "1.75rem",
      },
    },
  },
};
```

---

## 규칙 4. 타이포그래피 스케일 – 숫자/지표를 과장해서 보여주기

**설명**
Deepcon은 “90% / 5000+ Developers” 같은 숫자 지표를 크게 보여주고, 설명은 아주 작은 텍스트로 깔아 놓습니다. 숫자 자체가 브랜드의 자신감이기 때문에, **숫자는 크고 굵게, 캡션은 작고 옅게** 배치하세요. ([deepcon.ai][2])

**스타일 코드 구현**

```tsx
export function MetricsRow() {
  const items = [
    { label: "Context accuracy", value: "90%" },
    { label: "Developers", value: "5,000+" },
    { label: "Context queries / month", value: "1M+" },
  ];

  return (
    <section className="border-y border-slate-800 py-10">
      <div className="grid gap-8 sm:grid-cols-3">
        {items.map((item) => (
          <div key={item.label} className="space-y-1">
            <div className="text-3xl font-semibold tracking-tight text-slate-50 sm:text-4xl">
              {item.value}
            </div>
            <div className="text-xs font-medium uppercase tracking-[0.15em] text-slate-400">
              {item.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
```

---

## 규칙 5. 로고 스트립 – 신뢰도 섹션은 로고만 심플하게

**설명**
“Trusted by engineers at …” 섹션에서 Hyprnote/Deepcon 둘 다 회사 로고만 얌전히 나열합니다. 컬러를 줄이기 위해 대부분 **그레이스케일 + 낮은 불투명도**로 처리하고, 위/아래 마진을 넉넉히 줍니다. ([hyprnote.com][1])

**스타일 코드 구현**

```tsx
export function LogoStrip() {
  const logos = [
    "Anthropic",
    "AWS",
    "Google",
    "Microsoft",
    "Vercel",
    // ...
  ];

  return (
    <section className="py-10">
      <p className="text-center text-xs font-medium uppercase tracking-[0.18em] text-slate-400">
        TRUSTED BY ENGINEERS AT
      </p>
      <div className="mt-6 flex flex-wrap items-center justify-center gap-x-10 gap-y-4 opacity-70">
        {logos.map((name) => (
          <div
            key={name}
            className="text-sm font-medium text-slate-500 grayscale transition hover:grayscale-0"
          >
            {name}
            {/* 실서비스에선 실제 로고 SVG를 여기에 배치 */}
          </div>
        ))}
      </div>
    </section>
  );
}
```

---

## 규칙 6. “글래스 카드” – 살짝 투명한 카드 + 섬세한 보더

**설명**
(특히 AI SaaS 랜딩에서 흔한 패턴) 메인 콘텐츠를 **투명한 글래스 카드** 안에 넣어요.
배경보다 5~10% 밝은 색 + `backdrop-blur` + `1px` 보더 + 소프트 그림자 조합입니다.

**스타일 코드 구현**

```tsx
export function GlassCard({ children }: { children: React.ReactNode }) {
  return (
    <div className="rounded-2xl border border-slate-800/80 bg-slate-900/60 p-6 shadow-lg shadow-black/40 backdrop-blur-xl">
      {children}
    </div>
  );
}
```

사용 예:

```tsx
<section className="grid gap-6 md:grid-cols-3">
  <GlassCard>
    <h3 className="text-sm font-semibold text-slate-50">Private</h3>
    <p className="mt-2 text-xs text-slate-300">
      Your notes stay local by default. Sync only when you choose.
    </p>
  </GlassCard>
  {/* ... */}
</section>
```

---

## 규칙 7. Badges & Pill Buttons – 라운드 9999px

**설명**
히어로 상단의 “Backed by YC”, “New”, “Introducing Benchmark” 등은 **완전한 pill shape**(커다란 border-radius)와 작은 텍스트로 셋업됩니다. 버튼도 마찬가지로 pill 모양이 많습니다. ([hyprnote.com][1])

**스타일 코드 구현**

```tsx
// 배지
function PillBadge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-slate-800 bg-slate-900/70 px-3 py-1 text-[11px] font-medium text-slate-300">
      <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
      {children}
    </span>
  );
}

// 프라이머리 / 세컨더리 버튼
const buttonBase =
  "inline-flex items-center justify-center rounded-full text-sm font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400/70 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950";

export function PrimaryButton(
  props: React.ButtonHTMLAttributes<HTMLButtonElement>
) {
  return (
    <button
      {...props}
      className={`${buttonBase} bg-emerald-400 px-5 py-2.5 text-slate-950 shadow-glow-emerald hover:bg-emerald-300`}
    />
  );
}

export function GhostButton(
  props: React.ButtonHTMLAttributes<HTMLButtonElement>
) {
  return (
    <button
      {...props}
      className={`${buttonBase} border border-slate-700 bg-slate-900/40 px-5 py-2.5 text-slate-200 hover:border-slate-500 hover:bg-slate-900/70`}
    />
  );
}
```

---

## 규칙 8. 섹션 구분 – “공기층” + 보더 한 줄

**설명**
각 섹션 사이에는 **큰 상/하 패딩**과 함께, 경우에 따라 `border-y`를 사용해서 부드럽게 분리합니다. 색 대비를 크게 주지 않고, 그냥 살짝 어두운 선 하나만 그어도 충분합니다. Deepcon의 메트릭 섹션이 딱 이 패턴. ([deepcon.ai][2])

**스타일 코드 구현**

```tsx
export function Section({ children }: { children: React.ReactNode }) {
  return (
    <section className="border-t border-slate-800 py-16 first:border-none first:pt-10">
      {children}
    </section>
  );
}
```

사용 예:

```tsx
<Section>
  <HeroSection />
</Section>

<Section>
  <LogoStrip />
</Section>

<Section>
  {/* Features grid */}
</Section>
```

---

## 규칙 9. 3열 Feature Grid – 아이콘/타이틀/설명 구조

**설명**
Hyprnote의 “Private / Effortless / Flexible”, Deepcon의 “Multi-Source Intelligence / Token-Optimized Delivery …” 등은 **아이콘/타이틀/설명**으로 이루어진 3열 그리드입니다. 텍스트는 짧게, 설명은 3줄 이내로 제약하는 게 핵심. ([hyprnote.com][1])

**스타일 코드 구현**

```tsx
const features = [
  {
    title: "Private",
    description:
      "Your notes stay local by default. Sync to cloud only when you choose.",
  },
  {
    title: "Effortless",
    description: "Simple, distraction-free notepad that just works, instantly.",
  },
  {
    title: "Flexible",
    description: "Use any STT or LLM, local or cloud—no vendor lock-in.",
  },
];

export function FeatureGrid() {
  return (
    <section className="py-16">
      <div className="grid gap-8 md:grid-cols-3">
        {features.map((f) => (
          <div key={f.title} className="space-y-3">
            <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-slate-900/80 ring-1 ring-slate-700/80">
              {/* 여기에 아이콘 SVG 삽입 */}
              <span className="h-2 w-2 rounded-full bg-emerald-400" />
            </div>
            <h3 className="text-sm font-semibold text-slate-50">{f.title}</h3>
            <p className="text-xs leading-relaxed text-slate-300">
              {f.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
```

---

## 규칙 10. 배경 Glow & Radial Gradient로 “AI 느낌” 추가

**설명**
세 사이트 모두 배경에 **은은한 그라디언트/Glow**를 넣어서 “AI/미래지향” 느낌을 줍니다. 강하게 깔지 않고, `absolute` 레이어로 살짝 비치는 정도로만.

**스타일 코드 구현**

```tsx
// 페이지 최상단이나 hero root에 깔기
export function PageBackground({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative min-h-screen overflow-hidden bg-slate-950 text-slate-50">
      {/* Glow layer */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-40 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-emerald-500/20 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-72 w-72 -translate-x-1/2 translate-y-1/3 rounded-full bg-sky-500/25 blur-3xl" />
      </div>

      {children}
    </div>
  );
}
```

---

## 규칙 11. 긴 텍스트는 “읽기 카드” 안에 넣기

**설명**
Hyprnote의 testimonial, Deepcon의 벤치마크 설명처럼 긴 문장은 **넓은 폭 전체에 풀로 깔지 않고, 카드/박스 안에 넣어** 폭과 길이를 한 번 더 압축합니다. 이렇게 하면 긴 텍스트도 “문서”가 아니라 “컴포넌트”처럼 보입니다. ([hyprnote.com][1])

**스타일 코드 구현**

```tsx
export function LongTextBlock({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="py-12">
      <div className="rounded-2xl border border-slate-800 bg-slate-950/70 p-6 sm:p-8">
        <h2 className="text-sm font-semibold text-slate-50">{title}</h2>
        <div className="mt-4 space-y-3 text-sm leading-relaxed text-slate-300">
          {children}
        </div>
      </div>
    </section>
  );
}
```

사용 예:

```tsx
<LongTextBlock title="How it works">
  <p>While you take notes, Hyprnote listens and keeps track of everything...</p>
  <p>After the meeting is over, we combine your notes with transcripts...</p>
</LongTextBlock>
```

---

## 규칙 12. 푸터는 가볍게 – 작은 폰트, 낮은 대비

**설명**
Deepcon 푸터는 본문 대비 폰트 크기를 줄이고, 색도 더 옅게, 레이아웃은 좌측 로고 / 우측 링크 세트 정도로 단순합니다. 이 패턴을 그대로 따라가면 “끝났음” 느낌이 깔끔하게 납니다. ([deepcon.ai][2])

**스타일 코드 구현**

```tsx
export function SiteFooter() {
  return (
    <footer className="mt-16 border-t border-slate-800 py-8 text-xs text-slate-500">
      <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
        <div className="flex items-center gap-2">
          {/* 로고 자리 */}
          <div className="h-5 w-5 rounded-md bg-slate-700" />
          <span className="font-semibold text-slate-300">YourProduct</span>
        </div>

        <div className="flex flex-wrap items-center gap-5">
          <a href="#" className="hover:text-slate-300">
            Docs
          </a>
          <a href="#" className="hover:text-slate-300">
            Pricing
          </a>
          <a href="#" className="hover:text-slate-300">
            Terms
          </a>
          <a href="#" className="hover:text-slate-300">
            Privacy
          </a>
        </div>
      </div>
      <p className="mt-4 text-[11px] text-slate-500">
        © {new Date().getFullYear()} YourCompany. All rights reserved.
      </p>
    </footer>
  );
}
```

---

## 어떻게 쓰면 좋을지 요약

1. **레이아웃 규칙(1, 2, 8)**: 페이지 기본 skeleton을 먼저 잡고
2. **컬러/타이포 규칙(3, 4)**: Tailwind config에 색과 폰트 스케일을 정의한 뒤
3. **컴포넌트 규칙(5, 6, 7, 9, 11, 12)**: 카드 / 배지 / 버튼 / grid / 푸터를 공통 컴포넌트로 뽑고
4. **배경 연출(10)**: 맨 마지막에 Glow/Gradient를 깔아서 “AI SaaS 느낌”을 더해주면,

지금 링크 주신 랜딩페이지 계열과 거의 같은 톤의 UI를 빠르게 조립할 수 있을 거예요.
