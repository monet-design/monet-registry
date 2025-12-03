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
    cardBg: "#F5F5F5",
    textPrimary: "#000000",
    textSecondary: "#6B7280",
    textMuted: "#9CA3AF",
    accentRed: "#DC2626",
    buttonBg: "#000000",
    buttonText: "#FFFFFF",
    buttonHoverBg: "#1F2937",
    checkColor: "#000000",
    badgeBorder: "#E5E7EB",
    badgeBg: "#FFFFFF",
  },
  dark: {
    background: "#0F172A",
    cardBg: "#1E293B",
    textPrimary: "#F8FAFC",
    textSecondary: "#94A3B8",
    textMuted: "#64748B",
    accentRed: "#EF4444",
    buttonBg: "#F8FAFC",
    buttonText: "#0F172A",
    buttonHoverBg: "#E2E8F0",
    checkColor: "#F8FAFC",
    badgeBorder: "#334155",
    badgeBg: "#1E293B",
  },
} as const;

/**
 * 컨텐츠 기본값
 */
const DEFAULT_CONTENT = {
  header: {
    title: "Close the deal.",
    subtitle: "Only 2 client seats left.",
  },
  plans: [
    {
      id: "starter",
      name: "Starter",
      price: "$4,490",
      period: "/month",
      description:
        "Best for start-ups that need a reliable design partner that can deliver tasks every week, and prefer to work async.",
      features: [
        "Access to all design services",
        "Tasks delivered in 2-3 days, on avg.",
        "Async communication only via Slack",
      ],
      footerNote:
        "We require a 15-min. call to make sure we're the right fit for you and to explain the next steps.",
      buttonText: "Book free discovery call",
      buttonVariant: "primary" as const,
      isPopular: false,
    },
    {
      id: "accelerator",
      name: "Accelerator",
      price: "$5,990",
      period: "/month",
      description:
        "Best for established start-ups (at Seed or Series A) that are looking to accelerate about their growth.",
      features: [
        "Everything in Starter",
        "Up to 120 min./week for meetings",
        "Webflow Development",
      ],
      footerNote:
        "We require a 15-min. call to make sure we're the right fit for you and to explain the next steps.",
      buttonText: "Book free discovery call",
      buttonVariant: "primary" as const,
      isPopular: true,
    },
    {
      id: "consultation",
      name: "Consultation",
      price: "$299",
      period: "/session",
      description:
        "A meeting where anything goes - ask us for feedback, co-work, or have us join an important team meeting.",
      features: [
        "Prep work ahead of the meeting",
        "60 min. video call (recording optional)",
        "Meeting notes and recording",
      ],
      footerNote: "",
      buttonText: "Book & Pay",
      buttonVariant: "primary" as const,
      isPopular: false,
    },
    {
      id: "one-time",
      name: "One-time project",
      price: "Request a quote",
      period: "",
      description:
        "Best for projects with a clear defined scope and timeline. Email us your project details to request a quote.",
      features: [
        "Fixed scope of work",
        "Delivered in milestones",
        "Kick-off meetings and regular check-ins",
      ],
      footerNote: "",
      buttonText: "Email us",
      buttonVariant: "outline" as const,
      isPopular: false,
    },
  ],
};

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { motion } from "motion/react";
import {
  Flag,
  ArrowUpRight,
  Phone,
  FileText,
  Check,
  ArrowRight,
  DollarSign,
} from "lucide-react";

interface PlanContent {
  id: string;
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  footerNote: string;
  buttonText: string;
  buttonVariant: "primary" | "outline";
  isPopular: boolean;
}

interface HeaderContent {
  title: string;
  subtitle: string;
}

interface PricingOplMasterContrastProps {
  mode?: "light" | "dark";
  header?: HeaderContent;
  plans?: PlanContent[];
  onPlanClick?: (planId: string) => void;
}

// Icon mapping for plans
const PlanIcons: Record<string, React.ElementType> = {
  starter: Flag,
  accelerator: ArrowUpRight,
  consultation: Phone,
  "one-time": FileText,
};

