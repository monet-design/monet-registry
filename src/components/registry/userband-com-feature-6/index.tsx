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
    accent: "#d97706", // orange/yellow
    linkBg: "#fef3c7",
    linkText: "#92400e",
  },
  dark: {
    background: "#1f2937",
    cardBg: "#374151",
    heading: "#f9fafb",
    text: "#9ca3af",
    accent: "#fbbf24",
    linkBg: "#78350f",
    linkText: "#fef3c7",
  },
} as const;

const IMAGES = {} as const;

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { motion } from "motion/react";

interface UserbandComFeature6Props {
  mode?: "light" | "dark";
}

export default function UserbandComFeature6({
  mode = "light",
}: UserbandComFeature6Props) {
  const colors = COLORS[mode];

  return (
    <section
      className="relative w-full py-12"
      style={{ backgroundColor: colors.background }}
    >
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 items-center gap-8">
            {/* Left - UI Mock */}
            <motion.div
              className="flex justify-center w-full"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div
                className="relative w-full aspect-square rounded-2xl overflow-hidden border border-gray-200 p-6"
                style={{ backgroundColor: colors.cardBg }}
              >
                {/* Chat Interface */}
                <div className="space-y-6">
                  {/* User Message */}
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-gray-300 rounded-full shrink-0" />
                    <div>
                      <p className="font-medium text-sm mb-1" style={{ color: colors.heading }}>
                        김승현
                      </p>
                      <div className="bg-white rounded-lg p-3 shadow-sm inline-block">
                        <p className="text-sm" style={{ color: colors.heading }}>
                          팀 멤버 초대는 어떻게 하나요?
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* AI Response */}
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-gray-900 rounded-full shrink-0 flex items-center justify-center">
                      <span className="text-white font-bold text-sm italic">u</span>
                    </div>
                    <div className="flex-1">
                      <p className="font-medium text-sm mb-1" style={{ color: colors.heading }}>
                        Userband AI
                      </p>
                      <div className="bg-white rounded-lg p-4 shadow-sm">
                        <p className="text-sm leading-relaxed" style={{ color: colors.heading }}>
                          팀 설정 페이지에서 멤버를 초대할 수 있어요. 초대받은 멤버는 이메일을 통해 가입 후 바로 팀에 합류할 수 있습니다.
                        </p>
                        <p className="text-sm leading-relaxed mt-2" style={{ color: colors.heading }}>
                          필요하다면 권한을 &apos;관리자&apos;나 &apos;읽기 전용&apos;으로 지정할 수도 있어요.
                        </p>
                        <p className="text-sm mt-2" style={{ color: colors.text }}>
                          더 궁금한 점이 있으시다면 알려주세요.
                        </p>

                        {/* Related Links */}
                        <div className="mt-4 pt-4 border-t border-gray-100">
                          <div className="flex items-center gap-2 mb-2">
                            <span
                              className="text-xs px-2 py-1 rounded"
                              style={{ backgroundColor: colors.linkBg, color: colors.linkText }}
                            >
                              관련 문서
                            </span>
                          </div>
                          <div className="space-y-2">
                            <a href="#" className="flex items-center gap-1 text-sm" style={{ color: colors.text }}>
                              팀 멤버 초대하기
                              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                              </svg>
                            </a>
                            <a href="#" className="flex items-center gap-1 text-sm" style={{ color: colors.text }}>
                              멤버 권한 설정 가이드
                              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                              </svg>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
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
                문서
              </p>
              <h2
                className="text-3xl font-bold tracking-tight sm:text-4xl"
                style={{ color: colors.heading }}
              >
                지식 베이스 관리
              </h2>
              <p
                className="mt-6 text-lg leading-8"
                style={{ color: colors.text }}
              >
                서포트 에이전트가 문서를 참조해 답변을 생성해요. 답변에 참조할
                적절한 문서가 없는 경우 관리자에게 문서 업데이트를 제안합니다.
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
