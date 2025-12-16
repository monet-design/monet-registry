"use client";

// ============================================================================
// CUSTOMIZATION
// ============================================================================

const CONTENT = {
  title: "고객 관리를 위한 다양한 기능",
  description:
    "고객 관리를 위한 다양한 기능을 한 곳에.\n연락처 관리, 영업 관리, 일정, 메시지, 리포트까지 모두 손쉽게 해결하세요.",
  features: [
    {
      title: "한눈에 보는 영업기회",
      description:
        "단계별로 영업 기회를 관리하고, 드래그 앤 드롭으로 손쉽게 이동하세요. 누적 금액, 전환율 등 핵심 지표까지 함께 확인할 수 있습니다.",
      bullets: [
        "멀티 파이프라인",
        "단계별 시간 추적",
        "전환율 및 매출 예측",
        "맞춤형 단계 설정",
      ],
      imagePosition: "left",
      image: "/scraped/trackit-so-2025-12-15/images/image-31.png",
    },
    {
      title: "고객과의 모든 이력을 타임라인으로",
      description:
        "이메일, 미팅, 전화, 메모, 할 일 등 고객과의 모든 상호작용을 시간 순으로 자동 정리해 드립니다. 언제, 누가, 어떤 대화를 했는지 한눈에 파악하고 담당자가 바뀌어도 끊기지 않는 영업 관리가 가능합니다.",
      bullets: [
        "고객 정보 통합(Single Source of Truth)",
        "이메일, 미팅 등 주요 이력 연동",
        "시간 순 정렬로 흐름 파악",
        "담당자 변경에도 기록 유지",
      ],
      imagePosition: "right",
      image: "/scraped/trackit-so-2025-12-15/images/image-32.png",
    },
  ],
} as const;

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { motion } from "motion/react";

interface TrackitSoFeature3Props {
  mode?: "light" | "dark";
}

export default function TrackitSoFeature3({
  mode = "light",
}: TrackitSoFeature3Props) {
  const isDark = mode === "dark";

  return (
    <section className={`w-full py-20 ${isDark ? "bg-gray-950" : "bg-white"}`}>
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2
            className={`text-3xl md:text-4xl font-bold mb-4 ${
              isDark ? "text-white" : "text-gray-900"
            }`}
          >
            {CONTENT.title}
          </h2>
          <p
            className={`text-lg whitespace-pre-line max-w-3xl mx-auto ${
              isDark ? "text-gray-400" : "text-gray-600"
            }`}
          >
            {CONTENT.description}
          </p>
        </motion.div>

        {/* Features */}
        <div className="space-y-24">
          {CONTENT.features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className={`flex flex-col ${
                feature.imagePosition === "right"
                  ? "lg:flex-row-reverse"
                  : "lg:flex-row"
              } gap-12 items-center`}
            >
              {/* Image */}
              <div className="flex-1 w-full">
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="w-full rounded-2xl shadow-xl"
                />
              </div>

              {/* Content */}
              <div className="flex-1 space-y-6">
                <h3
                  className={`text-2xl md:text-3xl font-bold ${
                    isDark ? "text-white" : "text-gray-900"
                  }`}
                >
                  {feature.title}
                </h3>
                <p
                  className={`text-base md:text-lg leading-relaxed ${
                    isDark ? "text-gray-400" : "text-gray-600"
                  }`}
                >
                  {feature.description}
                </p>
                <ul className="space-y-3">
                  {feature.bullets.map((bullet, bulletIndex) => (
                    <li
                      key={bulletIndex}
                      className={`flex items-center gap-3 ${
                        isDark ? "text-gray-300" : "text-gray-700"
                      }`}
                    >
                      <span
                        className={`w-5 h-5 rounded-full flex items-center justify-center text-xs ${
                          isDark
                            ? "bg-green-900 text-green-400"
                            : "bg-green-100 text-green-600"
                        }`}
                      >
                        ✓
                      </span>
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
