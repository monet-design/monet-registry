"use client";

// ============================================================================
// CUSTOMIZATION - Edit these values to customize the component
// ============================================================================

/**
 * Brand Colors
 */
const COLORS = {
  light: {
    accent: "#EC4899",
    accentHover: "#DB2777",
    accentHighlight: "#FEF08A",
    green: "#22C55E",
    darkBg: "#1F2937",
  },
  dark: {
    accent: "#F472B6",
    accentHover: "#EC4899",
    accentHighlight: "#CA8A04",
    green: "#4ADE80",
    darkBg: "#111827",
  },
} as const;

/**
 * Image Assets
 */
const IMAGES = {
  pieChart: {
    path: "/registry/codefa-st-feature-6/pie-chart.png",
    alt: "Pareto principle for online courses",
  },
  avatars: [
    { path: "/registry/codefa-st-feature-6/avatar-1.png", alt: "User 1" },
    { path: "/registry/codefa-st-feature-6/avatar-2.png", alt: "User 2" },
    { path: "/registry/codefa-st-feature-6/avatar-3.png", alt: "User 3" },
    { path: "/registry/codefa-st-feature-6/avatar-4.png", alt: "User 4" },
    { path: "/registry/codefa-st-feature-6/avatar-5.png", alt: "User 5" },
    { path: "/registry/codefa-st-feature-6/avatar-6.png", alt: "User 6" },
    { path: "/registry/codefa-st-feature-6/avatar-7.png", alt: "User 7" },
    { path: "/registry/codefa-st-feature-6/avatar-8.png", alt: "User 8" },
  ],
} as const;

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { motion } from "motion/react";
import Image from "next/image";
import { Plus, RotateCcw, Square, X, MessageSquare } from "lucide-react";

interface CodefaStFeature6Props {
  mode?: "light" | "dark";
  headline?: string;
  highlightedWord?: string;
  headlineEnd?: string;
  averageCourseText?: string;
  averageCourseHours?: string;
  additionalHours?: { name: string; hours: string }[];
  truthText?: string;
  pieChartImage?: string;
  entrepreneurQuestion?: string;
  entrepreneurAnswer?: string;
  aiExplanation?: string;
  chatPrompt?: string;
  aiNote?: string;
  cssExplanation?: string;
  teachingTitle?: string;
  teachingPoints?: string[];
  ctaText?: string;
  ctaHref?: string;
  socialProofCount?: string;
  socialProofText?: string;
}

