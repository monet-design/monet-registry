"use client";

import { motion } from "motion/react";
import {
  LayoutGrid,
  Zap,
  FolderOpen,
  Command,
  Layers,
  Sparkles,
  ChevronRight,
  BarChart3,
} from "lucide-react";

// ============================================================================
// CUSTOMIZATION
// ============================================================================

const COLORS = {
  light: {},
  dark: {},
} as const;

const IMAGES = {} as const;

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

interface FeatureItem {
  icon: React.ReactNode;
  title: string;
  description: string;
}

interface StatItem {
  icon: React.ReactNode;
  label: string;
  value: string;
}

interface AlignuiDesignSystemHeroProps {
  mode?: "light" | "dark";
  badge?: string;
  headlineBlack?: string;
  headlineAccent?: string;
  description?: string;
  previewButtonText?: string;
  buyButtonText?: string;
  features?: FeatureItem[];
  screenshotSrc?: string;
  statisticsLabel?: string;
  statisticsHeadline?: string;
  statisticsSubheadline?: string;
  stats?: StatItem[];
  onPreviewClick?: () => void;
  onBuyClick?: () => void;
}

function HandDrawnArrow({
  className,
  direction = "down-right",
}: {
  className?: string;
  direction?: "down-right" | "down-left";
}) {
  if (direction === "down-left") {
    return (
      <svg
        width="24"
        height="28"
        viewBox="0 0 24 28"
        fill="none"
        className={className}
      >
        <path
          d="M20 4C18 8 14 14 10 18C6 22 4 24 2 26"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          fill="none"
        />
        <path
          d="M6 22L2 26L8 25"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
      </svg>
    );
  }
  return (
    <svg
      width="24"
      height="28"
      viewBox="0 0 24 28"
      fill="none"
      className={className}
    >
      <path
        d="M4 4C6 8 10 14 14 18C18 22 20 24 22 26"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M18 22L22 26L16 25"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  );
}

function Annotation({
  label,
  color,
  direction = "down-right",
  className,
}: {
  label: string;
  color: "green" | "purple";
  direction?: "down-right" | "down-left";
  className?: string;
}) {
  const bgColor = color === "green" ? "bg-[#3AD19A]" : "bg-[#C299F2]";
  const arrowColor = color === "green" ? "text-[#3AD19A]" : "text-[#C299F2]";

  return (
    <div className={`flex flex-col items-center ${className}`}>
      <div
        className={`${bgColor} rounded px-2 py-0.5 text-xs font-medium text-white`}
      >
        {label}
      </div>
      <HandDrawnArrow className={arrowColor} direction={direction} />
    </div>
  );
}

const defaultFeatures: FeatureItem[] = [
  {
    icon: <LayoutGrid className="h-5 w-5" />,
    title: "Unique Widgets & Dashboards",
    description: "Create dashboards with unique widgets.",
  },
  {
    icon: <Zap className="h-5 w-5" />,
    title: "Lightning-fast & User-friendly",
    description: "Design anything with ease, within minutes.",
  },
  {
    icon: <FolderOpen className="h-5 w-5" />,
    title: "Extensive Asset Collection",
    description: "Access logos, and everything you need.",
  },
];

const defaultStats: StatItem[] = [
  {
    icon: <LayoutGrid className="h-6 w-6" />,
    label: "Widgets & Examples",
    value: "200+",
  },
  {
    icon: <Command className="h-6 w-6" />,
    label: "Components & Variants",
    value: "5900+",
  },
  {
    icon: <Layers className="h-6 w-6" />,
    label: "Asset Collection",
    value: "1200+",
  },
  {
    icon: <Sparkles className="h-6 w-6" />,
    label: "Styles, Variables & Tokens",
    value: "150+",
  },
];

export default function AlignuiDesignSystemHero({
  mode = "light",
  badge = "AlignUI - Beta [v1.0]",
  headlineBlack = "The design system",
  headlineAccent = "lightning-fast.",
  description = "Explore 5900+ components, unique widgets, dashboards, and others with a lightning-fast experience on Figma.",
  previewButtonText = "Preview",
  buyButtonText = "Buy now",
  features = defaultFeatures,
  screenshotSrc = "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=700&fit=crop",
  statisticsLabel = "Statistics",
  statisticsHeadline = "Realize how comprehensive\nAlignUI Design System is!",
  statisticsSubheadline = "Here's a closer look at the numbers that define our design system. See how we measure up!",
  stats = defaultStats,
  onPreviewClick,
  onBuyClick,
}: AlignuiDesignSystemHeroProps) {
  return (
    <section className="relative w-full overflow-hidden">
      {/* Hero Section - Cream Background */}
      <div className="relative bg-[#FAF8F4]">
        {/* Ruler marks on left side - decorative */}
        <div className="absolute left-4 top-20 hidden h-[400px] w-px bg-gray-200 lg:block">
          {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
            <div
              key={i}
              className="absolute left-0 h-px w-2 bg-gray-300"
              style={{ top: `${i * 50}px` }}
            >
              <span className="absolute -left-6 top-1/2 -translate-y-1/2 text-[10px] text-gray-400">
                {i * 100}
              </span>
            </div>
          ))}
        </div>

        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
          {/* Hero Content */}
          <div className="relative grid gap-8 lg:grid-cols-2 lg:gap-12">
            {/* Left Side */}
            <div className="relative">
              {/* Ersad Annotation */}
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="absolute -right-4 -top-2 hidden lg:block"
              >
                <Annotation label="Ersad" color="green" direction="down-left" />
              </motion.div>

              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="mb-4"
              >
                <span className="inline-flex items-center gap-2 rounded-full border border-gray-300 bg-white px-3 py-1 text-sm text-gray-600">
                  <Sparkles className="h-3.5 w-3.5" />
                  {badge}
                </span>
              </motion.div>

              {/* Headline */}
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-4xl font-bold leading-tight tracking-tight text-gray-900 sm:text-5xl lg:text-[3.25rem]"
              >
                {headlineBlack}
                <br />
                <span className="text-[#ED6436]">{headlineAccent}</span>
              </motion.h1>
            </div>

            {/* Right Side */}
            <div className="relative flex flex-col justify-center">
              {/* Onur Annotation */}
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.7 }}
                className="absolute -bottom-8 right-8 hidden lg:block"
              >
                <Annotation label="Onur" color="purple" direction="down-left" />
              </motion.div>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="mb-6 max-w-md text-gray-600"
              >
                {description}
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="flex items-center gap-3"
              >
                <button
                  onClick={onPreviewClick}
                  className="inline-flex items-center gap-2 rounded-lg border border-gray-300 bg-white px-5 py-2.5 text-sm font-medium text-gray-800 transition-colors hover:bg-gray-50"
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    className="text-[#F24E1E]"
                  >
                    <path
                      d="M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5z"
                      fill="#F24E1E"
                    />
                    <path
                      d="M12 2h3.5a3.5 3.5 0 1 1 0 7H12V2z"
                      fill="#FF7262"
                    />
                    <path
                      d="M12 12.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 1 1-7 0z"
                      fill="#1ABCFE"
                    />
                    <path
                      d="M5 19.5A3.5 3.5 0 0 1 8.5 16H12v3.5a3.5 3.5 0 1 1-7 0z"
                      fill="#0ACF83"
                    />
                    <path
                      d="M5 12.5A3.5 3.5 0 0 1 8.5 9H12v7H8.5A3.5 3.5 0 0 1 5 12.5z"
                      fill="#A259FF"
                    />
                  </svg>
                  {previewButtonText}
                </button>
                <button
                  onClick={onBuyClick}
                  className="inline-flex items-center gap-2 rounded-lg bg-[#ED6436] px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-[#d85a30]"
                >
                  {buyButtonText}
                  <ChevronRight className="h-4 w-4" />
                </button>
              </motion.div>
            </div>
          </div>

          {/* Features Row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-12 grid gap-6 sm:grid-cols-3 lg:mt-16"
          >
            {features.map((feature, index) => (
              <div key={index} className="flex items-start gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white text-[#ED6436] shadow-sm">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-gray-900">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-gray-500">{feature.description}</p>
                </div>
              </div>
            ))}
          </motion.div>

          {/* Screenshot */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="relative mt-12 lg:mt-16"
          >
            <div className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-2xl shadow-gray-900/10">
              <img
                src={screenshotSrc}
                alt="AlignUI Design System Interface"
                className="w-full"
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Statistics Section - Dark Background */}
      <div className="relative bg-[#2C2C2C] py-16 lg:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
            {/* Left Side */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="mb-4"
              >
                <span className="inline-flex items-center gap-2 rounded-full border border-gray-600 bg-[#3a3a3a] px-3 py-1 text-sm text-gray-300">
                  <BarChart3 className="h-3.5 w-3.5" />
                  {statisticsLabel}
                </span>
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl"
              >
                {statisticsHeadline.split("\n").map((line, i) => (
                  <span key={i}>
                    {line}
                    {i < statisticsHeadline.split("\n").length - 1 && <br />}
                  </span>
                ))}
              </motion.h2>
            </div>

            {/* Right Side */}
            <div className="flex flex-col justify-center">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="mb-2 text-gray-400"
              >
                {statisticsSubheadline}
              </motion.p>
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="text-sm text-gray-500"
              >
                Constantly expanding{" "}
                <span className="inline-block animate-pulse">_</span>
              </motion.p>
            </div>
          </div>

          {/* Stats Grid */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4 lg:mt-12"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                className="rounded-xl border border-gray-700 bg-[#3a3a3a] p-5"
              >
                <div className="mb-3 text-gray-400">{stat.icon}</div>
                <p className="text-xs text-gray-500">{stat.label}</p>
                <p className="mt-1 text-2xl font-bold text-white">
                  {stat.value}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
