"use client";

// ============================================================================
// CUSTOMIZATION - 이 섹션의 값들을 수정하여 프로젝트에 맞게 조정하세요
// ============================================================================

/**
 * 커스텀 색상 (브랜드 컬러)
 */
const COLORS = {
  background: "#1c1c1c",
  cardBackground: "#262626",
  cardBorder: "#333333",
  textPrimary: "#ffffff",
  textSecondary: "#9a9a9a",
  accent: "#3b82f6", // Steel blue
  green: "#4ade80",
  orange: "#f97316",
  darkGreen: "#1a3a2a",
} as const;

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { motion } from "motion/react";
import {
  Zap,
  Wifi,
  Clock,
  Cookie,
  Code2,
  Eye,
  Lock,
  CheckCircle2,
} from "lucide-react";

interface FeatureCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  graphic: React.ReactNode;
  badge?: string;
  delay?: number;
}

function FeatureCard({
  title,
  description,
  icon,
  graphic,
  badge,
  delay = 0,
}: FeatureCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      className="rounded-2xl p-6 flex flex-col"
      style={{
        backgroundColor: COLORS.cardBackground,
        border: `1px solid ${COLORS.cardBorder}`,
      }}
    >
      <div className="flex-1 mb-4 min-h-[140px] flex items-center justify-center overflow-hidden rounded-xl">
        {graphic}
      </div>
      <div className="flex items-start gap-2 mb-2">
        <span style={{ color: COLORS.textSecondary }}>{icon}</span>
        <h3
          className="font-semibold text-base"
          style={{ color: COLORS.textPrimary }}
        >
          {title}
          {badge && (
            <span
              className="ml-2 text-xs font-normal"
              style={{ color: COLORS.textSecondary }}
            >
              [{badge}]
            </span>
          )}
        </h3>
      </div>
      <p className="text-sm leading-relaxed" style={{ color: COLORS.textSecondary }}>
        {description}
      </p>
    </motion.div>
  );
}

// Graphic Components for each feature card
function CaptchaGraphic() {
  return (
    <div
      className="w-full max-w-[200px] rounded-lg p-3 flex items-center gap-3"
      style={{ backgroundColor: "#1a1a1a" }}
    >
      <div
        className="w-6 h-6 rounded flex items-center justify-center"
        style={{ backgroundColor: COLORS.green }}
      >
        <CheckCircle2 className="w-4 h-4" style={{ color: "#1a1a1a" }} />
      </div>
      <span className="text-sm" style={{ color: COLORS.textPrimary }}>
        I&apos;m not a robot
      </span>
      <div className="ml-auto">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <rect x="2" y="2" width="20" height="20" rx="2" fill="#4A4A4A" />
          <path
            d="M12 6v4M8 12h8M12 14v4"
            stroke="#7A7A7A"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      </div>
    </div>
  );
}

function FingerprintGraphic() {
  return (
    <div className="relative w-24 h-24">
      <svg viewBox="0 0 100 100" className="w-full h-full">
        {[20, 30, 40, 50].map((r, i) => (
          <circle
            key={i}
            cx="50"
            cy="50"
            r={r}
            fill="none"
            stroke={COLORS.textSecondary}
            strokeWidth="1"
            strokeDasharray="4 4"
            opacity={0.3 + i * 0.15}
          />
        ))}
        <path
          d="M50 10 Q70 30 70 50 Q70 70 50 90"
          fill="none"
          stroke={COLORS.textSecondary}
          strokeWidth="1.5"
          opacity="0.6"
        />
        <path
          d="M30 30 Q50 20 70 30"
          fill="none"
          stroke={COLORS.textSecondary}
          strokeWidth="1.5"
          opacity="0.6"
        />
      </svg>
    </div>
  );
}

