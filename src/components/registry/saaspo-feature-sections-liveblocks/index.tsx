"use client";

// ============================================================================
// CUSTOMIZATION - 이 섹션의 값들을 수정하여 프로젝트에 맞게 조정하세요
// ============================================================================

/**
 * 커스텀 색상 (브랜드 컬러)
 */
const COLORS = {
  background: "#0a0a0a",
  cardBackground: "#141414",
  cardBorder: "#222222",
  textPrimary: "#ffffff",
  textSecondary: "#888888",
  textMuted: "#555555",
  // Feature-specific accent colors
  orange: "#b54d1a",
  purple: "#9945ff",
  magenta: "#e91e8c",
  lime: "#c4ff00",
  cyan: "#00c7b7",
  blue: "#3b82f6",
} as const;

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { motion } from "motion/react";
import {
  Bold,
  Italic,
  Strikethrough,
  Search,
  AtSign,
  Smile,
  Paperclip,
  ArrowUp,
  Check,
  Bell,
} from "lucide-react";

interface SaaspoFeatureSectionsLiveblocksProps {
  title?: string;
  subtitle?: string;
  highlightedText?: string;
  endHighlightedText?: string;
}

// Animation variants
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
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
};

// Feature Card Component
function FeatureCard({
  title,
  description,
  children,
  className = "",
}: {
  title: string;
  description: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      variants={itemVariants}
      className={`relative overflow-hidden rounded-2xl p-6 ${className}`}
      style={{
        background: COLORS.cardBackground,
        border: `1px solid ${COLORS.cardBorder}`,
      }}
    >
      <div className="mb-6">
        <h3
          className="mb-2 text-lg font-semibold"
          style={{ color: COLORS.textPrimary }}
        >
          {title}
        </h3>
        <p className="text-sm leading-relaxed" style={{ color: COLORS.textSecondary }}>
          {description}
        </p>
      </div>
      <div className="relative">{children}</div>
    </motion.div>
  );
}

// Comments Feature
function CommentsFeature() {
  return (
    <div className="flex items-start gap-3">
      <div
        className="h-8 w-8 shrink-0 rounded-full"
        style={{
          background: `radial-gradient(circle at 30% 30%, ${COLORS.orange}, #2a1a0a)`,
        }}
      />
      <div
        className="flex-1 rounded-xl p-3"
        style={{ background: "#1a1a1a", border: `1px solid ${COLORS.cardBorder}` }}
      >
        <p className="text-sm" style={{ color: COLORS.textSecondary }}>
          <span className="font-medium" style={{ color: COLORS.textPrimary }}>
            @Alicia
          </span>{" "}
          can you update t
        </p>
        <div className="mt-3 flex gap-3">
          <AtSign className="h-4 w-4" style={{ color: COLORS.textMuted }} />
          <Smile className="h-4 w-4" style={{ color: COLORS.textMuted }} />
          <Paperclip className="h-4 w-4" style={{ color: COLORS.textMuted }} />
        </div>
      </div>
    </div>
  );
}

// Text Editor Feature
function TextEditorFeature() {
  return (
    <div>
      <div
        className="mb-4 flex items-center gap-1 rounded-lg p-1"
        style={{ background: "#1a1a1a" }}
      >
        <button
          className="rounded p-2"
          style={{ background: COLORS.blue }}
        >
          <Bold className="h-4 w-4" style={{ color: COLORS.textPrimary }} />
        </button>
        <button className="rounded p-2">
          <Italic className="h-4 w-4" style={{ color: COLORS.textSecondary }} />
        </button>
        <button className="rounded p-2">
          <Strikethrough className="h-4 w-4" style={{ color: COLORS.textSecondary }} />
        </button>
        <button className="rounded p-2">
          <Search className="h-4 w-4" style={{ color: COLORS.textSecondary }} />
        </button>
      </div>
      <div className="relative">
        <div
          className="absolute -top-2 right-12 rounded px-2 py-0.5 text-xs font-medium"
          style={{ background: "#f5d76e", color: "#1a1a1a" }}
        >
          Jonathan
        </div>
        <p className="text-3xl font-semibold tracking-tight">
          <span style={{ color: COLORS.textPrimary }}>Co-</span>
          <span style={{ color: COLORS.purple }}>edit</span>
          <span style={{ color: COLORS.textMuted }}>ing</span>
        </p>
        <p
          className="text-3xl font-semibold tracking-tight"
          style={{ color: COLORS.textMuted }}
        >
          like Google D
        </p>
      </div>
    </div>
  );
}

