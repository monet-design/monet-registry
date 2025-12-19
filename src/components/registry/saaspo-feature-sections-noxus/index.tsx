"use client";

// ============================================================================
// CUSTOMIZATION - 이 섹션의 값들을 수정하여 프로젝트에 맞게 조정하세요
// ============================================================================

/**
 * 커스텀 색상 (브랜드 컬러)
 */
const COLORS = {
  light: {
    background: "#FFFFFF",
    cardBackground: "#EEF4FA",
    text: "#1A1A1A",
    textMuted: "#6B7280",
    border: "#E5E7EB",
    nodeBackground: "#FFFFFF",
    nodeBorder: "#E5E7EB",
    connectionLine: "#D1D5DB",
  },
  dark: {
    background: "#0A0A0A",
    cardBackground: "#1E293B",
    text: "#F9FAFB",
    textMuted: "#9CA3AF",
    border: "#374151",
    nodeBackground: "#1F2937",
    nodeBorder: "#374151",
    connectionLine: "#4B5563",
  },
} as const;

/**
 * 워크플로우 노드 데이터
 */
const DEFAULT_WORKFLOW_NODES = [
  {
    id: "youtube",
    label: "Process youtube video",
    icon: "youtube",
    position: { top: "12%", left: "15%" },
  },
  {
    id: "blog",
    label: "Generate blog post",
    icon: "blog",
    position: { top: "28%", left: "40%" },
  },
  {
    id: "image",
    label: "Create image",
    icon: "image",
    position: { top: "44%", left: "60%" },
  },
  {
    id: "document",
    label: "Create document",
    icon: "document",
    position: { top: "60%", left: "40%" },
  },
  {
    id: "drive",
    label: "Save in Drive",
    icon: "drive",
    position: { top: "76%", left: "15%" },
  },
] as const;

/**
 * 아코디언 데이터
 */
const DEFAULT_ACCORDION_ITEMS = [
  {
    id: "no-code",
    title: "No-code interface",
    content:
      "AI is now accessible to non-technical teams—no need for costly consultants to keep your tools and processes up to date.",
  },
  {
    id: "ai-agents",
    title: "AI agents",
    content:
      "Leverage intelligent AI agents that learn from your workflows and automate repetitive tasks with precision.",
  },
  {
    id: "integrations",
    title: "Workspace integrations",
    content:
      "Connect seamlessly with your favorite tools including Google Workspace, Slack, Notion, and hundreds more.",
  },
] as const;

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronUp, ChevronDown, Youtube, FileText, Image as ImageIcon, FileIcon, HardDrive } from "lucide-react";

interface AccordionItem {
  id: string;
  title: string;
  content: string;
}

interface WorkflowNode {
  id: string;
  label: string;
  icon: string;
  position: { top: string; left: string };
}

interface SaaspoFeatureSectionsNoxusProps {
  mode?: "light" | "dark";
  title?: string;
  accordionItems?: AccordionItem[];
  workflowNodes?: WorkflowNode[];
}

type ColorsType = {
  background: string;
  cardBackground: string;
  text: string;
  textMuted: string;
  border: string;
  nodeBackground: string;
  nodeBorder: string;
  connectionLine: string;
};

// Custom Accordion Component
function Accordion({
  items,
  colors,
  mode,
}: {
  items: readonly AccordionItem[] | AccordionItem[];
  colors: ColorsType;
  mode: "light" | "dark";
}) {
  const [openId, setOpenId] = useState<string>(items[0]?.id || "");

  return (
    <div className="space-y-0">
      {items.map((item, index) => (
        <div key={item.id}>
          <button
            onClick={() => setOpenId(openId === item.id ? "" : item.id)}
            className="w-full flex items-center justify-between py-5 text-left"
          >
            <span
              className="text-xl md:text-2xl font-semibold"
              style={{ color: colors.text }}
            >
              {item.title}
            </span>
            {openId === item.id ? (
              <ChevronUp className="w-5 h-5" style={{ color: colors.text }} />
            ) : (
              <ChevronDown className="w-5 h-5" style={{ color: colors.text }} />
            )}
          </button>
          <AnimatePresence>
            {openId === item.id && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="overflow-hidden"
              >
                <p
                  className="pb-5 text-base leading-relaxed max-w-md"
                  style={{ color: colors.textMuted }}
                >
                  {item.content}
                </p>
              </motion.div>
            )}
          </AnimatePresence>
          {index < items.length - 1 && (
            <div
              className="h-px w-full"
              style={{ backgroundColor: colors.border }}
            />
          )}
        </div>
      ))}
    </div>
  );
}

