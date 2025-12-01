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
    background: "#ffffff",
    heading: "#0a0a0a",
    linkText: "#404040",
  },
  dark: {
    background: "#0a0a0a",
    heading: "#ffffff",
    linkText: "#a3a3a3",
  },
} as const;

/**
 * 컴포넌트 텍스트 및 링크 정보
 */
const CONTENT = {
  heading: "Built for Industry Leaders",
  linkText: "See Customers",
  linkUrl: "#customers",
} as const;

/**
 * 로고 회사 정보
 */
const LOGOS = [
  { name: "T-Mobile", type: "symbol", text: "T" },
  { name: "Repsol", type: "logo-text", text: "repsol" },
  { name: "RedSmith", type: "text", text: "RedSmith" },
  { name: "PwC", type: "text-lowercase", text: "pwc" },
  { name: "O'Melveny", type: "text", text: "O'Melveny" },
  { name: "BRIDGEWATER", type: "text-uppercase", text: "BRIDGEWATER" },
  { name: "MACFARLANES", type: "text-uppercase", text: "MACFARLANES" },
  { name: "KKR", type: "text-uppercase", text: "KKR" },
  { name: "A&O SHEARMAN", type: "text-uppercase", text: "A&O SHEARMAN" },
  { name: "Gleiss Lutz", type: "serif", text: "Gleiss Lutz" },
  { name: "CMS", type: "text-gray", text: "CMS" },
] as const;

/**
 * 이미지 에셋
 */
const IMAGES = {} as const;

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import "./font.css";

interface HarveyAiLogoCloudProps {
  mode?: "light" | "dark";
  heading?: string;
  linkText?: string;
  linkUrl?: string;
  logos?: Array<{ name: string; type: string; text: string }>;
}

export default function HarveyAiLogoCloud({
  mode = "dark",
  heading = CONTENT.heading,
  linkText = CONTENT.linkText,
  linkUrl = CONTENT.linkUrl,
  logos = [...LOGOS],
}: HarveyAiLogoCloudProps) {
  const colors = COLORS[mode];

  return (
    <section
      className="relative w-full py-20 px-4"
      style={{ backgroundColor: colors.background }}
    >
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center font-serif text-4xl font-normal md:text-5xl"
          style={{
            color: colors.heading,
            fontFamily: "'Instrument Serif', serif"
          }}
        >
          {heading}
        </motion.h2>

        {/* Logo Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-8 flex flex-wrap items-center justify-center gap-x-8 gap-y-8 md:gap-x-12"
        >
          {logos.map((logo, index) => {
            const getLogoStyle = () => {
              const baseStyle = {
                color: colors.heading,
                opacity: 0.7,
              };

              switch (logo.type) {
                case "symbol":
                  return {
                    ...baseStyle,
                    fontSize: "1.875rem",
                    fontWeight: 300,
                    letterSpacing: "0.05em",
                  };
                case "logo-text":
                  return {
                    ...baseStyle,
                    fontSize: "1.125rem",
                    fontWeight: 400,
                    letterSpacing: "0.02em",
                  };
                case "text-lowercase":
                  return {
                    ...baseStyle,
                    fontSize: "1.125rem",
                    fontWeight: 600,
                    letterSpacing: "0.01em",
                  };
                case "text-uppercase":
                  return {
                    ...baseStyle,
                    fontSize: "0.875rem",
                    fontWeight: 500,
                    letterSpacing: "0.1em",
                  };
                case "serif":
                  return {
                    ...baseStyle,
                    fontSize: "1.125rem",
                    fontWeight: 400,
                    fontFamily: "'Instrument Serif', serif",
                  };
                case "text-gray":
                  return {
                    ...baseStyle,
                    fontSize: "1rem",
                    fontWeight: 600,
                    opacity: 0.5,
                    letterSpacing: "0.08em",
                  };
                default:
                  return {
                    ...baseStyle,
                    fontSize: "1rem",
                    fontWeight: 500,
                    letterSpacing: "0.02em",
                  };
              }
            };

            return (
              <motion.div
                key={logo.name}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.05 * index }}
                className="flex items-center justify-center gap-2"
              >
                {logo.type === "logo-text" && (
                  <div
                    className="flex h-5 w-5 items-center justify-center rounded-full"
                    style={{
                      backgroundColor: colors.heading,
                      opacity: 0.7,
                    }}
                  >
                    <div
                      className="h-3 w-3 rounded-full"
                      style={{
                        backgroundColor: colors.background,
                      }}
                    />
                  </div>
                )}
                <div style={getLogoStyle()}>{logo.text}</div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* See Customers Link */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex justify-center"
        >
          <a
            href={linkUrl}
            className="group inline-flex items-center gap-2 text-sm font-medium transition-all"
            style={{ color: colors.linkText }}
          >
            <span>{linkText}</span>
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