function SpeedComparisonGraphic() {
  return (
    <div className="w-full space-y-3 px-2">
      <div className="flex items-center gap-3">
        <div className="flex-1">
          <div
            className="h-3 rounded-full flex"
            style={{ backgroundColor: "#1a1a1a" }}
          >
            {Array.from({ length: 18 }).map((_, i) => (
              <div
                key={i}
                className="h-full w-1.5 mx-0.5 first:rounded-l-full"
                style={{ backgroundColor: COLORS.green }}
              />
            ))}
          </div>
        </div>
        <div className="text-right min-w-[80px]">
          <div className="text-sm" style={{ color: COLORS.green }}>
            900 ms
          </div>
          <div className="text-xs flex items-center gap-1" style={{ color: COLORS.textSecondary }}>
            <svg width="12" height="12" viewBox="0 0 12 12" fill={COLORS.accent}>
              <rect x="0" y="0" width="5" height="5" />
              <rect x="6" y="0" width="5" height="5" />
              <rect x="0" y="6" width="5" height="5" />
              <rect x="6" y="6" width="5" height="5" />
            </svg>
            Steel
          </div>
        </div>
      </div>
      <div className="flex items-center gap-3">
        <div className="flex-1">
          <div
            className="h-3 rounded-full"
            style={{ backgroundColor: "#1a1a1a" }}
          >
            <div
              className="h-full rounded-full"
              style={{ width: "100%", backgroundColor: "#4a4a4a" }}
            />
          </div>
        </div>
        <div className="text-right min-w-[80px]">
          <div className="text-sm" style={{ color: COLORS.textSecondary }}>
            5000 ms
          </div>
          <div className="text-xs" style={{ color: COLORS.textSecondary }}>
            Competition
          </div>
        </div>
      </div>
    </div>
  );
}

function LongSessionGraphic() {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      <svg viewBox="0 0 120 120" className="w-28 h-28">
        {/* Globe wireframe */}
        <ellipse
          cx="60"
          cy="60"
          rx="40"
          ry="40"
          fill="none"
          stroke={COLORS.textSecondary}
          strokeWidth="0.5"
          opacity="0.3"
        />
        <ellipse
          cx="60"
          cy="60"
          rx="40"
          ry="20"
          fill="none"
          stroke={COLORS.textSecondary}
          strokeWidth="0.5"
          opacity="0.3"
        />
        <ellipse
          cx="60"
          cy="60"
          rx="20"
          ry="40"
          fill="none"
          stroke={COLORS.textSecondary}
          strokeWidth="0.5"
          opacity="0.3"
        />
        <line
          x1="20"
          y1="60"
          x2="100"
          y2="60"
          stroke={COLORS.textSecondary}
          strokeWidth="0.5"
          opacity="0.3"
        />
        <line
          x1="60"
          y1="20"
          x2="60"
          y2="100"
          stroke={COLORS.textSecondary}
          strokeWidth="0.5"
          opacity="0.3"
        />
      </svg>
      <div
        className="absolute top-4 right-4 px-3 py-1.5 rounded-full flex items-center gap-2 text-xs"
        style={{ backgroundColor: COLORS.darkGreen }}
      >
        <span
          className="w-2 h-2 rounded-full"
          style={{ backgroundColor: COLORS.green }}
        />
        <span style={{ color: COLORS.green }}>Live - 23h:59m</span>
      </div>
    </div>
  );
}

function CookieGraphic() {
  return (
    <div className="relative">
      <svg viewBox="0 0 120 80" className="w-32 h-20">
        {/* Cookie shape */}
        <ellipse
          cx="60"
          cy="40"
          rx="50"
          ry="30"
          fill="none"
          stroke={COLORS.textSecondary}
          strokeWidth="1"
          opacity="0.4"
        />
        {/* Cookie text labels */}
        <text
          x="35"
          y="30"
          fontSize="8"
          fill={COLORS.textSecondary}
          opacity="0.7"
          transform="rotate(-15, 35, 30)"
        >
          cookie#4
        </text>
        <text
          x="60"
          y="38"
          fontSize="8"
          fill={COLORS.textSecondary}
          opacity="0.7"
        >
          skie#1
        </text>
        <text
          x="45"
          y="50"
          fontSize="8"
          fill={COLORS.textSecondary}
          opacity="0.7"
        >
          cookie#2
        </text>
        <text
          x="70"
          y="55"
          fontSize="8"
          fill={COLORS.textSecondary}
          opacity="0.7"
          transform="rotate(10, 70, 55)"
        >
          cookie#3
        </text>
      </svg>
    </div>
  );
}

