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
    // Background
    background: "#333333",      // 다크 그레이 배경
    statsBackground: "#262626",  // Stats 섹션 배경
    // Primary accent
    accent: "#B9A6EE",          // 라벤더 퍼플
    accentHover: "#A896DE",     // 호버 상태
    // Target center
    targetBg: "#0F091E",        // 다크 퍼플 배경
  },
  dark: {
    background: "#1a1a1a",
    statsBackground: "#0f0f0f",
    accent: "#C9B6FE",
    accentHover: "#B9A6EE",
    targetBg: "#1a0f2e",
  },
} as const;

/**
 * 이미지 에셋
 * - path: 이미지 경로
 * - alt: 접근성용 대체 텍스트
 * - prompt: AI 이미지 재생성용 상세 프롬프트
 */
const IMAGES = {
  hero: {
    path: "/registry/kinetic-hero/hero-image.png",
    alt: "Kinetic Hub - Automotive repair facility",
    prompt: `Modern automotive repair facility interior with advanced robotics and AI systems.
Style: Industrial, high-tech, professional automotive service environment
Layout: Wide-angle view of repair bay with vehicles, robotic equipment, and calibration systems
Composition:
- Center: Modern vehicle on lift/platform with robotic calibration equipment
- Left/Right: Additional service bays with diagnostic stations
- Overhead: Clean, well-lit professional workspace with organized tools
- Foreground: Precision calibration robotics and ADAS systems
Color palette: Clean grays, white walls, industrial blues, professional lighting
Elements: Vehicles, robotic arms, calibration targets, diagnostic screens, tool stations
Mood: Professional, cutting-edge, efficient, modern automotive technology
Technical: 16:9 aspect ratio, professional photography, high detail`,
  },
} as const;

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { motion } from "motion/react";
import { ChevronRight } from "lucide-react";
import Image from "next/image";

interface StatItem {
  label: string;
  sublabel: string;
  type: "number" | "bars" | "target";
  kineticValue?: string;
  otherValue?: string;
}

interface KineticHeroProps {
  mode?: "light" | "dark";
  headline?: string;
  description?: string;
  secondaryDescription?: string;
  ctaText?: string;
  ctaHref?: string;
  heroImage?: string;
  stats?: StatItem[];
  kineticLabel?: string;
  otherLabel?: string;
}

