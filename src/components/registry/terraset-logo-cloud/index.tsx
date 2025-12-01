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
    background: "#E5E3DF",      // 베이지 그레이 배경
    text: "#1A1A1A",            // 다크 텍스트
    border: "#9CA3AF",          // 구분선
  },
  dark: {
    background: "#1A1A1A",
    text: "#F3F4F6",
    border: "#4B5563",
  },
} as const;

/**
 * 컨텐츠 데이터
 */
const CONTENT = {
  label: "PORTFOLIO",
  headline: "Putting philanthropic dollars\nbehind high-quality carbon\nremoval projects.",
  logos: [
    { name: "andes", x: "18%", y: "15%" },
    { name: "CAPTURE6", x: "45%", y: "10%" },
    { name: "CHARM", x: "72%", y: "12%" },
    { name: "climeworks", x: "15%", y: "35%" },
    { name: "GRAPHYTE", x: "42%", y: "37%" },
    { name: "Heirloom", x: "68%", y: "35%" },
    { name: "OCTAVIA CARBON", x: "12%", y: "58%" },
    { name: "PLANETARY", x: "42%", y: "62%" },
    { name: "SPIRITUS", x: "70%", y: "60%" },
    { name: "TerraFixing", x: "18%", y: "82%" },
    { name: "vaulted", x: "48%", y: "80%" },
  ],
} as const;

/**
 * 이미지 에셋
 */
const IMAGES = {} as const;

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { motion } from "motion/react";

interface TerrasetLogoCloudProps {
  mode?: "light" | "dark";
  label?: string;
  headline?: string;
  logos?: Array<{ name: string; x: string; y: string }>;
}

export default function TerrasetLogoCloud({
  mode = "light",
  label = CONTENT.label,
  headline = CONTENT.headline,
  logos = CONTENT.logos,
}: TerrasetLogoCloudProps) {
  const colors = COLORS[mode];
  const headlineLines = headline.split("\n");

  return (
    <section
      className="relative w-full px-8 py-16 md:px-16 md:py-24"
      style={{ backgroundColor: colors.background }}
    >
      <div className="mx-auto max-w-7xl">
        {/* Label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-6"
        >
          <span
            className="text-xs font-medium tracking-wider"
            style={{ color: colors.text, opacity: 0.6 }}
          >
            {label}
          </span>
        </motion.div>

        {/* Headline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-12"
        >
          <h2
            className="text-4xl font-normal leading-tight md:text-5xl lg:text-6xl"
            style={{ color: colors.text }}
          >
            {headlineLines.map((line, i) => (
              <span key={i}>
                {line}
                {i < headlineLines.length - 1 && <br />}
              </span>
            ))}
          </h2>
        </motion.div>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mb-16 h-px w-full origin-left"
          style={{ backgroundColor: colors.border }}
        />

        {/* Logo Cloud */}
        <div className="relative h-[500px] w-full md:h-[600px]">
          {logos.map((logo, index) => (
            <motion.div
              key={logo.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: 0.3 + index * 0.05,
                ease: "easeOut",
              }}
              className="absolute flex items-center"
              style={{
                left: logo.x,
                top: logo.y,
                transform: "translate(-50%, -50%)",
              }}
            >
              <LogoItem name={logo.name} color={colors.text} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Logo Component
function LogoItem({ name, color }: { name: string; color: string }) {
  const isUpperCase = name === name.toUpperCase();
  const fontSize = name.length > 12 ? "text-sm" : "text-base";

  return (
    <div className="flex items-center gap-2 rounded-lg bg-white/40 px-4 py-2 backdrop-blur-sm dark:bg-gray-900/40">
      {/* Icon placeholder - using a simple geometric shape */}
      <div
        className="h-6 w-6 flex-shrink-0 rounded"
        style={{
          backgroundColor: color,
          opacity: 0.2,
        }}
      />
      <span
        className={`whitespace-nowrap font-medium ${fontSize} ${
          isUpperCase ? "tracking-wider" : ""
        }`}
        style={{ color }}
      >
        {name}
      </span>
    </div>
  );
}
