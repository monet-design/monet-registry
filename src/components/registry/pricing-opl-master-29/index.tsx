"use client";

// ============================================================================
// CUSTOMIZATION - 이 섹션의 값들을 수정하여 프로젝트에 맞게 조정하세요
// ============================================================================

/**
 * 커스텀 색상 (브랜드 컬러)
 */
const COLORS = {
  light: {
    accent: "#0B348A", // Blue button
    accentHover: "#0A2D75",
    featuredCardBg: "#1E1E27", // Dark card background
    featuredCardBgGradient: "#14141C",
    cardBorder: "#E2E3E8",
    linkColor: "#0B348A",
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
import { Check } from "lucide-react";

// Types
interface PlanFeature {
  text: string;
}

interface PricingPlan {
  name: string;
  subtitle: string;
  features: PlanFeature[];
  price: string;
  originalPrice?: string;
  priceDescription: string;
  ctaText: string;
  ctaVariant?: "outline" | "solid";
  featured?: boolean;
  styleOptions?: string[];
}

interface InfoItem {
  label: string;
  value: string;
}

interface FeatureItem {
  text: string;
}

interface UpdateItem {
  version: string;
  date: string;
  description: string;
}

interface PricingOplMaster29Props {
  mode?: "light" | "dark";
  heading?: string;
  subheading?: string;
  plans?: PricingPlan[];
  previewLink?: string;
  supportEmail?: string;
  infoItems?: InfoItem[];
  featureItems?: FeatureItem[];
  updateItems?: UpdateItem[];
  productHuntRank?: number;
}

// Default data
const defaultPlans: PricingPlan[] = [
  {
    name: "One Category",
    subtitle: "For small project",
    features: [
      { text: "60-360 Icons" },
      { text: "Line, Solid, Duotone" },
      { text: "One category" },
    ],
    price: "$9-$12",
    priceDescription: "Best price if you need only one set.",
    ctaText: "BROWSE CATEGORIES",
    ctaVariant: "outline",
  },
  {
    name: "One Style",
    subtitle: "For big project",
    features: [
      { text: "632 Icons" },
      { text: "One style" },
      { text: "All 17 categories" },
    ],
    price: "$35",
    priceDescription: "Best price if you need only one style.",
    ctaText: "LINE",
    ctaVariant: "outline",
    styleOptions: ["LINE", "SOLID", "DUOTONE"],
  },
  {
    name: "Universal Icon Set",
    subtitle: "For unlimited power",
    features: [
      { text: "1896 Icons" },
      { text: "Line, Solid, Duotone" },
      { text: "All 17 categories" },
    ],
    price: "$69",
    originalPrice: "$156",
    priceDescription: "Best price if you need unlimited flexibility.",
    ctaText: "GET THIS",
    ctaVariant: "solid",
    featured: true,
  },
];

const defaultInfoItems: InfoItem[] = [
  { label: "Compatible with", value: "Figma" },
  { label: "File Type", value: "Figma, IconJar,\nPNG, SVG" },
  { label: "Release", value: "Oct 27, 2020" },
  { label: "Last update", value: "Jul 19, 2021" },
];

const defaultFeatureItems: FeatureItem[] = [
  { text: "24 x 24 px grid size" },
  { text: "2px line stroke" },
  { text: "All shapes are vector based" },
  { text: "Smooth and rounded corners" },
  { text: "Easy to change style (Support Figma's Variants)" },
  { text: "Easy to change colors" },
];

const defaultUpdateItems: UpdateItem[] = [
  {
    version: "Version 2.1 (Jul 19, 2021)",
    date: "Jul 19, 2021",
    description: "Added the Date and Time Icon Set",
  },
  {
    version: "Version 2.0 (Feb 26, 2021)",
    date: "Feb 26, 2021",
    description:
      "Next generation of the Universal Icon Set. We've updated all icons, added 711 new ones and the IconJar file.",
  },
];

// Pricing Card Component
function PricingCard({ plan }: { plan: PricingPlan }) {
  const colors = COLORS.light;

  if (plan.featured) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="relative flex flex-col rounded-lg p-6"
        style={{
          background: `linear-gradient(180deg, ${colors.featuredCardBg} 0%, ${colors.featuredCardBgGradient} 100%)`,
        }}
      >
        {/* Plan Name */}
        <h3 className="mb-1 text-base font-semibold text-white">{plan.name}</h3>
        <p className="mb-4 text-xs text-gray-400">{plan.subtitle}</p>

        {/* Features */}
        <ul className="mb-6 space-y-2">
          {plan.features.map((feature, idx) => (
            <li key={idx} className="flex items-center gap-2">
              <Check className="h-4 w-4 flex-shrink-0 text-blue-400" />
              <span className="text-sm text-gray-300">{feature.text}</span>
            </li>
          ))}
        </ul>

        {/* Price */}
        <div className="mb-1 flex items-baseline gap-2">
          {plan.originalPrice && (
            <span className="text-sm text-gray-500 line-through">
              {plan.originalPrice}
            </span>
          )}
          <span className="text-3xl font-bold text-white">{plan.price}</span>
        </div>
        <p className="mb-6 text-xs text-gray-400">{plan.priceDescription}</p>

        {/* CTA Button */}
        <button
          className="mt-auto w-full rounded-md px-4 py-2.5 text-sm font-semibold text-white transition-colors"
          style={{ backgroundColor: colors.accent }}
        >
          {plan.ctaText}
        </button>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="relative flex flex-col rounded-lg border bg-white p-6"
      style={{ borderColor: colors.cardBorder }}
    >
      {/* Plan Name */}
      <h3 className="mb-1 text-base font-semibold text-gray-900">{plan.name}</h3>
      <p className="mb-4 text-xs text-gray-500">{plan.subtitle}</p>

      {/* Features */}
      <ul className="mb-6 space-y-2">
        {plan.features.map((feature, idx) => (
          <li key={idx} className="flex items-center gap-2">
            <Check className="h-4 w-4 flex-shrink-0 text-gray-400" />
            <span className="text-sm text-gray-600">{feature.text}</span>
          </li>
        ))}
      </ul>

      {/* Price */}
      <div className="mb-1">
        <span className="text-3xl font-bold text-gray-900">{plan.price}</span>
      </div>
      <p className="mb-6 text-xs text-gray-500">{plan.priceDescription}</p>

      {/* CTA Button or Style Options */}
      {plan.styleOptions ? (
        <div className="mt-auto flex flex-wrap gap-2">
          {plan.styleOptions.map((style, idx) => (
            <button
              key={idx}
              className="rounded border border-gray-300 bg-white px-4 py-2 text-xs font-semibold text-gray-700 transition-colors hover:bg-gray-50"
            >
              {style}
            </button>
          ))}
        </div>
      ) : (
        <button className="mt-auto w-full rounded-md border border-gray-900 bg-white px-4 py-2.5 text-sm font-semibold text-gray-900 transition-colors hover:bg-gray-50">
          {plan.ctaText}
        </button>
      )}
    </motion.div>
  );
}

// Product Hunt Badge Component
function ProductHuntBadge({ rank = 153 }: { rank?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: 0.4 }}
      className="flex items-center gap-2 rounded-full border border-gray-200 bg-white px-3 py-1.5 shadow-sm"
    >
      <div className="flex h-5 w-5 items-center justify-center rounded-full bg-[#DA552F]">
        <span className="text-xs font-bold text-white">P</span>
      </div>
      <div className="flex flex-col">
        <span className="text-[10px] uppercase tracking-wider text-gray-400">
          FEATURED ON
        </span>
        <span className="text-xs font-semibold text-gray-900">Product Hunt</span>
      </div>
      <div className="ml-1 flex items-center gap-0.5 rounded bg-gray-100 px-1.5 py-0.5">
        <span className="text-xs font-semibold text-gray-600">#{rank}</span>
      </div>
    </motion.div>
  );
}

