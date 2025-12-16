"use client";

// ============================================================================
// CUSTOMIZATION - 이 섹션의 값들을 수정하여 프로젝트에 맞게 조정하세요
// ============================================================================

/**
 * 커스텀 색상 (브랜드 컬러)
 */
const COLORS = {
  background: "#ffffff",
  textPrimary: "#1a1a1a",
  textSecondary: "#6b7280",
  textMuted: "#9ca3af",
  accent: "#4a90d9",
  accentLight: "#87ceeb",
  codeKeyword: "#e74c3c",
  codeString: "#e74c3c",
  codeComment: "#9ca3af",
  chatBubble: "#4a90d9",
  chatBubbleLight: "#e5e7eb",
  skyGradientStart: "#5ba3e0",
  skyGradientEnd: "#87ceeb",
} as const;

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { motion } from "motion/react";
import "./font.css";

// Types
interface FeatureCard {
  label: string;
  title: string;
  type: "chat" | "privacy" | "lightweight" | "code";
}

interface SaaspoFeatureSectionsCapProps {
  eyebrow?: string;
  title?: string;
  description?: string;
  features?: FeatureCard[];
}

// Default content
const DEFAULT_CONTENT = {
  eyebrow: "powerful features",
  title: "Crafted for simplicity",
  description:
    "We believe great tools should make your life easier, not more complicated. Cap is crafted to streamline your workflow, so you can record, edit, and share without jumping through hoops.",
  features: [
    {
      label: "ease of use",
      title: "Built for everyone",
      type: "chat" as const,
    },
    {
      label: "",
      title: "Privacy-First",
      type: "privacy" as const,
    },
    {
      label: "",
      title: "Lightweight",
      type: "lightweight" as const,
    },
    {
      label: "we are",
      title: "Open Source",
      type: "code" as const,
    },
  ],
};

// Chat UI Mockup
function ChatMockup() {
  return (
    <div className="mt-4 space-y-3">
      {/* Outgoing message */}
      <div className="flex justify-end">
        <div
          className="px-4 py-2.5 rounded-2xl text-white text-sm max-w-[240px]"
          style={{ backgroundColor: COLORS.chatBubble }}
        >
          yo grandma, can you send me over that Cap you recorded?
        </div>
      </div>

      {/* Reply with link */}
      <div className="flex justify-start">
        <div
          className="px-4 py-2.5 rounded-2xl text-sm max-w-[220px]"
          style={{ backgroundColor: COLORS.chatBubbleLight }}
        >
          <a
            href="#"
            className="text-blue-500 hover:underline block text-xs mb-1"
          >
            cap.link/z2ha3dv61q5hrde
          </a>
          <span style={{ color: COLORS.textPrimary }}>
            Check my face at 3:16 lol{" "}
            <span role="img" aria-label="laughing">
              😂
            </span>
          </span>
        </div>
      </div>

      {/* Outgoing reply */}
      <div className="flex justify-end">
        <div
          className="px-4 py-2.5 rounded-2xl text-white text-sm"
          style={{ backgroundColor: COLORS.chatBubble }}
        >
          you&apos;re the best{" "}
          <span role="img" aria-label="fire">
            🔥
          </span>
        </div>
      </div>
    </div>
  );
}

// Privacy Card with sky and pill/cloud shape
function PrivacyCard() {
  return (
    <div
      className="relative h-[280px] rounded-2xl overflow-hidden flex items-center justify-center"
      style={{
        background: `linear-gradient(180deg, ${COLORS.skyGradientStart} 0%, ${COLORS.skyGradientEnd} 100%)`,
      }}
    >
      {/* Cloud shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute top-[60%] left-[10%] w-32 h-16 rounded-full opacity-60"
          style={{ backgroundColor: "rgba(255, 255, 255, 0.7)" }}
        />
        <div
          className="absolute top-[70%] left-[25%] w-24 h-12 rounded-full opacity-50"
          style={{ backgroundColor: "rgba(255, 255, 255, 0.6)" }}
        />
        <div
          className="absolute top-[65%] right-[20%] w-28 h-14 rounded-full opacity-55"
          style={{ backgroundColor: "rgba(255, 255, 255, 0.65)" }}
        />
      </div>

      {/* Pill/capsule shape */}
      <div className="relative z-10">
        <div
          className="w-24 h-48 rounded-full"
          style={{
            background:
              "linear-gradient(180deg, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.4) 100%)",
            boxShadow: "0 8px 32px rgba(0, 0, 0, 0.1)",
          }}
        />
      </div>

      {/* Title overlay */}
      <h3 className="absolute bottom-8 left-0 right-0 text-center text-white text-3xl font-semibold">
        Privacy-First
      </h3>
    </div>
  );
}

