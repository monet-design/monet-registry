"use client";

// ============================================================================
// CUSTOMIZATION - Modify these values to fit your project
// ============================================================================

/**
 * Custom colors (brand colors)
 */
const COLORS = {
  light: {
    background: "#F5F6F8",
    cardBg: "#FFFFFF",
    cardDarkBg: "#1A1A1A",
    textPrimary: "#1A1A1A",
    textSecondary: "#6B7280",
    textLight: "#FFFFFF",
    textMuted: "#9CA3AF",
    buttonPrimary: "#1A1A1A",
    buttonPrimaryText: "#FFFFFF",
    buttonSecondary: "#FFFFFF",
    buttonSecondaryText: "#1A1A1A",
    buttonAccent: "#E67A4D",
    buttonAccentText: "#FFFFFF",
    badgeBg: "#D1FAE5",
    badgeText: "#059669",
    divider: "#E5E7EB",
  },
  dark: {
    background: "#0F0F0F",
    cardBg: "#1F1F1F",
    cardDarkBg: "#2A2A2A",
    textPrimary: "#F8FAFC",
    textSecondary: "#94A3B8",
    textLight: "#FFFFFF",
    textMuted: "#64748B",
    buttonPrimary: "#F8FAFC",
    buttonPrimaryText: "#1A1A1A",
    buttonSecondary: "#2A2A2A",
    buttonSecondaryText: "#F8FAFC",
    buttonAccent: "#E67A4D",
    buttonAccentText: "#FFFFFF",
    badgeBg: "#064E3B",
    badgeText: "#10B981",
    divider: "#374151",
  },
} as const;

/**
 * Default content values
 */
const DEFAULT_CONTENT = {
  header: {
    badge: "PRICING",
    title: "Tailored packages",
    titleSecondLine: "for every brand vision",
  },
  plans: [
    {
      id: "essentials",
      name: "Essentials",
      description:
        "Starter premium handcrafted logo package, delivered in 5 business days.",
      price: "695$",
      buttonText: "Start now",
      features: [
        { icon: "diamond", text: "2 Logo Proposals" },
        { icon: "refresh", text: "1 Revision Round" },
        { icon: "palette", text: "Color Palette" },
        { icon: "type", text: "Fonts Files" },
      ],
      isFeatured: false,
    },
    {
      id: "signature",
      name: "Signature",
      badge: "Best offer",
      description:
        "Extended premium handcrafted logo package, delivered in 10 business days.",
      price: "985$",
      buttonText: "Start now",
      features: [
        { icon: "diamond", text: "4 Logo Proposals" },
        { icon: "refresh", text: "2 Revision Round" },
        { icon: "palette", text: "Color Palette" },
        { icon: "type", text: "Font Files" },
      ],
      bonusTitle: "SIGNATURE BONUS",
      bonusFeatures: [
        { icon: "layout", text: "Social Media Assets" },
        { icon: "book", text: "Logobook" },
        { icon: "image", text: "Mockups Demo" },
        { icon: "type2", text: "Typography" },
      ],
      isFeatured: true,
    },
    {
      id: "custom",
      name: "Custom",
      description:
        "Custom solutions, from logo to website, crafted exclusively for you business needs.",
      price: "****$",
      buttonText: "Contact us",
      features: [
        { icon: "diamond", text: "Logo Proposals, Colors & Typography" },
        { icon: "refresh", text: "Unlimited Revision Rounds" },
        { icon: "layout", text: "Social Media Assets" },
        { icon: "book", text: "Logobook" },
        { icon: "image", text: "Mockups Demo" },
        { icon: "presentation", text: "Pitch Deck" },
        { icon: "card", text: "Business Card" },
        { icon: "pen", text: "Illustrations" },
        { icon: "play", text: "Logo Animation" },
        { icon: "video", text: "Motion Design" },
        { icon: "file", text: "Landing Page" },
        { icon: "globe", text: "Website" },
        { icon: "figma", text: "UI/UX Design" },
        { icon: "printer", text: "Print Materials" },
      ],
      isFeatured: false,
      isCustom: true,
    },
  ],
};

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { motion } from "motion/react";
import {
  Diamond,
  RefreshCw,
  Palette,
  Type,
  LayoutGrid,
  BookOpen,
  Image,
  Presentation,
  CreditCard,
  PenTool,
  Play,
  Video,
  FileText,
  Globe,
  Figma,
  Printer,
  Check,
} from "lucide-react";

interface Feature {
  icon: string;
  text: string;
}

interface Plan {
  id: string;
  name: string;
  badge?: string;
  description: string;
  price: string;
  buttonText: string;
  features: Feature[];
  bonusTitle?: string;
  bonusFeatures?: Feature[];
  isFeatured?: boolean;
  isCustom?: boolean;
}

interface HeaderContent {
  badge: string;
  title: string;
  titleSecondLine: string;
}

interface PricingOplMasterLogopointProps {
  mode?: "light" | "dark";
  header?: HeaderContent;
  plans?: Plan[];
  onSelectPlan?: (planId: string) => void;
}

const iconMap: Record<string, React.ElementType> = {
  diamond: Diamond,
  refresh: RefreshCw,
  palette: Palette,
  type: Type,
  type2: Type,
  layout: LayoutGrid,
  book: BookOpen,
  image: Image,
  presentation: Presentation,
  card: CreditCard,
  pen: PenTool,
  play: Play,
  video: Video,
  file: FileText,
  globe: Globe,
  figma: Figma,
  printer: Printer,
  check: Check,
};

function FeatureIcon({
  iconName,
  className,
  style,
}: {
  iconName: string;
  className?: string;
  style?: React.CSSProperties;
}) {
  const Icon = iconMap[iconName] || Check;
  return <Icon className={className} style={style} />;
}

