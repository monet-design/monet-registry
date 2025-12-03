"use client";

// ============================================================================
// CUSTOMIZATION - 이 섹션의 값들을 수정하여 프로젝트에 맞게 조정하세요
// ============================================================================

/**
 * 커스텀 색상 (브랜드 컬러)
 */
const COLORS = {
  background: "#F5F5F7",
  accent: "#2563EB",
  accentHover: "#1D4ED8",
  accentLight: "#3B82F6",
  greenDot: "#10B981",
  darkCard: "#1A1A1A",
  cardBorder: "#E5E7EB",
  textMuted: "#6B7280",
  textSecondary: "#9CA3AF",
} as const;

/**
 * 이미지 에셋
 */
const IMAGES = {} as const;

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Check, Calendar, Target, BarChart3, ArrowRight } from "lucide-react";

// Types
interface Feature {
  text: string;
}

interface ComparisonCard {
  id: string;
  icon: "agency" | "partner" | "savings";
  price: string;
  period: string;
  description: string;
  badge?: string;
  isDark?: boolean;
  vsLabel?: boolean;
  arrowLabel?: boolean;
}

interface PricingOplMasterOtherProps {
  label?: string;
  title?: string;
  subtitle?: string;
  spotsOpen?: number;
  startingLabel?: string;
  price?: string;
  pricePeriod?: string;
  priceDescription?: string;
  features?: Feature[];
  buttonText?: string;
  buttonSubtext?: string;
  tabs?: string[];
  comparisonCards?: ComparisonCard[];
}

// Default data
const defaultFeatures: Feature[] = [
  { text: "Dedicated team focused on you" },
  { text: "Strategic, steady collaboration" },
  { text: "Flexible process, no hourly limit" },
  { text: "Built to grow as you evolve" },
];

const defaultTabs = ["See the savings", "Partnership examples", "What's included"];

const defaultComparisonCards: ComparisonCard[] = [
  {
    id: "agency",
    icon: "agency",
    price: "$22,000",
    period: "/ mo",
    description:
      "Ave monthly salary + benefits for one in-house sr. designer at a tech start-up. Not to mention onboarding time.",
    vsLabel: true,
  },
  {
    id: "partner",
    icon: "partner",
    price: "$7,995",
    period: "/ mo",
    description:
      "Our Partner plan. You get multiple designers & design systems at the ready, onboarding is a sip of coffee.",
    arrowLabel: true,
  },
  {
    id: "savings",
    icon: "savings",
    price: "$14,000+",
    period: "/ mo",
    badge: "Big savings!",
    description:
      "Your monthly savings working with The Other Design Co. Tell your manager to give you this difference in a raise.",
    isDark: true,
  },
];

// Agency Icon Component
function AgencyIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
      <path
        d="M8 20L16 8L24 20L16 14L8 20Z"
        fill="#1A1A1A"
        stroke="#1A1A1A"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M12 24L16 16L20 24"
        fill="none"
        stroke="#1A1A1A"
        strokeWidth="2"
        strokeLinejoin="round"
      />
    </svg>
  );
}

// Partner Icon Component (Target)
function PartnerIcon() {
  return (
    <div
      className="flex h-8 w-8 items-center justify-center rounded-full"
      style={{ backgroundColor: COLORS.accent }}
    >
      <Target className="h-5 w-5 text-white" />
    </div>
  );
}

// Savings Icon Component
function SavingsIcon() {
  return (
    <div className="flex items-end gap-0.5">
      <div className="h-4 w-1.5 rounded-sm bg-[#3B82F6]" />
      <div className="h-6 w-1.5 rounded-sm bg-[#6366F1]" />
      <div className="h-8 w-1.5 rounded-sm bg-[#EC4899]" />
    </div>
  );
}

// Icon renderer
function IconRenderer({ type }: { type: "agency" | "partner" | "savings" }) {
  switch (type) {
    case "agency":
      return <AgencyIcon />;
    case "partner":
      return <PartnerIcon />;
    case "savings":
      return <SavingsIcon />;
    default:
      return null;
  }
}

// Pricing Card Component
function PricingCard({
  spotsOpen,
  startingLabel,
  price,
  pricePeriod,
  priceDescription,
  features,
  buttonText,
  buttonSubtext,
}: {
  spotsOpen: number;
  startingLabel: string;
  price: string;
  pricePeriod: string;
  priceDescription: string;
  features: Feature[];
  buttonText: string;
  buttonSubtext: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="mx-auto w-full max-w-md rounded-2xl bg-white p-6 shadow-lg"
    >
      {/* Spots badge */}
      <div className="mb-6 flex items-center gap-2">
        <span
          className="h-2 w-2 rounded-full"
          style={{ backgroundColor: COLORS.greenDot }}
        />
        <span className="text-sm text-gray-600">
          {spotsOpen} spots open
        </span>
      </div>

      {/* Price section */}
      <div className="mb-4">
        <p className="mb-1 text-sm text-gray-500">{startingLabel}</p>
        <div className="flex items-baseline">
          <span className="text-4xl font-bold text-gray-900">{price}</span>
          <span className="ml-1 text-lg text-gray-400">{pricePeriod}</span>
        </div>
      </div>

      {/* Description */}
      <p className="mb-6 text-sm leading-relaxed text-gray-500">
        {priceDescription}
      </p>

      {/* Features */}
      <div className="mb-6 space-y-3">
        {features.map((feature, index) => (
          <div key={index} className="flex items-center gap-3">
            <div
              className="flex h-5 w-5 flex-shrink-0 items-center justify-center rounded"
              style={{ backgroundColor: COLORS.accent }}
            >
              <Check className="h-3.5 w-3.5 text-white" strokeWidth={3} />
            </div>
            <span className="text-sm text-gray-700">{feature.text}</span>
          </div>
        ))}
      </div>

      {/* CTA Button */}
      <button
        className="flex w-full items-center justify-center gap-2 rounded-lg py-3.5 text-sm font-semibold text-white transition-colors"
        style={{ backgroundColor: COLORS.accent }}
        onMouseEnter={(e) =>
          (e.currentTarget.style.backgroundColor = COLORS.accentHover)
        }
        onMouseLeave={(e) =>
          (e.currentTarget.style.backgroundColor = COLORS.accent)
        }
      >
        <Calendar className="h-4 w-4" />
        {buttonText}
      </button>

      {/* Subtext */}
      <p className="mt-3 text-center text-xs text-gray-400">
        {buttonSubtext}
      </p>
    </motion.div>
  );
}

