"use client";

// ============================================================================
// CUSTOMIZATION - 이 섹션의 값들을 수정하여 프로젝트에 맞게 조정하세요
// ============================================================================

/**
 * 커스텀 색상 (브랜드 컬러)
 */
const COLORS = {
  background: "#F7F7F7",
  cardBackground: "#22252C",
  cardText: "#FFFFFF",
  cardTextMuted: "#9CA3AF",
  basicAccent: "#4FD1C5", // teal/cyan
  professionalAccent: "#A78BFA", // purple
  businessAccent: "#F472B6", // pink
  buttonGreen: "#4ADE80",
  buttonGreenHover: "#22C55E",
  toggleBackground: "#E6EDE5",
  toggleActive: "#4ADE80",
  checkIcon: "#4FD1C5",
  titleText: "#1F2937",
  subtitleText: "#6B7280",
} as const;

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { motion } from "motion/react";
import { Check } from "lucide-react";

interface PricingFeature {
  highlight?: string;
  text: string;
}

interface PricingPlan {
  name: string;
  price: string;
  accentColor: string;
  features: PricingFeature[];
}

interface BenefitItem {
  text: string;
}

interface Pricing12802Props {
  headline?: {
    prefix?: string;
    highlight?: string;
    suffix?: string;
  };
  subheadline?: string;
  toggleOptions?: string[];
  activeToggle?: number;
  plans?: PricingPlan[];
  benefitsTitle?: string;
  benefits?: BenefitItem[];
  buttonText?: string;
  onEnquire?: (planName: string) => void;
}

const defaultPlans: PricingPlan[] = [
  {
    name: "Basic",
    price: "$17,500",
    accentColor: COLORS.basicAccent,
    features: [
      { highlight: "1 - 3", text: "screens" },
      { highlight: "Native", text: "UI" },
      { highlight: "Basic", text: "animation" },
      { highlight: "No", text: "backend" },
      { highlight: "Email", text: "authentication" },
      { highlight: "In-app", text: "analytics" },
      { highlight: "Ad", text: "support" },
    ],
  },
  {
    name: "Professional",
    price: "$25,000",
    accentColor: COLORS.professionalAccent,
    features: [
      { highlight: "3 - 7", text: "screens" },
      { highlight: "Partially custom", text: "UI" },
      { highlight: "Partial", text: "animation" },
      { highlight: "Integrated", text: "backend" },
      { highlight: "Social + email", text: "authentication" },
      { highlight: "In-app", text: "analytics" },
      { highlight: "Ad", text: "support" },
      { highlight: "Push", text: "notifications" },
      { highlight: "User", text: "profiles" },
    ],
  },
  {
    name: "Business",
    price: "$42,000",
    accentColor: COLORS.businessAccent,
    features: [
      { highlight: "7 - 25", text: "screens" },
      { highlight: "Fully custom", text: "UI" },
      { highlight: "Comprehensive", text: "animation" },
      { highlight: "Custom", text: "backend" },
      { highlight: "Social + email", text: "authentication" },
      { highlight: "In-app", text: "analytics" },
      { highlight: "Ad", text: "support" },
      { highlight: "Push", text: "notifications" },
      { highlight: "User", text: "profiles" },
      { highlight: "In-app", text: "purchases" },
      { highlight: "Hardware feature", text: "usage" },
      { highlight: "Data", text: "syncing" },
    ],
  },
];

const defaultBenefits: BenefitItem[] = [
  { text: "We'll throw in a 30 day money back guarantee" },
  { text: "No long term commitments" },
  { text: "Highest quality code standards" },
  { text: "You own your code from day one" },
  { text: "Your apps are delivered on time" },
  { text: "You are involved in all decisions" },
  { text: "No hidden costs to worry about" },
  { text: "You get an experienced bunch of engineers" },
  { text: "You can cancel at any time" },
  { text: "You can relax and enjoy the ride" },
];