export default function PricingOplMasterContrast({
  mode = "light",
  header = DEFAULT_CONTENT.header,
  plans = DEFAULT_CONTENT.plans,
  onPlanClick,
}: PricingOplMasterContrastProps) {
  const colors = COLORS[mode];

  return (
    <section
      className="relative w-full py-16 md:py-24 px-4"
      style={{
        backgroundColor: colors.background,
        fontFamily: "'Inter', system-ui, sans-serif",
      }}
    >
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <motion.div
          className="mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {/* Dollar Icon */}
          <div className="flex items-center justify-start mb-3">
            <div
              className="w-10 h-10 rounded-full flex items-center justify-center border"
              style={{
                borderColor: colors.textMuted,
              }}
            >
              <DollarSign
                className="w-5 h-5"
                style={{ color: colors.textPrimary }}
              />
            </div>
          </div>

          {/* Title */}
          <h1
            className="text-lg md:text-xl font-semibold mb-1"
            style={{ color: colors.textPrimary }}
          >
            {header.title}
          </h1>

          {/* Subtitle (highlighted) */}
          <p
            className="text-sm font-medium"
            style={{ color: colors.accentRed }}
          >
            {header.subtitle}
          </p>
        </motion.div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {plans.map((plan, index) => {
            const IconComponent = PlanIcons[plan.id] || Flag;

            return (
              <motion.div
                key={plan.id}
                className="rounded-xl p-6 relative"
                style={{ backgroundColor: colors.cardBg }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
              >
                {/* Most Popular Badge */}
                {plan.isPopular && (
                  <div
                    className="absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-medium border"
                    style={{
                      backgroundColor: colors.badgeBg,
                      borderColor: colors.badgeBorder,
                      color: colors.textPrimary,
                    }}
                  >
                    Most popular
                  </div>
                )}

                {/* Plan Icon */}
                <div className="mb-4">
                  <IconComponent
                    className="w-5 h-5"
                    style={{ color: colors.textPrimary }}
                  />
                </div>

                {/* Plan Name */}
                <h3
                  className="text-sm font-medium mb-2"
                  style={{ color: colors.textSecondary }}
                >
                  {plan.name}
                </h3>

                {/* Price */}
                <div className="mb-3">
                  <span
                    className="text-2xl md:text-3xl font-bold"
                    style={{ color: colors.textPrimary }}
                  >
                    {plan.price}
                  </span>
                  {plan.period && (
                    <span
                      className="text-2xl md:text-3xl font-bold"
                      style={{ color: colors.textPrimary }}
                    >
                      {plan.period}
                    </span>
                  )}
                </div>

                {/* Description */}
                <p
                  className="text-sm leading-relaxed mb-5"
                  style={{ color: colors.textSecondary }}
                >
                  {plan.description}
                </p>

                {/* Features */}
                <ul className="space-y-2.5 mb-5">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-2">
                      <Check
                        className="w-4 h-4 mt-0.5 flex-shrink-0"
                        style={{ color: colors.checkColor }}
                      />
                      <span
                        className="text-sm"
                        style={{ color: colors.textSecondary }}
                      >
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* Footer Note */}
                {plan.footerNote && (
                  <p
                    className="text-xs leading-relaxed mb-4"
                    style={{ color: colors.textMuted }}
                  >
                    {plan.footerNote}
                  </p>
                )}

                {/* CTA Button */}
                <motion.button
                  onClick={() => onPlanClick?.(plan.id)}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200"
                  style={
                    plan.buttonVariant === "primary"
                      ? {
                          backgroundColor: colors.buttonBg,
                          color: colors.buttonText,
                        }
                      : {
                          backgroundColor: "transparent",
                          color: colors.textPrimary,
                          border: `1px solid ${colors.textPrimary}`,
                        }
                  }
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {plan.buttonText}
                  <ArrowRight className="w-4 h-4" />
                </motion.button>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
