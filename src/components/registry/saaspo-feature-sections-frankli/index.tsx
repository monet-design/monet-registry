"use client";

// ============================================================================
// CUSTOMIZATION - 이 섹션의 값들을 수정하여 프로젝트에 맞게 조정하세요
// ============================================================================

/**
 * 커스텀 색상 (브랜드 컬러)
 * - grayscale 텍스트는 Tailwind semantic color 사용 (text-gray-900 등)
 * - 여기에는 브랜드 고유 컬러만 정의
 */
const COLORS = {
  light: {
    // Primary accent colors
    tagBg: "#E8F4F3",
    tagText: "#1A3A3A",
    title: "#1A2E35",
    body: "#5A6B6E",
    button: "#1E293B",
    buttonText: "#FFFFFF",
    // UI mockup colors
    teal: "#0D9488",
    orange: "#F59E0B",
    coral: "#F97316",
    cardBg: "#FDF8F4",
    chartBlue: "#3B82F6",
    chartGreen: "#10B981",
    chartOrange: "#F97316",
    // Watercolor decorations
    watercolorOrange: "#E8A87C",
    watercolorPink: "#E87C9C",
  },
  dark: {
    tagBg: "#1A3A3A",
    tagText: "#E8F4F3",
    title: "#F5F5F5",
    body: "#A0AEC0",
    button: "#F5F5F5",
    buttonText: "#1E293B",
    teal: "#14B8A6",
    orange: "#FBBF24",
    coral: "#FB923C",
    cardBg: "#2D3748",
    chartBlue: "#60A5FA",
    chartGreen: "#34D399",
    chartOrange: "#FB923C",
    watercolorOrange: "#E8A87C",
    watercolorPink: "#E87C9C",
  },
} as const;

/**
 * 이미지 에셋
 */
const IMAGES = {} as const;

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { motion } from "motion/react";
import { ArrowRight, Check, Calendar, Target, BarChart3, MessageSquare } from "lucide-react";
import { cn } from "@/lib/utils";

// Color type
type ColorScheme = (typeof COLORS)["light"] | (typeof COLORS)["dark"];

// Feature section data
interface FeatureSectionData {
  tag: string;
  title: string;
  description: string;
  ctaText?: string;
  ctaHref?: string;
  mockupType: "meeting" | "goals" | "reporting";
}

interface SaaspoFeatureSectionsFrankliProps {
  mode?: "light" | "dark";
  features?: FeatureSectionData[];
  className?: string;
}

const defaultFeatures: FeatureSectionData[] = [
  {
    tag: "Meeting templates",
    title: "Everything busy\nmanagers need to run\nmore frequent 1-on-1s.",
    description:
      "Frankli provides managers meeting templates with talking points, sample questions, and an easy place to capture notes during a 1-on-1, so they give more regular feedback without feeling overburdened.",
    mockupType: "meeting",
  },
  {
    tag: "Goal-setting",
    title: "Goal-setting made easy\n(and transparent).",
    description:
      "Frankli provides suggestions of realistic goals for each team and lets managers see each exactly what OKRs other teams have set — helping ensure each team supports the company's priorities.",
    mockupType: "goals",
  },
  {
    tag: "In-depth reporting",
    title: "Get the context around\nemployees' productivity\nand well-being.",
    description:
      "HR teams and senior leaders can monitor when managers meet with their employees and what was covered in each meeting with Frankli's in-depth reporting.",
    ctaText: "Learn more",
    ctaHref: "#",
    mockupType: "reporting",
  },
];

