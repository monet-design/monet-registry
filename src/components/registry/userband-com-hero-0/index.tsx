"use client";

// ============================================================================
// CUSTOMIZATION
// ============================================================================

const COLORS = {
  light: {
    accent: "#000000",
    accentHover: "#1a1a1a",
    background: "#f5f5f0",
  },
  dark: {
    accent: "#ffffff",
    accentHover: "#e5e5e5",
    background: "#1a1a1a",
  },
} as const;

const IMAGES = {} as const;

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { motion } from "motion/react";

interface UserbandComHero0Props {
  mode?: "light" | "dark";
}

export default function UserbandComHero0({
  mode = "light",
}: UserbandComHero0Props) {
  const colors = COLORS[mode];
  const isDark = mode === "dark";

  return (
    <section
      className="relative w-full"
      style={{ backgroundColor: colors.background }}
    >
      {/* Header/Navigation */}
      <header className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-8">
          <a href="#" className={`text-2xl font-bold ${isDark ? "text-white" : "text-gray-900"}`}>
            <span className="italic">u</span>serband
          </a>
          <nav className="hidden md:flex items-center gap-6">
            <a
              href="#"
              className={`text-sm flex items-center gap-1 ${isDark ? "text-gray-300 hover:text-white" : "text-gray-600 hover:text-gray-900"}`}
            >
              기능
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </a>
            <a
              href="#"
              className={`text-sm ${isDark ? "text-gray-300 hover:text-white" : "text-gray-600 hover:text-gray-900"}`}
            >
              가격
            </a>
          </nav>
        </div>
        <motion.a
          href="#"
          className="inline-flex items-center justify-center px-6 py-2 text-sm font-medium rounded-md transition-colors"
          style={{
            backgroundColor: colors.accent,
            color: isDark ? "#000" : "#fff",
          }}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          시작하기
        </motion.a>
      </header>

      {/* Hero Content */}
      <div className="container mx-auto px-4 py-24 md:py-32">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1
            className={`text-4xl font-bold tracking-tight sm:text-6xl md:text-7xl ${isDark ? "text-white" : "text-gray-900"}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span>SaaS를 위한</span>
            <br />
            <span>유저 서포트 에이전트</span>
          </motion.h1>

          <motion.p
            className={`mt-6 text-lg leading-8 sm:text-xl ${isDark ? "text-gray-400" : "text-gray-500"}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <span>상담 채팅부터 피드백 수집, 지식 베이스 관리까지.</span>
            <br />
            <span>유저와 관련된 모든 워크플로우를 유저밴드로 해결하세요.</span>
          </motion.p>

          <motion.div
            className="mt-10 flex items-center justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <a
              href="#"
              className="inline-flex items-center justify-center px-8 py-3 text-sm font-medium rounded-md transition-colors"
              style={{
                backgroundColor: colors.accent,
                color: isDark ? "#000" : "#fff",
              }}
            >
              시작하기
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
