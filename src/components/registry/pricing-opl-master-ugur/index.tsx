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
    textPrimary: "#1A1A1A",
    textSecondary: "#6B7280",
    textMuted: "#9CA3AF",
    buttonBg: "#1A1A1A",
    buttonText: "#FFFFFF",
    badgeOutline: "#D1D5DB",
    badgeRedBg: "#FEE2E2",
    badgeRedText: "#DC2626",
    featureDot: "#1A1A1A",
    stepIconBg: "#F5F5F5",
  },
  dark: {
    background: "#0F172A",
    cardBg: "#1E293B",
    textPrimary: "#F8FAFC",
    textSecondary: "#94A3B8",
    textMuted: "#64748B",
    buttonBg: "#F8FAFC",
    buttonText: "#0F172A",
    badgeOutline: "#475569",
    badgeRedBg: "#7F1D1D",
    badgeRedText: "#FCA5A5",
    featureDot: "#F8FAFC",
    stepIconBg: "#1E293B",
  },
} as const;

/**
 * 이미지 에셋
 */
const IMAGES = {
  monthlyAbstract: {
    path: "https://images.unsplash.com/photo-1557672172-298e090bd0f1?w=500&h=600&fit=crop",
    alt: "Colorful abstract fluid gradient",
    prompt: `Abstract fluid gradient art with flowing pink, blue, purple and orange colors,
    smooth liquid texture, vibrant and modern digital art style`,
  },
  consultingAbstract: {
    path: "https://images.unsplash.com/photo-1553356084-58ef4a67b2a7?w=500&h=600&fit=crop",
    alt: "Grayscale abstract texture",
    prompt: `Abstract grayscale marble or fluid texture, monochrome swirling patterns,
    elegant and minimal aesthetic`,
  },
  projectAbstract: {
    path: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&h=600&fit=crop",
    alt: "Silver metallic abstract texture",
    prompt: `Abstract silver metallic liquid texture, smooth flowing chrome-like surface,
    monochrome with subtle reflections`,
  },
} as const;

/**
 * 기본 컨텐츠
 */
const DEFAULT_CONTENT = {
  header: {
    title: "Subscription plans",
    subtitle: "Whether short-term or long-term, you're in good Hands",
    partnerTitle: "Your product design partner",
    partnerSubtitle: "Unlock instant, world-class design with a simple monthly fee.",
    description:
      "Avoid the cumbersome hiring process get instant access to a top-tier designer ready to realize your vision, all for a predictable monthly fee.",
  },
  features: [
    "Dedicated designer",
    "Pause or cancel anytime",
    "No meetings",
    "1:1 async communication",
    "No contracts",
    "No hiring required",
  ],
  monthlyPlan: {
    badge: "Monthly",
    fullyBooked: "Fully Booked",
    price: "$4,995",
    period: "/mo",
    description: "Ideal for those with continuous design needs and a drive to expand.",
    features: [
      "Mobile apps",
      "Web apps",
      "Design systems",
      "Consulting",
      "Product design",
      "Brand design",
    ],
    buttonText: "Get Started Now",
  },
  consultingPlan: {
    badge: "1 Hour",
    consultingBadge: "Consulting",
    price: "$350",
    description: "Ideal for continuous design needs and aspiring growth: A Perfect Match.",
    features: ["Review", "UX/UI", "Report", "Product", "Solution", "Branding / Naming"],
    buttonText: "Get Started Now",
  },
  projectPlan: {
    badge: "One-time project",
    title: "Optimal for projects with a defined scope and timeline email us your project details for a custom quote.",
    features: [
      "Fixed scope of work",
      "Delivered in milestones",
      "Kick-off meetings and regular check-ins",
    ],
    buttonText: "Request a quote",
  },
  processSection: {
    title: "Request-based design",
    subtitle: "streamlining the design process",
    description: "by breaking projects into hyper-focused, manageable requests",
    steps: [
      {
        icon: "subscribe",
        title: "Subscribe.",
        description:
          "We'll invite you to a private Slack channel where you'll be assigned a world-class designer.",
      },
      {
        icon: "request",
        title: "Request.",
        description:
          "Submit design requests, we'll complete them one by one within 2 business days on average.",
      },
      {
        icon: "revise",
        title: "Revise.",
        description:
          "Need more tweaks? We'll revise your design until it's exactly how you envisioned it.",
      },
      {
        icon: "grow",
        title: "Grow.",
        description:
          "Witness your project and vision evolving and coming to life after each design request.",
      },
    ],
  },
};

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { motion } from "motion/react";
import { ArrowRight, Check, MessageSquare, RefreshCw, TrendingUp, Sparkles } from "lucide-react";
import "./font.css";

