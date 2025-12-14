"use client";

// ============================================================================
// CUSTOMIZATION
// ============================================================================

const COLORS = {
  light: {
    accent: "#FC0000",
    green: "#22C55E",
    yellow: "#EAB308",
    text: "#111",
    subtext: "#666",
  },
  dark: {
    accent: "#FC0000",
    green: "#22C55E",
    yellow: "#EAB308",
    text: "#fff",
    subtext: "#999",
  },
} as const;

const STATS = [
  { label: "전국 지원센터 수", value: "6", unit: "개", prefix: "총 " },
  { label: "접수 후 평균 출동 시간", value: "0.8", unit: "일", prefix: "" },
];

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { motion } from "motion/react";
import { MapPin } from "lucide-react";

interface TorderComLocation8Props {
  mode?: "light" | "dark";
}

export default function TorderComLocation8({
  mode = "light",
}: TorderComLocation8Props) {
  const colors = COLORS[mode];

  return (
    <section className={`w-full py-24 px-4 ${mode === "dark" ? "bg-gray-950" : "bg-gray-50"}`}>
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-lg font-bold"
            style={{ color: colors.green }}
          >
            가장 완벽한
          </motion.span>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.05 }}
            className="text-sm font-semibold mt-1"
            style={{ color: colors.subtext }}
          >
            차원이 다른 고객 서비스
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-5xl font-extrabold mt-4"
            style={{ color: colors.text }}
          >
            국내 유일{" "}
            <span style={{ color: colors.accent }}>전국 지원센터</span> 운영
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-base md:text-lg"
            style={{ color: colors.subtext }}
          >
            혹시 모를 문제가 발생해도 신속히 해결해 드리고자,<br />
            티오더는 전국 6개 지원센터를 운영하고 있습니다.
          </motion.p>
          <motion.a
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            href="#"
            className="inline-block mt-4 text-sm font-medium underline"
            style={{ color: colors.yellow }}
          >
            변경 없이 쓰던 포스 그대로.
          </motion.a>
        </div>

        {/* Map and Stats */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 relative"
          >
            <div
              className={`aspect-[4/3] rounded-3xl overflow-hidden ${
                mode === "dark" ? "bg-gray-800" : "bg-gray-200"
              }`}
            >
              {/* Korea Map Placeholder */}
              <div className="w-full h-full relative flex items-center justify-center">
                <svg
                  viewBox="0 0 400 500"
                  className="w-3/4 h-3/4"
                  style={{ fill: mode === "dark" ? "#374151" : "#D1D5DB" }}
                >
                  <path d="M200 50 L280 100 L320 180 L300 280 L250 350 L200 450 L150 350 L100 280 L80 180 L120 100 Z" />
                </svg>
                {/* Location Markers */}
                <motion.div
                  animate={{ y: [0, -5, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="absolute top-1/3 left-1/2"
                >
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center shadow-lg"
                    style={{ backgroundColor: colors.accent }}
                  >
                    <span className="text-white font-bold text-lg">t&apos;</span>
                  </div>
                </motion.div>
                <motion.div
                  animate={{ y: [0, -5, 0] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 0.3 }}
                  className="absolute top-1/2 left-1/3"
                >
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center shadow-lg"
                    style={{ backgroundColor: colors.accent }}
                  >
                    <span className="text-white font-bold">t&apos;</span>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Stats */}
          <div className="space-y-6">
            {STATS.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`p-6 rounded-2xl ${
                  mode === "dark" ? "bg-gray-900" : "bg-white"
                } shadow-lg`}
              >
                <p
                  className="text-sm font-semibold mb-2"
                  style={{ color: colors.subtext }}
                >
                  {stat.label}
                </p>
                <p className="text-4xl font-extrabold" style={{ color: colors.text }}>
                  {stat.prefix}
                  <span style={{ color: colors.accent }}>{stat.value}</span>
                  {stat.unit}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
