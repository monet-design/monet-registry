"use client";

// ============================================================================
// CUSTOMIZATION - 이 섹션의 값들을 수정하여 프로젝트에 맞게 조정하세요
// ============================================================================

/**
 * 커스텀 색상 (브랜드 컬러)
 */
const COLORS = {
  light: {
    // Dark teal green background for card image
    darkGreen: "#07292a",
    // Lime green for side card accent
    lime: "#cee492",
    // Mint gradient colors
    mintStart: "#58fd9f",
    mintEnd: "#3cffbb",
    // Purple/lavender for icon
    purple: "#d3a5ed",
    // Off-white card background
    cardBg: "#f7f9f4",
    // Dark teal for italic text
    accent: "#0a1616",
  },
  dark: {
    darkGreen: "#07292a",
    lime: "#cee492",
    mintStart: "#58fd9f",
    mintEnd: "#3cffbb",
    purple: "#d3a5ed",
    cardBg: "#1a1a1a",
    accent: "#3cffbb",
  },
} as const;

/**
 * 이미지 에셋
 */
const IMAGES = {} as const;

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { motion } from "motion/react";
import { useState } from "react";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";

interface Tab {
  id: string;
  label: string;
}

interface FeatureCard {
  id: string;
  category: string;
  title: string;
  link: string;
}

interface SaaspoFeatureSectionsAriaProps {
  mode?: "light" | "dark";
  title?: string;
  titleAccent?: string;
  subtitle?: string;
  tabs?: Tab[];
  features?: FeatureCard[];
}

const defaultTabs: Tab[] = [
  { id: "payments", label: "Payments" },
  { id: "invoice", label: "Invoice Financing" },
  { id: "protection", label: "Protection" },
  { id: "risk", label: "Risk Scoring" },
];

const defaultFeatures: FeatureCard[] = [
  {
    id: "1",
    category: "Payments Infrastructure",
    title: "Custom-build your B2B payment experience",
    link: "#",
  },
  {
    id: "2",
    category: "Invoice Financing",
    title: "Embed flexible financing options",
    link: "#",
  },
  {
    id: "3",
    category: "Protection",
    title: "Secure every transaction with fraud protection",
    link: "#",
  },
  {
    id: "4",
    category: "Risk Scoring",
    title: "Assess risk in real-time with AI scoring",
    link: "#",
  },
];

