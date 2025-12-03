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
    accent: "#00D4AA", // Mint/Teal accent
    accentHover: "#00B894",
    orange: "#FF6B35", // Orange accent for design plan
    background: "#0B1120", // Dark navy background
    cardBackground: "rgba(15, 25, 45, 0.8)",
    cardBorder: "rgba(255, 255, 255, 0.08)",
    textPrimary: "#FFFFFF",
    textSecondary: "#9CA3AF",
  },
  dark: {
    accent: "#00D4AA",
    accentHover: "#00B894",
    orange: "#FF6B35",
    background: "#0B1120",
    cardBackground: "rgba(15, 25, 45, 0.8)",
    cardBorder: "rgba(255, 255, 255, 0.08)",
    textPrimary: "#FFFFFF",
    textSecondary: "#9CA3AF",
  },
} as const;

/**
 * 이미지 에셋
 */
const IMAGES = {
  design: {
    path: "/registry/pricing-opl-screenshot-32/design-card.png",
    alt: "Design pass card",
    prompt: `Neon style card with "DESIGN" text in 3D retro style, dark background with orange glow`,
  },
  fullStack: {
    path: "/registry/pricing-opl-screenshot-32/fullstack-card.png",
    alt: "Full Stack pass card",
    prompt: `Neon style card with "FULL STACK" text in 3D retro style, dark background with teal glow`,
  },
  webflow: {
    path: "/registry/pricing-opl-screenshot-32/webflow-card.png",
    alt: "Webflow pass card",
    prompt: `Neon style card with "WEBFLOW" text in 3D retro style, dark background with teal glow`,
  },
} as const;

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { motion } from "motion/react";
import { Check, Minus, Plus, ArrowDown } from "lucide-react";

interface PricingPlan {
  name: string;
  displayName: string;
  price: string;
  billingPeriod: string;
  hours: number;
  features: string[];
  isHighlighted?: boolean;
  accentColor: "teal" | "orange";
  imagePath: string;
}

interface PricingOplScreenshot32Props {
  mode?: "light" | "dark";
  title?: string;
  subtitle?: string;
  plans?: PricingPlan[];
  onPlanSelect?: (planName: string) => void;
  onViewServices?: (planName: string) => void;
}

const defaultPlans: PricingPlan[] = [
  {
    name: "design",
    displayName: "DESIGN",
    price: "$2,695",
    billingPeriod: "billed monthly",
    hours: 30,
    features: [
      "Unlimited tasks/revisions",
      "Real-time communication",
      "24-hour project updates",
      "Source files included",
    ],
    isHighlighted: false,
    accentColor: "orange",
    imagePath: IMAGES.design.path,
  },
  {
    name: "fullstack",
    displayName: "FULL STACK",
    price: "$3,995",
    billingPeriod: "billed monthly",
    hours: 40,
    features: [
      "Unlimited tasks/revisions",
      "Real-time communication",
      "24-hour project updates",
      "Source files included",
    ],
    isHighlighted: true,
    accentColor: "teal",
    imagePath: IMAGES.fullStack.path,
  },
  {
    name: "webflow",
    displayName: "WEBFLOW",
    price: "$2,695",
    billingPeriod: "billed monthly",
    hours: 30,
    features: [
      "Unlimited tasks/revisions",
      "Real-time communication",
      "24-hour project updates",
      "Source files included",
    ],
    isHighlighted: false,
    accentColor: "teal",
    imagePath: IMAGES.webflow.path,
  },
];

// Plan card image component with neon effect
function PlanCardImage({
  planName,
  accentColor,
}: {
  planName: string;
  accentColor: "teal" | "orange";
}) {
  const glowColor = accentColor === "teal" ? "#00D4AA" : "#FF6B35";
  const shadowColor = accentColor === "teal" ? "rgba(0, 212, 170, 0.3)" : "rgba(255, 107, 53, 0.3)";

  return (
    <div
      className="relative w-full h-36 rounded-xl overflow-hidden flex flex-col items-start justify-between p-4"
      style={{
        background: `linear-gradient(135deg, rgba(20, 30, 50, 0.95) 0%, rgba(10, 20, 35, 0.98) 100%)`,
        boxShadow: `inset 0 0 40px ${shadowColor}, 0 4px 20px rgba(0, 0, 0, 0.5)`,
        border: `1px solid rgba(255, 255, 255, 0.1)`,
      }}
    >
      {/* pixelpass logo */}
      <div className="flex items-center gap-1">
        <span
          className="text-xs font-semibold tracking-wide"
          style={{ color: glowColor, fontFamily: "monospace" }}
        >
          pixel
        </span>
        <span
          className="text-xs font-semibold tracking-wide px-1.5 py-0.5 rounded"
          style={{
            backgroundColor: glowColor,
            color: "#0B1120",
            fontFamily: "monospace",
          }}
        >
          pass
        </span>
      </div>

      {/* Plan name with neon effect */}
      <div className="relative">
        <h3
          className="text-3xl font-black tracking-wider uppercase"
          style={{
            color: "transparent",
            WebkitTextStroke: `1.5px ${glowColor}`,
            textShadow: `0 0 10px ${glowColor}, 0 0 20px ${shadowColor}, 0 0 40px ${shadowColor}`,
            fontFamily: "'Arial Black', sans-serif",
            letterSpacing: "0.15em",
          }}
        >
          {planName}
        </h3>
        {/* Glow effect layer */}
        <h3
          className="text-3xl font-black tracking-wider uppercase absolute top-0 left-0 opacity-50 blur-sm"
          style={{
            color: glowColor,
            fontFamily: "'Arial Black', sans-serif",
            letterSpacing: "0.15em",
          }}
        >
          {planName}
        </h3>
      </div>

      {/* Decorative corner glow */}
      <div
        className="absolute -bottom-10 -right-10 w-32 h-32 rounded-full opacity-20 blur-2xl"
        style={{ backgroundColor: glowColor }}
      />
    </div>
  );
}

