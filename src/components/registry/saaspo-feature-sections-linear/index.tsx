"use client";

// ============================================================================
// CUSTOMIZATION - 이 섹션의 값들을 수정하여 프로젝트에 맞게 조정하세요
// ============================================================================

/**
 * 커스텀 색상 (브랜드 컬러)
 * - Linear 스타일 다크 테마
 */
const COLORS = {
  background: "#0A0A0B",
  cardBackground: "#111113",
  cardBorder: "#1F1F23",
  textPrimary: "#FFFFFF",
  textSecondary: "#8E8E93",
  textMuted: "#6B6B70",
  accentGreen: "#2DA44E",
  accentGreenBright: "#3FB950",
  accentPurple: "#A855F7",
  gridLine: "#1A1A1D",
  timelineLine: "#2A2A2E",
} as const;

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { motion } from "motion/react";
import {
  Home,
  Settings,
  Diamond,
  BarChart3,
  FileText,
  CheckCircle2,
  Circle,
} from "lucide-react";

interface SaaspoFeatureSectionsLinearProps {
  badge?: string;
  title?: string;
  description?: string;
  features?: {
    title: string;
    description: string;
  }[];
  bottomFeatures?: {
    icon: React.ReactNode;
    title: string;
    description: string;
  }[];
}

// Timeline data
const timelineItems = [
  { label: "Realtime inference", startX: 8, endX: 35, y: 55, color: COLORS.accentGreen },
  { label: "Prototype", startX: 20, endX: 42, y: 70, color: COLORS.accentGreen },
  { label: "Beta", startX: 38, endX: 58, y: 60, color: COLORS.accentGreen },
  { label: "RLHF fine tuning", startX: 45, endX: 75, y: 75, color: COLORS.accentPurple },
];

// Project Overview Card Component
function ProjectOverviewCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      viewport={{ once: true }}
      className="rounded-xl border p-5"
      style={{
        backgroundColor: COLORS.cardBackground,
        borderColor: COLORS.cardBorder,
      }}
    >
      <h4 className="mb-4 text-base font-medium" style={{ color: COLORS.textPrimary }}>
        Project Overview
      </h4>
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <span className="text-sm" style={{ color: COLORS.textMuted }}>
            Properties
          </span>
          <div className="flex items-center gap-2">
            <span
              className="flex items-center gap-1 rounded-full px-2 py-0.5 text-xs"
              style={{ backgroundColor: "#2DA44E20", color: COLORS.accentGreen }}
            >
              <Circle className="h-2 w-2 fill-current" />
              In Progress
            </span>
            <span className="text-xs" style={{ color: COLORS.textMuted }}>
              ENG
            </span>
            <div className="flex -space-x-1">
              <div className="h-5 w-5 rounded-full bg-blue-500" />
              <div className="h-5 w-5 rounded-full bg-purple-500" />
            </div>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-sm" style={{ color: COLORS.textMuted }}>
            Resources
          </span>
          <div className="flex items-center gap-2">
            <span
              className="flex items-center gap-1 text-xs"
              style={{ color: COLORS.accentPurple }}
            >
              <FileText className="h-3 w-3" />
              Exploration
            </span>
            <span className="text-xs" style={{ color: COLORS.textSecondary }}>
              User interviews
            </span>
          </div>
        </div>
        <div className="flex items-start justify-between">
          <span className="text-sm" style={{ color: COLORS.textMuted }}>
            Milestones
          </span>
          <div className="flex flex-col items-end gap-1">
            <span className="flex items-center gap-1 text-xs" style={{ color: COLORS.accentGreen }}>
              <Diamond className="h-2 w-2 fill-current" />
              Design Review <span style={{ color: COLORS.textMuted }}>100%</span>
            </span>
            <span className="flex items-center gap-1 text-xs" style={{ color: COLORS.accentGreen }}>
              <Diamond className="h-2 w-2 fill-current" />
              Internal Alpha <span style={{ color: COLORS.textMuted }}>100% of 10</span>
            </span>
            <span className="flex items-center gap-1 text-xs" style={{ color: COLORS.textMuted }}>
              <Diamond className="h-2 w-2" />
              GA <span>25% of 53</span>
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

