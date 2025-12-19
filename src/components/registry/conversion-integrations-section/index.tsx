"use client";

// ============================================================================
// CUSTOMIZATION - 이 섹션의 값들을 수정하여 프로젝트에 맞게 조정하세요
// ============================================================================

/**
 * 커스텀 색상 (브랜드 컬러)
 */
const COLORS = {
  background: "#1a1a1a",
  accent: "#2dd4bf", // teal for connection lines
  textPrimary: "#ffffff",
  textSecondary: "#9ca3af",
  textLabel: "#6b7280",
  cardBg: "#262626",
  borderDashed: "#2dd4bf",
} as const;

/**
 * 이미지 에셋
 */
const IMAGES = {} as const;

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

// Integration logos as SVG components
const MainLogo = () => (
  <svg viewBox="0 0 40 40" fill="none" className="w-10 h-10">
    <rect width="40" height="40" rx="10" fill="white" />
    <path
      d="M12 20C12 16 14 14 20 14C26 14 28 16 28 20C28 20 26 18 20 18C14 18 12 20 12 20Z"
      fill="#1a1a1a"
    />
    <path
      d="M12 20C12 24 14 26 20 26C26 26 28 24 28 20C28 20 26 22 20 22C14 22 12 20 12 20Z"
      fill="#1a1a1a"
    />
  </svg>
);

const GoogleAdsLogo = () => (
  <svg viewBox="0 0 48 48" fill="none" className="w-12 h-12">
    <path d="M38 34L24 10L16 24L30 48L38 34Z" fill="#FBBC04" />
    <path d="M10 34L24 10L32 24L18 48L10 34Z" fill="#4285F4" />
    <path d="M10 38C14.4183 38 18 34.4183 18 30C18 25.5817 14.4183 22 10 22C5.58172 22 2 25.5817 2 30C2 34.4183 5.58172 38 10 38Z" fill="#34A853" />
  </svg>
);

const SalesforceLogo = () => (
  <svg viewBox="0 0 48 32" fill="none" className="w-12 h-8">
    <path
      d="M20 4C16.5 4 13.5 6 12 9C8.5 8.5 5 11 5 15C5 19.5 8.5 22 12 22C12 25.5 15 29 20 29C23 29 25.5 27.5 27 25C28.5 27 31 28 34 28C39 28 43 24 43 19C43 14.5 40 11 36 10.5C35.5 7 32.5 4 28 4C25 4 22.5 5.5 21 8C20.7 6 20.5 4 20 4Z"
      fill="#00A1E0"
    />
    <text x="11" y="19" fill="white" fontSize="6" fontWeight="bold" fontFamily="sans-serif">
      salesforce
    </text>
  </svg>
);

const SnowflakeLogo = () => (
  <svg viewBox="0 0 48 48" fill="none" className="w-12 h-12">
    <path
      d="M24 4V44M4 24H44M9.86 9.86L38.14 38.14M38.14 9.86L9.86 38.14"
      stroke="#29B5E8"
      strokeWidth="3"
      strokeLinecap="round"
    />
    <circle cx="24" cy="4" r="3" fill="#29B5E8" />
    <circle cx="24" cy="44" r="3" fill="#29B5E8" />
    <circle cx="4" cy="24" r="3" fill="#29B5E8" />
    <circle cx="44" cy="24" r="3" fill="#29B5E8" />
    <circle cx="9.86" cy="9.86" r="3" fill="#29B5E8" />
    <circle cx="38.14" cy="38.14" r="3" fill="#29B5E8" />
    <circle cx="38.14" cy="9.86" r="3" fill="#29B5E8" />
    <circle cx="9.86" cy="38.14" r="3" fill="#29B5E8" />
    <circle cx="24" cy="14" r="2" fill="#29B5E8" />
    <circle cx="24" cy="34" r="2" fill="#29B5E8" />
    <circle cx="14" cy="24" r="2" fill="#29B5E8" />
    <circle cx="34" cy="24" r="2" fill="#29B5E8" />
  </svg>
);

