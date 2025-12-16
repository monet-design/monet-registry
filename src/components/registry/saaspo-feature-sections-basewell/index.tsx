"use client";

import { motion } from "motion/react";
import { Download, Loader2, Search, X, ChevronDown } from "lucide-react";

// ============================================================================
// CUSTOMIZATION
// ============================================================================

const COLORS = {
  light: {
    accent: "#7c5cff", // Purple for chart
    blue: "#3b82f6", // Blue for bubbles
    yellow: "#fef3c7", // Tag background
    yellowText: "#d97706",
    blueTag: "#dbeafe",
    blueTagText: "#2563eb",
  },
  dark: {
    accent: "#a78bfa",
    blue: "#60a5fa",
    yellow: "#422006",
    yellowText: "#fbbf24",
    blueTag: "#1e3a5f",
    blueTagText: "#93c5fd",
  },
} as const;

const CHART_DATA = [
  { label: "Guides", value: 102, color: "#7c5cff" },
  { label: "Pages", value: 156, color: "#fbbf24" },
  { label: "Resources", value: 64, color: "#10b981" },
  { label: "Links", value: 42, color: "#f97316" },
  { label: "Certifications", value: 22, color: "#3b82f6" },
];

const AVATARS = [
  { id: 1, name: "User 1", selected: true },
  { id: 2, name: "User 2", selected: true },
  { id: 3, name: "User 3", selected: true },
  { id: 4, name: "User 4", selected: true },
  { id: 5, name: "User 5", selected: false },
  { id: 6, name: "User 6", selected: false },
  { id: 7, name: "User 7", selected: false },
  { id: 8, name: "User 8", selected: false },
  { id: 9, name: "User 9", selected: false },
  { id: 10, name: "User 10", selected: false },
];

const FEATURE_CARDS = [
  {
    title: "Focus on what you need",
    description: "View company-wide reporting or drill down to specific groups",
  },
  {
    title: "Filter in natural language",
    description: "Generate learning reports by asking, not clicking",
  },
  {
    title: "Export instantly",
    description: "Easily bring learning data to other tools",
  },
  {
    title: "See where teams need help",
    description: "Quickly find bottlenecks and blind spots across every department",
  },
];

// ============================================================================
// COMPONENTS
// ============================================================================

