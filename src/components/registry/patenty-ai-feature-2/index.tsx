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
    background: "#0a0a0a",
    textPrimary: "#ffffff",
    textSecondary: "#a3a3a3",
    textMuted: "#737373",
    iconColor: "#d4d4d4",
  },
  dark: {
    background: "#0a0a0a",
    textPrimary: "#ffffff",
    textSecondary: "#a3a3a3",
    textMuted: "#737373",
    iconColor: "#d4d4d4",
  },
} as const;

/**
 * 이미지 에셋
 * - path: 이미지 경로
 * - alt: 접근성용 대체 텍스트
 * - prompt: AI 이미지 재생성용 상세 프롬프트
 */
const IMAGES = {} as const;

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { motion } from "motion/react";
import type React from "react";

// ============================================
// Types
// ============================================

interface ValueProposition {
  label: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

interface PatentyAiFeature2Props {
  mode?: "light" | "dark";
  heading?: string;
  subheading?: string;
  valuePropositions?: ValueProposition[];
}

// ============================================
// Custom Icons
// ============================================

function StopwatchIcon({ className = "w-32 h-32" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 120 120"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {/* Main circle */}
      <circle cx="60" cy="65" r="40" />
      {/* Top button */}
      <rect x="55" y="15" width="10" height="10" rx="2" />
      {/* Top connector */}
      <line x1="60" y1="25" x2="60" y2="25" />
      {/* Right button (start/stop) */}
      <line x1="88" y1="35" x2="96" y2="27" />
      <circle cx="98" cy="25" r="4" />
      {/* Left button */}
      <line x1="32" y1="35" x2="24" y2="27" />
      <circle cx="22" cy="25" r="4" />
      {/* Clock hands */}
      <line x1="60" y1="65" x2="60" y2="45" />
      <line x1="60" y1="65" x2="78" y2="75" />
      {/* Center dot */}
      <circle cx="60" cy="65" r="3" fill="currentColor" />
      {/* Tick marks */}
      <line x1="60" y1="30" x2="60" y2="35" />
      <line x1="95" y1="65" x2="90" y2="65" />
      <line x1="60" y1="100" x2="60" y2="95" />
      <line x1="25" y1="65" x2="30" y2="65" />
    </svg>
  );
}

function HumanLoopIcon({ className = "w-32 h-32" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 120 120"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {/* Human figure - head */}
      <circle cx="60" cy="35" r="12" />
      {/* Human figure - body */}
      <path d="M60 47 L60 75" />
      {/* Human figure - arms */}
      <path d="M60 55 L45 70" />
      <path d="M60 55 L75 70" />
      {/* Human figure - legs */}
      <path d="M60 75 L48 95" />
      <path d="M60 75 L72 95" />
      {/* Orbit rings */}
      <ellipse cx="60" cy="60" rx="50" ry="20" />
      <ellipse
        cx="60"
        cy="60"
        rx="50"
        ry="20"
        transform="rotate(60 60 60)"
      />
      <ellipse
        cx="60"
        cy="60"
        rx="50"
        ry="20"
        transform="rotate(-60 60 60)"
      />
    </svg>
  );
}

function BrainAIIcon({ className = "w-32 h-32" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 120 120"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {/* Left brain half */}
      <path d="M60 20 C40 20 25 35 25 55 C25 75 40 95 60 100" />
      <path d="M35 40 C30 45 28 55 32 65" />
      <path d="M40 30 C35 35 33 50 38 60" />
      <path d="M50 25 C45 30 42 45 48 55" />
      {/* Right brain half */}
      <path d="M60 20 C80 20 95 35 95 55 C95 75 80 95 60 100" />
      <path d="M85 40 C90 45 92 55 88 65" />
      <path d="M80 30 C85 35 87 50 82 60" />
      <path d="M70 25 C75 30 78 45 72 55" />
      {/* Center line */}
      <path d="M60 20 L60 100" strokeDasharray="4 4" />
      {/* AI chip/circuit on left */}
      <rect x="30" y="70" width="20" height="20" rx="3" />
      <circle cx="40" cy="80" r="5" />
      <line x1="30" y1="75" x2="25" y2="75" />
      <line x1="30" y1="85" x2="25" y2="85" />
      <line x1="50" y1="75" x2="55" y2="75" />
      <line x1="50" y1="85" x2="55" y2="85" />
      {/* AI chip/circuit on right */}
      <rect x="70" y="70" width="20" height="20" rx="3" />
      <circle cx="80" cy="80" r="5" />
      <line x1="70" y1="75" x2="65" y2="75" />
      <line x1="70" y1="85" x2="65" y2="85" />
      <line x1="90" y1="75" x2="95" y2="75" />
      <line x1="90" y1="85" x2="95" y2="85" />
    </svg>
  );
}

// ============================================
// Default Data
// ============================================

const defaultValuePropositions: ValueProposition[] = [
  {
    label: "VALUE PROPOSITION 1",
    title: "맥락기반 효율화",
    description:
      "맥락을 이해하는 AI가 반복 작업을 빠르게 처리하여 변리사가 고부가가치 업무에 집중할 수 있습니다",
    icon: <StopwatchIcon className="w-36 h-36 sm:w-40 sm:h-40" />,
  },
  {
    label: "VALUE PROPOSITION 2",
    title: "Human-In-The-Loop",
    description:
      "AI는 초안 작성을 보조하고, 최종 결정은 변리사 - 자동화가 아닌 증강의 철학",
    icon: <HumanLoopIcon className="w-36 h-36 sm:w-40 sm:h-40" />,
  },
  {
    label: "VALUE PROPOSITION 3",
    title: "특허 전문 AI 솔루션",
    description:
      "청구범위에서부터 용어검수까지, 점진적으로 더 높은 품질을 달성합니다",
    icon: <BrainAIIcon className="w-36 h-36 sm:w-40 sm:h-40" />,
  },
];

// ============================================
// Main Component
// ============================================

export default function PatentyAiFeature2({
  mode = "dark",
  heading = "변리사를 위한 AI 솔루션",
  subheading = "변리사와 AI의 협업을 위한 최적의 인터페이스",
  valuePropositions = defaultValuePropositions,
}: PatentyAiFeature2Props) {
  const colors = COLORS[mode];

  return (
    <section
      className="w-full py-20 sm:py-28 lg:py-32 px-4 sm:px-6 lg:px-8"
      style={{ backgroundColor: colors.background }}
    >
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 sm:mb-20 lg:mb-24"
        >
          <h2
            className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6"
            style={{ color: colors.textPrimary }}
          >
            {heading}
          </h2>
          <p
            className="text-lg sm:text-xl lg:text-2xl max-w-3xl mx-auto"
            style={{ color: colors.textSecondary }}
          >
            {subheading}
          </p>
        </motion.div>

        {/* Value Propositions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {valuePropositions.map((vp, index) => (
            <motion.div
              key={vp.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="flex flex-col items-start"
            >
              {/* Icon Container */}
              <div
                className="w-full flex items-center justify-center mb-8 h-48 sm:h-56"
                style={{ color: colors.iconColor }}
              >
                {vp.icon}
              </div>

              {/* Label */}
              <p
                className="text-xs sm:text-sm font-medium tracking-wider uppercase mb-3"
                style={{ color: colors.textMuted }}
              >
                {vp.label}
              </p>

              {/* Title */}
              <h3
                className="text-xl sm:text-2xl font-bold mb-4"
                style={{ color: colors.textPrimary }}
              >
                {vp.title}
              </h3>

              {/* Description */}
              <p
                className="text-sm sm:text-base leading-relaxed"
                style={{ color: colors.textSecondary }}
              >
                {vp.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