function CodeEditorGraphic() {
  return (
    <div
      className="w-full max-w-[220px] rounded-lg overflow-hidden"
      style={{ backgroundColor: "#1a1a1a" }}
    >
      <div className="flex items-center gap-1.5 px-3 py-2 border-b border-gray-800">
        <div className="w-2 h-2 rounded-full bg-red-500 opacity-60" />
        <div className="w-2 h-2 rounded-full bg-yellow-500 opacity-60" />
        <div className="w-2 h-2 rounded-full bg-green-500 opacity-60" />
      </div>
      <div className="p-3 space-y-1.5">
        <div className="flex gap-2">
          <span
            className="px-2 py-0.5 rounded text-xs"
            style={{ backgroundColor: COLORS.orange, color: "#1a1a1a" }}
          >
            -puppeteer.launch
          </span>
        </div>
        <div
          className="text-xs font-mono"
          style={{ color: COLORS.orange }}
        >
          {"({...})"}
        </div>
        <div className="flex gap-2 mt-2">
          <span
            className="px-2 py-0.5 rounded text-xs"
            style={{ backgroundColor: "#2a2a2a", color: COLORS.textSecondary }}
          >
            +puppeteer.connect
          </span>
        </div>
        <div
          className="text-xs font-mono"
          style={{ color: COLORS.textSecondary }}
        >
          {"({...})"}
        </div>
      </div>
    </div>
  );
}

function ObservabilityGraphic() {
  return (
    <div
      className="w-full max-w-[220px] rounded-lg overflow-hidden"
      style={{ backgroundColor: "#1a1a1a" }}
    >
      <div className="flex items-center justify-between px-3 py-2 border-b border-gray-800">
        <div className="flex items-center gap-2">
          <span
            className="w-2 h-2 rounded-full"
            style={{ backgroundColor: COLORS.green }}
          />
          <span className="text-xs" style={{ color: COLORS.green }}>
            Playing
          </span>
        </div>
        <div className="flex gap-1">
          <div className="w-1 h-3 rounded bg-gray-600" />
          <div className="w-1 h-3 rounded bg-gray-600" />
        </div>
      </div>
      <div className="p-4 relative h-20">
        <div
          className="absolute top-6 left-1/2 -translate-x-1/2 w-20 h-3 rounded"
          style={{ backgroundColor: "#333" }}
        />
        <div
          className="absolute bottom-4 left-1/2 -translate-x-1/2 w-32 h-4 rounded"
          style={{ backgroundColor: "#333" }}
        />
        <svg
          className="absolute top-4 right-8"
          width="16"
          height="16"
          viewBox="0 0 16 16"
        >
          <path
            d="M8 2 L14 8 L8 14 L8 10 L2 10 L2 6 L8 6 Z"
            fill={COLORS.textSecondary}
            opacity="0.5"
            transform="rotate(45, 8, 8)"
          />
        </svg>
      </div>
    </div>
  );
}

function AutoSignInGraphic() {
  return (
    <div className="flex flex-col items-center gap-4">
      <div
        className="px-4 py-2 rounded-lg flex items-center gap-2"
        style={{ backgroundColor: "#f5f5f5" }}
      >
        <Lock className="w-4 h-4" style={{ color: "#333" }} />
        <span className="text-sm" style={{ color: "#333" }}>
          Sign in Securely
        </span>
      </div>
      <svg width="20" height="30" viewBox="0 0 20 30">
        <path
          d="M10 0 L10 25 L5 20 M10 25 L15 20"
          fill="none"
          stroke={COLORS.accent}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}

// Steel Logo Component
function SteelLogo() {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32">
      <rect x="4" y="4" width="8" height="8" fill={COLORS.accent} />
      <rect x="14" y="4" width="8" height="8" fill={COLORS.accent} />
      <rect x="4" y="14" width="8" height="8" fill={COLORS.accent} />
      <rect x="14" y="14" width="8" height="8" fill={COLORS.accent} opacity="0.5" />
      <rect x="24" y="14" width="4" height="4" fill={COLORS.accent} opacity="0.3" />
    </svg>
  );
}

