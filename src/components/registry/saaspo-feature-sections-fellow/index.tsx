"use client";

// ============================================================================
// CUSTOMIZATION - 이 섹션의 값들을 수정하여 프로젝트에 맞게 조정하세요
// ============================================================================

/**
 * 커스텀 색상 (브랜드 컬러)
 */
const COLORS = {
  light: {
    accent: "#2840de",
    accentHover: "#1e35c5",
    titlePurple: "#6f52e8",
    titleDark: "#1b1b3f",
    labelPurple: "#6f52e8",
    textGray: "#4b5563",
    badgeText: "#374151",
  },
  dark: {
    accent: "#4f6af0",
    accentHover: "#3d58e0",
    titlePurple: "#8b72f5",
    titleDark: "#e0e0ff",
    labelPurple: "#8b72f5",
    textGray: "#9ca3af",
    badgeText: "#d1d5db",
  },
} as const;

/**
 * 이미지 에셋
 */
const IMAGES = {
  meetingNotes: {
    path: "/registry/saaspo-feature-sections-fellow/meeting-notes.png",
    alt: "AI meeting notes interface showing weekly team meeting with highlights, summary, and video recording",
    prompt: `<is_transparent_background>false</is_transparent_background>
<summary>AI meeting notes dashboard interface showing a team video meeting</summary>
<mood>Professional, clean, modern SaaS product UI</mood>
<background_summary>Light purple gradient background fading from light purple on top to transparent on bottom</background_summary>
<primary_element>A floating browser window showing a meeting notes interface with tabs for Highlights, Transcript, Scan. Left side shows summary text and action items. Right side shows a video player with a person waving during a video call. The interface has a clean white background with subtle shadows.</primary_element>
<etc_element>Chapter markers showing "Product Feature Plan Update" and timestamp indicators</etc_element>`,
  },
  askFellow: {
    path: "/registry/saaspo-feature-sections-fellow/ask-fellow.png",
    alt: "Ask Fellow AI chatbot interface with suggested prompts",
    prompt: `<is_transparent_background>false</is_transparent_background>
<summary>AI copilot chat interface for meeting insights</summary>
<mood>Professional, clean, modern SaaS product UI</mood>
<background_summary>Light teal/cyan gradient background fading from light cyan on top to transparent on bottom</background_summary>
<primary_element>A floating browser window showing "Ask Fellow Copilot" interface. Contains a chat input field with placeholder "Ask Copilot a question" and suggested prompt buttons like "What meetings from last week..." "What decisions were made..." "What action items were assigned..."</primary_element>
<etc_element>Calendar sidebar showing September month view on the left side of the interface</etc_element>`,
  },
} as const;

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { motion } from "motion/react";
import { FileText, Sparkles, Play, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Badge {
  icon: "soc2" | "hipaa";
  title: string;
  subtitle: string;
}

interface Feature {
  icon: "notes" | "insights";
  label: string;
  title: string;
  description: string;
  buttonText: string;
  buttonHref: string;
  imagePosition: "left" | "right";
  imagePlaceholder: "meetingNotes" | "askFellow";
}

interface SaaspoFeatureSectionsFellowProps {
  mode?: "light" | "dark";
  titleLine1?: string;
  titleAccent?: string;
  subtitle?: string;
  badges?: Badge[];
  features?: Feature[];
}

const defaultBadges: Badge[] = [
  { icon: "soc2", title: "SOC2", subtitle: "Audited" },
  { icon: "hipaa", title: "HIPAA", subtitle: "Compliant" },
];

const defaultFeatures: Feature[] = [
  {
    icon: "notes",
    label: "AI meeting notes",
    title: "Automatically capture meeting notes and action items",
    description:
      "Get the most accurate meeting transcription– automatically! Fellow joins your meetings and takes notes and action items for you so you can focus on the discussion.",
    buttonText: "Get started",
    buttonHref: "#",
    imagePosition: "right",
    imagePlaceholder: "meetingNotes",
  },
  {
    icon: "insights",
    label: "AI meeting insights",
    title: "Ask Fellow",
    description:
      'Get insights across your meetings with your own AI meeting chatbot. Prompt "Ask Fellow" to catch you up on meetings you missed, answer questions about specific meetings, and even write follow-up emails after a meeting.',
    buttonText: "Get started",
    buttonHref: "#",
    imagePosition: "left",
    imagePlaceholder: "askFellow",
  },
];

// SOC2 Badge Icon
function SOC2Icon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <circle cx="20" cy="20" r="18" stroke="currentColor" strokeWidth="2" />
      <path
        d="M20 8v24M8 20h24"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <circle cx="20" cy="20" r="6" stroke="currentColor" strokeWidth="2" />
    </svg>
  );
}