// Tab Button Component
function TabButton({
  label,
  isActive,
  onClick,
}: {
  label: string;
  isActive: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={`rounded-full px-4 py-2 text-sm font-medium transition-all ${
        isActive
          ? "bg-gray-900 text-white"
          : "text-gray-600 hover:bg-gray-100"
      }`}
    >
      {label}
    </button>
  );
}

// Comparison Card Component
function ComparisonCardItem({
  card,
  index,
}: {
  card: ComparisonCard;
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1 * index }}
      className={`relative flex flex-col rounded-xl p-5 ${
        card.isDark ? "text-white" : "bg-white text-gray-900"
      }`}
      style={{
        backgroundColor: card.isDark ? COLORS.darkCard : undefined,
      }}
    >
      {/* VS / Arrow labels */}
      {card.vsLabel && (
        <div className="absolute -right-4 top-1/2 z-10 flex -translate-y-1/2 items-center justify-center rounded-full bg-gray-100 px-2 py-1 text-xs font-medium text-gray-500">
          vs
        </div>
      )}
      {card.arrowLabel && (
        <div className="absolute -right-4 top-1/2 z-10 flex -translate-y-1/2 items-center justify-center">
          <ArrowRight className="h-4 w-4 text-gray-400" />
        </div>
      )}

      {/* Badge */}
      {card.badge && (
        <div className="absolute right-3 top-3">
          <span
            className="rounded-full px-2 py-0.5 text-[10px] font-semibold"
            style={{
              backgroundColor: COLORS.accentLight,
              color: "white",
            }}
          >
            {card.badge}
          </span>
        </div>
      )}

      {/* Icon */}
      <div className="mb-4">
        <IconRenderer type={card.icon} />
      </div>

      {/* Price */}
      <div className="mb-3 flex items-baseline">
        <span className="text-xl font-bold">{card.price}</span>
        <span
          className={`ml-1 text-sm ${
            card.isDark ? "text-gray-400" : "text-gray-400"
          }`}
        >
          {card.period}
        </span>
      </div>

      {/* Description */}
      <p
        className={`text-xs leading-relaxed ${
          card.isDark ? "text-gray-400" : "text-gray-500"
        }`}
      >
        {card.description}
      </p>
    </motion.div>
  );
}

// Main Component
export default function PricingOplMasterOther({
  label = "It's that simple",
  title = "Value that pays for itself.",
  subtitle = "Partner with a design team invested in your success.",
  spotsOpen = 2,
  startingLabel = "Starting at",
  price = "$7,995",
  pricePeriod = "/ month",
  priceDescription = "We'll hop on a call to come up with a tailored plan designed to help you achieve your goals and then some.",
  features = defaultFeatures,
  buttonText = "Schedule a call",
  buttonSubtext = "We'll send a few questions upfront to make the most of your time.",
  tabs = defaultTabs,
  comparisonCards = defaultComparisonCards,
}: PricingOplMasterOtherProps) {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section
      className="relative w-full px-4 py-16 sm:py-20 lg:py-24"
      style={{ backgroundColor: COLORS.background }}
    >
      <div className="mx-auto max-w-4xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-10 text-center"
        >
          <p
            className="mb-3 text-sm font-medium"
            style={{ color: COLORS.accent }}
          >
            {label}
          </p>
          <h2 className="mb-3 text-3xl font-bold text-gray-900 sm:text-4xl">
            {title}
          </h2>
          <p className="text-gray-500">{subtitle}</p>
        </motion.div>

        {/* Pricing Card */}
        <PricingCard
          spotsOpen={spotsOpen}
          startingLabel={startingLabel}
          price={price}
          pricePeriod={pricePeriod}
          priceDescription={priceDescription}
          features={features}
          buttonText={buttonText}
          buttonSubtext={buttonSubtext}
        />

        {/* Tabs Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16"
        >
          {/* Tab buttons */}
          <div className="mb-8 flex flex-wrap justify-center gap-2">
            {tabs.map((tab, index) => (
              <TabButton
                key={tab}
                label={tab}
                isActive={activeTab === index}
                onClick={() => setActiveTab(index)}
              />
            ))}
          </div>

          {/* Comparison Cards */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 gap-4 md:grid-cols-3"
            >
              {comparisonCards.map((card, index) => (
                <ComparisonCardItem key={card.id} card={card} index={index} />
              ))}
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
