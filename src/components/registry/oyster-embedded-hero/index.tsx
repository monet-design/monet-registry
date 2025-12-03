"use client";

// ============================================================================
// CUSTOMIZATION - 이 섹션의 값들을 수정하여 프로젝트에 맞게 조정하세요
// ============================================================================

const COLORS = {
  light: {
    accent: "#E91E8C", // Pink accent for arrows and headline
  },
  dark: {
    accent: "#FF3DA1",
  },
} as const;

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { motion } from "motion/react";

interface OysterEmbeddedHeroProps {
  mode?: "light" | "dark";
  label?: string;
  headlinePart1?: string;
  headlineAccent?: string;
  headlinePart2?: string;
  description?: string;
  ctaText?: string;
  onCtaClick?: () => void;
}

// Pink arrow decoration component
function ArrowDecoration({
  direction,
  className,
  color,
}: {
  direction: "down-left" | "up-right";
  className?: string;
  color: string;
}) {
  const isDownLeft = direction === "down-left";

  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      style={{
        transform: isDownLeft ? "rotate(135deg)" : "rotate(-45deg)",
      }}
    >
      <path
        d="M5 12L12 5L19 12M12 5V19"
        stroke={color}
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function OysterEmbeddedHero({
  mode = "light",
  label = "OYSTER EMBEDDED",
  headlinePart1 = "Open the doors to",
  headlineAccent = "global\ntalent",
  headlinePart2 = "for your customers",
  description = "Enable your customers to hire anywhere in the world—right from your product.\nUse Oyster's embeddable APIs and no-code solutions to expand into a new\ncategory in days. Improve the world of work with us.",
  ctaText = "Contact Us",
  onCtaClick,
}: OysterEmbeddedHeroProps) {
  const colors = COLORS[mode];
  return (
    <section className="relative min-h-screen w-full bg-white overflow-hidden flex flex-col items-center justify-center py-20">
      {/* Left arrow decoration */}
      <motion.div
        className="absolute left-[6%] top-[55%]"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <ArrowDecoration direction="down-left" className="w-6 h-6" color={colors.accent} />
      </motion.div>

      {/* Right arrow decoration */}
      <motion.div
        className="absolute right-[6%] top-[60%]"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
      >
        <ArrowDecoration direction="up-right" className="w-6 h-6" color={colors.accent} />
      </motion.div>

      {/* Content container */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        {/* Label */}
        <motion.p
          className="text-xs tracking-[0.3em] text-neutral-800 mb-8 font-medium"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {label}
        </motion.p>

        {/* Headline */}
        <motion.h1
          className="text-4xl md:text-5xl lg:text-6xl leading-tight mb-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <span
            className="text-neutral-900"
            style={{
              fontFamily: "'Instrument Serif', serif",
              fontStyle: "italic",
            }}
          >
            {headlinePart1}{" "}
          </span>
          <span
            style={{
              fontFamily: "'Instrument Serif', serif",
              fontStyle: "italic",
              color: colors.accent,
            }}
          >
            {headlineAccent.split("\n").map((line, i) => (
              <span key={i}>
                {line}
                {i < headlineAccent.split("\n").length - 1 && <br />}
              </span>
            ))}
          </span>{" "}
          <span
            className="text-neutral-900"
            style={{
              fontFamily: "'Instrument Serif', serif",
              fontStyle: "italic",
            }}
          >
            {headlinePart2}
          </span>
        </motion.h1>

        {/* Description */}
        <motion.p
          className="text-sm md:text-base text-neutral-600 mb-10 leading-relaxed max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {description.split("\n").map((line, i) => (
            <span key={i}>
              {line}
              {i < description.split("\n").length - 1 && <br />}
            </span>
          ))}
        </motion.p>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <button
            onClick={onCtaClick}
            className="inline-flex items-center justify-center px-8 py-3.5 bg-neutral-900 text-white text-sm font-medium rounded-full hover:bg-neutral-800 transition-colors duration-200"
          >
            {ctaText}
          </button>
        </motion.div>
      </div>

      {/* Google Font import for Instrument Serif */}
      <link
        href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&display=swap"
        rel="stylesheet"
      />
    </section>
  );
}
