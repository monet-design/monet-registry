"use client";

// ============================================================================
// CUSTOMIZATION - 이 섹션의 값들을 수정하여 프로젝트에 맞게 조정하세요
// ============================================================================

/**
 * 커스텀 색상 (브랜드 컬러)
 */
const COLORS = {
  light: {
    background: "#FFFFFF",
    textPrimary: "#1A1A1A",
    textSecondary: "#6B7280",
    textMuted: "#9CA3AF",
    accentPink: "#FF6B9D",
    accentPinkHover: "#FF4D8A",
    buttonBlack: "#1A1A1A",
    buttonBlackHover: "#2D2D2D",
    cardBorder: "#E5E7EB",
    badgeBg: "#FFFFFF",
    badgeBorder: "#E5E7EB",
    badgeEnterprise: "#6366F1",
  },
  dark: {
    background: "#0F0F0F",
    textPrimary: "#FFFFFF",
    textSecondary: "#9CA3AF",
    textMuted: "#6B7280",
    accentPink: "#FF6B9D",
    accentPinkHover: "#FF4D8A",
    buttonBlack: "#FFFFFF",
    buttonBlackHover: "#E5E7EB",
    cardBorder: "#374151",
    badgeBg: "#1F2937",
    badgeBorder: "#374151",
    badgeEnterprise: "#818CF8",
  },
} as const;

/**
 * 컨텐츠 기본값
 */
const DEFAULT_CONTENT = {
  header: {
    title: "Most popular Sprints plans.",
    subtitle:
      "Each of these plans is a customized design solution with a unique, trackable roadmap. With a scalable productized system, Sprints is able to deliver top-notch websites & brands at a fraction of the time and cost.",
  },
  buttons: {
    startProject: "Start A Project",
    bookCall: "Book A Call",
  },
  plans: [
    {
      id: "website-revamp",
      name: "Website Revamp",
      emoji: "🎨",
      badge: "4-6 Weeks",
      description:
        "End-to-end marketing website revamp all the way from content strategy to Webflow development and interactions",
      price: "$5,850",
      priceLabel: "One Time Payment",
      features: [
        "Visual Design",
        "Professional Copywriting",
        "Illustrations & Graphics",
        "Webflow Development",
      ],
      ctaText: "Start A Project",
      preview: {
        type: "dark" as const,
        label: "4-6 Weeks",
      },
    },
    {
      id: "full-sprint",
      name: "Full Sprint",
      emoji: "✨",
      badge: "4-6 Weeks",
      description:
        "Branding, landing page, Webflow website revamp. Ideal those looking to redo their full marketing design.",
      price: "$6,850",
      priceLabel: "One Time Payment",
      featuresTitle: "Everything from Website Revamp",
      features: [
        "Branding & Identity",
        "Marketing Assets",
        "Social Media Design",
        "Design Consultation",
      ],
      ctaText: "Start A Project",
      preview: {
        type: "light" as const,
        label: "4-6 Weeks",
      },
    },
    {
      id: "unlimited-enterprise",
      name: "Unlimited Sprints - Enterprise",
      emoji: "💪",
      badge: "Custom",
      badgeVariant: "purple" as const,
      description:
        "Replace redundant marketing teams & agencies. Let us manage your entire digital presence for a fixed monthly fee.",
      price: "$4,850",
      priceLabel: "per month",
      featuresTitle: "Everything from Full Sprints",
      features: ["Website Management", "Brand Management"],
      ctaText: "Start A Project",
      preview: {
        type: "gradient" as const,
        label: "Custom",
        brandName: "HESTLE.",
      },
    },
  ],
};

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

interface Plan {
  id: string;
  name: string;
  emoji: string;
  badge: string;
  badgeVariant?: "default" | "purple";
  description: string;
  price: string;
  priceLabel: string;
  featuresTitle?: string;
  features: string[];
  ctaText: string;
  preview: {
    type: "dark" | "light" | "gradient";
    label: string;
    brandName?: string;
  };
}

interface HeaderContent {
  title: string;
  subtitle: string;
}

interface ButtonsContent {
  startProject: string;
  bookCall: string;
}

interface PricingOplScreenshotCopy4Props {
  mode?: "light" | "dark";
  header?: HeaderContent;
  buttons?: ButtonsContent;
  plans?: Plan[];
  onStartProject?: () => void;
  onBookCall?: () => void;
  onPlanClick?: (planId: string) => void;
}

type ColorsType = (typeof COLORS)["light"] | (typeof COLORS)["dark"];

