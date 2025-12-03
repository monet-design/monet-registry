"use client";

// ============================================================================
// CUSTOMIZATION - Modify these values to adjust for your project
// ============================================================================

const COLORS = {
  // Background gradient
  bgGradientStart: "#2D3478",
  bgGradientEnd: "#1a1f4e",
  // Primary purple accent
  primaryPurple: "#5B4DC7",
  primaryPurpleHover: "#4F3EB8",
  // Light card
  cardLightBg: "#FFFFFF",
  cardLightBorder: "#E5E7EB",
  // Dark card
  cardDarkBg: "#353567",
  cardDarkOverlay: "rgba(53, 53, 103, 0.95)",
  // Text colors
  titlePurple: "#5B4DC7",
  titleCyan: "#5FD4C4",
  subtitleGray: "#6B7280",
  textDark: "#1F2937",
  textLight: "#FFFFFF",
  // Accent colors
  checkPurple: "#8B7FD4",
  checkCyan: "#5FD4C4",
} as const;

const CONTENT = {
  tagline: "Transparent pricing that aligns interests",
  heading: "Simple, SaaS based pricing.",
  subheading: "Get access to our APIs and start building your next fintech product today.",
  launchScale: {
    title: "Launch & Scale",
    description: "Everything you need to build, launch & scale your product.",
    features: [
      "Low Monthly Minimums",
      "No Setup Fees",
      "No Long Term Contracts",
      "No Commissions, Clearing or Custody Fees",
      "Unparalleled Revenue Opportunities",
    ],
    cta: "Start Building Today",
    buttonText: "Request Access",
  },
  customizable: {
    title: "Customizable",
    description: "Custom pricing models and revenue opportunities for businesses with large customer bases.",
    features: [
      "Unique Solutions",
      "Volume Discounts",
      "Product Roadmap Influence",
      "Greater Revenue Opportunities",
    ],
    cta: "Discuss Custom Pricing",
    buttonText: "Contact Sales",
  },
} as const;

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import React from "react";
import { motion } from "motion/react";
import { Check } from "lucide-react";

interface PricingOplMaster33Props {
  tagline?: string;
  heading?: string;
  subheading?: string;
  launchScaleTitle?: string;
  launchScaleDescription?: string;
  launchScaleFeatures?: readonly string[];
  launchScaleCta?: string;
  launchScaleButtonText?: string;
  customizableTitle?: string;
  customizableDescription?: string;
  customizableFeatures?: readonly string[];
  customizableCta?: string;
  customizableButtonText?: string;
  onRequestAccess?: () => void;
  onContactSales?: () => void;
}

// Cloud Upload Icon Component
function CloudUploadIcon({ className, style }: { className?: string; style?: React.CSSProperties }) {
  return (
    <svg
      className={className}
      style={style}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242" />
      <path d="M12 12v9" />
      <path d="m16 16-4-4-4 4" />
    </svg>
  );
}

// Grid Icon Component
function GridIcon({ className, style }: { className?: string; style?: React.CSSProperties }) {
  return (
    <svg
      className={className}
      style={style}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="3" y="3" width="7" height="7" rx="1" />
      <rect x="14" y="3" width="7" height="7" rx="1" />
      <rect x="3" y="14" width="7" height="7" rx="1" />
      <rect x="14" y="14" width="7" height="7" rx="1" />
    </svg>
  );
}

// Feature item with check icon
function FeatureItem({
  text,
  checkColor,
  textColor,
}: {
  text: string;
  checkColor: string;
  textColor: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -10 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3 }}
      className="flex items-center gap-3"
    >
      <div
        className="flex h-5 w-5 flex-shrink-0 items-center justify-center rounded"
        style={{ color: checkColor }}
      >
        <Check className="h-4 w-4" strokeWidth={2.5} />
      </div>
      <span className="text-sm" style={{ color: textColor }}>
        {text}
      </span>
    </motion.div>
  );
}