export default function PricingOplMasterLogopoint({
  mode = "light",
  header = DEFAULT_CONTENT.header,
  plans = DEFAULT_CONTENT.plans,
  onSelectPlan,
}: PricingOplMasterLogopointProps) {
  const colors = COLORS[mode];

  return (
    <section
      className="relative w-full py-16 md:py-24 px-4"
      style={{ backgroundColor: colors.background }}
    >
      <style jsx>{`
        @import url("https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap");

        .font-main {
          font-family: "Inter", system-ui, sans-serif;
        }
      `}</style>

      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {/* Badge */}
          <span
            className="inline-block font-main text-[10px] font-semibold tracking-wider px-3 py-1.5 rounded-full mb-6"
            style={{
              backgroundColor: colors.badgeBg,
              color: colors.badgeText,
            }}
          >
            {header.badge}
          </span>

          {/* Title */}
          <h1
            className="font-main text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight"
            style={{ color: colors.textPrimary }}
          >
            {header.title}
            <br />
            {header.titleSecondLine}
          </h1>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.id}
              className={`rounded-2xl overflow-hidden ${
                plan.isFeatured ? "md:-mt-4" : ""
              }`}
              style={{
                backgroundColor: plan.isFeatured
                  ? colors.cardDarkBg
                  : colors.cardBg,
              }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {/* Card Header */}
              <div className="p-6 pb-4">
                <div className="flex items-center justify-between mb-2">
                  <h3
                    className="font-main text-lg font-semibold"
                    style={{
                      color: plan.isFeatured
                        ? colors.textLight
                        : colors.textPrimary,
                    }}
                  >
                    {plan.name}
                  </h3>
                  {plan.badge && (
                    <span
                      className="font-main text-[10px] font-medium px-2.5 py-1 rounded-full"
                      style={{
                        backgroundColor: colors.badgeBg,
                        color: colors.badgeText,
                      }}
                    >
                      {plan.badge}
                    </span>
                  )}
                </div>
                <p
                  className="font-main text-xs leading-relaxed mb-4"
                  style={{
                    color: plan.isFeatured
                      ? colors.textMuted
                      : colors.textSecondary,
                  }}
                >
                  {plan.description}
                </p>

                {/* Price */}
                <p
                  className="font-main text-3xl md:text-4xl font-bold mb-4"
                  style={{
                    color: plan.isFeatured
                      ? colors.textLight
                      : colors.textPrimary,
                  }}
                >
                  {plan.price}
                </p>

                {/* Button */}
                <motion.button
                  onClick={() => onSelectPlan?.(plan.id)}
                  className="w-full font-main text-sm font-medium py-3 rounded-full transition-all duration-200"
                  style={{
                    backgroundColor: plan.isCustom
                      ? colors.buttonAccent
                      : plan.isFeatured
                        ? colors.buttonSecondary
                        : colors.buttonPrimary,
                    color: plan.isCustom
                      ? colors.buttonAccentText
                      : plan.isFeatured
                        ? colors.buttonSecondaryText
                        : colors.buttonPrimaryText,
                  }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {plan.buttonText}
                </motion.button>
              </div>

              {/* Features */}
              <div className="px-6 pb-6">
                <ul className="space-y-2.5">
                  {plan.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className="flex items-center gap-2.5"
                    >
                      <FeatureIcon
                        iconName={feature.icon}
                        className="w-3.5 h-3.5 flex-shrink-0"
                        style={{
                          color: plan.isFeatured
                            ? colors.textMuted
                            : colors.textSecondary,
                        }}
                      />
                      <span
                        className="font-main text-xs"
                        style={{
                          color: plan.isFeatured
                            ? colors.textMuted
                            : colors.textSecondary,
                        }}
                      >
                        {feature.text}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* Bonus Section */}
                {plan.bonusTitle && plan.bonusFeatures && (
                  <div className="mt-5">
                    <p
                      className="font-main text-[9px] font-semibold tracking-wider mb-3"
                      style={{ color: colors.textMuted }}
                    >
                      {plan.bonusTitle}
                    </p>
                    <ul className="space-y-2.5">
                      {plan.bonusFeatures.map((feature, featureIndex) => (
                        <li
                          key={featureIndex}
                          className="flex items-center gap-2.5"
                        >
                          <FeatureIcon
                            iconName={feature.icon}
                            className="w-3.5 h-3.5 flex-shrink-0"
                            style={{
                              color: colors.textMuted,
                            }}
                          />
                          <span
                            className="font-main text-xs"
                            style={{ color: colors.textMuted }}
                          >
                            {feature.text}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              {/* Portfolio Preview Image */}
              {(plan.id === "essentials" || plan.id === "signature") && (
                <div className="px-4 pb-4">
                  <div
                    className="rounded-xl overflow-hidden"
                    style={{ backgroundColor: colors.cardDarkBg }}
                  >
                    <div className="aspect-[4/3] grid grid-cols-4 grid-rows-3 gap-1 p-2">
                      {/* Generate placeholder logo grid */}
                      {Array.from({ length: 12 }).map((_, i) => (
                        <div
                          key={i}
                          className="rounded flex items-center justify-center"
                          style={{
                            backgroundColor:
                              i % 3 === 0
                                ? "#E67A4D"
                                : i % 3 === 1
                                  ? "#3B3B3B"
                                  : "#2A2A2A",
                          }}
                        >
                          <div
                            className="w-4 h-4 rounded-sm"
                            style={{
                              backgroundColor:
                                i % 2 === 0 ? "#FFFFFF20" : "#E67A4D40",
                            }}
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
