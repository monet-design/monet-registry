"use client";

// ============================================================================
// CUSTOMIZATION - 이 섹션의 값들을 수정하여 프로젝트에 맞게 조정하세요
// ============================================================================

/**
 * 커스텀 색상 (브랜드 컬러)
 */
const COLORS = {
  background: "#030a17",
  gridLine: "#0d1525",
  titleWhite: "#ffffff",
  bodyText: "#858c9a",
  badgeText: "#c0c3ce",
  badgeBg: "#1a1f2b",
  orangeAccent: "#e0500a",
  primaryButtonBg: "#f8f8f8",
  primaryButtonText: "#0a0a0a",
  secondaryButtonBorder: "#3a4050",
  secondaryButtonText: "#ffffff",
  linkText: "#adb2be",
  labelText: "#9ba2b0",
} as const;

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { motion } from "motion/react";
import { Button } from "@/components/ui/button";

interface FinAiCapabilitiesHeroProps {
  title?: {
    line1?: string;
    line2Prefix?: string;
    line2Italic?: string;
    line2Suffix?: string;
  };
  description?: string;
  footnoteRef?: string;
  primaryCta?: {
    text: string;
    href: string;
  };
  secondaryCta?: {
    text: string;
    href: string;
  };
  sideLabel?: {
    number?: string;
    title?: string;
    description?: string;
    linkText?: string;
    linkHref?: string;
  };
  badges?: Array<{
    label: string;
    position: "top" | "left" | "bottom" | "right";
  }>;
}

