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
    background: "#F3F8FC",
    cardBg: "#FFFFFF",
    cardBorder: "#E5E7EB",
    buttonBg: "#1A1A1A",
    buttonText: "#FFFFFF",
    textPrimary: "#0A0A0A",
    textSecondary: "#6B7280",
  },
  dark: {
    background: "#0F0F0F",
    cardBg: "#1A1A1A",
    cardBorder: "#2D2D2D",
    buttonBg: "#FFFFFF",
    buttonText: "#0A0A0A",
    textPrimary: "#FFFFFF",
    textSecondary: "#9CA3AF",
  },
} as const;

/**
 * 기본 가격 패키지 데이터
 */
const DEFAULT_PACKAGES = [
  {
    number: "01",
    title: "DEV ONLY",
    description: "Looking for a clean and fast build for your design? I'm your man.",
    price: "$8k",
  },
  {
    number: "02",
    title: "DESIGN + DEV",
    description: "Don't have a design? I can create a beautiful website in no time.",
    price: "$12k",
  },
  {
    number: "03",
    title: "THE FULL PACKAGE",
    description: "No logo? No problem. I can also design your brand assets and guidelines, do motion design, and 3D.",
    price: "$15k",
  },
];

/**
 * 이미지 에셋
 */
const IMAGES = {} as const;

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { motion } from "motion/react";

interface PricingPackage {
  number: string;
  title: string;
  description: string;
  price: string;
}

interface PricingOplMaster15Props {
  mode?: "light" | "dark";
  label?: string;
  title?: string;
  subtitle?: string;
  packages?: PricingPackage[];
  buttonText?: string;
  onSelectPackage?: (packageIndex: number) => void;
}

export default function PricingOplMaster15({
  mode = "light",
  label = "PRICING",
  title = "THE CARDS ARE\nON THE TABLE.\nTIME TO KNOW\nHOW I PLAY.",
  subtitle = "My pricing is scope based and comes down to three packages. Each package has a minimum rate and the final price can vary depending on project complexity.",
  packages = DEFAULT_PACKAGES,
  buttonText = "SELECT PACKAGE",
  onSelectPackage,
}: PricingOplMaster15Props) {
  const colors = COLORS[mode];

  const cardRotations = [-8, 0, 8];
  const cardOffsets = [
    { x: -40, y: 20 },
    { x: 0, y: 0 },
    { x: 40, y: 20 },
  ];

  return (
    <section
      className="relative w-full py-16 md:py-24 overflow-hidden"
      style={{ backgroundColor: colors.background }}
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 md:mb-20">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-xs tracking-[0.2em] mb-6"
            style={{ color: colors.textSecondary }}
          >
            {label}
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black leading-[1.1] tracking-tight whitespace-pre-line mb-6"
            style={{ color: colors.textPrimary }}
          >
            {title}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-sm md:text-base max-w-lg mx-auto leading-relaxed"
            style={{ color: colors.textSecondary }}
          >
            {subtitle}
          </motion.p>
        </div>

        {/* Cards */}
        <div className="relative flex justify-center items-center h-[420px] md:h-[480px]">
          {packages.slice(0, 3).map((pkg, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50, rotate: 0 }}
              whileInView={{
                opacity: 1,
                y: 0,
                rotate: cardRotations[index],
              }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: 0.3 + index * 0.1,
                ease: "easeOut",
              }}
              whileHover={{
                y: -10,
                scale: 1.02,
                zIndex: 30,
              }}
              className="absolute w-[200px] sm:w-[220px] md:w-[240px] cursor-pointer"
              style={{
                transform: `translateX(${cardOffsets[index].x}px) translateY(${cardOffsets[index].y}px) rotate(${cardRotations[index]}deg)`,
                zIndex: index === 1 ? 20 : 10,
                left: `calc(50% - ${index === 0 ? 180 : index === 1 ? 110 : 40}px)`,
              }}
            >
              <div
                className="rounded-2xl p-5 md:p-6 shadow-lg"
                style={{
                  backgroundColor: colors.cardBg,
                  border: `1px solid ${colors.cardBorder}`,
                }}
              >
                {/* Package Number */}
                <p
                  className="text-4xl md:text-5xl font-light italic mb-3"
                  style={{ color: colors.textPrimary }}
                >
                  {pkg.number}
                </p>

                {/* Package Title */}
                <h3
                  className="text-xs md:text-sm font-bold tracking-wide mb-3"
                  style={{ color: colors.textPrimary }}
                >
                  {pkg.title}
                </h3>

                {/* Package Description */}
                <p
                  className="text-[10px] md:text-xs leading-relaxed mb-6 min-h-[60px]"
                  style={{ color: colors.textSecondary }}
                >
                  {pkg.description}
                </p>

                {/* Starting At Label */}
                <p
                  className="text-[10px] font-medium tracking-wide mb-1"
                  style={{ color: colors.textSecondary }}
                >
                  STARTING AT
                </p>

                {/* Price */}
                <p
                  className="text-xl md:text-2xl font-bold mb-4"
                  style={{ color: colors.textPrimary }}
                >
                  USD {pkg.price}
                </p>

                {/* Button */}
                <button
                  onClick={() => onSelectPackage?.(index)}
                  className="w-full py-2.5 rounded-md text-[10px] md:text-xs font-semibold tracking-wide transition-all duration-200 hover:opacity-90"
                  style={{
                    backgroundColor: colors.buttonBg,
                    color: colors.buttonText,
                  }}
                >
                  {buttonText}
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
