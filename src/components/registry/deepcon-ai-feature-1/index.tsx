"use client";

// ============================================================================
// CUSTOMIZATION - 이 섹션의 값들을 수정하여 프로젝트에 맞게 조정하세요
// ============================================================================

/**
 * 커스텀 색상 (브랜드 컬러)
 * - grayscale 텍스트는 Tailwind semantic color 사용 (text-gray-900 등)
 * - 여기에는 브랜드 고유 컬러만 정의
 */
const COLORS = {
  light: {
    // Primary 액센트 (버튼, 링크 등)
    accent: "#000000", // 블랙 액센트 바
    background: "#FFFFFF", // 흰색 배경
  },
  dark: {
    accent: "#FFFFFF",
    background: "#0A0A0A",
  },
} as const;

/**
 * 섹션 콘텐츠
 */
const CONTENT = {
  title: "Why Deepcon?",
  subtitle:
    "Built for agents that need comprehensive intelligence with zero token waste—enabling capabilities that were previously impossible.",
  features: [
    {
      title: "Multi-Source Intelligence",
      description:
        "Access tens of thousands of official documents, web search, deep research, and code search. Every tool your agent needs to find the right information.",
    },
    {
      title: "Token-Optimized Delivery",
      description:
        "Delivers exactly what's needed—nothing more, nothing less. Minimizes token waste while keeping your agent's context window optimized.",
    },
    {
      title: "10x More Accurate",
      description:
        "Delivers the most precise context for integrating latest features. When used with agents, error rates drop dramatically for production-ready results.",
    },
    {
      title: "Always Up-to-Date",
      description:
        "Real-time sync with latest docs, APIs, and releases. Your agents never work with stale information.",
    },
  ],
} as const;

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { motion } from "motion/react";

interface FeatureCardProps {
  title: string;
  description: string;
  index: number;
  mode: "light" | "dark";
}

function FeatureCard({ title, description, index, mode }: FeatureCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`group relative p-6 sm:p-8 border transition-all duration-200 ${
        mode === "light"
          ? "border-black/10 bg-white hover:border-black"
          : "border-white/10 bg-gray-900 hover:border-white"
      }`}
    >
      <div
        className={`mb-5 h-1 w-16 transition-all duration-300 group-hover:w-20 ${
          mode === "light" ? "bg-black" : "bg-white"
        }`}
      />
      <h3
        className={`text-xl font-bold mb-3 ${
          mode === "light" ? "text-black" : "text-white"
        }`}
      >
        {title}
      </h3>
      <p
        className={`leading-relaxed ${
          mode === "light" ? "text-gray-600" : "text-gray-400"
        }`}
      >
        {description}
      </p>
    </motion.div>
  );
}

interface DeepconAiFeature1Props {
  mode?: "light" | "dark";
  title?: string;
  subtitle?: string;
  features?: Array<{ title: string; description: string }>;
}

export default function DeepconAiFeature1({
  mode = "light",
  title = CONTENT.title,
  subtitle = CONTENT.subtitle,
  features = CONTENT.features as unknown as Array<{
    title: string;
    description: string;
  }>,
}: DeepconAiFeature1Props) {
  const colors = COLORS[mode];

  return (
    <section
      className={`py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 ${
        mode === "light" ? "bg-white" : "bg-gray-950"
      }`}
      style={{ backgroundColor: colors.background }}
    >
      <div className="container mx-auto max-w-4xl relative z-10">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className={`text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 ${
              mode === "light" ? "text-black" : "text-white"
            }`}
          >
            {title}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className={`text-base sm:text-lg md:text-xl max-w-2xl mx-auto px-4 ${
              mode === "light" ? "text-gray-600" : "text-gray-400"
            }`}
          >
            {subtitle}
          </motion.p>
        </div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 gap-6 sm:gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              title={feature.title}
              description={feature.description}
              index={index}
              mode={mode}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
