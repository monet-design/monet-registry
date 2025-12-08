"use client";

// ============================================================================
// CUSTOMIZATION - 이 섹션의 값들을 수정하여 프로젝트에 맞게 조정하세요
// ============================================================================

const COLORS = {
  light: {
    background: "from-white to-neutral-50",
    cardBg: "#FFFFFF",
    cardBorder: "#E5E5E5",
    title: "#171717",
    description: "#525252",
    illustrationBg: "#F5F5F5",
    illustrationElement: "#E5E5E5",
    illustrationDark: "#171717",
    emerald: "#10B981",
    emeraldLight: "#34D399",
    blue: "#3B82F6",
  },
  dark: {
    background: "from-neutral-900 to-neutral-950",
    cardBg: "#171717",
    cardBorder: "#262626",
    title: "#FAFAFA",
    description: "#A3A3A3",
    illustrationBg: "#262626",
    illustrationElement: "#404040",
    illustrationDark: "#FAFAFA",
    emerald: "#10B981",
    emeraldLight: "#34D399",
    blue: "#3B82F6",
  },
} as const;

const IMAGES = {} as const;

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { motion } from "motion/react";

interface LanorxComFeature1Props {
  mode?: "light" | "dark";
  title?: string;
  description?: string;
  features?: Array<{
    title: string;
    icon: React.ReactNode;
  }>;
}

// Landing Page Icon
const LandingPageIcon = ({ isDark }: { isDark: boolean }) => (
  <svg className="w-full h-full" viewBox="0 0 200 160" fill="none">
    {/* Browser window */}
    <rect
      x="25"
      y="15"
      width="150"
      height="130"
      rx="6"
      className={isDark ? "fill-neutral-800" : "fill-neutral-100"}
    />
    {/* Browser header bar */}
    <rect
      x="35"
      y="30"
      width="40"
      height="8"
      rx="2"
      className={isDark ? "fill-neutral-600" : "fill-neutral-300"}
    />
    <rect
      x="80"
      y="30"
      width="25"
      height="8"
      rx="2"
      className={isDark ? "fill-neutral-600" : "fill-neutral-300"}
    />
    <rect
      x="110"
      y="30"
      width="25"
      height="8"
      rx="2"
      className={isDark ? "fill-neutral-600" : "fill-neutral-300"}
    />
    {/* Content area */}
    <rect
      x="35"
      y="55"
      width="130"
      height="25"
      rx="3"
      className={isDark ? "fill-white" : "fill-neutral-900"}
    />
    <rect
      x="35"
      y="90"
      width="90"
      height="18"
      rx="3"
      className={isDark ? "fill-white" : "fill-neutral-900"}
    />
    {/* Text lines */}
    <rect
      x="35"
      y="118"
      width="100"
      height="4"
      rx="2"
      className={isDark ? "fill-neutral-600" : "fill-neutral-300"}
    />
    <rect
      x="35"
      y="128"
      width="70"
      height="4"
      rx="2"
      className={isDark ? "fill-neutral-600" : "fill-neutral-300"}
    />
  </svg>
);

// Email Collection Icon
const EmailCollectionIcon = ({ isDark }: { isDark: boolean }) => (
  <svg className="w-full h-full" viewBox="0 0 200 160" fill="none">
    {/* Background card shape */}
    <rect
      x="50"
      y="25"
      width="110"
      height="70"
      rx="8"
      className={isDark ? "fill-neutral-700" : "fill-neutral-200"}
      transform="rotate(-5 105 60)"
    />
    {/* Main card */}
    <rect
      x="40"
      y="40"
      width="120"
      height="80"
      rx="8"
      className={isDark ? "fill-neutral-800" : "fill-neutral-100"}
    />
    {/* Green dots */}
    <circle cx="65" cy="60" r="10" fill="#10B981" />
    <circle cx="85" cy="55" r="8" fill="#34D399" />
    {/* Number badge */}
    <rect
      x="55"
      y="85"
      width="70"
      height="28"
      rx="6"
      className={isDark ? "fill-white" : "fill-neutral-900"}
    />
    <text
      x="90"
      y="104"
      className={`${isDark ? "fill-neutral-900" : "fill-white"} text-sm font-medium`}
      textAnchor="middle"
    >
      1,247
    </text>
    {/* Blue dot */}
    <circle cx="135" cy="95" r="8" fill="#3B82F6" />
    {/* Bottom elements */}
    <rect
      x="55"
      y="125"
      width="90"
      height="6"
      rx="3"
      className={isDark ? "fill-neutral-600" : "fill-neutral-300"}
    />
  </svg>
);

