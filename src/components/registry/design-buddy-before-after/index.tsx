"use client";

import { motion } from "motion/react";
import { FileText, Receipt, DollarSign, Check } from "lucide-react";
import { ReactNode } from "react";

// ============================================================================
// CUSTOMIZATION
// ============================================================================

const COLORS = { light: {}, dark: {} } as const;
const IMAGES = {} as const;

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

// Types
interface ScoreCategory {
  label: string;
  score: number;
}

interface OnboardingStep {
  icon: ReactNode;
  title: string;
  description: string;
  isComplete: boolean;
  linkText?: string;
}

interface DesignBuddyFeedback {
  overallScore: number;
  categories: ScoreCategory[];
  description: string;
}

interface DesignBuddyBeforeAfterProps {
  mode?: "light" | "dark";
  beforeScore?: number;
  afterScore?: number;
  beforeFeedback?: DesignBuddyFeedback;
  afterFeedback?: DesignBuddyFeedback;
  beforeSteps?: OnboardingStep[];
  afterSteps?: OnboardingStep[];
  alertMessage?: string;
  alertSubtext?: string;
}

// Score color utility
function getScoreColor(score: number): string {
  if (score >= 4) return "#10B981"; // green (emerald-500)
  if (score >= 3) return "#F59E0B"; // amber/yellow
  if (score >= 2) return "#F97316"; // orange
  return "#EF4444"; // red
}

// Score Ring Component
function ScoreRing({
  score,
  size = 36,
  strokeWidth = 3,
}: {
  score: number;
  size?: number;
  strokeWidth?: number;
}) {
  const color = getScoreColor(score);
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const progress = (score / 5) * circumference;

  return (
    <div className="relative" style={{ width: size, height: size }}>
      <svg width={size} height={size} className="-rotate-90">
        {/* Background circle */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke="#E5E7EB"
          strokeWidth={strokeWidth}
        />
        {/* Progress circle */}
        <motion.circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke={color}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeDasharray={circumference}
          initial={{ strokeDashoffset: circumference }}
          animate={{ strokeDashoffset: circumference - progress }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        />
      </svg>
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="text-xs font-semibold text-[#1F2937]">{score}</span>
      </div>
    </div>
  );
}

// Large Score Badge Component - Matches original: simple circle with green tint
function ScoreBadge({ score }: { score: number }) {
  const color = getScoreColor(score);

  return (
    <div
      className="flex h-9 w-9 items-center justify-center rounded-full"
      style={{ backgroundColor: `${color}15`, border: `2px solid ${color}` }}
    >
      <span className="text-sm font-semibold" style={{ color }}>
        {score}
      </span>
    </div>
  );
}

// Design Buddy Card Component
function DesignBuddyCard({ feedback }: { feedback: DesignBuddyFeedback }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
      className="rounded-xl border border-[#EBEBEB] bg-white p-4 shadow-[0_1px_3px_rgba(0,0,0,0.04)]"
    >
      {/* Header */}
      <div className="flex items-center gap-2">
        <div className="flex h-5 w-5 items-center justify-center rounded bg-[#1F2937]">
          <svg
            width="11"
            height="11"
            viewBox="0 0 24 24"
            fill="none"
            stroke="white"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <rect x="3" y="3" width="7" height="7" rx="1" />
            <rect x="14" y="3" width="7" height="7" rx="1" />
            <rect x="3" y="14" width="7" height="7" rx="1" />
            <rect x="14" y="14" width="7" height="7" rx="1" />
          </svg>
        </div>
        <span className="text-xs font-semibold text-[#1F2937]">
          Design Buddy
        </span>
      </div>

      {/* Score Categories */}
      <div className="mt-4 flex items-center justify-between gap-1">
        {feedback.categories.map((category, index) => (
          <motion.div
            key={category.label}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.4 + index * 0.1 }}
            className="flex flex-col items-center"
          >
            <ScoreRing score={category.score} size={38} strokeWidth={3} />
            <span className="mt-1.5 text-[9px] text-[#9CA3AF]">
              {category.label}
            </span>
          </motion.div>
        ))}
      </div>

      {/* Description */}
      <p className="mt-4 text-[11px] leading-[1.6] text-[#6B7280]">
        {feedback.description}
      </p>
    </motion.div>
  );
}

// Onboarding Step Component - Horizontal layout matching original
function OnboardingStepItem({
  step,
  index,
}: {
  step: OnboardingStep;
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: 0.2 + index * 0.1 }}
      className="flex flex-col"
    >
      {/* Icon */}
      <div className="mb-2.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-[#E5E7EB] bg-white">
        <span className="text-[#9CA3AF]">{step.icon}</span>
      </div>

      {/* Content */}
      <div className="flex-1 min-w-0">
        <h4
          className={`text-[11px] font-semibold ${step.isComplete ? "text-[#374151] line-through decoration-[#9CA3AF]" : "text-[#374151]"}`}
        >
          {step.title}
        </h4>
        <p className="mt-1 text-[10px] leading-relaxed text-[#9CA3AF]">
          {step.description}
        </p>
        {step.isComplete ? (
          <div className="mt-2 flex items-center gap-1 text-[10px] font-medium text-[#10B981]">
            <Check className="h-3 w-3" strokeWidth={2.5} />
            <span>Complete</span>
          </div>
        ) : step.linkText ? (
          <a
            href="#"
            className="mt-2 inline-block text-[10px] font-medium text-[#0D9488] hover:underline"
          >
            {step.linkText}
          </a>
        ) : null}
      </div>
    </motion.div>
  );
}

