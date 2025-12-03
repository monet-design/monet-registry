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
    // Primary 배경 (주황색)
    background: "#E95320",
    // 버튼 색상 (녹색)
    button: "#6CA651",
    buttonHover: "#5A8A42",
    // 가격 텍스트 색상
    priceText: "#E95320",
  },
  dark: {
    background: "#E95320",
    button: "#6CA651",
    buttonHover: "#5A8A42",
    priceText: "#E95320",
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

// Stick Figure SVG Component
function StickFigure({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 120 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Head */}
      <circle cx="60" cy="30" r="20" stroke="white" strokeWidth="4" fill="none" />
      {/* Eyes */}
      <circle cx="53" cy="28" r="3" fill="white" />
      <circle cx="67" cy="28" r="3" fill="white" />
      {/* Smile */}
      <path d="M52 38 Q60 45 68 38" stroke="white" strokeWidth="2" fill="none" />
      {/* Body */}
      <line x1="60" y1="50" x2="60" y2="110" stroke="white" strokeWidth="4" />
      {/* Left Arm (holding pointer) */}
      <line x1="60" y1="70" x2="30" y2="90" stroke="white" strokeWidth="4" />
      {/* Right Arm (pointing up) */}
      <line x1="60" y1="70" x2="95" y2="50" stroke="white" strokeWidth="4" />
      {/* Pointer stick */}
      <line x1="95" y1="50" x2="115" y2="20" stroke="white" strokeWidth="3" />
      {/* Left Leg */}
      <line x1="60" y1="110" x2="40" y2="160" stroke="white" strokeWidth="4" />
      {/* Right Leg */}
      <line x1="60" y1="110" x2="80" y2="160" stroke="white" strokeWidth="4" />
      {/* Left Foot */}
      <line x1="40" y1="160" x2="30" y2="160" stroke="white" strokeWidth="4" />
      {/* Right Foot */}
      <line x1="80" y1="160" x2="90" y2="160" stroke="white" strokeWidth="4" />
    </svg>
  );
}

interface PriceItem {
  service: string;
  price: string;
}

interface PricingFonerescueProps {
  mode?: "light" | "dark";
  title?: string;
  subtitle?: string;
  phoneNumber?: string;
  deviceName?: string;
  priceItems?: PriceItem[];
  ctaText?: string;
  buttonText?: string;
  onButtonClick?: () => void;
}

const defaultPriceItems: PriceItem[] = [
  { service: "Front Screen Cracked - Replacement", price: "£59" },
  { service: "Back Housing Cracked - Replacement", price: "£29" },
  { service: "Fix Water Damaged Phone", price: "£45" },
  { service: "Fix or Replace Power Button", price: "£35" },
  { service: "Fix or Replace Home Button", price: "£35" },
  { service: "Full Front & Back Cosmetic Replacement", price: "£80" },
  { service: "Full Colour Conversion from", price: "£80" },
];

export default function PricingFonerescue({
  mode = "light",
  title = "WHAT ARE THE COSTS",
  subtitle = "Popular repairs for the iphone 4s are shown below",
  phoneNumber = "0800 043 0189",
  deviceName = "iphone 4s",
  priceItems = defaultPriceItems,
  ctaText = "For a full list of repairs please hit the button below:",
  buttonText = "PRICE LIST",
  onButtonClick,
}: PricingFonerescueProps) {
  const colors = COLORS[mode];

  return (
    <section
      className="relative w-full py-12 md:py-20 overflow-hidden"
      style={{ backgroundColor: colors.background }}
    >
      <div className="max-w-5xl mx-auto px-4 md:px-6">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-2xl md:text-3xl font-bold text-white text-center mb-2"
        >
          {title}
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-sm md:text-base text-white text-center mb-1"
        >
          {subtitle}
        </motion.p>

        {/* Phone number line */}
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="text-sm md:text-base text-white text-center mb-8"
        >
          for different models or repair costs call{" "}
          <span className="font-bold">{phoneNumber}</span>
        </motion.p>

        {/* Main Content Area */}
        <div className="flex items-end justify-center gap-4 md:gap-8">
          {/* Stick Figure */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="hidden md:block"
          >
            <StickFigure className="w-24 h-40" />
          </motion.div>

          {/* Price Table */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-white rounded-lg shadow-lg overflow-hidden max-w-md w-full"
          >
            {/* Device Tab Header */}
            <div className="flex justify-center pt-0">
              <div
                className="px-6 py-2 text-sm font-medium text-white rounded-b-lg"
                style={{ backgroundColor: colors.background }}
              >
                {deviceName}
              </div>
            </div>

            {/* Price List */}
            <div className="px-4 py-3">
              {priceItems.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.4 + index * 0.05 }}
                  className={`flex justify-between items-center py-2 ${
                    index !== priceItems.length - 1
                      ? "border-b border-gray-100"
                      : ""
                  }`}
                >
                  <span className="text-xs md:text-sm text-gray-800 pr-4">
                    {item.service}
                  </span>
                  <span
                    className="text-xs md:text-sm font-bold whitespace-nowrap"
                    style={{ color: colors.priceText }}
                  >
                    {item.price}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* CTA Text */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="text-sm md:text-base text-white text-center mt-8 mb-4"
        >
          {ctaText}
        </motion.p>

        {/* Button */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="flex justify-center"
        >
          <button
            onClick={onButtonClick}
            className="px-8 py-3 text-sm font-bold text-white rounded-md transition-all duration-300 hover:scale-105 hover:shadow-lg"
            style={{ backgroundColor: colors.button }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.backgroundColor = colors.buttonHover)
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.backgroundColor = colors.button)
            }
          >
            {buttonText}
          </button>
        </motion.div>
      </div>
    </section>
  );
}
