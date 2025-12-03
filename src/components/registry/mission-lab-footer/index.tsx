"use client";

// ============================================================================
// CUSTOMIZATION
// ============================================================================

const COLORS = {
  light: {
    background: "#FFFFFF",
    text: "#1A1A1A",
    textMuted: "#6B7280",
  },
  dark: {
    background: "#2A2A2A",
    text: "#FFFFFF",
    textMuted: "rgba(255, 255, 255, 0.6)",
  },
} as const;

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { motion, type Variants } from "motion/react";

interface NavLink {
  label: string;
  href: string;
}

interface MissionLabFooterProps {
  mode?: "light" | "dark";
  logoIcon?: React.ReactNode;
  missionStatement?: string;
  copyrightText?: string;
  navLinksLeft?: NavLink[];
  navLinksRight?: NavLink[];
  partnerLogo?: React.ReactNode;
}

// Mission Lab "m" Logo SVG
function MissionLabLogo({ color = "#FFFFFF" }: { color?: string }) {
  return (
    <svg
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="4" y="8" width="6" height="32" rx="1" fill={color} />
      <rect x="21" y="8" width="6" height="32" rx="1" fill={color} />
      <rect x="38" y="8" width="6" height="32" rx="1" fill={color} />
    </svg>
  );
}

// University of Limerick Logo (simplified version)
function UniversityLogo({ color = "#FFFFFF" }: { color?: string }) {
  return (
    <div className="flex items-center gap-2">
      {/* Shield icon */}
      <svg
        width="32"
        height="40"
        viewBox="0 0 32 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M16 0L32 8V20C32 31.04 24.64 38.4 16 40C7.36 38.4 0 31.04 0 20V8L16 0Z"
          fill={color}
          fillOpacity="0.9"
        />
        <path
          d="M16 4L28 10V20C28 28.28 22.08 34.4 16 36C9.92 34.4 4 28.28 4 20V10L16 4Z"
          fill="transparent"
          stroke={color}
          strokeWidth="0.5"
        />
        <circle cx="16" cy="18" r="4" fill="transparent" stroke={color} strokeWidth="1.5" />
        <path d="M12 26H20" stroke={color} strokeWidth="1.5" />
      </svg>
      <div className="flex flex-col text-right leading-tight">
        <span
          className="text-[10px] font-semibold tracking-wider"
          style={{ color }}
        >
          UNIVERSITY OF
        </span>
        <span
          className="text-sm font-bold tracking-wide"
          style={{ color }}
        >
          LIMERICK
        </span>
        <span
          className="text-[8px] tracking-wider opacity-70"
          style={{ color }}
        >
          OLLSCOIL LUIMNIGH
        </span>
      </div>
    </div>
  );
}

export default function MissionLabFooter({
  mode = "dark",
  logoIcon,
  missionStatement = "Mission Lab empowers the entire UL community to work on real-world problems through mission-based learning and collaboration. Explore the mission portfolio to discover a mission that resonates with you. Let's create a more sustainable future, together.",
  copyrightText = "2023 Mission Lab. All rights reserved.",
  navLinksLeft = [
    { label: "ABOUT", href: "#" },
    { label: "MISSIONS", href: "#" },
  ],
  navLinksRight = [
    { label: "MAP", href: "#" },
    { label: "TOOLKIT", href: "#" },
  ],
  partnerLogo,
}: MissionLabFooterProps) {
  const colors = COLORS[mode];

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  const fadeInVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <footer
      className="relative w-full min-h-[600px] flex flex-col"
      style={{ backgroundColor: colors.background }}
    >
      <motion.div
        className="flex-1 w-full max-w-7xl mx-auto px-8 md:px-12 lg:px-16 py-16 flex flex-col"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {/* Top Section - Logo and Mission Statement */}
        <div className="flex flex-col lg:flex-row justify-between gap-12 lg:gap-24 flex-1">
          {/* Logo */}
          <motion.div variants={itemVariants} className="flex-shrink-0">
            {logoIcon || <MissionLabLogo color={colors.text} />}
          </motion.div>

          {/* Mission Statement */}
          <motion.div variants={itemVariants} className="flex-1 max-w-2xl">
            <p
              className="text-2xl md:text-3xl lg:text-[32px] font-light leading-[1.4] tracking-tight"
              style={{ color: colors.text }}
            >
              {missionStatement}
            </p>
          </motion.div>
        </div>

        {/* Bottom Section - Copyright, Nav Links, Partner Logo */}
        <motion.div
          variants={fadeInVariants}
          className="mt-auto pt-16 flex flex-col md:flex-row justify-between items-start md:items-end gap-8"
        >
          {/* Copyright */}
          <div
            className="text-xs tracking-wide"
            style={{ color: colors.textMuted }}
          >
            &copy; {copyrightText}
          </div>

          {/* Navigation Links */}
          <div className="flex gap-12">
            {/* Left Column */}
            <div className="flex flex-col gap-2">
              {navLinksLeft.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="text-xs tracking-[0.15em] font-normal transition-opacity hover:opacity-60"
                  style={{ color: colors.textMuted }}
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* Right Column */}
            <div className="flex flex-col gap-2">
              {navLinksRight.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="text-xs tracking-[0.15em] font-normal transition-opacity hover:opacity-60"
                  style={{ color: colors.textMuted }}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Partner Logo */}
          <div className="flex-shrink-0">
            {partnerLogo || <UniversityLogo color={colors.text} />}
          </div>
        </motion.div>
      </motion.div>
    </footer>
  );
}
