"use client";

// ============================================================================
// CUSTOMIZATION - 이 섹션의 값들을 수정하여 프로젝트에 맞게 조정하세요
// ============================================================================

/**
 * 커스텀 색상 (브랜드 컬러)
 * - grayscale 텍스트는 Tailwind semantic color 사용 (text-gray-900 등)
 * - 여기에는 브랜드 고유 컬러만 정의
 */
const COLORS = {
  background: "#141414",
  cardDark: "#1c1c1c",
  accent: "#d4ff00", // 라임/형광 연두색
  purple: "#9f7aea",
  soonBadge: "#4a4a4a",
} as const;

/**
 * 이미지 에셋
 * - path: 이미지 경로
 * - alt: 접근성용 대체 텍스트
 * - prompt: AI 이미지 재생성용 상세 프롬프트
 */
const IMAGES = {
  // 예시:
  // hero: {
  //   path: "/registry/pricing-opl-master-wwk/hero.jpg",
  //   alt: "Hero image description",
  //   prompt: `Detailed image generation prompt...`,
  // },
} as const;

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { motion } from "motion/react";
import { Check, ChevronRight, Star, Heart } from "lucide-react";

interface FeatureItem {
  text: string;
  comingSoon?: boolean;
}

interface PricingOplMasterWwkProps {
  title?: string;
  subtitle?: string;
  features?: FeatureItem[];
  freeReferrals?: number;
  pricePerReferral?: string;
  ctaText?: string;
  ctaSubtext?: string;
  referTitle?: string;
  referDescription?: string;
  onCtaClick?: () => void;
}

const defaultFeatures: FeatureItem[] = [
  { text: "Unlimited programs" },
  { text: "Unlimited rewards" },
  { text: "Unlimited users" },
  { text: "Unlimited team members" },
  { text: "App Store Offer Codes", comingSoon: true },
  { text: "Experiments", comingSoon: true },
  { text: "Analytics", comingSoon: true },
];

// Diamond watermark icon
function DiamondWatermark() {
  return (
    <svg
      className="absolute bottom-8 left-8 h-48 w-48 text-white/[0.04]"
      viewBox="0 0 100 100"
      fill="currentColor"
    >
      <path d="M50 5 L95 35 L50 95 L5 35 Z" />
      <path d="M5 35 L50 45 L95 35" fill="currentColor" opacity="0.5" />
      <path d="M50 45 L50 95" stroke="currentColor" strokeWidth="1" opacity="0.3" />
      <path d="M25 20 L50 5 L75 20" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.3" />
    </svg>
  );
}

// Soon badge component
function SoonBadge() {
  return (
    <span
      className="ml-2 rounded-full px-2 py-0.5 text-[10px] font-medium text-gray-400"
      style={{ backgroundColor: COLORS.soonBadge }}
    >
      Soon
    </span>
  );
}

// Circled number icon
function CircledNumber({ number }: { number: number }) {
  return (
    <div
      className="flex h-7 w-7 items-center justify-center rounded-full border-2"
      style={{ borderColor: COLORS.accent, color: COLORS.accent }}
    >
      <span className="text-xs font-bold">{number}</span>
    </div>
  );
}