export default function CodefaStFeature6({
  mode = "light",
  headline = "Wait... is it possible to learn",
  highlightedWord = "that",
  headlineEnd = "fast?",
  averageCourseText = "The average JavaScript course on Udemy is",
  averageCourseHours = "64 hours",
  additionalHours = [
    { name: "React", hours: "72 hours" },
    { name: "MongoDB", hours: "32 hours" },
    { name: "Tailwind", hours: "16 hours" },
  ],
  truthText = "But the truth is, you'll only use 20% of what you learn.",
  pieChartImage = IMAGES.pieChart.path,
  entrepreneurQuestion = "But as an entrepreneur?",
  entrepreneurAnswer = "You need just enough to build your idea!",
  aiExplanation = "In 2025, AI makes coding even easier. It explains code, fixes bugs, and writes sections of your app for you.",
  chatPrompt = 'Create a beautiful blue button that says "HG"',
  aiNote = "AI gives you superpowers when you know the fundamentals",
  cssExplanation = "You don't need to know how",
  teachingTitle = "CodeFast teaches you how to code like an entrepreneur:",
  teachingPoints = [
    "Learn the essentials (no fluff)",
    "Use AI to build faster",
    "Launch your idea",
  ],
  ctaText = "Learn in weeks, not years",
  ctaHref = "#pricing",
  socialProofCount = "3,936",
  socialProofText = "entrepreneurs love the course",
}: CodefaStFeature6Props) {
  const colors = COLORS[mode];
  const isDark = mode === "dark";

  return (
    <section
      className={`flex flex-col items-center justify-center py-16 lg:py-24 ${
        isDark ? "bg-gray-950" : "bg-white"
      }`}
    >
      <div className="max-w-4xl mx-auto flex flex-col items-center text-center px-6">
        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className={`font-black text-4xl md:text-5xl lg:text-6xl tracking-tight mb-8 ${
            isDark ? "text-white" : "text-gray-900"
          }`}
        >
          {headline}{" "}
          <span className="relative inline-block">
            <span
              className="relative z-10 italic"
              style={{ fontStyle: "italic" }}
            >
              {highlightedWord}
            </span>
            <span
              className="absolute bottom-1 left-0 right-0 h-3 md:h-4 -z-0"
              style={{ backgroundColor: colors.accentHighlight }}
            />
          </span>{" "}
          {headlineEnd}
        </motion.h2>

        {/* Course Hours Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className={`text-lg mb-4 ${isDark ? "text-gray-300" : "text-gray-700"}`}
        >
          <p>
            {averageCourseText}{" "}
            <em className="font-medium">{averageCourseHours}.</em> To
          </p>
          <p>build a tiny business, you would also need:</p>
        </motion.div>

        {/* Additional Hours List */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className={`text-lg italic mb-6 ${isDark ? "text-gray-400" : "text-gray-600"}`}
        >
          {additionalHours.map((item, index) => (
            <p key={index}>
              + {item.hours} for {item.name}
              {index === additionalHours.length - 1 ? ", etc..." : ""}
            </p>
          ))}
        </motion.div>

        {/* Truth Statement */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className={`text-lg mb-8 ${isDark ? "text-gray-300" : "text-gray-700"}`}
        >
          But the truth is,{" "}
          <strong className={isDark ? "text-white" : "text-gray-900"}>
            you&apos;ll only use 20% of what you learn.
          </strong>
        </motion.p>

        {/* Pie Chart */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="w-full max-w-lg mb-8 rounded-lg overflow-hidden border border-gray-200 shadow-sm"
        >
          <Image
            src={pieChartImage}
            alt="Pareto principle for online courses"
            width={600}
            height={400}
            className="w-full h-auto"
          />
        </motion.div>

        {/* Courses prepare text */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className={`text-lg mb-4 ${isDark ? "text-gray-300" : "text-gray-700"}`}
        >
          These courses prepare you for the competitive job market.
        </motion.p>

        {/* Entrepreneur Question */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.35 }}
          className={`text-lg italic mb-4 ${isDark ? "text-gray-400" : "text-gray-600"}`}
        >
          {entrepreneurQuestion}
        </motion.p>

        {/* Entrepreneur Answer */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-lg font-semibold mb-8"
          style={{ color: colors.green }}
        >
          <span className="border-b-2" style={{ borderColor: colors.green }}>
            {entrepreneurAnswer}
          </span>
        </motion.p>

        {/* AI Explanation */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.45 }}
          className={`text-lg mb-8 max-w-xl ${isDark ? "text-gray-300" : "text-gray-700"}`}
        >
          <strong className={isDark ? "text-white" : "text-gray-900"}>
            In 2025, AI makes coding even easier.
          </strong>{" "}
          It explains code, fixes bugs, and writes sections of your app for you.
        </motion.p>

        {/* AI Chat Interface Mock */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="w-full max-w-lg mb-4 rounded-lg overflow-hidden shadow-lg"
          style={{ backgroundColor: colors.darkBg }}
        >
          {/* Chat Header */}
          <div className="flex items-center justify-between px-4 py-3 border-b border-gray-700">
            <span className="text-white font-medium text-sm">CHAT</span>
            <div className="flex items-center gap-3 text-gray-400">
              <Plus className="w-4 h-4" />
              <RotateCcw className="w-4 h-4" />
              <Square className="w-4 h-4" />
              <X className="w-4 h-4" />
            </div>
          </div>

          {/* Chat Content */}
          <div className="p-4">
            <div className="flex items-center gap-2 text-gray-400 text-sm mb-2">
              <Plus className="w-4 h-4" />
              <span>Add context</span>
            </div>
            <p className="text-white text-left mb-3">{chatPrompt}</p>
            <div className="flex items-center gap-2 text-gray-400 text-sm mb-4">
              <span className="text-purple-400">claude-3.5-sonnet</span>
              <span>@ Mention</span>
              <span className="ml-auto flex items-center gap-1">
                <MessageSquare className="w-3 h-3" />
                chat
              </span>
              <span className="text-gray-500">codebase</span>
            </div>

            {/* Previous Chats */}
            <div className="mb-3">
              <div className="flex items-center justify-between text-sm mb-2">
                <span className="text-gray-400">Previous chats</span>
                <span className="text-blue-400 text-xs">View all</span>
              </div>
              <div className="grid grid-cols-2 gap-2">
                {[
                  { text: "Creating a Styli...", time: "5m ago" },
                  { text: "Creating a Styli...", time: "6m ago" },
                  { text: "Creating a Beau...", time: "6m ago" },
                  { text: "Understanding ...", time: "18h ago" },
                  { text: "Understanding ...", time: "18h ago" },
                  { text: "Understanding ...", time: "18h ago" },
                ].map((chat, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between bg-gray-700/50 rounded px-2 py-1.5 text-xs"
                  >
                    <div className="flex items-center gap-1 text-gray-300">
                      <MessageSquare className="w-3 h-3" />
                      <span className="truncate">{chat.text}</span>
                    </div>
                    <span className="text-gray-500 text-[10px]">{chat.time}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* AI Note */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.55 }}
          className={`text-sm italic mb-8 ${isDark ? "text-gray-400" : "text-gray-500"}`}
        >
          <span className="mr-1">&#11088;</span>
          {aiNote}
        </motion.p>

        {/* CSS Explanation */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className={`text-lg mb-8 max-w-xl ${isDark ? "text-gray-300" : "text-gray-700"}`}
        >
          You don&apos;t need to know how{" "}
          <code
            className={`px-1.5 py-0.5 rounded text-sm ${
              isDark ? "bg-gray-800 text-gray-300" : "bg-gray-100 text-gray-700"
            }`}
          >
            CSS
          </code>{" "}
          <code
            className={`px-1.5 py-0.5 rounded text-sm ${
              isDark ? "bg-gray-800 text-gray-300" : "bg-gray-100 text-gray-700"
            }`}
          >
            box-shadow
          </code>{" "}
          works to create a button...{" "}
          <strong className={isDark ? "text-white" : "text-gray-900"}>
            Just ask the AI to do it for you!
          </strong>
        </motion.p>

        {/* Teaching Title */}
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.65 }}
          className={`text-lg font-bold mb-4 ${
            isDark ? "text-white" : "text-gray-900"
          }`}
        >
          {teachingTitle}
        </motion.h3>

        {/* Teaching Points */}
        <motion.ol
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className={`list-decimal list-inside text-left mb-10 space-y-1 ${
            isDark ? "text-gray-300" : "text-gray-700"
          }`}
        >
          {teachingPoints.map((point, index) => (
            <li key={index}>{point}</li>
          ))}
        </motion.ol>

        {/* CTA Button */}
        <motion.a
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.75 }}
          href={ctaHref}
          className={`inline-block px-8 py-4 text-lg font-semibold rounded-full border-2 transition-all duration-200 hover:scale-105 mb-6 ${
            isDark
              ? "bg-transparent border-gray-600 text-white hover:bg-gray-800"
              : "bg-white border-gray-300 text-gray-900 hover:bg-gray-50"
          }`}
        >
          {ctaText}
        </motion.a>

        {/* Social Proof */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="flex flex-col items-center gap-2"
        >
          {/* Avatar Group */}
          <div className="flex -space-x-3">
            {IMAGES.avatars.map((avatar, index) => (
              <Image
                key={index}
                src={avatar.path}
                alt={avatar.alt}
                width={36}
                height={36}
                className={`w-9 h-9 rounded-full border-2 ${
                  isDark ? "border-gray-950" : "border-white"
                }`}
              />
            ))}
          </div>
          <p
            className={`text-sm italic ${
              isDark ? "text-gray-400" : "text-gray-600"
            }`}
          >
            <span
              className={`font-semibold ${
                isDark ? "text-white" : "text-gray-900"
              }`}
            >
              {socialProofCount}
            </span>{" "}
            {socialProofText}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
