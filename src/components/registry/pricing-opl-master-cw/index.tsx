"use client";

// ============================================================================
// CUSTOMIZATION - 이 섹션의 값들을 수정하여 프로젝트에 맞게 조정하세요
// ============================================================================

/**
 * 커스텀 색상 (브랜드 컬러)
 */
const COLORS = {
  // Card 1 gradient (pink/mint)
  card1GradientStart: "#F8E8F5",
  card1GradientMid: "#E8F5F1",
  card1GradientEnd: "#D5F5E3",
  // Card 2 gradient (yellow/mint)
  card2GradientStart: "#FFF9D6",
  card2GradientMid: "#F5FCE8",
  card2GradientEnd: "#E5F5F0",
  // Button color
  buttonBg: "#1A1A1A",
  buttonText: "#FFFFFF",
  // Price colors
  priceOriginal: "#9CA3AF",
  // Testimonial card
  testimonialBg: "#FFFFFF",
  // Text colors
  titleDark: "#1F2937",
  subtitleGray: "#6B7280",
  textMuted: "#9CA3AF",
} as const;

const CONTENT = {
  heading: "Pay once, use forever",
  card1: {
    title: "Mockup Bundle",
    description: "An ultimate mockup collection of the latest iPhone,\niPad, and MacBook devices.",
    specs: [
      { label: "Mockups", value: "96" },
      { label: "Platform", value: "Figma", hasIcon: true },
      { label: "Resolution", value: "4K" },
      { label: "Devices types", value: "MacBook, iPhone, iPad" },
      { label: "License", value: "Commercial" },
    ],
    price: "$69",
    originalPrice: "$365",
    buttonText: "Get Mockups",
  },
  card2: {
    title: "Craftwork Pro Access",
    description: "With this premium subscription, you'll gain access to\ncompletely all products on the marketplace.",
    testimonial: {
      quote: "Craftwork is my favourite resource for\nillustrations and other design resources.",
      author: "Johan Steneros",
      role: "Founder at Bravemark",
      verified: true,
    },
    price: "$99",
    period: "/month",
    buttonText: "Explore Pro Access",
  },
} as const;

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { motion } from "motion/react";
import Image from "next/image";

interface PricingOplMasterCwProps {
  heading?: string;
  card1Title?: string;
  card1Description?: string;
  card1Specs?: readonly { label: string; value: string; hasIcon?: boolean }[];
  card1Price?: string;
  card1OriginalPrice?: string;
  card1ButtonText?: string;
  card2Title?: string;
  card2Description?: string;
  card2TestimonialQuote?: string;
  card2TestimonialAuthor?: string;
  card2TestimonialRole?: string;
  card2TestimonialVerified?: boolean;
  card2Price?: string;
  card2Period?: string;
  card2ButtonText?: string;
  onCard1Click?: () => void;
  onCard2Click?: () => void;
}

// Figma logo icon
function FigmaIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 12 18" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M3 18C4.65685 18 6 16.6569 6 15V12H3C1.34315 12 0 13.3431 0 15C0 16.6569 1.34315 18 3 18Z" fill="#0ACF83"/>
      <path d="M0 9C0 7.34315 1.34315 6 3 6H6V12H3C1.34315 12 0 10.6569 0 9Z" fill="#A259FF"/>
      <path d="M0 3C0 1.34315 1.34315 0 3 0H6V6H3C1.34315 6 0 4.65685 0 3Z" fill="#F24E1E"/>
      <path d="M6 0H9C10.6569 0 12 1.34315 12 3C12 4.65685 10.6569 6 9 6H6V0Z" fill="#FF7262"/>
      <path d="M12 9C12 10.6569 10.6569 12 9 12C7.34315 12 6 10.6569 6 9C6 7.34315 7.34315 6 9 6C10.6569 6 12 7.34315 12 9Z" fill="#1ABCFE"/>
    </svg>
  );
}