// Project Updates Card Component
function ProjectUpdatesCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
      viewport={{ once: true }}
      className="relative overflow-hidden rounded-xl border"
      style={{
        backgroundColor: COLORS.cardBackground,
        borderColor: COLORS.cardBorder,
      }}
    >
      {/* Blurred background layers */}
      <div className="absolute inset-0 flex flex-col gap-2 p-4 opacity-30 blur-[2px]">
        <div
          className="rounded-lg p-3"
          style={{ backgroundColor: COLORS.cardBorder }}
        >
          <span className="text-xs" style={{ color: COLORS.textMuted }}>
            Off track
          </span>
        </div>
        <div
          className="rounded-lg p-3"
          style={{ backgroundColor: COLORS.cardBorder }}
        >
          <span className="text-xs" style={{ color: COLORS.textMuted }}>
            At risk
          </span>
        </div>
      </div>

      {/* Main "On track" card */}
      <div className="relative z-10 p-4 pt-20">
        <div
          className="rounded-lg border p-4"
          style={{
            backgroundColor: COLORS.cardBackground,
            borderColor: COLORS.cardBorder,
          }}
        >
          <div className="flex items-center gap-2 mb-1">
            <CheckCircle2
              className="h-4 w-4"
              style={{ color: COLORS.accentGreenBright }}
            />
            <span
              className="text-sm font-medium"
              style={{ color: COLORS.accentGreenBright }}
            >
              On track
            </span>
          </div>
          <p className="text-sm" style={{ color: COLORS.textPrimary }}>
            We are ready to launch next Thursday
          </p>
          <p className="mt-1 text-xs" style={{ color: COLORS.textMuted }}>
            Sep 8
          </p>
        </div>
      </div>
    </motion.div>
  );
}

// Collaborative Documents Card Component
function CollaborativeDocsCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.4 }}
      viewport={{ once: true }}
      className="rounded-xl border p-5"
      style={{
        backgroundColor: COLORS.cardBackground,
        borderColor: COLORS.cardBorder,
      }}
    >
      {/* Breadcrumb */}
      <div className="mb-4 flex items-center gap-2 text-xs" style={{ color: COLORS.textMuted }}>
        <FileText className="h-3 w-3" />
        <span>Spice harvester</span>
        <span>/</span>
        <span>Project specs</span>
      </div>

      {/* Icon */}
      <div
        className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg"
        style={{ backgroundColor: COLORS.accentGreen + "20" }}
      >
        <FileText className="h-5 w-5" style={{ color: COLORS.accentGreen }} />
      </div>

      {/* Content */}
      <div className="mb-1 flex items-center gap-2">
        <h5 className="text-base font-medium" style={{ color: COLORS.textPrimary }}>
          Collaborate on ideas
        </h5>
        <span
          className="rounded px-1.5 py-0.5 text-[10px] font-medium"
          style={{ backgroundColor: COLORS.accentGreen, color: "#fff" }}
        >
          Edit
        </span>
      </div>
      <p className="mb-4 text-sm leading-relaxed" style={{ color: COLORS.textSecondary }}>
        Write down product ideas and work together on
        <br />
        feature specs in realtime, multiplayer project
        <br />
        documents. Add <span style={{ color: COLORS.textPrimary }}>**style**</span> and{" "}
        <span style={{ color: COLORS.textPrimary }}>#structure</span> with
        <br />
        rich-text formatting options.
      </p>

      {/* Placeholder lines */}
      <div className="space-y-2">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="flex gap-2">
            {[...Array(5 + Math.floor(Math.random() * 3))].map((_, j) => (
              <div
                key={j}
                className="h-1.5 rounded-full"
                style={{
                  backgroundColor: COLORS.cardBorder,
                  width: `${30 + Math.random() * 40}px`,
                }}
              />
            ))}
          </div>
        ))}
      </div>
    </motion.div>
  );
}

