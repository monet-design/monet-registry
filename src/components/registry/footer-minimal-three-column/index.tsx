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
  light: {
    background: "#FFFFFF",
    text: "#000000",
  },
  dark: {
    background: "#0A0A0A",
    text: "#FFFFFF",
  },
} as const;

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { motion, type Variants } from "motion/react";
import "./font.css";

interface FooterLink {
  label: string;
  href: string;
}

interface FooterMinimalThreeColumnProps {
  mode?: "light" | "dark";
  leftColumn?: {
    links: FooterLink[];
  };
  centerColumn?: {
    email?: string;
    phone?: string;
  };
  rightColumn?: {
    links: FooterLink[];
  };
}

export default function FooterMinimalThreeColumn({
  mode = "light",
  leftColumn = {
    links: [
      { label: "ENGLISH VERSION", href: "#" },
      { label: "GP COMMUNICATION", href: "#" },
    ],
  },
  centerColumn = {
    email: "INFO-GAELLEPERRIN.COM",
    phone: "-33 1 83 90 43 23",
  },
  rightColumn = {
    links: [
      { label: "INSTAGRAM", href: "#" },
      { label: "LINKEDIN", href: "#" },
    ],
  },
}: FooterMinimalThreeColumnProps) {
  const colors = COLORS[mode];

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut" as const,
      },
    },
  };

  return (
    <footer
      className="w-full py-12 px-6 md:px-12 lg:px-20"
      style={{ backgroundColor: colors.background }}
    >
      <motion.div
        className="max-w-7xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          {/* Left Column */}
          <motion.div
            className="flex flex-col gap-1.5"
            variants={itemVariants}
          >
            {leftColumn.links.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="text-xs tracking-[0.2em] font-normal transition-opacity hover:opacity-60"
                style={{ color: colors.text, fontFamily: "'Space Mono', monospace" }}
              >
                {link.label}
              </a>
            ))}
          </motion.div>

          {/* Center Column */}
          <motion.div
            className="flex flex-col gap-1.5 text-center"
            variants={itemVariants}
          >
            {centerColumn.email && (
              <a
                href={`mailto:${centerColumn.email.toLowerCase()}`}
                className="text-xs tracking-[0.2em] font-normal transition-opacity hover:opacity-60"
                style={{ color: colors.text, fontFamily: "'Space Mono', monospace" }}
              >
                {centerColumn.email}
              </a>
            )}
            {centerColumn.phone && (
              <a
                href={`tel:${centerColumn.phone.replace(/\s/g, "")}`}
                className="text-xs tracking-[0.2em] font-normal transition-opacity hover:opacity-60"
                style={{ color: colors.text, fontFamily: "'Space Mono', monospace" }}
              >
                {centerColumn.phone}
              </a>
            )}
          </motion.div>

          {/* Right Column */}
          <motion.div
            className="flex flex-col gap-1.5 md:items-end"
            variants={itemVariants}
          >
            {rightColumn.links.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="text-xs tracking-[0.2em] font-normal transition-opacity hover:opacity-60"
                style={{ color: colors.text, fontFamily: "'Space Mono', monospace" }}
              >
                {link.label}
              </a>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </footer>
  );
}
