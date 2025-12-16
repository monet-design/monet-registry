"use client";

import { motion } from "motion/react";
import { Gauge, TrendingUp, Globe, Layers } from "lucide-react";

// ============================================================================
// CUSTOMIZATION
// ============================================================================

type ColorScheme = {
  accent: string;
  accentBg: string;
  background: string;
  text: string;
  textMuted: string;
  border: string;
  cardBg: string;
  cardDark: string;
};

const COLORS: Record<"light" | "dark", ColorScheme> = {
  light: {
    accent: "#00D26A", // Green accent color
    accentBg: "#E8FFF3",
    background: "#FFFFFF",
    text: "#000000",
    textMuted: "#6B7280",
    border: "#E5E7EB",
    cardBg: "#F9FAFB",
    cardDark: "#1A1A2E",
  },
  dark: {
    accent: "#00D26A",
    accentBg: "#0D3320",
    background: "#0A0A0A",
    text: "#FFFFFF",
    textMuted: "#9CA3AF",
    border: "#374151",
    cardBg: "#1F2937",
    cardDark: "#0F0F23",
  },
};

// ============================================================================
// FEATURE DATA
// ============================================================================

const FEATURES = [
  {
    icon: Gauge,
    label: "EXTREME PERFORMANCE",
    title: "Accelerated\ninfrastructure",
    description:
      "Run all your models and apps on high-performance CPUs, GPUs, and accelerators from AMD, Intel, and Nvidia.",
    visual: "performance",
  },
  {
    icon: TrendingUp,
    label: "AUTOMATIC SCALING",
    title: "Serverless\ncontainers",
    description:
      "Deploy production-grade containers with zero configuration — we scale to hundreds of servers and back to zero in seconds.",
    visual: "scaling",
  },
  {
    icon: Globe,
    label: "GLOBAL",
    title: "Available globally\nand locally",
    description:
      "Improve availability and get sub-100ms latency worldwide with over 50 locations. Pick between one and all locations.",
    visual: "global",
  },
  {
    icon: Layers,
    label: "ANY STACK",
    title: "Build and deploy\nanything",
    description:
      "Build APIs, distributed systems, or blazing-fast inference endpoints. Deploy your code, containers, or models with a Git push or CLI call.",
    visual: "stack",
  },
];

// ============================================================================
// VISUAL COMPONENTS
// ============================================================================

