"use client";

// ============================================================================
// CUSTOMIZATION
// ============================================================================

const COLORS = {
  light: {
    accent: "#FC0000",
    text: "#111",
    subtext: "#666",
    bg: "#ffffff",
  },
  dark: {
    accent: "#FC0000",
    text: "#fff",
    subtext: "#999",
    bg: "#000000",
  },
} as const;

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { useState } from "react";
import { motion } from "motion/react";
import { Search } from "lucide-react";

interface TorderComFeature3Props {
  mode?: "light" | "dark";
}

export default function TorderComFeature3({
  mode = "light",
}: TorderComFeature3Props) {
  const colors = COLORS[mode];
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <section
      className="w-full py-24 px-4"
      style={{ backgroundColor: colors.bg }}
    >
      <div className="max-w-4xl mx-auto text-center">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-8"
          style={{ color: colors.text }}
        >
          <span style={{ color: colors.accent }}>티오더</span>가{" "}
          <span className="inline-block">
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              이유
            </motion.span>
          </span>
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-lg md:text-xl mb-12"
          style={{ color: colors.subtext }}
        >
          테이블오더 도입을 고민하고 계신가요?<br />
          티오더가 왜 최선의 선택인지 알아보세요.
        </motion.p>

        {/* Search Box */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="relative max-w-xl mx-auto mb-16"
        >
          <div className="relative flex items-center">
            <Search className="absolute left-4 w-5 h-5 text-gray-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="궁금한 내용을 검색해보세요"
              className={`w-full pl-12 pr-4 py-4 rounded-full border-2 focus:outline-none focus:border-red-500 transition-colors ${
                mode === "dark"
                  ? "bg-gray-900 border-gray-700 text-white placeholder-gray-500"
                  : "bg-white border-gray-200 text-gray-900 placeholder-gray-400"
              }`}
            />
            <button
              className="absolute right-2 px-6 py-2 rounded-full text-white font-semibold transition-colors"
              style={{ backgroundColor: colors.accent }}
            >
              검색
            </button>
          </div>
        </motion.div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { title: "추가 수수료 없음", desc: "PG 결제 수수료가 없어요" },
            { title: "30+ 포스 연동", desc: "주요 포스와 자동 연동돼요" },
            { title: "전국 지원센터", desc: "빠른 AS 지원을 받으세요" },
          ].map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * index }}
              className={`p-6 rounded-2xl ${
                mode === "dark" ? "bg-gray-900" : "bg-gray-50"
              }`}
            >
              <h3
                className="text-xl font-bold mb-2"
                style={{ color: colors.text }}
              >
                {feature.title}
              </h3>
              <p style={{ color: colors.subtext }}>{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
