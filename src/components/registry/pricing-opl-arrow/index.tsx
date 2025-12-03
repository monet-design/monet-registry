"use client";

// ============================================================================
// CUSTOMIZATION - 이 섹션의 값들을 수정하여 프로젝트에 맞게 조정하세요
// ============================================================================

/**
 * 커스텀 색상 (브랜드 컬러)
 */
const COLORS = {
  background: "#131313",
  cardBackground: "#1A1A1A",
  cardBorder: "#2A2A2A",
  accent: "#A3E635", // Lime green accent
  accentMuted: "#4A5D3A",
  textPrimary: "#FFFFFF",
  textSecondary: "#9CA3AF",
  textMuted: "#6B7280",
  basicButton: "#2D2D2F",
  basicButtonHover: "#3D3D3F",
  proButton: "#2A3A24",
  proButtonBorder: "#3A4A34",
} as const;

/**
 * 이미지 에셋
 */
const IMAGES = {} as const;

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { motion } from "motion/react";
import { Check, X, ArrowUpRight } from "lucide-react";

// Types
interface Feature {
  text: string;
  highlight?: string;
  included: boolean;
}

interface PricingPlan {
  name: string;
  price: number;
  originalPrice: number;
  description: string;
  features: Feature[];
  isPro?: boolean;
}

interface PricingOplArrowProps {
  badge?: string;
  headline?: string;
  highlightText?: string;
  basicPlan?: PricingPlan;
  proPlan?: PricingPlan;
  footerNote?: string;
  footerSubNote?: string;
  onBasicClick?: () => void;
  onProClick?: () => void;
}

// Default data
const defaultBasicPlan: PricingPlan = {
  name: "Basic",
  price: 24,
  originalPrice: 35,
  description: "Arrow Dynamics Component + Framer Remixes of Arrow Gallery\nDemos (3 Sites)",
  features: [
    { text: "Arrow Dynamics Framer Component (All Variations)", included: true },
    { text: "Arrow Gallery Demos *", highlight: "Framer files", included: true },
    { text: "Lifetime free updates and fixes to the Component", included: true },
    { text: "License", highlight: "Personal projects only", included: true },
    { text: "Use of AD Component in Framer Templates / Remixes", included: false },
  ],
};

const defaultProPlan: PricingPlan = {
  name: "Pro",
  price: 245,
  originalPrice: 350,
  description: "Arrow Dynamics Component + Fully editable Framer and Figma\nfiles of the Arrow Dynamics Website",
  isPro: true,
  features: [
    { text: "Arrow Dynamics Framer Component (All Variations)", included: true },
    { text: "Arrow Gallery Demos *", highlight: "Framer + Figma files", included: true },
    { text: "Arrow Dynamics Full Website", highlight: "Framer + Figma files", included: true },
    { text: "All Framer.zip code overrides used in the Website", included: true },
    { text: "Lifetime free updates and fixes to the Component", included: true },
    { text: "License", highlight: "Personal + Client projects", included: true },
    { text: "Use of AD Component in Framer Templates / Remixes", included: false },
  ],
};

// Preview Card Component (simulated gallery preview)
function PreviewCard({ isPro = false }: { isPro?: boolean }) {
  return (
    <div className="relative w-full aspect-[16/10] rounded-xl overflow-hidden bg-[#0F0F0F] border border-[#2A2A2A]">
      {/* Header bar */}
      <div className="absolute top-3 left-3 flex items-center gap-2">
        <div className="text-[10px] text-gray-500 font-medium tracking-wide">
          {isPro ? "arrowdynamics" : "arrowdynamics"}
        </div>
      </div>

      {/* Content grid - Arrows simulation */}
      <div className="absolute inset-0 flex items-center justify-center p-4">
        <div className="grid grid-cols-6 gap-2 w-full max-w-[200px]">
          {/* Arrows grid */}
          {Array.from({ length: 18 }).map((_, i) => (
            <div
              key={i}
              className="text-blue-400 text-[10px] flex items-center justify-center"
              style={{ opacity: 0.6 + Math.random() * 0.4 }}
            >
              {["→", "↗", "↘", "↓", "↑", "←"][i % 6]}
            </div>
          ))}
        </div>

        {/* Right side content */}
        <div className="absolute right-4 top-1/2 -translate-y-1/2 flex flex-col gap-2">
          <div className="text-[8px] text-gray-400 font-bold tracking-wider">
            {isPro ? "PRO" : "BASIC"}
          </div>
          <div className="text-[6px] text-gray-500">
            {isPro ? "Arrow Gallery Demos" : "Arrow Gallery Demos"}
          </div>
          <div className="text-[6px] text-gray-500">
            {isPro ? "Full Website" : ""}
          </div>
        </div>
      </div>

      {/* Bottom icons */}
      <div className="absolute bottom-3 left-3 flex items-center gap-2">
        <div className="w-5 h-5 rounded bg-blue-500/20 flex items-center justify-center">
          <span className="text-blue-400 text-[8px]">F</span>
        </div>
        <div className="w-5 h-5 rounded bg-purple-500/20 flex items-center justify-center">
          <span className="text-purple-400 text-[8px]">◆</span>
        </div>
        {isPro && (
          <div className="w-5 h-5 rounded bg-pink-500/20 flex items-center justify-center">
            <span className="text-pink-400 text-[8px]">◇</span>
          </div>
        )}
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-3 right-3 flex items-center gap-1">
        {[...Array(3)].map((_, i) => (
          <div
            key={i}
            className="w-1.5 h-1.5 rounded-full bg-gray-600"
          />
        ))}
      </div>

      {/* Navigation arrow */}
      <div className="absolute right-3 top-1/2 -translate-y-1/2">
        <div className="w-5 h-5 rounded-full border border-gray-600 flex items-center justify-center">
          <span className="text-gray-400 text-[8px]">›</span>
        </div>
      </div>
    </div>
  );
}

