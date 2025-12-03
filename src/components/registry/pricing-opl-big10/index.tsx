"use client";

import "./font.css";

// ============================================================================
// CUSTOMIZATION - 이 섹션의 값들을 수정하여 프로젝트에 맞게 조정하세요
// ============================================================================

/**
 * 커스텀 색상 (브랜드 컬러)
 * - 골드/브론즈 럭셔리 테마
 */
const COLORS = {
  light: {
    background: "#000000",
    accent: "#B8956A",
    accentMuted: "#8B7355",
    accentBorder: "#71593B",
    text: "#B8956A",
    textMuted: "#8B7355",
  },
  dark: {
    background: "#000000",
    accent: "#B8956A",
    accentMuted: "#8B7355",
    accentBorder: "#71593B",
    text: "#B8956A",
    textMuted: "#8B7355",
  },
} as const;

/**
 * 기본 서비스 데이터
 */
const DEFAULT_SERVICES: ServiceItem[] = [
  {
    name: "Haarschnitt",
    price: "24,- \u20AC",
    description:
      "Waschen, Schneiden, Kopfmassage, Aromakompresse, Styling",
  },
  {
    name: "Barber Nassrasur",
    price: "16,- \u20AC",
    description:
      "Heisskompresse, Pre Shave, 2x Nassrasur, Kaltkompresse, After Shave, After Shave Balm",
  },
  {
    name: "Bart Trimmen / Rasur",
    price: "ab 16,- \u20AC",
    description:
      "Bartkorrektur, Heisskompresse, Pre Shave, 2x Nassrasur, Kaltkompresse, After Shave, After Shave Balm",
  },
  {
    name: "Bart Trimmen",
    price: "ab 10,- \u20AC",
  },
  {
    name: "Grauhaarkaschierung",
    price: "ab 23,- \u20AC",
  },
];

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { motion } from "motion/react";

interface ServiceItem {
  name: string;
  price: string;
  description?: string;
}

interface PricingOplBig10Props {
  mode?: "light" | "dark";
  title?: string;
  services?: ServiceItem[];
  ctaText?: string;
  onCtaClick?: () => void;
}

export default function PricingOplBig10({
  mode = "dark",
  title = "SERVICE & PREIS",
  services = DEFAULT_SERVICES,
  ctaText = "HIER ONLINE TERMIN BUCHEN",
  onCtaClick,
}: PricingOplBig10Props) {
  const colors = COLORS[mode];

  return (
    <section
      className="relative w-full py-16 px-6 md:px-12 lg:px-24"
      style={{ backgroundColor: colors.background }}
    >
      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center font-serif italic text-2xl md:text-3xl lg:text-4xl mb-12 tracking-wide"
        style={{ color: colors.accent, fontFamily: "'Playfair Display', serif" }}
      >
        {title}
      </motion.h2>

      {/* Services List */}
      <div className="max-w-3xl mx-auto space-y-6">
        {services.map((service, index) => (
          <motion.div
            key={service.name}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="flex flex-col"
          >
            {/* Service Name + Dotted Line + Price */}
            <div className="flex items-baseline gap-2">
              <span
                className="text-sm md:text-base font-normal whitespace-nowrap"
                style={{ color: colors.text }}
              >
                {service.name}
              </span>
              <span
                className="flex-1 border-b border-dotted mx-1"
                style={{ borderColor: colors.accentMuted }}
              />
              <span
                className="text-sm md:text-base font-normal whitespace-nowrap"
                style={{ color: colors.text }}
              >
                {service.price}
              </span>
            </div>

            {/* Description */}
            {service.description && (
              <p
                className="text-xs md:text-sm mt-1 leading-relaxed"
                style={{ color: colors.textMuted }}
              >
                {service.description}
              </p>
            )}
          </motion.div>
        ))}
      </div>

      {/* CTA Button */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="flex justify-center mt-14"
      >
        <button
          onClick={onCtaClick}
          className="px-8 py-3 text-xs md:text-sm tracking-widest uppercase border transition-all duration-300 hover:bg-opacity-10"
          style={{
            color: colors.accent,
            borderColor: colors.accentBorder,
            backgroundColor: "transparent",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = `${colors.accentBorder}20`;
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = "transparent";
          }}
        >
          {ctaText}
        </button>
      </motion.div>
    </section>
  );
}
