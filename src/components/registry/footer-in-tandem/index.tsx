"use client";

// ============================================================================
// CUSTOMIZATION - 이 섹션의 값들을 수정하여 프로젝트에 맞게 조정하세요
// ============================================================================

/**
 * 커스텀 색상 (브랜드 컬러)
 */
const COLORS = {
  light: {
    background: "#f5f2ef",
    text: "#3d312b",
    textMuted: "#6b5c52",
    border: "#d4cdc7",
  },
  dark: {
    background: "#1a1614",
    text: "#f5f2ef",
    textMuted: "#a89c94",
    border: "#3d3530",
  },
} as const;

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { motion, type Variants } from "motion/react";
import "./font.css";

interface BrandLink {
  label: string;
  href: string;
}

interface FooterInTandemProps {
  mode?: "light" | "dark";
  brands?: BrandLink[];
  address?: {
    line1: string;
    line2: string;
  };
  copyright?: string;
  siteCreditsLabel?: string;
  siteCreditsHref?: string;
  linkedinHref?: string;
}

// Abstract geometric logo component (SVG)
function TandemLogo({ color }: { color: string }) {
  return (
    <svg
      width="80"
      height="80"
      viewBox="0 0 80 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Outer border */}
      <rect
        x="1"
        y="1"
        width="78"
        height="78"
        stroke={color}
        strokeWidth="2"
        fill="none"
      />
      {/* Vertical center line */}
      <line x1="40" y1="1" x2="40" y2="79" stroke={color} strokeWidth="2" />
      {/* Horizontal center line */}
      <line x1="1" y1="40" x2="79" y2="40" stroke={color} strokeWidth="2" />

      {/* Top-left quadrant: diagonal line from top-right to bottom-left */}
      <line x1="40" y1="1" x2="1" y2="40" stroke={color} strokeWidth="2" />

      {/* Top-right quadrant: circle */}
      <circle cx="60" cy="20" r="10" stroke={color} strokeWidth="2" fill="none" />

      {/* Bottom-left quadrant: filled quarter circle */}
      <path
        d="M 1 40 L 1 79 L 40 79 A 39 39 0 0 1 1 40"
        fill={color}
      />

      {/* Bottom-right quadrant: diagonal from top-left to bottom-right */}
      <line x1="40" y1="40" x2="79" y2="79" stroke={color} strokeWidth="2" />
    </svg>
  );
}

// LinkedIn icon
function LinkedInIcon({ color }: { color: string }) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
        fill={color}
      />
    </svg>
  );
}

export default function FooterInTandem({
  mode = "light",
  brands = [
    { label: "OurFamilyWizard", href: "#" },
    { label: "Cozi", href: "#" },
    { label: "FamilyWall", href: "#" },
    { label: "Custody Navigator", href: "#" },
  ],
  address = {
    line1: "701 N Washington Ave Suite 700,",
    line2: "Minneapolis, MN 55401",
  },
  copyright = "2024 In Tandem Families",
  siteCreditsLabel = "Site Credits",
  siteCreditsHref = "#",
  linkedinHref = "#",
}: FooterInTandemProps) {
  const colors = COLORS[mode];

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 16 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  };

  const lineVariants: Variants = {
    hidden: { scaleX: 0 },
    visible: {
      scaleX: 1,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  };

  return (
    <footer
      className="w-full py-12 px-6 md:px-12 lg:px-20"
      style={{ backgroundColor: colors.background }}
    >
      <motion.div
        className="max-w-6xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {/* Main content area */}
        <div className="flex flex-col md:flex-row justify-between items-start gap-12 md:gap-8 pb-12">
          {/* Brands column */}
          <motion.div className="flex flex-col gap-4" variants={itemVariants}>
            <h3
              className="text-2xl md:text-3xl font-normal"
              style={{
                color: colors.text,
                fontFamily: "'Instrument Serif', serif",
              }}
            >
              Brands
            </h3>
            <div className="flex flex-col gap-2">
              {brands.map((brand, index) => (
                <a
                  key={index}
                  href={brand.href}
                  className="text-sm transition-opacity hover:opacity-70"
                  style={{
                    color: colors.text,
                    fontFamily: "'Inter', sans-serif",
                  }}
                >
                  {brand.label}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Contact column */}
          <motion.div className="flex flex-col gap-4" variants={itemVariants}>
            <h3
              className="text-2xl md:text-3xl font-normal"
              style={{
                color: colors.text,
                fontFamily: "'Instrument Serif', serif",
              }}
            >
              Contact
            </h3>
            <div className="flex flex-col gap-1">
              <p
                className="text-sm"
                style={{
                  color: colors.text,
                  fontFamily: "'Inter', sans-serif",
                }}
              >
                {address.line1}
              </p>
              <p
                className="text-sm"
                style={{
                  color: colors.text,
                  fontFamily: "'Inter', sans-serif",
                }}
              >
                {address.line2}
              </p>
            </div>
          </motion.div>

          {/* Logo */}
          <motion.div
            className="hidden md:flex items-start justify-end"
            variants={itemVariants}
          >
            <TandemLogo color={colors.text} />
          </motion.div>
        </div>

        {/* Divider line */}
        <motion.div
          className="h-px w-full origin-left"
          style={{ backgroundColor: colors.border }}
          variants={lineVariants}
        />

        {/* Bottom bar */}
        <motion.div
          className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 pt-6"
          variants={itemVariants}
        >
          {/* Copyright and Site Credits */}
          <div className="flex flex-wrap items-center gap-6">
            <span
              className="text-sm"
              style={{
                color: colors.text,
                fontFamily: "'Inter', sans-serif",
              }}
            >
              {copyright}
            </span>
            <a
              href={siteCreditsHref}
              className="text-sm underline transition-opacity hover:opacity-70"
              style={{
                color: colors.text,
                fontFamily: "'Inter', sans-serif",
              }}
            >
              {siteCreditsLabel}
            </a>
          </div>

          {/* LinkedIn icon */}
          <a
            href={linkedinHref}
            className="transition-opacity hover:opacity-70"
            aria-label="LinkedIn"
          >
            <LinkedInIcon color={colors.text} />
          </a>
        </motion.div>
      </motion.div>
    </footer>
  );
}