// Feature Item Component
function FeatureItem({ feature, isPro = false }: { feature: Feature; isPro?: boolean }) {
  return (
    <div className="flex items-start gap-3 py-2">
      <div className="mt-0.5">
        {feature.included ? (
          <Check className="w-4 h-4 text-gray-400" strokeWidth={2} />
        ) : (
          <X className="w-4 h-4 text-gray-500" strokeWidth={2} />
        )}
      </div>
      <span className="text-sm text-gray-400 leading-relaxed">
        {feature.text}
        {feature.highlight && (
          <>
            {" → "}
            <span className={isPro ? "text-lime-400 font-medium" : "text-gray-300"}>
              {feature.highlight}
            </span>
          </>
        )}
      </span>
    </div>
  );
}

// Pricing Card Component
function PricingCard({
  plan,
  onButtonClick,
}: {
  plan: PricingPlan;
  onButtonClick?: () => void;
}) {
  const isPro = plan.isPro;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: isPro ? 0.2 : 0.1 }}
      className={`relative flex flex-col rounded-2xl border p-6 ${
        isPro
          ? "border-[#3A4A34] bg-gradient-to-b from-[#1A1F18] to-[#141714]"
          : "border-[#2A2A2A] bg-[#1A1A1A]"
      }`}
    >
      {/* Preview Card */}
      <div className="mb-6">
        <PreviewCard isPro={isPro} />
      </div>

      {/* Plan Name & Price */}
      <div className="flex items-baseline justify-between mb-4">
        <h3
          className="text-3xl text-white"
          style={{ fontFamily: "'Instrument Serif', serif", fontStyle: "italic" }}
        >
          {plan.name}
        </h3>
        <div className="flex items-baseline gap-2">
          <span className={`text-2xl font-semibold ${isPro ? "text-lime-400" : "text-white"}`}>
            ${plan.price}
          </span>
          <span className="text-gray-500 line-through text-sm">${plan.originalPrice}</span>
        </div>
      </div>

      {/* Description */}
      <p className="text-sm text-gray-400 mb-6 leading-relaxed whitespace-pre-line">
        {plan.description.split("\n").map((line, i) => (
          <span key={i}>
            {isPro ? (
              <>
                {line.includes("Fully editable") ? (
                  <>
                    Arrow Dynamics Component +{" "}
                    <span className="text-lime-400">Fully editable Framer and Figma</span>
                  </>
                ) : line.includes("files of") ? (
                  <span className="text-lime-400">{line}</span>
                ) : (
                  line
                )}
              </>
            ) : (
              line
            )}
            {i < plan.description.split("\n").length - 1 && <br />}
          </span>
        ))}
      </p>

      {/* Features List */}
      <div className="flex-1 space-y-1 mb-6">
        {plan.features.map((feature, index) => (
          <FeatureItem key={index} feature={feature} isPro={isPro} />
        ))}
      </div>

      {/* CTA Button */}
      <button
        onClick={onButtonClick}
        className={`w-full py-4 rounded-xl font-medium text-sm flex items-center justify-center gap-2 transition-all duration-300 ${
          isPro
            ? "bg-[#2A3A24] border border-[#3A4A34] text-lime-400 hover:bg-[#3A4A34]"
            : "bg-[#2D2D2F] border border-[#3D3D3D] text-white hover:bg-[#3D3D3F]"
        }`}
      >
        Buy {plan.name}
        <ArrowUpRight className="w-4 h-4" />
      </button>
    </motion.div>
  );
}

// Main Component
export default function PricingOplArrow({
  badge = "Pricing",
  headline = "Get Arrow Dynamics at",
  highlightText = "30% Discount",
  basicPlan = defaultBasicPlan,
  proPlan = defaultProPlan,
  footerNote = "* Sites included: Quiver of Arrows, Orbs, Truchet Tiles",
  footerSubNote = "One time purchase  •  100% Fun  •  Payments via LemonSqueezy",
  onBasicClick,
  onProClick,
}: PricingOplArrowProps) {
  return (
    <section
      className="relative w-full min-h-screen py-20 px-4 overflow-hidden"
      style={{ backgroundColor: COLORS.background }}
    >
      {/* Background decoration - subtle stars/particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute w-0.5 h-0.5 bg-white/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              opacity: 0.1 + Math.random() * 0.3,
            }}
          />
        ))}
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex justify-center mb-8"
        >
          <div
            className="px-6 py-2 rounded-full border border-[#3A3A3A] bg-[#1A1A1A]/50"
            style={{ fontFamily: "'Instrument Serif', serif" }}
          >
            <span className="text-[#E8E4D9] text-lg italic">{badge}</span>
          </div>
        </motion.div>

        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-center text-white text-lg md:text-xl mb-12"
        >
          {headline}{" "}
          <span style={{ color: COLORS.accent }}>{highlightText}</span>
        </motion.h2>

        {/* Pricing Cards Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <PricingCard plan={basicPlan} onButtonClick={onBasicClick} />
          <PricingCard plan={proPlan} onButtonClick={onProClick} />
        </div>

        {/* Footer Notes */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center space-y-2"
        >
          <p className="text-sm text-gray-500">{footerNote}</p>
          <p className="text-sm text-gray-600">{footerSubNote}</p>
        </motion.div>
      </div>

      {/* Import Google Font for Instrument Serif */}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&display=swap');
      `}</style>
    </section>
  );
}
