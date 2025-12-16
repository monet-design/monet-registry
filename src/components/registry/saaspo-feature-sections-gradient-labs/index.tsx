"use client";

// ============================================================================
// CUSTOMIZATION - 이 섹션의 값들을 수정하여 프로젝트에 맞게 조정하세요
// ============================================================================

/**
 * 커스텀 색상 (브랜드 컬러)
 */
const COLORS = {
  light: {
    background: "#F5F3EF",
    badge: "#F97316",
    badgeText: "#FFFFFF",
    title: "#1A1A1A",
    subtitle: "#6B7280",
    featureTitle: "#1A1A1A",
    featureText: "#6B7280",
    cardBg: "#FFFFFF",
    cardBorder: "#E5E7EB",
    videoBtnBg: "#1A1A1A",
    videoBtnText: "#FFFFFF",
  },
  dark: {
    background: "#1A1A1A",
    badge: "#F97316",
    badgeText: "#FFFFFF",
    title: "#F5F3EF",
    subtitle: "#9CA3AF",
    featureTitle: "#F5F3EF",
    featureText: "#9CA3AF",
    cardBg: "#262626",
    cardBorder: "#404040",
    videoBtnBg: "#FFFFFF",
    videoBtnText: "#1A1A1A",
  },
} as const;

// Feature icons colors
const ICON_COLORS = [
  "#F97316", // orange
  "#8B5CF6", // purple
  "#EAB308", // yellow
  "#22C55E", // green
  "#EF4444", // red
  "#84CC16", // lime
] as const;

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { motion } from "motion/react";
import {
  FileText,
  Sparkles,
  Lightbulb,
  Plug,
  MessageCircle,
  ShieldCheck,
  Play,
  Search,
  Settings,
  MoreHorizontal,
  X,
  ChevronRight,
  Link2,
  User,
  SquareStack,
  Workflow,
  CheckCircle,
} from "lucide-react";

interface Feature {
  icon: React.ReactNode;
  iconColor: string;
  title: string;
  description: string;
}

interface SaaspoFeatureSectionsGradientLabsProps {
  mode?: "light" | "dark";
  badge?: string;
  title?: string;
  subtitle?: string;
  features?: Feature[];
  videoButtonText?: string;
  onWatchVideo?: () => void;
}

const defaultFeatures: Feature[] = [
  {
    icon: <FileText className="w-5 h-5" />,
    iconColor: ICON_COLORS[0],
    title: "Procedure following AI agent",
    description:
      "Most chatbots can't handle this complexity, but our agent can read and synthesise any plain language guidance.",
  },
  {
    icon: <Sparkles className="w-5 h-5" />,
    iconColor: ICON_COLORS[1],
    title: "Absorbs your collective wisdom",
    description:
      "Learns about your company, products and customers' needs by reading your knowledge base and previous support chats, and gets smarter all the time.",
  },
  {
    icon: <Lightbulb className="w-5 h-5" />,
    iconColor: ICON_COLORS[2],
    title: "Unearths actionable insights",
    description:
      "Categorises, weighs and surfaces the issues your customers are facing totally automatically.",
  },
  {
    icon: <Plug className="w-5 h-5" />,
    iconColor: ICON_COLORS[3],
    title: "Easy integration",
    description:
      "Sits on your existing support platform, so no risky time-consuming replatforming.",
  },
  {
    icon: <MessageCircle className="w-5 h-5" />,
    iconColor: ICON_COLORS[4],
    title: "Conversation, not exasperation",
    description:
      "Doesn't feel like negotiating with a brick wall. Responds naturally and sensitively in conversation, just like a human would.",
  },
  {
    icon: <ShieldCheck className="w-5 h-5" />,
    iconColor: ICON_COLORS[5],
    title: "Total confidence before you deploy",
    description:
      "Test everything end-to-end in our web app before our agent gets near any actual customers.",
  },
];

type ColorScheme = typeof COLORS.light | typeof COLORS.dark;

