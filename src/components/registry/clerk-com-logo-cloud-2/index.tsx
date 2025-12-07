"use client";

// ============================================================================
// CUSTOMIZATION - 이 섹션의 값들을 수정하여 프로젝트에 맞게 조정하세요
// ============================================================================

/**
 * 커스텀 색상 (브랜드 컬러)
 */
const COLORS = {
  light: {
    background: "#FFFFFF",
    titleText: "#6B7280", // gray-500
    logoText: "#1F2937", // gray-800
  },
  dark: {
    background: "#111827", // gray-900
    titleText: "#9CA3AF", // gray-400
    logoText: "#F9FAFB", // gray-50
  },
} as const;

/**
 * Logo Cloud 콘텐츠
 */
const CONTENT = {
  title: "Trusted by fast growing\ncompanies around the world",
  logos: [
    { name: "Streamline", style: "normal" as const },
    { name: "braintrust", style: "italic" as const },
    { name: "HyperBeam", style: "normal" as const },
    { name: "Consensus", style: "normal" as const },
  ],
} as const;

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { motion } from "motion/react";

interface ClerkComLogoCloud2Props {
  mode?: "light" | "dark";
}

// Logo placeholder component
function LogoPlaceholder({
  name,
  style,
  textColor,
}: {
  name: string;
  style: "normal" | "italic";
  textColor: string;
}) {
  return (
    <span
      className={`text-lg font-semibold ${style === "italic" ? "italic" : ""}`}
      style={{ color: textColor }}
    >
      {style === "normal" && name === "HyperBeam" && (
        <span className="flex items-center gap-1">
          <span className="inline-block w-5 h-5 rounded bg-purple-500" />
          {name}
        </span>
      )}
      {style === "normal" && name === "Consensus" && (
        <span className="flex items-center gap-1">
          <span className="text-purple-600">{">"}</span>
          {name}
        </span>
      )}
      {style === "normal" && name === "Streamline" && (
        <span className="flex items-center gap-2">
          <svg
            className="w-5 h-5"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M12 2L2 7l10 5 10-5-10-5z" />
            <path d="M2 17l10 5 10-5" />
            <path d="M2 12l10 5 10-5" />
          </svg>
          {name}
        </span>
      )}
      {style === "italic" && name}
    </span>
  );
}

export default function ClerkComLogoCloud2({
  mode = "light",
}: ClerkComLogoCloud2Props) {
  const colors = COLORS[mode];

  return (
    <section
      className="relative w-full py-8 md:py-12"
      style={{ backgroundColor: colors.background }}
    >
      <div className="mx-auto w-full px-6 sm:max-w-[40rem] md:max-w-[48rem] md:px-8 lg:max-w-[64rem] xl:max-w-[80rem]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8"
        >
          {/* Title */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-sm font-medium max-w-[200px] whitespace-pre-line leading-relaxed"
            style={{ color: colors.titleText }}
          >
            {CONTENT.title}
          </motion.p>

          {/* Logos */}
          <div className="flex flex-wrap items-center gap-8 lg:gap-12">
            {CONTENT.logos.map((logo, index) => (
              <motion.div
                key={logo.name}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
              >
                <LogoPlaceholder
                  name={logo.name}
                  style={logo.style}
                  textColor={colors.logoText}
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
