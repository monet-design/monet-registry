"use client";

// ============================================================================
// CUSTOMIZATION
// ============================================================================

const COLORS = {
  light: {
    accent: "#F97316",
    accentLight: "#FFF7ED",
    accentText: "#F97316",
  },
  dark: {
    accent: "#FB923C",
    accentLight: "#431407",
    accentText: "#FDBA74",
  },
} as const;

const CONTENT = {
  badge: "주요 기능",
  title: "볼타 AI를 사용하면",
  titleHighlight: "어떤 변화를 경험",
  titleEnd: "하게 될까요?",
};

const FEATURES = [
  {
    icon: "calendar",
    title: "미래 날짜를 선택하면, 볼타가 자동으로 발행해 드려요.",
    description: "",
    active: false,
  },
  {
    icon: "link",
    title: "입출금 내역을 볼타 AI가 자동으로 연결해 미수금, 미지급 건을 한눈에 볼 수 있어요.",
    description: "쉽고 간편하게 매출 매입 관리할 수 있어요.",
    link: "자세히 보기",
    active: true,
  },
  {
    icon: "document",
    title: "번거로운 지출결의는 그만. 한 번에 작성하고 승인까지 완료하세요.",
    description: "",
    active: false,
  },
];

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { useState } from "react";
import { motion } from "motion/react";

interface BoltaIoFeature3Props {
  mode?: "light" | "dark";
}

export default function BoltaIoFeature3({ mode = "light" }: BoltaIoFeature3Props) {
  const colors = COLORS[mode];
  const [activeFeature, setActiveFeature] = useState(1);

  const getIcon = (type: string, isActive: boolean) => {
    const iconColor = isActive ? colors.accent : "#9CA3AF";

    switch (type) {
      case "calendar":
        return (
          <svg className="w-6 h-6" fill="none" stroke={iconColor} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
        );
      case "link":
        return (
          <svg className="w-6 h-6" fill="none" stroke={iconColor} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
          </svg>
        );
      case "document":
        return (
          <svg className="w-6 h-6" fill="none" stroke={iconColor} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <section className="w-full py-20 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-2 rounded-full text-sm font-medium mb-6"
            style={{ backgroundColor: colors.accentLight, color: colors.accentText }}
          >
            {CONTENT.badge}
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900"
          >
            {CONTENT.title}
            <br />
            <span style={{ color: colors.accent }}>{CONTENT.titleHighlight}</span>
            {CONTENT.titleEnd}
          </motion.h2>
        </div>

        {/* Feature Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Feature List */}
          <div className="space-y-2">
            {FEATURES.map((feature, index) => {
              const isActive = activeFeature === index;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`p-6 rounded-xl cursor-pointer transition-all ${
                    isActive
                      ? "bg-white shadow-lg border-l-4"
                      : "hover:bg-white/50"
                  }`}
                  style={isActive ? { borderLeftColor: colors.accent } : {}}
                  onClick={() => setActiveFeature(index)}
                >
                  <div className="flex items-start gap-4">
                    <div
                      className={`p-3 rounded-full ${
                        isActive ? "bg-blue-50" : "bg-gray-100"
                      }`}
                    >
                      {getIcon(feature.icon, isActive)}
                    </div>
                    <div className="flex-1">
                      <h3
                        className={`text-lg font-semibold mb-2 ${
                          isActive ? "text-gray-900" : "text-gray-500"
                        }`}
                      >
                        {feature.title}
                      </h3>
                      {feature.description && isActive && (
                        <p className="text-gray-600 text-sm mb-3">
                          {feature.description}
                        </p>
                      )}
                      {feature.link && isActive && (
                        <a
                          href="#"
                          className="inline-flex items-center gap-1 text-sm font-medium"
                          style={{ color: colors.accent }}
                        >
                          {feature.link}
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </a>
                      )}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Feature Illustration */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="bg-white rounded-3xl shadow-xl p-8 relative overflow-hidden">
              {/* Decorative circles */}
              <div className="absolute inset-0 opacity-10">
                <svg className="w-full h-full" viewBox="0 0 400 400">
                  <circle cx="200" cy="200" r="150" stroke="#D1D5DB" fill="none" strokeWidth="1" />
                  <circle cx="200" cy="200" r="100" stroke="#D1D5DB" fill="none" strokeWidth="1" />
                </svg>
              </div>

              {/* Transaction Cards */}
              <div className="relative z-10 space-y-6">
                {/* Incoming Transaction */}
                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                  <div>
                    <p className="text-sm text-gray-500">거래처 A</p>
                    <p className="text-xl font-bold text-gray-900">660,000원</p>
                  </div>
                  <span
                    className="px-3 py-1 rounded-full text-sm font-medium text-white"
                    style={{ backgroundColor: colors.accent }}
                  >
                    입금
                  </span>
                </div>

                {/* Connection indicator */}
                <div className="flex items-center justify-center">
                  <div className="flex items-center gap-2">
                    <div
                      className="w-8 h-8 rounded-full flex items-center justify-center"
                      style={{ backgroundColor: colors.accent }}
                    >
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101" />
                      </svg>
                    </div>
                    <span className="text-sm" style={{ color: colors.accent }}>
                      매출세금계산서
                      <br />
                      연결 완료
                    </span>
                  </div>
                </div>

                {/* Outgoing Transaction */}
                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                  <div>
                    <p className="text-sm text-gray-500">거래처 B</p>
                    <p className="text-xl font-bold text-gray-900">-880,000원</p>
                  </div>
                  <span className="px-3 py-1 rounded-full text-sm font-medium bg-gray-200 text-gray-700">
                    출금
                  </span>
                </div>

                {/* Connection indicator */}
                <div className="flex items-center justify-center">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101" />
                      </svg>
                    </div>
                    <span className="text-sm text-green-600">
                      매입세금계산서
                      <br />
                      연결 완료
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