// Timeline Component
function Timeline() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="relative h-[300px] w-full overflow-hidden"
    >
      {/* Grid lines */}
      <svg className="absolute inset-0 h-full w-full">
        {/* Vertical lines with perspective effect */}
        {[...Array(12)].map((_, i) => {
          const x = 10 + i * 8;
          return (
            <line
              key={`v-${i}`}
              x1={`${x}%`}
              y1="0%"
              x2={`${x + 15}%`}
              y2="100%"
              stroke={COLORS.gridLine}
              strokeWidth="1"
              strokeDasharray="4 4"
            />
          );
        })}
        {/* Horizontal lines */}
        {[...Array(8)].map((_, i) => (
          <line
            key={`h-${i}`}
            x1="0%"
            y1={`${15 + i * 12}%`}
            x2="100%"
            y2={`${15 + i * 12}%`}
            stroke={COLORS.gridLine}
            strokeWidth="1"
            strokeDasharray="4 4"
          />
        ))}
      </svg>

      {/* Date markers */}
      <div
        className="absolute text-xs font-medium"
        style={{ color: COLORS.textSecondary, top: "8%", left: "15%" }}
      >
        AUG 3
      </div>
      <div
        className="absolute text-xs font-medium"
        style={{ color: COLORS.textSecondary, top: "8%", left: "30%" }}
      >
        30
      </div>
      <div
        className="absolute text-sm font-medium"
        style={{ color: COLORS.textPrimary, top: "5%", left: "55%" }}
      >
        AUG 22
      </div>
      <div
        className="absolute text-xs"
        style={{ color: COLORS.textMuted, top: "12%", left: "65%" }}
      >
        24
      </div>
      <div
        className="absolute text-xs"
        style={{ color: COLORS.textMuted, top: "18%", left: "58%" }}
      >
        17
      </div>
      <div
        className="absolute text-xs"
        style={{ color: COLORS.textMuted, top: "24%", left: "52%" }}
      >
        10
      </div>
      <div
        className="absolute text-sm font-medium"
        style={{ color: COLORS.textPrimary, top: "5%", right: "12%" }}
      >
        SEP
      </div>

      {/* Timeline items */}
      {timelineItems.map((item, index) => (
        <motion.div
          key={item.label}
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          viewport={{ once: true }}
          className="absolute"
          style={{
            left: `${item.startX}%`,
            top: `${item.y}%`,
            width: `${item.endX - item.startX}%`,
          }}
        >
          <div className="flex items-center gap-2">
            <Diamond className="h-4 w-4" style={{ color: item.color, fill: item.color }} />
            <div
              className="h-0.5 flex-1 rounded-full"
              style={{ backgroundColor: item.color + "40" }}
            />
            {item.label === "RLHF fine tuning" && (
              <div
                className="flex h-6 w-6 items-center justify-center rounded"
                style={{ backgroundColor: COLORS.accentPurple }}
              >
                <div className="grid grid-cols-2 gap-0.5">
                  <div className="h-1.5 w-1.5 rounded-sm bg-white" />
                  <div className="h-1.5 w-1.5 rounded-sm bg-white" />
                  <div className="h-1.5 w-1.5 rounded-sm bg-white" />
                  <div className="h-1.5 w-1.5 rounded-sm bg-white" />
                </div>
              </div>
            )}
          </div>
          <span
            className="mt-1 block text-xs font-medium"
            style={{ color: COLORS.textSecondary }}
          >
            {item.label}
          </span>
        </motion.div>
      ))}
    </motion.div>
  );
}