export default function PricingOplScreenshot32({
  mode = "dark",
  title = "Your pass to magical creative",
  subtitle = "Flexible plans that fit your needs. Pause or cancel anytime. 7-day money-back guarantee.",
  plans = defaultPlans,
  onPlanSelect,
  onViewServices,
}: PricingOplScreenshot32Props) {
  const colors = COLORS[mode];

  return (
    <section
      className="relative w-full py-20 px-4"
      style={{ backgroundColor: colors.background }}
    >
      {/* Background gradient overlay */}
      <div
        className="absolute inset-0 opacity-50"
        style={{
          background:
            "radial-gradient(ellipse at 50% 0%, rgba(0, 212, 170, 0.08) 0%, transparent 50%)",
        }}
      />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1
            className="text-4xl md:text-5xl lg:text-6xl mb-6 italic font-normal"
            style={{
              fontFamily: "'Georgia', serif",
              background: `linear-gradient(180deg, #FFFFFF 30%, ${colors.accent} 100%)`,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            {title}
          </h1>
          <p
            className="text-sm md:text-base max-w-lg mx-auto"
            style={{ color: colors.textSecondary }}
          >
            {subtitle}
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative rounded-2xl overflow-hidden"
              style={{
                backgroundColor: colors.cardBackground,
                border: `1px solid ${colors.cardBorder}`,
              }}
            >
              {/* Card Content */}
              <div className="p-6">
                {/* Plan Image Card */}
                <PlanCardImage
                  planName={plan.displayName}
                  accentColor={plan.accentColor}
                />

                {/* Price */}
                <div className="mt-6 text-center">
                  <p
                    className="text-4xl font-bold"
                    style={{ color: colors.textPrimary }}
                  >
                    {plan.price}
                  </p>
                  <p
                    className="text-sm mt-1"
                    style={{ color: colors.textSecondary }}
                  >
                    {plan.billingPeriod}
                  </p>
                </div>

                {/* Hours Counter */}
                <div className="flex items-center justify-center gap-4 mt-6">
                  <button
                    className="w-8 h-8 rounded-lg flex items-center justify-center transition-colors"
                    style={{
                      backgroundColor: "rgba(255, 255, 255, 0.05)",
                      border: `1px solid ${colors.cardBorder}`,
                    }}
                  >
                    <Minus className="w-4 h-4" style={{ color: colors.accent }} />
                  </button>
                  <div className="text-center">
                    <p
                      className="text-2xl font-bold"
                      style={{ color: colors.textPrimary }}
                    >
                      {plan.hours}
                    </p>
                    <p
                      className="text-xs"
                      style={{ color: colors.textSecondary }}
                    >
                      hours/month
                    </p>
                  </div>
                  <button
                    className="w-8 h-8 rounded-lg flex items-center justify-center transition-colors"
                    style={{
                      backgroundColor: "rgba(255, 255, 255, 0.05)",
                      border: `1px solid ${colors.cardBorder}`,
                    }}
                  >
                    <Plus className="w-4 h-4" style={{ color: colors.accent }} />
                  </button>
                </div>

                {/* Features */}
                <ul className="mt-6 space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-3">
                      <div
                        className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0"
                        style={{
                          backgroundColor:
                            plan.accentColor === "orange"
                              ? `${colors.orange}20`
                              : `${colors.accent}20`,
                        }}
                      >
                        <Check
                          className="w-3 h-3"
                          style={{
                            color:
                              plan.accentColor === "orange"
                                ? colors.orange
                                : colors.accent,
                          }}
                        />
                      </div>
                      <span
                        className="text-sm"
                        style={{ color: colors.textSecondary }}
                      >
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => onPlanSelect?.(plan.name)}
                  className="w-full mt-6 py-3 px-6 rounded-xl text-sm font-semibold transition-all"
                  style={
                    plan.isHighlighted
                      ? {
                          backgroundColor: colors.accent,
                          color: colors.background,
                        }
                      : {
                          backgroundColor: "transparent",
                          border: `1.5px solid ${colors.accent}`,
                          color: colors.accent,
                        }
                  }
                >
                  Get started
                </motion.button>

                {/* View Services Link */}
                <button
                  onClick={() => onViewServices?.(plan.name)}
                  className="w-full mt-4 flex items-center justify-center gap-2 text-sm transition-colors hover:opacity-80"
                  style={{ color: colors.textSecondary }}
                >
                  View included services
                  <ArrowDown className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