// Abstract tech background for dark card
function TechBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden rounded-t-2xl">
      {/* Base gradient */}
      <div
        className="absolute inset-0"
        style={{
          background: `linear-gradient(135deg, #1e2266 0%, #353567 50%, #2a2d5a 100%)`,
        }}
      />
      {/* Glowing spheres */}
      <div className="absolute inset-0">
        {/* Large sphere */}
        <div
          className="absolute h-32 w-32 rounded-full opacity-30"
          style={{
            background: "radial-gradient(circle, #5fd4c4 0%, transparent 70%)",
            top: "10%",
            left: "20%",
            filter: "blur(20px)",
          }}
        />
        {/* Medium spheres */}
        <div
          className="absolute h-20 w-20 rounded-full opacity-40"
          style={{
            background: "radial-gradient(circle, #7b8fd4 0%, transparent 70%)",
            top: "30%",
            right: "15%",
            filter: "blur(15px)",
          }}
        />
        <div
          className="absolute h-16 w-16 rounded-full opacity-35"
          style={{
            background: "radial-gradient(circle, #c096d3 0%, transparent 70%)",
            bottom: "25%",
            left: "10%",
            filter: "blur(12px)",
          }}
        />
        {/* Small spheres */}
        <div
          className="absolute h-8 w-8 rounded-full opacity-50"
          style={{
            background: "radial-gradient(circle, #5fd4c4 0%, transparent 70%)",
            top: "50%",
            left: "50%",
            filter: "blur(8px)",
          }}
        />
        <div
          className="absolute h-6 w-6 rounded-full opacity-45"
          style={{
            background: "radial-gradient(circle, #8b7fd4 0%, transparent 70%)",
            top: "20%",
            right: "30%",
            filter: "blur(6px)",
          }}
        />
        {/* Sparkle dots */}
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute h-1.5 w-1.5 rounded-full bg-white opacity-60"
            style={{
              top: `${15 + (i * 7) % 70}%`,
              left: `${10 + (i * 11) % 80}%`,
              filter: "blur(0.5px)",
            }}
          />
        ))}
      </div>
      {/* Subtle grid overlay */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: "20px 20px",
        }}
      />
    </div>
  );
}

// Hero background with abstract tech elements
function HeroBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Base gradient */}
      <div
        className="absolute inset-0"
        style={{
          background: `linear-gradient(180deg, ${COLORS.bgGradientStart} 0%, ${COLORS.bgGradientEnd} 100%)`,
        }}
      />
      {/* Abstract tech elements on right side */}
      <div className="absolute right-0 top-0 h-full w-1/2 overflow-hidden">
        {/* Large glowing sphere cluster */}
        <div
          className="absolute h-64 w-64 rounded-full opacity-20"
          style={{
            background: "radial-gradient(circle, #5fd4c4 0%, transparent 60%)",
            top: "-5%",
            right: "-10%",
            filter: "blur(40px)",
          }}
        />
        <div
          className="absolute h-48 w-48 rounded-full opacity-25"
          style={{
            background: "radial-gradient(circle, #c096d3 0%, transparent 60%)",
            top: "10%",
            right: "20%",
            filter: "blur(30px)",
          }}
        />
        <div
          className="absolute h-32 w-32 rounded-full opacity-30"
          style={{
            background: "radial-gradient(circle, #8b7fd4 0%, transparent 60%)",
            top: "5%",
            right: "5%",
            filter: "blur(25px)",
          }}
        />
        {/* Small sparkles */}
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute h-2 w-2 rounded-full bg-white opacity-40"
            style={{
              top: `${5 + (i * 8) % 40}%`,
              right: `${5 + (i * 12) % 45}%`,
              filter: "blur(1px)",
            }}
          />
        ))}
      </div>
    </div>
  );
}