const SlackLogo = () => (
  <svg viewBox="0 0 48 48" fill="none" className="w-12 h-12">
    <path d="M10 30C10 32.2 8.2 34 6 34C3.8 34 2 32.2 2 30C2 27.8 3.8 26 6 26H10V30Z" fill="#E01E5A" />
    <path d="M12 30C12 27.8 13.8 26 16 26C18.2 26 20 27.8 20 30V42C20 44.2 18.2 46 16 46C13.8 46 12 44.2 12 42V30Z" fill="#E01E5A" />
    <path d="M16 10C13.8 10 12 8.2 12 6C12 3.8 13.8 2 16 2C18.2 2 20 3.8 20 6V10H16Z" fill="#36C5F0" />
    <path d="M16 12C18.2 12 20 13.8 20 16C20 18.2 18.2 20 16 20H4C1.8 20 0 18.2 0 16C0 13.8 1.8 12 4 12H16Z" fill="#36C5F0" />
    <path d="M36 16C36 13.8 37.8 12 40 12C42.2 12 44 13.8 44 16C44 18.2 42.2 20 40 20H36V16Z" fill="#2EB67D" />
    <path d="M34 16C34 18.2 32.2 20 30 20C27.8 20 26 18.2 26 16V4C26 1.8 27.8 0 30 0C32.2 0 34 1.8 34 4V16Z" fill="#2EB67D" />
    <path d="M30 36C32.2 36 34 37.8 34 40C34 42.2 32.2 44 30 44C27.8 44 26 42.2 26 40V36H30Z" fill="#ECB22E" />
    <path d="M30 34C27.8 34 26 32.2 26 30C26 27.8 27.8 26 30 26H42C44.2 26 46 27.8 46 30C46 32.2 44.2 34 42 34H30Z" fill="#ECB22E" />
  </svg>
);

const HubSpotLogo = () => (
  <svg viewBox="0 0 48 48" fill="none" className="w-12 h-12">
    <circle cx="24" cy="24" r="6" fill="#FF7A59" />
    <circle cx="24" cy="10" r="4" fill="#FF7A59" />
    <circle cx="36" cy="30" r="4" fill="#FF7A59" />
    <circle cx="12" cy="30" r="4" fill="#FF7A59" />
    <path d="M24 16V18" stroke="#FF7A59" strokeWidth="3" strokeLinecap="round" />
    <path d="M29 27L33 29" stroke="#FF7A59" strokeWidth="3" strokeLinecap="round" />
    <path d="M19 27L15 29" stroke="#FF7A59" strokeWidth="3" strokeLinecap="round" />
    <circle cx="38" cy="14" r="3" stroke="#FF7A59" strokeWidth="2" fill="none" />
    <path d="M36 16L30 20" stroke="#FF7A59" strokeWidth="2" />
  </svg>
);

const ZapierLogo = () => (
  <svg viewBox="0 0 80 24" fill="none" className="w-20 h-6">
    <text x="0" y="18" fill="#FF4F00" fontSize="18" fontWeight="bold" fontFamily="sans-serif">
      _zapier
    </text>
  </svg>
);

interface IntegrationNodeProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

const IntegrationNode = ({ children, className = "", delay = 0 }: IntegrationNodeProps) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.8 }}
    whileInView={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.5, delay }}
    viewport={{ once: true }}
    className={`relative flex items-center justify-center w-20 h-20 rounded-lg border border-gray-700 bg-[#262626] ${className}`}
  >
    {children}
    {/* Corner nodes */}
    <div className="absolute -top-1 -left-1 w-2 h-2 bg-[#2dd4bf] rounded-sm" />
    <div className="absolute -top-1 -right-1 w-2 h-2 bg-[#2dd4bf] rounded-sm" />
    <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-[#2dd4bf] rounded-sm" />
    <div className="absolute -bottom-1 -right-1 w-2 h-2 bg-[#2dd4bf] rounded-sm" />
  </motion.div>
);

interface ConversionIntegrationsSectionProps {
  label?: string;
  title?: string;
  description?: string;
  ctaText?: string;
  onCtaClick?: () => void;
}

