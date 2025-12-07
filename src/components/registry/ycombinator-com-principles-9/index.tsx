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
    beige: "#F5F1EB",
  },
  dark: {
    accent: "#F26625",
    beige: "#2D2A26",
  },
} as const;

/**
 * 원칙 목록
 */
const PRINCIPLES = [
  "We don't take a board seat.",
  "We don't demand 20% of your company.",
  "We don't take weeks/months to decide to invest.",
  "We don't charge fees.",
  "We don't require decks, business plans, or MBAs.",
  "We don't tell you what to do. We only offer advice.",
];

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

interface YcombinatorComPrinciples9Props {
  mode?: "light" | "dark";
}

export default function YcombinatorComPrinciples9({
  mode = "light",
}: YcombinatorComPrinciples9Props) {
  const colors = COLORS[mode];

  return (
    <section
      className="w-full px-4 py-16 sm:px-6 lg:px-8"
      style={{ backgroundColor: colors.beige }}
    >
      <div className="mx-auto max-w-7xl">
        <h2 className="text-center text-3xl font-medium">
          We put{" "}
          <span style={{ color: colors.accent }}>founders' interests </span>
          first.
        </h2>
        <div className="mx-auto my-10 grid max-w-lg gap-4 lg:max-w-4xl lg:grid-cols-2">
          {PRINCIPLES.map((principle, index) => (
            <div key={index} className="flex items-center">
              <span
                className="mr-2 inline-block h-2 w-2 rotate-45 rounded-sm"
                style={{ backgroundColor: colors.accent }}
              />
              {principle}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
