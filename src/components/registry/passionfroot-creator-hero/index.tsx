"use client";

// ============================================================================
// CUSTOMIZATION - 이 섹션의 값들을 수정하여 프로젝트에 맞게 조정하세요
// ============================================================================

const COLORS = {
  light: {
    background: "#F8F8F7",
    buttonPrimary: "#3D3D3D",
    buttonPrimaryHover: "#2D2D2D",
    buttonSecondaryBorder: "#D0D0CC",
    buttonSecondaryBorderHover: "#A0A0A0",
  },
} as const;

const IMAGES = {
  creatorCard: {
    path: "/registry/passionfroot-creator-hero/creator-card.png",
    alt: "Creator profile card",
    prompt: `UI card mockup showing creator profile.
Style: Clean, modern, minimal product UI
Layout: Vertical card with profile information
Elements: Profile photo, creator name, stats
Color palette: White card, neutral tones
Mood: Professional, social media aesthetic
Technical: PNG with transparency, 200x280px`,
  },
  paymentCard: {
    path: "/registry/passionfroot-creator-hero/payment-card.png",
    alt: "Payment received card",
    prompt: `UI card mockup showing payment notification.
Style: Clean, modern payment receipt UI
Layout: Compact horizontal card
Elements: Payment amount, status badge, timestamp
Color palette: White card, green success indicator
Mood: Trustworthy, financial success
Technical: PNG with transparency, 200x160px`,
  },
  analyticsCard: {
    path: "/registry/passionfroot-creator-hero/analytics-card.png",
    alt: "Analytics dashboard card",
    prompt: `UI card mockup showing analytics dashboard.
Style: Modern dashboard UI with charts
Layout: Landscape card with data visualization
Elements: Line/bar charts, metrics, KPIs
Color palette: White card, blue/purple data viz
Mood: Data-driven, professional insights
Technical: PNG with transparency, 320x240px`,
  },
  calendarCard: {
    path: "/registry/passionfroot-creator-hero/calendar-card.png",
    alt: "Calendar scheduling card",
    prompt: `UI card mockup showing calendar/scheduling interface.
Style: Modern calendar UI
Layout: Landscape card with calendar grid
Elements: Calendar dates, scheduled items, time slots
Color palette: White card, accent colors for events
Mood: Organized, productivity-focused
Technical: PNG with transparency, 320x240px`,
  },
} as const;

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import "./font.css";

interface PassionfrootCreatorHeroProps {
  mode?: "light";
  title?: string;
  highlightText?: string;
  description?: string;
  primaryButtonText?: string;
  primaryButtonHref?: string;
  secondaryButtonText?: string;
  secondaryButtonHref?: string;
  onPrimaryClick?: () => void;
  onSecondaryClick?: () => void;
}

export default function PassionfrootCreatorHero({
  mode = "light",
  title = "Where creators do",
  highlightText = "brand deals",
  description = "The all-in-one tool to help creators do more sponsorship - easier, and faster.",
  primaryButtonText = "Start for Free",
  primaryButtonHref = "#",
  secondaryButtonText = "Talk to us",
  secondaryButtonHref = "#",
  onPrimaryClick,
  onSecondaryClick,
}: PassionfrootCreatorHeroProps) {
  const colors = COLORS[mode];

  return (
    <section
      className="relative min-h-screen w-full overflow-hidden"
      style={{ backgroundColor: colors.background }}
    >
      {/* Decorative UI Cards */}
      <DecorativeCards />

      {/* Main Content */}
      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl text-center"
        >
          {/* Title */}
          <h1 className="font-instrument-serif text-5xl leading-tight tracking-tight text-black md:text-7xl lg:text-8xl">
            <span className="italic">{title}</span>
            <br />
            <span className="italic">{highlightText}</span>
          </h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="mx-auto mt-8 max-w-2xl text-lg text-[#5A5A5A] md:text-xl"
          >
            {description}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <a
              href={primaryButtonHref}
              onClick={(e) => {
                if (onPrimaryClick) {
                  e.preventDefault();
                  onPrimaryClick();
                }
              }}
              className="group flex items-center gap-2 rounded-full px-8 py-4 text-base font-medium text-white transition-all duration-300 hover:shadow-lg"
              style={{
                backgroundColor: colors.buttonPrimary,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = colors.buttonPrimaryHover;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = colors.buttonPrimary;
              }}
            >
              {primaryButtonText}
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>

            <a
              href={secondaryButtonHref}
              onClick={(e) => {
                if (onSecondaryClick) {
                  e.preventDefault();
                  onSecondaryClick();
                }
              }}
              className="rounded-full border bg-transparent px-8 py-4 text-base font-medium transition-all duration-300 hover:bg-white/50"
              style={{
                borderColor: colors.buttonSecondaryBorder,
                color: colors.buttonPrimary,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = colors.buttonSecondaryBorderHover;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = colors.buttonSecondaryBorder;
              }}
            >
              {secondaryButtonText}
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

function DecorativeCards() {
  return (
    <>
      {/* Creator Card - Top Left */}
      <motion.div
        initial={{ opacity: 0, x: -50, rotate: -5 }}
        animate={{ opacity: 1, x: 0, rotate: -3 }}
        transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
        className="absolute left-[-2%] top-[5%] z-0 hidden w-[180px] lg:block xl:left-[2%] xl:w-[200px]"
      >
        <Image
          src={IMAGES.creatorCard.path}
          alt={IMAGES.creatorCard.alt}
          width={200}
          height={280}
          className="drop-shadow-xl"
        />
      </motion.div>

      {/* Payment Card - Top Right */}
      <motion.div
        initial={{ opacity: 0, x: 50, rotate: 5 }}
        animate={{ opacity: 1, x: 0, rotate: 3 }}
        transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
        className="absolute right-[-2%] top-[10%] z-0 hidden w-[180px] lg:block xl:right-[2%] xl:w-[200px]"
      >
        <Image
          src={IMAGES.paymentCard.path}
          alt={IMAGES.paymentCard.alt}
          width={200}
          height={160}
          className="drop-shadow-xl"
        />
      </motion.div>

      {/* Analytics Card - Bottom Left */}
      <motion.div
        initial={{ opacity: 0, y: 50, rotate: 5 }}
        animate={{ opacity: 1, y: 0, rotate: 2 }}
        transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
        className="absolute bottom-[5%] left-[-5%] z-0 hidden w-[280px] lg:block xl:left-[0%] xl:w-[320px]"
      >
        <Image
          src={IMAGES.analyticsCard.path}
          alt={IMAGES.analyticsCard.alt}
          width={320}
          height={240}
          className="drop-shadow-xl"
        />
      </motion.div>

      {/* Calendar Card - Bottom Right */}
      <motion.div
        initial={{ opacity: 0, y: 50, rotate: -5 }}
        animate={{ opacity: 1, y: 0, rotate: -2 }}
        transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
        className="absolute bottom-[5%] right-[-5%] z-0 hidden w-[280px] lg:block xl:right-[0%] xl:w-[320px]"
      >
        <Image
          src={IMAGES.calendarCard.path}
          alt={IMAGES.calendarCard.alt}
          width={320}
          height={240}
          className="drop-shadow-xl"
        />
      </motion.div>
    </>
  );
}