// Card Preview Component
function CardPreview({
  preview,
  colors,
}: {
  preview: Plan["preview"];
  colors: ColorsType;
}) {
  if (preview.type === "dark") {
    return (
      <div className="relative h-40 rounded-lg overflow-hidden bg-gradient-to-br from-gray-900 to-gray-800">
        <div className="absolute top-3 right-3 px-2 py-1 bg-gray-700 rounded text-[10px] text-gray-300 font-medium">
          {preview.label}
        </div>
        {/* Mock UI elements */}
        <div className="absolute bottom-4 left-4 right-4">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-6 h-6 rounded bg-gray-700" />
            <div className="flex-1 h-2 bg-gray-700 rounded" />
          </div>
          <div className="space-y-1.5">
            <div className="h-1.5 bg-gray-700/50 rounded w-3/4" />
            <div className="h-1.5 bg-gray-700/50 rounded w-1/2" />
          </div>
        </div>
        {/* Green dot indicator */}
        <div className="absolute top-3 left-3 w-2 h-2 rounded-full bg-green-500" />
      </div>
    );
  }

  if (preview.type === "light") {
    return (
      <div className="relative h-40 rounded-lg overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200 border border-gray-200">
        <div
          className="absolute top-3 right-3 px-2 py-1 rounded text-[10px] font-medium"
          style={{
            backgroundColor: colors.badgeBg,
            border: `1px solid ${colors.badgeBorder}`,
            color: colors.textSecondary,
          }}
        >
          {preview.label}
        </div>
        {/* Mock UI elements */}
        <div className="absolute top-3 left-3 text-[8px] text-gray-500 font-medium">
          Design and Development.
          <br />
          United as One.
        </div>
        <div className="absolute bottom-4 left-4 right-4">
          <div className="grid grid-cols-3 gap-1">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="h-8 bg-gray-300/50 rounded" />
            ))}
          </div>
        </div>
      </div>
    );
  }

  // Gradient type for enterprise
  return (
    <div className="relative h-40 rounded-lg overflow-hidden bg-gradient-to-br from-indigo-200 via-purple-200 to-blue-200">
      <div
        className="absolute top-3 right-3 px-2 py-1 rounded text-[10px] font-medium text-white"
        style={{
          backgroundColor: colors.badgeEnterprise,
        }}
      >
        {preview.label}
      </div>
      {/* Brand name */}
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="text-xl font-bold text-gray-900 tracking-wide">
          {preview.brandName}
        </span>
      </div>
    </div>
  );
}