function PricingCard({
  plan,
  buttonText,
  onEnquire,
  delay = 0,
}: {
  plan: PricingPlan;
  buttonText: string;
  onEnquire?: (planName: string) => void;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="flex flex-col rounded-2xl px-6 py-8"
      style={{ backgroundColor: COLORS.cardBackground }}
    >
      {/* Plan Name */}
      <p
        className="text-center text-sm font-medium italic"
        style={{ color: plan.accentColor }}
      >
        {plan.name}
      </p>

      {/* Price */}
      <h3
        className="mt-3 text-center text-3xl font-bold"
        style={{ color: COLORS.cardText }}
      >
        {plan.price}
      </h3>

      {/* Features */}
      <ul className="mt-6 flex-1 space-y-2.5">
        {plan.features.map((feature, index) => (
          <li
            key={index}
            className="text-center text-sm"
            style={{ color: COLORS.cardTextMuted }}
          >
            <span style={{ color: COLORS.cardText }}>{feature.highlight}</span>{" "}
            {feature.text}
          </li>
        ))}
      </ul>

      {/* Button */}
      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        onClick={() => onEnquire?.(plan.name)}
        className="mt-8 cursor-pointer rounded-full px-8 py-2.5 text-sm font-semibold uppercase tracking-wider transition-colors"
        style={{
          backgroundColor: COLORS.buttonGreen,
          color: COLORS.cardBackground,
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.backgroundColor = COLORS.buttonGreenHover;
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.backgroundColor = COLORS.buttonGreen;
        }}
      >
        {buttonText}
      </motion.button>
    </motion.div>
  );
}

function ToggleButton({
  options,
  activeIndex,
}: {
  options: string[];
  activeIndex: number;
}) {
  return (
    <div
      className="inline-flex items-center gap-1 rounded-full px-1 py-1"
      style={{ backgroundColor: COLORS.toggleBackground }}
    >
      {options.map((option, index) => (
        <button
          key={option}
          className="cursor-pointer rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-wider transition-colors"
          style={{
            backgroundColor:
              index === activeIndex ? COLORS.toggleActive : "transparent",
            color:
              index === activeIndex
                ? COLORS.cardBackground
                : COLORS.subtitleText,
          }}
        >
          {option}
        </button>
      ))}
    </div>
  );
}

export default function Pricing12802({
  headline = {
    prefix: "Our",
    highlight: "Mobile",
    suffix: "Development Offering",
  },
  subheadline = "All packages include one round of interface design work. We are flexible and can also work with any existing designs you may have.",
  toggleOptions = ["MOBILE"],
  activeToggle = 0,
  plans = defaultPlans,
  benefitsTitle = "You also get all this as part of the deal",
  benefits = defaultBenefits,
  buttonText = "ENQUIRE",
  onEnquire,
}: Pricing12802Props) {
  // Split benefits into two columns
  const midpoint = Math.ceil(benefits.length / 2);
  const leftBenefits = benefits.slice(0, midpoint);
  const rightBenefits = benefits.slice(midpoint);

  return (
    <section
      className="relative w-full px-4 py-16 md:px-8 md:py-20"
      style={{ backgroundColor: COLORS.background }}
    >
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-4 text-center"
        >
          <h2
            className="text-2xl font-normal md:text-3xl"
            style={{ color: COLORS.titleText }}
          >
            {headline.prefix}{" "}
            <span className="font-bold">{headline.highlight}</span>{" "}
            {headline.suffix}
          </h2>
        </motion.div>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: -5 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mx-auto mb-8 max-w-2xl text-center text-sm"
          style={{ color: COLORS.subtitleText }}
        >
          {subheadline}
        </motion.p>

        {/* Toggle */}
        <motion.div
          initial={{ opacity: 0, y: -5 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="mb-10 flex justify-center"
        >
          <ToggleButton options={toggleOptions} activeIndex={activeToggle} />
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {plans.map((plan, index) => (
            <PricingCard
              key={plan.name}
              plan={plan}
              buttonText={buttonText}
              onEnquire={onEnquire}
              delay={0.2 + index * 0.1}
            />
          ))}
        </div>

        {/* Benefits Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-16"
        >
          <h3
            className="mb-8 text-center text-xl font-normal md:text-2xl"
            style={{ color: COLORS.titleText }}
          >
            {benefitsTitle}
          </h3>

          <div className="mx-auto grid max-w-4xl grid-cols-1 gap-x-12 gap-y-3 md:grid-cols-2">
            {/* Left Column */}
            <div className="space-y-3">
              {leftBenefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.6 + index * 0.05 }}
                  className="flex items-start gap-3"
                >
                  <Check
                    className="mt-0.5 h-4 w-4 flex-shrink-0"
                    style={{ color: COLORS.checkIcon }}
                  />
                  <span
                    className="text-sm"
                    style={{ color: COLORS.subtitleText }}
                  >
                    {benefit.text}
                  </span>
                </motion.div>
              ))}
            </div>

            {/* Right Column */}
            <div className="space-y-3">
              {rightBenefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.3,
                    delay: 0.6 + (midpoint + index) * 0.05,
                  }}
                  className="flex items-start gap-3"
                >
                  <Check
                    className="mt-0.5 h-4 w-4 flex-shrink-0"
                    style={{ color: COLORS.checkIcon }}
                  />
                  <span
                    className="text-sm"
                    style={{ color: COLORS.subtitleText }}
                  >
                    {benefit.text}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
