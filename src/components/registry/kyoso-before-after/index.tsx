"use client";

import { motion } from "motion/react";
import {
  FileText,
  ImageIcon,
  SlidersHorizontal,
  Video,
  Sparkles,
  ArrowUpRight,
} from "lucide-react";
import { ReactNode } from "react";

// Types
interface WorkflowItem {
  icon: ReactNode;
  label: string;
  tool?: string;
}

interface KyosoBeforeAfterProps {
  mode?: "customization" | "default";
  badge?: string;
  heading?: string;
  subheading?: string;
  beforeTitle?: string;
  beforeDescription?: string;
  afterTitle?: string;
  afterDescription?: string;
  beforeItems?: WorkflowItem[];
  afterItems?: WorkflowItem[];
}

// Default workflow items for "Before" section
const defaultBeforeItems: WorkflowItem[] = [
  { icon: <FileText className="h-3.5 w-3.5" />, label: "Create brief", tool: "Tool A" },
  { icon: <ImageIcon className="h-3.5 w-3.5" />, label: "Generate image", tool: "Tool B" },
  { icon: <SlidersHorizontal className="h-3.5 w-3.5" />, label: "Edit image", tool: "Tool C" },
  { icon: <Video className="h-3.5 w-3.5" />, label: "Generate video", tool: "Tool D" },
  { icon: <Sparkles className="h-3.5 w-3.5" />, label: "Animate", tool: "Tool E" },
  { icon: <ArrowUpRight className="h-3.5 w-3.5" />, label: "Upscale", tool: "Tool F" },
];

// Default workflow items for "After" section (arranged in circle - clockwise from top)
const defaultAfterItems: WorkflowItem[] = [
  { icon: <FileText className="h-3.5 w-3.5" />, label: "Create brief" },
  { icon: <ImageIcon className="h-3.5 w-3.5" />, label: "Generate image" },
  { icon: <SlidersHorizontal className="h-3.5 w-3.5" />, label: "Edit image" },
  { icon: <Video className="h-3.5 w-3.5" />, label: "Generate video" },
  { icon: <Sparkles className="h-3.5 w-3.5" />, label: "Animate" },
  { icon: <ArrowUpRight className="h-3.5 w-3.5" />, label: "Upscale" },
];

// Central Hub Icon
function HubIcon() {
  return (
    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#1a1a1a]">
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="3" y="3" width="7" height="7" rx="1" />
        <rect x="14" y="3" width="7" height="7" rx="1" />
        <rect x="3" y="14" width="7" height="7" rx="1" />
        <rect x="14" y="14" width="7" height="7" rx="1" />
      </svg>
    </div>
  );
}

// Workflow Item Pill Component
function WorkflowPill({
  icon,
  label,
  className = "",
}: {
  icon: ReactNode;
  label: string;
  className?: string;
}) {
  return (
    <div
      className={`inline-flex items-center gap-1.5 rounded-full border border-[#E5E5E5] bg-white px-2.5 py-1.5 text-[11px] font-medium text-[#374151] shadow-sm ${className}`}
    >
      <span className="text-[#6B7280]">{icon}</span>
      <span>{label}</span>
    </div>
  );
}

// Tool Badge Component
function ToolBadge({ label }: { label: string }) {
  return (
    <div className="inline-flex items-center rounded-md border border-[#E5E5E5] bg-white px-2 py-1 text-[10px] font-medium text-[#9CA3AF]">
      {label}
    </div>
  );
}

