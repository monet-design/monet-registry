"use client";

// ============================================================================
// CUSTOMIZATION - 이 섹션의 값들을 수정하여 프로젝트에 맞게 조정하세요
// ============================================================================

/**
 * 커스텀 색상 (브랜드 컬러)
 */
const COLORS = {
  background: "#0a0a0a",
  cardBackground: "#141414",
  cardBorder: "#1f1f1f",
  textPrimary: "#ffffff",
  textSecondary: "#9ca3af",
  marketingGradientStart: "#f97316",
  marketingGradientEnd: "#fbbf24",
  supportGradientStart: "#ec4899",
  supportGradientEnd: "#a855f7",
  salesGradientStart: "#8b5cf6",
  salesGradientEnd: "#f97316",
} as const;

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { motion, type Variants } from "motion/react";
import { Plus, MessageSquare, Check, DollarSign } from "lucide-react";
import "./font.css";

interface FeatureCard {
  title: string;
  titleAccent?: string;
  description: string;
  illustration: "marketing" | "support" | "sales";
}

interface SaaspoFeatureSectionsTypebotProps {
  heading?: string;
  subheading?: string;
  features?: FeatureCard[];
}

// Marketing Card Illustration
function MarketingIllustration() {
  return (
    <div className="relative h-full w-full flex items-center justify-center">
      {/* Chat bubble - left */}
      <div className="absolute left-4 top-1/2 -translate-y-1/2">
        <div className="relative">
          {/* Main chat container */}
          <div className="w-24 rounded-xl bg-[#1a1a1a] p-3 shadow-lg border border-[#2a2a2a]">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-5 h-5 rounded-full bg-gradient-to-br from-orange-500 to-yellow-500" />
              <div className="h-2 w-10 bg-[#333] rounded-full" />
            </div>
            <div className="space-y-1.5">
              <div className="h-1.5 w-14 bg-[#333] rounded-full" />
              <div className="h-1.5 w-10 bg-[#333] rounded-full" />
            </div>
          </div>
          {/* Small chat bubble */}
          <div className="absolute -bottom-2 -right-4 w-10 h-8 rounded-lg bg-[#252525] border border-[#333] flex items-center justify-center">
            <MessageSquare className="w-4 h-4 text-gray-500" />
          </div>
        </div>
      </div>

      {/* Planet - right */}
      <div className="absolute right-8 top-1/2 -translate-y-1/3">
        <div className="relative">
          {/* Planet glow */}
          <div className="absolute inset-0 blur-xl bg-gradient-to-br from-orange-500/40 to-yellow-500/40 rounded-full scale-125" />
          {/* Planet body */}
          <div className="relative w-20 h-20 rounded-full bg-gradient-to-br from-orange-500 via-orange-400 to-yellow-500 shadow-lg overflow-hidden">
            {/* Planet rings/bands */}
            <div className="absolute inset-0 opacity-30">
              <div className="absolute top-4 left-0 right-0 h-1 bg-orange-300/50 rounded-full transform -rotate-12" />
              <div className="absolute top-8 left-0 right-0 h-0.5 bg-yellow-200/30 rounded-full transform -rotate-12" />
              <div className="absolute top-12 left-0 right-0 h-1.5 bg-orange-600/40 rounded-full transform -rotate-12" />
            </div>
            {/* Highlight */}
            <div className="absolute top-2 right-3 w-4 h-4 rounded-full bg-white/30 blur-sm" />
          </div>
          {/* Orbit ring */}
          <div className="absolute -inset-4 border border-orange-500/20 rounded-full transform rotate-12" />
        </div>
      </div>
    </div>
  );
}

