"use client";

// ============================================================================
// CUSTOMIZATION - 이 섹션의 값들을 수정하여 프로젝트에 맞게 조정하세요
// ============================================================================

/**
 * 커스텀 색상 (브랜드 컬러)
 */
const COLORS = {
  background: "#0f0f0f",
  backgroundAlt: "#1a1a1a",
  accent: "#F04438",
  accentHover: "#D93D31",
  textPrimary: "#ffffff",
  textSecondary: "#999999",
  border: "#2a2a2a",
} as const;

/**
 * Feature data
 */
const DEFAULT_FEATURES = [
  {
    icon: "platform",
    title: "Your AI platform of record",
    description:
      "Build, scale, and collaborate on AI products in a centralized, secure platform across every team.",
  },
  {
    icon: "rocket",
    title: "Get ideas to market fast",
    description:
      "Accelerate AI product team sprints to ship with speed and quality, while efficiently scaling to new use cases.",
  },
  {
    icon: "lock",
    title: "Avoid vendor lock-in",
    description:
      "Bet on AI, not single vendors. Agnostically adapt to changing LLM and NLU technologies.",
  },
  {
    icon: "download",
    title: "Control & customization",
    description:
      "Build endless API-first data and interface integrations alongside any LLM models with secure guardrails.",
  },
];

/**
 * Logo data for trusted by section
 */
const DEFAULT_LOGOS = [
  { name: "Instacart", type: "instacart" },
  { name: "Intrado", type: "intrado" },
  { name: "Intuit", type: "intuit" },
  { name: "KBC", type: "kbc" },
  { name: "Louis Vuitton", type: "louisvuitton" },
];

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

interface Feature {
  icon: string;
  title: string;
  description: string;
}

interface Logo {
  name: string;
  type: string;
}

interface SaaspoFeatureSectionsVoiceflowProps {
  badge?: string;
  title?: string;
  description?: string;
  ctaText?: string;
  ctaHref?: string;
  features?: Feature[];
  trustedByText?: string;
  logos?: Logo[];
}

// ASCII Art Sphere Component
function AsciiSphere() {
  const asciiArt = `
                                   *+**%S00000000++**-
                              -*%000000000000000000000000%*-.
                         .-+%0000000000000000000000000%%%%%%S%*-.
                      .-*%00000000000000000000000%%SSSSSSSSS%%%%S*-
                   .-*%0000000000000000000000000%SSSS%%%########SS%*-.
                 -*%000000000000000%%++%000000000SSSS%++*###SSSSSS%%S+-.
               .+%00000000000000%+-     -*%00000SS%+-    .+##SSSSS%%%%+.
             .*%0000000000000%+-.         -*00%+-.         .+#SSSS%%%%S+.
            .+%000000000000%+.                                *#SS%%%%%S*.
           -*0000000000000*.                                    +#S%%%%%S+.
          .+0000000000000+.                                      -#S%%%%%S*.
         .*000000000000%-.                                        -#%%%%%%S+.
         -*00000000000%+                                            +#%%%%SS+
        .+00000000000S+.                                             *#%%%%S*
        -*0000000000S+.                                               +S%%%S+
        -+0000000000*                                                  +S%%S+
        .+000000000*.                                                  .+S%S*.
        .+00000000%+                                                    +S%S*
        .*0000000S+.                                                    -SS%+
        .-*00000S+.                                                     -*%S-
         .-*000S*.                                                       +S+.
          .-+%S+.                                                        -+.
           .-+*.                                                         ..
             ..
`;

  return (
    <pre
      className="text-[6px] sm:text-[8px] md:text-[9px] leading-[1.1] font-mono select-none"
      style={{ color: COLORS.textSecondary }}
    >
      {asciiArt}
    </pre>
  );
}

// Feature Icon Component
function FeatureIcon({ type }: { type: string }) {
  const iconStyle = {
    stroke: COLORS.accent,
    strokeWidth: 2,
    fill: "none",
  };

  switch (type) {
    case "platform":
      return (
        <svg
          width="40"
          height="40"
          viewBox="0 0 40 40"
          className="w-10 h-10"
        >
          <circle
            cx="14"
            cy="20"
            r="8"
            style={iconStyle}
          />
          <path
            d="M22 14 C28 14 32 18 32 24"
            style={iconStyle}
          />
          <circle
            cx="32"
            cy="24"
            r="3"
            style={{ ...iconStyle, fill: COLORS.accent }}
          />
        </svg>
      );
    case "rocket":
      return (
        <svg
          width="40"
          height="40"
          viewBox="0 0 40 40"
          className="w-10 h-10"
        >
          <rect
            x="12"
            y="10"
            width="16"
            height="20"
            rx="3"
            style={iconStyle}
          />
          <circle
            cx="20"
            cy="18"
            r="4"
            style={{ ...iconStyle, fill: COLORS.accent }}
          />
          <line
            x1="12"
            y1="26"
            x2="28"
            y2="26"
            style={iconStyle}
          />
        </svg>
      );
    case "lock":
      return (
        <svg
          width="40"
          height="40"
          viewBox="0 0 40 40"
          className="w-10 h-10"
        >
          <rect
            x="10"
            y="18"
            width="20"
            height="14"
            rx="2"
            style={{ ...iconStyle, fill: COLORS.accent }}
          />
          <path
            d="M14 18 V14 C14 10 16 8 20 8 C24 8 26 10 26 14 V18"
            style={iconStyle}
          />
        </svg>
      );
    case "download":
      return (
        <svg
          width="40"
          height="40"
          viewBox="0 0 40 40"
          className="w-10 h-10"
        >
          <path
            d="M20 8 V24"
            style={iconStyle}
          />
          <path
            d="M14 18 L20 24 L26 18"
            style={iconStyle}
          />
          <path
            d="M12 28 H28"
            style={iconStyle}
          />
        </svg>
      );
    default:
      return null;
  }
}