// Procedure Editor UI Component
function ProcedureEditorUI({ colors }: { colors: ColorScheme }) {
  return (
    <div
      className="rounded-xl shadow-2xl overflow-hidden"
      style={{ backgroundColor: colors.cardBg }}
    >
      {/* Header */}
      <div
        className="flex items-center justify-between px-4 py-3 border-b"
        style={{ borderColor: colors.cardBorder }}
      >
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-gray-900 flex items-center justify-center">
            <span className="text-white text-xs font-bold">/</span>
          </div>
          <div className="flex items-center gap-2 text-sm" style={{ color: colors.subtitle }}>
            <X className="w-4 h-4" />
            <span>Close</span>
            <span className="mx-1">|</span>
            <span>Procedures</span>
            <ChevronRight className="w-3 h-3" />
            <span style={{ color: colors.featureTitle }}>Change travel itinerary</span>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <button className="p-2 rounded-lg hover:bg-gray-100">
            <Search className="w-4 h-4" style={{ color: colors.subtitle }} />
          </button>
          <button className="p-2 rounded-lg hover:bg-gray-100">
            <Settings className="w-4 h-4" style={{ color: colors.subtitle }} />
          </button>
          <button className="p-2 rounded-lg hover:bg-gray-100">
            <MoreHorizontal className="w-4 h-4" style={{ color: colors.subtitle }} />
          </button>
          <button className="px-3 py-1.5 text-sm rounded-lg border" style={{ borderColor: colors.cardBorder, color: colors.featureTitle }}>
            Test
          </button>
          <button className="px-3 py-1.5 text-sm rounded-lg text-white" style={{ backgroundColor: colors.badge }}>
            Publish
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="flex">
        {/* Sidebar */}
        <div className="w-12 border-r flex flex-col items-center py-4 gap-3" style={{ borderColor: colors.cardBorder }}>
          <button className="p-2 rounded-lg hover:bg-gray-100">
            <FileText className="w-4 h-4" style={{ color: colors.subtitle }} />
          </button>
          <button className="p-2 rounded-lg hover:bg-gray-100">
            <SquareStack className="w-4 h-4" style={{ color: colors.subtitle }} />
          </button>
          <button className="p-2 rounded-lg hover:bg-gray-100">
            <Link2 className="w-4 h-4" style={{ color: colors.subtitle }} />
          </button>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-6">
          <h3 className="text-lg font-semibold mb-2" style={{ color: colors.featureTitle }}>
            Change travel itinerary
          </h3>
          <p className="text-sm mb-4" style={{ color: colors.subtitle }}>
            Use this procedure when the customer is requesting to change their travel itinerary
          </p>

          {/* User */}
          <div className="flex items-center gap-2 mb-4">
            <div className="w-6 h-6 rounded-full bg-gray-200 flex items-center justify-center">
              <User className="w-3 h-3" style={{ color: colors.subtitle }} />
            </div>
            <span className="text-sm" style={{ color: colors.featureTitle }}>Dimitri Masin</span>
          </div>

          {/* Tabs */}
          <div className="flex gap-2 mb-6">
            <span className="px-3 py-1 text-xs rounded-full border" style={{ borderColor: colors.badge, color: colors.badge }}>
              Flight itinerary change
            </span>
            <span className="px-3 py-1 text-xs rounded-full border" style={{ borderColor: colors.cardBorder, color: colors.subtitle }}>
              Hotel itinerary change
            </span>
          </div>

          {/* Steps */}
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 rounded-full bg-gray-300 mt-2" />
              <div>
                <p className="text-xs" style={{ color: colors.subtitle }}>
                  Step 1: Determine customer's badge using the
                </p>
                <span className="text-xs px-2 py-0.5 rounded bg-gray-100" style={{ color: colors.featureTitle }}>
                  Retrieve badge
                </span>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 rounded-full bg-gray-300 mt-2" />
              <div>
                <p className="text-xs" style={{ color: colors.subtitle }}>
                  Step 2: Find out the booking id and retrieve the booking details using
                </p>
                <span className="text-xs px-2 py-0.5 rounded" style={{ backgroundColor: "#FEF3C7", color: "#92400E" }}>
                  Get booking details
                </span>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 rounded-full bg-gray-300 mt-2" />
              <p className="text-xs" style={{ color: colors.subtitle }}>
                Step 3: Inquire about preferences...
              </p>
            </div>
          </div>
        </div>

        {/* Right Panel */}
        <div className="w-48 border-l p-4" style={{ borderColor: colors.cardBorder }}>
          <p className="text-xs mb-3" style={{ color: colors.subtitle }}>Insert existing</p>
          <div className="space-y-2">
            <div className="p-2 rounded border text-xs" style={{ borderColor: colors.cardBorder }}>
              <p style={{ color: colors.featureTitle }}>Change booking</p>
              <p className="text-green-600">+ Use</p>
            </div>
            <div className="p-2 rounded border text-xs" style={{ borderColor: colors.cardBorder }}>
              <p style={{ color: colors.featureTitle }}>Get booking details</p>
              <p className="text-orange-500">+ Draft</p>
            </div>
            <div className="p-2 rounded border text-xs" style={{ borderColor: colors.cardBorder }}>
              <p style={{ color: colors.featureTitle }}>Offer alternatives sub-procedure</p>
              <p className="text-orange-500">+ Draft</p>
            </div>
          </div>
          <div className="mt-4 pt-4 border-t" style={{ borderColor: colors.cardBorder }}>
            <p className="text-xs mb-2" style={{ color: colors.subtitle }}>Insert new</p>
            <div className="flex items-center gap-2 text-xs" style={{ color: colors.featureTitle }}>
              <Workflow className="w-3 h-3" />
              <span>Tool</span>
            </div>
            <div className="flex items-center gap-2 text-xs mt-2" style={{ color: colors.featureTitle }}>
              <SquareStack className="w-3 h-3" />
              <span>Sub-procedure</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Decorative curve SVG
function DecorativeCurve({ color }: { color: string }) {
  return (
    <svg
      className="absolute top-0 left-0 w-48 h-48 opacity-30"
      viewBox="0 0 200 200"
      fill="none"
    >
      <path
        d="M0 100 Q 50 50, 100 80 T 200 60"
        stroke={color}
        strokeWidth="1"
        fill="none"
      />
      <path
        d="M0 120 Q 60 70, 120 100 T 200 80"
        stroke={color}
        strokeWidth="1"
        fill="none"
      />
    </svg>
  );
}

export default function SaaspoFeatureSectionsGradientLabs({
  mode = "light",
  badge = "Core features",
  title = "Introducing Otto — a\nprocedural AI agent",
  subtitle = "90% of customer service handling time isn't spent fetching answers to straightforward questions. People bounce around topics, use unexpected language, and want help that involves checking policies, reviewing data, or actually doing something – that's complex, and involves relying on written procedures.",
  features = defaultFeatures,
  videoButtonText = "Watch video",
  onWatchVideo,
}: SaaspoFeatureSectionsGradientLabsProps) {
  const colors = COLORS[mode];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  } as const;

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" as const },
    },
  };

  return (
    <section
      className="relative w-full py-20 px-6 lg:px-12 overflow-hidden"
      style={{ backgroundColor: colors.background }}
    >
      {/* Decorative curves */}
      <DecorativeCurve color={colors.subtitle} />

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          {/* Badge */}
          <span
            className="inline-block px-4 py-1.5 text-sm font-medium rounded-full mb-6"
            style={{ backgroundColor: colors.badge, color: colors.badgeText }}
          >
            {badge}
          </span>

          {/* Title */}
          <h2
            className="text-4xl md:text-5xl lg:text-6xl mb-6 max-w-4xl mx-auto leading-tight"
            style={{
              color: colors.title,
              fontFamily: "'Instrument Serif', Georgia, serif",
              fontStyle: "italic",
            }}
          >
            {title.split("\n").map((line, i) => (
              <span key={i}>
                {line}
                {i < title.split("\n").length - 1 && <br />}
              </span>
            ))}
          </h2>

          {/* Subtitle */}
          <p
            className="text-base md:text-lg max-w-3xl mx-auto leading-relaxed"
            style={{ color: colors.subtitle }}
          >
            {subtitle}
          </p>
        </motion.div>

        {/* Content */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Features List */}
          <motion.div
            className="space-y-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="flex gap-4"
                variants={itemVariants}
              >
                <div
                  className="flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center"
                  style={{ backgroundColor: `${feature.iconColor}15` }}
                >
                  <div style={{ color: feature.iconColor }}>{feature.icon}</div>
                </div>
                <div>
                  <h3
                    className="text-base font-semibold mb-1"
                    style={{ color: colors.featureTitle }}
                  >
                    {feature.title}
                  </h3>
                  <p
                    className="text-sm leading-relaxed"
                    style={{ color: colors.featureText }}
                  >
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Procedure Editor UI */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true }}
          >
            {/* Decorative wavy lines behind the UI */}
            <div className="absolute -top-8 -left-4 -right-4 h-16 overflow-hidden">
              <svg
                className="w-full h-full"
                viewBox="0 0 400 60"
                fill="none"
                preserveAspectRatio="none"
              >
                {[0, 1, 2, 3, 4].map((i) => (
                  <path
                    key={i}
                    d={`M0 ${30 + i * 5} Q 100 ${20 + i * 5}, 200 ${30 + i * 5} T 400 ${25 + i * 5}`}
                    stroke={colors.subtitle}
                    strokeWidth="0.5"
                    fill="none"
                    opacity={0.3}
                  />
                ))}
              </svg>
            </div>

            <ProcedureEditorUI colors={colors} />

            {/* Watch Video Button */}
            <motion.button
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center gap-2 px-6 py-3 rounded-full shadow-lg transition-transform hover:scale-105"
              style={{
                backgroundColor: colors.videoBtnBg,
                color: colors.videoBtnText,
              }}
              onClick={onWatchVideo}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Play className="w-4 h-4 fill-current" />
              <span className="font-medium">{videoButtonText}</span>
            </motion.button>
          </motion.div>
        </div>
      </div>

      {/* Import Instrument Serif font */}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&display=swap');
      `}</style>
    </section>
  );
}
