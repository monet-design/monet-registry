"use client";

import React, { useState, useEffect, useCallback } from "react";
import {
  ChevronUp,
  ChevronDown,
  MousePointer2,
  Palette,
  Sun,
  Moon,
  Users,
  MessageSquare,
  CheckCircle2,
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

// ============================================================================
// CUSTOMIZATION
// ============================================================================

const COLORS = { light: {}, dark: {} } as const;
const IMAGES = {} as const;

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

interface AccordionItem {
  title: string;
  description: string;
}

interface FeatureAccordionCodeEditorProps {
  mode?: "light" | "dark";
  headline?: string;
  highlightedWord?: string;
  subheadline?: string;
  accordionItems?: AccordionItem[];
}

const defaultAccordionItems: AccordionItem[] = [
  {
    title: "Speed Up Your Workflow",
    description:
      "Take snapshots (snips) of pieces of your code, allowing you to seamlessly drag & drop groups of code into your project.",
  },
  {
    title: "Personalize Your Workspace",
    description:
      "Customize your editor theme, layout, and shortcuts to match your unique coding style.",
  },
  {
    title: "Manage Your Team",
    description:
      "Collaborate with team members, share code snippets, and track project progress in real-time.",
  },
];

function CodeSyntax({ content }: { content: string }) {
  const parts: React.ReactNode[] = [];
  let remaining = content;
  let keyIndex = 0;

  while (remaining.length > 0) {
    const tagMatch = remaining.match(/^(<\/?[\w-]+)/);
    if (tagMatch) {
      parts.push(
        <span key={keyIndex++} className="text-violet-600">
          {tagMatch[1]}
        </span>
      );
      remaining = remaining.slice(tagMatch[1].length);
      continue;
    }

    const attrMatch = remaining.match(/^(\s+[\w-]+)(=)/);
    if (attrMatch) {
      parts.push(
        <span key={keyIndex++} className="text-gray-800">
          {attrMatch[1]}
        </span>
      );
      parts.push(
        <span key={keyIndex++} className="text-gray-600">
          {attrMatch[2]}
        </span>
      );
      remaining = remaining.slice(attrMatch[0].length);
      continue;
    }

    const stringMatch = remaining.match(/^("[^"]*"?)/);
    if (stringMatch) {
      parts.push(
        <span key={keyIndex++} className="text-amber-600">
          {stringMatch[1]}
        </span>
      );
      remaining = remaining.slice(stringMatch[1].length);
      continue;
    }

    const closingMatch = remaining.match(/^(>)/);
    if (closingMatch) {
      parts.push(
        <span key={keyIndex++} className="text-violet-600">
          {closingMatch[1]}
        </span>
      );
      remaining = remaining.slice(1);
      continue;
    }

    parts.push(
      <span key={keyIndex++} className="text-gray-700">
        {remaining[0]}
      </span>
    );
    remaining = remaining.slice(1);
  }

  return <>{parts}</>;
}

function AccordionSection({
  items,
  activeIndex,
  onToggle,
  progress,
}: {
  items: AccordionItem[];
  activeIndex: number;
  onToggle: (index: number) => void;
  progress: number;
}) {
  return (
    <div className="divide-y divide-gray-200 border-t border-gray-200">
      {items.map((item, index) => {
        const isOpen = activeIndex === index;
        return (
          <div key={index} className="py-4">
            <button
              onClick={() => onToggle(index)}
              className="flex w-full items-center justify-between text-left"
            >
              <span className="text-sm font-semibold text-gray-900">
                {item.title}
              </span>
              {isOpen ? (
                <ChevronUp className="h-4 w-4 text-gray-500" />
              ) : (
                <ChevronDown className="h-4 w-4 text-gray-500" />
              )}
            </button>
            <AnimatePresence>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="overflow-hidden"
                >
                  <p className="mt-2 text-sm text-gray-500 leading-relaxed">
                    {item.description}
                  </p>
                  {/* Progress bar */}
                  <div className="mt-3 h-0.5 w-full overflow-hidden rounded-full bg-gray-200">
                    <motion.div
                      className="h-full bg-gray-900"
                      initial={{ width: 0 }}
                      animate={{ width: `${progress}%` }}
                      transition={{ duration: 0.1, ease: "linear" }}
                    />
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}

function CodeEditorMockup({
  tabs,
  codeLines,
  dragItemText,
}: {
  tabs: string[];
  codeLines: { lineNumber: number; content: string }[];
  dragItemText: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="relative"
    >
      <div className="rounded-xl border border-gray-200 bg-white shadow-lg overflow-hidden">
        <div className="flex items-center gap-1 border-b border-gray-100 bg-gray-50 px-3 py-2">
          <div className="flex items-center justify-center w-6 h-6 rounded bg-gray-200">
            <svg
              className="w-3 h-3 text-gray-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              />
            </svg>
          </div>
          <div className="flex">
            {tabs.map((tab, index) => (
              <div
                key={tab}
                className={`px-4 py-1.5 text-xs font-medium ${
                  index === 0
                    ? "text-gray-900 border-b-2 border-gray-900"
                    : "text-gray-500"
                }`}
              >
                {tab}
              </div>
            ))}
          </div>
        </div>

        <div className="p-4 font-mono text-xs">
          {codeLines.map((line) => (
            <div key={line.lineNumber} className="flex">
              <span className="w-6 text-right text-gray-400 select-none">
                {line.lineNumber}
              </span>
              <span className="mx-3 w-px bg-gray-200" />
              <span className="flex-1">
                <CodeSyntax content={line.content} />
              </span>
            </div>
          ))}
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3, delay: 0.5 }}
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
      >
        <div className="flex items-center gap-1 rounded-lg border border-gray-300 bg-white px-3 py-2 shadow-lg">
          <span className="text-sm text-gray-700">{dragItemText}</span>
          <MousePointer2 className="h-4 w-4 text-gray-600 rotate-[-20deg]" />
        </div>
      </motion.div>
    </motion.div>
  );
}

function WorkspaceCustomizationMockup() {
  const themes = [
    { name: "Light", icon: Sun, active: false, bg: "bg-white", text: "text-gray-900" },
    { name: "Dark", icon: Moon, active: true, bg: "bg-gray-900", text: "text-white" },
    { name: "Custom", icon: Palette, active: false, bg: "bg-violet-600", text: "text-white" },
  ];

  const colors = ["#6366f1", "#8b5cf6", "#ec4899", "#f43f5e", "#f97316", "#eab308", "#22c55e", "#14b8a6"];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="relative"
    >
      <div className="rounded-xl border border-gray-200 bg-white shadow-lg overflow-hidden">
        <div className="flex items-center gap-2 border-b border-gray-100 bg-gray-50 px-4 py-3">
          <Palette className="h-4 w-4 text-gray-500" />
          <span className="text-sm font-medium text-gray-700">Appearance Settings</span>
        </div>

        <div className="p-4 space-y-4">
          {/* Theme Selection */}
          <div>
            <p className="text-xs font-medium text-gray-500 mb-2">Theme</p>
            <div className="flex gap-2">
              {themes.map((theme) => (
                <motion.button
                  key={theme.name}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`flex-1 flex items-center justify-center gap-2 rounded-lg border-2 px-3 py-2.5 transition-all ${
                    theme.active
                      ? "border-violet-500 ring-2 ring-violet-500/20"
                      : "border-gray-200 hover:border-gray-300"
                  } ${theme.bg} ${theme.text}`}
                >
                  <theme.icon className="h-4 w-4" />
                  <span className="text-xs font-medium">{theme.name}</span>
                </motion.button>
              ))}
            </div>
          </div>

          {/* Accent Color */}
          <div>
            <p className="text-xs font-medium text-gray-500 mb-2">Accent Color</p>
            <div className="flex gap-2">
              {colors.map((color, idx) => (
                <motion.button
                  key={color}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className={`h-6 w-6 rounded-full ${idx === 1 ? "ring-2 ring-offset-2 ring-gray-400" : ""}`}
                  style={{ backgroundColor: color }}
                />
              ))}
            </div>
          </div>

          {/* Font Size */}
          <div>
            <p className="text-xs font-medium text-gray-500 mb-2">Editor Font Size</p>
            <div className="flex items-center gap-3">
              <input
                type="range"
                min="10"
                max="20"
                defaultValue="14"
                className="flex-1 h-1.5 bg-gray-200 rounded-full appearance-none cursor-pointer accent-violet-500"
              />
              <span className="text-xs font-mono text-gray-600 w-8">14px</span>
            </div>
          </div>
        </div>
      </div>

      {/* Preview badge */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3, delay: 0.5 }}
        className="absolute -bottom-3 -right-3"
      >
        <div className="flex items-center gap-1.5 rounded-lg border border-violet-200 bg-violet-50 px-3 py-1.5 shadow-lg">
          <div className="h-2 w-2 rounded-full bg-violet-500 animate-pulse" />
          <span className="text-xs font-medium text-violet-700">Live Preview</span>
        </div>
      </motion.div>
    </motion.div>
  );
}

function TeamManagementMockup() {
  const teamMembers = [
    { name: "Sarah Kim", role: "Lead Developer", avatar: "SK", status: "online", color: "bg-violet-500" },
    { name: "Alex Chen", role: "Frontend Dev", avatar: "AC", status: "online", color: "bg-emerald-500" },
    { name: "Mike Johnson", role: "Backend Dev", avatar: "MJ", status: "away", color: "bg-amber-500" },
  ];

  const recentActivity = [
    { user: "Sarah", action: "shared", item: "auth-utils.ts", time: "2m ago" },
    { user: "Alex", action: "commented on", item: "Button.tsx", time: "5m ago" },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="relative"
    >
      <div className="rounded-xl border border-gray-200 bg-white shadow-lg overflow-hidden">
        <div className="flex items-center justify-between border-b border-gray-100 bg-gray-50 px-4 py-3">
          <div className="flex items-center gap-2">
            <Users className="h-4 w-4 text-gray-500" />
            <span className="text-sm font-medium text-gray-700">Team Workspace</span>
          </div>
          <span className="text-xs text-emerald-600 font-medium">3 online</span>
        </div>

        <div className="p-4 space-y-4">
          {/* Team Members */}
          <div>
            <p className="text-xs font-medium text-gray-500 mb-2">Team Members</p>
            <div className="space-y-2">
              {teamMembers.map((member, idx) => (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + idx * 0.1 }}
                  className="flex items-center justify-between rounded-lg border border-gray-100 bg-gray-50/50 px-3 py-2"
                >
                  <div className="flex items-center gap-2.5">
                    <div className="relative">
                      <div className={`flex h-8 w-8 items-center justify-center rounded-full ${member.color} text-xs font-medium text-white`}>
                        {member.avatar}
                      </div>
                      <div className={`absolute -bottom-0.5 -right-0.5 h-2.5 w-2.5 rounded-full border-2 border-white ${
                        member.status === "online" ? "bg-emerald-500" : "bg-amber-500"
                      }`} />
                    </div>
                    <div>
                      <p className="text-xs font-medium text-gray-800">{member.name}</p>
                      <p className="text-[10px] text-gray-400">{member.role}</p>
                    </div>
                  </div>
                  <MessageSquare className="h-4 w-4 text-gray-400 hover:text-gray-600 cursor-pointer" />
                </motion.div>
              ))}
            </div>
          </div>

          {/* Recent Activity */}
          <div>
            <p className="text-xs font-medium text-gray-500 mb-2">Recent Activity</p>
            <div className="space-y-1.5">
              {recentActivity.map((activity, idx) => (
                <div key={idx} className="flex items-center gap-2 text-[11px]">
                  <CheckCircle2 className="h-3 w-3 text-emerald-500" />
                  <span className="text-gray-600">
                    <span className="font-medium">{activity.user}</span> {activity.action}{" "}
                    <span className="font-mono text-violet-600">{activity.item}</span>
                  </span>
                  <span className="text-gray-400 ml-auto">{activity.time}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Collaboration badge */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3, delay: 0.5 }}
        className="absolute -bottom-3 left-4"
      >
        <div className="flex items-center gap-1.5 rounded-lg border border-emerald-200 bg-emerald-50 px-3 py-1.5 shadow-lg">
          <Users className="h-3 w-3 text-emerald-600" />
          <span className="text-xs font-medium text-emerald-700">Real-time Sync</span>
        </div>
      </motion.div>
    </motion.div>
  );
}

function RightPanelContent({ activeIndex }: { activeIndex: number }) {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={activeIndex}
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -20 }}
        transition={{ duration: 0.3 }}
      >
        {activeIndex === 0 && (
          <CodeEditorMockup
            tabs={["index.html", "styles.css"]}
            codeLines={[
              { lineNumber: 1, content: "<body>" },
              { lineNumber: 2, content: '<header class="m' },
              { lineNumber: 3, content: '<img src="imag' },
              { lineNumber: 4, content: "" },
              { lineNumber: 5, content: "<main>" },
              { lineNumber: 6, content: "" },
              { lineNumber: 7, content: "<p>" },
              { lineNumber: 8, content: "Express your" },
              { lineNumber: 9, content: "</p>" },
              { lineNumber: 10, content: '<form action="' },
              { lineNumber: 11, content: "<input pla" },
            ]}
            dragItemText="Red Button"
          />
        )}
        {activeIndex === 1 && <WorkspaceCustomizationMockup />}
        {activeIndex === 2 && <TeamManagementMockup />}
      </motion.div>
    </AnimatePresence>
  );
}

