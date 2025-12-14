"use client";

// ============================================================================
// CUSTOMIZATION
// ============================================================================

const COLORS = {
  light: {
    background: "#f5f5f0",
    cardBg: "#e8e4de",
    heading: "#111827",
    text: "#6b7280",
    accent: "#db2777", // pink
    buttonBg: "#111827",
    buttonText: "#ffffff",
  },
  dark: {
    background: "#1f2937",
    cardBg: "#374151",
    heading: "#f9fafb",
    text: "#9ca3af",
    accent: "#f472b6",
    buttonBg: "#f9fafb",
    buttonText: "#111827",
  },
} as const;

const IMAGES = {} as const;

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { motion } from "motion/react";

interface UserbandComFeature4Props {
  mode?: "light" | "dark";
}

export default function UserbandComFeature4({
  mode = "light",
}: UserbandComFeature4Props) {
  const colors = COLORS[mode];

  return (
    <section
      className="relative w-full py-12"
      style={{ backgroundColor: colors.background }}
    >
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 items-center gap-8">
            {/* Left - Image/UI Mock */}
            <motion.div
              className="flex justify-center w-full"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div
                className="relative w-full aspect-square rounded-2xl overflow-hidden border border-gray-200 p-8"
                style={{ backgroundColor: colors.cardBg }}
              >
                {/* User Message */}
                <div className="flex items-start gap-3 mb-6">
                  <div className="w-10 h-10 bg-gray-300 rounded-full shrink-0" />
                  <div>
                    <p className="font-medium text-sm" style={{ color: colors.heading }}>
                      김승현
                    </p>
                    <div className="mt-2 bg-white rounded-lg p-3 shadow-sm">
                      <p className="text-sm" style={{ color: colors.heading }}>
                        로그인이 자꾸 풀립니다.
                      </p>
                      <p className="text-sm mt-1" style={{ color: colors.text }}>
                        하루에도 몇번씩 다시 로그인을 해야해요...
                      </p>
                    </div>
                  </div>
                </div>

                {/* AI Suggestion Card */}
                <div className="bg-white rounded-xl p-6 shadow-lg">
                  <div className="flex items-center gap-2 mb-4">
                    <span style={{ color: colors.accent }}>*</span>
                    <p className="font-medium" style={{ color: colors.accent }}>
                      새 피드백을 생성할까요?
                    </p>
                  </div>
                  <p className="text-sm mb-2" style={{ color: colors.text }}>
                    새롭게 들어온 피드백이에요.
                  </p>
                  <p className="text-sm mb-4" style={{ color: colors.text }}>
                    관련 피드백을 생성하는 걸 추천드려요.
                  </p>

                  {/* Suggestion Input */}
                  <div className="flex items-center gap-2 p-3 bg-gray-50 rounded-lg mb-4">
                    <svg
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke={colors.text}
                    >
                      <circle cx="12" cy="12" r="10" strokeWidth={2} />
                      <path d="M12 6v6l4 2" strokeWidth={2} strokeLinecap="round" />
                    </svg>
                    <span className="text-sm" style={{ color: colors.heading }}>
                      로그인 세션 유지
                    </span>
                  </div>

                  <button
                    className="w-full py-2 px-4 rounded-lg text-sm font-medium transition-colors"
                    style={{
                      backgroundColor: colors.buttonBg,
                      color: colors.buttonText,
                    }}
                  >
                    생성하기
                  </button>
                </div>

                {/* Pagination Dots */}
                <div className="flex justify-center gap-2 mt-6">
                  <div className="w-8 h-2 bg-gray-400 rounded-full" />
                  <div className="w-2 h-2 bg-gray-300 rounded-full" />
                </div>
              </div>
            </motion.div>

            {/* Right - Content */}
            <motion.div
              className="w-full lg:px-16 py-4"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <p
                className="text-sm font-bold mb-3"
                style={{ color: colors.accent }}
              >
                피드백
              </p>
              <h2
                className="text-3xl font-bold tracking-tight sm:text-4xl"
                style={{ color: colors.heading }}
              >
                자동 피드백 관리
              </h2>
              <p
                className="mt-6 text-lg leading-8"
                style={{ color: colors.text }}
              >
                서포트 에이전트가 유저와의 대화에서 피드백을 수집하고
                분류합니다. 모든 인사이트를 자동으로 데이터화하세요.
              </p>
              <div className="mt-6">
                <a
                  href="#"
                  className="inline-flex items-center gap-1 transition-colors"
                  style={{ color: colors.text }}
                >
                  <span>더 알아보기</span>
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
