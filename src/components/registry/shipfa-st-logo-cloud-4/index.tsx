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
    background: "#1a1d23",
    text: "#e5e7eb",
    accent: "#84cc16",
    highlightBg: "#d1d5db",
    highlightText: "#1a1d23",
  },
  dark: {
    background: "#1a1d23",
    text: "#e5e7eb",
    accent: "#84cc16",
    highlightBg: "#d1d5db",
    highlightText: "#1a1d23",
  },
} as const;

/**
 * 이미지 에셋
 */
const IMAGES = {
  copilot: "/registry/shipfa-st-logo-cloud-4/copilot.png",
  cursor: "/registry/shipfa-st-logo-cloud-4/cursor.jpeg",
  claude: "/registry/shipfa-st-logo-cloud-4/claude.png",
  openai: "/registry/shipfa-st-logo-cloud-4/openai.webp",
  windsurf: "/registry/shipfa-st-logo-cloud-4/windsurf.jpg",
  gemini: "/registry/shipfa-st-logo-cloud-4/gemini.webp",
  grok: "/registry/shipfa-st-logo-cloud-4/grok.jpg",
  deepseek: "/registry/shipfa-st-logo-cloud-4/deepseek.png",
} as const;

/**
 * AI Tool Logo Configuration
 */
const AI_TOOLS = [
  { name: "Github Copilot", bgColor: "#1e1e3f", image: IMAGES.copilot },
  { name: "Cursor", bgColor: "#1a1a1a", image: IMAGES.cursor },
  { name: "Claude", bgColor: "#f5d5a0", image: IMAGES.claude },
  { name: "OpenAI", bgColor: "#10a37f", image: IMAGES.openai },
  { name: "Windsurf", bgColor: "#14b8a6", image: IMAGES.windsurf },
  { name: "Gemini", bgColor: "#ffffff", image: IMAGES.gemini },
  { name: "Grok", bgColor: "#ffffff", image: IMAGES.grok },
  { name: "DeepSeek", bgColor: "#4f46e5", image: IMAGES.deepseek },
] as const;

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { motion } from "motion/react";
import { useState } from "react";
import { Zap } from "lucide-react";
import Image from "next/image";

interface ShipfaStLogoCloud4Props {
  mode?: "light" | "dark";
  logoText?: string;
  logoLabel?: string;
  toolsLabel?: string;
  headline?: string;
  highlightedWord?: string;
  tools?: Array<{
    name: string;
    bgColor: string;
    image: string;
  }>;
}

export default function ShipfaStLogoCloud4({
  mode = "dark",
  logoText = "ShipFast",
  logoLabel = "codebase",
  toolsLabel = "AI",
  headline = "Launch your idea",
  highlightedWord = "INSTANTLY",
  tools = AI_TOOLS as unknown as Array<{ name: string; bgColor: string; image: string }>,
}: ShipfaStLogoCloud4Props) {
  const colors = COLORS[mode];
  const [hoveredTool, setHoveredTool] = useState<string | null>(null);

  return (
    <section
      className="relative w-full py-12 md:py-16"
      style={{ backgroundColor: colors.background }}
    >
      <div className="max-w-3xl mx-auto px-4 md:px-8 space-y-6 md:space-y-8">
        {/* Logo Section */}
        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="relative">
            <div className="flex items-center gap-2">
              <Zap
                className="w-8 h-8 md:w-12 md:h-12"
                fill="#facc15"
                stroke="#facc15"
              />
              <span
                className="text-2xl md:text-4xl font-bold"
                style={{ color: colors.text }}
              >
                {logoText}
              </span>
            </div>
            <span
              className="hidden md:block absolute text-sm font-mono translate-x-2/3 -translate-y-1/2 rotate-6 top-0 right-0"
              style={{ color: colors.accent }}
            >
              {logoLabel}
            </span>
          </div>
        </motion.div>

        {/* Plus Sign */}
        <motion.p
          className="text-center text-3xl md:text-4xl"
          style={{ color: colors.text }}
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, delay: 0.2 }}
        >
          +
        </motion.p>

        {/* AI Tools Grid */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 relative"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          {tools.map((tool, index) => {
            const isLastTool = index === tools.length - 1;

            return (
              <motion.div
                key={tool.name}
                className="relative"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.1 * index }}
                onMouseEnter={() => setHoveredTool(tool.name)}
                onMouseLeave={() => setHoveredTool(null)}
              >
                <motion.div
                  className="w-12 h-12 md:w-16 md:h-16 rounded-lg shadow-lg flex items-center justify-center cursor-pointer overflow-hidden"
                  style={{ backgroundColor: tool.bgColor }}
                  whileHover={{ scale: 1.1, y: -4 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <Image
                    src={tool.image}
                    alt={`${tool.name} logo`}
                    width={64}
                    height={64}
                    className="w-full h-full object-cover"
                  />
                </motion.div>

                {/* Tooltip */}
                {hoveredTool === tool.name && (
                  <motion.div
                    className="absolute -top-10 left-1/2 -translate-x-1/2 px-2 py-1 bg-gray-800 text-white text-xs rounded whitespace-nowrap z-10"
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    {tool.name}
                  </motion.div>
                )}

                {/* AI Label on last tool */}
                {isLastTool && (
                  <span
                    className="hidden md:block absolute text-sm font-mono translate-x-full -translate-y-1/2 rotate-6 -top-3 -right-1"
                    style={{ color: colors.accent }}
                  >
                    {toolsLabel}
                  </span>
                )}
              </motion.div>
            );
          })}
        </motion.div>

        {/* Equals Sign */}
        <motion.p
          className="text-center text-3xl md:text-4xl"
          style={{ color: colors.text }}
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, delay: 0.5 }}
        >
          =
        </motion.p>

        {/* Headline */}
        <motion.div
          className="mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <p
            className="text-center text-2xl md:text-4xl font-bold"
            style={{ color: colors.text }}
          >
            {headline}{" "}
            <motion.span
              className="px-1 md:px-1.5 tracking-wide font-bold"
              style={{
                backgroundColor: colors.highlightBg,
                color: colors.highlightText
              }}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              {highlightedWord}
            </motion.span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
