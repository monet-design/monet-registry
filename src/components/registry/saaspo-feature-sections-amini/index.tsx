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
    accent: "#C9A227", // 골드/머스타드
    accentHover: "#B8911F",
    tagline: "#8B2635", // 마룬/레드
    background: "#F0F0F0",
    cardBg: "#141414",
  },
  dark: {
    accent: "#D4AF37",
    accentHover: "#C9A227",
    tagline: "#A03040",
    background: "#1A1A1A",
    cardBg: "#0A0A0A",
  },
} as const;

/**
 * 이미지 에셋
 * - path: 이미지 경로
 * - alt: 접근성용 대체 텍스트
 * - prompt: AI 이미지 재생성용 상세 프롬프트
 */
const IMAGES = {
  infrastructure: {
    path: "/registry/saaspo-feature-sections-amini/original.jpg",
    alt: "3D data infrastructure visualization showing layered platforms",
    prompt: `3D isometric data infrastructure visualization with dark theme,
    featuring three stacked platforms with golden accent lights and geometric elements`,
  },
} as const;

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

interface FeatureCardProps {
  title: string;
  description: string;
  index: number;
}

function FeatureCard({ title, description, index }: FeatureCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="flex flex-col gap-3"
    >
      <h3 className="text-sm font-semibold tracking-[0.2em] text-gray-900">
        {title}
      </h3>
      <p className="text-sm leading-relaxed text-gray-600">{description}</p>
    </motion.div>
  );
}

interface InfrastructureVisualProps {
  colors: (typeof COLORS)["light"] | (typeof COLORS)["dark"];
}

function InfrastructureVisual({ colors }: InfrastructureVisualProps) {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      {/* Background grid dots */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-gray-700 opacity-30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      {/* 3D Isometric Platforms */}
      <svg
        viewBox="0 0 500 400"
        className="w-full max-w-lg h-auto"
        style={{ filter: "drop-shadow(0 25px 50px rgba(0,0,0,0.5))" }}
      >
        {/* Bottom Platform */}
        <g transform="translate(100, 280)">
          <polygon
            points="0,50 150,0 300,50 150,100"
            fill="#1f1f1f"
            stroke="#2a2a2a"
            strokeWidth="1"
          />
          <polygon
            points="0,50 0,70 150,120 150,100"
            fill="#171717"
            stroke="#2a2a2a"
            strokeWidth="1"
          />
          <polygon
            points="150,100 150,120 300,70 300,50"
            fill="#1a1a1a"
            stroke="#2a2a2a"
            strokeWidth="1"
          />
        </g>

        {/* Middle Platform */}
        <g transform="translate(120, 200)">
          <polygon
            points="0,50 130,0 260,50 130,100"
            fill="#252525"
            stroke="#333"
            strokeWidth="1"
          />
          <polygon
            points="0,50 0,70 130,120 130,100"
            fill="#1a1a1a"
            stroke="#333"
            strokeWidth="1"
          />
          <polygon
            points="130,100 130,120 260,70 260,50"
            fill="#202020"
            stroke="#333"
            strokeWidth="1"
          />
          {/* Golden elements */}
          <rect
            x="80"
            y="35"
            width="15"
            height="15"
            fill={colors.accent}
            opacity="0.8"
            transform="skewX(-20)"
          />
          <rect
            x="160"
            y="45"
            width="12"
            height="12"
            fill={colors.accent}
            opacity="0.6"
            transform="skewX(-20)"
          />
        </g>

        {/* Top Platform */}
        <g transform="translate(140, 120)">
          <polygon
            points="0,50 110,0 220,50 110,100"
            fill="#2a2a2a"
            stroke="#3a3a3a"
            strokeWidth="1"
          />
          <polygon
            points="0,50 0,70 110,120 110,100"
            fill="#1f1f1f"
            stroke="#3a3a3a"
            strokeWidth="1"
          />
          <polygon
            points="110,100 110,120 220,70 220,50"
            fill="#252525"
            stroke="#3a3a3a"
            strokeWidth="1"
          />
          {/* Beacon/Light */}
          <ellipse cx="110" cy="40" rx="8" ry="4" fill="#333" />
          <line
            x1="110"
            y1="40"
            x2="110"
            y2="10"
            stroke={colors.accent}
            strokeWidth="2"
            opacity="0.8"
          />
          <circle cx="110" cy="8" r="4" fill={colors.accent} opacity="0.9">
            <animate
              attributeName="opacity"
              values="0.9;0.5;0.9"
              dur="2s"
              repeatCount="indefinite"
            />
          </circle>
        </g>

        {/* Floating cubes */}
        <g transform="translate(350, 100)">
          <rect
            width="10"
            height="10"
            fill={colors.accent}
            opacity="0.7"
            transform="rotate(45)"
          />
        </g>
        <g transform="translate(380, 180)">
          <rect
            width="8"
            height="8"
            fill={colors.accent}
            opacity="0.5"
            transform="rotate(45)"
          />
        </g>
        <g transform="translate(100, 150)">
          <rect
            width="6"
            height="6"
            fill={colors.accent}
            opacity="0.6"
            transform="rotate(45)"
          />
        </g>

        {/* Labels */}
        <text x="340" y="90" fill="#888" fontSize="8" fontFamily="sans-serif">
          HAZARD EXPOSURE
        </text>
        <text x="80" y="170" fill="#888" fontSize="8" fontFamily="sans-serif">
          SUITABILITY
        </text>
        <text x="80" y="180" fill="#888" fontSize="8" fontFamily="sans-serif">
          & RISK
        </text>
        <text x="360" y="220" fill="#888" fontSize="8" fontFamily="sans-serif">
          DIGITAL
        </text>
        <text x="360" y="230" fill="#888" fontSize="8" fontFamily="sans-serif">
          TRANSFORMATION
        </text>
        <text x="280" y="300" fill="#888" fontSize="8" fontFamily="sans-serif">
          NATURAL RESOURCES
        </text>
        <text x="280" y="310" fill="#888" fontSize="8" fontFamily="sans-serif">
          MANAGEMENT
        </text>

        {/* Temperature indicators */}
        <text x="90" y="260" fill="#666" fontSize="7" fontFamily="sans-serif">
          21C
        </text>
        <text x="380" y="320" fill="#666" fontSize="7" fontFamily="sans-serif">
          24C
        </text>
      </svg>
    </div>
  );
}

