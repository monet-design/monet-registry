"use client";

// ============================================================================
// CUSTOMIZATION - 이 섹션의 값들을 수정하여 프로젝트에 맞게 조정하세요
// ============================================================================

const COLORS = {
  light: {},
  dark: {},
} as const;

const IMAGES = {} as const;

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Zap, Sparkles, Download, Image as ImageIcon } from "lucide-react";
import NextImage from "next/image";

interface Tab {
  id: string;
  label: string;
  icon: React.ReactNode;
}

interface FigmaFeatureTabsProps {
  mode?: "light" | "dark";
  title?: string;
  subtitle?: string;
  tabs?: Tab[];
  defaultActiveTab?: string;
  previewImage?: string;
}

function TabButton({
  tab,
  isActive,
  onClick,
}: {
  tab: Tab;
  isActive: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={`relative flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition-all duration-300 ${
        isActive
          ? "bg-white text-gray-900 shadow-md"
          : "text-gray-400 hover:text-gray-300"
      }`}
    >
      {isActive && (
        <motion.div
          layoutId="activeTabBg"
          className="absolute inset-0 rounded-full bg-white"
          initial={false}
          transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
        />
      )}
      <span className="relative z-10 flex items-center gap-2">
        {tab.icon}
        {tab.label}
      </span>
    </button>
  );
}

function AppFrame({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative mx-auto w-full max-w-2xl">
      {/* Gradient glow behind the frame - subtle */}
      <div className="absolute -inset-2 rounded-3xl bg-gradient-to-b from-pink-500/15 via-purple-600/20 to-purple-500/15 blur-2xl" />

      {/* Main frame with gradient border */}
      <div className="relative rounded-2xl bg-gradient-to-b from-pink-500/70 via-purple-600/80 to-purple-500/70 p-[2px]">
        <div className="rounded-[14px] bg-[#2f2f2f] p-1">
          {/* Window controls */}
          <div className="flex items-center gap-2 px-3 py-2">
            <div className="flex items-center gap-1.5">
              <div className="h-3 w-3 rounded-full bg-[#ff5f57]" />
              <div className="h-3 w-3 rounded-full bg-[#febc2e]" />
              <div className="h-3 w-3 rounded-full bg-[#28c840]" />
            </div>
            <div className="ml-4 flex items-center gap-2 text-xs text-gray-500">
              <span>Outline</span>
              <svg
                className="h-3 w-3"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>
          </div>

          {/* Content area */}
          <div className="overflow-hidden rounded-lg bg-[#3a3a3a]">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}

function DesignSpecsPreview() {
  return (
    <div className="relative flex flex-col items-center justify-center p-6">
      {/* App preview image - already contains the full card UI */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2, duration: 0.4 }}
        className="relative w-full max-w-sm"
      >
        <NextImage
          src="/registry/figma-feature-tabs/app-preview.png"
          alt="Design preview"
          width={672}
          height={410}
          className="w-full rounded-lg"
        />
      </motion.div>

      {/* Add to Figma button */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.3 }}
        className="mt-4"
      >
        <div className="rounded-full bg-purple-600 px-6 py-2 text-xs font-medium text-white">
          Add to Figma
        </div>
      </motion.div>
    </div>
  );
}

function ImportPreview() {
  return (
    <div className="flex items-center justify-center p-12">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}
        className="flex flex-col items-center gap-4 text-center"
      >
        <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-yellow-400 to-orange-500">
          <Download className="h-8 w-8 text-white" />
        </div>
        <div>
          <h4 className="text-lg font-semibold text-white">
            Import from Airtable
          </h4>
          <p className="mt-1 text-sm text-gray-400">
            Sync your Airtable data directly into Figma
          </p>
        </div>
        <div className="mt-2 grid grid-cols-3 gap-2">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * i, duration: 0.3 }}
              className="h-12 w-16 rounded-lg bg-[#3a3a3a]"
            />
          ))}
        </div>
      </motion.div>
    </div>
  );
}

function PlaceholdersPreview() {
  return (
    <div className="flex items-center justify-center p-12">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}
        className="flex flex-col items-center gap-4 text-center"
      >
        <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-400 to-cyan-500">
          <ImageIcon className="h-8 w-8 text-white" />
        </div>
        <div>
          <h4 className="text-lg font-semibold text-white">Placeholders</h4>
          <p className="mt-1 text-sm text-gray-400">
            Generate placeholder content instantly
          </p>
        </div>
        <div className="mt-2 flex gap-3">
          {["Avatar", "Image", "Text"].map((label, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 + 0.1 * i, duration: 0.3 }}
              className="rounded-full bg-[#3a3a3a] px-4 py-2 text-xs text-gray-300"
            >
              {label}
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}

const defaultTabs: Tab[] = [
  {
    id: "design-specs",
    label: "Design Specs",
    icon: <Sparkles className="h-4 w-4" />,
  },
  {
    id: "import",
    label: "Import from Airtable",
    icon: <Download className="h-4 w-4" />,
  },
  {
    id: "placeholders",
    label: "Placeholders",
    icon: <ImageIcon className="h-4 w-4" />,
  },
];

export default function FigmaFeatureTabs({
  mode = "light",
  title = "Supercharge Figma",
  subtitle = "Build custom drag and drop automations that do\ntime-sensitive Figma tasks for you in one click.",
  tabs = defaultTabs,
  defaultActiveTab = "design-specs",
}: FigmaFeatureTabsProps) {
  const [activeTab, setActiveTab] = useState(defaultActiveTab);

  const renderPreview = () => {
    switch (activeTab) {
      case "design-specs":
        return <DesignSpecsPreview />;
      case "import":
        return <ImportPreview />;
      case "placeholders":
        return <PlaceholdersPreview />;
      default:
        return <DesignSpecsPreview />;
    }
  };

  return (
    <section className="w-full bg-[#333333] px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-8 text-center"
        >
          <div className="mb-4 flex items-center justify-center gap-2">
            <Zap className="h-6 w-6 text-white" fill="white" />
            <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
              {title}
            </h2>
          </div>
          <p className="mx-auto max-w-md whitespace-pre-line text-sm leading-relaxed text-gray-400">
            {subtitle}
          </p>
        </motion.div>

        {/* Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-8 flex flex-wrap items-center justify-center gap-2"
        >
          {tabs.map((tab) => (
            <TabButton
              key={tab.id}
              tab={tab}
              isActive={activeTab === tab.id}
              onClick={() => setActiveTab(tab.id)}
            />
          ))}
        </motion.div>

        {/* App Preview Frame */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          <AppFrame>
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                {renderPreview()}
              </motion.div>
            </AnimatePresence>
          </AppFrame>
        </motion.div>
      </div>
    </section>
  );
}
