"use client";

import { motion } from "motion/react";
import { Share2, Menu, Rss } from "lucide-react";
import { useMemo } from "react";

// ============================================================================
// CUSTOMIZATION - 이 섹션의 값들을 수정하여 프로젝트에 맞게 조정하세요
// ============================================================================

const COLORS = {
  light: {},
  dark: {},
} as const;

const IMAGES = {} as const;

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

interface FeatureCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  delay?: number;
  isItalic?: boolean;
}

function FeatureCard({ title, description, icon, delay = 0, isItalic = false }: FeatureCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="group relative rounded-xl border border-slate-800/60 bg-[#0C111D] p-4 transition-colors hover:border-slate-700/60 hover:bg-[#101520]"
    >
      <div className="flex items-start justify-between gap-3">
        <div className="flex-1 space-y-2">
          <h3 className={`text-sm font-medium text-white ${isItalic ? "italic" : ""}`}>{title}</h3>
          <p className="text-xs leading-relaxed text-slate-400">{description}</p>
        </div>
        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#1a1f2e] text-violet-400">
          {icon}
        </div>
      </div>
    </motion.div>
  );
}

interface NodeProps {
  x: number;
  y: number;
  size?: number;
  delay?: number;
  label?: string;
  hasDate?: boolean;
}

function Node({ x, y, size = 8, delay = 0, label, hasDate }: NodeProps) {
  return (
    <motion.g
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay }}
    >
      {/* Glow effect */}
      <circle
        cx={x}
        cy={y}
        r={size + 4}
        fill="url(#nodeGlow)"
        opacity={0.4}
      />
      {/* Main node */}
      <circle
        cx={x}
        cy={y}
        r={size}
        fill="#6366f1"
        stroke="#818cf8"
        strokeWidth={1}
      />
      {/* Inner highlight */}
      <circle
        cx={x}
        cy={y}
        r={size * 0.5}
        fill="#a5b4fc"
        opacity={0.6}
      />
      {/* Label */}
      {label && (
        <text
          x={x}
          y={y - size - 8}
          textAnchor="middle"
          fill="#94a3b8"
          fontSize={8}
          fontFamily="Inter, sans-serif"
        >
          {label}
        </text>
      )}
      {/* Date label */}
      {hasDate && (
        <text
          x={x}
          y={y + size + 12}
          textAnchor="middle"
          fill="#64748b"
          fontSize={6}
          fontFamily="Inter, sans-serif"
        >
          {label || ""}
        </text>
      )}
    </motion.g>
  );
}

interface ConnectionProps {
  x1: number;
  y1: number;
  x2: number;
  y2: number;
  delay?: number;
}

function Connection({ x1, y1, x2, y2, delay = 0 }: ConnectionProps) {
  return (
    <motion.line
      x1={x1}
      y1={y1}
      x2={x2}
      y2={y2}
      stroke="url(#lineGradient)"
      strokeWidth={1}
      initial={{ pathLength: 0, opacity: 0 }}
      animate={{ pathLength: 1, opacity: 0.4 }}
      transition={{ duration: 0.8, delay }}
    />
  );
}

interface ProfileCardProps {
  name: string;
  company: string;
  companyDescription: string;
  avatarUrl?: string;
}

function ProfileCard({
  name = "Matt Sornson",
  company = "Clearbit",
  companyDescription = "Grow your business with marketing and sales bui...",
  avatarUrl = "https://picsum.photos/seed/matt/40/40",
}: ProfileCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 1.2 }}
      className="absolute bottom-8 right-8 w-52 rounded-xl border border-slate-700/40 bg-[#1D2023]/95 p-3 shadow-xl backdrop-blur-md"
    >
      {/* User info */}
      <div className="mb-3 flex items-center gap-2">
        <div className="h-8 w-8 overflow-hidden rounded-full bg-slate-700">
          <img
            src={avatarUrl}
            alt={name}
            className="h-full w-full object-cover"
          />
        </div>
        <div>
          <p className="text-xs font-medium text-white">{name}</p>
          <p className="text-[10px] text-slate-400">{company.toLowerCase()}</p>
        </div>
      </div>

      {/* Company card */}
      <div className="rounded-lg border border-slate-700/40 bg-[#27272C]/80 p-2">
        <div className="mb-1 flex items-center gap-2">
          <div className="flex h-5 w-5 items-center justify-center rounded bg-[#5783CF]">
            <span className="text-[8px] font-bold text-white">C</span>
          </div>
          <span className="text-xs font-medium text-white">{company}</span>
        </div>
        <p className="text-[10px] leading-relaxed text-slate-400">
          {companyDescription}
        </p>
      </div>
    </motion.div>
  );
}

interface KnowledgeGraphProps {
  width?: number;
  height?: number;
}