function PerformanceVisual({ colors }: { colors: ColorScheme }) {
  return (
    <div className="relative w-full h-48 flex items-center justify-center">
      {/* Performance Dashboard */}
      <div
        className="relative rounded-lg p-4 w-full max-w-[280px]"
        style={{ backgroundColor: colors.cardBg }}
      >
        {/* Gauge Display */}
        <div className="flex items-center justify-between mb-4">
          <div className="text-center">
            <p className="text-[10px] font-medium tracking-wider text-gray-500">
              REQUESTS/MIN.
            </p>
            <p className="text-xl font-bold" style={{ color: colors.text }}>
              4200
            </p>
          </div>
          <div className="text-center">
            <p className="text-[10px] font-medium tracking-wider text-gray-500">
              COLD START TIME
            </p>
            <p className="text-xl font-bold" style={{ color: colors.text }}>
              200MS
            </p>
          </div>
        </div>

        {/* GPU List */}
        <div className="space-y-2">
          <div
            className="rounded px-2 py-1 text-xs"
            style={{ backgroundColor: colors.accent + "20" }}
          >
            <span
              className="text-[10px] font-medium"
              style={{ color: colors.accent }}
            >
              High Speed
            </span>
            <p className="font-semibold text-[11px]" style={{ color: colors.text }}>
              8X H200 141GB VRAM
            </p>
          </div>
          <div
            className="rounded px-2 py-1"
            style={{ backgroundColor: colors.cardDark }}
          >
            <p className="font-semibold text-[11px] text-white">
              4X GAUDI 3 128GB VRAM
            </p>
          </div>
          <div
            className="rounded px-2 py-1"
            style={{ backgroundColor: colors.cardDark }}
          >
            <p className="font-semibold text-[11px] text-white">
              2X L40S 48GB VRAM
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function ScalingVisual({ colors }: { colors: ColorScheme }) {
  return (
    <div className="relative w-full h-48 flex items-center justify-center">
      <div
        className="relative rounded-lg p-4 w-full max-w-[220px]"
        style={{ backgroundColor: colors.cardDark }}
      >
        {/* Y Axis Labels */}
        <div className="flex">
          <div className="flex flex-col justify-between text-[9px] text-gray-400 mr-2 h-24">
            <span>105 GPUs</span>
            <span>50 GPUs</span>
            <span>0 GPU</span>
          </div>
          {/* Chart Area */}
          <div className="flex-1 relative h-24">
            <svg className="w-full h-full" viewBox="0 0 100 60">
              {/* Grid lines */}
              <line
                x1="0"
                y1="0"
                x2="100"
                y2="0"
                stroke="#374151"
                strokeWidth="0.5"
              />
              <line
                x1="0"
                y1="30"
                x2="100"
                y2="30"
                stroke="#374151"
                strokeWidth="0.5"
              />
              <line
                x1="0"
                y1="60"
                x2="100"
                y2="60"
                stroke="#374151"
                strokeWidth="0.5"
              />
              {/* Scaling line */}
              <path
                d="M0,55 L20,55 L25,30 L35,30 L40,10 L50,10 L55,25 L65,25 L70,45 L80,45 L90,55 L100,55"
                fill="none"
                stroke={colors.accent}
                strokeWidth="2"
              />
              {/* Data points */}
              <circle cx="40" cy="10" r="3" fill={colors.accent} />
              <circle cx="70" cy="45" r="3" fill={colors.accent} />
            </svg>
          </div>
        </div>
        {/* Label */}
        <div className="mt-3 pt-2 border-t border-gray-700">
          <p className="text-[10px] font-medium tracking-wider text-gray-400">
            AUTOSCALING
          </p>
          <p className="text-[8px] text-gray-500 mt-1">
            Automatically adjusted number of instances in<br />
            the region depending the load
          </p>
        </div>
      </div>
    </div>
  );
}

function GlobalVisual({ colors }: { colors: ColorScheme }) {
  const cities = [
    { name: "PARIS", latency: "10 MS", x: 48, y: 25 },
    { name: "TOKYO", latency: "12 MS", x: 82, y: 30 },
    { name: "SAN FRANCISCO", latency: "21 MS", x: 15, y: 35 },
    { name: "SINGAPORE", latency: "21 MS", x: 75, y: 55 },
  ];

  return (
    <div className="relative w-full h-48 flex flex-col items-center justify-center">
      {/* Datacenter count */}
      <div className="absolute top-0 right-4 text-right">
        <p className="text-[10px] text-gray-500">10 DATACENTERS</p>
      </div>

      {/* World Map with cities */}
      <div className="relative w-full max-w-[280px] h-28 mt-2">
        {/* Simplified world map dots */}
        <svg className="w-full h-full" viewBox="0 0 100 60">
          {/* Connection lines */}
          <line x1="48" y1="25" x2="15" y2="35" stroke={colors.accent} strokeWidth="0.5" opacity="0.5" />
          <line x1="48" y1="25" x2="82" y2="30" stroke={colors.accent} strokeWidth="0.5" opacity="0.5" />
          <line x1="82" y1="30" x2="75" y2="55" stroke={colors.accent} strokeWidth="0.5" opacity="0.5" />

          {/* City points */}
          {cities.map((city, i) => (
            <g key={i}>
              <circle cx={city.x} cy={city.y} r="2" fill={colors.accent} />
              <circle cx={city.x} cy={city.y} r="4" fill={colors.accent} opacity="0.3" />
            </g>
          ))}
        </svg>

        {/* City labels */}
        {cities.map((city, i) => (
          <div
            key={i}
            className="absolute text-[8px] whitespace-nowrap"
            style={{
              left: `${city.x}%`,
              top: `${city.y + 15}%`,
              transform: "translateX(-50%)",
            }}
          >
            <span style={{ color: colors.text }} className="font-medium">
              {city.name}
            </span>
            <span
              className="ml-1 px-1 rounded text-[7px]"
              style={{ backgroundColor: colors.accent + "30", color: colors.accent }}
            >
              {city.latency}
            </span>
          </div>
        ))}
      </div>

      {/* Terminal */}
      <div
        className="rounded-lg px-3 py-2 mt-4 w-full max-w-[250px]"
        style={{ backgroundColor: colors.cardDark }}
      >
        <p className="text-[9px] font-mono text-gray-300">
          <span style={{ color: colors.accent }}>$</span> koyeb app init go-global{" "}
          <span className="text-gray-500">--region</span>
          <br />
          &nbsp;&nbsp;sfo,tyo,par,sin{" "}
          <span className="text-gray-500">--docker</span> koyeb/demo
          <br />
          &nbsp;&nbsp;<span className="text-gray-500">--instance-type</span> medium
        </p>
      </div>
    </div>
  );
}

function StackVisual({ colors }: { colors: ColorScheme }) {
  const stacks = [
    { name: "Python", icon: "🐍" },
    { name: "Docker", icon: "🐳" },
    { name: "Go", icon: "Go" },
    { name: "Django", icon: "dj" },
    { name: "vLLM", icon: "vLLM" },
  ];

  return (
    <div className="relative w-full h-48 flex items-center justify-center">
      <div className="grid grid-cols-3 gap-3 max-w-[200px]">
        {stacks.map((stack, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.1, duration: 0.3 }}
            viewport={{ once: true }}
            className="w-14 h-14 rounded-lg flex items-center justify-center"
            style={{ backgroundColor: colors.cardBg, border: `1px solid ${colors.border}` }}
          >
            {stack.icon === "Go" ? (
              <span className="text-lg font-bold text-cyan-500">Go</span>
            ) : stack.icon === "dj" ? (
              <span className="text-lg font-bold text-green-700">dj</span>
            ) : stack.icon === "vLLM" ? (
              <span className="text-xs font-bold" style={{ color: colors.text }}>
                vLLM
              </span>
            ) : (
              <span className="text-2xl">{stack.icon}</span>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
}

// ============================================================================
// MAIN COMPONENT
// ============================================================================

interface SaaspoFeatureSectionsKoyebProps {
  mode?: "light" | "dark";
  title?: string;
  subtitle?: string;
  features?: typeof FEATURES;
}

export default function SaaspoFeatureSectionsKoyeb({
  mode = "light",
  title = "NEXT-GENERATION CLOUD EXPERIENCE",
  subtitle = "No ops, servers, or infrastructure management.",
  features = FEATURES,
}: SaaspoFeatureSectionsKoyebProps) {
  const colors = COLORS[mode];

  const renderVisual = (visual: string) => {
    switch (visual) {
      case "performance":
        return <PerformanceVisual colors={colors} />;
      case "scaling":
        return <ScalingVisual colors={colors} />;
      case "global":
        return <GlobalVisual colors={colors} />;
      case "stack":
        return <StackVisual colors={colors} />;
      default:
        return null;
    }
  };

  return (
    <section
      className="relative w-full py-20 px-4 md:px-8"
      style={{ backgroundColor: colors.background }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2
            className="text-3xl md:text-5xl lg:text-6xl font-black tracking-tight mb-4"
            style={{ color: colors.text }}
          >
            {title}
          </h2>
          <p
            className="text-lg md:text-xl"
            style={{ color: colors.textMuted }}
          >
            {subtitle}
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`relative px-6 py-8 ${
                index < features.length - 1
                  ? "lg:border-r"
                  : ""
              }`}
              style={{ borderColor: colors.border }}
            >
              {/* Label Badge */}
              <div className="flex items-center gap-2 mb-6">
                <div
                  className="w-6 h-6 rounded flex items-center justify-center"
                  style={{ backgroundColor: colors.accentBg }}
                >
                  <feature.icon
                    className="w-3.5 h-3.5"
                    style={{ color: colors.accent }}
                  />
                </div>
                <span
                  className="text-xs font-semibold tracking-wider px-2 py-1 rounded"
                  style={{
                    backgroundColor: colors.accentBg,
                    color: colors.accent,
                  }}
                >
                  {feature.label}
                </span>
              </div>

              {/* Visual */}
              {renderVisual(feature.visual)}

              {/* Title */}
              <h3
                className="text-xl md:text-2xl font-bold mt-6 mb-3 whitespace-pre-line"
                style={{ color: colors.text }}
              >
                {feature.title}
              </h3>

              {/* Description */}
              <p
                className="text-sm leading-relaxed"
                style={{ color: colors.textMuted }}
              >
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