interface SaaspoFeatureSectionsAminiProps {
  mode?: "light" | "dark";
  tagline?: string;
  titleHighlight?: string;
  titleRest?: string;
  platformLabel?: string;
  platformTitle?: string;
  platformDescription?: string;
  ctaText?: string;
  features?: Array<{
    title: string;
    description: string;
  }>;
  onCtaClick?: () => void;
}

export default function SaaspoFeatureSectionsAmini({
  mode = "light",
  tagline = "Supporting the Global South with AI-Ready Infrastructure",
  titleHighlight = "Data and compute scarcity",
  titleRest = "are the biggest barriers to AI adoption in the Global South.",
  platformLabel = "AMINI DATA PLATFORM",
  platformTitle = "End-to-end Data\nInfrastructure for\nthe Global South.",
  platformDescription = "Extract deep, micro-level insights from raw and unstructured data using Amini's proprietary infrastructure and models.",
  ctaText = "Learn more",
  features = [
    {
      title: "INGESTION ENGINE",
      description:
        "Aggregate, clean, and structure diverse datasets into an analysis-ready format, ensuring seamless integration with AI workflows.",
    },
    {
      title: "COMPUTE ENGINE",
      description:
        "Handle massive data volumes effortlessly. Orchestrate, automate, and process compute workloads efficiently.",
    },
    {
      title: "PROCESSING ENGINE",
      description:
        "Turn raw satellite imagery into real-time, actionable intelligence for businesses and governments.",
    },
  ],
  onCtaClick,
}: SaaspoFeatureSectionsAminiProps) {
  const colors = COLORS[mode];

  return (
    <section
      className="relative w-full py-16 md:py-24"
      style={{ backgroundColor: colors.background }}
    >
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 md:mb-16"
        >
          <p
            className="text-sm md:text-base font-medium mb-4"
            style={{ color: colors.tagline }}
          >
            {tagline}
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight max-w-4xl">
            <span style={{ color: colors.accent }}>{titleHighlight}</span>{" "}
            <span className="text-gray-900">{titleRest}</span>
          </h2>
        </motion.div>

        {/* Platform Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="rounded-2xl overflow-hidden mb-8"
          style={{ backgroundColor: colors.cardBg }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[500px]">
            {/* Left Content */}
            <div className="flex flex-col justify-center p-8 md:p-12 lg:p-16">
              <div className="flex items-center gap-2 mb-6">
                <div
                  className="w-1 h-4 rounded-full"
                  style={{ backgroundColor: colors.accent }}
                />
                <span
                  className="text-xs font-semibold tracking-[0.2em]"
                  style={{ color: colors.accent }}
                >
                  {platformLabel}
                </span>
              </div>

              <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white leading-tight mb-6 whitespace-pre-line">
                {platformTitle}
              </h3>

              <p className="text-gray-400 text-sm md:text-base leading-relaxed mb-8 max-w-md">
                {platformDescription}
              </p>

              <motion.button
                onClick={onCtaClick}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gray-800 text-white text-sm font-medium w-fit hover:bg-gray-700 transition-colors"
              >
                {ctaText}
                <ArrowRight className="w-4 h-4" />
              </motion.button>
            </div>

            {/* Right Visual */}
            <div className="relative bg-gradient-to-br from-gray-900 to-black p-8">
              <InfrastructureVisual colors={colors} />
            </div>
          </div>
        </motion.div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 pt-8 border-t border-gray-300">
          {features.map((feature, index) => (
            <FeatureCard
              key={feature.title}
              title={feature.title}
              description={feature.description}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
