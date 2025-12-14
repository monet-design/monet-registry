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
    accent: "#059669", // green
    badgeBg: "#fef3c7",
    badgeText: "#92400e",
  },
  dark: {
    background: "#1f2937",
    cardBg: "#374151",
    heading: "#f9fafb",
    text: "#9ca3af",
    accent: "#34d399",
    badgeBg: "#78350f",
    badgeText: "#fef3c7",
  },
} as const;

const IMAGES = {} as const;

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { motion } from "motion/react";

interface UserbandComFeature5Props {
  mode?: "light" | "dark";
}

export default function UserbandComFeature5({
  mode = "light",
}: UserbandComFeature5Props) {
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
                className="relative w-full aspect-square rounded-2xl overflow-hidden border border-gray-200"
                style={{ backgroundColor: colors.cardBg }}
              >
                {/* Dashboard Mock */}
                <div className="absolute inset-4 bg-white rounded-xl shadow-lg overflow-hidden">
                  {/* Sidebar */}
                  <div className="absolute left-0 top-0 bottom-0 w-48 bg-gray-50 border-r border-gray-200 p-4">
                    <p className="text-sm font-medium mb-4" style={{ color: colors.heading }}>
                      userband
                    </p>
                    <div className="space-y-2">
                      {["Get started", "Analytics", "Contacts", "Profile", "Preferences", "Notifications", "Portal", "Getting", "Journal", "Language", "Feedback", "About feedback", "Shortcuts"].map((item, i) => (
                        <p key={i} className={`text-xs py-1 ${i === 0 ? "font-medium" : ""}`} style={{ color: i === 0 ? colors.heading : colors.text }}>
                          {item}
                        </p>
                      ))}
                    </div>
                  </div>

                  {/* Main Content */}
                  <div className="absolute left-48 right-0 top-0 bottom-0 p-6">
                    <div className="flex items-center justify-between mb-6">
                      <h4 className="font-semibold" style={{ color: colors.heading }}>
                        Start guide
                      </h4>
                    </div>
                    <div className="space-y-3">
                      {Array.from({ length: 8 }).map((_, i) => (
                        <div key={i} className="h-2 bg-gray-100 rounded w-full" />
                      ))}
                    </div>
                  </div>
                </div>

                {/* Popup Widget */}
                <div className="absolute top-1/4 right-8 w-64 bg-gray-900 rounded-xl p-4 shadow-2xl z-10">
                  <button className="absolute -top-2 -right-2 w-6 h-6 bg-gray-700 rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                  <p className="text-white text-sm mb-2">안녕하세요!</p>
                  <p className="text-gray-400 text-xs mb-4">무엇을 도와드릴까요?</p>
                  <div className="bg-gray-800 rounded-lg p-3">
                    <p className="text-gray-300 text-xs">AI 챗봇이 답변해드려요</p>
                  </div>
                </div>

                {/* Card Overlay */}
                <div className="absolute bottom-8 left-8 right-8 bg-white rounded-xl p-4 shadow-xl">
                  <p className="font-medium text-sm mb-2" style={{ color: colors.heading }}>
                    위젯 & 독스를 소개합니다
                  </p>
                  <span
                    className="inline-block text-xs px-2 py-1 rounded"
                    style={{ backgroundColor: colors.badgeBg, color: colors.badgeText }}
                  >
                    새소식
                  </span>
                </div>

                {/* Userband Icon */}
                <div className="absolute bottom-4 right-1/3 w-16 h-16 bg-gray-900 rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
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
                체인지로그
              </p>
              <h2
                className="text-3xl font-bold tracking-tight sm:text-4xl"
                style={{ color: colors.heading }}
              >
                체인지로그 인 앱 알림
              </h2>
              <p
                className="mt-6 text-lg leading-8"
                style={{ color: colors.text }}
              >
                앱 내 위젯에서 체인지로그 업데이트를 표시하여 사용자가 중요한
                제품 개선사항을 놓치지 않도록 합니다.
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
