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
    // Gradient colors (pink to purple)
    gradientFrom: "#FF6BB3",
    gradientTo: "#C777F0",
    // Button color
    buttonBg: "#FF5FA2",
    buttonHover: "#FF4890",
    // Background
    sectionBg: "#F7F7F7",
    cardBg: "#FFFFFF",
    // Feature tag
    tagBorder: "#E5E5E5",
  },
  dark: {
    gradientFrom: "#FF6BB3",
    gradientTo: "#C777F0",
    buttonBg: "#FF5FA2",
    buttonHover: "#FF4890",
    sectionBg: "#1A1A1A",
    cardBg: "#2A2A2A",
    tagBorder: "#444444",
  },
} as const;

/**
 * 기본 컨텐츠
 */
const DEFAULT_CONTENT = {
  heading: {
    line1: "Designing a great logo is hard.",
    line2: "We make it easy.",
  },
  featureTags: [
    { icon: "palette", text: "Custom Design" },
    { icon: "phone", text: "1 Week Delivery" },
    { icon: "canva", text: "Canva Brand Kit" },
    { icon: "users", text: "Social Media Profile Pics" },
    { icon: "check", text: "Unlimited Revisions" },
    { icon: "plus", text: "Files for Print + Digital" },
    { icon: "slash", text: "No Hidden Fees" },
  ],
  plans: [
    {
      name: "Standard",
      price: "$449",
      description: "Great option for a tight budget.",
      features: [
        { icon: "sparkle", text: "2 Designs Concepts" },
        { icon: "refresh", text: "2 Free Revisions" },
        { icon: "file", text: "Files for Print + Digital" },
        { icon: "clock", text: "Delivered in 1 week or less" },
      ],
      buttonText: "Start My Logo",
    },
    {
      name: "Premium",
      price: "$599",
      description: "Our most popular package.",
      features: [
        { icon: "sparkle", text: "4 Designs Concepts" },
        { icon: "refresh", text: "Unlimited Free Revisions" },
        { icon: "users", text: "Social Media Profile Pics" },
        { icon: "canva", text: "Canva Brand Kit" },
        { icon: "file", text: "Files for Print + Digital" },
        { icon: "clock", text: "Delivered in 1 week or less" },
      ],
      buttonText: "Start My Logo",
    },
  ],
};

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { motion } from "motion/react";
import {
  Palette,
  Phone,
  Users,
  Check,
  Plus,
  Slash,
  Sparkles,
  RefreshCw,
  FileText,
  Clock,
} from "lucide-react";

// Canva-style icon component
function CanvaIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="12" cy="12" r="10" fill="#00C4CC" />
      <circle cx="12" cy="12" r="4" fill="white" />
    </svg>
  );
}

// Icon map for feature tags
function FeatureIcon({
  icon,
  className,
}: {
  icon: string;
  className?: string;
}) {
  const iconClass = className || "w-4 h-4";
  switch (icon) {
    case "palette":
      return <Palette className={`${iconClass} text-pink-500`} />;
    case "phone":
      return <Phone className={`${iconClass} text-green-500`} />;
    case "canva":
      return <CanvaIcon className={iconClass} />;
    case "users":
      return <Users className={`${iconClass} text-purple-500`} />;
    case "check":
      return <Check className={`${iconClass} text-green-500`} />;
    case "plus":
      return <Plus className={`${iconClass} text-pink-500`} />;
    case "slash":
      return <Slash className={`${iconClass} text-gray-400`} />;
    case "sparkle":
      return <Sparkles className={`${iconClass} text-yellow-500`} />;
    case "refresh":
      return <RefreshCw className={`${iconClass} text-gray-400`} />;
    case "file":
      return <FileText className={`${iconClass} text-pink-400`} />;
    case "clock":
      return <Clock className={`${iconClass} text-yellow-500`} />;
    default:
      return <Check className={iconClass} />;
  }
}

interface PlanFeature {
  icon: string;
  text: string;
}

interface Plan {
  name: string;
  price: string;
  description: string;
  features: PlanFeature[];
  buttonText: string;
}

interface FeatureTag {
  icon: string;
  text: string;
}

interface PricingOplScreenshot18Props {
  mode?: "light" | "dark";
  headingLine1?: string;
  headingLine2?: string;
  featureTags?: FeatureTag[];
  plans?: Plan[];
  onPlanSelect?: (planName: string) => void;
}

export default function PricingOplScreenshot18({
  mode = "light",
  headingLine1 = DEFAULT_CONTENT.heading.line1,
  headingLine2 = DEFAULT_CONTENT.heading.line2,
  featureTags = DEFAULT_CONTENT.featureTags,
  plans = DEFAULT_CONTENT.plans,
  onPlanSelect,
}: PricingOplScreenshot18Props) {
  const colors = COLORS[mode];
  const isDark = mode === "dark";

  return (
    <section
      className="relative w-full py-16 px-4 md:px-8"
      style={{ backgroundColor: colors.sectionBg }}
    >
      <div className="max-w-5xl mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <h1
            className={`text-3xl md:text-4xl font-bold ${isDark ? "text-white" : "text-gray-900"}`}
          >
            {headingLine1}
            <br />
            {headingLine2}
          </h1>
        </motion.div>

        {/* Feature Tags */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {featureTags.map((tag, index) => (
            <div
              key={index}
              className={`flex items-center gap-2 px-4 py-2 rounded-full border text-sm ${
                isDark
                  ? "bg-gray-800 border-gray-700 text-gray-200"
                  : "bg-white border-gray-200 text-gray-700"
              }`}
              style={{ borderColor: colors.tagBorder }}
            >
              <FeatureIcon icon={tag.icon} className="w-4 h-4" />
              <span className="font-medium">{tag.text}</span>
            </div>
          ))}
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              className="rounded-2xl overflow-hidden shadow-lg"
              style={{ backgroundColor: colors.cardBg }}
            >
              {/* Gradient Header */}
              <div
                className="px-6 py-6"
                style={{
                  background: `linear-gradient(135deg, ${colors.gradientFrom} 0%, ${colors.gradientTo} 100%)`,
                }}
              >
                <span className="inline-block px-3 py-1 bg-white/20 backdrop-blur-sm text-white text-xs font-semibold rounded-full mb-3">
                  {plan.name}
                </span>
                <div className="text-white text-4xl font-bold mb-2">
                  {plan.price}
                </div>
                <p className="text-white/90 text-sm">{plan.description}</p>
              </div>

              {/* Features List */}
              <div className="px-6 py-6">
                <ul className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-3">
                      <FeatureIcon icon={feature.icon} className="w-4 h-4" />
                      <span
                        className={`text-sm ${isDark ? "text-gray-300" : "text-gray-600"}`}
                      >
                        {feature.text}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => onPlanSelect?.(plan.name)}
                  className="w-full mt-6 py-3 px-6 rounded-full text-white font-semibold text-sm transition-colors"
                  style={{
                    backgroundColor: colors.buttonBg,
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.backgroundColor = colors.buttonHover)
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.backgroundColor = colors.buttonBg)
                  }
                >
                  {plan.buttonText}
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
