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
    // Primary 액센트 (버튼, 링크 등)
    accent: "#1DADF4", // Sky blue
    accentHover: "#0D9DE4",
    check: "#8BC34A", // Green checkmark
    background: "#F5F5F5",
    cardBackground: "#FFFFFF",
    textPrimary: "#333333",
    textSecondary: "#666666",
    textMuted: "#999999",
  },
  dark: {
    accent: "#3DBCF9",
    accentHover: "#1DADF4",
    check: "#9CCC65",
    background: "#1A1A1A",
    cardBackground: "#2D2D2D",
    textPrimary: "#F5F5F5",
    textSecondary: "#CCCCCC",
    textMuted: "#888888",
  },
} as const;

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { useState } from "react";
import { motion } from "motion/react";
import { Check, Info } from "lucide-react";

interface Feature {
  text: string;
  hasInfo?: boolean;
}

interface PricingOplBig11Props {
  mode?: "light" | "dark";
  title?: string;
  description?: string;
  emailLinkText?: string;
  price?: string;
  features?: Feature[];
  toggleLabel?: string;
  defaultToggleState?: boolean;
  onToggleChange?: (checked: boolean) => void;
  onEmailClick?: () => void;
}

const defaultFeatures: Feature[] = [
  { text: "12 months premium hosting" },
  { text: "12 months service & maintenance" },
  { text: "3 page designs", hasInfo: true },
  { text: "Content setup" },
  { text: "Advanced statistics", hasInfo: true },
];

// Custom Toggle Switch Component
function ToggleSwitch({
  checked,
  onChange,
  colors,
}: {
  checked: boolean;
  onChange: (checked: boolean) => void;
  colors: (typeof COLORS)["light"] | (typeof COLORS)["dark"];
}) {
  return (
    <button
      type="button"
      role="switch"
      aria-checked={checked}
      onClick={() => onChange(!checked)}
      className="relative inline-flex h-5 w-9 shrink-0 cursor-pointer items-center rounded-full transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2"
      style={{
        backgroundColor: checked ? colors.accent : "#D1D5DB",
      }}
    >
      <span
        className="pointer-events-none inline-block h-4 w-4 transform rounded-full bg-white shadow-md transition-transform duration-200"
        style={{
          transform: checked ? "translateX(18px)" : "translateX(2px)",
        }}
      />
    </button>
  );
}

export default function PricingOplBig11({
  mode = "light",
  title = "Pricing",
  description = "Every website comes with the following benefits and features. Do you need more page designs or perhaps some additional functionalities? Send us an",
  emailLinkText = "email",
  price = "$1295",
  features = defaultFeatures,
  toggleLabel = "Incl. CMS",
  defaultToggleState = false,
  onToggleChange,
  onEmailClick,
}: PricingOplBig11Props) {
  const colors = COLORS[mode];
  const [isToggled, setIsToggled] = useState(defaultToggleState);

  const handleToggleChange = (checked: boolean) => {
    setIsToggled(checked);
    onToggleChange?.(checked);
  };

  return (
    <section
      className="relative w-full py-16 px-4"
      style={{ backgroundColor: colors.background }}
    >
      <div className="max-w-xl mx-auto">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-2xl md:text-3xl font-bold text-center mb-4"
          style={{ color: colors.textPrimary }}
        >
          {title}
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-sm text-center mb-8 max-w-md mx-auto"
          style={{ color: colors.textSecondary }}
        >
          {description}{" "}
          <button
            onClick={onEmailClick}
            className="underline hover:no-underline transition-all"
            style={{ color: colors.accent }}
          >
            {emailLinkText}
          </button>
          .
        </motion.p>

        {/* Pricing Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="rounded-lg overflow-hidden shadow-lg"
          style={{ backgroundColor: colors.cardBackground }}
        >
          {/* Price Button */}
          <div
            className="py-3 text-center"
            style={{ backgroundColor: colors.accent }}
          >
            <span className="text-xl font-semibold text-white">{price}</span>
          </div>

          {/* Features List */}
          <div className="px-8 py-6 space-y-4">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 0.3 + index * 0.05 }}
                className="flex items-center gap-3"
              >
                <Check
                  className="w-4 h-4 flex-shrink-0"
                  style={{ color: colors.check }}
                />
                <span
                  className="text-sm"
                  style={{ color: colors.textPrimary }}
                >
                  {feature.text}
                </span>
                {feature.hasInfo && (
                  <Info
                    className="w-4 h-4 flex-shrink-0 cursor-help"
                    style={{ color: colors.check }}
                  />
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Toggle Switch */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="flex flex-col items-center gap-2 mt-6"
        >
          <ToggleSwitch
            checked={isToggled}
            onChange={handleToggleChange}
            colors={colors}
          />
          <span
            className="text-xs"
            style={{ color: colors.textMuted }}
          >
            {toggleLabel}
          </span>
        </motion.div>
      </div>
    </section>
  );
}