// Diamond/gem icon for card 1
function DiamondIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="diamondGradient1" x1="8" y1="8" x2="40" y2="40" gradientUnits="userSpaceOnUse">
          <stop stopColor="#A5B4FC"/>
          <stop offset="0.5" stopColor="#818CF8"/>
          <stop offset="1" stopColor="#6366F1"/>
        </linearGradient>
        <linearGradient id="diamondGradient2" x1="24" y1="8" x2="24" y2="42" gradientUnits="userSpaceOnUse">
          <stop stopColor="#C7D2FE"/>
          <stop offset="1" stopColor="#818CF8"/>
        </linearGradient>
      </defs>
      <path d="M24 4L38 18L24 44L10 18L24 4Z" fill="url(#diamondGradient1)"/>
      <path d="M10 18H38L24 44L10 18Z" fill="url(#diamondGradient2)" fillOpacity="0.8"/>
      <path d="M10 18L24 4L38 18H10Z" fill="#E0E7FF"/>
      <path d="M24 4L24 18L10 18L24 4Z" fill="#C7D2FE"/>
      <path d="M24 18L24 44L10 18H24Z" fill="#818CF8" fillOpacity="0.5"/>
    </svg>
  );
}

// Star/sparkle icon for card 2
function StarIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="starGradient" x1="24" y1="4" x2="24" y2="44" gradientUnits="userSpaceOnUse">
          <stop stopColor="#E5E7EB"/>
          <stop offset="1" stopColor="#9CA3AF"/>
        </linearGradient>
      </defs>
      <path d="M24 4L27.5 18.5L42 24L27.5 29.5L24 44L20.5 29.5L6 24L20.5 18.5L24 4Z" fill="url(#starGradient)"/>
      <path d="M24 8L26.5 19L37 24L26.5 29L24 40L21.5 29L11 24L21.5 19L24 8Z" fill="#F3F4F6"/>
      <circle cx="24" cy="24" r="4" fill="#D1D5DB"/>
    </svg>
  );
}

// Verified check icon
function VerifiedIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="8" cy="8" r="8" fill="#10B981"/>
      <path d="M5 8L7 10L11 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

