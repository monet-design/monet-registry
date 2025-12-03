"use client";

// ============================================================================
// CUSTOMIZATION - 이 섹션의 값들을 수정하여 프로젝트에 맞게 조정하세요
// ============================================================================

/**
 * 커스텀 색상 (브랜드 컬러)
 */
const COLORS = {
  light: {
    // Background gradient
    background: "#0d3d1c",
    backgroundGradientEnd: "#052e10",
    // Accent colors
    accent: "#22c55e",
    accentLight: "#4ade80",
    // Card colors
    enterpriseCardBg: "rgba(20, 60, 30, 0.85)",
    enterpriseCardBorder: "rgba(34, 197, 94, 0.2)",
    memberCardBg: "#ffffff",
    memberCardBorder: "#e5e7eb",
    // Text
    textWhite: "#ffffff",
    textGray: "#9ca3af",
    textDark: "#111827",
    textMuted: "#6b7280",
  },
  dark: {
    background: "#0d3d1c",
    backgroundGradientEnd: "#052e10",
    accent: "#22c55e",
    accentLight: "#4ade80",
    enterpriseCardBg: "rgba(20, 60, 30, 0.85)",
    enterpriseCardBorder: "rgba(34, 197, 94, 0.2)",
    memberCardBg: "#ffffff",
    memberCardBorder: "#e5e7eb",
    textWhite: "#ffffff",
    textGray: "#9ca3af",
    textDark: "#111827",
    textMuted: "#6b7280",
  },
} as const;

/**
 * 이미지 에셋
 */
const IMAGES = {
  plantOverlay: {
    path: "/registry/pricing-opl-master-9/plant-overlay.png",
    alt: "Green plant decorative overlay",
    prompt: `<is_transparent_background>true</is_transparent_background>
<summary>Abstract green plant leaves composition for dark card overlay</summary>
<mood>Natural, organic, premium eco-friendly aesthetic</mood>
<background_summary>Fully transparent background</background_summary>
<primary_element>Lush green succulent plants and spherical botanical shapes arranged in an artistic composition at the bottom of the frame. Dark green leaves with some lighter highlights. Semi-transparent effect with fade at edges.</primary_element>
<etc_element>Small water droplets on leaves for a fresh dewy effect</etc_element>`,
  },
} as const;

/**
 * 컨텐츠 기본값
 */
const DEFAULT_CONTENT = {
  title: "Built to meet",
  titleHighlight: "all",
  titleEnd: "your needs",
  plans: [
    {
      id: "enterprise",
      name: "Enterprise",
      badge: "CUSTOM QUOTE",
      description:
        "Our enterprise plan offers full support, perfect for those looking to outsource or replace their design teams. Ideal for companies needing a fast, reliable design partner for any scope.",
      features: [
        { label: "Dedicated team", description: "Curated to your needs" },
        { label: "Quick onboarding", description: "Hassle free" },
        { label: "Deliverables", description: "Fast & often" },
        { label: "Easy workflow", description: "Flexible process" },
      ],
      buttonText: "Book a free call",
      buttonVariant: "filled" as const,
    },
    {
      id: "member",
      name: "Member",
      price: "$5,299",
      priceUnit: "/ MO",
      description:
        "Our membership plan is perfect for companies seeking high-quality design on a monthly basis. It includes 60 hours of work — an ideal balance for delivering great results at an more affordable price.",
      features: [
        { label: "Top-notch quality" },
        { label: "1x Senior Designer" },
        { label: "Unlimited requests" },
        { label: "Slack communication" },
      ],
      buttonText: "Book a free call",
      buttonVariant: "outline" as const,
    },
  ],
};

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { motion } from "motion/react";
import { Users, Zap, Package, Settings, CheckCircle, User, Infinity, MessageSquare, Calendar } from "lucide-react";

interface Feature {
  label: string;
  description?: string;
}

interface Plan {
  id: string;
  name: string;
  badge?: string;
  price?: string;
  priceUnit?: string;
  description: string;
  features: Feature[];
  buttonText: string;
  buttonVariant: "filled" | "outline";
}

interface PricingOplMaster9Props {
  mode?: "light" | "dark";
  title?: string;
  titleHighlight?: string;
  titleEnd?: string;
  plans?: Plan[];
}

// Icon mapping for enterprise features
const enterpriseIcons: Record<string, React.ReactNode> = {
  "Dedicated team": <Users size={16} />,
  "Quick onboarding": <Zap size={16} />,
  "Deliverables": <Package size={16} />,
  "Easy workflow": <Settings size={16} />,
};

// Icon mapping for member features
const memberIcons: Record<string, React.ReactNode> = {
  "Top-notch quality": <CheckCircle size={16} />,
  "1x Senior Designer": <User size={16} />,
  "Unlimited requests": <Infinity size={16} />,
  "Slack communication": <MessageSquare size={16} />,
};

