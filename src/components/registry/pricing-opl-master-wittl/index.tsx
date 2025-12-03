"use client";

// ============================================================================
// CUSTOMIZATION - 이 섹션의 값들을 수정하여 프로젝트에 맞게 조정하세요
// ============================================================================

/**
 * 커스텀 색상 (브랜드 컬러)
 */
const COLORS = {
  light: {
    // 왼쪽 그라데이션 배경
    gradientFrom: "#2a3d3d",
    gradientVia: "#3a5555",
    gradientTo: "#4a6b6b",
    // 오른쪽 배경
    rightBg: "#f5f3ef",
    // 타이틀 (라임 그린)
    titleColor: "#c8e64d",
    // 가격 텍스트 (다크 틸)
    priceColor: "#2d4a4a",
    // 본문 텍스트
    textPrimary: "#2d4a4a",
    textSecondary: "#4a6b6b",
    // 버튼
    buttonBg: "#f5f3ef",
    buttonText: "#2d4a4a",
    buttonBorder: "#d1cfc9",
    // 캡션 텍스트
    captionText: "#8b9a9a",
  },
  dark: {
    gradientFrom: "#1a2626",
    gradientVia: "#253535",
    gradientTo: "#304545",
    rightBg: "#1a2020",
    titleColor: "#d4f05a",
    priceColor: "#c8e64d",
    textPrimary: "#e8e8e8",
    textSecondary: "#a8b8b8",
    buttonBg: "#2d4a4a",
    buttonText: "#f5f3ef",
    buttonBorder: "#3d5a5a",
    captionText: "#6a7a7a",
  },
} as const;

/**
 * 컨텐츠 기본값
 */
const DEFAULT_CONTENT = {
  title: "Fair pricing.",
  subtitle: "No hidden fees.",
  price: "$59",
  pricePeriod: "per\nmonth",
  buttonText: "Get started - Join beta",
  buttonCaption: "No credit card required",
  features: [
    "Free during beta",
    "Unlimited jobs",
    "Unlimited candidates",
    "Unlimited team members",
    "Career pages",
    "Job pages and application forms",
    "Customizable hiring pipeline",
    "Customizable review system",
    "Candidate messaging via email",
    "Candidate notes and comments",
  ],
};

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { motion } from "motion/react";
import "./font.css";

interface PricingOplMasterWittlProps {
  mode?: "light" | "dark";
  title?: string;
  subtitle?: string;
  price?: string;
  pricePeriod?: string;
  buttonText?: string;
  buttonCaption?: string;
  features?: string[];
  onButtonClick?: () => void;
}

export default function PricingOplMasterWittl({
  mode = "light",
  title = DEFAULT_CONTENT.title,
  subtitle = DEFAULT_CONTENT.subtitle,
  price = DEFAULT_CONTENT.price,
  pricePeriod = DEFAULT_CONTENT.pricePeriod,
  buttonText = DEFAULT_CONTENT.buttonText,
  buttonCaption = DEFAULT_CONTENT.buttonCaption,
  features = DEFAULT_CONTENT.features,
  onButtonClick,
}: PricingOplMasterWittlProps) {
  const colors = COLORS[mode];

  return (
    <section className="relative w-full overflow-hidden">
      <div className="flex flex-col md:flex-row min-h-[500px]">
        {/* Left Side - Gradient Background */}
        <motion.div
          className="relative flex-1 p-8 md:p-12 lg:p-16 flex flex-col justify-between overflow-hidden"
          style={{
            background: `linear-gradient(135deg, ${colors.gradientFrom} 0%, ${colors.gradientVia} 50%, ${colors.gradientTo} 100%)`,
          }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Gradient Light Effect */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: `radial-gradient(ellipse 80% 60% at 60% 40%, rgba(255, 255, 255, 0.15) 0%, transparent 60%)`,
            }}
          />

          {/* Title */}
          <motion.div
            className="relative z-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h1
              className="pricing-opl-master-wittl-serif text-4xl md:text-5xl lg:text-6xl leading-tight"
              style={{ color: colors.titleColor }}
            >
              {title}
              <br />
              {subtitle}
            </h1>
          </motion.div>

          {/* CTA Button and Caption */}
          <motion.div
            className="relative z-10 mt-8 md:mt-0"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <motion.button
              onClick={onButtonClick}
              className="px-6 py-3 rounded-full text-sm font-medium border transition-all duration-200"
              style={{
                backgroundColor: colors.buttonBg,
                color: colors.buttonText,
                borderColor: colors.buttonBorder,
              }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {buttonText}
            </motion.button>
            <p
              className="text-xs mt-3"
              style={{ color: colors.captionText }}
            >
              {buttonCaption}
            </p>
          </motion.div>
        </motion.div>

        {/* Right Side - Features */}
        <motion.div
          className="flex-1 p-8 md:p-12 lg:p-16 flex flex-col"
          style={{ backgroundColor: colors.rightBg }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          {/* Price */}
          <motion.div
            className="mb-8 flex items-baseline gap-1"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <span
              className="text-5xl md:text-6xl lg:text-7xl font-semibold"
              style={{ color: colors.priceColor }}
            >
              {price}
            </span>
            <span
              className="text-sm whitespace-pre-line leading-tight"
              style={{ color: colors.textSecondary }}
            >
              {pricePeriod}
            </span>
          </motion.div>

          {/* Features List */}
          <motion.ul
            className="space-y-2.5"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            {features.map((feature, index) => (
              <motion.li
                key={index}
                className="text-sm flex items-start gap-2"
                style={{ color: colors.textPrimary }}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.4 + index * 0.05 }}
              >
                <span
                  className="text-xs mt-1"
                  style={{ color: colors.textSecondary }}
                >
                  -
                </span>
                <span>{feature}</span>
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>
      </div>
    </section>
  );
}