export default function PricingOplMaster33({
  tagline = CONTENT.tagline,
  heading = CONTENT.heading,
  subheading = CONTENT.subheading,
  launchScaleTitle = CONTENT.launchScale.title,
  launchScaleDescription = CONTENT.launchScale.description,
  launchScaleFeatures = CONTENT.launchScale.features,
  launchScaleCta = CONTENT.launchScale.cta,
  launchScaleButtonText = CONTENT.launchScale.buttonText,
  customizableTitle = CONTENT.customizable.title,
  customizableDescription = CONTENT.customizable.description,
  customizableFeatures = CONTENT.customizable.features,
  customizableCta = CONTENT.customizable.cta,
  customizableButtonText = CONTENT.customizable.buttonText,
  onRequestAccess,
  onContactSales,
}: PricingOplMaster33Props) {
  return (
    <section className="relative min-h-screen w-full overflow-hidden">
      {/* Hero Background */}
      <HeroBackground />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        {/* Header */}
        <div className="mb-12 text-center lg:mb-16">
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-white/70"
          >
            {tagline}
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mb-4 text-3xl font-semibold text-white sm:text-4xl lg:text-5xl"
          >
            {heading}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mx-auto max-w-2xl text-sm text-white/60 sm:text-base"
          >
            {subheading}
          </motion.p>
        </div>

        {/* Pricing Cards */}
        <div className="mx-auto grid max-w-4xl gap-6 lg:grid-cols-2 lg:gap-8">
          {/* Launch & Scale Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="relative overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-xl"
          >
            <div className="p-6 sm:p-8">
              {/* Icon */}
              <div
                className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl"
                style={{
                  background: `linear-gradient(135deg, ${COLORS.checkPurple}20, ${COLORS.primaryPurple}10)`,
                }}
              >
                <CloudUploadIcon
                  className="h-6 w-6"
                  style={{ color: COLORS.primaryPurple }}
                />
              </div>

              {/* Title */}
              <h2
                className="mb-2 text-xl font-semibold sm:text-2xl"
                style={{ color: COLORS.titlePurple }}
              >
                {launchScaleTitle}
              </h2>

              {/* Description */}
              <p
                className="mb-6 text-sm"
                style={{ color: COLORS.subtitleGray }}
              >
                {launchScaleDescription}
              </p>

              {/* Divider */}
              <div className="mb-6 h-px bg-gray-100" />

              {/* Features */}
              <div className="mb-8 space-y-4">
                {launchScaleFeatures.map((feature, index) => (
                  <FeatureItem
                    key={index}
                    text={feature}
                    checkColor={COLORS.checkPurple}
                    textColor={COLORS.textDark}
                  />
                ))}
              </div>

              {/* CTA */}
              <p
                className="mb-4 text-center text-sm italic"
                style={{ color: COLORS.primaryPurple }}
              >
                {launchScaleCta}
              </p>

              {/* Button */}
              <button
                onClick={onRequestAccess}
                className="w-full rounded-full py-3 text-sm font-medium text-white transition-all hover:opacity-90"
                style={{
                  background: `linear-gradient(135deg, ${COLORS.primaryPurple} 0%, ${COLORS.checkPurple} 100%)`,
                }}
              >
                {launchScaleButtonText}
              </button>
            </div>
          </motion.div>

          {/* Customizable Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="relative overflow-hidden rounded-2xl shadow-xl"
            style={{ backgroundColor: COLORS.cardDarkBg }}
          >
            {/* Background Tech Image */}
            <div className="relative h-28 sm:h-32">
              <TechBackground />
              {/* Icon */}
              <div className="absolute left-6 top-6 sm:left-8 sm:top-8">
                <div
                  className="flex h-12 w-12 items-center justify-center rounded-xl"
                  style={{
                    background: "rgba(95, 212, 196, 0.15)",
                  }}
                >
                  <GridIcon
                    className="h-6 w-6"
                    style={{ color: COLORS.titleCyan }}
                  />
                </div>
              </div>
            </div>

            <div className="p-6 sm:p-8">
              {/* Title */}
              <h2
                className="mb-2 text-xl font-semibold sm:text-2xl"
                style={{ color: COLORS.titleCyan }}
              >
                {customizableTitle}
              </h2>

              {/* Description */}
              <p className="mb-6 text-sm text-white/60">
                {customizableDescription}
              </p>

              {/* Divider */}
              <div className="mb-6 h-px bg-white/10" />

              {/* Features */}
              <div className="mb-8 space-y-4">
                {customizableFeatures.map((feature, index) => (
                  <FeatureItem
                    key={index}
                    text={feature}
                    checkColor={COLORS.checkCyan}
                    textColor={COLORS.textLight}
                  />
                ))}
              </div>

              {/* CTA */}
              <p
                className="mb-4 text-center text-sm italic"
                style={{ color: COLORS.titleCyan }}
              >
                {customizableCta}
              </p>

              {/* Button */}
              <button
                onClick={onContactSales}
                className="w-full rounded-full border border-white/30 bg-transparent py-3 text-sm font-medium text-white transition-all hover:bg-white/10"
              >
                {customizableButtonText}
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