export default function PricingOplMaster9({
  mode = "light",
  title = DEFAULT_CONTENT.title,
  titleHighlight = DEFAULT_CONTENT.titleHighlight,
  titleEnd = DEFAULT_CONTENT.titleEnd,
  plans = DEFAULT_CONTENT.plans,
}: PricingOplMaster9Props) {
  const colors = COLORS[mode];
  const enterprisePlan = plans.find((p) => p.id === "enterprise") || plans[0];
  const memberPlan = plans.find((p) => p.id === "member") || plans[1];

  return (
    <section
      className="relative w-full py-16 md:py-24 px-4 overflow-hidden"
      style={{
        background: `linear-gradient(to bottom, ${colors.background}, ${colors.backgroundGradientEnd})`,
      }}
    >
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight"
            style={{ color: colors.textWhite }}
          >
            {title}{" "}
            <span style={{ color: colors.accent }}>{titleHighlight}</span>{" "}
            {titleEnd}
          </h2>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {/* Enterprise Card */}
          <motion.div
            className="relative rounded-3xl overflow-hidden min-h-[440px] flex flex-col"
            style={{
              backgroundColor: colors.enterpriseCardBg,
              border: `1px solid ${colors.enterpriseCardBorder}`,
            }}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Card Content */}
            <div className="relative z-10 p-6 md:p-8 flex-1 flex flex-col">
              {/* Header */}
              <div className="flex items-center justify-between mb-4">
                <h3
                  className="text-2xl md:text-3xl font-semibold"
                  style={{ color: colors.textWhite }}
                >
                  {enterprisePlan.name}
                </h3>
                {enterprisePlan.badge && (
                  <span
                    className="px-3 py-1.5 text-xs font-semibold rounded-full uppercase tracking-wide"
                    style={{
                      backgroundColor: colors.accent,
                      color: colors.textDark,
                    }}
                  >
                    {enterprisePlan.badge}
                  </span>
                )}
              </div>

              {/* Description */}
              <p
                className="text-sm leading-relaxed mb-6"
                style={{ color: colors.textGray }}
              >
                {enterprisePlan.description}
              </p>

              {/* Features */}
              <div className="space-y-3 mb-8">
                {enterprisePlan.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <span style={{ color: colors.accent }}>
                      {enterpriseIcons[feature.label] || <CheckCircle size={16} />}
                    </span>
                    <span
                      className="text-sm font-medium"
                      style={{ color: colors.textWhite }}
                    >
                      {feature.label}
                    </span>
                    {feature.description && (
                      <>
                        <span
                          className="text-sm"
                          style={{ color: colors.textGray }}
                        >
                          —
                        </span>
                        <span
                          className="text-sm"
                          style={{ color: colors.textGray }}
                        >
                          {feature.description}
                        </span>
                      </>
                    )}
                  </div>
                ))}
              </div>

              {/* Spacer */}
              <div className="flex-1" />

              {/* Button */}
              <motion.button
                className="w-full py-3.5 rounded-full text-sm font-semibold flex items-center justify-center gap-2 transition-all"
                style={{
                  backgroundColor: colors.accentLight,
                  color: colors.textDark,
                }}
                whileHover={{ scale: 1.02, backgroundColor: colors.accent }}
                whileTap={{ scale: 0.98 }}
              >
                {enterprisePlan.buttonText}
                <Calendar size={16} />
              </motion.button>
            </div>

            {/* Decorative gradient overlay at bottom */}
            <div
              className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
              style={{
                background: `linear-gradient(to top, rgba(10, 50, 20, 0.9), transparent)`,
              }}
            />

            {/* Optional: Plant overlay image (add plant-overlay.png to public folder) */}
            <div
              className="absolute bottom-0 left-0 right-0 h-40 pointer-events-none"
              style={{
                backgroundImage: `url(${IMAGES.plantOverlay.path})`,
                backgroundSize: "cover",
                backgroundPosition: "bottom center",
                opacity: 0.6,
              }}
            />
          </motion.div>

          {/* Member Card */}
          <motion.div
            className="relative rounded-3xl overflow-hidden min-h-[440px] flex flex-col"
            style={{
              backgroundColor: colors.memberCardBg,
              border: `1px solid ${colors.memberCardBorder}`,
            }}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Card Content */}
            <div className="p-6 md:p-8 flex-1 flex flex-col">
              {/* Header */}
              <div className="flex items-center justify-between mb-4">
                <h3
                  className="text-2xl md:text-3xl font-semibold"
                  style={{ color: colors.accent }}
                >
                  {memberPlan.name}
                </h3>
                {memberPlan.price && (
                  <div className="text-right">
                    <span
                      className="text-lg font-bold"
                      style={{ color: colors.textDark }}
                    >
                      {memberPlan.price}
                    </span>
                    <span
                      className="text-sm font-medium ml-1"
                      style={{ color: colors.textMuted }}
                    >
                      {memberPlan.priceUnit}
                    </span>
                  </div>
                )}
              </div>

              {/* Description */}
              <p
                className="text-sm leading-relaxed mb-6"
                style={{ color: colors.textMuted }}
              >
                {memberPlan.description}
              </p>

              {/* Features */}
              <div className="space-y-3 mb-8">
                {memberPlan.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <span style={{ color: colors.accent }}>
                      {memberIcons[feature.label] || <CheckCircle size={16} />}
                    </span>
                    <span
                      className="text-sm font-medium"
                      style={{ color: colors.textDark }}
                    >
                      {feature.label}
                    </span>
                  </div>
                ))}
              </div>

              {/* Spacer */}
              <div className="flex-1" />

              {/* Button */}
              <motion.button
                className="w-full py-3.5 rounded-full text-sm font-semibold flex items-center justify-center gap-2 transition-all"
                style={{
                  backgroundColor: "transparent",
                  border: `2px solid ${colors.textDark}`,
                  color: colors.textDark,
                }}
                whileHover={{
                  backgroundColor: colors.textDark,
                  color: colors.memberCardBg,
                }}
                whileTap={{ scale: 0.98 }}
              >
                {memberPlan.buttonText}
                <Calendar size={16} />
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
