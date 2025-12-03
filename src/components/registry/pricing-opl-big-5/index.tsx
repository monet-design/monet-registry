"use client";

// ============================================================================
// CUSTOMIZATION - 이 섹션의 값들을 수정하여 프로젝트에 맞게 조정하세요
// ============================================================================

/**
 * 커스텀 색상 (브랜드 컬러)
 */
const COLORS = {
  light: {
    // Primary 액센트 (버튼, 아이콘)
    accent: "#2EBCB3", // 민트/청록색
    accentHover: "#25A59D",
    // 제목 색상
    titlePink: "#D84C7F", // 마젠타/핑크
    // 배경색
    background: "#F3F6FB",
    cardBg: "#FFFFFF",
    // 텍스트
    textPrimary: "#1F2937",
    textSecondary: "#6B7280",
    textMuted: "#9CA3AF",
  },
  dark: {
    accent: "#2EBCB3",
    accentHover: "#3DCCC3",
    titlePink: "#E95B8B",
    background: "#0F172A",
    cardBg: "#1E293B",
    textPrimary: "#F1F5F9",
    textSecondary: "#94A3B8",
    textMuted: "#64748B",
  },
} as const;

/**
 * 이미지 에셋
 */
const IMAGES = {} as const;

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { motion } from "motion/react";
import { Monitor, Atom, Server, Users } from "lucide-react";

// Types
interface PricingPlan {
  id: string;
  name: string;
  description: string;
  price: string;
  priceUnit: string;
  icon: "startup" | "product" | "design";
}

interface WorkshopOption {
  text: string;
}

interface PricingOplBig5Props {
  mode?: "light" | "dark";
  title?: string;
  plans?: PricingPlan[];
  workshopDescription?: string;
  workshopOptions?: WorkshopOption[];
  workshopPrice?: string;
  workshopPriceUnit?: string;
  ctaText?: string;
  onCtaClick?: () => void;
}

// Default plans based on the image
const defaultPlans: PricingPlan[] = [
  {
    id: "startup",
    name: "Startup Team Retainer",
    description: "Retain a team for",
    price: "$18,750",
    priceUnit: "per quarter",
    icon: "startup",
  },
  {
    id: "product",
    name: "Product Team Retainer",
    description: "Retain a team for",
    price: "$37,500",
    priceUnit: "per quarter",
    icon: "product",
  },
  {
    id: "design",
    name: "Design Partner Retainer",
    description: "Retain a team for",
    price: "$75,000",
    priceUnit: "per quarter",
    icon: "design",
  },
];

const defaultWorkshopOptions: WorkshopOption[] = [
  { text: "Executive OKR Roadmap" },
  { text: "UX/UI Product Audit" },
  { text: "Brainstorming & Ideation" },
];

// Icon component
function PlanIcon({
  type,
  color,
}: {
  type: "startup" | "product" | "design";
  color: string;
}) {
  const iconProps = {
    size: 32,
    strokeWidth: 1.5,
    color,
  };

  switch (type) {
    case "startup":
      return <Monitor {...iconProps} />;
    case "product":
      return <Atom {...iconProps} />;
    case "design":
      return <Server {...iconProps} />;
    default:
      return <Monitor {...iconProps} />;
  }
}

// Color type
type ColorScheme = (typeof COLORS)["light"] | (typeof COLORS)["dark"];

// Pricing card component
function PricingCard({
  plan,
  colors,
  index,
  ctaText,
  onCtaClick,
}: {
  plan: PricingPlan;
  colors: ColorScheme;
  index: number;
  ctaText: string;
  onCtaClick?: () => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="flex flex-col items-center rounded-xl p-6 text-center shadow-sm"
      style={{ backgroundColor: colors.cardBg }}
    >
      {/* Icon */}
      <div
        className="mb-4 flex h-16 w-16 items-center justify-center rounded-lg"
        style={{ backgroundColor: `${colors.accent}15` }}
      >
        <PlanIcon type={plan.icon} color={colors.accent} />
      </div>

      {/* Plan name */}
      <h3
        className="mb-3 text-sm font-semibold"
        style={{ color: colors.textPrimary }}
      >
        {plan.name}
      </h3>

      {/* Description */}
      <p className="text-xs" style={{ color: colors.textMuted }}>
        {plan.description}
      </p>

      {/* Price */}
      <p
        className="mt-1 text-2xl font-bold"
        style={{ color: colors.textPrimary }}
      >
        {plan.price}
      </p>

      {/* Price unit */}
      <p className="mb-4 text-xs" style={{ color: colors.textMuted }}>
        {plan.priceUnit}
      </p>

      {/* CTA Button */}
      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        onClick={onCtaClick}
        className="w-full rounded-full border px-4 py-2 text-xs font-medium transition-colors"
        style={{
          borderColor: colors.accent,
          color: colors.accent,
          backgroundColor: "transparent",
        }}
      >
        {ctaText}
      </motion.button>
    </motion.div>
  );
}

