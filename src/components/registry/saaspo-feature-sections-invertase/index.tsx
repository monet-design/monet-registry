"use client";

// ============================================================================
// CUSTOMIZATION - 이 섹션의 값들을 수정하여 프로젝트에 맞게 조정하세요
// ============================================================================

/**
 * 커스텀 색상 (브랜드 컬러)
 */
const COLORS = {
  light: {
    background: "#E8E8E8",
    cardBackground: "#1A1A1A",
    cardBackgroundAlt: "#1E1E1E",
    textPrimary: "#000000",
    textSecondary: "#666666",
    cardTextPrimary: "#FFFFFF",
    cardTextSecondary: "#A0A0A0",
    accent: "#F97316",
    accentSecondary: "#22D3EE",
  },
  dark: {
    background: "#1A1A1A",
    cardBackground: "#0D0D0D",
    cardBackgroundAlt: "#111111",
    textPrimary: "#FFFFFF",
    textSecondary: "#A0A0A0",
    cardTextPrimary: "#FFFFFF",
    cardTextSecondary: "#888888",
    accent: "#F97316",
    accentSecondary: "#22D3EE",
  },
};

type ColorScheme = typeof COLORS.light;

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { motion, type Variants } from "motion/react";
import {
  Cloud,
  ChevronRight,
  Lock,
  GitBranch,
  CheckCircle2,
} from "lucide-react";

interface ProductCard {
  title: string;
  description: string;
  type: "hero" | "ide" | "cloud" | "docs";
}

interface SaaspoFeatureSectionsInvertaseProps {
  mode?: "light" | "dark";
  title?: string;
  subtitle?: string;
  products?: ProductCard[];
}