// Pricing Card Component
function PricingCard({
  plan,
  colors,
  onPlanClick,
  index,
}: {
  plan: Plan;
  colors: ColorsType;
  onPlanClick?: (planId: string) => void;
  index: number;
}) {
  return (
    <motion.div
      className="flex flex-col"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
    >
      {/* Preview Image */}
      <CardPreview preview={plan.preview} colors={colors} />

      {/* Card Content */}
      <div className="pt-5 flex-1 flex flex-col">
        {/* Title with emoji */}
        <h3
          className="text-lg font-semibold mb-2"
          style={{ color: colors.textPrimary }}
        >
          {plan.name} {plan.emoji}
        </h3>

        {/* Description */}
        <p
          className="text-sm mb-4 leading-relaxed"
          style={{ color: colors.textSecondary }}
        >
          {plan.description}
        </p>

        {/* Price Row */}
        <div className="flex items-center justify-between mb-4">
          <div>
            <span
              className="text-base font-semibold"
              style={{ color: colors.textPrimary }}
            >
              {plan.price}
            </span>
            <span
              className="text-sm ml-1"
              style={{ color: colors.textSecondary }}
            >
              - {plan.priceLabel}
            </span>
          </div>
          <motion.button
            onClick={() => onPlanClick?.(plan.id)}
            className="w-8 h-8 rounded-full flex items-center justify-center"
            style={{ backgroundColor: colors.buttonBlack }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <ArrowRight className="w-4 h-4 text-white" />
          </motion.button>
        </div>

        {/* Features Title */}
        {plan.featuresTitle && (
          <p
            className="text-sm font-medium mb-2 italic"
            style={{ color: colors.textSecondary }}
          >
            {plan.featuresTitle}
          </p>
        )}

        {/* Features List */}
        <div className="flex-1">
          {plan.features.map((feature, idx) => (
            <p
              key={idx}
              className="text-sm py-2 border-t"
              style={{
                color: colors.textSecondary,
                borderColor: colors.cardBorder,
              }}
            >
              {feature}
            </p>
          ))}
        </div>

        {/* CTA Button */}
        <motion.button
          onClick={() => onPlanClick?.(plan.id)}
          className="w-full mt-4 py-3 px-6 rounded-full text-sm font-medium transition-colors"
          style={{
            backgroundColor: colors.buttonBlack,
            color: "#FFFFFF",
          }}
          whileHover={{
            backgroundColor: colors.buttonBlackHover,
          }}
          whileTap={{ scale: 0.98 }}
        >
          {plan.ctaText}
        </motion.button>
      </div>
    </motion.div>
  );
}

// Abstract 3D Shape Component (SVG placeholder)
function Abstract3DShape() {
  return (
    <svg
      width="200"
      height="200"
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full"
    >
      <defs>
        <linearGradient id="purple1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#8B5CF6" />
          <stop offset="100%" stopColor="#6366F1" />
        </linearGradient>
        <linearGradient id="blue1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#3B82F6" />
          <stop offset="100%" stopColor="#2563EB" />
        </linearGradient>
        <linearGradient id="yellow1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FBBF24" />
          <stop offset="100%" stopColor="#F59E0B" />
        </linearGradient>
      </defs>
      {/* Purple flowing shape */}
      <path
        d="M60 40 Q90 20 120 50 Q150 80 130 120 Q110 160 70 140 Q30 120 40 80 Q50 50 60 40"
        fill="url(#purple1)"
        opacity="0.9"
      />
      {/* Blue curved ribbon */}
      <path
        d="M100 30 Q140 50 160 100 Q180 150 140 170 Q100 190 80 150 Q60 110 100 80 Q130 60 100 30"
        fill="url(#blue1)"
        opacity="0.85"
      />
      {/* Yellow accent */}
      <ellipse
        cx="150"
        cy="60"
        rx="30"
        ry="20"
        fill="url(#yellow1)"
        opacity="0.9"
        transform="rotate(-20 150 60)"
      />
      {/* Small purple accent */}
      <circle cx="85" cy="95" r="15" fill="#A78BFA" opacity="0.7" />
    </svg>
  );
}

export default function PricingOplScreenshotCopy4({
  mode = "light",
  header = DEFAULT_CONTENT.header,
  buttons = DEFAULT_CONTENT.buttons,
  plans = DEFAULT_CONTENT.plans,
  onStartProject,
  onBookCall,
  onPlanClick,
}: PricingOplScreenshotCopy4Props) {
  const colors = COLORS[mode];

  return (
    <section
      className="relative w-full py-16 md:py-24 px-4 overflow-hidden"
      style={{ backgroundColor: colors.background }}
    >
      <style jsx>{`
        @import url("https://fonts.googleapis.com/css2?family=DM+Serif+Display&display=swap");
        @import url("https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap");

        .font-serif-heading {
          font-family: "DM Serif Display", Georgia, serif;
        }

        .font-sans {
          font-family: "Inter", system-ui, sans-serif;
        }
      `}</style>

      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="relative mb-16">
          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8">
            {/* Left Content */}
            <motion.div
              className="max-w-xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h1
                className="font-serif-heading text-3xl md:text-4xl lg:text-5xl mb-4"
                style={{ color: colors.textPrimary }}
              >
                {header.title}
              </h1>
              <p
                className="font-sans text-sm md:text-base leading-relaxed mb-6"
                style={{ color: colors.textSecondary }}
              >
                {header.subtitle}
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-3">
                <motion.button
                  onClick={onStartProject}
                  className="px-5 py-2.5 rounded-full text-sm font-medium text-white"
                  style={{ backgroundColor: colors.buttonBlack }}
                  whileHover={{
                    backgroundColor: colors.buttonBlackHover,
                  }}
                  whileTap={{ scale: 0.98 }}
                >
                  {buttons.startProject}
                </motion.button>
                <motion.button
                  onClick={onBookCall}
                  className="px-5 py-2.5 rounded-full text-sm font-medium text-white"
                  style={{ backgroundColor: colors.accentPink }}
                  whileHover={{
                    backgroundColor: colors.accentPinkHover,
                  }}
                  whileTap={{ scale: 0.98 }}
                >
                  {buttons.bookCall}
                </motion.button>
              </div>
            </motion.div>

            {/* Right Decorative Element */}
            <motion.div
              className="hidden lg:block w-48 h-48 -mt-8"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Abstract3DShape />
            </motion.div>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <PricingCard
              key={plan.id}
              plan={plan}
              colors={colors}
              onPlanClick={onPlanClick}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