// Support & Product Card Illustration
function SupportIllustration() {
  return (
    <div className="relative h-full w-full flex items-center justify-center">
      {/* Container card */}
      <div className="relative w-52 rounded-xl bg-[#1a1a1a] p-4 shadow-lg border border-[#2a2a2a]">
        <div className="flex items-center gap-3">
          {/* Checkmark circle */}
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-pink-500 to-purple-500 flex items-center justify-center shadow-lg">
            <Check className="w-4 h-4 text-white" strokeWidth={3} />
          </div>
          {/* Progress bar */}
          <div className="flex-1">
            <div className="h-3 bg-[#2a2a2a] rounded-full overflow-hidden">
              <div
                className="h-full rounded-full bg-gradient-to-r from-pink-500 to-purple-500"
                style={{ width: '75%' }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Glow effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-16 bg-gradient-to-r from-pink-500/20 to-purple-500/20 blur-2xl rounded-full" />
    </div>
  );
}

// Sales Card Illustration
function SalesIllustration() {
  return (
    <div className="relative h-full w-full flex items-center justify-center">
      {/* Main container with dollar sign */}
      <div className="relative">
        {/* Background glow */}
        <div className="absolute inset-0 blur-xl bg-gradient-to-br from-purple-500/30 to-orange-500/30 rounded-full scale-150" />

        {/* Dollar sign container */}
        <div className="relative flex items-center justify-center">
          {/* Wave effects - left */}
          <div className="absolute -left-8 flex flex-col gap-1">
            <div className="w-6 h-0.5 bg-gradient-to-r from-purple-500/60 to-transparent rounded-full" />
            <div className="w-4 h-0.5 bg-gradient-to-r from-purple-400/40 to-transparent rounded-full" />
            <div className="w-5 h-0.5 bg-gradient-to-r from-purple-500/50 to-transparent rounded-full" />
          </div>

          {/* Dollar icon */}
          <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-orange-500 via-orange-400 to-yellow-500 flex items-center justify-center shadow-lg">
            <DollarSign className="w-10 h-10 text-white" strokeWidth={2.5} />
          </div>

          {/* Wave effects - right */}
          <div className="absolute -right-8 flex flex-col gap-1">
            <div className="w-6 h-0.5 bg-gradient-to-l from-orange-500/60 to-transparent rounded-full" />
            <div className="w-4 h-0.5 bg-gradient-to-l from-orange-400/40 to-transparent rounded-full" />
            <div className="w-5 h-0.5 bg-gradient-to-l from-orange-500/50 to-transparent rounded-full" />
          </div>
        </div>
      </div>
    </div>
  );
}

const defaultFeatures: FeatureCard[] = [
  {
    title: "Marketing",
    description: "Let your bot drive the conversation and turn leads into customers.",
    illustration: "marketing",
  },
  {
    title: "Support",
    titleAccent: "& Product",
    description: "Deliver 24/7 multichannel support and make your customers happy.",
    illustration: "support",
  },
  {
    title: "Sales",
    description: "Boost meetings and show rates with highly interested leads",
    illustration: "sales",
  },
];

export default function SaaspoFeatureSectionsTypebot({
  heading = "Designed for every department",
  subheading = "Automate conversations throughout the entire customer journey.",
  features = defaultFeatures,
}: SaaspoFeatureSectionsTypebotProps) {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const getIllustration = (type: FeatureCard["illustration"]) => {
    switch (type) {
      case "marketing":
        return <MarketingIllustration />;
      case "support":
        return <SupportIllustration />;
      case "sales":
        return <SalesIllustration />;
      default:
        return null;
    }
  };

  return (
    <section
      className="relative w-full py-20 md:py-28 lg:py-32"
      style={{ backgroundColor: COLORS.background }}
    >
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-12 md:mb-16"
        >
          <h2
            className="text-4xl md:text-5xl lg:text-6xl font-normal mb-4 tracking-tight"
            style={{
              color: COLORS.textPrimary,
              fontFamily: "'Instrument Serif', Georgia, serif",
              fontStyle: "italic",
            }}
          >
            {heading}
          </h2>
          <p
            className="text-lg md:text-xl max-w-xl"
            style={{ color: COLORS.textSecondary }}
          >
            {subheading}
          </p>
        </motion.div>

        {/* Feature Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group relative rounded-2xl overflow-hidden transition-all duration-300 hover:scale-[1.02]"
              style={{
                backgroundColor: COLORS.cardBackground,
                border: `1px solid ${COLORS.cardBorder}`,
              }}
            >
              {/* Illustration Area */}
              <div className="h-44 md:h-48 relative overflow-hidden">
                {getIllustration(feature.illustration)}
              </div>

              {/* Content Area */}
              <div className="p-5 md:p-6 pt-4">
                <h3
                  className="text-2xl md:text-3xl font-semibold mb-3"
                  style={{ color: COLORS.textPrimary }}
                >
                  {feature.title}
                  {feature.titleAccent && (
                    <span
                      className="font-normal"
                      style={{
                        fontFamily: "'Instrument Serif', Georgia, serif",
                        fontStyle: "italic",
                      }}
                    >
                      {" "}{feature.titleAccent}
                    </span>
                  )}
                </h3>
                <p
                  className="text-base leading-relaxed"
                  style={{ color: COLORS.textSecondary }}
                >
                  {feature.description}
                </p>
              </div>

              {/* Expand Button */}
              <button
                className="absolute bottom-5 right-5 w-9 h-9 rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                style={{
                  backgroundColor: "rgba(255, 255, 255, 0.08)",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                }}
                aria-label="Expand details"
              >
                <Plus className="w-4 h-4" style={{ color: COLORS.textSecondary }} />
              </button>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