export default function FinAiCapabilitiesHero({
  title = {
    line1: "Complete, fully configurable",
    line2Prefix: "AI",
    line2Italic: "Agent",
    line2Suffix: "system",
  },
  description = "Fin is the only complete, fully configurable AI Agent System in customer service—empowering support teams to customize, test, and continuously improve Fin through a no-code user experience anyone can manage.",
  footnoteRef = "[1]",
  primaryCta = {
    text: "Start free trial",
    href: "#",
  },
  secondaryCta = {
    text: "View demo",
    href: "#",
  },
  sideLabel = {
    number: "[1]",
    title: "BUILT ON FIN AI ENGINE",
    description:
      "Fin combines the only complete, fully configurable AI Agent System with a patented AI architecture to deliver the highest performance.",
    linkText: "Learn more",
    linkHref: "#",
  },
  badges = [
    { label: "ANALYZE", position: "top" },
    { label: "DEPLOY", position: "left" },
    { label: "TEST", position: "bottom" },
    { label: "TRAIN", position: "right" },
  ],
}: FinAiCapabilitiesHeroProps) {
  return (
    <section
      className="relative min-h-screen w-full overflow-hidden"
      style={{ backgroundColor: COLORS.background }}
    >
      {/* Google Font for Instrument Serif */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&display=swap');
        .serif-italic {
          font-family: 'Instrument Serif', Georgia, serif;
          font-style: italic;
        }
      `}</style>

      {/* Grid Background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(${COLORS.gridLine} 1px, transparent 1px),
            linear-gradient(90deg, ${COLORS.gridLine} 1px, transparent 1px)
          `,
          backgroundSize: "80px 80px",
        }}
      />

      {/* Main Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-20 pt-24 pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Left Column - Main Content */}
          <div className="lg:col-span-8">
            {/* Title */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-[1.1] tracking-tight mb-8"
              style={{ color: COLORS.titleWhite }}
            >
              <span className="block font-light">{title.line1}</span>
              <span className="block font-light">
                {title.line2Prefix}{" "}
                <span className="serif-italic">{title.line2Italic}</span>{" "}
                {title.line2Suffix}
              </span>
            </motion.h1>

            {/* Divider Line */}
            <motion.div
              initial={{ opacity: 0, scaleX: 0 }}
              whileInView={{ opacity: 1, scaleX: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="w-full h-px mb-8 origin-left"
              style={{ backgroundColor: COLORS.gridLine }}
            />

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-base md:text-lg leading-relaxed max-w-2xl mb-8"
              style={{ color: COLORS.bodyText }}
            >
              {description}{" "}
              <sup
                className="text-xs cursor-pointer hover:underline"
                style={{ color: COLORS.linkText }}
              >
                {footnoteRef}
              </sup>
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="flex flex-wrap gap-3"
            >
              <Button
                asChild
                className="rounded-md px-6 py-2.5 text-sm font-medium transition-all hover:scale-105"
                style={{
                  backgroundColor: COLORS.primaryButtonBg,
                  color: COLORS.primaryButtonText,
                }}
              >
                <a href={primaryCta.href}>{primaryCta.text}</a>
              </Button>
              <Button
                asChild
                variant="outline"
                className="rounded-md px-6 py-2.5 text-sm font-medium bg-transparent transition-all hover:bg-white/5"
                style={{
                  borderColor: COLORS.secondaryButtonBorder,
                  color: COLORS.secondaryButtonText,
                }}
              >
                <a href={secondaryCta.href}>{secondaryCta.text}</a>
              </Button>
            </motion.div>
          </div>

          {/* Right Column - Side Label */}
          <div className="lg:col-span-4">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              viewport={{ once: true }}
              className="lg:pt-12"
            >
              {/* Label Header */}
              <div className="flex items-center gap-2 mb-4">
                <span
                  className="text-xs font-medium"
                  style={{ color: COLORS.labelText }}
                >
                  {sideLabel.number}
                </span>
                <span
                  className="text-xs font-semibold tracking-wider"
                  style={{ color: COLORS.labelText }}
                >
                  {sideLabel.title}
                  <sup className="ml-0.5">TM</sup>
                </span>
              </div>

              {/* Label Description */}
              <p
                className="text-sm leading-relaxed mb-4"
                style={{ color: COLORS.bodyText }}
              >
                {sideLabel.description}
              </p>

              {/* Learn More Link */}
              <a
                href={sideLabel.linkHref}
                className="text-sm font-medium underline underline-offset-4 hover:no-underline transition-all"
                style={{ color: COLORS.linkText }}
              >
                {sideLabel.linkText}
              </a>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Animated Orbit Diagram */}
      <div className="relative z-10 w-full flex justify-center items-center pb-16 mt-8">
        <div className="relative w-[600px] h-[320px] md:w-[800px] md:h-[400px]">
          {/* Oval Track */}
          <svg
            viewBox="0 0 800 400"
            className="absolute inset-0 w-full h-full"
            fill="none"
          >
            {/* Dashed oval */}
            <ellipse
              cx="400"
              cy="200"
              rx="320"
              ry="140"
              stroke={COLORS.gridLine}
              strokeWidth="1"
              strokeDasharray="8 8"
              fill="none"
            />
            {/* Center pill shape */}
            <rect
              x="240"
              y="120"
              width="320"
              height="160"
              rx="80"
              stroke={COLORS.gridLine}
              strokeWidth="1"
              fill="none"
            />
          </svg>

          {/* Animated Dots */}
          <motion.div
            className="absolute w-2 h-2 rounded-full"
            style={{ backgroundColor: COLORS.badgeText }}
            animate={{
              x: [400, 720, 400, 80, 400],
              y: [60, 200, 340, 200, 60],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "linear",
            }}
          />
          <motion.div
            className="absolute w-2 h-2 rounded-full"
            style={{ backgroundColor: COLORS.orangeAccent }}
            animate={{
              x: [400, 80, 400, 720, 400],
              y: [340, 200, 60, 200, 340],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "linear",
            }}
          />

          {/* Badges */}
          {badges.map((badge, index) => {
            const positions = {
              top: "top-0 left-1/2 -translate-x-1/2",
              left: "top-1/2 left-0 -translate-y-1/2 md:-left-4",
              bottom: "bottom-0 left-1/2 -translate-x-1/2",
              right: "top-1/2 right-0 -translate-y-1/2 md:-right-4",
            };

            return (
              <motion.div
                key={badge.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                viewport={{ once: true }}
                className={`absolute px-4 py-2 rounded ${positions[badge.position]}`}
                style={{
                  backgroundColor: COLORS.badgeBg,
                }}
              >
                <span
                  className="text-xs font-medium tracking-wider"
                  style={{ color: COLORS.badgeText }}
                >
                  {badge.label}
                </span>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Bottom Grid Lines */}
      <div
        className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(${COLORS.gridLine} 1px, transparent 1px)`,
          backgroundSize: "80px 80px",
          maskImage: "linear-gradient(to top, black, transparent)",
          WebkitMaskImage: "linear-gradient(to top, black, transparent)",
        }}
      />
    </section>
  );
}
