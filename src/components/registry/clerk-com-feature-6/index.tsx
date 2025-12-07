"use client";

// ============================================================================
// CUSTOMIZATION - 이 섹션의 값들을 수정하여 프로젝트에 맞게 조정하세요
// ============================================================================

/**
 * 커스텀 색상 (브랜드 컬러)
 */
const COLORS = {
  light: {
    accent: "#A855F7", // Purple-500
    accentHover: "#9333EA", // Purple-600
    labelText: "#A855F7",
    popularBadgeBg: "#F3E8FF",
    popularBadgeText: "#7E22CE",
    cardBg: "#F9FAFB",
    cardBorder: "#E5E7EB",
  },
  dark: {
    accent: "#C084FC",
    accentHover: "#A855F7",
    labelText: "#C084FC",
    popularBadgeBg: "rgba(168, 85, 247, 0.2)",
    popularBadgeText: "#C084FC",
    cardBg: "#18181B",
    cardBorder: "#27272A",
  },
} as const;

/**
 * 콘텐츠 데이터
 */
const CONTENT = {
  label: "Subscriptions",
  leftCard: {
    title: "Subscription billing, without the headache",
    description:
      "Add subscriptions to your B2C or B2B applications with integrated access to billing, management, and analytics from Stripe and other providers.",
    features: [
      "Self-service plan management",
      "Billing and usage alerts",
      "Gated content and features",
    ],
  },
  rightCard: {
    title: "Tailor made pricing from Acme, Inc.",
    subtitle: "Pick the plan that fits your needs.",
    plans: [
      {
        name: "Free",
        price: "$0",
        period: "/mo",
        description: "Perfect for hobby projects and trying things out.",
        features: ["Feature 1", "Feature 2"],
        isPopular: false,
      },
      {
        name: "Pro",
        price: "$49",
        period: "/mo",
        description: "The most popular choice.",
        features: ["Feature 1", "Feature 2", "Feature 3"],
        isPopular: true,
      },
      {
        name: "Teams",
        price: "$99",
        period: "/mo",
        description: "Perfect for teams who need advanced tooling.",
        features: ["Feature 1", "Feature 2", "Feature 3", "Feature 4"],
        isPopular: false,
      },
    ],
  },
} as const;

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { motion } from "motion/react";
import { Check } from "lucide-react";

interface ClerkComFeature6Props {
  mode?: "light" | "dark";
}

// Check Icon Component
function CheckIcon({
  className,
  color,
}: {
  className?: string;
  color: string;
}) {
  return (
    <div
      className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${className}`}
      style={{ backgroundColor: `${color}15` }}
    >
      <Check className="h-3 w-3" style={{ color }} strokeWidth={3} />
    </div>
  );
}

// Plan Card Component
function PlanCard({
  name,
  price,
  period,
  description,
  isPopular,
  colors,
}: {
  name: string;
  price: string;
  period: string;
  description: string;
  isPopular: boolean;
  colors: (typeof COLORS)["light"] | (typeof COLORS)["dark"];
}) {
  return (
    <div className="flex flex-col p-4">
      <div className="flex items-center justify-between mb-1">
        <span className="text-sm font-medium text-gray-900">{name}</span>
        {isPopular && (
          <span
            className="text-xs font-medium px-2 py-0.5 rounded-full"
            style={{
              backgroundColor: colors.popularBadgeBg,
              color: colors.popularBadgeText,
            }}
          >
            Popular
          </span>
        )}
      </div>
      <div className="flex items-baseline">
        <span className="text-2xl font-semibold text-gray-950">{price}</span>
        <span className="text-sm text-gray-500">{period}</span>
      </div>
      <p className="mt-1 text-xs text-gray-500">{description}</p>
    </div>
  );
}

export default function ClerkComFeature6({
  mode = "light",
}: ClerkComFeature6Props) {
  const colors = COLORS[mode];

  const bgClass = mode === "dark" ? "bg-gray-950" : "bg-white";
  const textPrimaryClass = mode === "dark" ? "text-white" : "text-gray-950";
  const textSecondaryClass =
    mode === "dark" ? "text-gray-400" : "text-gray-600";

  return (
    <section className={`relative w-full py-16 md:py-24 ${bgClass}`}>
      <div className="mx-auto w-full px-6 sm:max-w-[40rem] md:max-w-[48rem] md:px-8 lg:max-w-[64rem] xl:max-w-[80rem]">
        {/* Label */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-sm font-medium mb-8"
          style={{ color: colors.labelText }}
        >
          {CONTENT.label}
        </motion.p>

        {/* Cards Container */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {/* Left Card - Features */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="rounded-2xl p-8 lg:p-10"
            style={{
              backgroundColor: colors.cardBg,
              border: `1px solid ${colors.cardBorder}`,
            }}
          >
            <h2
              className={`text-2xl lg:text-3xl font-semibold tracking-tight mb-4 ${textPrimaryClass}`}
            >
              {CONTENT.leftCard.title}
            </h2>
            <p className={`text-base/6 mb-8 ${textSecondaryClass}`}>
              {CONTENT.leftCard.description}
            </p>

            {/* Features List */}
            <ul className="space-y-3">
              {CONTENT.leftCard.features.map((feature, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <CheckIcon color={colors.accent} />
                  <span className={`text-sm ${textSecondaryClass}`}>
                    {feature}
                  </span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Right Card - Pricing Table */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="rounded-2xl p-8 lg:p-10"
            style={{
              backgroundColor: colors.cardBg,
              border: `1px solid ${colors.cardBorder}`,
            }}
          >
            <h3
              className={`text-lg font-semibold tracking-tight mb-1 ${textPrimaryClass}`}
            >
              {CONTENT.rightCard.title}
            </h3>
            <p className={`text-sm mb-6 ${textSecondaryClass}`}>
              {CONTENT.rightCard.subtitle}
            </p>

            {/* Pricing Plans */}
            <div
              className="rounded-xl overflow-hidden"
              style={{
                backgroundColor: mode === "dark" ? "#27272A" : "#FFFFFF",
                border: `1px solid ${colors.cardBorder}`,
              }}
            >
              {CONTENT.rightCard.plans.map((plan, index) => (
                <motion.div
                  key={plan.name}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                  className={
                    index !== CONTENT.rightCard.plans.length - 1
                      ? "border-b"
                      : ""
                  }
                  style={{
                    borderColor: colors.cardBorder,
                  }}
                >
                  <PlanCard
                    name={plan.name}
                    price={plan.price}
                    period={plan.period}
                    description={plan.description}
                    isPopular={plan.isPopular}
                    colors={colors}
                  />
                </motion.div>
              ))}
            </div>

            {/* Decorative Avatar Stack */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.6 }}
              className="mt-6 flex items-center gap-3"
            >
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="w-8 h-8 rounded-full border-2 bg-gray-200"
                    style={{
                      borderColor: mode === "dark" ? "#18181B" : "#FFFFFF",
                      backgroundColor: mode === "dark" ? "#3F3F46" : "#E5E7EB",
                    }}
                  />
                ))}
              </div>
              <p className={`text-xs ${textSecondaryClass}`}>
                Trusted by 10,000+ teams
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