export default function SaaspoFeatureSectionsLinear({
  badge = "Project and long-term planning",
  title = "Set the product direction",
  description = "Align your team around a unified product timeline. Plan, manage, and track all product initiatives with Linear's visual planning tools.",
  features = [
    {
      title: "Manage projects end-to-end",
      description:
        "Consolidate specs, milestones, tasks, and other documentation in one centralized location.",
    },
    {
      title: "Project updates",
      description: "Communicate progress and project health with built-in project updates.",
    },
    {
      title: "Ideate and specify what to build next",
      description: "",
    },
  ],
  bottomFeatures = [
    {
      icon: <Home className="h-5 w-5" />,
      title: "Initiatives",
      description: "Coordinate strategic product efforts.",
    },
    {
      icon: <Settings className="h-5 w-5" />,
      title: "Cross-team projects",
      description: "Collaborate across teams and departments.",
    },
    {
      icon: <Diamond className="h-5 w-5" />,
      title: "Milestones",
      description: "Break projects down into concrete phases.",
    },
    {
      icon: <BarChart3 className="h-5 w-5" />,
      title: "Progress insights",
      description: "Track scope, velocity, and progress over time.",
    },
  ],
}: SaaspoFeatureSectionsLinearProps) {
  return (
    <section
      className="relative w-full overflow-hidden py-20 md:py-32"
      style={{ backgroundColor: COLORS.background }}
    >
      <div className="mx-auto max-w-6xl px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          {/* Badge */}
          <div className="mb-4 flex items-center gap-2">
            <div
              className="flex h-5 w-5 items-center justify-center rounded"
              style={{ backgroundColor: COLORS.accentGreen }}
            >
              <FileText className="h-3 w-3 text-white" />
            </div>
            <span className="text-sm" style={{ color: COLORS.textSecondary }}>
              {badge}
            </span>
            <span style={{ color: COLORS.textMuted }}>&gt;</span>
          </div>

          {/* Title */}
          <h2
            className="mb-4 text-4xl font-semibold tracking-tight md:text-5xl"
            style={{ color: COLORS.textPrimary }}
          >
            {title}
          </h2>

          {/* Description */}
          <p className="max-w-md text-base leading-relaxed" style={{ color: COLORS.textSecondary }}>
            <span className="font-medium" style={{ color: COLORS.textPrimary }}>
              Align your team around a unified product timeline.
            </span>{" "}
            Plan, manage, and track all product initiatives with Linear&apos;s visual planning tools.
          </p>
        </motion.div>

        {/* Timeline visualization */}
        <Timeline />

        {/* Feature cards grid */}
        <div className="mt-16 grid gap-8 md:grid-cols-2">
          {/* Left column - Manage projects */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              viewport={{ once: true }}
              className="mb-4"
            >
              <h3 className="text-lg font-medium" style={{ color: COLORS.textPrimary }}>
                {features[0].title}
              </h3>
              <p className="mt-1 text-sm" style={{ color: COLORS.textSecondary }}>
                {features[0].description}
              </p>
            </motion.div>
            <ProjectOverviewCard />
          </div>

          {/* Right column - Project updates */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              viewport={{ once: true }}
              className="mb-4"
            >
              <h3 className="text-lg font-medium" style={{ color: COLORS.textPrimary }}>
                {features[1].title}
              </h3>
              <p className="mt-1 text-sm" style={{ color: COLORS.textSecondary }}>
                {features[1].description}
              </p>
            </motion.div>
            <ProjectUpdatesCard />
          </div>
        </div>

        {/* Ideate section */}
        <div className="mt-16 grid gap-8 md:grid-cols-2">
          {/* Left - Text content */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
            className="flex flex-col justify-center"
          >
            <h3
              className="mb-6 text-2xl font-medium leading-tight md:text-3xl"
              style={{ color: COLORS.textPrimary }}
            >
              Ideate and specify
              <br />
              what to build next
            </h3>
            <div className="space-y-3">
              {[
                { text: "Collaborative documents", active: true },
                { text: "Inline comments", active: false },
                { text: "Text-to-issue commands", active: false },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div
                    className="h-5 w-0.5 rounded-full"
                    style={{
                      backgroundColor: item.active ? COLORS.accentGreen : COLORS.cardBorder,
                    }}
                  />
                  <span
                    className="text-sm"
                    style={{
                      color: item.active ? COLORS.textPrimary : COLORS.textMuted,
                    }}
                  >
                    {item.text}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right - Card */}
          <CollaborativeDocsCard />
        </div>

        {/* Bottom features */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mt-20 grid grid-cols-2 gap-8 md:grid-cols-4"
        >
          {bottomFeatures.map((feature, index) => (
            <div key={index} className="group">
              <div
                className="mb-3 transition-colors group-hover:text-white"
                style={{ color: COLORS.textSecondary }}
              >
                {feature.icon}
              </div>
              <h4 className="mb-1 text-sm font-medium" style={{ color: COLORS.textPrimary }}>
                {feature.title}
              </h4>
              <p className="text-xs leading-relaxed" style={{ color: COLORS.textMuted }}>
                {feature.description}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
