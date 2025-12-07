"use client";

// ============================================================================
// CUSTOMIZATION
// ============================================================================

const COLORS = {
  light: {
    accent: "#F97316",
  },
  dark: {
    accent: "#FB923C",
  },
} as const;

const CONTENT = {
  title: "숫자로 증명된 볼타의 가치",
};

const STATS = [
  { value: "199,590+", label: "누적 발행량" },
  { value: "4,459억원+", label: "누적 발행액" },
  { value: "5,897개+", label: "사용 기업수" },
];

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { motion } from "motion/react";

interface BoltaIoStats4Props {
  mode?: "light" | "dark";
}

export default function BoltaIoStats4({ mode = "light" }: BoltaIoStats4Props) {
  const colors = COLORS[mode];

  return (
    <section className="w-full py-16 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-12"
        >
          {CONTENT.title}
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {STATS.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center relative"
            >
              {index > 0 && (
                <div className="hidden md:block absolute left-0 top-1/2 -translate-y-1/2 w-px h-16 bg-gray-200" />
              )}
              <div className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">
                {stat.value}
              </div>
              <div className="text-gray-500">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
