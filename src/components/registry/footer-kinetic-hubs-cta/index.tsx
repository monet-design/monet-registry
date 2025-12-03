"use client";

// ============================================================================
// CUSTOMIZATION - 이 섹션의 값들을 수정하여 프로젝트에 맞게 조정하세요
// ============================================================================

/**
 * 커스텀 색상 (브랜드 컬러)
 */
const COLORS = {
  background: "#1A1A1A",
  textPrimary: "#FFFFFF",
  textSecondary: "#9CA3AF",
  accent: "#A78BFA", // 라벤더/보라색 아이콘
  accentHover: "#C4B5FD",
} as const;

/**
 * 기본 텍스트 콘텐츠
 */
const DEFAULT_CONTENT = {
  headingLine1: "Get access to Kinetic ID",
  headingLine2: "today",
  description:
    "Sign up now. We'll notify you via email when your account is active and provide login credentials and instructions.",
  buttonText: "Sign up",
} as const;

/**
 * 이미지 에셋
 */
const IMAGES = {
  hero: {
    path: "/registry/footer-kinetic-hubs-cta/hero.jpg",
    alt: "Two professionals reviewing information on a tablet device at an automotive service center",
    prompt: `<is_transparent_background>false</is_transparent_background>
<summary>Professional business interaction with tablet in automotive environment</summary>
<mood>Professional, collaborative, modern technology in traditional industry setting</mood>
<background_summary>Blurred car dealership or automotive service center interior with silver/gray vehicles visible</background_summary>
<primary_element>Two Asian professionals - a man in glasses wearing a gray shirt pointing at a rugged tablet device held by a woman in black attire. They are both looking at the tablet screen with engaged expressions. Center frame, facing slightly toward each other.</primary_element>
<etc_element>The tablet appears to be an industrial/rugged model. Natural daylight coming from windows in background.</etc_element>`,
  },
} as const;

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";

interface FooterKineticHubsCtaProps {
  headingLine1?: string;
  headingLine2?: string;
  description?: string;
  buttonText?: string;
  buttonHref?: string;
  imageSrc?: string;
  imageAlt?: string;
}

export default function FooterKineticHubsCta({
  headingLine1 = DEFAULT_CONTENT.headingLine1,
  headingLine2 = DEFAULT_CONTENT.headingLine2,
  description = DEFAULT_CONTENT.description,
  buttonText = DEFAULT_CONTENT.buttonText,
  buttonHref = "#",
  imageSrc = IMAGES.hero.path,
  imageAlt = IMAGES.hero.alt,
}: FooterKineticHubsCtaProps) {
  return (
    <footer
      className="relative w-full overflow-hidden"
      style={{ backgroundColor: COLORS.background }}
    >
      <div className="flex flex-col lg:flex-row min-h-[400px] lg:min-h-[480px]">
        {/* Left Content Section */}
        <div className="flex-1 flex flex-col justify-center px-8 md:px-12 lg:px-16 xl:px-24 py-12 lg:py-16">
          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl lg:text-[42px] font-light leading-tight tracking-tight mb-8 lg:mb-12"
            style={{ color: COLORS.textPrimary }}
          >
            {headingLine1}
            <br />
            {headingLine2}
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-sm md:text-base leading-relaxed mb-8 lg:mb-12 max-w-md"
            style={{ color: COLORS.textSecondary }}
          >
            {description}
          </motion.p>

          {/* Sign Up Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <a
              href={buttonHref}
              className="group inline-flex items-center gap-3 transition-opacity duration-300 hover:opacity-80"
            >
              {/* Icon Square */}
              <span
                className="flex items-center justify-center w-8 h-8 rounded-sm"
                style={{ backgroundColor: COLORS.accent }}
              >
                <ArrowUpRight className="w-4 h-4 text-gray-900" strokeWidth={2.5} />
              </span>
              {/* Button Text */}
              <span
                className="text-sm font-medium"
                style={{ color: COLORS.textPrimary }}
              >
                {buttonText}
              </span>
            </a>
          </motion.div>
        </div>

        {/* Right Image Section */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex-1 relative min-h-[300px] lg:min-h-full"
        >
          <img
            src={imageSrc}
            alt={imageAlt}
            className="absolute inset-0 w-full h-full object-cover"
          />
        </motion.div>
      </div>
    </footer>
  );
}
