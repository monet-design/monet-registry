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
    // Primary 액센트 - 밝은 cyan/teal
    accent: "#CCF0F4",
    // Dark card background
    cardDark: "#03252F",
    // Dark card secondary text
    cardDarkText: "#7A8C90",
  },
  dark: {
    accent: "#CCF0F4",
    cardDark: "#03252F",
    cardDarkText: "#7A8C90",
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
import { Briefcase, Check } from "lucide-react";

// Types
interface PlanFeature {
  icon: "briefcase" | "check";
  text: string;
}

interface PricingPlan {
  name: string;
  description: string;
  price: string;
  priceNote: string;
  features: PlanFeature[];
  highlighted?: boolean;
}

interface PricingOplMaster19Props {
  mode?: "light" | "dark";
  title?: string;
  highlightedTitle?: string;
  subtitle?: string;
  monthlyPlan?: PricingPlan;
  yearlyPlan?: PricingPlan;
}

// 3D Cube Component
function IsometricCubes() {
  return (
    <div className="absolute -right-4 -top-8 h-32 w-32">
      {/* Large cube */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="absolute right-2 top-8"
        style={{ perspective: "200px" }}
      >
        <div
          className="relative h-12 w-12"
          style={{ transformStyle: "preserve-3d", transform: "rotateX(-15deg) rotateY(25deg)" }}
        >
          {/* Top face */}
          <div
            className="absolute h-12 w-12"
            style={{
              background: "linear-gradient(135deg, #5ED4DB 0%, #36B5C4 100%)",
              transform: "rotateX(60deg) translateZ(24px)",
              transformOrigin: "center",
            }}
          />
          {/* Front face */}
          <div
            className="absolute h-12 w-12"
            style={{
              background: "linear-gradient(180deg, #36B5C4 0%, #1A7F8E 100%)",
              transform: "translateZ(6px)",
            }}
          />
          {/* Right face */}
          <div
            className="absolute h-12 w-12"
            style={{
              background: "linear-gradient(180deg, #1A7F8E 0%, #0F5F6B 100%)",
              transform: "rotateY(90deg) translateZ(6px)",
            }}
          />
        </div>
      </motion.div>

      {/* Medium cube */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="absolute right-12 top-2"
      >
        <div className="relative h-8 w-8">
          <div
            className="absolute inset-0"
            style={{
              background: "linear-gradient(135deg, #5ED4DB 0%, #36B5C4 50%, #1A7F8E 100%)",
              clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
            }}
          />
        </div>
      </motion.div>

      {/* Small cube */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="absolute right-6 top-0"
      >
        <div className="relative h-5 w-5">
          <div
            className="absolute inset-0"
            style={{
              background: "linear-gradient(135deg, #5ED4DB 0%, #36B5C4 50%, #1A7F8E 100%)",
              clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
            }}
          />
        </div>
      </motion.div>
    </div>
  );
}

// Feature Item Component
function FeatureItem({
  feature,
  highlighted = false,
}: {
  feature: PlanFeature;
  highlighted?: boolean;
}) {
  const iconClass = highlighted ? "text-[#CCF0F4]" : "text-gray-600";
  const textClass = highlighted ? "text-[#CCF0F4]" : "text-gray-700";

  return (
    <div className="flex items-center gap-2">
      {feature.icon === "briefcase" ? (
        <Briefcase className={`h-4 w-4 ${iconClass}`} />
      ) : (
        <Check className={`h-4 w-4 ${iconClass}`} />
      )}
      <span className={`text-sm ${textClass}`}>{feature.text}</span>
    </div>
  );
}

// Plan Card Component
function PlanCard({
  plan,
  index,
}: {
  plan: PricingPlan;
  index: number;
}) {
  const isHighlighted = plan.highlighted;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 + index * 0.15 }}
      className={`relative flex flex-1 flex-col rounded-lg p-6 ${
        isHighlighted
          ? "bg-[#03252F] text-white"
          : "border border-gray-200 bg-white"
      }`}
    >
      {/* 3D Cubes for highlighted card */}
      {isHighlighted && <IsometricCubes />}

      {/* Plan Name */}
      <h3
        className={`text-base font-semibold ${
          isHighlighted ? "text-white" : "text-gray-900"
        }`}
      >
        {plan.name}
      </h3>

      {/* Description */}
      <p
        className={`mt-1 text-sm ${
          isHighlighted ? "text-[#7A8C90]" : "text-gray-500"
        }`}
      >
        {plan.description}
      </p>

      {/* Features */}
      <div className="mt-6 flex flex-col gap-2">
        {plan.features.map((feature, idx) => (
          <FeatureItem
            key={idx}
            feature={feature}
            highlighted={isHighlighted}
          />
        ))}
      </div>

      {/* Price */}
      <div className="mt-auto pt-6">
        <span
          className={`text-4xl font-light ${
            isHighlighted ? "text-[#CCF0F4]" : "text-gray-900"
          }`}
        >
          {plan.price}
        </span>
      </div>

      {/* Price Note */}
      <p
        className={`mt-2 text-xs ${
          isHighlighted ? "text-[#7A8C90]" : "text-gray-400"
        }`}
      >
        {plan.priceNote}
      </p>
    </motion.div>
  );
}

// Default Plans
const defaultMonthlyPlan: PricingPlan = {
  name: "Monthly Plan",
  description: "Simple month-to-month pricing.",
  features: [
    { icon: "briefcase", text: "Unlimited projects" },
    { icon: "check", text: "Unlimited deployments" },
  ],
  price: "$39",
  priceNote: "Price does not include your AWS cloud costs.",
  highlighted: false,
};

const defaultYearlyPlan: PricingPlan = {
  name: "Yearly Plan",
  description: "Save 14% and simplify your bookkeeping by paying anually.",
  features: [
    { icon: "briefcase", text: "Unlimited projects" },
    { icon: "check", text: "Unlimited deployments" },
  ],
  price: "$399",
  priceNote: "Price does not include your AWS cloud costs.",
  highlighted: true,
};

// Main Component
export default function PricingOplMaster19({
  mode = "light",
  title = "Simple, fixed pricing.",
  highlightedTitle = "Unlimited projects\nand deployments.",
  subtitle = "Laravel Vapor has dead simple pricing. We'll handle all the projects and\ndeployments you can throw at us. You just build something amazing.",
  monthlyPlan = defaultMonthlyPlan,
  yearlyPlan = defaultYearlyPlan,
}: PricingOplMaster19Props) {
  return (
    <section className="relative w-full bg-white py-12 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="mb-10 text-center">
          {/* Title */}
          <motion.h2
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-2xl font-semibold tracking-tight text-gray-900 sm:text-3xl"
          >
            {title}{" "}
            <span className="text-[#36B5C4]" style={{ whiteSpace: "pre-line" }}>
              {highlightedTitle}
            </span>
          </motion.h2>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-gray-500"
            style={{ whiteSpace: "pre-line" }}
          >
            {subtitle}
          </motion.p>
        </div>

        {/* Pricing Cards */}
        <div className="flex flex-col gap-4 sm:flex-row sm:gap-6">
          <PlanCard plan={monthlyPlan} index={0} />
          <PlanCard plan={yearlyPlan} index={1} />
        </div>
      </div>
    </section>
  );
}