export default function ConversionIntegrationsSection({
  label = "INTEGRATIONS",
  title = "One-Click Integrations.\nInfinite Potential.",
  description = "Conversion integrates seamlessly with your CRM, data warehouse, CDP, ad tools, and analytics to turn siloed data into coordinated, AI-powered campaigns.",
  ctaText = "Book demo",
  onCtaClick,
}: ConversionIntegrationsSectionProps) {
  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&display=swap"
        rel="stylesheet"
      />
      <section
        className="relative w-full py-20 md:py-28 overflow-hidden"
        style={{ backgroundColor: COLORS.background }}
      >
        {/* Diagonal stripe pattern overlay */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `repeating-linear-gradient(
              45deg,
              transparent,
              transparent 10px,
              rgba(255,255,255,0.1) 10px,
              rgba(255,255,255,0.1) 11px
            )`,
          }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
          {/* Top section with text */}
          <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-8 mb-16 md:mb-24">
            {/* Left side - Label and Title */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="flex-1"
            >
              <span
                className="text-xs font-medium tracking-widest uppercase mb-4 block"
                style={{ color: COLORS.textLabel }}
              >
                {label}
              </span>
              <h2
                className="text-4xl md:text-5xl lg:text-6xl leading-tight"
                style={{
                  color: COLORS.textPrimary,
                  fontFamily: "'Instrument Serif', serif",
                }}
              >
                {title.split("\n").map((line, i) => (
                  <span key={i}>
                    {line}
                    {i < title.split("\n").length - 1 && <br />}
                  </span>
                ))}
              </h2>
            </motion.div>

            {/* Right side - Description and CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="flex-1 max-w-md"
            >
              <p
                className="text-base md:text-lg leading-relaxed mb-6"
                style={{ color: COLORS.textSecondary }}
              >
                {description}
              </p>
              <button
                onClick={onCtaClick}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border transition-all duration-300 hover:bg-white/5"
                style={{
                  borderColor: COLORS.textSecondary,
                  color: COLORS.textPrimary,
                }}
              >
                {ctaText}
                <ArrowRight className="w-4 h-4" />
              </button>
            </motion.div>
          </div>

          {/* Integration Diagram */}
          <div className="relative flex flex-col items-center">
            {/* Main central logo */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="relative flex items-center justify-center w-24 h-24 rounded-lg border-2 border-dashed mb-4"
              style={{
                borderColor: COLORS.borderDashed,
                backgroundColor: COLORS.cardBg,
              }}
            >
              <MainLogo />
            </motion.div>

            {/* Connection lines SVG */}
            <svg
              className="w-full max-w-5xl h-48 md:h-64"
              viewBox="0 0 800 200"
              fill="none"
              preserveAspectRatio="xMidYMin meet"
            >
              {/* Main vertical line from center */}
              <motion.path
                d="M400 0 L400 40"
                stroke={COLORS.accent}
                strokeWidth="2"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
              />

              {/* Horizontal main line */}
              <motion.path
                d="M80 40 L720 40"
                stroke={COLORS.accent}
                strokeWidth="2"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                viewport={{ once: true }}
              />

              {/* Branch lines going down */}
              {[80, 200, 320, 480, 600, 720].map((x, i) => (
                <motion.path
                  key={i}
                  d={`M${x} 40 L${x} ${i % 2 === 0 ? 160 : 120}`}
                  stroke={COLORS.accent}
                  strokeWidth="2"
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  transition={{ duration: 0.4, delay: 0.7 + i * 0.1 }}
                  viewport={{ once: true }}
                />
              ))}

              {/* Junction nodes on horizontal line */}
              {[80, 200, 320, 400, 480, 600, 720].map((x, i) => (
                <motion.rect
                  key={i}
                  x={x - 4}
                  y={36}
                  width="8"
                  height="8"
                  fill={COLORS.accent}
                  rx="1"
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: 0.6 + i * 0.05 }}
                  viewport={{ once: true }}
                />
              ))}
            </svg>

            {/* Integration logos row */}
            <div className="flex flex-wrap justify-center items-end gap-6 md:gap-12 lg:gap-20 -mt-16 md:-mt-20">
              <IntegrationNode delay={0.9}>
                <GoogleAdsLogo />
              </IntegrationNode>
              <IntegrationNode className="mb-8 md:mb-12" delay={1.0}>
                <SalesforceLogo />
              </IntegrationNode>
              <IntegrationNode delay={1.1}>
                <SnowflakeLogo />
              </IntegrationNode>
              <IntegrationNode delay={1.2}>
                <SlackLogo />
              </IntegrationNode>
              <IntegrationNode className="mb-8 md:mb-12" delay={1.3}>
                <HubSpotLogo />
              </IntegrationNode>
              <IntegrationNode delay={1.4}>
                <ZapierLogo />
              </IntegrationNode>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
