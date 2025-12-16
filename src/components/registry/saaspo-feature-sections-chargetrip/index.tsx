"use client";

// ============================================================================
// CUSTOMIZATION - 이 섹션의 값들을 수정하여 프로젝트에 맞게 조정하세요
// ============================================================================

/**
 * 커스텀 색상 (브랜드 컬러)
 */
const COLORS = {
  background: "#f0ede6", // Warm beige
  cardBackground: "#fefffa", // Off-white card
  codeBackground: "#081d20", // Dark teal
  accent: "#f84c00", // Orange-red for button/radio
  textPrimary: "#272320", // Dark brown/black
  textSecondary: "#5a5855", // Gray text
  textMuted: "#7d7a76", // Muted gray
  codeLineNumber: "#5a6b6d", // Teal-gray
  codeText: "#d3d0c1", // Light beige text
  codeKeyword: "#e07a5f", // Coral/salmon for mutation
  codeFunction: "#81b29a", // Teal for function names
  codeString: "#60cb93", // Green for strings
  codePurple: "#c77dff", // Purple for property names
  codeOperator: "#81b29a", // Teal for operators
  gradientPink: "#ea5a98",
  gradientPinkLight: "#e999cc",
  gradientOrange: "#f47940",
} as const;

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { motion } from "motion/react";
import { useState } from "react";
import "./font.css";

// Types
interface TabOption {
  id: string;
  label: string;
  description: string;
  additionalText?: string;
}

interface SaaspoFeatureSectionsChargetripProps {
  title?: string;
  subtitle?: string;
  tabs?: TabOption[];
  buttonText?: string;
  buttonHref?: string;
}

// Default content
const DEFAULT_CONTENT = {
  title: "EV routing and other EV driver tools.",
  subtitle: "Back-end and front-end solutions.",
  tabs: [
    {
      id: "api",
      label: "API: build it yourself",
      description:
        "Become the guide for your customers with simple building blocks in one API. Back-end solutions for building your own tools and products.",
      additionalText:
        "Build and scale with the GraphQL API developers love. Integrate and customize, then grow.",
    },
    {
      id: "no-code",
      label: "No-Code: prebuilt for you",
      description:
        "Ready-to-use front-end solutions that you can integrate without coding. Perfect for quick deployment.",
      additionalText:
        "Get started instantly with pre-built widgets and components. No development required.",
    },
  ] as TabOption[],
  buttonText: "Learn more",
  buttonHref: "#",
};

// Code line rendering helper
function renderCodeLine(parts: CodePart[]) {
  return parts.map((part, i) => (
    <span key={i} style={{ color: part.color }}>
      {part.text}
    </span>
  ));
}

interface CodePart {
  text: string;
  color: string;
}

interface CodeLineData {
  num: string;
  parts: CodePart[];
}

