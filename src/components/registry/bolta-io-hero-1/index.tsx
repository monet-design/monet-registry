"use client";

// ============================================================================
// CUSTOMIZATION
// ============================================================================

const COLORS = {
  light: {
    accent: "#F97316",
    accentHover: "#EA580C",
    background: "#FDF6EE",
  },
  dark: {
    accent: "#FB923C",
    accentHover: "#F97316",
    background: "#1C1917",
  },
} as const;

const CONTENT = {
  title: "재무 AI 어시스턴트, 볼타",
  subtitle: "세금계산서부터 미수금까지, 반복 업무는 AI가 대신합니다.",
  primaryCta: "재무 AI 체험하기",
  secondaryCta: "문의하기",
};

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { motion } from "motion/react";

interface BoltaIoHero1Props {
  mode?: "light" | "dark";
}

export default function BoltaIoHero1({ mode = "light" }: BoltaIoHero1Props) {
  const colors = COLORS[mode];

  return (
    <section
      className="relative w-full overflow-hidden py-16 lg:py-24"
      style={{ backgroundColor: colors.background }}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Hero Content */}
        <div className="text-center mb-12">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6"
          >
            {CONTENT.title}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg md:text-xl text-gray-600 mb-8"
          >
            {CONTENT.subtitle}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a
              href="#contact"
              className="px-6 py-3 rounded-full border border-gray-300 text-gray-700 hover:bg-gray-50 transition-colors font-medium"
            >
              {CONTENT.secondaryCta}
            </a>
            <motion.a
              href="#demo"
              className="px-6 py-3 rounded-full text-white font-medium"
              style={{ backgroundColor: colors.accent }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {CONTENT.primaryCta}
            </motion.a>
          </motion.div>
        </div>

        {/* Dashboard Preview */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="relative mx-auto max-w-5xl"
        >
          <div className="flex flex-col lg:flex-row gap-6 items-start justify-center">
            {/* Main Form Card */}
            <div className="bg-white rounded-2xl shadow-xl p-6 w-full lg:w-2/3">
              {/* Form Header */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <span>may@bolta.io</span>
                  <span>|</span>
                  <span>김담당</span>
                  <span>|</span>
                  <span>010-1234-5668</span>
                </div>
                <div className="flex items-center gap-3">
                  <label className="flex items-center gap-2 text-sm">
                    <span className="text-gray-500">이메일</span>
                    <div
                      className="w-10 h-6 rounded-full relative"
                      style={{ backgroundColor: colors.accent }}
                    >
                      <div className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full" />
                    </div>
                  </label>
                  <label className="flex items-center gap-2 text-sm">
                    <span className="text-gray-500">알림톡</span>
                    <div className="w-10 h-6 bg-gray-200 rounded-full relative">
                      <div className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full" />
                    </div>
                  </label>
                </div>
              </div>

              {/* Form Title */}
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-gray-900">품목정보</h3>
                <div className="flex gap-2">
                  <button className="px-3 py-1 text-sm text-gray-500 border border-gray-200 rounded">
                    과세
                  </button>
                  <button className="px-3 py-1 text-sm text-gray-500 border border-gray-200 rounded">
                    영세
                  </button>
                  <button className="px-3 py-1 text-sm text-gray-500 border border-gray-200 rounded">
                    면세
                  </button>
                </div>
              </div>

              {/* Add Button */}
              <div className="flex items-center gap-2 mb-4">
                <button
                  className="px-4 py-2 text-white text-sm rounded-lg"
                  style={{ backgroundColor: colors.accent }}
                >
                  + 추가
                </button>
                <span className="px-3 py-2 border border-gray-200 rounded-lg text-sm">
                  1
                </span>
              </div>

              {/* Form Fields */}
              <div className="space-y-4">
                <div className="font-medium text-gray-700">품목 1</div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm text-gray-500">
                      공급일자 <span className="text-red-500">*</span>
                    </label>
                    <div className="mt-1 relative">
                      <input
                        type="text"
                        placeholder="YYYY.MM.DD"
                        className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm"
                      />
                      <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                      </span>
                    </div>
                  </div>
                  <div>
                    <label className="text-sm text-gray-500">
                      품목명 <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="간편 전자세금계산서 서비스"
                      className="mt-1 w-full px-4 py-3 border border-gray-200 rounded-lg text-sm"
                    />
                  </div>
                  <div>
                    <label className="text-sm text-gray-500">
                      단가 <span className="text-red-500">*</span>
                    </label>
                    <div className="mt-1 flex items-center">
                      <span className="text-gray-500 mr-2">W</span>
                      <input
                        type="text"
                        defaultValue="0"
                        className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="text-sm text-gray-500">수량</label>
                    <div className="mt-1 flex items-center">
                      <span className="text-gray-500 mr-2">X</span>
                      <input
                        type="text"
                        defaultValue="1"
                        className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Side Summary Card */}
            <div className="bg-white rounded-2xl shadow-xl p-6 w-full lg:w-1/3">
              <div className="space-y-4">
                <div>
                  <span className="text-sm text-gray-500">합계금액</span>
                  <div className="text-gray-300 text-sm">0원</div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <span className="text-sm text-gray-500">공급가액</span>
                    <div className="text-gray-300 text-sm">0원</div>
                  </div>
                  <div>
                    <span className="text-sm text-gray-500">세액</span>
                    <div className="text-gray-300 text-sm">0원</div>
                  </div>
                </div>
                <div className="flex gap-2">
                  <label className="flex items-center gap-2">
                    <input type="radio" name="type" className="text-gray-400" />
                    <span className="text-sm text-gray-500">발수</span>
                  </label>
                  <label className="flex items-center gap-2">
                    <input type="radio" name="type" defaultChecked className="accent-orange-500" />
                    <span className="text-sm" style={{ color: colors.accent }}>
                      청구
                    </span>
                  </label>
                </div>
                <button
                  className="w-full py-3 text-white font-medium rounded-lg"
                  style={{ backgroundColor: colors.accent }}
                >
                  정보 확인
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
