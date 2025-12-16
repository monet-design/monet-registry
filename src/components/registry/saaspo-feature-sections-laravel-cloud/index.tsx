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
    accent: "#1B7FF0",
    accentHover: "#1565C0",
    accentLight: "#EFF6FF",
  },
  dark: {
    accent: "#60A5FA",
    accentHover: "#3B82F6",
    accentLight: "#1E3A5F",
  },
} as const;

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import "./font.css";
import { motion } from "motion/react";
import {
  Layers,
  Moon,
  DollarSign,
  Zap,
  Globe,
} from "lucide-react";

interface SaaspoFeatureSectionsLaravelCloudProps {
  mode?: "light" | "dark";
  title?: string;
  subtitle?: string;
  autoscalingTitle?: string;
  autoscalingDescription?: string;
  hibernationTitle?: string;
  hibernationDescription?: string;
  features?: {
    icon: "cost" | "performance" | "regions";
    title: string;
    description: string;
  }[];
}

export default function SaaspoFeatureSectionsLaravelCloud({
  mode = "light",
  title = "Scale up and down in your sleep",
  subtitle = "Cloud scales your app automatically, so you can handle any amount of traffic without breaking a sweat, or the bank.",
  autoscalingTitle = "Autoscaling",
  autoscalingDescription = "Configure your compute clusters and Cloud automatically scales horizontally within your predefined limits. You only pay for what you use.",
  hibernationTitle = "Hibernation",
  hibernationDescription = "Hibernation kicks in to save costs when requests are low. Your app will wake up automatically when traffic returns.",
  features = [
    {
      icon: "cost",
      title: "Cost optimized options",
      description:
        "Keep your costs low with hibernating apps and databases and lightweight compute sizes.",
    },
    {
      icon: "performance",
      title: "Performance optimized options",
      description:
        "Need more power? Upgrade to larger compute sizes designed for heavy utilization.",
    },
    {
      icon: "regions",
      title: "Multiple regions",
      description:
        "Choose a region close to your users to reduce latency and improve reliability.",
    },
  ],
}: SaaspoFeatureSectionsLaravelCloudProps) {
  const colors = COLORS[mode];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const getFeatureIcon = (icon: string) => {
    switch (icon) {
      case "cost":
        return <DollarSign className="w-5 h-5" />;
      case "performance":
        return <Zap className="w-5 h-5" />;
      case "regions":
        return <Globe className="w-5 h-5" />;
      default:
        return <DollarSign className="w-5 h-5" />;
    }
  };

  return (
    <section
      className={`relative w-full py-20 md:py-28 ${
        mode === "dark" ? "bg-gray-950" : "bg-white"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 md:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Header */}
          <motion.div variants={itemVariants} className="mb-16 max-w-xl">
            <h2
              className={`font-instrument-serif italic text-4xl md:text-5xl mb-6 ${
                mode === "dark" ? "text-white" : "text-gray-900"
              }`}
            >
              {title}
            </h2>
            <p
              className={`text-lg leading-relaxed ${
                mode === "dark" ? "text-gray-400" : "text-gray-600"
              }`}
            >
              {subtitle}
            </p>
          </motion.div>

          {/* Two Feature Cards */}
          <div className="grid md:grid-cols-2 gap-12 md:gap-16 mb-20">
            {/* Autoscaling */}
            <motion.div variants={itemVariants}>
              <div className="flex items-center gap-3 mb-4">
                <div
                  className={`${
                    mode === "dark" ? "text-gray-300" : "text-gray-700"
                  }`}
                >
                  <Layers className="w-5 h-5" />
                </div>
                <h3
                  className={`text-lg font-semibold ${
                    mode === "dark" ? "text-white" : "text-gray-900"
                  }`}
                >
                  {autoscalingTitle}
                </h3>
              </div>
              <p
                className={`text-sm leading-relaxed mb-6 ${
                  mode === "dark" ? "text-gray-400" : "text-gray-600"
                }`}
              >
                {autoscalingDescription}
              </p>

              {/* Autoscaling UI Card */}
              <div
                className={`rounded-xl p-6 ${
                  mode === "dark"
                    ? "bg-gray-900 border border-gray-800"
                    : "bg-gray-50 border border-gray-100"
                }`}
              >
                {/* Unlimited Option */}
                <div className="flex items-start justify-between mb-1">
                  <div className="flex items-start gap-3">
                    <div
                      className={`w-4 h-4 rounded-full border-2 mt-0.5 ${
                        mode === "dark"
                          ? "border-gray-600"
                          : "border-gray-300"
                      }`}
                    />
                    <div>
                      <p
                        className={`font-medium text-sm ${
                          mode === "dark" ? "text-gray-300" : "text-gray-700"
                        }`}
                      >
                        Unlimited
                      </p>
                      <p
                        className={`text-xs mt-1 ${
                          mode === "dark" ? "text-gray-500" : "text-gray-500"
                        }`}
                      >
                        Automatically scale replicas to handle any level of
                        demand.
                      </p>
                    </div>
                  </div>
                  <span
                    className="text-xs font-medium px-2.5 py-1 rounded-full"
                    style={{
                      color: colors.accent,
                      backgroundColor: colors.accentLight,
                    }}
                  >
                    Recommended
                  </span>
                </div>

                {/* Custom Scale Range Option */}
                <div className="mt-6">
                  <div className="flex items-start gap-3">
                    <div
                      className="w-4 h-4 rounded-full mt-0.5 flex items-center justify-center"
                      style={{ backgroundColor: colors.accent }}
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-white" />
                    </div>
                    <div className="flex-1">
                      <p
                        className={`font-medium text-sm ${
                          mode === "dark" ? "text-white" : "text-gray-900"
                        }`}
                      >
                        Custom scale range
                      </p>
                      <p
                        className={`text-xs mt-1 ${
                          mode === "dark" ? "text-gray-500" : "text-gray-500"
                        }`}
                      >
                        Set minimum and maximum replica counts.
                      </p>

                      {/* Slider */}
                      <div className="mt-4">
                        <div className="relative h-2">
                          <div
                            className={`absolute inset-0 rounded-full ${
                              mode === "dark" ? "bg-gray-700" : "bg-gray-200"
                            }`}
                          />
                          <div
                            className="absolute left-[33%] right-[5%] h-2 rounded-full"
                            style={{ backgroundColor: colors.accent }}
                          />
                          <div
                            className="absolute w-4 h-4 rounded-full border-2 border-white shadow-md top-1/2 -translate-y-1/2"
                            style={{
                              left: "calc(33% - 8px)",
                              backgroundColor: colors.accent,
                            }}
                          />
                          <div
                            className="absolute w-4 h-4 rounded-full border-2 border-white shadow-md top-1/2 -translate-y-1/2"
                            style={{
                              left: "calc(95% - 8px)",
                              backgroundColor: colors.accent,
                            }}
                          />
                        </div>
                        <div className="flex justify-between mt-3">
                          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                            <span
                              key={num}
                              className={`text-xs ${
                                num === 5 || num === 10
                                  ? mode === "dark"
                                    ? "text-white font-medium"
                                    : "text-gray-900 font-medium"
                                  : mode === "dark"
                                  ? "text-gray-500"
                                  : "text-gray-400"
                              }`}
                            >
                              {num}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* No Autoscaling Option */}
                <div className="mt-6">
                  <div className="flex items-start gap-3">
                    <div
                      className={`w-4 h-4 rounded-full border-2 mt-0.5 ${
                        mode === "dark"
                          ? "border-gray-700"
                          : "border-gray-200"
                      }`}
                    />
                    <div>
                      <p
                        className={`text-sm ${
                          mode === "dark" ? "text-gray-500" : "text-gray-400"
                        }`}
                      >
                        No autoscaling
                      </p>
                      <p
                        className={`text-xs mt-1 ${
                          mode === "dark" ? "text-gray-600" : "text-gray-400"
                        }`}
                      >
                        Run on a single replica without autoscaling.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Hibernation */}
            <motion.div variants={itemVariants}>
              <div className="flex items-center gap-3 mb-4">
                <div
                  className={`${
                    mode === "dark" ? "text-gray-300" : "text-gray-700"
                  }`}
                >
                  <Moon className="w-5 h-5" />
                </div>
                <h3
                  className={`text-lg font-semibold ${
                    mode === "dark" ? "text-white" : "text-gray-900"
                  }`}
                >
                  {hibernationTitle}
                </h3>
              </div>
              <p
                className={`text-sm leading-relaxed mb-6 ${
                  mode === "dark" ? "text-gray-400" : "text-gray-600"
                }`}
              >
                {hibernationDescription}
              </p>

              {/* Hibernation UI Card */}
              <div
                className={`rounded-xl p-6 ${
                  mode === "dark"
                    ? "bg-gray-900 border border-gray-800"
                    : "bg-gray-50 border border-gray-100"
                }`}
              >
                {/* Mock Dashboard UI */}
                <div
                  className={`rounded-lg overflow-hidden ${
                    mode === "dark"
                      ? "bg-gray-800 border border-gray-700"
                      : "bg-white border border-gray-200"
                  }`}
                >
                  {/* Header bar */}
                  <div
                    className={`flex items-center gap-2 px-4 py-3 border-b ${
                      mode === "dark"
                        ? "border-gray-700"
                        : "border-gray-100"
                    }`}
                  >
                    <div
                      className={`w-6 h-6 rounded ${
                        mode === "dark" ? "bg-gray-700" : "bg-gray-100"
                      }`}
                    />
                    <span
                      className={`text-xs ${
                        mode === "dark" ? "text-gray-500" : "text-gray-400"
                      }`}
                    >
                      /
                    </span>
                    <div
                      className={`w-3 h-3 rounded-full ${
                        mode === "dark" ? "bg-blue-500" : "bg-blue-500"
                      }`}
                    />
                    <span
                      className={`text-xs italic ${
                        mode === "dark" ? "text-gray-400" : "text-gray-500"
                      }`}
                    >
                      production
                    </span>
                    <svg
                      className={`w-3 h-3 ${
                        mode === "dark" ? "text-gray-500" : "text-gray-400"
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </div>

                  {/* Navigation tabs */}
                  <div className="flex items-center gap-6 px-4 py-3 relative">
                    <span
                      className={`text-xs italic ${
                        mode === "dark" ? "text-gray-500" : "text-gray-400"
                      }`}
                    >
                      Commands
                    </span>
                    <span
                      className={`text-xs italic ${
                        mode === "dark" ? "text-gray-500" : "text-gray-400"
                      }`}
                    >
                      Logs
                    </span>
                    <span
                      className={`text-xs italic ${
                        mode === "dark" ? "text-gray-500" : "text-gray-400"
                      }`}
                    >
                      Metrics
                    </span>

                    {/* Hibernation Popup */}
                    <div
                      className={`absolute right-2 top-0 rounded-lg shadow-xl p-4 z-10 min-w-[200px] ${
                        mode === "dark"
                          ? "bg-gray-900 border border-gray-700"
                          : "bg-white border border-gray-200"
                      }`}
                    >
                      <div className="flex items-center gap-2 mb-2">
                        <div
                          className="w-5 h-5 rounded-full flex items-center justify-center"
                          style={{ backgroundColor: colors.accent }}
                        >
                          <Moon className="w-3 h-3 text-white" />
                        </div>
                        <span
                          className={`text-xs font-medium italic ${
                            mode === "dark" ? "text-white" : "text-gray-900"
                          }`}
                        >
                          Environment hibernating
                        </span>
                      </div>
                      <p
                        className={`text-xs italic leading-relaxed ${
                          mode === "dark" ? "text-gray-400" : "text-gray-600"
                        }`}
                      >
                        Your environment has been
                        <br />
                        scaled to zero for{" "}
                        <span
                          className={`font-medium ${
                            mode === "dark" ? "text-white" : "text-gray-900"
                          }`}
                        >
                          26hrs 32mins
                        </span>
                        .
                      </p>
                      <button
                        className="mt-3 text-xs font-medium"
                        style={{ color: colors.accent }}
                      >
                        Wake up
                      </button>
                    </div>
                  </div>

                  {/* Placeholder content area */}
                  <div className="px-4 pb-4">
                    <div
                      className={`h-16 rounded ${
                        mode === "dark" ? "bg-gray-700/30" : "bg-gray-50"
                      }`}
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Bottom Three Features */}
          <motion.div
            variants={containerVariants}
            className="grid md:grid-cols-3 gap-8 md:gap-12 pt-8 border-t border-gray-100 dark:border-gray-800"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="flex flex-col"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div
                    className={`${
                      mode === "dark" ? "text-gray-400" : "text-gray-600"
                    }`}
                  >
                    {getFeatureIcon(feature.icon)}
                  </div>
                  <h4
                    className={`font-semibold text-sm ${
                      mode === "dark" ? "text-white" : "text-gray-900"
                    }`}
                  >
                    {feature.title}
                  </h4>
                </div>
                <p
                  className={`text-sm leading-relaxed ${
                    mode === "dark" ? "text-gray-400" : "text-gray-600"
                  }`}
                >
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