// Progress Bar Component
function ProgressBar({ progress }: { progress: number }) {
  return (
    <div className="h-1.5 w-full overflow-hidden rounded-full bg-[#E5E7EB]">
      <motion.div
        className="h-full rounded-full bg-[#0D9488]"
        initial={{ width: 0 }}
        animate={{ width: `${progress}%` }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
      />
    </div>
  );
}

// Before/After Section
function ComparisonSection({
  type,
  score,
  alertMessage,
  alertSubtext,
  steps,
  feedback,
}: {
  type: "before" | "after";
  score: number;
  alertMessage: string;
  alertSubtext: string;
  steps: OnboardingStep[];
  feedback: DesignBuddyFeedback;
}) {
  const completedSteps = steps.filter((s) => s.isComplete).length;
  const progress = (completedSteps / steps.length) * 100;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: type === "before" ? 0 : 0.2 }}
      className="space-y-3"
    >
      {/* Section Header */}
      <div className="flex items-center gap-2.5">
        <ScoreBadge score={score} />
        <span className="text-xl font-medium text-[#1F2937]">
          {type === "before" ? "Before" : "After"}
        </span>
      </div>

      {/* Content Area */}
      <div className="grid gap-4 lg:grid-cols-[1.2fr_1fr]">
        {/* Left: Onboarding Card */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="rounded-xl border border-[#EBEBEB] bg-white p-4 shadow-[0_1px_3px_rgba(0,0,0,0.04)]"
        >
          {/* Alert */}
          <div className="rounded-lg bg-[#E8F7F5] px-3 py-2.5">
            <p className="text-[11px] font-semibold text-[#1F2937]">{alertMessage}</p>
            <p className="mt-0.5 text-[10px] text-[#6B7280]">{alertSubtext}</p>
          </div>

          {/* Steps - Horizontal 3 column grid */}
          <div className="mt-4 grid grid-cols-3 gap-4">
            {steps.map((step, index) => (
              <OnboardingStepItem
                key={step.title}
                step={step}
                index={index}
              />
            ))}
          </div>

          {/* Progress Bar */}
          <div className="mt-4">
            <ProgressBar progress={progress} />
          </div>
        </motion.div>

        {/* Right: Design Buddy Card */}
        <DesignBuddyCard feedback={feedback} />
      </div>
    </motion.div>
  );
}

// Default data
const defaultBeforeSteps: OnboardingStep[] = [
  {
    icon: <FileText className="h-3.5 w-3.5" />,
    title: "Create a Contract",
    description:
      "Use our locally-compliant contract templates to onboard hires and establish a payroll cycle.",
    isComplete: true,
  },
  {
    icon: <Receipt className="h-3.5 w-3.5" />,
    title: "Receive an Invoice",
    description:
      "An itemized invoice for the work done will be delivered to you near the end of each payroll cycle.",
    isComplete: true,
  },
  {
    icon: <DollarSign className="h-3.5 w-3.5" />,
    title: "Pay an Invoice",
    description:
      "Easily pay invoices all through your connection.",
    isComplete: false,
    linkText: "View Invoice",
  },
];

const defaultAfterSteps: OnboardingStep[] = [
  {
    icon: <FileText className="h-3.5 w-3.5" />,
    title: "Create a Contract",
    description:
      "Use our locally-compliant contract templates to onboard hires and establish a payroll cycle.",
    isComplete: true,
  },
  {
    icon: <Receipt className="h-3.5 w-3.5" />,
    title: "Receive an Invoice",
    description:
      "An itemized invoice for the work done will be delivered to you near the end of each payroll cycle.",
    isComplete: true,
  },
  {
    icon: <DollarSign className="h-3.5 w-3.5" />,
    title: "Pay an Invoice",
    description:
      "Easily pay invoices all through your connection.",
    isComplete: false,
    linkText: "View Invoice",
  },
];

const defaultBeforeFeedback: DesignBuddyFeedback = {
  overallScore: 3.5,
  categories: [
    { label: "Overall", score: 3.5 },
    { label: "Layout", score: 3.5 },
    { label: "Colors", score: 2.5 },
    { label: "Typography", score: 3 },
    { label: "Accessibility", score: 2.5 },
  ],
  description:
    "The design showcases a clear contractor onboarding flow, yet could benefit from larger titles, enhanced color contrast, and clearer text links for better accessibility.",
};

const defaultAfterFeedback: DesignBuddyFeedback = {
  overallScore: 4.5,
  categories: [
    { label: "Overall", score: 4.5 },
    { label: "Layout", score: 5 },
    { label: "Colors", score: 4.5 },
    { label: "Typography", score: 4 },
    { label: "Accessibility", score: 4.5 },
  ],
  description:
    "The design presents a clear user-journey for contractor onboarding, with a card-based layout that guides users through a process from contract creation to getting paid.",
};

// Main Component
export default function DesignBuddyBeforeAfter({
  mode = "light",
  beforeScore = 3.5,
  afterScore = 4.5,
  beforeFeedback = defaultBeforeFeedback,
  afterFeedback = defaultAfterFeedback,
  beforeSteps = defaultBeforeSteps,
  afterSteps = defaultAfterSteps,
  alertMessage = "Heads-up! You have due invoices.",
  alertSubtext = "2 of 4 milestones achieved",
}: DesignBuddyBeforeAfterProps) {
  return (
    <section className="w-full bg-[#F5F5F5] py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="space-y-12">
          {/* Before Section */}
          <ComparisonSection
            type="before"
            score={beforeScore}
            alertMessage={alertMessage}
            alertSubtext={alertSubtext}
            steps={beforeSteps}
            feedback={beforeFeedback}
          />

          {/* After Section */}
          <ComparisonSection
            type="after"
            score={afterScore}
            alertMessage={alertMessage}
            alertSubtext={alertSubtext}
            steps={afterSteps}
            feedback={afterFeedback}
          />
        </div>
      </div>
    </section>
  );
}