export default function FeatureAccordionCodeEditor({
  mode = "light",
  headline = "Do more with Echo.",
  highlightedWord = "more",
  subheadline = "Take a peek at how you can level-up your\ncoding habits with Echo.",
  accordionItems = defaultAccordionItems,
}: FeatureAccordionCodeEditorProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [progress, setProgress] = useState(0);

  const goToNext = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % accordionItems.length);
    setProgress(0);
  }, [accordionItems.length]);

  const handleToggle = useCallback((index: number) => {
    setActiveIndex(index);
    setProgress(0);
  }, []);

  useEffect(() => {

    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          goToNext();
          return 0;
        }
        return prev + 2; // 2% every 100ms = 5 seconds total
      });
    }, 100);

    return () => clearInterval(progressInterval);
  }, [goToNext]);

  const renderHeadline = () => {
    if (!highlightedWord) {
      return headline;
    }

    const parts = headline.split(highlightedWord);
    if (parts.length === 1) {
      return headline;
    }

    return (
      <>
        {parts[0]}
        <span className="underline decoration-2 underline-offset-4">
          {highlightedWord}
        </span>
        {parts[1]}
      </>
    );
  };

  return (
    <div className="relative w-full overflow-hidden bg-gray-100 px-8 py-12 md:px-16 md:py-16">
      {/* Top center wavy cyan/sky blue decoration */}
      <div className="absolute -top-8 left-1/3 h-32 w-64 rotate-12">
        <div className="h-full w-full rounded-full bg-sky-300/40 blur-2xl" />
      </div>
      {/* Bottom right violet decoration blob - solid purple */}
      <div className="absolute -bottom-6 -right-4 h-28 w-28">
        <div className="h-full w-full rounded-full bg-violet-500/70 blur-lg" />
      </div>
      {/* Bottom teal decoration blob */}
      <div className="absolute bottom-4 right-24 h-14 w-14">
        <div className="h-full w-full rounded-full bg-teal-400/70 blur-lg" />
      </div>

      <div className="relative mx-auto max-w-5xl">
        <div className="grid gap-10 md:grid-cols-2 md:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl font-semibold text-gray-900 md:text-3xl">
              {renderHeadline()}
            </h2>
            <p className="mt-3 text-sm text-gray-500 whitespace-pre-line leading-relaxed">
              {subheadline}
            </p>

            <div className="mt-6">
              <AccordionSection
                items={accordionItems}
                activeIndex={activeIndex}
                onToggle={handleToggle}
                progress={progress}
              />
            </div>
          </motion.div>

          <RightPanelContent activeIndex={activeIndex} />
        </div>
      </div>
    </div>
  );
}
