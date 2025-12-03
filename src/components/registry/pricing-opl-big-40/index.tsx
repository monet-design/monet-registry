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
    // Primary 액센트 (라벨, 링크 등) - 녹색 계열
    accent: "#2D5A4A",
    accentHover: "#1E4A3A",
    // 서브타이틀 색상 - 밝은 녹색
    subtitle: "#96A9A0",
    // NEW 배지 색상 - 코랄/테라코타
    badge: "#C76B56",
    // 배경 색상
    background: "#EBEBE9",
    // 카드 배경
    cardBg: "#FFFFFF",
  },
  dark: {
    accent: "#4A8A6A",
    accentHover: "#5A9A7A",
    subtitle: "#7A9A8A",
    badge: "#E88A6A",
    background: "#1A1A1A",
    cardBg: "#2A2A2A",
  },
} as const;

/**
 * 이미지 에셋
 * - path: 이미지 경로
 * - alt: 접근성용 대체 텍스트
 * - prompt: AI 이미지 재생성용 상세 프롬프트
 */
const IMAGES = {
  spiceBottle: {
    path: "/registry/pricing-opl-big-40/bottle-spice.png",
    alt: "Seedlip Spice 94 botanical spirit bottle",
    prompt: `A premium botanical spirit bottle (Seedlip Spice 94 style) with transparent glass, showing amber/brown botanical elements inside. Elegant clear glass bottle with copper cap, botanical elements like citrus peels, bark, cardamom. Transparent background.`,
  },
  gardenBottle: {
    path: "/registry/pricing-opl-big-40/bottle-garden.png",
    alt: "Seedlip Garden 108 botanical spirit bottle",
    prompt: `A premium botanical spirit bottle (Seedlip Garden 108 style) with transparent glass, showing green herbal botanical elements inside. Elegant clear glass bottle with copper cap, botanical elements like peas, herbs, rosemary. Transparent background.`,
  },
} as const;

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { motion } from "motion/react";
import Image from "next/image";

interface ProductNote {
  label: string;
  description: string[];
}

interface Product {
  name: string;
  variant: string;
  notes: ProductNote[];
  price: string;
  currency: string;
  unit: string;
  buttonText: string;
  imageSrc?: string;
  imageAlt?: string;
  isNew?: boolean;
}

interface PricingOplBig40Props {
  mode?: "light" | "dark";
  title?: string;
  subtitle?: string;
  products?: Product[];
  onBuyClick?: (productName: string) => void;
}

const defaultProducts: Product[] = [
  {
    name: "SPICE",
    variant: "94",
    notes: [
      {
        label: "NOSE",
        description: ["Aromatic, Earthy,", "Woody"],
      },
      {
        label: "PALATE",
        description: ["Clove, Lemon,", "Cardamom"],
      },
      {
        label: "SERVE",
        description: ["Tonic & a Red", "Grapefruit Twist"],
      },
    ],
    price: "27.99",
    currency: "£",
    unit: "70CL",
    buttonText: "BUY",
    imageSrc: IMAGES.spiceBottle.path,
    imageAlt: IMAGES.spiceBottle.alt,
    isNew: false,
  },
  {
    name: "GARDEN",
    variant: "108",
    notes: [
      {
        label: "NOSE",
        description: ["Herbal, Grassy, Floral"],
      },
      {
        label: "PALATE",
        description: ["Sweet Pea, Cucumber,", "Meadow Grass"],
      },
      {
        label: "SERVE",
        description: ["Bitter Lemon & a", "Cracked Sweet Pea Pod"],
      },
    ],
    price: "27.99",
    currency: "£",
    unit: "70CL",
    buttonText: "BUY",
    imageSrc: IMAGES.gardenBottle.path,
    imageAlt: IMAGES.gardenBottle.alt,
    isNew: true,
  },
];

// Placeholder bottle component when image is not available
function PlaceholderBottle({ variant }: { variant: "spice" | "garden" }) {
  const isSpice = variant === "spice";
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      <svg
        viewBox="0 0 120 300"
        className="w-full h-full max-w-[120px]"
        style={{ filter: "drop-shadow(0 4px 6px rgba(0,0,0,0.1))" }}
      >
        {/* Bottle body */}
        <rect
          x="25"
          y="60"
          width="70"
          height="200"
          rx="8"
          fill="rgba(255,255,255,0.9)"
          stroke="#E5E5E5"
          strokeWidth="1"
        />
        {/* Bottle neck */}
        <rect
          x="45"
          y="20"
          width="30"
          height="45"
          rx="4"
          fill="rgba(255,255,255,0.9)"
          stroke="#E5E5E5"
          strokeWidth="1"
        />
        {/* Cap */}
        <rect
          x="42"
          y="8"
          width="36"
          height="16"
          rx="2"
          fill={isSpice ? "#C9A87C" : "#C9A87C"}
        />
        {/* Label area */}
        <rect x="35" y="140" width="50" height="80" rx="2" fill="#F5F5F5" />
        {/* Brand text */}
        <text
          x="60"
          y="165"
          textAnchor="middle"
          fontSize="8"
          fontWeight="500"
          fill="#333"
          fontFamily="serif"
        >
          SEEDLIP
        </text>
        {/* Variant text */}
        <text
          x="60"
          y="190"
          textAnchor="middle"
          fontSize="6"
          fill="#666"
          fontFamily="serif"
        >
          {isSpice ? "SPICE 94" : "GARDEN 108"}
        </text>
        {/* Botanical illustration placeholder */}
        <circle
          cx="60"
          cy="210"
          r="15"
          fill="none"
          stroke={isSpice ? "#8B6914" : "#4A7A5A"}
          strokeWidth="0.5"
        />
        {/* Inner botanical elements */}
        {isSpice ? (
          <>
            <circle cx="60" cy="100" r="8" fill="rgba(139, 105, 20, 0.2)" />
            <circle cx="50" cy="115" r="5" fill="rgba(160, 82, 45, 0.2)" />
            <circle cx="70" cy="120" r="6" fill="rgba(205, 133, 63, 0.2)" />
          </>
        ) : (
          <>
            <circle cx="60" cy="100" r="8" fill="rgba(74, 122, 90, 0.2)" />
            <circle cx="50" cy="115" r="5" fill="rgba(85, 140, 85, 0.2)" />
            <circle cx="70" cy="120" r="6" fill="rgba(100, 149, 100, 0.2)" />
          </>
        )}
      </svg>
    </div>
  );
}

