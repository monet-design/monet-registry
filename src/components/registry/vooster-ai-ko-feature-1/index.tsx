"use client";

// ============================================================================
// CUSTOMIZATION
// ============================================================================

const COLORS = {
  light: {
    accent: "#F97316",
    accentHover: "#EA580C",
  },
  dark: {
    accent: "#FB923C",
    accentHover: "#F97316",
  },
} as const;

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { motion } from "motion/react";

interface VoosterAiKoFeature1Props {
  mode?: "light" | "dark";
}

const features = [
  {
    title: "상세한 PRD 작성",
    description: "몇 가지 질문에 답하면,\n최적 프롬프트를 적용한 PRD를 생성합니다.",
  },
  {
    title: "구현 계획 도출",
    description: "PRD를 개발 테스크로 자동 분해하고,\n우선순위를 설정합니다.",
  },
  {
    title: "구조화된 코드베이스 제공",
    description: "전문 개발자가 만든 템플릿으로\n체계적인 바이브코딩을 시작하세요.",
  },
];

export default function VoosterAiKoFeature1({
  mode = "light",
}: VoosterAiKoFeature1Props) {
  return (
    <section id="features" className="bg-gray-50 px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 flex flex-col items-center text-center"
        >
          <div className="max-w-3xl">
            <p className="mb-2 font-medium text-gray-600">솔루션</p>
            <h2 className="mb-4 text-4xl font-medium tracking-tight text-gray-950 md:text-5xl">
              <span>프로젝트 관리를 위한</span>
              <br />
              <span>AI 파트너, Vooster</span>
            </h2>
            <p className="text-lg font-light text-gray-600">
              <span>아이디어부터 실행까지, AI가 모든 단계를 함께합니다.</span>
              <br />
              <span>복잡한 프로세스 대신, 단순하고 효율적으로 부스트합니다.</span>
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3"
        >
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-lg border border-dashed border-gray-300 p-6 transition-all hover:border-orange-400/50 hover:shadow-lg"
            >
              {/* Grid Pattern Background */}
              <div className="pointer-events-none absolute -ml-20 -mt-2 left-1/2 top-0 h-full w-full [mask-image:linear-gradient(white,transparent)]">
                <div className="absolute inset-0 bg-gradient-to-r from-gray-100/5 to-gray-100/1 opacity-100 [mask-image:radial-gradient(farthest-side_at_top,white,transparent)]">
                  <svg
                    aria-hidden="true"
                    className="absolute inset-0 h-full w-full fill-gray-100/5 stroke-gray-200/25 mix-blend-overlay transition-all group-hover:fill-orange-100/25 group-hover:stroke-orange-400/55"
                  >
                    <defs>
                      <pattern
                        id={`grid-${index}`}
                        width="20"
                        height="20"
                        patternUnits="userSpaceOnUse"
                        x="-12"
                        y="4"
                      >
                        <path d="M.5 20V.5H20" fill="none" />
                      </pattern>
                    </defs>
                    <rect
                      width="100%"
                      height="100%"
                      strokeWidth="0"
                      fill={`url(#grid-${index})`}
                    />
                  </svg>
                </div>
              </div>

              <div className="h-6 w-6" />
              <h3 className="mt-4 text-xl font-semibold md:text-2xl">
                {feature.title}
              </h3>
              <p className="relative z-20 mt-4 whitespace-pre-line text-lg font-light tracking-tighter text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
