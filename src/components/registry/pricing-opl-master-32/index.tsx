"use client";

// ============================================================================
// CUSTOMIZATION - 이 섹션의 값들을 수정하여 프로젝트에 맞게 조정하세요
// ============================================================================

/**
 * 커스텀 색상 (브랜드 컬러)
 */
const COLORS = {
  light: {
    background: "#F5F5F5",
    cardBg: "#FFFFFF",
    primaryButton: "#1A1A1A",
    primaryButtonText: "#FFFFFF",
    secondaryButton: "#FFFFFF",
    secondaryButtonText: "#1A1A1A",
    secondaryButtonBorder: "#E5E5E5",
    redAccent: "#EF4444",
    greenAccent: "#22C55E",
    starIcon: "#1A1A1A",
  },
  dark: {
    background: "#0A0A0A",
    cardBg: "#1A1A1A",
    primaryButton: "#FFFFFF",
    primaryButtonText: "#1A1A1A",
    secondaryButton: "#1A1A1A",
    secondaryButtonText: "#FFFFFF",
    secondaryButtonBorder: "#374151",
    redAccent: "#F87171",
    greenAccent: "#4ADE80",
    starIcon: "#FFFFFF",
  },
} as const;

/**
 * 이미지 에셋
 */
const IMAGES = {
  avatar1: {
    path: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
    alt: "Oliver Cameron avatar",
    prompt: `Professional headshot avatar of a young Caucasian man`,
  },
  avatar2: {
    path: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=100&h=100&fit=crop&crop=face",
    alt: "Joji-Kun avatar",
    prompt: `Professional headshot avatar of a young Asian man`,
  },
} as const;

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { motion } from "motion/react";
import { Star, Calendar, Sparkles } from "lucide-react";

interface Testimonial {
  quote: string;
  name: string;
  company: string;
  avatar: string;
}

interface PricingPlan {
  id: string;
  name: string;
  price: string;
  period: string;
  description: string;
  badge?: {
    text: string;
    type: "limited" | "save";
  };
  testimonial: Testimonial;
  icon: "circle" | "star";
}

interface Feature {
  text: string;
}

interface PricingOplMaster32Props {
  mode?: "light" | "dark";
  title?: string;
  titleHighlight?: string;
  subtitle?: string;
  plans?: PricingPlan[];
  features?: Feature[];
  onSubscribe?: (planId: string) => void;
  onBookCall?: (planId: string) => void;
}

const defaultPlans: PricingPlan[] = [
  {
    id: "monthly",
    name: "Monthly",
    price: "$6,995",
    period: "/mo",
    description:
      "Perfect for those with an on-going need for design work and a desire to grow.",
    badge: {
      text: "Limited availability",
      type: "limited",
    },
    testimonial: {
      quote: "We raised $8m after using Endless.",
      name: "Oliver Cameron",
      company: "Odyssey",
      avatar: IMAGES.avatar1.path,
    },
    icon: "circle",
  },
  {
    id: "quarterly",
    name: "Quarterly",
    price: "$6,495",
    period: "/mo",
    description:
      "Perfect for those who plan to work together and anticipate a longer-term design relationship.",
    badge: {
      text: "Save $1,500",
      type: "save",
    },
    testimonial: {
      quote: "You sir are a gigachad.",
      name: "Joji-Kun",
      company: "Intuition",
      avatar: IMAGES.avatar2.path,
    },
    icon: "star",
  },
];

const defaultFeatures: Feature[] = [
  { text: "Dedicated designer" },
  { text: "Private Slack channel" },
  { text: "1:1 async communication" },
  { text: "No hiring required" },
  { text: "Pause or cancel anytime" },
  { text: "No contracts" },
  { text: "No meetings" },
];