export default function PricingOplBig40({
  mode = "light",
  title = "SPIRITS",
  subtitle = "AWARD-WINNING",
  products = defaultProducts,
  onBuyClick,
}: PricingOplBig40Props) {
  const colors = COLORS[mode];
  const isDark = mode === "dark";

  return (
    <section
      className="relative w-full py-16 px-4"
      style={{ backgroundColor: colors.background }}
    >
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2
            className="text-xl tracking-[0.3em] font-normal mb-2"
            style={{ color: isDark ? "#FFFFFF" : "#333333" }}
          >
            {title}
          </h2>
          <p
            className="text-xs tracking-[0.2em] uppercase"
            style={{ color: colors.subtitle }}
          >
            {subtitle}
          </p>
        </motion.div>

        {/* Product Cards */}
        <div className="flex flex-col lg:flex-row justify-center items-stretch gap-8 lg:gap-12">
          {products.map((product, index) => (
            <motion.div
              key={`${product.name}-${product.variant}`}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="relative flex flex-row items-center max-w-md lg:max-w-none"
            >
              {/* NEW Badge */}
              {product.isNew && (
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.4, delay: 0.5 + index * 0.15 }}
                  className="absolute -top-2 -right-2 lg:right-4 lg:top-4 z-10 w-12 h-12 rounded-full flex items-center justify-center text-white text-[10px] font-medium tracking-wider"
                  style={{ backgroundColor: colors.badge }}
                >
                  NEW
                </motion.div>
              )}

              {/* Bottle Image */}
              <div className="relative w-32 h-64 lg:w-40 lg:h-80 flex-shrink-0 -mr-4 lg:-mr-8 z-10">
                {product.imageSrc ? (
                  <Image
                    src={product.imageSrc}
                    alt={product.imageAlt || `${product.name} ${product.variant}`}
                    fill
                    className="object-contain"
                    sizes="(max-width: 1024px) 128px, 160px"
                  />
                ) : (
                  <PlaceholderBottle
                    variant={product.name.toLowerCase() as "spice" | "garden"}
                  />
                )}
              </div>

              {/* Info Card */}
              <div
                className="relative rounded-sm py-8 px-6 lg:px-8 pl-10 lg:pl-12 min-w-[200px] lg:min-w-[220px]"
                style={{ backgroundColor: colors.cardBg }}
              >
                {/* Product Name */}
                <div className="mb-6">
                  <span
                    className="text-lg tracking-[0.15em] font-normal"
                    style={{ color: isDark ? "#FFFFFF" : "#333333" }}
                  >
                    {product.name}
                  </span>
                  <span
                    className="text-lg tracking-[0.15em] font-light ml-2"
                    style={{ color: isDark ? "#CCCCCC" : "#666666" }}
                  >
                    {product.variant}
                  </span>
                </div>

                {/* Notes */}
                <div className="space-y-4 mb-6">
                  {product.notes.map((note, noteIndex) => (
                    <div key={noteIndex}>
                      <p
                        className="text-[10px] tracking-[0.15em] font-medium mb-1"
                        style={{ color: colors.accent }}
                      >
                        {note.label}
                      </p>
                      {note.description.map((line, lineIndex) => (
                        <p
                          key={lineIndex}
                          className="text-xs italic"
                          style={{ color: isDark ? "#AAAAAA" : "#666666" }}
                        >
                          {line}
                        </p>
                      ))}
                    </div>
                  ))}
                </div>

                {/* Price */}
                <div className="mb-4">
                  <span
                    className="text-2xl font-light"
                    style={{ color: colors.accent }}
                  >
                    {product.currency}
                  </span>
                  <span
                    className="text-2xl font-light"
                    style={{ color: colors.accent }}
                  >
                    {product.price}
                  </span>
                </div>

                {/* Buy Button */}
                <motion.button
                  whileHover={{ opacity: 0.7 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => onBuyClick?.(product.name)}
                  className="text-xs tracking-[0.15em] font-medium underline underline-offset-4 transition-opacity"
                  style={{ color: colors.accent }}
                >
                  {product.buttonText} {product.unit}
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