export default function KineticHero({
  mode = "light",
  headline = "Repair modern vehicles\nat scale with effortless\nspeed and precision",
  description = "Kinetic Hubs leverage robotics, proprietary AI, and specialized expertise to automate digital collision repair across all makes and models.",
  secondaryDescription = "We help businesses adapt to the evolving automotive landscape by repairing digital collision damage in minutes rather than hours, increasing capacity, and growing revenue with unparalleled speed and precision.",
  ctaText = "Explore Kinetic Hubs",
  ctaHref = "#",
  heroImage = IMAGES.hero.path,
  kineticLabel = "KINETIC PERFORMANCE",
  otherLabel = "OTHER PROVIDERS",
  stats = [
    {
      label: "CAPACITY: CALIBRATIONS PER DAY",
      sublabel: "Average daily calibrations per location",
      type: "number",
      kineticValue: "80",
      otherValue: "10",
    },
    {
      label: "SPEED: END-TO-END CYCLE TIME",
      sublabel: "Average time from pick-up to drop-off",
      type: "bars",
      kineticValue: "0 minutes",
      otherValue: "0 hours",
    },
    {
      label: "PRECISION: TARGET PLACEMENT",
      sublabel: "Tolerance",
      type: "target",
    },
  ],
}: KineticHeroProps) {
  const colors = COLORS[mode];

  return (
    <section className="relative w-full" style={{ backgroundColor: colors.background }}>
      {/* Top Section - Header */}
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-20">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left - Headline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="font-serif text-4xl font-light leading-tight tracking-tight text-white md:text-5xl lg:text-[3.5rem]">
              {headline.split("\n").map((line, i) => (
                <span key={i}>
                  {line}
                  {i < headline.split("\n").length - 1 && <br />}
                </span>
              ))}
            </h1>
          </motion.div>

          {/* Right - Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex flex-col justify-center space-y-6"
          >
            <p className="text-base leading-relaxed text-gray-300">
              {description}
            </p>
            <p className="text-base leading-relaxed text-gray-300">
              {secondaryDescription}
            </p>
            <a
              href={ctaHref}
              className="group inline-flex items-center gap-2 text-white transition-colors"
              onMouseEnter={(e) => (e.currentTarget.style.color = colors.accent)}
              onMouseLeave={(e) => (e.currentTarget.style.color = "")}
            >
              <span
                className="flex h-8 w-8 items-center justify-center rounded"
                style={{ backgroundColor: `${colors.accent}33` }}
              >
                <ChevronRight className="h-4 w-4" style={{ color: colors.accent }} />
              </span>
              <span className="text-base font-medium">{ctaText}</span>
            </a>
          </motion.div>
        </div>
      </div>

      {/* Hero Image */}
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="relative mx-auto max-w-7xl px-6 lg:px-8"
      >
        <div className="relative aspect-[16/9] w-full overflow-hidden">
          <Image
            src={heroImage}
            alt="Kinetic Hub - Automotive repair facility"
            fill
            className="object-cover"
            priority
          />
        </div>
      </motion.div>

      {/* Stats Section */}
      <div className="px-6 py-12 lg:px-8 lg:py-16" style={{ backgroundColor: colors.statsBackground }}>
        <div className="mx-auto max-w-7xl">
          {/* Legend */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mb-8 flex items-center gap-6"
          >
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full" style={{ backgroundColor: colors.accent }} />
              <span className="text-xs font-medium uppercase tracking-wider text-white">
                {kineticLabel}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-gray-500" />
              <span className="text-xs font-medium uppercase tracking-wider text-gray-500">
                {otherLabel}
              </span>
            </div>
          </motion.div>

          {/* Divider */}
          <div className="mb-10 h-px w-full bg-gray-700" />

          {/* Stats Grid */}
          <div className="grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                className={`${index < stats.length - 1 ? "md:border-r md:border-gray-700 md:pr-8" : ""}`}
              >
                <div className="mb-6">
                  <h3 className="text-xs font-semibold uppercase tracking-wider text-white">
                    {stat.label}
                  </h3>
                  <p className="mt-1 text-xs text-gray-500">{stat.sublabel}</p>
                </div>

                {stat.type === "number" && (
                  <div className="flex items-baseline">
                    <span className="font-serif text-[120px] font-extralight leading-none tracking-tight text-white">
                      {stat.kineticValue}
                    </span>
                    <span className="ml-1 text-4xl font-light" style={{ color: colors.accent }}>
                      +
                    </span>
                    <span className="ml-2 text-4xl text-gray-500">
                      /{stat.otherValue}
                    </span>
                  </div>
                )}

                {stat.type === "bars" && (
                  <div className="space-y-4">
                    <div>
                      <p className="mb-2 text-sm" style={{ color: colors.accent }}>
                        {stat.kineticValue}
                      </p>
                      <div className="flex gap-[2px]">
                        {Array.from({ length: 40 }).map((_, i) => (
                          <motion.div
                            key={i}
                            initial={{ scaleY: 0 }}
                            animate={{ scaleY: 1 }}
                            transition={{ duration: 0.3, delay: 0.7 + i * 0.02 }}
                            className="h-4 w-1 origin-bottom"
                            style={{ backgroundColor: colors.accent }}
                          />
                        ))}
                      </div>
                    </div>
                    <div>
                      <p className="mb-2 text-sm text-gray-500">
                        {stat.otherValue}
                      </p>
                      <div className="flex gap-[2px]">
                        {Array.from({ length: 40 }).map((_, i) => (
                          <motion.div
                            key={i}
                            initial={{ scaleY: 0 }}
                            animate={{ scaleY: 1 }}
                            transition={{ duration: 0.3, delay: 0.9 + i * 0.02 }}
                            className="h-4 w-1 origin-bottom bg-gray-600"
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {stat.type === "target" && (
                  <div className="flex justify-center md:justify-start">
                    <div className="relative h-40 w-40">
                      {/* Outer dashed circle */}
                      <svg
                        className="absolute inset-0 h-full w-full"
                        viewBox="0 0 160 160"
                      >
                        <circle
                          cx="80"
                          cy="80"
                          r="75"
                          fill="none"
                          stroke="#4B5563"
                          strokeWidth="2"
                          strokeDasharray="6 4"
                        />
                      </svg>
                      {/* Inner filled circle - dark purple */}
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.8 }}
                        className="absolute left-1/2 top-1/2 h-28 w-28 -translate-x-1/2 -translate-y-1/2 rounded-full"
                        style={{ backgroundColor: colors.targetBg }}
                      />
                      {/* Center dot - purple */}
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.3, delay: 1.1 }}
                        className="absolute left-1/2 top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full"
                        style={{ backgroundColor: colors.accent }}
                      />
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