// HIPAA Badge Icon
function HIPAAIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M20 4l12 6v10c0 7.2-5.1 13.9-12 16-6.9-2.1-12-8.8-12-16V10l12-6z"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
      />
      <path
        d="M15 20l3 3 7-7"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

// Meeting Notes Screenshot Placeholder
function MeetingNotesPlaceholder({ mode }: { mode: "light" | "dark" }) {
  const isDark = mode === "dark";
  return (
    <div
      className={`relative w-full aspect-[4/3] rounded-2xl overflow-hidden ${
        isDark
          ? "bg-gradient-to-b from-purple-900/50 to-purple-950/30"
          : "bg-gradient-to-b from-purple-200/80 to-purple-100/40"
      }`}
    >
      <div
        className={`absolute inset-4 rounded-xl shadow-2xl ${
          isDark ? "bg-gray-800" : "bg-white"
        }`}
      >
        {/* Browser chrome */}
        <div
          className={`flex items-center gap-2 px-4 py-3 border-b ${
            isDark ? "border-gray-700" : "border-gray-200"
          }`}
        >
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-red-400" />
            <div className="w-3 h-3 rounded-full bg-yellow-400" />
            <div className="w-3 h-3 rounded-full bg-green-400" />
          </div>
          <div
            className={`ml-4 flex-1 text-xs font-medium ${
              isDark ? "text-gray-300" : "text-gray-600"
            }`}
          >
            Weekly Team Meeting
          </div>
        </div>
        {/* Content area */}
        <div className="flex h-[calc(100%-48px)]">
          {/* Left panel - Notes */}
          <div
            className={`flex-1 p-4 border-r ${
              isDark ? "border-gray-700" : "border-gray-200"
            }`}
          >
            <div className="flex gap-4 mb-4">
              {["Highlights", "Transcript", "Scan"].map((tab, i) => (
                <span
                  key={tab}
                  className={`text-xs ${
                    i === 0
                      ? isDark
                        ? "text-purple-400 font-medium"
                        : "text-purple-600 font-medium"
                      : isDark
                        ? "text-gray-500"
                        : "text-gray-400"
                  }`}
                >
                  {tab}
                </span>
              ))}
            </div>
            <div className="space-y-3">
              <div
                className={`h-3 rounded w-20 ${
                  isDark ? "bg-gray-700" : "bg-gray-200"
                }`}
              />
              <div className="space-y-2">
                {[1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className={`h-2 rounded w-full ${
                      isDark ? "bg-gray-700/60" : "bg-gray-100"
                    }`}
                  />
                ))}
              </div>
              <div
                className={`h-3 rounded w-24 mt-4 ${
                  isDark ? "bg-gray-700" : "bg-gray-200"
                }`}
              />
              <div className="space-y-2">
                {[1, 2].map((i) => (
                  <div
                    key={i}
                    className={`h-2 rounded w-3/4 ${
                      isDark ? "bg-gray-700/60" : "bg-gray-100"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
          {/* Right panel - Video */}
          <div className="flex-1 p-4">
            <div
              className={`relative aspect-video rounded-lg overflow-hidden ${
                isDark ? "bg-gray-700" : "bg-gray-200"
              }`}
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <div
                  className={`w-12 h-12 rounded-full flex items-center justify-center ${
                    isDark ? "bg-gray-600" : "bg-white/80"
                  }`}
                >
                  <Play
                    className={`w-5 h-5 ${isDark ? "text-gray-300" : "text-gray-600"}`}
                  />
                </div>
              </div>
            </div>
            <div className="mt-4 space-y-2">
              <div
                className={`h-2 rounded w-20 ${
                  isDark ? "bg-gray-700" : "bg-gray-200"
                }`}
              />
              <div
                className={`h-2 rounded w-32 ${
                  isDark ? "bg-gray-700/60" : "bg-gray-100"
                }`}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Ask Fellow Screenshot Placeholder
function AskFellowPlaceholder({ mode }: { mode: "light" | "dark" }) {
  const isDark = mode === "dark";
  return (
    <div
      className={`relative w-full aspect-[4/3] rounded-2xl overflow-hidden ${
        isDark
          ? "bg-gradient-to-b from-cyan-900/50 to-teal-950/30"
          : "bg-gradient-to-b from-cyan-200/80 to-teal-100/40"
      }`}
    >
      <div
        className={`absolute inset-4 rounded-xl shadow-2xl ${
          isDark ? "bg-gray-800" : "bg-white"
        }`}
      >
        {/* Browser chrome */}
        <div
          className={`flex items-center gap-2 px-4 py-3 border-b ${
            isDark ? "border-gray-700" : "border-gray-200"
          }`}
        >
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-red-400" />
            <div className="w-3 h-3 rounded-full bg-yellow-400" />
            <div className="w-3 h-3 rounded-full bg-green-400" />
          </div>
          <div
            className={`ml-4 flex-1 text-xs font-medium ${
              isDark ? "text-gray-300" : "text-gray-600"
            }`}
          >
            Ask Fellow Copilot
          </div>
        </div>
        {/* Content area */}
        <div className="flex h-[calc(100%-48px)]">
          {/* Left panel - Calendar */}
          <div
            className={`w-1/3 p-4 border-r ${
              isDark ? "border-gray-700" : "border-gray-200"
            }`}
          >
            <div
              className={`text-xs font-medium mb-3 ${
                isDark ? "text-gray-300" : "text-gray-600"
              }`}
            >
              September
            </div>
            <div className="grid grid-cols-7 gap-1">
              {[...Array(30)].map((_, i) => (
                <div
                  key={i}
                  className={`aspect-square rounded text-[8px] flex items-center justify-center ${
                    i === 14
                      ? "bg-purple-500 text-white"
                      : isDark
                        ? "text-gray-500"
                        : "text-gray-400"
                  }`}
                >
                  {i + 1}
                </div>
              ))}
            </div>
          </div>
          {/* Right panel - Chat */}
          <div className="flex-1 p-4 flex flex-col">
            <div className="flex-1 flex flex-col items-center justify-center">
              <div
                className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${
                  isDark ? "bg-purple-900/50" : "bg-purple-100"
                }`}
              >
                <MessageSquare
                  className={`w-6 h-6 ${isDark ? "text-purple-400" : "text-purple-600"}`}
                />
              </div>
              <div
                className={`text-sm font-medium mb-2 ${
                  isDark ? "text-gray-200" : "text-gray-800"
                }`}
              >
                Ask Copilot a question
              </div>
              <div
                className={`text-xs text-center ${
                  isDark ? "text-gray-500" : "text-gray-400"
                }`}
              >
                Your AI meeting assistant
              </div>
            </div>
            {/* Suggested prompts */}
            <div className="space-y-2">
              {[
                "What meetings from last week...",
                "What decisions were made...",
                "What action items were...",
              ].map((prompt, i) => (
                <div
                  key={i}
                  className={`text-xs px-3 py-2 rounded-lg ${
                    isDark
                      ? "bg-gray-700/50 text-gray-400"
                      : "bg-gray-100 text-gray-500"
                  }`}
                >
                  {prompt}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function SaaspoFeatureSectionsFellow({
  mode = "light",
  titleLine1 = "Privacy First,",
  titleAccent = "Always",
  subtitle = "Fellow is the only AI meeting assistant with the privacy and control settings to ensure your centralized meeting recordings, notes, and summaries are only accessible by the right people.",
  badges = defaultBadges,
  features = defaultFeatures,
}: SaaspoFeatureSectionsFellowProps) {
  const colors = COLORS[mode];
  const isDark = mode === "dark";

  return (
    <section
      className={`relative w-full py-20 ${isDark ? "bg-gray-950" : "bg-white"}`}
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-medium mb-6">
            <span
              className="italic"
              style={{
                color: colors.titlePurple,
                fontFamily: "Georgia, 'Times New Roman', serif",
              }}
            >
              {titleLine1}
            </span>{" "}
            <span
              className="font-bold not-italic"
              style={{
                color: colors.titleDark,
                fontFamily: "Georgia, 'Times New Roman', serif",
              }}
            >
              {titleAccent}
            </span>
          </h2>
          <p
            className={`text-base md:text-lg max-w-3xl mx-auto leading-relaxed ${
              isDark ? "text-gray-400" : "text-gray-600"
            }`}
          >
            {subtitle}
          </p>

          {/* Badges */}
          <div className="flex items-center justify-center gap-8 mt-8">
            {badges.map((badge, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                className="flex items-center gap-3"
              >
                {badge.icon === "soc2" ? (
                  <SOC2Icon
                    className={`w-10 h-10 ${isDark ? "text-gray-400" : "text-gray-500"}`}
                  />
                ) : (
                  <HIPAAIcon
                    className={`w-10 h-10 ${isDark ? "text-gray-400" : "text-gray-500"}`}
                  />
                )}
                <div className="text-left">
                  <div
                    className={`text-sm font-semibold ${
                      isDark ? "text-gray-200" : "text-gray-800"
                    }`}
                  >
                    {badge.title}
                  </div>
                  <div
                    className={`text-xs ${isDark ? "text-gray-500" : "text-gray-500"}`}
                  >
                    {badge.subtitle}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Feature Sections */}
        <div className="space-y-24">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className={`flex flex-col gap-8 items-center ${
                feature.imagePosition === "right"
                  ? "lg:flex-row"
                  : "lg:flex-row-reverse"
              }`}
            >
              {/* Text Content */}
              <div className="flex-1 max-w-lg">
                <div
                  className="flex items-center gap-2 mb-4"
                  style={{ color: colors.labelPurple }}
                >
                  {feature.icon === "notes" ? (
                    <FileText className="w-4 h-4" />
                  ) : (
                    <Sparkles className="w-4 h-4" />
                  )}
                  <span className="text-sm font-medium">{feature.label}</span>
                </div>
                <h3
                  className={`text-2xl md:text-3xl font-bold mb-4 leading-tight ${
                    isDark ? "text-white" : "text-gray-900"
                  }`}
                >
                  {feature.title}
                </h3>
                <p
                  className={`text-base leading-relaxed mb-6 ${
                    isDark ? "text-gray-400" : "text-gray-600"
                  }`}
                >
                  {feature.description}
                </p>
                <Button
                  asChild
                  className="rounded-lg px-6 py-3 text-sm font-medium text-white transition-colors"
                  style={{
                    backgroundColor: colors.accent,
                  }}
                >
                  <a
                    href={feature.buttonHref}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.backgroundColor =
                        colors.accentHover)
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.backgroundColor = colors.accent)
                    }
                  >
                    {feature.buttonText}
                  </a>
                </Button>
              </div>

              {/* Image/Screenshot */}
              <div className="flex-1 w-full max-w-xl">
                {feature.imagePlaceholder === "meetingNotes" ? (
                  <MeetingNotesPlaceholder mode={mode} />
                ) : (
                  <AskFellowPlaceholder mode={mode} />
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