// Workflow Node Icon Component
function NodeIcon({ icon, className }: { icon: string; className?: string }) {
  switch (icon) {
    case "youtube":
      return <Youtube className={className} style={{ color: "#FF0000" }} />;
    case "blog":
      return <FileText className={className} style={{ color: "#3B82F6" }} />;
    case "image":
      return <ImageIcon className={className} style={{ color: "#10B981" }} />;
    case "document":
      return <FileIcon className={className} style={{ color: "#3B82F6" }} />;
    case "drive":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none">
          <path d="M4.5 21L1.5 15.5L8 4h8l6.5 11.5L19.5 21H4.5z" fill="#FBBC04" />
          <path d="M8 4l6.5 11.5H1.5L8 4z" fill="#34A853" />
          <path d="M16 4l6.5 11.5h-8L8 4h8z" fill="#4285F4" />
        </svg>
      );
    default:
      return <FileText className={className} />;
  }
}

// Workflow Diagram Component
function WorkflowDiagram({
  nodes,
  colors,
}: {
  nodes: readonly WorkflowNode[] | WorkflowNode[];
  colors: ColorsType;
}) {
  return (
    <div
      className="relative w-full h-full min-h-[400px] md:min-h-[500px] rounded-2xl p-8"
      style={{ backgroundColor: colors.cardBackground }}
    >
      {/* Connection Lines SVG */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        style={{ zIndex: 0 }}
      >
        {/* YouTube to Blog */}
        <path
          d="M 200 80 C 200 120, 320 120, 320 160"
          stroke={colors.connectionLine}
          strokeWidth="1.5"
          fill="none"
          strokeDasharray="4 4"
        />
        {/* Blog to Image */}
        <path
          d="M 380 180 C 420 180, 440 220, 440 260"
          stroke={colors.connectionLine}
          strokeWidth="1.5"
          fill="none"
          strokeDasharray="4 4"
        />
        {/* Image to Document */}
        <path
          d="M 400 300 C 400 340, 340 340, 340 360"
          stroke={colors.connectionLine}
          strokeWidth="1.5"
          fill="none"
          strokeDasharray="4 4"
        />
        {/* Document to Drive */}
        <path
          d="M 280 380 C 240 380, 200 400, 200 440"
          stroke={colors.connectionLine}
          strokeWidth="1.5"
          fill="none"
          strokeDasharray="4 4"
        />
      </svg>

      {/* Workflow Nodes */}
      {nodes.map((node, index) => (
        <motion.div
          key={node.id}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: index * 0.1 }}
          viewport={{ once: true }}
          className="absolute flex items-center gap-2 px-4 py-2 rounded-full shadow-sm border"
          style={{
            top: node.position.top,
            left: node.position.left,
            backgroundColor: colors.nodeBackground,
            borderColor: colors.nodeBorder,
            zIndex: 1,
          }}
        >
          <NodeIcon icon={node.icon} className="w-5 h-5" />
          <span
            className="text-sm font-medium whitespace-nowrap"
            style={{ color: colors.text }}
          >
            {node.label}
          </span>
        </motion.div>
      ))}
    </div>
  );
}

export default function SaaspoFeatureSectionsNoxus({
  mode = "light",
  title = "Agentic Automations, Faster Than Ever.",
  accordionItems = DEFAULT_ACCORDION_ITEMS as unknown as AccordionItem[],
  workflowNodes = DEFAULT_WORKFLOW_NODES as unknown as WorkflowNode[],
}: SaaspoFeatureSectionsNoxusProps) {
  const colors = COLORS[mode];

  return (
    <section
      className="relative w-full py-16 md:py-24"
      style={{ backgroundColor: colors.background }}
    >
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&display=swap');
      `}</style>

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl lg:text-6xl mb-8"
          style={{
            fontFamily: "'Instrument Serif', serif",
            fontStyle: "italic",
            color: colors.text,
          }}
        >
          {title}
        </motion.h2>

        {/* Separator */}
        <div
          className="h-px w-full mb-8"
          style={{ backgroundColor: colors.border }}
        />

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left Column - Accordion */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Accordion items={accordionItems} colors={colors} mode={mode} />
          </motion.div>

          {/* Right Column - Workflow Diagram */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <WorkflowDiagram nodes={workflowNodes} colors={colors} />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
