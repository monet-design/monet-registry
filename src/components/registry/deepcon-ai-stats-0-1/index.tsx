"use client";

// ============================================================================
// CUSTOMIZATION - 이 섹션의 값들을 수정하여 프로젝트에 맞게 조정하세요
// ============================================================================

const CONTENT = {
  features: [
    {
      text: "10,000+ official docs across all\nmajor frameworks and languages.",
    },
    {
      text: "Query decomposition retrieves exactly\nwhat you need—no more, no less.",
    },
    {
      text: "<5s response—10x faster than\ntraditional 10-minute deep research.",
    },
    {
      text: "Optimized for Claude Code, Codex,\nCursor, and all major coding agents.",
    },
  ],
  stats: [
    { value: "90%", label: "Context evaluation metric" },
    { value: "<7s", label: "Context retrieval response time" },
    { value: "5000+", label: "Developers using daily" },
  ],
} as const;

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { motion } from "motion/react";

interface DeepconAiStats01Props {
  mode?: "light" | "dark";
}

export default function DeepconAiStats01({
  mode = "light",
}: DeepconAiStats01Props) {
  return (
    <section className="relative px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20 bg-white text-black">
      <motion.div
        className="mx-auto flex max-w-[976px] flex-col items-center text-center gap-12 sm:gap-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        {/* Features Grid */}
        <div className="mx-auto grid max-w-3xl gap-3 text-left text-base text-gray-600 sm:grid-cols-2">
          {CONTENT.features.map((feature, index) => (
            <motion.div
              key={index}
              className="flex items-start gap-3 bg-white px-5 py-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <span className="mt-1.5 h-1 w-6 bg-black flex-shrink-0" />
              <span className="whitespace-pre-line">{feature.text}</span>
            </motion.div>
          ))}
        </div>

        {/* Stats */}
        <div className="w-full pt-12 sm:pt-16 border-t border-black/10">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-sm text-gray-500 max-w-3xl mx-auto">
            {CONTENT.stats.map((stat, index) => (
              <motion.div
                key={index}
                className="flex flex-col items-center gap-2"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + index * 0.1 }}
              >
                <span className="text-3xl sm:text-4xl font-bold text-black">{stat.value}</span>
                <span className="text-center">{stat.label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
