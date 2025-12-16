"use client";

// ============================================================================
// CUSTOMIZATION - 이 섹션의 값들을 수정하여 프로젝트에 맞게 조정하세요
// ============================================================================

/**
 * 커스텀 색상 (브랜드 컬러)
 */
const COLORS = {
  light: {
    accent: "#10B981", // Green accent for stats
    blue: "#3B82F6", // Blue for Claude
    teal: "#14B8A6", // Teal for Perplexity
    orange: "#F59E0B", // Orange for ChatGPT
    purple: "#8B5CF6", // Purple for Gemini
  },
  dark: {
    accent: "#10B981",
    blue: "#60A5FA",
    teal: "#2DD4BF",
    orange: "#FBBF24",
    purple: "#A78BFA",
  },
} as const;

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { motion } from "motion/react";
import { BarChart3, Eye, FileText, Sparkles } from "lucide-react";

interface SaaspoFeatureSectionsPromptwatchProps {
  mode?: "light" | "dark";
  title?: string;
  titleHighlight?: string;
  description?: string;
  brandWord?: string;
  actionableWord?: string;
}

// Sidebar menu items
const sidebarItems = [
  { icon: BarChart3, label: "Analytics", active: true },
  { icon: Eye, label: "Monitors", active: false },
  { icon: FileText, label: "Prompts", active: false },
  { icon: Sparkles, label: "AI Overviews", active: false, isNew: true },
];

// AI model traffic data
const trafficData = [
  { name: "Claude", value: 1289, color: "#3B82F6" },
  { name: "Gemini", value: 95, color: "#8B5CF6" },
  { name: "ChatGPT", value: 872, color: "#F59E0B" },
  { name: "Perplexity", value: 1187, color: "#14B8A6" },
];

// Bottom stats
const bottomStats = [
  {
    label: "Total Queries",
    value: "24,731",
    change: "+18% from last month",
    isGreen: true,
  },
  {
    label: "Website Visitors",
    value: "298,842",
    change: "+12% from last month",
    isGreen: false,
  },
  {
    label: "Avg. Time on Site",
    value: "56.8s",
    change: "+0.9s from last month",
    isGreen: true,
  },
  {
    label: "Top LLM",
    value: "ChatGPT",
    change: "58% market share",
    isGreen: false,
    icon: true,
  },
];

// Feature cards
const features = [
  {
    icon: BarChart3,
    title: "Analytics",
    description:
      "Monitor website traffic referred by AI models and track usage trends to gain insights and optimize your website for AI.",
  },
  {
    icon: Eye,
    title: "Monitors",
    description:
      "Monitor prompts in real time to see how users interact with AI and optimize responses for better engagement.",
  },
  {
    icon: FileText,
    title: "Prompts",
    description:
      "Test prompt variations to analyze interactions, performance, and brand visibility across all AI models.",
  },
  {
    icon: Sparkles,
    title: "AI Overviews",
    description:
      "Monitor and analyze Google AI Overviews to understand how your content appears in featured AI-generated summaries.",
  },
];

// Line chart component
function LineChart() {
  // Generate smooth chart paths for each AI model
  const generatePath = (
    baseY: number,
    variance: number,
    color: string,
    delay: number
  ) => {
    const points = [];
    for (let i = 0; i <= 10; i++) {
      const x = i * 60;
      const y =
        baseY - Math.sin(i * 0.5 + delay) * variance - i * (15 - variance * 2);
      points.push(`${i === 0 ? "M" : "L"} ${x} ${y}`);
    }
    return { d: points.join(" "), color };
  };

  const paths = [
    generatePath(180, 15, "#3B82F6", 0), // Claude - blue
    generatePath(180, 10, "#8B5CF6", 1), // Gemini - purple
    generatePath(180, 12, "#F59E0B", 2), // ChatGPT - orange
    generatePath(180, 18, "#14B8A6", 0.5), // Perplexity - teal
  ];

  return (
    <svg
      viewBox="0 0 600 200"
      className="w-full h-32 mt-4"
      preserveAspectRatio="none"
    >
      {/* Grid lines */}
      {[0, 1, 2, 3].map((i) => (
        <line
          key={i}
          x1="0"
          y1={50 + i * 50}
          x2="600"
          y2={50 + i * 50}
          stroke="#E5E7EB"
          strokeWidth="1"
        />
      ))}
      {/* Chart lines */}
      {paths.map((path, index) => (
        <motion.path
          key={index}
          d={path.d}
          fill="none"
          stroke={path.color}
          strokeWidth="2.5"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, delay: index * 0.2, ease: "easeOut" }}
        />
      ))}
    </svg>
  );
}

