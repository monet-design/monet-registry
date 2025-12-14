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
  },
  dark: {
    background: "#1f2937",
    cardBg: "#374151",
    heading: "#f9fafb",
    text: "#9ca3af",
  },
} as const;

const IMAGES = {} as const;

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { motion } from "motion/react";

interface UserbandComFeature7Props {
  mode?: "light" | "dark";
}

const features = [
  {
    title: "커스텀 테마 설정",
    description:
      "위젯, 체인지로그, 문서의 테마를 세부적으로 설정할 수 있어요. 커스텀 테마로 브랜딩을 유지하세요",
    visual: "theme",
  },
  {
    title: "실시간 데이터 동기화",
    description: "모든 데이터는 실시간으로 동기화돼요. 새로고침 없이 빠르게 협업하세요.",
    visual: "sync",
  },
  {
    title: "다국어 지원",
    description:
      "체인지로그, 문서의 내용을 다국어로 설정 가능해요. 자동 번역 제안으로 편하게 관리하세요.",
    visual: "language",
  },
];

export default function UserbandComFeature7({
  mode = "light",
}: UserbandComFeature7Props) {
  const colors = COLORS[mode];

  return (
    <section
      className="relative w-full py-24"
      style={{ backgroundColor: colors.background }}
    >
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <motion.h2
            className="text-4xl font-bold tracking-tight sm:text-5xl"
            style={{ color: colors.heading }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span>성장하는 SaaS를 위한</span>
            <br />
            <span>맞춤 기능들</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="rounded-2xl p-6"
              style={{ backgroundColor: colors.cardBg }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <h3
                className="text-lg font-semibold mb-2"
                style={{ color: colors.heading }}
              >
                {feature.title}
              </h3>
              <p className="text-sm mb-6" style={{ color: colors.text }}>
                {feature.description}
              </p>

              {/* Visual Elements */}
              <div className="h-40 flex items-end justify-center">
                {feature.visual === "theme" && (
                  <div className="flex gap-2">
                    {[
                      { bg: "#f3f4f6", text: "#374151" },
                      { bg: "#dcfce7", text: "#166534" },
                      { bg: "#fef3c7", text: "#92400e" },
                      { bg: "#1f2937", text: "#f9fafb" },
                    ].map((theme, i) => (
                      <div
                        key={i}
                        className="w-16 h-24 rounded-lg shadow-sm overflow-hidden"
                        style={{ backgroundColor: theme.bg }}
                      >
                        <div className="p-2">
                          <div className="text-xs font-medium" style={{ color: theme.text }}>
                            Hi there!
                          </div>
                          <div className="text-[10px] mt-1" style={{ color: theme.text, opacity: 0.7 }}>
                            What can we help?
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {feature.visual === "sync" && (
                  <div className="relative w-32 h-32">
                    {/* Central dot */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-gray-900 rounded-full" />
                    {/* Surrounding dots */}
                    {[0, 60, 120, 180, 240, 300].map((angle, i) => (
                      <div
                        key={i}
                        className="absolute w-3 h-3 bg-gray-400 rounded-full"
                        style={{
                          top: `${50 + 40 * Math.sin((angle * Math.PI) / 180)}%`,
                          left: `${50 + 40 * Math.cos((angle * Math.PI) / 180)}%`,
                          transform: "translate(-50%, -50%)",
                        }}
                      />
                    ))}
                    {/* Lines connecting to center */}
                    <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100">
                      {[0, 60, 120, 180, 240, 300].map((angle, i) => (
                        <line
                          key={i}
                          x1="50"
                          y1="50"
                          x2={50 + 35 * Math.cos((angle * Math.PI) / 180)}
                          y2={50 + 35 * Math.sin((angle * Math.PI) / 180)}
                          stroke="#d1d5db"
                          strokeWidth="1"
                        />
                      ))}
                    </svg>
                  </div>
                )}

                {feature.visual === "language" && (
                  <div className="flex items-center gap-4 text-xl font-medium" style={{ color: colors.text }}>
                    <span>Bonjour</span>
                    <span>Guten Tag</span>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