// Custom icon component representing the Aria logo
function AriaIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 80 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <defs>
        <linearGradient id="iconGradient" x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#d3a5ed" />
          <stop offset="50%" stopColor="#a0c9cb" />
          <stop offset="100%" stopColor="#58fd9f" />
        </linearGradient>
      </defs>
      <rect x="8" y="8" width="64" height="64" rx="16" fill="url(#iconGradient)" />
      <path
        d="M40 24L28 40L40 56L52 40L40 24Z"
        fill="#07292a"
        stroke="#07292a"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M40 30L32 40L40 50L48 40L40 30Z"
        fill="none"
        stroke="url(#iconGradient)"
        strokeWidth="2"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function SaaspoFeatureSectionsAria({
  mode = "light",
  title = "Money movement infrastructure",
  titleAccent = "B2B marketplaces",
  subtitle = "Stop building, start selling. Aria gives you the tools, financing, and risk protection to launch your dream product. All in one place.",
  tabs = defaultTabs,
  features = defaultFeatures,
}: SaaspoFeatureSectionsAriaProps) {
  const colors = COLORS[mode];
  const [activeTab, setActiveTab] = useState(tabs[0]?.id || "payments");
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % features.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + features.length) % features.length);
  };

  return (
    <section
      className={`relative w-full overflow-hidden py-20 ${
        mode === "dark" ? "bg-gray-950" : "bg-white"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <h2
            className={`text-4xl font-medium tracking-tight sm:text-5xl lg:text-6xl ${
              mode === "dark" ? "text-white" : "text-gray-900"
            }`}
          >
            {title}
            <br />
            for{" "}
            <span
              className="italic"
              style={{ color: mode === "dark" ? colors.accent : colors.accent }}
            >
              {titleAccent}
            </span>
          </h2>
          <p
            className={`mx-auto mt-6 max-w-2xl text-lg ${
              mode === "dark" ? "text-gray-400" : "text-gray-600"
            }`}
          >
            {subtitle}
          </p>
        </motion.div>

        {/* Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
          viewport={{ once: true }}
          className="mb-12 flex justify-center"
        >
          <div
            className={`inline-flex gap-1 rounded-full p-1 ${
              mode === "dark"
                ? "border border-gray-800 bg-gray-900"
                : "border border-gray-200 bg-white"
            }`}
          >
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`relative rounded-full px-5 py-2.5 text-sm font-medium transition-all duration-300 ${
                  activeTab === tab.id
                    ? mode === "dark"
                      ? "bg-white text-gray-900"
                      : "bg-gray-900 text-white"
                    : mode === "dark"
                    ? "text-gray-400 hover:text-white"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Feature Cards Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="flex items-center gap-6 overflow-hidden">
            {/* Previous card preview (partial) */}
            <div className="hidden w-24 flex-shrink-0 lg:block">
              <div
                className="h-[450px] rounded-3xl"
                style={{ backgroundColor: colors.lime }}
              />
            </div>

            {/* Main visible cards */}
            <div className="flex flex-1 gap-6 overflow-hidden">
              {features.slice(currentIndex, currentIndex + 2).map((feature, index) => (
                <motion.div
                  key={feature.id}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex min-w-0 flex-1 flex-col gap-6 overflow-hidden rounded-3xl p-8 lg:flex-row"
                  style={{ backgroundColor: colors.cardBg }}
                >
                  {/* Text Content */}
                  <div className="flex flex-1 flex-col justify-center">
                    <span
                      className={`text-sm font-medium ${
                        mode === "dark" ? "text-gray-400" : "text-gray-600"
                      }`}
                    >
                      {feature.category}
                    </span>
                    <h3
                      className={`mt-3 text-2xl font-medium leading-snug lg:text-3xl ${
                        mode === "dark" ? "text-white" : "text-gray-900"
                      }`}
                    >
                      {feature.title}
                    </h3>
                    <a
                      href={feature.link}
                      className={`mt-6 inline-flex items-center gap-2 text-sm font-medium ${
                        mode === "dark" ? "text-white" : "text-gray-900"
                      }`}
                    >
                      <span
                        className="flex h-6 w-6 items-center justify-center rounded-full"
                        style={{
                          backgroundColor:
                            mode === "dark" ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.05)",
                        }}
                      >
                        <ArrowRight className="h-3 w-3" />
                      </span>
                      Learn more
                    </a>
                  </div>

                  {/* Icon Card (only show on first card) */}
                  {index === 0 && (
                    <div
                      className="flex aspect-square flex-shrink-0 items-start justify-center overflow-hidden rounded-2xl p-6 lg:h-[320px] lg:w-[380px]"
                      style={{ backgroundColor: colors.darkGreen }}
                    >
                      <div className="relative">
                        {/* Hanging line */}
                        <div
                          className="absolute left-1/2 top-0 h-8 w-px -translate-x-1/2 -translate-y-full"
                          style={{
                            background: `linear-gradient(to bottom, transparent, ${colors.mintStart})`,
                          }}
                        />
                        <AriaIcon className="h-20 w-20 drop-shadow-xl" />
                      </div>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>

            {/* Next card preview (partial) */}
            <div className="hidden w-24 flex-shrink-0 lg:block">
              <div
                className="h-[450px] rounded-3xl"
                style={{ backgroundColor: colors.cardBg }}
              />
            </div>
          </div>

          {/* Navigation Arrows */}
          <div className="mt-8 flex justify-center gap-3">
            <button
              onClick={prevSlide}
              className={`flex h-10 w-10 items-center justify-center rounded-full border transition-colors ${
                mode === "dark"
                  ? "border-gray-700 text-gray-400 hover:border-gray-600 hover:text-white"
                  : "border-gray-300 text-gray-600 hover:border-gray-400 hover:text-gray-900"
              }`}
              aria-label="Previous feature"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={nextSlide}
              className={`flex h-10 w-10 items-center justify-center rounded-full border transition-colors ${
                mode === "dark"
                  ? "border-gray-700 text-gray-400 hover:border-gray-600 hover:text-white"
                  : "border-gray-300 text-gray-600 hover:border-gray-400 hover:text-gray-900"
              }`}
              aria-label="Next feature"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