function KnowledgeGraph({ width = 400, height = 350 }: KnowledgeGraphProps) {
  // Fixed node positions for consistent rendering
  const nodes = useMemo(() => [
    { x: 80, y: 60, size: 6 },
    { x: 150, y: 40, size: 5 },
    { x: 220, y: 80, size: 7, label: "Top Salmon" },
    { x: 300, y: 50, size: 5 },
    { x: 360, y: 90, size: 6 },
    { x: 50, y: 130, size: 5 },
    { x: 120, y: 150, size: 8, label: "Ross Weber" },
    { x: 200, y: 120, size: 6, hasDate: true, label: "February 9th, 2023" },
    { x: 280, y: 140, size: 5 },
    { x: 350, y: 120, size: 7 },
    { x: 70, y: 200, size: 6 },
    { x: 140, y: 220, size: 5, hasDate: true, label: "November 5th, 2020" },
    { x: 210, y: 190, size: 8 },
    { x: 290, y: 210, size: 6 },
    { x: 360, y: 180, size: 5 },
    { x: 100, y: 280, size: 7 },
    { x: 180, y: 260, size: 5 },
    { x: 250, y: 290, size: 6, label: "Tobias" },
    { x: 320, y: 270, size: 8 },
    { x: 380, y: 250, size: 5 },
  ], []);

  // Fixed connections between nodes for consistent rendering
  const connections = useMemo(() => {
    // Pre-defined connection pairs (indices into nodes array)
    const connectionPairs = [
      [0, 1], [1, 2], [2, 3], [3, 4],
      [0, 5], [5, 6], [6, 7], [7, 8], [8, 9],
      [1, 6], [2, 7], [3, 8], [4, 9],
      [5, 10], [6, 11], [7, 12], [8, 13], [9, 14],
      [10, 11], [11, 12], [12, 13], [13, 14],
      [10, 15], [11, 16], [12, 17], [13, 18], [14, 19],
      [15, 16], [16, 17], [17, 18], [18, 19],
    ];

    return connectionPairs.map(([i, j]) => ({
      x1: nodes[i].x,
      y1: nodes[i].y,
      x2: nodes[j].x,
      y2: nodes[j].y,
    }));
  }, [nodes]);

  return (
    <div className="relative h-full w-full">
      <svg
        width="100%"
        height="100%"
        viewBox={`0 0 ${width} ${height}`}
        className="overflow-visible"
      >
        <defs>
          <radialGradient id="nodeGlow">
            <stop offset="0%" stopColor="#6366f1" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#6366f1" stopOpacity="0" />
          </radialGradient>
          <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#6366f1" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.3" />
          </linearGradient>
        </defs>

        {/* Connections */}
        {connections.map((conn, i) => (
          <Connection
            key={`conn-${i}`}
            x1={conn.x1}
            y1={conn.y1}
            x2={conn.x2}
            y2={conn.y2}
            delay={i * 0.03}
          />
        ))}

        {/* Nodes */}
        {nodes.map((node, i) => (
          <Node
            key={`node-${i}`}
            x={node.x}
            y={node.y}
            size={node.size}
            label={node.label}
            hasDate={node.hasDate}
            delay={0.3 + i * 0.05}
          />
        ))}
      </svg>

      {/* Profile card overlay */}
      <ProfileCard
        name="Matt Sornson"
        company="Clearbit"
        companyDescription="Grow your business with marketing and sales bui..."
      />
    </div>
  );
}

interface ToolsForThoughtSectionProps {
  mode?: "light" | "dark";
  heading?: string;
  subheading?: string;
  features?: {
    title: string;
    description: string;
    iconType: "share" | "menu" | "rss";
    isItalic?: boolean;
  }[];
}

const defaultFeatures = [
  {
    title: "Backlink relationships",
    description:
      "Build a personal knowledge graph by back-linking notes to each other, modeling your brain's associations.",
    iconType: "share" as const,
    isItalic: false,
  },
  {
    title: "Write once, sync everywhere.",
    description:
      "We ensure your notes are backed up and synced to all your devices, online or offline. All with end-to-end encryption.",
    iconType: "menu" as const,
    isItalic: true,
  },
  {
    title: "Kindle integration and REST API",
    description:
      "We are API first and integrated into all your favorite tools.",
    iconType: "rss" as const,
    isItalic: false,
  },
];

const iconMap = {
  share: <Share2 className="h-4 w-4" />,
  menu: <Menu className="h-4 w-4" />,
  rss: <Rss className="h-4 w-4" />,
};

export default function ToolsForThoughtSection({
  mode = "light",
  heading = "Tools for thought",
  subheading = "Your brain was made for having ideas, not storing them. That's on us.",
  features = defaultFeatures,
}: ToolsForThoughtSectionProps) {
  return (
    <section className="w-full bg-[#0E1120] px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          {/* Left column - Text and feature cards */}
          <div className="space-y-8">
            {/* Heading */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="space-y-3"
            >
              <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                {heading}
              </h2>
              <p className="max-w-md text-sm leading-relaxed text-slate-400">
                {subheading}
              </p>
            </motion.div>

            {/* Feature cards */}
            <div className="space-y-4">
              {features.map((feature, index) => (
                <FeatureCard
                  key={feature.title}
                  title={feature.title}
                  description={feature.description}
                  icon={iconMap[feature.iconType]}
                  delay={0.2 + index * 0.1}
                  isItalic={feature.isItalic}
                />
              ))}
            </div>
          </div>

          {/* Right column - Knowledge graph visualization */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative min-h-[400px] overflow-hidden rounded-2xl border border-slate-800/50 bg-[#080808]"
          >
            <KnowledgeGraph />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