// Before Section - Linear workflow with tools
function BeforeSection({
  title,
  description,
  items,
}: {
  title: string;
  description: string;
  items: WorkflowItem[];
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="flex flex-col rounded-2xl bg-[#EBEBEB] p-6"
    >
      <h3 className="text-sm font-semibold text-[#1F2937]">{title}</h3>
      <p className="mt-1.5 text-[11px] leading-relaxed text-[#6B7280]">
        {description}
      </p>

      <div className="mt-6 flex flex-col gap-3">
        {items.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}
            className="flex items-center justify-between"
          >
            <div className="flex items-center gap-2">
              <WorkflowPill icon={item.icon} label={item.label} />
              {/* Dashed connector line */}
              <div className="h-px flex-1 min-w-[60px] max-w-[120px] border-t border-dashed border-[#C9C9C9]" />
            </div>
            {item.tool && <ToolBadge label={item.tool} />}
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

// After Section - Radial hub-and-spoke layout
function AfterSection({
  title,
  description,
  items,
}: {
  title: string;
  description: string;
  items: WorkflowItem[];
}) {
  // Pre-defined positions matching original layout
  // Based on the original image, items are positioned:
  // - Create brief: top center
  // - Generate image: right side
  // - Edit image: bottom right
  // - Generate video: bottom center
  // - Animate: left side
  // - Upscale: top left
  const positions = [
    { x: 0, y: -120 },    // Create brief - top center
    { x: 115, y: -35 },   // Generate image - right upper
    { x: 115, y: 65 },    // Edit image - right lower
    { x: 0, y: 120 },     // Generate video - bottom center
    { x: -115, y: 35 },   // Animate - left middle
    { x: -115, y: -65 },  // Upscale - left upper
  ];

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="flex flex-col rounded-2xl bg-[#EBEBEB] p-6"
    >
      <h3 className="text-sm font-semibold text-[#1F2937]">{title}</h3>
      <p className="mt-1.5 text-[11px] leading-relaxed text-[#6B7280]">
        {description}
      </p>

      {/* Radial Layout */}
      <div className="mt-6 flex flex-1 items-center justify-center">
        <div className="relative h-[320px] w-[320px]">
          {/* Concentric circles - centered */}
          <div className="absolute left-1/2 top-1/2 h-[220px] w-[220px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#D9D9D9]" />
          <div className="absolute left-1/2 top-1/2 h-[150px] w-[150px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#D9D9D9]" />
          <div className="absolute left-1/2 top-1/2 h-[80px] w-[80px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#D9D9D9]" />

          {/* Central Hub */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.4, delay: 0.5 }}
            className="absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2"
          >
            <HubIcon />
          </motion.div>

          {/* Create brief - top */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: 0.6 }}
            className="absolute left-1/2 top-0 z-20 -translate-x-1/2 whitespace-nowrap"
          >
            <WorkflowPill icon={items[0]?.icon} label={items[0]?.label || "Create brief"} />
          </motion.div>

          {/* Upscale - left side */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: 0.7 }}
            className="absolute left-0 top-[85px] z-20 whitespace-nowrap"
          >
            <WorkflowPill icon={items[5]?.icon} label={items[5]?.label || "Upscale"} />
          </motion.div>

          {/* Generate image - right side */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: 0.8 }}
            className="absolute right-0 top-[85px] z-20 whitespace-nowrap"
          >
            <WorkflowPill icon={items[1]?.icon} label={items[1]?.label || "Generate image"} />
          </motion.div>

          {/* Animate - bottom left */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: 0.9 }}
            className="absolute bottom-[60px] left-0 z-20 whitespace-nowrap"
          >
            <WorkflowPill icon={items[4]?.icon} label={items[4]?.label || "Animate"} />
          </motion.div>

          {/* Edit image - bottom right */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: 1.0 }}
            className="absolute bottom-[60px] right-0 z-20 whitespace-nowrap"
          >
            <WorkflowPill icon={items[2]?.icon} label={items[2]?.label || "Edit image"} />
          </motion.div>

          {/* Generate video - bottom center */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: 1.1 }}
            className="absolute bottom-0 left-1/2 z-20 -translate-x-1/2 whitespace-nowrap"
          >
            <WorkflowPill icon={items[3]?.icon} label={items[3]?.label || "Generate video"} />
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}

// Main Component
// ============================================================================
// CUSTOMIZATION
// ============================================================================

const COLORS = { light: {}, dark: {} } as const;
const IMAGES = {} as const;

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

export default function KyosoBeforeAfter({
  mode = "default",
  badge = "Comparison",
  heading = "No more platform\nhopping",
  subheading = "100x your marketing with an AI creative team. The world's first AI designer, marketer, and ad creator in one.",
  beforeTitle = "Before Kyoso",
  beforeDescription = "Juggling platforms, scattered content, and messy workflows. Too many tools, too little time.",
  afterTitle = "After Kyoso",
  afterDescription = "All your workflows, united in one hub—seamless, simple, and fully compatible with your favorite models and tools, including Figma.",
  beforeItems = defaultBeforeItems,
  afterItems = defaultAfterItems,
}: KyosoBeforeAfterProps) {
  return (
    <section className="w-full bg-[#FAFAFA] py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="mb-4 text-center"
        >
          <span className="text-xs font-medium tracking-wide text-[#6B7280]">
            {badge}
          </span>
        </motion.div>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="whitespace-pre-line text-center text-3xl font-semibold tracking-tight text-[#1F2937] sm:text-4xl"
        >
          {heading}
        </motion.h2>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="mx-auto mt-4 max-w-lg text-center text-sm leading-relaxed text-[#6B7280]"
        >
          {subheading}
        </motion.p>

        {/* Before/After Grid */}
        <div className="mt-10 grid gap-4 md:grid-cols-2">
          <BeforeSection
            title={beforeTitle}
            description={beforeDescription}
            items={beforeItems}
          />
          <AfterSection
            title={afterTitle}
            description={afterDescription}
            items={afterItems}
          />
        </div>
      </div>
    </section>
  );
}