// Logo Component
function LogoDisplay({ logo }: { logo: Logo }) {
  const textStyle = {
    color: COLORS.textPrimary,
    opacity: 0.8,
  };

  switch (logo.type) {
    case "instacart":
      return (
        <div className="flex items-center gap-2" style={textStyle}>
          <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
            <circle cx="12" cy="12" r="10" />
          </svg>
          <span className="text-lg font-semibold tracking-tight">instacart</span>
        </div>
      );
    case "intrado":
      return (
        <div className="flex items-center gap-2" style={textStyle}>
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
          </svg>
          <span className="text-lg font-bold tracking-wide">INTRADO</span>
        </div>
      );
    case "intuit":
      return (
        <span className="text-2xl font-bold tracking-tight" style={textStyle}>
          INTUIT
        </span>
      );
    case "kbc":
      return (
        <span className="text-xl font-bold tracking-wider" style={textStyle}>
          KBC
        </span>
      );
    case "louisvuitton":
      return (
        <span className="text-lg font-light tracking-[0.2em]" style={textStyle}>
          LOUIS VU
        </span>
      );
    default:
      return (
        <span className="text-lg font-semibold" style={textStyle}>
          {logo.name}
        </span>
      );
  }
}

export default function SaaspoFeatureSectionsVoiceflow({
  badge = "Enterprise Cloud",
  title = "Scale and Security with\nVoiceflow Enterprise",
  description = "Product teams securely build and deploy advanced AI agents using their approved LLMs alongside customer data and tech stack integrations.",
  ctaText = "Discover Enterprise Cloud",
  ctaHref = "#",
  features = DEFAULT_FEATURES,
  trustedByText = "Trusted by the best in the business",
  logos = DEFAULT_LOGOS,
}: SaaspoFeatureSectionsVoiceflowProps) {
  return (
    <section
      className="relative w-full"
      style={{ backgroundColor: COLORS.background }}
    >
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-16 pb-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {/* Badge */}
            <div className="flex items-center gap-2 mb-6">
              <div
                className="w-6 h-6 rounded flex items-center justify-center text-sm font-bold text-white"
                style={{ backgroundColor: COLORS.accent }}
              >
                E
              </div>
              <span
                className="text-sm font-medium"
                style={{ color: COLORS.accent }}
              >
                {badge}
              </span>
            </div>

            {/* Title */}
            <h1
              className="text-4xl md:text-5xl font-bold leading-tight mb-6"
              style={{ color: COLORS.textPrimary }}
            >
              {title.split("\n").map((line, i) => (
                <span key={i}>
                  {line}
                  {i < title.split("\n").length - 1 && <br />}
                </span>
              ))}
            </h1>

            {/* Description */}
            <p
              className="text-lg leading-relaxed mb-8 max-w-lg"
              style={{ color: COLORS.textSecondary }}
            >
              {description}
            </p>

            {/* CTA Button */}
            <a
              href={ctaHref}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border transition-all duration-200 hover:bg-white/5"
              style={{
                borderColor: COLORS.textSecondary,
                color: COLORS.textPrimary,
              }}
            >
              {ctaText}
              <ArrowRight className="w-4 h-4" />
            </a>
          </motion.div>

          {/* Right Content - ASCII Sphere */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex justify-center lg:justify-end"
          >
            <AsciiSphere />
          </motion.div>
        </div>
      </div>

      {/* Features Section */}
      <div
        className="border-t"
        style={{ borderColor: COLORS.border }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-0">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="px-6 py-6 first:pl-0 last:pr-0"
                style={{
                  borderLeft: index > 0 ? `1px solid ${COLORS.border}` : "none",
                }}
              >
                <div className="mb-4">
                  <FeatureIcon type={feature.icon} />
                </div>
                <h3
                  className="text-lg font-semibold mb-3"
                  style={{ color: COLORS.textPrimary }}
                >
                  {feature.title}
                </h3>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: COLORS.textSecondary }}
                >
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Logo Bar Section */}
      <div
        className="border-t"
        style={{ borderColor: COLORS.border, backgroundColor: COLORS.backgroundAlt }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-wrap items-center justify-between gap-8"
          >
            <span
              className="text-sm"
              style={{ color: COLORS.textSecondary }}
            >
              {trustedByText}
            </span>
            <div className="flex flex-wrap items-center gap-10">
              {logos.map((logo, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <LogoDisplay logo={logo} />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