// Terminal-style card component
function HeroCard({ colors }: { colors: ColorScheme }) {
  return (
    <div
      className="relative h-full overflow-hidden rounded-2xl p-8"
      style={{ backgroundColor: colors.cardBackground }}
    >
      {/* Terminal background effect */}
      <div className="absolute inset-0 opacity-30">
        <div className="font-mono text-xs text-green-500/50 leading-relaxed p-4">
          <p>{`/// rt build ***`}</p>
          <p className="text-gray-600">cloning repo...</p>
          <p className="text-gray-600">successful!</p>
          <p className="mt-4 text-gray-600">[08:50:32]</p>
          <p className="text-gray-600">[08:50:32]</p>
          <p className="mt-4 text-gray-600">[08:00 72</p>
          <p className="text-gray-600">[0A50&gt;15</p>
        </div>
      </div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/20 via-transparent to-cyan-900/20" />

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-center h-full">
        <h3 className="text-3xl md:text-4xl font-bold text-white leading-tight">
          Build Better
        </h3>
        <h3 className="text-3xl md:text-4xl font-bold leading-tight">
          <span className="bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">
            Software, Faster
          </span>
        </h3>

        {/* Arrow indicators */}
        <div className="flex items-center gap-2 mt-6">
          {[1, 2, 3, 4].map((i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0.5 }}
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                delay: i * 0.2,
              }}
            >
              <ChevronRight className="w-5 h-5 text-gray-400" />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

// IDE/Code editor card component
function IDECard({
  title,
  description,
  colors,
}: {
  title: string;
  description: string;
  colors: ColorScheme;
}) {
  return (
    <div className="h-full">
      <div
        className="relative overflow-hidden rounded-2xl h-[280px]"
        style={{ backgroundColor: colors.cardBackground }}
      >
        {/* IDE window header */}
        <div className="absolute top-3 right-4 text-xs text-gray-500 font-mono">
          zapp.run
        </div>

        {/* IDE content */}
        <div className="flex h-full">
          {/* Sidebar */}
          <div className="w-40 border-r border-gray-800 p-3">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-5 h-5 rounded bg-blue-500 flex items-center justify-center">
                <span className="text-white text-xs font-bold">F</span>
              </div>
              <span className="text-white text-sm font-medium">Flutter</span>
            </div>
            <p className="text-gray-500 text-xs mb-4">A new Flutter project.</p>

            <div className="text-gray-400 text-xs mb-2">Explorer</div>
            <div className="space-y-1 text-xs">
              <div className="flex items-center gap-1 text-gray-500">
                <span className="text-gray-600">&gt;</span> dart_tool
              </div>
              <div className="flex items-center gap-1 text-gray-500">
                <span className="text-gray-600">&gt;</span> build
              </div>
              <div className="flex items-center gap-1 text-gray-400">
                <span className="text-gray-600">v</span> lib
              </div>
              <div className="flex items-center gap-1 text-gray-400 pl-3">
                <span className="w-2 h-2 rounded-full bg-blue-400" />
                main.dart
              </div>
            </div>
          </div>

          {/* Code editor */}
          <div className="flex-1 p-3">
            <div className="flex items-center gap-2 mb-2 text-xs">
              <span className="text-gray-500">main.dart</span>
              <span className="text-gray-600">x</span>
            </div>
            <div className="font-mono text-xs space-y-1">
              <div className="flex">
                <span className="text-gray-600 w-6">1</span>
                <span className="text-orange-400">import</span>
                <span className="text-green-400 ml-1">
                  &apos;package:flutter/material.dart&apos;
                </span>
                <span className="text-white">;</span>
              </div>
              <div className="flex">
                <span className="text-gray-600 w-6">2</span>
              </div>
              <div className="flex">
                <span className="text-gray-600 w-6">3</span>
                <span className="text-blue-400">void</span>
                <span className="text-yellow-300 ml-1">main</span>
                <span className="text-white">() {"{"}</span>
              </div>
              <div className="flex">
                <span className="text-gray-600 w-6">4</span>
                <span className="text-white ml-4">runApp(</span>
                <span className="text-blue-400">const</span>
                <span className="text-green-300 ml-1">MyApp</span>
                <span className="text-white">());</span>
              </div>
              <div className="flex">
                <span className="text-gray-600 w-6">5</span>
                <span className="text-white">{"}"}</span>
              </div>
              <div className="flex">
                <span className="text-gray-600 w-6">6</span>
              </div>
              <div className="flex">
                <span className="text-gray-600 w-6">7</span>
                <span className="text-blue-400">class</span>
                <span className="text-green-300 ml-1">MyApp</span>
                <span className="text-blue-400 ml-1">extends</span>
                <span className="text-green-300 ml-1">StatelessWidget</span>
                <span className="text-white"> {"{"}</span>
              </div>
              <div className="flex">
                <span className="text-gray-600 w-6">8</span>
                <span className="text-gray-500 ml-4">
                  const MyApp({"{"}super.key{"}"});
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Title and description outside card */}
      <div className="mt-4">
        <h4
          className="text-lg font-semibold"
          style={{ color: colors.cardTextPrimary }}
        >
          {title}
        </h4>
        <p className="text-sm mt-1" style={{ color: colors.cardTextSecondary }}>
          {description}
        </p>
      </div>
    </div>
  );
}

// Cloud hosting card component
function CloudCard({
  title,
  description,
  colors,
}: {
  title: string;
  description: string;
  colors: ColorScheme;
}) {
  return (
    <div className="h-full">
      <div
        className="relative overflow-hidden rounded-2xl h-[280px] flex items-center justify-center"
        style={{ backgroundColor: colors.cardBackground }}
      >
        {/* Gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-800 via-slate-900 to-slate-800" />

        {/* Orange glow effect */}
        <div className="absolute top-1/4 right-1/3 w-48 h-32 bg-orange-500/30 rounded-full blur-3xl" />

        {/* Cloud icon */}
        <div className="relative z-10 flex flex-col items-center">
          <div className="relative">
            <Cloud
              className="w-32 h-32 text-slate-600 fill-slate-700"
              strokeWidth={1}
            />
            {/* Logo in cloud */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-12 h-12 rounded-full bg-slate-800 border-2 border-slate-600 flex items-center justify-center">
                <div className="w-6 h-6 text-cyan-400">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M13 17l5-5-5-5M6 17l5-5-5-5" />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* Badge */}
          <div className="mt-4 px-4 py-2 bg-slate-800/80 rounded-lg border border-slate-700 flex items-center gap-2">
            <div className="w-5 h-5 rounded bg-cyan-500/20 flex items-center justify-center">
              <span className="text-cyan-400 text-xs">D</span>
            </div>
            <span className="text-gray-300 text-sm">
              Host <span className="text-cyan-400">Dart</span> in{" "}
              <span className="font-semibold text-white">seconds</span>
            </span>
          </div>
        </div>
      </div>

      {/* Title and description outside card */}
      <div className="mt-4">
        <h4
          className="text-lg font-semibold"
          style={{ color: colors.cardTextPrimary }}
        >
          {title}
        </h4>
        <p className="text-sm mt-1" style={{ color: colors.cardTextSecondary }}>
          {description}
        </p>
      </div>
    </div>
  );
}

// Documentation card component
function DocsCard({
  title,
  description,
  colors,
}: {
  title: string;
  description: string;
  colors: ColorScheme;
}) {
  return (
    <div className="h-full">
      <div
        className="relative overflow-hidden rounded-2xl h-[280px] p-6"
        style={{ backgroundColor: colors.cardBackground }}
      >
        {/* Browser window */}
        <div className="bg-slate-800 rounded-lg border border-slate-700 overflow-hidden">
          {/* Browser header */}
          <div className="flex items-center gap-2 px-3 py-2 bg-slate-900/50">
            <div className="flex gap-1.5">
              <div className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
              <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
              <div className="w-2.5 h-2.5 rounded-full bg-green-500/60" />
            </div>
          </div>

          {/* URL bar */}
          <div className="px-3 py-2">
            <div className="flex items-center gap-2 bg-slate-900 rounded px-3 py-1.5">
              <Lock className="w-3 h-3 text-gray-500" />
              <span className="text-xs text-gray-400">
                https://docs.page/my-org/my-repository
              </span>
            </div>
          </div>
        </div>

        {/* Connection line and checkmark */}
        <div className="flex flex-col items-center py-4">
          <div className="w-px h-6 bg-slate-600" />
          <div className="w-8 h-8 rounded-full border border-slate-600 flex items-center justify-center">
            <CheckCircle2 className="w-4 h-4 text-gray-500" />
          </div>
          <div className="w-px h-6 bg-slate-600" />
        </div>

        {/* Git command box */}
        <div className="flex justify-center">
          <div className="flex items-center gap-2 bg-slate-800 rounded-lg border border-slate-700 px-4 py-2">
            <GitBranch className="w-4 h-4 text-gray-500" />
            <span className="font-mono text-sm text-gray-300">
              $ git push origin main
            </span>
          </div>
        </div>
      </div>

      {/* Title and description outside card */}
      <div className="mt-4">
        <h4
          className="text-lg font-semibold"
          style={{ color: colors.cardTextPrimary }}
        >
          {title}
        </h4>
        <p className="text-sm mt-1" style={{ color: colors.cardTextSecondary }}>
          {description}
        </p>
      </div>
    </div>
  );
}

export default function SaaspoFeatureSectionsInvertase({
  mode = "light",
  title = "Developer tools, reimagined",
  subtitle = "We understand the challenges developers face. That's why we build products that streamline workflows, eliminate friction, and empower developers to focus on what they do best: making great products.",
  products = [
    {
      title: "Zapp.run",
      description: "Learn, build & share Flutter applications",
      type: "ide" as const,
    },
    {
      title: "Globe.dev",
      description: "Deploy full-stack Flutter applications.",
      type: "cloud" as const,
    },
    {
      title: "Docs.page",
      description: "Ship documentation, like you ship code.",
      type: "docs" as const,
    },
  ],
}: SaaspoFeatureSectionsInvertaseProps) {
  const colors = COLORS[mode];

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section
      className="relative w-full py-20 px-6 md:px-12 lg:px-20"
      style={{ backgroundColor: colors.background }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2
            className="text-4xl md:text-5xl font-bold mb-6"
            style={{ color: colors.textPrimary }}
          >
            {title}
          </h2>
          <p
            className="text-lg max-w-3xl mx-auto leading-relaxed"
            style={{ color: colors.textSecondary }}
          >
            {subtitle}
          </p>
        </motion.div>

        {/* Product Cards Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Hero Card - Build Better Software, Faster */}
          <motion.div variants={itemVariants} className="min-h-[320px]">
            <HeroCard colors={colors} />
          </motion.div>

          {/* IDE Card - Zapp.run */}
          <motion.div variants={itemVariants}>
            <IDECard
              title={products[0]?.title || "Zapp.run"}
              description={
                products[0]?.description ||
                "Learn, build & share Flutter applications"
              }
              colors={colors}
            />
          </motion.div>

          {/* Cloud Card - Globe.dev */}
          <motion.div variants={itemVariants}>
            <CloudCard
              title={products[1]?.title || "Globe.dev"}
              description={
                products[1]?.description ||
                "Deploy full-stack Flutter applications."
              }
              colors={colors}
            />
          </motion.div>

          {/* Docs Card - Docs.page */}
          <motion.div variants={itemVariants}>
            <DocsCard
              title={products[2]?.title || "Docs.page"}
              description={
                products[2]?.description ||
                "Ship documentation, like you ship code."
              }
              colors={colors}
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
