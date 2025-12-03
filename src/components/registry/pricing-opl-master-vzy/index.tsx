"use client";

// ============================================================================
// CUSTOMIZATION - 이 섹션의 값들을 수정하여 프로젝트에 맞게 조정하세요
// ============================================================================

/**
 * 커스텀 색상 (브랜드 컬러)
 */
const COLORS = {
  light: {
    background: "#1a1a1a",
    cardBg: "#2a2a2a",
    cardBgHighlight: "#000000",
    textPrimary: "#ffffff",
    textSecondary: "#888888",
    textMuted: "#666666",
    buttonFilledBg: "#ffffff",
    buttonFilledText: "#000000",
    buttonOutlineBorder: "#ffffff",
    buttonOutlineText: "#ffffff",
    ribbonGradientFrom: "#FF5A6A",
    ribbonGradientTo: "#FF8A70",
  },
  dark: {
    background: "#1a1a1a",
    cardBg: "#2a2a2a",
    cardBgHighlight: "#000000",
    textPrimary: "#ffffff",
    textSecondary: "#888888",
    textMuted: "#666666",
    buttonFilledBg: "#ffffff",
    buttonFilledText: "#000000",
    buttonOutlineBorder: "#ffffff",
    buttonOutlineText: "#ffffff",
    ribbonGradientFrom: "#FF5A6A",
    ribbonGradientTo: "#FF8A70",
  },
} as const;

/**
 * 컨텐츠 기본값
 */
const DEFAULT_CONTENT = {
  header: {
    title: "Special Launch Deal",
    subtitle: "Pay once, get a lifetime license.",
  },
  footer: {
    text: "Price increases after every 30 copies sold.",
  },
  plans: [
    {
      name: "Free",
      price: "",
      features: ["200+ Vzy Icons", "Outline style only", "Icons.vzy.co"],
      buttonText: "Download",
      buttonVariant: "filled" as const,
      isHighlighted: false,
    },
    {
      name: "Lite",
      price: "$15",
      features: ["1000+ Vzy Icons", "Updates via email", "Next Price $20"],
      buttonText: "Buy Now",
      buttonVariant: "outline" as const,
      isHighlighted: false,
    },
    {
      name: "Pro",
      price: "$29",
      features: ["Full App Access", "Lifetime Updates", "Next Price $59"],
      buttonText: "Buy Now",
      buttonVariant: "filled" as const,
      isHighlighted: true,
    },
  ],
};

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { motion } from "motion/react";

interface PlanContent {
  name: string;
  price: string;
  features: string[];
  buttonText: string;
  buttonVariant: "filled" | "outline";
  isHighlighted: boolean;
}

interface HeaderContent {
  title: string;
  subtitle: string;
}

interface FooterContent {
  text: string;
}

interface PricingOplMasterVzyProps {
  mode?: "light" | "dark";
  header?: HeaderContent;
  footer?: FooterContent;
  plans?: PlanContent[];
  onPlanClick?: (planName: string) => void;
}

export default function PricingOplMasterVzy({
  mode = "dark",
  header = DEFAULT_CONTENT.header,
  footer = DEFAULT_CONTENT.footer,
  plans = DEFAULT_CONTENT.plans,
  onPlanClick,
}: PricingOplMasterVzyProps) {
  const colors = COLORS[mode];

  return (
    <section
      className="relative w-full py-16 md:py-24 px-4"
      style={{ backgroundColor: colors.background }}
    >
      <style jsx>{`
        @import url("https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap");

        .font-heading {
          font-family: "Inter", system-ui, sans-serif;
        }
      `}</style>

      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h1
            className="font-heading text-3xl md:text-4xl font-bold mb-3"
            style={{ color: colors.textPrimary }}
          >
            {header.title}
          </h1>
          <p
            className="text-sm md:text-base"
            style={{ color: colors.textSecondary }}
          >
            {header.subtitle}
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-8">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              className="relative rounded-xl p-6 overflow-hidden"
              style={{
                backgroundColor: plan.isHighlighted
                  ? colors.cardBgHighlight
                  : colors.cardBg,
              }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
            >
              {/* Ribbon for highlighted plan */}
              {plan.isHighlighted && (
                <div
                  className="absolute top-0 right-0 w-24 h-24 overflow-hidden"
                  style={{
                    background: `linear-gradient(135deg, ${colors.ribbonGradientFrom} 0%, ${colors.ribbonGradientTo} 100%)`,
                    clipPath: "polygon(100% 0, 0 0, 100% 100%)",
                  }}
                />
              )}

              {/* Plan Name with Price */}
              <h3
                className="font-heading text-lg font-medium mb-4 text-center"
                style={{ color: colors.textPrimary }}
              >
                {plan.name}
                {plan.price && (
                  <span className="ml-2">{plan.price}</span>
                )}
              </h3>

              {/* Features */}
              <ul className="space-y-2 mb-6 text-center">
                {plan.features.map((feature, featureIndex) => (
                  <li
                    key={featureIndex}
                    className="text-sm"
                    style={{ color: colors.textSecondary }}
                  >
                    {feature}
                  </li>
                ))}
              </ul>

              {/* Button */}
              <div className="flex justify-center">
                <motion.button
                  onClick={() => onPlanClick?.(plan.name)}
                  className="px-6 py-2 rounded-full text-sm font-medium transition-all duration-200"
                  style={
                    plan.buttonVariant === "filled"
                      ? {
                          backgroundColor: colors.buttonFilledBg,
                          color: colors.buttonFilledText,
                        }
                      : {
                          backgroundColor: "transparent",
                          border: `1px solid ${colors.buttonOutlineBorder}`,
                          color: colors.buttonOutlineText,
                        }
                  }
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {plan.buttonText}
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Footer */}
        <motion.p
          className="text-center text-xs"
          style={{ color: colors.textMuted }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          {footer.text}
        </motion.p>
      </div>
    </section>
  );
}
