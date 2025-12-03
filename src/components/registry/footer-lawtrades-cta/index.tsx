"use client";

// ============================================================================
// CUSTOMIZATION
// ============================================================================

const COLORS = {
  // Gradient background
  gradientStart: "#F5F3EE",
  gradientMid: "#E8EDE8",
  gradientEnd: "#C5E5E0",
  // Card
  cardBackground: "#FFFFFF",
  cardShadow: "#000000",
  // Text
  headingText: "#1A1A1A",
  descriptionText: "#4A4A4A",
  // Button
  buttonBackground: "#1A1A1A",
  buttonText: "#FFFFFF",
  // Decorative dots
  dotColor: "#1A1A1A",
} as const;

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { motion } from "motion/react";
import "./font.css";

interface FooterLawtradesCtaProps {
  heading?: {
    line1?: string;
    line2?: string;
  };
  description?: string;
  buttonText?: string;
  buttonHref?: string;
}

// SVG for decorative dotted curves with dots at endpoints
function DecorativeCurves() {
  return (
    <svg
      className="absolute inset-0 h-full w-full"
      viewBox="0 0 1000 500"
      preserveAspectRatio="xMidYMid slice"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Curve 1 - Top left to middle right */}
      <path
        d="M-50 80 Q 200 180, 400 120 Q 600 60, 850 100"
        stroke={COLORS.dotColor}
        strokeWidth="1.5"
        strokeDasharray="8 8"
        fill="none"
        opacity="0.4"
      />
      <circle cx="-50" cy="80" r="5" fill={COLORS.dotColor} opacity="0.6" />
      <circle cx="850" cy="100" r="5" fill={COLORS.dotColor} opacity="0.6" />

      {/* Curve 2 - Left middle going down and across */}
      <path
        d="M-30 200 Q 150 350, 350 280 Q 550 210, 750 320"
        stroke={COLORS.dotColor}
        strokeWidth="1.5"
        strokeDasharray="8 8"
        fill="none"
        opacity="0.4"
      />
      <circle cx="-30" cy="200" r="5" fill={COLORS.dotColor} opacity="0.6" />
      <circle cx="750" cy="320" r="5" fill={COLORS.dotColor} opacity="0.6" />

      {/* Curve 3 - Bottom left to right */}
      <path
        d="M50 450 Q 250 380, 500 420 Q 750 460, 1050 380"
        stroke={COLORS.dotColor}
        strokeWidth="1.5"
        strokeDasharray="8 8"
        fill="none"
        opacity="0.4"
      />
      <circle cx="50" cy="450" r="5" fill={COLORS.dotColor} opacity="0.6" />
      <circle cx="1050" cy="380" r="5" fill={COLORS.dotColor} opacity="0.6" />

      {/* Curve 4 - Right side accent */}
      <path
        d="M900 50 Q 950 150, 1050 200"
        stroke={COLORS.dotColor}
        strokeWidth="1.5"
        strokeDasharray="8 8"
        fill="none"
        opacity="0.4"
      />
      <circle cx="900" cy="50" r="5" fill={COLORS.dotColor} opacity="0.6" />
      <circle cx="1050" cy="200" r="5" fill={COLORS.dotColor} opacity="0.6" />
    </svg>
  );
}

export default function FooterLawtradesCta({
  heading = {
    line1: "Get started",
    line2: "with Lawtrades",
  },
  description = "Fast, easy, affordable legal talent on demand.",
  buttonText = "Hire Talent",
  buttonHref = "#",
}: FooterLawtradesCtaProps) {
  return (
    <footer
      className="relative w-full overflow-hidden py-16 md:py-24 lg:py-32"
      style={{
        background: `linear-gradient(135deg, ${COLORS.gradientStart} 0%, ${COLORS.gradientMid} 50%, ${COLORS.gradientEnd} 100%)`,
      }}
    >
      {/* Decorative background curves */}
      <DecorativeCurves />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-3xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="relative"
        >
          {/* Card with offset shadow */}
          <div
            className="absolute left-1 top-1 h-full w-full rounded-2xl md:left-2 md:top-2"
            style={{ backgroundColor: COLORS.cardShadow }}
          />

          {/* Main Card */}
          <div
            className="relative rounded-2xl px-8 py-12 md:px-16 md:py-16 lg:px-20 lg:py-20"
            style={{
              backgroundColor: COLORS.cardBackground,
              border: `1px solid ${COLORS.cardShadow}`,
            }}
          >
            {/* Heading */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mb-6 text-center font-serif text-4xl font-bold leading-tight tracking-tight md:text-5xl lg:text-6xl"
              style={{
                color: COLORS.headingText,
                fontFamily: "'Instrument Serif', Georgia, serif",
              }}
            >
              {heading.line1}
              <br />
              {heading.line2}
            </motion.h2>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-10 text-center text-base md:text-lg"
              style={{ color: COLORS.descriptionText }}
            >
              {description}
            </motion.p>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex justify-center"
            >
              <motion.a
                href={buttonHref}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="rounded-full px-8 py-3.5 text-sm font-medium transition-all hover:opacity-90 md:px-10 md:py-4 md:text-base"
                style={{
                  backgroundColor: COLORS.buttonBackground,
                  color: COLORS.buttonText,
                }}
              >
                {buttonText}
              </motion.a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