// Main Component
export default function PricingOplMaster29({
  mode = "light",
  heading = "Get Universal Icon Set",
  subheading = "Projects require different types of sets, so you can choose different purchase methods.",
  plans = defaultPlans,
  previewLink = "the full preview",
  supportEmail = "support@123d.one",
  infoItems = defaultInfoItems,
  featureItems = defaultFeatureItems,
  updateItems = defaultUpdateItems,
  productHuntRank = 153,
}: PricingOplMaster29Props) {
  const colors = COLORS.light;

  return (
    <section className="relative w-full bg-white py-12 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-10 text-center"
        >
          <h1 className="mb-3 text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
            {heading}
          </h1>
          <p className="mx-auto max-w-md text-sm text-gray-500">{subheading}</p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="mb-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {plans.map((plan, idx) => (
            <PricingCard key={idx} plan={plan} />
          ))}
        </div>

        {/* Preview Note */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mb-10 text-center text-xs text-gray-500"
        >
          Before purchase check{" "}
          <a
            href="#"
            className="underline"
            style={{ color: colors.linkColor }}
          >
            {previewLink}
          </a>
          . Fell free to send me your feedback and ideas about the product at{" "}
          <a
            href={`mailto:${supportEmail}`}
            className="underline"
            style={{ color: colors.linkColor }}
          >
            {supportEmail}
          </a>
        </motion.p>

        {/* Info Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="grid gap-6 border-t border-gray-200 pt-8 sm:grid-cols-3"
        >
          {/* Info Column */}
          <div>
            <h4 className="mb-4 text-base font-semibold text-gray-900">Info</h4>
            <dl className="space-y-3">
              {infoItems.map((item, idx) => (
                <div key={idx} className="flex justify-between gap-4">
                  <dt className="text-xs text-gray-500">{item.label}</dt>
                  <dd className="text-right text-xs font-medium text-gray-900 whitespace-pre-line">
                    {item.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          {/* Features Column */}
          <div>
            <h4 className="mb-4 text-base font-semibold text-gray-900">
              Features
            </h4>
            <ul className="space-y-2">
              {featureItems.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <Check className="mt-0.5 h-3.5 w-3.5 flex-shrink-0 text-gray-400" />
                  <span className="text-xs text-gray-600">{item.text}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Updates Column */}
          <div>
            <h4 className="mb-4 text-base font-semibold text-gray-900">
              Updates
            </h4>
            <div className="space-y-4">
              {updateItems.map((item, idx) => (
                <div key={idx}>
                  <p className="text-xs font-medium text-gray-900">
                    {item.version}
                  </p>
                  <p className="mt-1 text-xs text-gray-500">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Product Hunt Badge */}
        <div className="mt-10 flex justify-center">
          <ProductHuntBadge rank={productHuntRank} />
        </div>
      </div>
    </section>
  );
}
