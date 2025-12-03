"use client";

// ============================================================================
// CUSTOMIZATION - 이 섹션의 값들을 수정하여 프로젝트에 맞게 조정하세요
// ============================================================================

/**
 * 커스텀 색상 (브랜드 컬러)
 */
const COLORS = {
  light: {
    // 배경색 (선명한 노란색)
    background: "#FACF18",
    // 텍스트 색상
    textPrimary: "#000000",
    textSecondary: "#1A1A1A",
    // 버튼 테두리
    borderColor: "#000000",
  },
  dark: {
    background: "#B8970F",
    textPrimary: "#FFFFFF",
    textSecondary: "#F5F5F5",
    borderColor: "#FFFFFF",
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

// Types
interface PricingPlan {
  id: string;
  name: string;
  price: string;
  currency: string;
  suffix?: string;
  features: string[];
}

interface FooterLink {
  text: string;
  linkText: string;
  href: string;
}

interface PricingOplBig6Props {
  mode?: "light" | "dark";
  title?: string;
  titleEmoji?: string;
  plans?: PricingPlan[];
  buttonText?: string;
  footerLinks?: FooterLink[];
  onPurchase?: (planId: string) => void;
}

// Default plans
const defaultPlans: PricingPlan[] = [
  {
    id: "single",
    name: "Single license",
    price: "89",
    currency: "EUR",
    suffix: "+ VAT",
    features: ["For one website", "Free updates"],
  },
  {
    id: "friends",
    name: "Friends license",
    price: "139",
    currency: "EUR",
    suffix: "+ VAT",
    features: ["Two single licenses", "Team up and save", "Free updates"],
  },
  {
    id: "managed",
    name: "Managed install",
    price: "499",
    currency: "EUR",
    suffix: "+ VAT",
    features: [
      "We install & configure WordPress,\ntheme and recommended plugins",
      "Design + customization suggestions",
      "Free updates",
    ],
  },
];

const defaultFooterLinks: FooterLink[] = [
  {
    text: "To claim back",
    linkText: "VAT, see our FAQs",
    href: "#faqs",
  },
  {
    text: "Secure payments",
    linkText: "by Gumroad",
    href: "https://gumroad.com",
  },
];

// Color type
type ColorScheme = (typeof COLORS)["light"] | (typeof COLORS)["dark"];

// Pricing card component
function PricingCard({
  plan,
  colors,
  index,
  buttonText,
  onPurchase,
}: {
  plan: PricingPlan;
  colors: ColorScheme;
  index: number;
  buttonText: string;
  onPurchase?: (planId: string) => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="flex flex-col"
    >
      {/* Plan name and price */}
      <div className="mb-4">
        <h3
          className="text-base font-bold"
          style={{ color: colors.textPrimary }}
        >
          {plan.name}{" "}
          <span className="font-bold">
            {plan.price}
            {plan.currency === "EUR" ? "\u20AC" : plan.currency}
          </span>
          {plan.suffix && (
            <span
              className="ml-1 text-xs font-normal"
              style={{ color: colors.textSecondary }}
            >
              {plan.suffix}
            </span>
          )}
        </h3>
      </div>

      {/* Features */}
      <ul className="mb-6 space-y-1">
        {plan.features.map((feature, idx) => (
          <li
            key={idx}
            className="flex items-start text-sm"
            style={{ color: colors.textSecondary }}
          >
            <span className="mr-2">-</span>
            <span className="whitespace-pre-line">{feature}</span>
          </li>
        ))}
      </ul>

      {/* Purchase button */}
      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        onClick={() => onPurchase?.(plan.id)}
        className="w-full max-w-[180px] rounded-full border-2 bg-transparent px-6 py-3 text-xs font-semibold uppercase tracking-wider transition-colors hover:bg-black/5"
        style={{
          borderColor: colors.borderColor,
          color: colors.textPrimary,
        }}
      >
        {buttonText}
      </motion.button>
    </motion.div>
  );
}

// Main Component
export default function PricingOplBig6({
  mode = "light",
  title = "Join the club",
  titleEmoji = "\uD83C\uDF89",
  plans = defaultPlans,
  buttonText = "PURCHASE",
  footerLinks = defaultFooterLinks,
  onPurchase,
}: PricingOplBig6Props) {
  const colors = COLORS[mode];

  return (
    <section
      className="relative w-full px-6 py-12 sm:px-10 sm:py-16 lg:px-16 lg:py-20"
      style={{ backgroundColor: colors.background }}
    >
      <div className="mx-auto max-w-5xl">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="mb-10 font-serif text-2xl italic sm:text-3xl"
          style={{ color: colors.textPrimary }}
        >
          {title} {titleEmoji}
        </motion.h2>

        {/* Pricing cards grid */}
        <div className="mb-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {plans.map((plan, index) => (
            <PricingCard
              key={plan.id}
              plan={plan}
              colors={colors}
              index={index}
              buttonText={buttonText}
              onPurchase={onPurchase}
            />
          ))}
        </div>

        {/* Footer links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="space-y-1 text-xs"
          style={{ color: colors.textSecondary }}
        >
          {footerLinks.map((link, idx) => (
            <p key={idx}>
              {link.text}{" "}
              <a
                href={link.href}
                className="underline transition-opacity hover:opacity-70"
                style={{ color: colors.textPrimary }}
              >
                {link.linkText}
              </a>
            </p>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
