"use client";

// ============================================================================
// CUSTOMIZATION - 이 섹션의 값들을 수정하여 프로젝트에 맞게 조정하세요
// ============================================================================

/**
 * 커스텀 색상 (브랜드 컬러)
 */
const COLORS = {
  light: {
    background: "#FFFFFF",
    text: "#000000",
    textMuted: "#666666",
    gridLine: "#E5E5E5",
    uptimeBox: "#F5F5F5",
  },
  dark: {
    background: "#0A0A0A",
    text: "#FFFFFF",
    textMuted: "#999999",
    gridLine: "#333333",
    uptimeBox: "#1A1A1A",
  },
} as const;

/**
 * Feature 데이터
 */
const DEFAULT_FEATURES = [
  {
    icon: "scale",
    title: "Elastic scalability",
    description:
      "Handle unbelievable scale without a sweat, whether you're on Fortune 500, or it's your launch day.",
  },
  {
    icon: "security",
    title: "Rock-solid security",
    description:
      "Infrastructure designed to automatically mitigate DDoS attacks and protect your information.",
  },
  {
    icon: "globe",
    title: "Global performance",
    description:
      "Automatically route traffic to over 100 edge locations around the globe, for a fast site, anywhere in the world.",
  },
  {
    icon: "protection",
    title: "User-first protection",
    description:
      "Vercel automatically caches your site to ensure that even if a backend service goes down, your site stays up.",
  },
  {
    icon: "storage",
    title: "Serverless Storage",
    description:
      "Accelerate development with databases for the fastest frontends.",
  },
] as const;

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { motion } from "motion/react";
import {
  Scaling,
  ShieldCheck,
  Globe,
  Users,
  Database,
} from "lucide-react";

// Icon mapping
const IconMap = {
  scale: Scaling,
  security: ShieldCheck,
  globe: Globe,
  protection: Users,
  storage: Database,
} as const;

type FeatureItem = {
  icon: string;
  title: string;
  description: string;
};

interface SaaspoFeatureSectionsVercelProps {
  mode?: "light" | "dark";
  title?: string;
  features?: FeatureItem[];
  uptimeValue?: string;
}

// Uptime visual component with vertical line pattern
function UptimeVisual({
  value = "99.99% Uptime",
  mode = "light",
}: {
  value?: string;
  mode?: "light" | "dark";
}) {
  const colors = COLORS[mode];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.3 }}
      viewport={{ once: true }}
      className="relative overflow-hidden rounded-sm"
      style={{ backgroundColor: colors.uptimeBox }}
    >
      {/* Top border line */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ backgroundColor: colors.gridLine }}
      />

      {/* Bottom border line */}
      <div
        className="absolute bottom-0 left-0 right-0 h-px"
        style={{ backgroundColor: colors.gridLine }}
      />

      {/* Vertical line pattern background - gradient from left (light) to right (dark) */}
      <div className="absolute inset-0 flex">
        {Array.from({ length: 100 }).map((_, i) => (
          <div
            key={i}
            className="h-full flex-shrink-0"
            style={{
              width: "2px",
              marginRight: "2px",
              backgroundColor:
                mode === "light"
                  ? `rgba(0, 0, 0, ${0.02 + (i / 100) * 0.2})`
                  : `rgba(255, 255, 255, ${0.02 + (i / 100) * 0.2})`,
            }}
          />
        ))}
      </div>

      {/* Uptime text */}
      <div className="relative z-10 px-6 py-8 md:px-8 md:py-12">
        <span
          className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight whitespace-nowrap"
          style={{
            color: colors.text,
          }}
        >
          {value}
        </span>
      </div>
    </motion.div>
  );
}

// Feature item component
function FeatureItem({
  feature,
  mode = "light",
  index = 0,
}: {
  feature: FeatureItem;
  mode?: "light" | "dark";
  index?: number;
}) {
  const colors = COLORS[mode];
  const IconComponent = IconMap[feature.icon as keyof typeof IconMap];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="space-y-4"
    >
      <div className="flex items-center gap-2">
        {IconComponent && (
          <IconComponent
            className="w-4 h-4"
            style={{ color: colors.textMuted }}
            strokeWidth={1.5}
          />
        )}
        <span
          className="text-sm tracking-wide"
          style={{ color: colors.textMuted }}
        >
          {feature.title}
        </span>
      </div>
      <p
        className="text-base md:text-lg lg:text-xl font-semibold leading-relaxed"
        style={{ color: colors.text }}
      >
        {feature.description}
      </p>
    </motion.div>
  );
}

export default function SaaspoFeatureSectionsVercel({
  mode = "light",
  title = "Reliability you can count on.",
  features = DEFAULT_FEATURES as unknown as FeatureItem[],
  uptimeValue = "99.99% Uptime",
}: SaaspoFeatureSectionsVercelProps) {
  const colors = COLORS[mode];

  return (
    <section
      className="relative w-full py-20 md:py-28 lg:py-32 overflow-hidden"
      style={{ backgroundColor: colors.background }}
    >
      {/* Google Font import for Instrument Serif */}
      <style jsx global>{`
        @import url("https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&display=swap");
      `}</style>

      {/* Vertical grid lines - 3 lines dividing into columns */}
      <div className="absolute inset-0 pointer-events-none hidden md:block">
        <div
          className="absolute top-0 bottom-0 w-px"
          style={{
            backgroundColor: colors.gridLine,
            left: "33.33%",
          }}
        />
        <div
          className="absolute top-0 bottom-0 w-px"
          style={{
            backgroundColor: colors.gridLine,
            left: "66.66%",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 relative z-10">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-16 md:mb-20 lg:mb-28"
          style={{
            color: colors.text,
            fontFamily: "'Instrument Serif', serif",
            fontStyle: "italic",
          }}
        >
          {title}
        </motion.h2>

        {/* First row: 2 features + Uptime visual */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 lg:gap-16 mb-16 md:mb-20 lg:mb-28">
          {/* First feature */}
          <FeatureItem feature={features[0]} mode={mode} index={0} />

          {/* Second feature */}
          <FeatureItem feature={features[1]} mode={mode} index={1} />

          {/* Uptime visual */}
          <div className="flex items-start">
            <UptimeVisual value={uptimeValue} mode={mode} />
          </div>
        </div>

        {/* Second row: 3 features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 lg:gap-16">
          {features.slice(2).map((feature, index) => (
            <FeatureItem
              key={index}
              feature={feature}
              mode={mode}
              index={index + 2}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
