"use client";

// ============================================================================
// CUSTOMIZATION - 이 섹션의 값들을 수정하여 프로젝트에 맞게 조정하세요
// ============================================================================

/**
 * 커스텀 색상 (브랜드 컬러)
 */
const COLORS = {
  light: {
    accent: "#F26625",
    accentHover: "#ee5d19",
    beige: "#F5F1EB",
  },
  dark: {
    accent: "#F26625",
    accentHover: "#ee5d19",
    beige: "#2D2A26",
  },
} as const;

/**
 * 이미지 에셋
 */
const IMAGES = {
  hero: {
    path: "/registry/ycombinator-com-hero-0/hero.webp",
    alt: "Garry Tan and Sam Altman at a YC dinner",
    prompt: `A professional photo of two tech founders having a conversation at a startup dinner event,
    warm lighting, modern tech environment, casual business attire`,
  },
} as const;

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

interface YcombinatorComHero0Props {
  mode?: "light" | "dark";
}

export default function YcombinatorComHero0({
  mode = "light",
}: YcombinatorComHero0Props) {
  const colors = COLORS[mode];

  return (
    <section className="relative w-full">
      {/* Hero Section */}
      <div className="relative bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="flex items-center">
            <div className="mx-auto md:mx-0 md:py-12">
              <h1 className="text-4xl font-semibold sm:text-5xl lg:text-6xl">
                <span style={{ color: colors.accent }}>Y Combinator</span>
              </h1>
              <p className="mt-5 max-w-xs text-2xl text-gray-900">
                Make something people want.
              </p>
              <a
                href="#"
                className="mt-5 inline-block rounded-lg px-8 py-2 text-xl font-semibold text-white transition-colors"
                style={{ backgroundColor: colors.accent }}
                onMouseOver={(e) => (e.currentTarget.style.backgroundColor = colors.accentHover)}
                onMouseOut={(e) => (e.currentTarget.style.backgroundColor = colors.accent)}
              >
                Apply to YC
              </a>
            </div>
            <div className="absolute bottom-0 right-0 top-0 z-0 hidden w-[45vw] md:block">
              <div className="absolute bottom-0 left-0 top-0 z-10 flex flex-col items-center justify-center">
                <div
                  className="mb-6 ml-[-70px] flex w-[170px] flex-col items-center justify-center rounded-2xl py-3 shadow-lg xl:ml-[-115px] xl:w-[230px] xl:py-9"
                  style={{ backgroundColor: colors.beige }}
                >
                  <div className="mb-1 text-3xl font-bold xl:text-4xl" style={{ color: colors.accent }}>
                    5,000
                  </div>
                  <div className="text-base">funded startups</div>
                </div>
                <div
                  className="ml-[-70px] flex w-[170px] flex-col items-center justify-center rounded-2xl py-3 shadow-lg xl:ml-[-115px] xl:w-[230px] xl:py-9"
                  style={{ backgroundColor: colors.beige }}
                >
                  <div className="mb-1 text-3xl font-bold xl:text-4xl" style={{ color: colors.accent }}>
                    $800B
                  </div>
                  <div className="text-base">combined valuation</div>
                </div>
              </div>
              <div className="h-full w-full overflow-hidden" style={{ backgroundColor: colors.beige }}>
                <img
                  src={IMAGES.hero.path}
                  alt={IMAGES.hero.alt}
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