// GraphQL Code Display
function CodeEditor() {
  const codeLines: CodeLineData[] = [
    {
      num: "01",
      parts: [
        { text: "mutation", color: COLORS.codeKeyword },
        { text: " newRoute {", color: COLORS.codeFunction },
      ],
    },
    {
      num: "02",
      parts: [
        { text: "    newRoute", color: COLORS.codeFunction },
        { text: "(input: {", color: COLORS.codeText },
      ],
    },
    {
      num: "03",
      parts: [{ text: "        ev: {", color: COLORS.codeText }],
    },
    {
      num: "04",
      parts: [
        { text: '            id: ', color: COLORS.codeText },
        { text: '"646ca73f3f6beb1fcbdbdf70"', color: COLORS.codeText },
        { text: ",", color: COLORS.codeText },
      ],
    },
    {
      num: "05",
      parts: [
        { text: "            climate: ", color: COLORS.codeText },
        { text: "false", color: COLORS.codeText },
        { text: ",", color: COLORS.codeText },
      ],
    },
    {
      num: "06",
      parts: [
        { text: "            occupants: ", color: COLORS.codeText },
        { text: "2", color: COLORS.codeText },
        { text: ",", color: COLORS.codeText },
      ],
    },
    {
      num: "07",
      parts: [{ text: "            battery : {", color: COLORS.codeText }],
    },
    {
      num: "08",
      parts: [
        { text: "                capacity: { value: ", color: COLORS.codeText },
        { text: "100", color: COLORS.codeText },
        { text: ', type: ', color: COLORS.codeText },
        { text: '"percentage"', color: COLORS.codeText },
        { text: " },", color: COLORS.codeText },
      ],
    },
    {
      num: "09",
      parts: [
        { text: "                stateOfCharge: { value: ", color: COLORS.codeText },
        { text: "80", color: COLORS.codeText },
        { text: ', type: ', color: COLORS.codeText },
        { text: '"percentage"', color: COLORS.codeText },
        { text: " },", color: COLORS.codeText },
      ],
    },
    {
      num: "10",
      parts: [
        { text: "                finalStateOfCharge: { value: ", color: COLORS.codeText },
        { text: "10", color: COLORS.codeText },
        { text: ', type: ', color: COLORS.codeText },
        { text: '"percentage"', color: COLORS.codeText },
        { text: " },", color: COLORS.codeText },
      ],
    },
    {
      num: "11",
      parts: [{ text: "            },", color: COLORS.codeText }],
    },
    {
      num: "12",
      parts: [{ text: "        },", color: COLORS.codeText }],
    },
    {
      num: "13",
      parts: [
        { text: "        operators", color: COLORS.codeOperator },
        { text: ": {", color: COLORS.codeText },
      ],
    },
    {
      num: "14",
      parts: [
        { text: "            type", color: COLORS.codeOperator },
        { text: ': ', color: COLORS.codeText },
        { text: '"preferred"', color: COLORS.codeString },
      ],
    },
    {
      num: "15",
      parts: [
        { text: "            ranking", color: COLORS.codeOperator },
        { text: ": {", color: COLORS.codeText },
      ],
    },
    {
      num: "16",
      parts: [
        { text: "                level_01", color: COLORS.codeOperator },
        { text: ": [", color: COLORS.codeText },
      ],
    },
    {
      num: "17",
      parts: [
        { text: '                    ', color: COLORS.codeText },
        { text: '"Chargetrip Amped"', color: COLORS.codeString },
        { text: ",", color: COLORS.codeText },
      ],
    },
    {
      num: "18",
      parts: [{ text: "                ],", color: COLORS.codeText }],
    },
    {
      num: "19",
      parts: [
        { text: "                level_02", color: COLORS.codeOperator },
        { text: ": [],", color: COLORS.codeText },
      ],
    },
    {
      num: "20",
      parts: [{ text: "            }", color: COLORS.codeText }],
    },
  ];

  return (
    <div
      className="relative rounded-2xl overflow-hidden shadow-2xl"
      style={{ backgroundColor: COLORS.codeBackground }}
    >
      {/* Gradient decoration on the left side */}
      <GradientDecoration />

      {/* File header */}
      <div
        className="relative z-10 px-6 py-4 border-b"
        style={{ borderColor: "rgba(255,255,255,0.1)" }}
      >
        <span style={{ color: COLORS.codeLineNumber }}>GraphQL Queries / </span>
        <span style={{ color: COLORS.codeText }}>fetch-prioritized-route.gql</span>
      </div>

      {/* Code content */}
      <div className="relative z-10 p-6 font-mono text-sm overflow-x-auto">
        {codeLines.map((line) => (
          <div key={line.num} className="flex leading-7">
            <span
              className="w-8 text-right mr-6 select-none"
              style={{ color: COLORS.codeLineNumber }}
            >
              {line.num}
            </span>
            <span>{renderCodeLine(line.parts)}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

// Gradient Decoration Component
function GradientDecoration() {
  return (
    <div className="absolute left-0 top-0 bottom-0 w-48 overflow-hidden pointer-events-none">
      <svg
        viewBox="0 0 200 600"
        className="absolute -left-16 top-0 h-full w-64"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient
            id="gradientPinkOrange"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="100%"
          >
            <stop offset="0%" stopColor={COLORS.gradientPinkLight} />
            <stop offset="50%" stopColor={COLORS.gradientPink} />
            <stop offset="100%" stopColor={COLORS.gradientOrange} />
          </linearGradient>
        </defs>
        {/* Multiple curved stripes */}
        {[0, 1, 2, 3, 4, 5, 6].map((i) => (
          <path
            key={i}
            d={`M ${-20 + i * 18} 0 Q ${60 + i * 18} 300 ${-20 + i * 18} 600`}
            fill="none"
            stroke="url(#gradientPinkOrange)"
            strokeWidth="12"
            opacity={0.9 - i * 0.1}
          />
        ))}
      </svg>
    </div>
  );
}

// Radio Option Component
function RadioOption({
  option,
  isSelected,
  onSelect,
}: {
  option: TabOption;
  isSelected: boolean;
  onSelect: () => void;
}) {
  return (
    <button
      onClick={onSelect}
      className={`flex items-start gap-4 w-full text-left py-4 px-5 transition-all ${
        isSelected ? "bg-white" : "bg-transparent hover:bg-white/50"
      }`}
      style={{
        borderRadius: isSelected ? "16px" : "0",
      }}
    >
      {/* Radio circle */}
      <div
        className="w-5 h-5 rounded-full border-2 flex items-center justify-center flex-shrink-0 mt-0.5 transition-colors"
        style={{
          borderColor: isSelected ? COLORS.accent : COLORS.textMuted,
          backgroundColor: isSelected ? COLORS.accent : "transparent",
        }}
      >
        {isSelected && (
          <div className="w-2 h-2 rounded-full bg-white" />
        )}
      </div>

      {/* Label */}
      <span
        className="text-base font-semibold"
        style={{ color: COLORS.textPrimary }}
      >
        {option.label}
      </span>
    </button>
  );
}

export default function SaaspoFeatureSectionsChargetrip({
  title = DEFAULT_CONTENT.title,
  subtitle = DEFAULT_CONTENT.subtitle,
  tabs = DEFAULT_CONTENT.tabs,
  buttonText = DEFAULT_CONTENT.buttonText,
  buttonHref = DEFAULT_CONTENT.buttonHref,
}: SaaspoFeatureSectionsChargetripProps) {
  const [selectedTab, setSelectedTab] = useState(tabs[0]?.id || "api");
  const currentTab = tabs.find((t) => t.id === selectedTab) || tabs[0];

  return (
    <section
      className="relative w-full py-16 md:py-24 px-4"
      style={{ backgroundColor: COLORS.background }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-8 md:mb-12"
        >
          <h2
            className="text-3xl md:text-4xl lg:text-5xl leading-tight"
            style={{
              color: COLORS.textPrimary,
              fontFamily: "'Instrument Serif', Georgia, serif",
              fontStyle: "italic",
            }}
          >
            {title}
            <br />
            {subtitle}
          </h2>
        </motion.div>

        {/* Main content grid */}
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-8">
          {/* Left side - Options card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="rounded-3xl p-2 flex flex-col"
            style={{ backgroundColor: COLORS.cardBackground }}
          >
            {/* Radio options */}
            <div className="divide-y" style={{ borderColor: "#e5e5e5" }}>
              {tabs.map((tab, index) => (
                <div key={tab.id}>
                  <RadioOption
                    option={tab}
                    isSelected={selectedTab === tab.id}
                    onSelect={() => setSelectedTab(tab.id)}
                  />

                  {/* Expanded content for selected tab (first tab only shows content) */}
                  {selectedTab === tab.id && index === 0 && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="px-5 pb-6"
                    >
                      <div className="pl-9">
                        <p
                          className="text-sm leading-relaxed mb-4"
                          style={{ color: COLORS.textSecondary }}
                        >
                          {currentTab?.description}
                        </p>
                        {currentTab?.additionalText && (
                          <p
                            className="text-sm leading-relaxed"
                            style={{ color: COLORS.textSecondary }}
                          >
                            {currentTab.additionalText}
                          </p>
                        )}

                        {/* Learn more button */}
                        <a
                          href={buttonHref}
                          className="inline-flex items-center justify-center mt-8 px-6 py-3 rounded-full text-white text-sm font-medium transition-all hover:opacity-90"
                          style={{ backgroundColor: COLORS.accent }}
                        >
                          {buttonText}
                        </a>
                      </div>
                    </motion.div>
                  )}
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right side - Code editor */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <CodeEditor />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