function LineChart() {
  // Generate smooth wave path
  const width = 700;
  const height = 120;
  const points = [
    { x: 0, y: 60 },
    { x: 50, y: 40 },
    { x: 100, y: 55 },
    { x: 150, y: 30 },
    { x: 200, y: 50 },
    { x: 250, y: 25 },
    { x: 300, y: 45 },
    { x: 350, y: 35 },
    { x: 400, y: 55 },
    { x: 450, y: 40 },
    { x: 500, y: 60 },
    { x: 550, y: 45 },
    { x: 600, y: 35 },
    { x: 650, y: 50 },
    { x: 700, y: 40 },
  ];

  // Create smooth curve path
  const pathData = points.reduce((acc, point, i) => {
    if (i === 0) return `M ${point.x} ${point.y}`;
    const prev = points[i - 1];
    const cpx = (prev.x + point.x) / 2;
    return `${acc} C ${cpx} ${prev.y}, ${cpx} ${point.y}, ${point.x} ${point.y}`;
  }, "");

  // Create filled area path
  const areaPath = `${pathData} L ${width} ${height} L 0 ${height} Z`;

  return (
    <svg viewBox={`0 0 ${width} ${height}`} className="w-full h-32">
      <defs>
        <linearGradient id="chartGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#7c5cff" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#7c5cff" stopOpacity="0.05" />
        </linearGradient>
      </defs>
      <path d={areaPath} fill="url(#chartGradient)" />
      <path
        d={pathData}
        fill="none"
        stroke="#7c5cff"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function BubbleChart() {
  const bubbles = [
    { cx: 30, cy: 50, r: 8 },
    { cx: 55, cy: 35, r: 12 },
    { cx: 85, cy: 55, r: 6 },
    { cx: 110, cy: 30, r: 14 },
    { cx: 140, cy: 50, r: 10 },
    { cx: 165, cy: 25, r: 16 },
    { cx: 195, cy: 45, r: 8 },
    { cx: 220, cy: 60, r: 12 },
    { cx: 250, cy: 35, r: 6 },
    { cx: 275, cy: 50, r: 14 },
    { cx: 55, cy: 70, r: 10 },
    { cx: 85, cy: 85, r: 8 },
    { cx: 125, cy: 75, r: 12 },
    { cx: 160, cy: 65, r: 6 },
    { cx: 195, cy: 80, r: 10 },
    { cx: 230, cy: 75, r: 8 },
    { cx: 260, cy: 65, r: 6 },
  ];

  return (
    <svg viewBox="0 0 300 100" className="w-full h-28">
      {bubbles.map((bubble, i) => (
        <circle
          key={i}
          cx={bubble.cx}
          cy={bubble.cy}
          r={bubble.r}
          fill="#3b82f6"
          opacity={0.4 + Math.random() * 0.4}
        />
      ))}
    </svg>
  );
}

function Avatar({
  selected,
  index,
}: {
  selected: boolean;
  index: number;
}) {
  const colors = ["#f87171", "#fb923c", "#fbbf24", "#4ade80", "#60a5fa", "#a78bfa", "#f472b6"];
  const bgColor = colors[index % colors.length];

  return (
    <div
      className={`w-10 h-10 rounded-full flex items-center justify-center text-white text-sm font-medium transition-opacity ${
        selected ? "opacity-100" : "opacity-30"
      }`}
      style={{ backgroundColor: bgColor }}
    >
      {String.fromCharCode(65 + index)}
    </div>
  );
}

function AvatarGrid() {
  return (
    <div className="relative">
      {/* Selected avatars with selection box */}
      <div className="flex items-center gap-1 mb-2">
        <div className="border-2 border-dashed border-gray-400 rounded-lg p-1 flex gap-1">
          {AVATARS.slice(0, 4).map((avatar, i) => (
            <Avatar key={avatar.id} selected={true} index={i} />
          ))}
        </div>
        <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center opacity-50">
          <span className="text-gray-500 text-sm font-medium">E</span>
        </div>
      </div>
      {/* Unselected avatars */}
      <div className="flex items-center gap-1">
        {AVATARS.slice(4).map((avatar, i) => (
          <Avatar key={avatar.id} selected={false} index={i + 4} />
        ))}
      </div>
    </div>
  );
}

function FilterUI() {
  return (
    <div className="space-y-3">
      {/* Search bar */}
      <div className="flex items-center gap-2">
        <div className="flex items-center gap-2 px-3 py-2 border border-gray-200 rounded-lg flex-1">
          <Search className="w-4 h-4 text-gray-400" />
          <span className="text-gray-500 text-sm">Sales & Marketing</span>
        </div>
        <button className="px-4 py-2 border border-gray-200 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50">
          Filter
        </button>
      </div>
      {/* Tags */}
      <div className="flex items-center gap-2">
        <span className="text-sm text-gray-500">Tag:</span>
        <span className="px-2 py-1 bg-amber-100 text-amber-700 rounded text-sm flex items-center gap-1">
          Marketing
          <ChevronDown className="w-3 h-3" />
        </span>
        <X className="w-4 h-4 text-gray-400 cursor-pointer" />
      </div>
      <div className="flex items-center gap-2">
        <span className="text-sm text-gray-500">and</span>
        <span className="text-sm text-gray-500">Tag:</span>
        <span className="px-2 py-1 bg-blue-100 text-blue-700 rounded text-sm flex items-center gap-1">
          Sales
          <ChevronDown className="w-3 h-3" />
        </span>
        <X className="w-4 h-4 text-gray-400 cursor-pointer" />
      </div>
    </div>
  );
}

function ExportUI() {
  return (
    <div className="flex flex-col items-center gap-3">
      <button className="px-4 py-2 border border-gray-200 rounded-lg text-sm font-medium text-gray-700 flex items-center gap-2 hover:bg-gray-50">
        <Download className="w-4 h-4" />
        Export
      </button>
      <div className="flex items-center gap-2 text-sm text-gray-400">
        <Loader2 className="w-4 h-4 animate-spin" />
        <span>
          Down<span className="text-amber-500">loading</span> report...
        </span>
      </div>
    </div>
  );
}

// ============================================================================
// MAIN COMPONENT
// ============================================================================

interface SaaspoFeatureSectionsBasewellProps {
  title?: string;
  subtitle?: string;
  note?: string;
  mode?: "light" | "dark";
}

export default function SaaspoFeatureSectionsBasewell({
  title = "Eliminate blind spots",
  subtitle = "Get real-time visibility into employee comprehension with industry-leading analytics.*",
  note = "*No manual work required",
  mode = "light",
}: SaaspoFeatureSectionsBasewellProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" as const },
    },
  };

  return (
    <section className="w-full py-20 px-4 bg-gray-50">
      <motion.div
        className="max-w-5xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {/* Header */}
        <motion.div className="text-center mb-12" variants={itemVariants}>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">{title}</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-2">
            {subtitle}
          </p>
          <p className="text-sm text-gray-400">{note}</p>
        </motion.div>

        {/* Main Chart Card */}
        <motion.div
          className="bg-white rounded-xl border border-gray-200 p-6 mb-6"
          variants={itemVariants}
        >
          <h3 className="text-sm font-medium text-gray-700 mb-4">Company Activity</h3>

          {/* Legend */}
          <div className="flex flex-wrap gap-6 mb-4">
            {CHART_DATA.map((item) => (
              <div key={item.label} className="flex items-center gap-2">
                <div
                  className="w-2 h-2 rounded-sm"
                  style={{ backgroundColor: item.color }}
                />
                <span className="text-sm text-gray-500">{item.label}</span>
                <span className="text-sm font-medium text-gray-900">{item.value}</span>
              </div>
            ))}
          </div>

          {/* Chart */}
          <LineChart />

          {/* Date range */}
          <div className="flex justify-between mt-2 text-sm text-gray-400">
            <span>March 9, 2025</span>
            <span>April 7, 2025</span>
          </div>
        </motion.div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Card 1: Focus on what you need */}
          <motion.div
            className="bg-white rounded-xl border border-gray-200 p-6"
            variants={itemVariants}
          >
            <div className="h-40 flex items-center justify-center mb-4">
              <AvatarGrid />
            </div>
            <h3 className="text-base font-semibold text-gray-900 mb-1">
              {FEATURE_CARDS[0].title}
            </h3>
            <p className="text-sm text-gray-500">{FEATURE_CARDS[0].description}</p>
          </motion.div>

          {/* Card 2: Filter in natural language */}
          <motion.div
            className="bg-white rounded-xl border border-gray-200 p-6"
            variants={itemVariants}
          >
            <div className="h-40 flex items-center justify-center mb-4">
              <div className="w-full max-w-xs">
                <FilterUI />
              </div>
            </div>
            <h3 className="text-base font-semibold text-gray-900 mb-1">
              {FEATURE_CARDS[1].title}
            </h3>
            <p className="text-sm text-gray-500">{FEATURE_CARDS[1].description}</p>
          </motion.div>

          {/* Card 3: Export instantly */}
          <motion.div
            className="bg-white rounded-xl border border-gray-200 p-6"
            variants={itemVariants}
          >
            <div className="h-40 flex items-center justify-center mb-4">
              <ExportUI />
            </div>
            <h3 className="text-base font-semibold text-gray-900 mb-1">
              {FEATURE_CARDS[2].title}
            </h3>
            <p className="text-sm text-gray-500">{FEATURE_CARDS[2].description}</p>
          </motion.div>

          {/* Card 4: See where teams need help */}
          <motion.div
            className="bg-white rounded-xl border border-gray-200 p-6"
            variants={itemVariants}
          >
            <div className="h-40 flex items-center justify-center mb-4 bg-blue-50 rounded-lg overflow-hidden">
              <BubbleChart />
            </div>
            <h3 className="text-base font-semibold text-gray-900 mb-1">
              {FEATURE_CARDS[3].title}
            </h3>
            <p className="text-sm text-gray-500">{FEATURE_CARDS[3].description}</p>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