// Lightweight Card with airplane
function LightweightCard() {
  return (
    <div
      className="relative h-[280px] rounded-2xl overflow-hidden flex items-center justify-center"
      style={{
        background: `linear-gradient(180deg, ${COLORS.skyGradientStart} 0%, ${COLORS.skyGradientEnd} 100%)`,
      }}
    >
      {/* Cloud shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute top-[20%] left-[5%] w-40 h-20 rounded-full opacity-50"
          style={{ backgroundColor: "rgba(255, 255, 255, 0.6)" }}
        />
        <div
          className="absolute top-[30%] right-[10%] w-32 h-16 rounded-full opacity-45"
          style={{ backgroundColor: "rgba(255, 255, 255, 0.5)" }}
        />
        <div
          className="absolute bottom-[25%] left-[20%] w-36 h-18 rounded-full opacity-55"
          style={{ backgroundColor: "rgba(255, 255, 255, 0.55)" }}
        />
      </div>

      {/* Airplane SVG */}
      <div className="relative z-10 -rotate-12">
        <svg
          width="160"
          height="160"
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Airplane body */}
          <ellipse cx="50" cy="50" rx="35" ry="8" fill="white" />
          {/* Nose */}
          <path d="M85 50 L95 50 L85 48 L85 52 Z" fill="white" />
          {/* Tail */}
          <path d="M15 50 L8 42 L18 50 L8 58 Z" fill="white" />
          {/* Wings */}
          <path d="M40 50 L55 20 L60 20 L50 50 Z" fill="white" />
          <path d="M40 50 L55 80 L60 80 L50 50 Z" fill="white" />
          {/* Tail wing */}
          <path d="M18 50 L25 38 L28 38 L22 50 Z" fill="white" />
          <path d="M18 50 L25 62 L28 62 L22 50 Z" fill="white" />
          {/* Windows */}
          <circle cx="55" cy="48" r="2" fill="#87ceeb" />
          <circle cx="65" cy="48" r="2" fill="#87ceeb" />
          <circle cx="75" cy="48" r="2" fill="#87ceeb" />
        </svg>
      </div>

      {/* Title overlay */}
      <h3 className="absolute bottom-8 left-0 right-0 text-center text-white text-3xl font-semibold">
        Lightweight
      </h3>
    </div>
  );
}

// Code Snippet Mockup
function CodeMockup() {
  const codeLines = [
    { num: 1, content: "project", keyword: true, rest: " = {" },
    { num: 2, content: '  "name"', keyword: true, rest: ': "cap",' },
    { num: 3, content: '  "opensource"', keyword: true, rest: ': "true",' },
    { num: 4, content: '  "public"', keyword: true, rest: ": true" },
    { num: 5, content: "}", keyword: false, rest: "" },
    {
      num: 6,
      content: "# this project is open-source",
      keyword: false,
      isComment: true,
    },
    { num: 7, content: "", keyword: false, rest: "" },
    {
      num: 8,
      content: "and available to the public",
      keyword: false,
      isComment: true,
    },
  ];

  return (
    <div className="mt-4 font-mono text-sm">
      {codeLines.map((line) => (
        <div key={line.num} className="flex">
          <span
            className="w-6 text-right mr-3 select-none"
            style={{ color: COLORS.textMuted }}
          >
            {line.num}
          </span>
          {line.isComment ? (
            <span style={{ color: COLORS.codeComment }}>{line.content}</span>
          ) : (
            <span>
              {line.keyword && (
                <span style={{ color: COLORS.codeKeyword }}>{line.content}</span>
              )}
              {!line.keyword && (
                <span style={{ color: COLORS.textPrimary }}>{line.content}</span>
              )}
              <span style={{ color: COLORS.textPrimary }}>{line.rest}</span>
            </span>
          )}
        </div>
      ))}
    </div>
  );
}

// Feature Card Component
function FeatureCardComponent({
  feature,
  index,
}: {
  feature: FeatureCard;
  index: number;
}) {
  const isFullCard = feature.type === "privacy" || feature.type === "lightweight";

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className={`flex flex-col ${isFullCard ? "" : "min-w-[280px]"}`}
    >
      {!isFullCard && feature.label && (
        <span
          className="text-sm mb-2"
          style={{
            color: COLORS.textMuted,
            fontFamily: "'Instrument Serif', serif",
            fontStyle: "italic",
          }}
        >
          {feature.label}
        </span>
      )}

      {!isFullCard && (
        <h3
          className="text-xl font-semibold mb-2"
          style={{ color: COLORS.textPrimary }}
        >
          {feature.title}
        </h3>
      )}

      {feature.type === "chat" && <ChatMockup />}
      {feature.type === "privacy" && <PrivacyCard />}
      {feature.type === "lightweight" && <LightweightCard />}
      {feature.type === "code" && <CodeMockup />}
    </motion.div>
  );
}

export default function SaaspoFeatureSectionsCap({
  eyebrow = DEFAULT_CONTENT.eyebrow,
  title = DEFAULT_CONTENT.title,
  description = DEFAULT_CONTENT.description,
  features = DEFAULT_CONTENT.features,
}: SaaspoFeatureSectionsCapProps) {
  return (
    <section
      className="relative w-full py-16 md:py-24 px-4"
      style={{ backgroundColor: COLORS.background }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          {/* Eyebrow */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-lg md:text-xl mb-4"
            style={{
              color: COLORS.textMuted,
              fontFamily: "'Instrument Serif', serif",
              fontStyle: "italic",
            }}
          >
            {eyebrow}
          </motion.p>

          {/* Title */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-6"
            style={{
              color: COLORS.textPrimary,
              fontFamily: "'Instrument Serif', serif",
            }}
          >
            {title}
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-base md:text-lg max-w-3xl mx-auto leading-relaxed"
            style={{ color: COLORS.textSecondary }}
          >
            {description}
          </motion.p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-4 items-start">
          {features.map((feature, index) => (
            <FeatureCardComponent key={index} feature={feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