// Workshop section component
function WorkshopSection({
  colors,
  description,
  options,
  price,
  priceUnit,
  ctaText,
  onCtaClick,
}: {
  colors: ColorScheme;
  description: string;
  options: WorkshopOption[];
  price: string;
  priceUnit: string;
  ctaText: string;
  onCtaClick?: () => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.4 }}
      className="mt-6 grid grid-cols-1 gap-6 rounded-xl p-6 shadow-sm md:grid-cols-3"
      style={{ backgroundColor: colors.cardBg }}
    >
      {/* Icon section */}
      <div className="flex items-center justify-center">
        <div
          className="flex h-16 w-16 items-center justify-center rounded-lg"
          style={{ backgroundColor: `${colors.accent}15` }}
        >
          <Users size={32} strokeWidth={1.5} color={colors.accent} />
        </div>
      </div>

      {/* Description section */}
      <div className="flex items-center">
        <p className="text-xs leading-relaxed" style={{ color: colors.textSecondary }}>
          {description}
        </p>
      </div>

      {/* Options section */}
      <div>
        <h4
          className="mb-2 text-sm font-semibold"
          style={{ color: colors.textPrimary }}
        >
          Workshop Options
        </h4>
        <ul className="mb-3 space-y-1">
          {options.map((option, idx) => (
            <li
              key={idx}
              className="flex items-center gap-2 text-xs"
              style={{ color: colors.textSecondary }}
            >
              <span
                className="h-1 w-1 rounded-full"
                style={{ backgroundColor: colors.accent }}
              />
              {option.text}
            </li>
          ))}
        </ul>
        <p className="mb-3">
          <span
            className="text-lg font-bold"
            style={{ color: colors.textPrimary }}
          >
            {price}
          </span>
          <span className="text-xs" style={{ color: colors.textMuted }}>
            {" "}
            {priceUnit}
          </span>
        </p>
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={onCtaClick}
          className="rounded-full border px-4 py-2 text-xs font-medium transition-colors"
          style={{
            borderColor: colors.accent,
            color: colors.accent,
            backgroundColor: "transparent",
          }}
        >
          {ctaText}
        </motion.button>
      </div>
    </motion.div>
  );
}

// Main Component
export default function PricingOplBig5({
  mode = "light",
  title = "Packages.",
  plans = defaultPlans,
  workshopDescription = "You X Ventures can be engaged to facilitate your team through our frameworks for intensive, high impact Workshop. Costs include preparation, facilitation and a recommendations report.",
  workshopOptions = defaultWorkshopOptions,
  workshopPrice = "$2,500",
  workshopPriceUnit = "per week",
  ctaText = "Get in touch",
  onCtaClick,
}: PricingOplBig5Props) {
  const colors = COLORS[mode];

  return (
    <section
      className="relative w-full px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20"
      style={{ backgroundColor: colors.background }}
    >
      <div className="mx-auto max-w-4xl">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="mb-10 text-center font-serif text-3xl italic sm:text-4xl"
          style={{ color: colors.titlePink }}
        >
          {title}
        </motion.h2>

        {/* Pricing cards grid */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {plans.map((plan, index) => (
            <PricingCard
              key={plan.id}
              plan={plan}
              colors={colors}
              index={index}
              ctaText={ctaText}
              onCtaClick={onCtaClick}
            />
          ))}
        </div>

        {/* Workshop section */}
        <WorkshopSection
          colors={colors}
          description={workshopDescription}
          options={workshopOptions}
          price={workshopPrice}
          priceUnit={workshopPriceUnit}
          ctaText={ctaText}
          onCtaClick={onCtaClick}
        />
      </div>
    </section>
  );
}