interface PricingOplMasterUgurProps {
  mode?: "light" | "dark";
  onGetStarted?: () => void;
  onRequestQuote?: () => void;
}

export default function PricingOplMasterUgur({
  mode = "light",
  onGetStarted,
  onRequestQuote,
}: PricingOplMasterUgurProps) {
  const colors = COLORS[mode];

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
  };

  const getStepIcon = (icon: string) => {
    switch (icon) {
      case "subscribe":
        return <MessageSquare className="w-5 h-5" />;
      case "request":
        return <Sparkles className="w-5 h-5" />;
      case "revise":
        return <RefreshCw className="w-5 h-5" />;
      case "grow":
        return <TrendingUp className="w-5 h-5" />;
      default:
        return null;
    }
  };

  return (
    <section
      className="relative w-full py-16 md:py-24 px-4"
      style={{
        backgroundColor: colors.background,
        fontFamily: "'Inter', system-ui, sans-serif",
      }}
    >
      <div className="max-w-3xl mx-auto">
        {/* Header Section */}
        <motion.div className="mb-8" {...fadeInUp} transition={{ duration: 0.5 }}>
          {/* Main Title - Serif */}
          <h1
            className="text-2xl md:text-3xl mb-1"
            style={{
              color: colors.textPrimary,
              fontFamily: "'Instrument Serif', Georgia, serif",
            }}
          >
            {DEFAULT_CONTENT.header.title}
          </h1>
          <p
            className="text-lg md:text-xl mb-6"
            style={{
              color: colors.textPrimary,
              fontFamily: "'Instrument Serif', Georgia, serif",
              fontWeight: 300,
            }}
          >
            {DEFAULT_CONTENT.header.subtitle}
          </p>

          {/* Partner Section */}
          <p
            className="text-sm font-semibold mb-1"
            style={{ color: colors.textPrimary }}
          >
            {DEFAULT_CONTENT.header.partnerTitle}
            <br />
            {DEFAULT_CONTENT.header.partnerSubtitle}
          </p>
          <p
            className="text-xs leading-relaxed mb-4 max-w-xl"
            style={{ color: colors.textSecondary }}
          >
            {DEFAULT_CONTENT.header.description}
          </p>

          {/* Feature Grid */}
          <div className="grid grid-cols-3 gap-x-8 gap-y-2">
            {DEFAULT_CONTENT.features.map((feature, index) => (
              <div key={index} className="flex items-center gap-2">
                <div
                  className="w-1.5 h-1.5 rounded-full"
                  style={{ backgroundColor: colors.featureDot }}
                />
                <span
                  className="text-xs"
                  style={{ color: colors.textSecondary }}
                >
                  {feature}
                </span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Monthly Plan Card */}
        <motion.div
          className="rounded-xl overflow-hidden mb-4"
          style={{ backgroundColor: colors.cardBg }}
          {...fadeInUp}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <div className="flex flex-col md:flex-row">
            {/* Content */}
            <div className="flex-1 p-6">
              {/* Badges */}
              <div className="flex items-center gap-2 mb-3">
                <span
                  className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs border"
                  style={{
                    borderColor: colors.badgeOutline,
                    color: colors.textSecondary,
                  }}
                >
                  <span className="mr-1.5">&#9200;</span>
                  {DEFAULT_CONTENT.monthlyPlan.badge}
                </span>
                <span
                  className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs"
                  style={{
                    backgroundColor: colors.badgeRedBg,
                    color: colors.badgeRedText,
                  }}
                >
                  <span className="mr-1.5">&#128308;</span>
                  {DEFAULT_CONTENT.monthlyPlan.fullyBooked}
                </span>
              </div>

              {/* Price */}
              <div className="mb-2">
                <span
                  className="text-2xl font-bold"
                  style={{ color: colors.textPrimary }}
                >
                  {DEFAULT_CONTENT.monthlyPlan.price}
                </span>
                <span
                  className="text-lg"
                  style={{ color: colors.textSecondary }}
                >
                  {DEFAULT_CONTENT.monthlyPlan.period}
                </span>
              </div>

              {/* Description */}
              <p
                className="text-xs font-semibold mb-4 max-w-xs"
                style={{ color: colors.textPrimary }}
              >
                {DEFAULT_CONTENT.monthlyPlan.description}
              </p>

              {/* Features Grid */}
              <div className="grid grid-cols-2 gap-x-6 gap-y-1.5 mb-4">
                {DEFAULT_CONTENT.monthlyPlan.features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <span className="text-xs" style={{ color: colors.textSecondary }}>
                      +
                    </span>
                    <span
                      className="text-xs"
                      style={{ color: colors.textSecondary }}
                    >
                      {feature}
                    </span>
                  </div>
                ))}
              </div>

              {/* Button */}
              <motion.button
                onClick={onGetStarted}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-medium"
                style={{
                  backgroundColor: colors.buttonBg,
                  color: colors.buttonText,
                }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <ArrowRight className="w-3.5 h-3.5" />
                {DEFAULT_CONTENT.monthlyPlan.buttonText}
              </motion.button>
            </div>

            {/* Image */}
            <div className="w-full md:w-48 h-48 md:h-auto">
              <img
                src={IMAGES.monthlyAbstract.path}
                alt={IMAGES.monthlyAbstract.alt}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </motion.div>

        {/* Consulting Plan Card */}
        <motion.div
          className="rounded-xl overflow-hidden mb-4"
          style={{ backgroundColor: colors.cardBg }}
          {...fadeInUp}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="flex flex-col md:flex-row">
            {/* Content */}
            <div className="flex-1 p-6">
              {/* Badges */}
              <div className="flex items-center gap-2 mb-3">
                <span
                  className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs border"
                  style={{
                    borderColor: colors.badgeOutline,
                    color: colors.textSecondary,
                  }}
                >
                  <span className="mr-1.5">&#9200;</span>
                  {DEFAULT_CONTENT.consultingPlan.badge}
                </span>
                <span
                  className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs border"
                  style={{
                    borderColor: colors.badgeOutline,
                    color: colors.textSecondary,
                  }}
                >
                  <span className="mr-1.5">&#128172;</span>
                  {DEFAULT_CONTENT.consultingPlan.consultingBadge}
                </span>
              </div>

              {/* Price */}
              <div className="mb-2">
                <span
                  className="text-2xl font-bold"
                  style={{ color: colors.textPrimary }}
                >
                  {DEFAULT_CONTENT.consultingPlan.price}
                </span>
              </div>

              {/* Description */}
              <p
                className="text-xs font-semibold mb-4 max-w-xs"
                style={{ color: colors.textPrimary }}
              >
                {DEFAULT_CONTENT.consultingPlan.description}
              </p>

              {/* Features Grid */}
              <div className="grid grid-cols-2 gap-x-6 gap-y-1.5 mb-4">
                {DEFAULT_CONTENT.consultingPlan.features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <div
                      className="w-1.5 h-1.5 rounded-full"
                      style={{ backgroundColor: colors.featureDot }}
                    />
                    <span
                      className="text-xs"
                      style={{ color: colors.textSecondary }}
                    >
                      {feature}
                    </span>
                  </div>
                ))}
              </div>

              {/* Button */}
              <motion.button
                onClick={onGetStarted}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-medium"
                style={{
                  backgroundColor: colors.buttonBg,
                  color: colors.buttonText,
                }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <ArrowRight className="w-3.5 h-3.5" />
                {DEFAULT_CONTENT.consultingPlan.buttonText}
              </motion.button>
            </div>

            {/* Image */}
            <div className="w-full md:w-48 h-48 md:h-auto">
              <img
                src={IMAGES.consultingAbstract.path}
                alt={IMAGES.consultingAbstract.alt}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </motion.div>

        {/* One-time Project Card */}
        <motion.div
          className="rounded-xl overflow-hidden mb-16"
          style={{ backgroundColor: colors.cardBg }}
          {...fadeInUp}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <div className="flex flex-col md:flex-row">
            {/* Content */}
            <div className="flex-1 p-6">
              {/* Badge */}
              <div className="flex items-center gap-2 mb-3">
                <span
                  className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs border"
                  style={{
                    borderColor: colors.badgeOutline,
                    color: colors.textSecondary,
                  }}
                >
                  <Sparkles className="w-3 h-3 mr-1.5" />
                  {DEFAULT_CONTENT.projectPlan.badge}
                </span>
              </div>

              {/* Title */}
              <p
                className="text-xs font-semibold mb-4 max-w-sm"
                style={{ color: colors.textPrimary }}
              >
                {DEFAULT_CONTENT.projectPlan.title}
              </p>

              {/* Features */}
              <div className="space-y-1.5 mb-4">
                {DEFAULT_CONTENT.projectPlan.features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <div
                      className="w-1.5 h-1.5 rounded-full"
                      style={{ backgroundColor: colors.featureDot }}
                    />
                    <span
                      className="text-xs"
                      style={{ color: colors.textSecondary }}
                    >
                      {feature}
                    </span>
                  </div>
                ))}
              </div>

              {/* Button */}
              <motion.button
                onClick={onRequestQuote}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-medium"
                style={{
                  backgroundColor: colors.buttonBg,
                  color: colors.buttonText,
                }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Sparkles className="w-3.5 h-3.5" />
                {DEFAULT_CONTENT.projectPlan.buttonText}
              </motion.button>
            </div>

            {/* Image */}
            <div className="w-full md:w-48 h-48 md:h-auto">
              <img
                src={IMAGES.projectAbstract.path}
                alt={IMAGES.projectAbstract.alt}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </motion.div>

        {/* Process Section */}
        <motion.div
          className="mb-8"
          {...fadeInUp}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          {/* Title */}
          <div className="mb-8">
            <h2
              className="text-xl md:text-2xl"
              style={{
                color: colors.textPrimary,
                fontFamily: "'Instrument Serif', Georgia, serif",
              }}
            >
              <span className="font-semibold italic">
                {DEFAULT_CONTENT.processSection.title}
              </span>{" "}
              <span style={{ fontWeight: 300 }}>
                {DEFAULT_CONTENT.processSection.subtitle}
              </span>
            </h2>
            <p
              className="text-xl md:text-2xl"
              style={{
                color: colors.textPrimary,
                fontFamily: "'Instrument Serif', Georgia, serif",
                fontWeight: 300,
              }}
            >
              {DEFAULT_CONTENT.processSection.description}
            </p>
          </div>

          {/* Steps */}
          <div className="space-y-3">
            {DEFAULT_CONTENT.processSection.steps.map((step, index) => (
              <motion.div
                key={index}
                className="flex items-start gap-4 p-4 rounded-lg"
                style={{ backgroundColor: colors.cardBg }}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
              >
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{
                    backgroundColor: colors.background,
                    color: colors.textPrimary,
                  }}
                >
                  {getStepIcon(step.icon)}
                </div>
                <div>
                  <p
                    className="text-sm"
                    style={{ color: colors.textPrimary }}
                  >
                    <span className="font-semibold">{step.title}</span>{" "}
                    <span style={{ color: colors.textSecondary }}>
                      {step.description}
                    </span>
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
