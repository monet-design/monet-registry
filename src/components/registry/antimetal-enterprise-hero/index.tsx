"use client";

// ============================================================================
// CUSTOMIZATION - 이 섹션의 값들을 수정하여 프로젝트에 맞게 조정하세요
// ============================================================================

/**
 * 커스텀 색상 (브랜드 컬러)
 */
const COLORS = {
  light: {
    background: "#f7f7f7",     // 라이트 그레이 배경
    cta: "#1a1a1a",            // 다크 버튼
    ctaHover: "#2a2a2a",
    ctaIcon: "#d4f94e",        // 네온 그린
  },
  dark: {
    background: "#0a0a0a",
    cta: "#f5f5f5",
    ctaHover: "#e5e5e5",
    ctaIcon: "#b8e625",
  },
} as const;

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { motion } from "motion/react";
import { Terminal } from "lucide-react";

interface AntimetalEnterpriseHeroProps {
  mode?: "light" | "dark";
  headline?: string;
  subheadline?: string;
  ctaText?: string;
  onCtaClick?: () => void;
}

// Dot Pattern Component
function DotPattern({
  className = "",
  dotSize = 2,
  gap = 12,
}: {
  className?: string;
  dotSize?: number;
  gap?: number;
}) {
  return (
    <svg className={className} width="100%" height="100%">
      <defs>
        <pattern
          id="dot-pattern"
          x="0"
          y="0"
          width={gap}
          height={gap}
          patternUnits="userSpaceOnUse"
        >
          <circle cx={dotSize} cy={dotSize} r={dotSize / 2} fill="#d1d5db" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#dot-pattern)" />
    </svg>
  );
}

// Circle decoration component
function CircleDecoration({
  size,
  className,
  delay = 0,
}: {
  size: number;
  className: string;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, delay }}
      className={`absolute rounded-full border border-gray-200 ${className}`}
      style={{ width: size, height: size }}
    />
  );
}

export default function AntimetalEnterpriseHero({
  mode = "light",
  headline = "Simplifying even the\nmost complex infrastructure",
  subheadline = "Why the largest and fastest growing companies choose Antimetal.",
  ctaText = "Book a demo",
  onCtaClick,
}: AntimetalEnterpriseHeroProps) {
  const colors = COLORS[mode];

  return (
    <section className="relative w-full min-h-[500px] overflow-hidden" style={{ backgroundColor: colors.background }}>
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Dot pattern blocks */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="absolute top-8 left-[10%] w-16 h-16"
        >
          <DotPattern />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="absolute top-4 right-[15%] w-20 h-20"
        >
          <DotPattern />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="absolute top-1/4 right-[8%] w-24 h-24"
        >
          <DotPattern />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.35 }}
          className="absolute top-1/3 left-[5%] w-20 h-20"
        >
          <DotPattern />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="absolute bottom-1/4 left-[12%] w-16 h-16"
        >
          <DotPattern />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.45 }}
          className="absolute bottom-1/3 right-[10%] w-20 h-20"
        >
          <DotPattern />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.55 }}
          className="absolute bottom-8 left-[25%] w-16 h-16"
        >
          <DotPattern />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="absolute bottom-12 right-[25%] w-20 h-20"
        >
          <DotPattern />
        </motion.div>

        {/* Circle decorations - left side */}
        <CircleDecoration
          size={40}
          className="top-1/4 left-[3%]"
          delay={0.3}
        />
        <CircleDecoration
          size={32}
          className="top-[45%] left-[2%]"
          delay={0.4}
        />
        <CircleDecoration
          size={36}
          className="bottom-1/4 left-[4%]"
          delay={0.5}
        />

        {/* Circle decorations - right side */}
        <CircleDecoration
          size={40}
          className="top-1/4 right-[3%]"
          delay={0.35}
        />
        <CircleDecoration
          size={32}
          className="top-[45%] right-[2%]"
          delay={0.45}
        />
        <CircleDecoration
          size={36}
          className="bottom-1/4 right-[4%]"
          delay={0.55}
        />

        {/* Additional scattered circles */}
        <CircleDecoration
          size={28}
          className="top-16 left-[18%]"
          delay={0.4}
        />
        <CircleDecoration
          size={28}
          className="top-20 right-[20%]"
          delay={0.45}
        />
        <CircleDecoration
          size={24}
          className="bottom-20 left-[20%]"
          delay={0.5}
        />
        <CircleDecoration
          size={24}
          className="bottom-16 right-[18%]"
          delay={0.55}
        />
      </div>

      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-[500px] px-6 py-20">
        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-center text-3xl sm:text-4xl md:text-5xl lg:text-[56px] font-bold text-[#0f0f0f] leading-[1.1] tracking-tight whitespace-pre-line mb-6"
        >
          {headline}
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center text-base sm:text-lg text-[#6b6b6b] mb-10 max-w-xl"
        >
          {subheadline}
        </motion.p>

        {/* CTA Button */}
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={onCtaClick}
          className="flex items-center gap-2 px-5 py-3 text-white rounded-lg shadow-lg transition-colors"
          style={{ backgroundColor: colors.cta }}
          onMouseOver={(e) => (e.currentTarget.style.backgroundColor = colors.ctaHover)}
          onMouseOut={(e) => (e.currentTarget.style.backgroundColor = colors.cta)}
        >
          <span className="flex items-center justify-center w-6 h-6 rounded" style={{ backgroundColor: colors.ctaIcon }}>
            <Terminal className="w-4 h-4" style={{ color: colors.cta }} />
          </span>
          <span className="text-sm font-medium">{ctaText}</span>
        </motion.button>
      </div>
    </section>
  );
}