export default function SaaspoFeatureSectionsPromptwatch({
  mode = "light",
  title = "The platform for your AI",
  titleHighlight = "monitoring and optimization",
  description = "Track how your {brand} appears across all major AI models with comprehensive monitoring tools that provide {actionable} insights.",
  brandWord = "brand",
  actionableWord = "actionable",
}: SaaspoFeatureSectionsPromptwatchProps) {
  // Format description with bold words
  const formattedDescription = description
    .replace(`{brand}`, `<strong class="font-semibold text-gray-900">${brandWord}</strong>`)
    .replace(`{actionable}`, `<strong class="font-semibold text-gray-900">${actionableWord}</strong>`);

  return (
    <section className="relative w-full bg-white py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <motion.div
          className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 max-w-xl leading-tight">
            {title}
            <br />
            <span className="text-gray-400">{titleHighlight}</span>
          </h2>
          <p
            className="text-gray-600 max-w-md text-base lg:text-lg leading-relaxed lg:pt-2"
            dangerouslySetInnerHTML={{ __html: formattedDescription }}
          />
        </motion.div>

        {/* Dashboard UI */}
        <motion.div
          className="relative rounded-2xl border border-gray-200 bg-white shadow-xl overflow-hidden"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="flex">
            {/* Sidebar */}
            <div className="hidden md:flex flex-col w-48 border-r border-gray-100 p-4">
              <span className="text-sm font-medium text-gray-900 mb-4">
                Dashboard
              </span>
              <nav className="space-y-1">
                {sidebarItems.map((item, index) => (
                  <button
                    key={index}
                    className={`flex items-center gap-3 w-full px-3 py-2 text-sm rounded-lg transition-colors ${
                      item.active
                        ? "bg-gray-100 text-gray-900"
                        : "text-gray-600 hover:bg-gray-50"
                    }`}
                  >
                    <item.icon className="w-4 h-4" />
                    <span>{item.label}</span>
                    {item.isNew && (
                      <span className="ml-auto text-xs font-medium text-emerald-600">
                        New
                      </span>
                    )}
                  </button>
                ))}
              </nav>
            </div>

            {/* Main Content */}
            <div className="flex-1 p-6">
              {/* Dashboard Header */}
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-amber-100 flex items-center justify-center">
                    <span className="text-lg">🦁</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">
                      Miro AI Traffic Analytics
                    </h3>
                    <p className="text-sm text-gray-500">
                      Monitor traffic from LLM models
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                  <span>89 active visitors</span>
                </div>
              </div>

              {/* Top Stats */}
              <div className="flex flex-wrap gap-6 mt-4 mb-6 justify-end text-sm">
                <div>
                  <span className="text-gray-500">Views</span>{" "}
                  <span className="font-semibold text-gray-900">1.2M</span>
                </div>
                <div>
                  <span className="text-gray-500">Bounce</span>{" "}
                  <span className="font-semibold text-emerald-600">32%</span>
                </div>
                <div>
                  <span className="text-gray-500">Conv</span>{" "}
                  <span className="font-semibold text-emerald-600">4.8%</span>
                </div>
                <div>
                  <span className="text-gray-500">Duration</span>{" "}
                  <span className="font-semibold text-gray-900">3m 42s</span>
                </div>
              </div>

              {/* Chart Area */}
              <div className="bg-gray-50 rounded-xl p-4 border border-gray-100">
                {/* Legend */}
                <div className="flex flex-wrap gap-x-6 gap-y-2 mb-2">
                  {trafficData.map((item, index) => (
                    <div key={index} className="flex items-center gap-2 text-sm">
                      <span
                        className="w-2 h-2 rounded-full"
                        style={{ backgroundColor: item.color }}
                      ></span>
                      <span className="text-gray-600">{item.name}</span>
                      <span className="font-medium text-gray-900 ml-2">
                        {item.value.toLocaleString()}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Line Chart */}
                <LineChart />
              </div>

              {/* Bottom Stats Cards */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
                {bottomStats.map((stat, index) => (
                  <motion.div
                    key={index}
                    className="bg-white rounded-xl border border-gray-200 p-4"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  >
                    <p className="text-sm text-gray-500">{stat.label}</p>
                    <div className="flex items-center gap-2 mt-1">
                      {stat.icon && (
                        <span className="text-lg">🤖</span>
                      )}
                      <p
                        className={`text-xl font-bold ${
                          stat.isGreen ? "text-emerald-600" : "text-gray-900"
                        }`}
                      >
                        {stat.value}
                      </p>
                    </div>
                    <p className="text-xs text-gray-400 mt-1">{stat.change}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="space-y-3"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
            >
              <div className="flex items-center gap-2">
                <feature.icon className="w-5 h-5 text-gray-700" />
                <h3 className="font-semibold text-gray-900">{feature.title}</h3>
              </div>
              <p className="text-sm text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