interface SaaspoFeatureSectionsSteelDevProps {
  title?: string;
  subtitle?: string;
  ctaText?: string;
}

export default function SaaspoFeatureSectionsSteelDev({
  title = "Sessions API",
  subtitle = "Spin up on-demand browser sessions with a simple API call.",
  ctaText = "Start For Free",
}: SaaspoFeatureSectionsSteelDevProps) {
  const features: Omit<FeatureCardProps, "delay">[] = [
    {
      title: "Auto CAPTCHA solving",
      description:
        "Built-in CAPTCHA solving that keeps your automation flowing.",
      icon: <Zap className="w-4 h-4" />,
      graphic: <CaptchaGraphic />,
    },
    {
      title: "Proxy and Browser Fingerprinting",
      description:
        "Simple controls to never worry about getting flagged as a bot again.",
      icon: <Wifi className="w-4 h-4" />,
      graphic: <FingerprintGraphic />,
    },
    {
      title: "Quick-start",
      description:
        "Average session starts in less than 1s when client is in same region.",
      icon: <Zap className="w-4 h-4" />,
      graphic: <SpeedComparisonGraphic />,
    },
    {
      title: "Up to 24h Long Sessions",
      description:
        "Run for a minute or several hours, each session can run up to 24 hours.",
      icon: <Clock className="w-4 h-4" />,
      graphic: <LongSessionGraphic />,
    },
    {
      title: "Manage and Reuse Context",
      description:
        "Save and inject cookies and local storage to pick up where you left off.",
      icon: <Cookie className="w-4 h-4" />,
      graphic: <CookieGraphic />,
    },
    {
      title: "1-line Change to Run Puppeteer",
      description:
        "Easily run your Puppeteer, Playwright, or Selenium in the cloud.",
      icon: <Code2 className="w-4 h-4" />,
      graphic: <CodeEditorGraphic />,
    },
    {
      title: "World-class Observability",
      description:
        "Session Viewer lets you view and debug live or recorded sessions.",
      icon: <Eye className="w-4 h-4" />,
      graphic: <ObservabilityGraphic />,
    },
    {
      title: "Auto Sign-In",
      description:
        "Securely give your agents access to auth-walled websites and apps.",
      icon: <Lock className="w-4 h-4" />,
      graphic: <AutoSignInGraphic />,
      badge: "Coming Soon",
    },
  ];

  return (
    <section
      className="relative w-full py-16 px-6 md:px-12 lg:px-20"
      style={{ backgroundColor: COLORS.background }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[300px_1fr] gap-8 lg:gap-12">
          {/* Left Column - Header */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="flex flex-col items-start"
          >
            <SteelLogo />
            <h2
              className="text-3xl md:text-4xl font-bold mt-4 mb-3"
              style={{ color: COLORS.textPrimary }}
            >
              {title}
            </h2>
            <p
              className="text-base mb-6"
              style={{ color: COLORS.textSecondary }}
            >
              {subtitle}
            </p>
            <button
              className="w-full max-w-[240px] py-3 px-6 rounded-lg font-medium transition-all hover:opacity-90"
              style={{
                backgroundColor: COLORS.textPrimary,
                color: COLORS.background,
              }}
            >
              {ctaText}
            </button>
          </motion.div>

          {/* Right Column - Feature Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {features.map((feature, index) => (
              <FeatureCard
                key={feature.title}
                {...feature}
                delay={index * 0.1}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