export default function PricingOplMasterWwk({
  title = "Simple win-win pricing",
  subtitle = "Pay only for what you use. All features included.",
  features = defaultFeatures,
  freeReferrals = 100,
  pricePerReferral = "$0.1",
  ctaText = "Start for free",
  ctaSubtext = "No credit card required.",
  referTitle = "Refer a friend",
  referDescription = "Earn unlimited FREE referrals for your project by inviting others to join WinWinKit!",
  onCtaClick,
}: PricingOplMasterWwkProps) {
  return (
    <section
      className="relative w-full px-6 py-16 md:px-12 md:py-24"
      style={{ backgroundColor: COLORS.background }}
    >
      <div className="mx-auto max-w-5xl">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12">
          {/* Left Section - Title and Features */}
          <div className="relative">
            {/* Diamond Watermark */}
            <DiamondWatermark />

            {/* Title */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-bold tracking-tight text-white md:text-4xl">
                {title}
              </h2>
              <p className="mt-2 text-sm text-gray-500">{subtitle}</p>
            </motion.div>

            {/* Features List */}
            <motion.ul
              className="mt-10 flex flex-col gap-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              {features.map((feature, index) => (
                <motion.li
                  key={index}
                  className="flex items-center gap-3"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.3 + index * 0.05 }}
                >
                  <Check
                    className="h-4 w-4 shrink-0"
                    style={{ color: COLORS.accent }}
                  />
                  <span className="text-sm text-white md:text-base">
                    {feature.text}
                  </span>
                  {feature.comingSoon && <SoonBadge />}
                </motion.li>
              ))}
            </motion.ul>
          </div>

          {/* Right Section - Cards */}
          <div className="flex flex-col gap-4">
            {/* Top Card - Pricing Info */}
            <motion.div
              className="overflow-hidden rounded-2xl"
              style={{ backgroundColor: COLORS.accent }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="flex">
                {/* Left - Free Referrals */}
                <div className="flex-1 border-r border-black/10 p-5">
                  <div className="text-3xl font-bold text-gray-900 md:text-4xl">
                    {freeReferrals}
                  </div>
                  <div className="mt-1 text-sm text-gray-800">
                    first referrals for
                    <br />
                    <span className="font-semibold">FREE</span>
                  </div>
                </div>
                {/* Right - Per Referral */}
                <div className="relative flex-1 p-5">
                  <div className="text-3xl font-bold text-gray-900 md:text-4xl">
                    {pricePerReferral}
                  </div>
                  <div className="mt-1 text-sm text-gray-800">per referral</div>

                  {/* Launch Offer Button */}
                  <button className="mt-3 rounded-full border border-gray-900/60 bg-transparent px-3 py-1 text-xs font-medium text-gray-900 transition-colors hover:bg-gray-900/10">
                    Launch Offer
                  </button>

                  {/* Decorative Icons */}
                  <div className="absolute right-3 top-3 flex flex-col gap-2">
                    <Star
                      className="h-5 w-5"
                      style={{ color: COLORS.purple }}
                      fill={COLORS.purple}
                    />
                    <CircledNumber number={1} />
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Middle Card - CTA */}
            <motion.button
              className="flex items-center justify-between rounded-2xl bg-white p-5 text-left transition-transform hover:scale-[1.01] active:scale-[0.99]"
              onClick={onCtaClick}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div>
                <div className="text-lg font-semibold text-gray-900">
                  {ctaText}
                </div>
                <div className="text-sm text-gray-500">{ctaSubtext}</div>
              </div>
              <ChevronRight className="h-5 w-5 text-gray-400" />
            </motion.button>

            {/* Bottom Card - Refer a Friend */}
            <motion.div
              className="relative overflow-hidden rounded-2xl border p-5"
              style={{
                backgroundColor: COLORS.cardDark,
                borderColor: COLORS.accent,
              }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              {/* Soon Badge */}
              <span
                className="absolute right-4 top-4 rounded-full px-2 py-0.5 text-[10px] font-medium text-gray-400"
                style={{ backgroundColor: COLORS.soonBadge }}
              >
                Soon
              </span>

              <h3
                className="text-lg font-semibold"
                style={{ color: COLORS.accent }}
              >
                {referTitle}
              </h3>
              <p
                className="mt-2 max-w-[280px] text-sm leading-relaxed"
                style={{ color: COLORS.accent }}
              >
                {referDescription}
              </p>

              {/* Heart Icon */}
              <div
                className="absolute bottom-4 right-4 flex h-10 w-10 items-center justify-center rounded-xl"
                style={{ backgroundColor: COLORS.purple }}
              >
                <Heart className="h-5 w-5 text-white" fill="white" />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
