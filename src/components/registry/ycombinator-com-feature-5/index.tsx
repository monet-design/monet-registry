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
  },
  dark: {
    accent: "#F26625",
  },
} as const;

/**
 * 특징 데이터
 */
const FEATURES = [
  "We help founders at their earliest stages regardless of their age.",
  "We improve the success rate of our startups.",
  "We give startups a huge fundraising advantage.",
  "Our companies have a track record of becoming billion dollar companies.",
];

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

interface YcombinatorComFeature5Props {
  mode?: "light" | "dark";
}

export default function YcombinatorComFeature5({
  mode = "light",
}: YcombinatorComFeature5Props) {
  const colors = COLORS[mode];

  return (
    <section className="bg-white px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto mb-12 max-w-xl text-center text-3xl font-medium">
          <span className="mr-2" style={{ color: colors.accent }}>We help founders</span>
          <span>make something people want and the results speak for themselves.</span>
        </div>
        <div className="mx-auto grid max-w-md grid-cols-1 gap-10 font-medium sm:grid-cols-2 md:max-w-full md:grid-cols-4">
          {FEATURES.map((feature, index) => (
            <div key={index} className="flex flex-col">
              <div
                className="mb-3 border-l-4 pl-4 text-lg"
                style={{ borderColor: colors.accent }}
              >
                {feature}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
