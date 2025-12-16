"use client";

// ============================================================================
// CUSTOMIZATION
// ============================================================================

const COLORS = {
  light: {
    accent: "#0099FF",
    primary: "#000000",
  },
  dark: {
    accent: "#0099FF",
    primary: "#FFFFFF",
  },
} as const;

const CONTENT = {
  badge: "Try it yourself",
  title: "처음부터 트래킷으로 시작하세요.",
  description:
    "엑셀, 노션, 세일즈포스 등 여러 도구를 비교하고 도입하느라 시간 낭비하지 마세요.\n처음부터 트래킷으로 시작하세요.",
  primaryCta: "무료로 시작하기",
  secondaryCta: "문의하기",
  primaryCtaLink: "https://app.trackit.so/",
  secondaryCtaLink: "/contact",
} as const;

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { motion } from "motion/react";

interface TrackitSoCta8Props {
  mode?: "light" | "dark";
}

export default function TrackitSoCta8({ mode = "light" }: TrackitSoCta8Props) {
  const colors = COLORS[mode];
  const isDark = mode === "dark";

  return (
    <section className={`w-full py-24 ${isDark ? "bg-gray-950" : "bg-white"}`}>
      <div className="max-w-[1000px] mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className={`relative rounded-3xl p-12 md:p-16 text-center overflow-hidden ${
            isDark ? "bg-gray-900" : "bg-gradient-to-br from-cyan-50 to-blue-50"
          }`}
        >
          {/* Background decoration */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div
              className="absolute -top-20 -right-20 w-64 h-64 rounded-full opacity-30"
              style={{
                background:
                  "radial-gradient(circle, rgba(0,153,255,0.3) 0%, transparent 70%)",
              }}
            />
            <div
              className="absolute -bottom-20 -left-20 w-64 h-64 rounded-full opacity-30"
              style={{
                background:
                  "radial-gradient(circle, rgba(0,200,150,0.3) 0%, transparent 70%)",
              }}
            />
            {/* Pixel decorations */}
            {[...Array(20)].map((_, i) => (
              <div
                key={i}
                className={`absolute w-2 h-2 ${
                  isDark ? "bg-gray-700" : "bg-cyan-200"
                } opacity-50`}
                style={{
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                }}
              />
            ))}
          </div>

          {/* Content */}
          <div className="relative z-10">
            <span
              className={`inline-block px-4 py-2 rounded-full text-sm font-medium mb-6 ${
                isDark
                  ? "bg-cyan-900/50 text-cyan-300"
                  : "bg-cyan-100 text-cyan-700"
              }`}
            >
              {CONTENT.badge}
            </span>
            <h2
              className={`text-3xl md:text-4xl font-bold mb-4 ${
                isDark ? "text-white" : "text-gray-900"
              }`}
            >
              {CONTENT.title}
            </h2>
            <p
              className={`text-lg whitespace-pre-line mb-8 max-w-2xl mx-auto ${
                isDark ? "text-gray-400" : "text-gray-600"
              }`}
            >
              {CONTENT.description}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href={CONTENT.primaryCtaLink}
                className="inline-flex items-center justify-center px-8 py-4 rounded-xl text-base font-medium text-white transition-all hover:scale-[1.02] shadow-lg"
                style={{ backgroundColor: colors.primary }}
              >
                {CONTENT.primaryCta}
              </a>
              <a
                href={CONTENT.secondaryCtaLink}
                className="inline-flex items-center justify-center px-8 py-4 rounded-xl text-base font-medium text-white transition-all hover:scale-[1.02] shadow-lg"
                style={{ backgroundColor: colors.accent }}
              >
                {CONTENT.secondaryCta}
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