// Badge icon component for limited availability
const LimitedIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M8 14C11.3137 14 14 11.3137 14 8C14 4.68629 11.3137 2 8 2C4.68629 2 2 4.68629 2 8C2 11.3137 4.68629 14 8 14Z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M8 5V8L10 10"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default function PricingOplMaster32({
  mode = "light",
  title = "Subscription plans.",
  titleHighlight = "Short term, or long term, you're in good hands.",
  plans = defaultPlans,
  features = defaultFeatures,
  onSubscribe,
  onBookCall,
}: PricingOplMaster32Props) {
  const colors = COLORS[mode];
  const isDark = mode === "dark";

  return (
    <section
      className="relative w-full py-16 px-4 sm:px-6 lg:px-8"
      style={{ backgroundColor: colors.background }}
    >
      <div className="mx-auto max-w-xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <h1 className="text-xl sm:text-2xl">
            <span
              className={`font-semibold ${isDark ? "text-white" : "text-gray-900"}`}
            >
              {title}
            </span>{" "}
            <span className={isDark ? "text-gray-400" : "text-gray-500"}>
              {titleHighlight}
            </span>
          </h1>
        </motion.div>

        {/* Pricing Cards */}
        <div className="space-y-4 mb-8">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="rounded-2xl p-5"
              style={{ backgroundColor: colors.cardBg }}
            >
              {/* Card Header */}
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  {plan.icon === "circle" ? (
                    <div
                      className={`w-3 h-3 rounded-full ${isDark ? "bg-gray-600" : "bg-gray-400"}`}
                    />
                  ) : (
                    <Sparkles
                      className={`w-4 h-4 ${isDark ? "text-gray-400" : "text-gray-500"}`}
                    />
                  )}
                  <span
                    className={`text-sm font-medium ${isDark ? "text-gray-300" : "text-gray-700"}`}
                  >
                    {plan.name}
                  </span>
                </div>

                {plan.badge && (
                  <div
                    className="flex items-center gap-1 text-xs font-medium"
                    style={{
                      color:
                        plan.badge.type === "limited"
                          ? colors.redAccent
                          : colors.greenAccent,
                    }}
                  >
                    {plan.badge.type === "limited" ? (
                      <LimitedIcon />
                    ) : (
                      <Sparkles className="w-3.5 h-3.5" />
                    )}
                    <span>{plan.badge.text}</span>
                  </div>
                )}
              </div>

              {/* Price */}
              <div className="mb-3">
                <span
                  className={`text-3xl font-semibold ${isDark ? "text-white" : "text-gray-900"}`}
                >
                  {plan.price}
                </span>
                <span className={isDark ? "text-gray-500" : "text-gray-500"}>
                  {plan.period}
                </span>
              </div>

              {/* Description */}
              <p
                className={`text-sm mb-5 leading-relaxed ${isDark ? "text-gray-400" : "text-gray-600"}`}
              >
                {plan.description}
              </p>

              {/* Buttons */}
              <div className="flex gap-3 mb-5">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => onSubscribe?.(plan.id)}
                  className="flex-1 py-2.5 px-4 rounded-full text-sm font-medium transition-colors"
                  style={{
                    backgroundColor: colors.primaryButton,
                    color: colors.primaryButtonText,
                  }}
                >
                  Subscribe
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => onBookCall?.(plan.id)}
                  className="flex-1 py-2.5 px-4 rounded-full text-sm font-medium flex items-center justify-center gap-2 border transition-colors"
                  style={{
                    backgroundColor: colors.secondaryButton,
                    color: colors.secondaryButtonText,
                    borderColor: colors.secondaryButtonBorder,
                  }}
                >
                  <Calendar className="w-4 h-4" />
                  Book a call
                </motion.button>
              </div>

              {/* Testimonial */}
              <div className="flex items-center gap-3">
                <img
                  src={plan.testimonial.avatar}
                  alt={plan.testimonial.name}
                  className="w-8 h-8 rounded-full object-cover"
                />
                <div>
                  <p
                    className={`text-sm font-medium ${isDark ? "text-gray-200" : "text-gray-800"}`}
                  >
                    {plan.testimonial.quote}
                  </p>
                  <p
                    className={`text-xs ${isDark ? "text-gray-500" : "text-gray-400"}`}
                  >
                    {plan.testimonial.name}, {plan.testimonial.company}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Features List */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="space-y-2.5"
        >
          {features.map((feature, index) => (
            <div key={index} className="flex items-center gap-2.5">
              <Star
                className="w-4 h-4 flex-shrink-0"
                style={{ color: colors.starIcon }}
                fill={colors.starIcon}
              />
              <span
                className={`text-sm ${isDark ? "text-gray-300" : "text-gray-700"}`}
              >
                {feature.text}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
