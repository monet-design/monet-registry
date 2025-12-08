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
    accent: "#171717",
    accentHover: "#262626",
  },
  dark: {
    accent: "#FAFAFA",
    accentHover: "#E5E5E5",
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
import { Trophy } from "lucide-react";

interface Commitment {
  name: string;
  time: string;
  initial: string;
}

interface VariantInfo {
  label: string;
  rate?: string;
  winner?: boolean;
}

interface TestimonialCard {
  title: string;
  description: string;
  metric: string;
  metricLabel: string;
  progress?: number;
  badge: string;
  badgeSubtitle?: string;
  variantA?: VariantInfo;
  variantB?: VariantInfo;
  recentCommits?: Commitment[];
  milestone?: string;
}

const testimonials: TestimonialCard[] = [
  {
    badge: "Validation Goal",
    badgeSubtitle: "Track until target reached",
    title: "Hit 100 signups in 7 days and validate demand",
    description: "Track until you hit your target. Validate real demand before building.",
    metric: "284 / 300",
    metricLabel: "Signups",
    progress: 94,
    milestone: "100 signups",
  },
  {
    badge: "A/B Test Results",
    badgeSubtitle: "Headline comparison",
    title: "A/B test to find 40%+ converting headline",
    description: "Validate messaging with real conversion data. Find which headlines actually work.",
    metric: "18.7%",
    metricLabel: "(142 conversions)",
    variantA: { label: "Launch faster", rate: "18.7%" },
    variantB: { label: "Validate demand first", winner: true },
  },
  {
    badge: "Pre-launch commitments",
    title: "Launch on Product Hunt with 100 committed users",
    description: "Secure 100 interested customers pre-launch and start strong.",
    metric: "487 / 500",
    metricLabel: "97% filled",
    progress: 97,
    recentCommits: [
      { name: "sarah@ex...", time: "1h ago", initial: "S" },
      { name: "john@star...", time: "2h ago", initial: "J" },
    ],
  },
];

interface LanorxComTestimonial5Props {
  mode?: "light" | "dark";
  heading?: string;
  subheading?: string;
  cards?: TestimonialCard[];
}

export default function LanorxComTestimonial5({
  mode = "light",
  heading = "How MicroSaaS builders validate",
  subheading = "Real builders, real results. How they got their first 100 signups with Lanorx.",
  cards = testimonials,
}: LanorxComTestimonial5Props) {
  const isDark = mode === "dark";

  return (
    <section
      className={`py-24 md:py-36 relative ${
        isDark
          ? "bg-gradient-to-b from-neutral-900 to-neutral-950"
          : "bg-gradient-to-b from-white to-neutral-50"
      }`}
    >
      <div className="max-w-5xl container mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2
            className={`text-3xl md:text-4xl font-light tracking-tight mb-4 ${
              isDark ? "text-white" : "text-neutral-900"
            }`}
          >
            {heading}
          </h2>
          <p
            className={`text-base font-light max-w-2xl mx-auto ${
              isDark ? "text-neutral-400" : "text-neutral-600"
            }`}
          >
            {subheading}
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {cards.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`p-6 rounded-2xl border ${
                isDark
                  ? "bg-neutral-900 border-neutral-800"
                  : "bg-white border-neutral-200"
              }`}
            >
              {/* Badge Header */}
              <div className="mb-4">
                <div
                  className={`text-sm font-medium mb-1 ${
                    isDark ? "text-white" : "text-neutral-900"
                  }`}
                >
                  {item.badge}
                </div>
                {item.badgeSubtitle && (
                  <div
                    className={`text-xs font-light ${
                      isDark ? "text-neutral-500" : "text-neutral-500"
                    }`}
                  >
                    {item.badgeSubtitle}
                  </div>
                )}
              </div>

              {/* Metric Display */}
              <div
                className={`p-4 rounded-xl mb-4 ${
                  isDark ? "bg-neutral-800" : "bg-neutral-50"
                }`}
              >
                {item.variantA ? (
                  // A/B Test Card
                  <div className="space-y-3">
                    <div
                      className={`p-4 rounded-xl border ${
                        isDark
                          ? "bg-neutral-900 border-neutral-700"
                          : "bg-white border-neutral-200"
                      }`}
                    >
                      <div
                        className={`text-xs font-light mb-1 ${
                          isDark ? "text-neutral-500" : "text-neutral-500"
                        }`}
                      >
                        Variant A
                      </div>
                      <p
                        className={`text-sm font-medium mb-2 ${
                          isDark ? "text-white" : "text-neutral-900"
                        }`}
                      >
                        &quot;{item.variantA.label}&quot;
                      </p>
                      <div className="flex items-baseline gap-2">
                        <span
                          className={`text-2xl font-light ${
                            isDark ? "text-white" : "text-neutral-900"
                          }`}
                        >
                          {item.variantA.rate}
                        </span>
                        <span
                          className={`text-xs font-light ${
                            isDark ? "text-neutral-500" : "text-neutral-500"
                          }`}
                        >
                          {item.metricLabel}
                        </span>
                      </div>
                    </div>
                    <div
                      className={`p-4 rounded-xl border ${
                        isDark
                          ? "bg-neutral-900 border-neutral-700"
                          : "bg-white border-neutral-200"
                      }`}
                    >
                      <div className="flex items-center justify-between mb-1">
                        <span
                          className={`text-xs font-light ${
                            isDark ? "text-neutral-500" : "text-neutral-500"
                          }`}
                        >
                          Variant B
                        </span>
                        {item.variantB?.winner && (
                          <span className="text-xs px-2 py-0.5 rounded-md bg-neutral-900 text-white font-medium">
                            Winner
                          </span>
                        )}
                      </div>
                      <p
                        className={`text-sm font-medium ${
                          isDark ? "text-white" : "text-neutral-500"
                        }`}
                      >
                        &quot;{item.variantB?.label}&quot;
                      </p>
                    </div>
                  </div>
                ) : item.recentCommits ? (
                  // Commitments Card
                  <div className="space-y-4">
                    <div>
                      <div className="flex items-baseline gap-3 mb-2">
                        <span
                          className={`text-3xl font-light tracking-tight ${
                            isDark ? "text-white" : "text-neutral-900"
                          }`}
                        >
                          {item.metric}
                        </span>
                        <span
                          className={`text-xs px-2 py-1 rounded-md font-medium ${
                            isDark
                              ? "bg-neutral-700 text-neutral-300"
                              : "bg-neutral-200 text-neutral-600"
                          }`}
                        >
                          {item.metricLabel}
                        </span>
                      </div>
                      <div
                        className={`h-2 rounded-full ${
                          isDark ? "bg-neutral-700" : "bg-neutral-200"
                        }`}
                      >
                        <div
                          className={`h-2 rounded-full ${
                            isDark ? "bg-white" : "bg-neutral-900"
                          }`}
                          style={{ width: `${item.progress}%` }}
                        />
                      </div>
                    </div>
                    <div>
                      <div
                        className={`text-xs font-light mb-3 ${
                          isDark ? "text-neutral-500" : "text-neutral-500"
                        }`}
                      >
                        Recent commitments
                      </div>
                      {item.recentCommits.map((commit, idx) => (
                        <div
                          key={idx}
                          className="flex items-center justify-between py-2"
                        >
                          <div className="flex items-center gap-2">
                            <div
                              className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-medium ${
                                isDark
                                  ? "bg-neutral-700 text-white"
                                  : "bg-neutral-200 text-neutral-600"
                              }`}
                            >
                              {commit.initial}
                            </div>
                            <span
                              className={`text-sm ${
                                isDark ? "text-neutral-400" : "text-neutral-700"
                              }`}
                            >
                              {commit.name}
                            </span>
                          </div>
                          <div className="flex items-center gap-2">
                            <span className="text-xs px-2 py-1 rounded-md bg-neutral-900 text-white font-medium">
                              Committed
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ) : (
                  // Standard Progress Card
                  <div>
                    <div className="mb-3">
                      <span
                        className={`text-3xl font-light tracking-tight ${
                          isDark ? "text-white" : "text-neutral-900"
                        }`}
                      >
                        {item.metric}
                      </span>
                    </div>
                    <div className="flex items-center justify-between mb-2">
                      <span
                        className={`text-xs font-light ${
                          isDark ? "text-neutral-400" : "text-neutral-500"
                        }`}
                      >
                        {item.metricLabel}
                      </span>
                      <span
                        className={`text-xs font-light ${
                          isDark ? "text-neutral-400" : "text-neutral-500"
                        }`}
                      >
                        {item.metric}
                      </span>
                    </div>
                    <div
                      className={`h-2 rounded-full ${
                        isDark ? "bg-neutral-700" : "bg-neutral-200"
                      }`}
                    >
                      <div
                        className={`h-2 rounded-full ${
                          isDark ? "bg-white" : "bg-neutral-900"
                        }`}
                        style={{ width: `${item.progress}%` }}
                      />
                    </div>
                  </div>
                )}
              </div>

              {/* Milestones section for first card */}
              {item.milestone && (
                <div className="mb-4">
                  <div
                    className={`text-xs font-light mb-2 ${
                      isDark ? "text-neutral-500" : "text-neutral-400"
                    }`}
                  >
                    Milestones
                  </div>
                  <div className="flex items-center gap-2">
                    <Trophy
                      className={`w-4 h-4 ${
                        isDark ? "text-neutral-500" : "text-neutral-400"
                      }`}
                    />
                    <span
                      className={`text-sm font-light ${
                        isDark ? "text-neutral-400" : "text-neutral-500"
                      }`}
                    >
                      {item.milestone}
                    </span>
                  </div>
                </div>
              )}

              {/* Title & Description */}
              <h3
                className={`text-base font-medium mb-2 leading-snug ${
                  isDark ? "text-white" : "text-neutral-900"
                }`}
              >
                {item.title}
              </h3>
              <p
                className={`text-sm font-light leading-relaxed ${
                  isDark ? "text-neutral-500" : "text-neutral-500"
                }`}
              >
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
