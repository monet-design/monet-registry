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
 * 비디오 설정
 */
const VIDEO = {
  youtubeId: "EiRnSjcVIqk",
  title: "Our formula for success",
} as const;

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

interface YcombinatorComVideo7Props {
  mode?: "light" | "dark";
}

export default function YcombinatorComVideo7({
  mode = "light",
}: YcombinatorComVideo7Props) {
  const colors = COLORS[mode];

  return (
    <section
      className="w-full px-4 py-16 sm:px-6 lg:px-8"
      style={{ backgroundColor: colors.beige }}
    >
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col items-center justify-center">
          <h2 className="mb-12 text-center text-3xl font-medium">
            <span>Our formula for </span>
            <span style={{ color: colors.accent }}>success</span>.
          </h2>
          <div className="w-full max-w-2xl">
            <div
              className="relative overflow-hidden rounded-sm"
              style={{ paddingBottom: "56.25%" }}
            >
              <iframe
                title={VIDEO.title}
                className="absolute left-0 top-0 h-full w-full"
                src={`https://www.youtube.com/embed/${VIDEO.youtubeId}`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