// Analytics Icon
const AnalyticsIcon = ({ isDark }: { isDark: boolean }) => (
  <svg className="w-full h-full" viewBox="0 0 200 160" fill="none">
    {/* Main card */}
    <rect
      x="30"
      y="25"
      width="140"
      height="110"
      rx="6"
      className={isDark ? "fill-neutral-800" : "fill-neutral-100"}
    />
    {/* Circular gauge background */}
    <circle
      cx="130"
      cy="70"
      r="30"
      fill="none"
      className={isDark ? "stroke-neutral-600" : "stroke-neutral-300"}
      strokeWidth="10"
    />
    {/* Circular gauge progress */}
    <circle
      cx="130"
      cy="70"
      r="30"
      fill="none"
      className={isDark ? "stroke-white" : "stroke-neutral-900"}
      strokeWidth="10"
      strokeLinecap="round"
      strokeDasharray="141.37"
      strokeDashoffset="35.34"
      transform="rotate(-90 130 70)"
    />
    {/* Gauge center */}
    <circle
      cx="130"
      cy="70"
      r="18"
      className={isDark ? "fill-neutral-900" : "fill-white"}
    />
    <text
      x="130"
      y="75"
      className={`${isDark ? "fill-white" : "fill-neutral-900"} text-xs font-medium`}
      textAnchor="middle"
    >
      75%
    </text>
    {/* Bottom indicator */}
    <circle cx="50" cy="115" r="5" fill="#10B981" />
    <rect
      x="62"
      y="112"
      width="60"
      height="6"
      rx="3"
      className={isDark ? "fill-neutral-600" : "fill-neutral-300"}
    />
    <rect
      x="62"
      y="124"
      width="40"
      height="6"
      rx="3"
      className={isDark ? "fill-neutral-600" : "fill-neutral-300"}
    />
  </svg>
);

const defaultFeatures = [
  {
    title: "Make landing page",
    icon: "landing",
  },
  {
    title: "Email Collection",
    icon: "email",
  },
  {
    title: "Analytics",
    icon: "analytics",
  },
];

export default function LanorxComFeature1({
  mode = "light",
  title = "Everything you need to get\n100 signups",
  description = "Launch in 5 minutes. Collect emails, A/B test messaging, and optimize conversions. Built for MicroSaaS builders.",
  features = defaultFeatures,
}: LanorxComFeature1Props) {
  const isDark = mode === "dark";
  const colors = COLORS[mode];

  const getIcon = (iconType: string) => {
    switch (iconType) {
      case "landing":
        return <LandingPageIcon isDark={isDark} />;
      case "email":
        return <EmailCollectionIcon isDark={isDark} />;
      case "analytics":
        return <AnalyticsIcon isDark={isDark} />;
      default:
        return <LandingPageIcon isDark={isDark} />;
    }
  };

  return (
    <section
      className={`py-24 md:py-36 relative bg-gradient-to-b ${colors.background}`}
    >
      <div className="max-w-5xl container mx-auto px-6">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8 mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-light tracking-tight max-w-md whitespace-pre-line"
            style={{ color: colors.title }}
          >
            {title}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-base md:text-lg font-light max-w-md leading-relaxed"
            style={{ color: colors.description }}
          >
            {description}
          </motion.p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group p-6 rounded-2xl border transition-all duration-300 hover:shadow-lg"
              style={{
                backgroundColor: colors.cardBg,
                borderColor: colors.cardBorder,
              }}
            >
              <div
                className="w-full h-48 mb-6 rounded-lg overflow-hidden flex items-center justify-center"
                style={{ backgroundColor: colors.illustrationBg }}
              >
                {typeof feature.icon === "string"
                  ? getIcon(feature.icon)
                  : feature.icon}
              </div>
              <h3
                className="text-lg font-normal"
                style={{ color: colors.title }}
              >
                {feature.title}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
