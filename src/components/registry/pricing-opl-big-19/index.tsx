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
    accent: "#4B7BF5", // 파란색 버튼
    accentHover: "#3B6AE5",
    linkColor: "#5B8DEF", // view complexity sample 링크
  },
  dark: {
    accent: "#60A5FA",
    accentHover: "#3B82F6",
    linkColor: "#60A5FA",
  },
} as const;

/**
 * 이미지 에셋
 */
const IMAGES = {} as const;

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { motion } from "motion/react";
import { Check } from "lucide-react";

// Types
interface PricingFeature {
  text: string;
}

interface PricingPlan {
  name: string;
  price: string;
  priceLabel: string;
  features: PricingFeature[];
  link?: string;
  linkText?: string;
}

interface PricingOplBig19Props {
  mode?: "light" | "dark";
  title?: string;
  subtitle?: string;
  plans?: PricingPlan[];
  ctaTitle?: string;
  ctaSubtitle?: string;
  ctaButtonText?: string;
  onCtaClick?: () => void;
}

// Default plans data
const defaultPlans: PricingPlan[] = [
  {
    name: "Simple",
    price: "$59",
    priceLabel: "PER PROJECT",
    features: [
      { text: "Design file conversion to HTML/CSS template" },
      { text: "Improve existing website" },
      { text: "Maximum 10 pages per project" },
      { text: "(+$49/month) Unlimited additional work and pages - 1 task at a time" },
    ],
    linkText: "view complexity sample",
  },
  {
    name: "Moderate",
    price: "$159",
    priceLabel: "PER PROJECT",
    features: [
      { text: "Design file / hand drawn wireframe / discriptive idea conversion to HTML/CSS template" },
      { text: "Improve existing website" },
      { text: "Simple transitions" },
      { text: "Maximum 10 pages per project" },
      { text: "(+$99/month) Unlimited additional work and pages - 1 task at a time" },
    ],
    linkText: "view complexity sample",
  },
  {
    name: "Complex",
    price: "$299",
    priceLabel: "STARTING FROM",
    features: [
      { text: "Design file / hand-drawn wireframe / discriptive idea conversion to HTML/CSS template" },
      { text: "Improve existing website" },
      { text: "Simple transitions and Animations" },
      { text: "Unlimited pages" },
      { text: "(Starting from +$99/month) Unlimited additional work - 1 tasks at a time" },
    ],
    linkText: "view complexity sample",
  },
];

// CheckIcon component (blue filled circle with white check)
function CheckIcon() {
  return (
    <div className="flex h-4 w-4 flex-shrink-0 items-center justify-center rounded-full bg-[#E8F0FE]">
      <Check className="h-2.5 w-2.5 text-[#4B7BF5]" strokeWidth={3} />
    </div>
  );
}

// PricingCard component
function PricingCard({
  plan,
  index,
  linkColor,
}: {
  plan: PricingPlan;
  index: number;
  linkColor: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="flex flex-col rounded-xl bg-white p-6 shadow-[0_2px_12px_rgba(0,0,0,0.06)]"
    >
      {/* Plan name */}
      <h3 className="text-center text-base font-semibold text-gray-900">
        {plan.name}
      </h3>

      {/* Price */}
      <div className="mt-4 text-center">
        <span className="text-4xl font-bold tracking-tight text-gray-900">
          {plan.price}
        </span>
      </div>

      {/* Price label */}
      <p className="mt-1 text-center text-[10px] font-medium uppercase tracking-wider text-gray-400">
        {plan.priceLabel}
      </p>

      {/* Features */}
      <ul className="mt-6 flex-1 space-y-3">
        {plan.features.map((feature, idx) => (
          <li key={idx} className="flex items-start gap-2">
            <CheckIcon />
            <span className="text-xs leading-relaxed text-gray-500">
              {feature.text}
            </span>
          </li>
        ))}
      </ul>

      {/* Link */}
      {plan.linkText && (
        <a
          href="#"
          className="mt-6 text-center text-xs underline"
          style={{ color: linkColor }}
        >
          {plan.linkText}
        </a>
      )}
    </motion.div>
  );
}

// Main Component
export default function PricingOplBig19({
  mode = "light",
  title = "Pricing",
  subtitle = "All plans are based on the complexity of work. When you fill up the order form and describe your requirments, we will suggest you the best plan for your project.",
  plans = defaultPlans,
  ctaTitle = "Simple straight-forward",
  ctaSubtitle = "No hidden fees - No hassle - No tricks, just quality work",
  ctaButtonText = "Get Started",
  onCtaClick,
}: PricingOplBig19Props) {
  const colors = COLORS[mode];

  return (
    <section className="relative w-full bg-[#F8F9FB] py-12 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-10 text-center"
        >
          <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
            {title}
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-gray-500">
            {subtitle}
          </p>
        </motion.div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {plans.map((plan, index) => (
            <PricingCard
              key={plan.name}
              plan={plan}
              index={index}
              linkColor={colors.linkColor}
            />
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12 overflow-hidden rounded-2xl bg-[#1E2330] px-6 py-8 sm:px-10"
        >
          <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
            <div>
              <h3 className="text-lg font-semibold text-white sm:text-xl">
                {ctaTitle}
              </h3>
              <p className="mt-1 text-xs text-gray-400 sm:text-sm">
                {ctaSubtitle}
              </p>
            </div>
            <button
              onClick={onCtaClick}
              className="flex-shrink-0 rounded-lg px-6 py-3 text-sm font-medium text-white transition-colors duration-200"
              style={{
                backgroundColor: colors.accent,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = colors.accentHover;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = colors.accent;
              }}
            >
              {ctaButtonText}
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