export default function PricingOplMasterCw({
  heading = CONTENT.heading,
  card1Title = CONTENT.card1.title,
  card1Description = CONTENT.card1.description,
  card1Specs = CONTENT.card1.specs,
  card1Price = CONTENT.card1.price,
  card1OriginalPrice = CONTENT.card1.originalPrice,
  card1ButtonText = CONTENT.card1.buttonText,
  card2Title = CONTENT.card2.title,
  card2Description = CONTENT.card2.description,
  card2TestimonialQuote = CONTENT.card2.testimonial.quote,
  card2TestimonialAuthor = CONTENT.card2.testimonial.author,
  card2TestimonialRole = CONTENT.card2.testimonial.role,
  card2TestimonialVerified = CONTENT.card2.testimonial.verified,
  card2Price = CONTENT.card2.price,
  card2Period = CONTENT.card2.period,
  card2ButtonText = CONTENT.card2.buttonText,
  onCard1Click,
  onCard2Click,
}: PricingOplMasterCwProps) {
  return (
    <section className="relative w-full bg-gray-50 py-16 lg:py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl lg:mb-16"
        >
          {heading}
        </motion.h1>

        {/* Cards */}
        <div className="grid gap-6 md:grid-cols-2 lg:gap-8">
          {/* Card 1 - Mockup Bundle */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="relative overflow-hidden rounded-2xl p-6 sm:p-8"
            style={{
              background: `linear-gradient(180deg, ${COLORS.card1GradientStart} 0%, ${COLORS.card1GradientMid} 50%, ${COLORS.card1GradientEnd} 100%)`,
            }}
          >
            {/* Icon */}
            <div className="mb-5 flex justify-center">
              <DiamondIcon className="h-12 w-12" />
            </div>

            {/* Title */}
            <h2
              className="mb-3 text-center text-xl font-semibold sm:text-2xl"
              style={{ color: COLORS.titleDark }}
            >
              {card1Title}
            </h2>

            {/* Description */}
            <p
              className="mb-6 whitespace-pre-line text-center text-sm leading-relaxed"
              style={{ color: COLORS.subtitleGray }}
            >
              {card1Description}
            </p>

            {/* Specs */}
            <div className="mb-6 space-y-3">
              {card1Specs.map((spec, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between border-b border-gray-200/50 pb-3 last:border-0 last:pb-0"
                >
                  <span className="text-sm" style={{ color: COLORS.subtitleGray }}>
                    {spec.label}
                  </span>
                  <span className="flex items-center gap-2 text-sm font-medium" style={{ color: COLORS.titleDark }}>
                    {spec.hasIcon && <FigmaIcon className="h-4 w-4" />}
                    {spec.value}
                  </span>
                </div>
              ))}
            </div>

            {/* Price */}
            <div className="mb-6 flex items-baseline justify-center gap-3">
              <span className="text-4xl font-bold" style={{ color: COLORS.titleDark }}>
                {card1Price}
              </span>
              <span
                className="text-xl line-through"
                style={{ color: COLORS.priceOriginal }}
              >
                {card1OriginalPrice}
              </span>
            </div>

            {/* Button */}
            <button
              onClick={onCard1Click}
              className="w-full rounded-full py-3.5 text-sm font-medium transition-all duration-300 hover:opacity-90 hover:shadow-lg"
              style={{
                backgroundColor: COLORS.buttonBg,
                color: COLORS.buttonText,
              }}
            >
              {card1ButtonText}
            </button>
          </motion.div>

          {/* Card 2 - Craftwork Pro Access */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative overflow-hidden rounded-2xl p-6 sm:p-8"
            style={{
              background: `linear-gradient(180deg, ${COLORS.card2GradientStart} 0%, ${COLORS.card2GradientMid} 50%, ${COLORS.card2GradientEnd} 100%)`,
            }}
          >
            {/* Icon */}
            <div className="mb-5 flex justify-center">
              <StarIcon className="h-12 w-12" />
            </div>

            {/* Title */}
            <h2
              className="mb-3 text-center text-xl font-semibold sm:text-2xl"
              style={{ color: COLORS.titleDark }}
            >
              {card2Title}
            </h2>

            {/* Description */}
            <p
              className="mb-6 whitespace-pre-line text-center text-sm leading-relaxed"
              style={{ color: COLORS.subtitleGray }}
            >
              {card2Description}
            </p>

            {/* Testimonial Card */}
            <div
              className="mb-6 rounded-xl p-5"
              style={{ backgroundColor: COLORS.testimonialBg }}
            >
              {/* Avatar */}
              <div className="mb-3 flex justify-center">
                <div className="h-10 w-10 overflow-hidden rounded-full bg-gray-200">
                  <Image
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=faces"
                    alt={card2TestimonialAuthor}
                    width={40}
                    height={40}
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>

              {/* Quote */}
              <p
                className="mb-3 whitespace-pre-line text-center text-sm leading-relaxed"
                style={{ color: COLORS.subtitleGray }}
              >
                {card2TestimonialQuote}
              </p>

              {/* Author */}
              <p
                className="text-center text-sm font-semibold"
                style={{ color: COLORS.titleDark }}
              >
                {card2TestimonialAuthor}
              </p>
              <div className="flex items-center justify-center gap-1.5">
                <p
                  className="text-center text-xs"
                  style={{ color: COLORS.textMuted }}
                >
                  {card2TestimonialRole}
                </p>
                {card2TestimonialVerified && (
                  <VerifiedIcon className="h-3.5 w-3.5" />
                )}
              </div>
            </div>

            {/* Price */}
            <div className="mb-6 flex items-baseline justify-center">
              <span className="text-4xl font-bold" style={{ color: COLORS.titleDark }}>
                {card2Price}
              </span>
              <span className="text-sm" style={{ color: COLORS.subtitleGray }}>
                {card2Period}
              </span>
            </div>

            {/* Button */}
            <button
              onClick={onCard2Click}
              className="w-full rounded-full py-3.5 text-sm font-medium transition-all duration-300 hover:opacity-90 hover:shadow-lg"
              style={{
                backgroundColor: COLORS.buttonBg,
                color: COLORS.buttonText,
              }}
            >
              {card2ButtonText}
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