// AI Copilots Feature
function AICopilotFeature() {
  return (
    <div>
      <p className="mb-4 text-2xl font-semibold md:text-3xl">
        <span style={{ color: COLORS.textPrimary }}>Collaborate with AI </span>
        <span style={{ color: COLORS.textMuted }}>like you would with a hu</span>
      </p>
      <div className="space-y-2">
        <div
          className="flex items-center gap-3 rounded-xl px-4 py-3"
          style={{ background: "#1a1a1a", border: `1px solid ${COLORS.cardBorder}` }}
        >
          <div
            className="h-5 w-5 rounded-full"
            style={{
              background: `linear-gradient(135deg, ${COLORS.magenta}, ${COLORS.orange})`,
            }}
          />
          <span className="flex-1 text-sm" style={{ color: COLORS.textMuted }}>
            Ask AI anything...
          </span>
          <div
            className="flex h-6 w-6 items-center justify-center rounded"
            style={{ background: COLORS.cardBorder }}
          >
            <ArrowUp className="h-3 w-3" style={{ color: COLORS.textMuted }} />
          </div>
        </div>
        <div
          className="rounded-xl px-4 py-3"
          style={{ background: "#1a1a1a", border: `1px solid ${COLORS.cardBorder}` }}
        >
          <p className="mb-2 text-xs" style={{ color: COLORS.textMuted }}>
            Modify selection
          </p>
          <div className="flex items-center gap-2">
            <Check className="h-4 w-4" style={{ color: COLORS.purple }} />
            <span className="text-sm" style={{ color: COLORS.textSecondary }}>
              Fix spelling
            </span>
          </div>
          <div className="mt-1 flex items-center gap-2 opacity-50">
            <span className="text-sm" style={{ color: COLORS.textMuted }}>
              Translate to French
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

// Notifications Feature
function NotificationsFeature() {
  return (
    <div
      className="rounded-xl p-4"
      style={{ background: "#1a1a1a", border: `1px solid ${COLORS.cardBorder}` }}
    >
      <div className="mb-4 flex items-center gap-2">
        <Bell className="h-4 w-4" style={{ color: COLORS.textPrimary }} />
        <span className="font-medium" style={{ color: COLORS.textPrimary }}>
          Inbox
        </span>
        <div className="ml-auto flex gap-1">
          <div
            className="h-2 w-8 rounded-full"
            style={{ background: COLORS.blue }}
          />
          <div
            className="h-2 w-6 rounded-full"
            style={{ background: COLORS.cardBorder }}
          />
        </div>
      </div>
      <div className="space-y-3">
        <div className="flex items-start gap-3">
          <div
            className="h-8 w-8 shrink-0 rounded-full"
            style={{ background: COLORS.cyan }}
          />
          <div className="min-w-0 flex-1">
            <p className="truncate text-sm" style={{ color: COLORS.textSecondary }}>
              <span className="font-medium" style={{ color: COLORS.textPrimary }}>
                Florent
              </span>{" "}
              mentioned you i
            </p>
            <p className="truncate text-xs" style={{ color: COLORS.textMuted }}>
              @Alicia can you update the i
            </p>
          </div>
        </div>
        <div className="flex items-start gap-3 opacity-60">
          <div
            className="h-8 w-8 shrink-0 rounded-full"
            style={{ background: COLORS.cardBorder }}
          />
          <div className="min-w-0 flex-1">
            <p className="truncate text-sm" style={{ color: COLORS.textSecondary }}>
              <span className="font-medium" style={{ color: COLORS.textPrimary }}>
                Vincent
              </span>{" "}
              invited you to a
            </p>
            <p className="truncate text-xs" style={{ color: COLORS.textMuted }}>
              Financial plan for 2025
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

// Cursor Component
function Cursor({
  color,
  name,
  message,
  style,
}: {
  color: string;
  name: string;
  message?: string;
  style?: React.CSSProperties;
}) {
  return (
    <div className="absolute" style={style}>
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        style={{ filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.3))" }}
      >
        <path
          d="M5.5 3L19 12.5L12 13.5L8.5 21L5.5 3Z"
          fill={color}
          stroke={color}
          strokeWidth="1"
          strokeLinejoin="round"
        />
      </svg>
      <div
        className="ml-4 mt-1 whitespace-nowrap rounded px-2 py-0.5 text-xs font-medium"
        style={{ background: color === COLORS.lime ? "#2a2a2a" : color, color: color === COLORS.lime ? COLORS.textPrimary : "#1a1a1a" }}
      >
        {name}
        {message && (
          <span className="ml-1 font-normal">{message}</span>
        )}
      </div>
    </div>
  );
}

// Presence Feature
function PresenceFeature() {
  return (
    <div className="relative h-48">
      {/* Pierre cursor - bottom left */}
      <Cursor
        color={COLORS.textPrimary}
        name="Pierre"
        style={{ left: "20%", bottom: "20%" }}
      />
      {/* Marc cursor - top right with message */}
      <div className="absolute" style={{ right: "15%", top: "20%" }}>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          style={{ filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.3))" }}
        >
          <path
            d="M5.5 3L19 12.5L12 13.5L8.5 21L5.5 3Z"
            fill={COLORS.lime}
            stroke={COLORS.lime}
            strokeWidth="1"
            strokeLinejoin="round"
          />
        </svg>
        <div
          className="ml-4 mt-1 rounded px-2 py-1 text-xs"
          style={{ background: "#2a2a2a" }}
        >
          <span className="font-medium" style={{ color: COLORS.textPrimary }}>
            Marc
          </span>
          <p className="font-normal" style={{ color: COLORS.textPrimary }}>
            Love it!
          </p>
        </div>
      </div>
      {/* Additional lime cursor */}
      <div className="absolute" style={{ right: "30%", top: "10%" }}>
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          style={{ filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.3))" }}
        >
          <path
            d="M5.5 3L19 12.5L12 13.5L8.5 21L5.5 3Z"
            fill={COLORS.lime}
            stroke={COLORS.lime}
            strokeWidth="1"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </div>
  );
}

export default function SaaspoFeatureSectionsLiveblocks({
  title = "Ready-made collaborative features.",
  subtitle = "Liveblocks provides ready-to-use features through",
  highlightedText = "customizable pre-built components",
  endHighlightedText = "that can easily be dropped into your product to boost growth.",
}: SaaspoFeatureSectionsLiveblocksProps) {
  return (
    <section
      className="relative w-full px-4 py-16 md:py-24"
      style={{ background: COLORS.background }}
    >
      <motion.div
        className="mx-auto max-w-4xl"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {/* Header */}
        <motion.div variants={itemVariants} className="mb-12 text-center">
          <h2
            className="mb-4 text-2xl font-semibold md:text-3xl"
            style={{ color: COLORS.textPrimary }}
          >
            {title}
          </h2>
          <p
            className="mx-auto max-w-2xl text-base leading-relaxed"
            style={{ color: COLORS.textSecondary }}
          >
            {subtitle}{" "}
            <span className="font-semibold" style={{ color: COLORS.textPrimary }}>
              {highlightedText}
            </span>{" "}
            {endHighlightedText.split("boost growth")[0]}
            <span className="font-semibold" style={{ color: COLORS.textPrimary }}>
              boost growth
            </span>
            .
          </p>
        </motion.div>

        {/* Feature Cards Grid */}
        <div className="grid gap-4">
          {/* Row 1: Comments and Text Editor */}
          <div className="grid gap-4 md:grid-cols-2">
            <FeatureCard
              title="Comments"
              description="Add contextual comments directly inside your product."
            >
              <CommentsFeature />
            </FeatureCard>
            <FeatureCard
              title="Text Editor"
              description="Add a collaborative rich text editor to your product."
            >
              <TextEditorFeature />
            </FeatureCard>
          </div>

          {/* Row 2: AI Copilots (full width) */}
          <FeatureCard
            title="AI Copilots"
            description="Enable your users to collaborate with AI right from your product."
          >
            <AICopilotFeature />
          </FeatureCard>

          {/* Row 3: Notifications and Presence */}
          <div className="grid gap-4 md:grid-cols-2">
            <FeatureCard
              title="Notifications"
              description="Embed an inbox in your app and keep users coming back."
            >
              <NotificationsFeature />
            </FeatureCard>
            <FeatureCard
              title="Presence"
              description="Bring realtime presence indicators to your product."
            >
              <PresenceFeature />
            </FeatureCard>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