// Meeting Templates Mockup
function MeetingMockup({ colors }: { colors: ColorScheme }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="relative"
    >
      {/* Watercolor decoration */}
      <div
        className="absolute -top-8 -right-8 w-32 h-32 rounded-full opacity-60"
        style={{
          background: `radial-gradient(circle, ${colors.watercolorOrange} 0%, transparent 70%)`,
          filter: "blur(20px)",
        }}
      />

      {/* Card */}
      <div
        className="relative rounded-2xl p-6 shadow-lg max-w-sm"
        style={{ backgroundColor: colors.cardBg }}
      >
        <h4 className="font-semibold text-gray-900 mb-1">Manager-led conversation</h4>
        <p className="text-sm text-gray-500 mb-4">
          A facilitated discussion guided by a manager to provide direction.
        </p>

        <div className="space-y-1 mb-4">
          <p className="text-sm font-medium" style={{ color: colors.teal }}>
            Talking points
          </p>
        </div>

        <div className="space-y-3">
          {[
            "Do you feel you're getting enough feedback? Why/why not?",
            "Which areas would you like more or less direction from me on your work?",
            "How could I do a better job communicating with you?",
          ].map((question, i) => (
            <div key={i} className="flex gap-3 items-start">
              <div
                className="w-5 h-5 rounded flex items-center justify-center flex-shrink-0 mt-0.5"
                style={{ backgroundColor: `${colors.teal}20` }}
              >
                <MessageSquare className="w-3 h-3" style={{ color: colors.teal }} />
              </div>
              <p className="text-sm text-gray-700">{question}</p>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

// Goals Mockup
function GoalsMockup({ colors }: { colors: ColorScheme }) {
  const goals = [
    { avatar: "👩‍💼", name: "P2", goal: "Become PCI-QSA certified in...", progress: 72 },
    { avatar: "👨‍💻", name: "P3", goal: "Draft mgmt accounts by work...", progress: 50 },
    { avatar: "👩‍🔬", name: "P4", goal: "Complete my accredited ISO...", progress: 30 },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="relative"
    >
      {/* Watercolor decoration */}
      <div
        className="absolute -bottom-4 -right-4 w-24 h-24 opacity-50"
        style={{
          background: `radial-gradient(circle, ${colors.watercolorPink} 0%, transparent 70%)`,
          filter: "blur(15px)",
        }}
      />

      {/* Stats Grid */}
      <div className="bg-white rounded-2xl shadow-lg p-4 max-w-md">
        <div className="grid grid-cols-2 gap-3 mb-4">
          {[
            { icon: <Target className="w-4 h-4" />, value: "15", label: "ACTIVE GOALS", color: colors.teal },
            { icon: <Check className="w-4 h-4" />, value: "78%", label: "COMPLETE", color: colors.teal },
            { icon: <Calendar className="w-4 h-4" />, value: "3", label: "DUE IN THE NEXT 30 DAYS", color: colors.orange },
            { icon: <BarChart3 className="w-4 h-4" />, value: "39", label: "DONE IN PAST 2 MONTHS", color: colors.teal },
          ].map((stat, i) => (
            <div key={i} className="flex items-center gap-2 p-2 rounded-lg bg-gray-50">
              <div
                className="w-8 h-8 rounded-full flex items-center justify-center"
                style={{ backgroundColor: `${stat.color}15`, color: stat.color }}
              >
                {stat.icon}
              </div>
              <div>
                <p className="font-semibold text-gray-900">{stat.value}</p>
                <p className="text-[10px] text-gray-500 uppercase tracking-wide">{stat.label}</p>
              </div>
            </div>
          ))}
        </div>

        <p className="text-sm font-medium text-gray-900 mb-3">Team goals</p>

        <div className="space-y-3">
          {goals.map((goal, i) => (
            <div key={i} className="flex items-center gap-3">
              <div className="flex items-center gap-2">
                <span className="text-lg">{goal.avatar}</span>
                <span className="text-xs text-gray-500 font-medium">{goal.name}</span>
              </div>
              <p className="text-sm text-gray-700 flex-1 truncate">{goal.goal}</p>
              <span className="text-sm font-medium text-gray-600">{goal.progress}%</span>
              <div className="w-16 h-2 bg-gray-200 rounded-full overflow-hidden">
                <div
                  className="h-full rounded-full"
                  style={{
                    width: `${goal.progress}%`,
                    backgroundColor: colors.teal,
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

// Reporting Mockup
function ReportingMockup({ colors }: { colors: ColorScheme }) {
  const barData = [7.19, 7.19, 7.19, 7.19];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="relative space-y-4"
    >
      {/* Manager review assessment score */}
      <div className="bg-white rounded-xl shadow-lg p-4 max-w-md">
        <p className="text-sm font-medium text-gray-700 mb-3">Manager review assessment score</p>
        <div className="flex items-end gap-2 h-24">
          {barData.map((value, i) => (
            <div key={i} className="flex-1 flex flex-col items-center">
              <div
                className="w-full rounded-t"
                style={{
                  height: `${(value / 10) * 100}%`,
                  backgroundColor: colors.teal,
                }}
              />
              <span className="text-xs text-gray-500 mt-1">{value}</span>
            </div>
          ))}
        </div>
        <div className="flex justify-between mt-2 text-xs text-gray-400">
          <span>0%</span>
        </div>
      </div>

      {/* Participation donut */}
      <div className="bg-white rounded-xl shadow-lg p-4 max-w-[160px] absolute top-0 right-0">
        <p className="text-sm font-medium text-gray-700 mb-2">Participation</p>
        <div className="relative w-20 h-20 mx-auto">
          <svg viewBox="0 0 36 36" className="w-full h-full">
            <path
              d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
              fill="none"
              stroke="#E5E7EB"
              strokeWidth="3"
            />
            <path
              d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
              fill="none"
              stroke={colors.teal}
              strokeWidth="3"
              strokeDasharray="90, 100"
            />
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-lg font-bold" style={{ color: colors.teal }}>
              90%
            </span>
          </div>
        </div>
      </div>

      {/* Assessment score distribution */}
      <div className="bg-white rounded-xl shadow-lg p-4 max-w-md mt-32">
        <p className="text-sm font-medium text-gray-700 mb-3">Assessment score distribution</p>
        <div className="space-y-2">
          <div>
            <p className="text-xs text-gray-500 uppercase mb-1">Self Reflection</p>
            <div className="flex items-center gap-2">
              <div className="flex-1 h-3 bg-gray-100 rounded-full overflow-hidden">
                <div
                  className="h-full rounded-full"
                  style={{ width: "85%", backgroundColor: colors.orange }}
                />
              </div>
              <span className="text-xs text-gray-600">3.8</span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <div className="flex-1 h-3 bg-gray-100 rounded-full overflow-hidden">
              <div
                className="h-full rounded-full"
                style={{ width: "68%", backgroundColor: colors.teal }}
              />
            </div>
            <span className="text-xs text-gray-600">3</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

// Feature Section Component
function FeatureItem({
  feature,
  index,
  colors,
}: {
  feature: FeatureSectionData;
  index: number;
  colors: ColorScheme;
}) {
  const isReversed = index % 2 === 1;

  const getMockup = () => {
    switch (feature.mockupType) {
      case "meeting":
        return <MeetingMockup colors={colors} />;
      case "goals":
        return <GoalsMockup colors={colors} />;
      case "reporting":
        return <ReportingMockup colors={colors} />;
    }
  };

  return (
    <div
      className={cn(
        "grid md:grid-cols-2 gap-8 md:gap-16 items-center",
        isReversed && "md:grid-flow-dense"
      )}
    >
      {/* Text Content */}
      <motion.div
        initial={{ opacity: 0, x: isReversed ? 20 : -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className={cn(isReversed && "md:col-start-2")}
      >
        {/* Tag */}
        <span
          className="inline-block px-3 py-1 rounded-full text-sm font-medium mb-4"
          style={{
            backgroundColor: colors.tagBg,
            color: colors.tagText,
          }}
        >
          {feature.tag}
        </span>

        {/* Title - Instrument Serif Italic */}
        <h2
          className="text-3xl md:text-4xl lg:text-[42px] leading-tight mb-4 font-serif italic"
          style={{ color: colors.title }}
        >
          {feature.title.split("\n").map((line, i) => (
            <span key={i}>
              {line}
              {i < feature.title.split("\n").length - 1 && <br />}
            </span>
          ))}
        </h2>

        {/* Description */}
        <p className="text-base md:text-lg leading-relaxed mb-6" style={{ color: colors.body }}>
          {feature.description}
        </p>

        {/* CTA Button */}
        {feature.ctaText && (
          <a
            href={feature.ctaHref}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-all hover:opacity-90"
            style={{
              backgroundColor: colors.button,
              color: colors.buttonText,
            }}
          >
            {feature.ctaText}
            <ArrowRight className="w-4 h-4" />
          </a>
        )}
      </motion.div>

      {/* Mockup */}
      <div className={cn("relative", isReversed && "md:col-start-1")}>{getMockup()}</div>
    </div>
  );
}

export default function SaaspoFeatureSectionsFrankli({
  mode = "light",
  features = defaultFeatures,
  className,
}: SaaspoFeatureSectionsFrankliProps) {
  const colors = COLORS[mode];

  return (
    <>
      {/* Google Fonts for Instrument Serif */}
      <style jsx global>{`
        @import url("https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@1&display=swap");

        .font-serif {
          font-family: "Instrument Serif", serif;
        }
      `}</style>

      <section
        className={cn(
          "relative w-full py-16 md:py-24 lg:py-32 px-4 md:px-8",
          mode === "dark" ? "bg-gray-950" : "bg-white",
          className
        )}
      >
        <div className="max-w-6xl mx-auto space-y-24 md:space-y-32">
          {features.map((feature, index) => (
            <FeatureItem key={index} feature={feature} index={index} colors={colors} />
          ))}
        </div>
      </section>
    </>
  );
}
