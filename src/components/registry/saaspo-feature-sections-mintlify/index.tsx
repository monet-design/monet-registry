"use client";

import { useState } from "react";
import { motion } from "motion/react";
import {
  Copy,
  Search,
  GitBranch,
  X,
  Gamepad2,
  Shield,
  MessageSquare,
  Palette,
} from "lucide-react";

// ============================================================================
// CUSTOMIZATION
// ============================================================================

const COLORS = {
  light: {
    background: "#121212",
    accent: "#eab308",
  },
  dark: {
    background: "#121212",
    accent: "#eab308",
  },
} as const;

const IMAGES = {} as const;

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

// Types
interface TabItem {
  id: string;
  label: string;
}

interface FeatureItem {
  icon: React.ReactNode;
  title: string;
  description: string;
}

interface CodeLine {
  number: number;
  content: React.ReactNode;
}

interface SaaspoFeatureSectionsMintlifyProps {
  mode?: "light" | "dark";
  title?: string;
  description?: string;
  tabs?: TabItem[];
  activeTab?: string;
  features?: FeatureItem[];
  codeFileName?: string;
  codeLines?: CodeLine[];
}

// Default tabs
const defaultTabs: TabItem[] = [
  { id: "codebase-syncing", label: "Codebase-syncing" },
  { id: "web-editor", label: "Web editor" },
  { id: "preview-deployments", label: "Preview deployments" },
];

// Default features
const defaultFeatures: FeatureItem[] = [
  {
    icon: <Gamepad2 className="w-5 h-5" />,
    title: "API Playground",
    description: "Test and explore APIs directly in your docs",
  },
  {
    icon: <Shield className="w-5 h-5" />,
    title: "Visitor authentication",
    description: "Secure your docs with customizable access controls",
  },
  {
    icon: <MessageSquare className="w-5 h-5" />,
    title: "User feedback",
    description: "Keep docs and code in perfect harmony",
  },
  {
    icon: <Palette className="w-5 h-5" />,
    title: "Fully customizable",
    description: "Tailor your docs with custom components and JS + CSS",
  },
];

// Code syntax highlighting components
function CodeKeyword({ children }: { children: React.ReactNode }) {
  return <span className="text-[#f9a8d4]">{children}</span>;
}

function CodeString({ children }: { children: React.ReactNode }) {
  return <span className="text-[#fca5a5]">{children}</span>;
}

function CodeHeading({ children }: { children: React.ReactNode }) {
  return <span className="text-[#7dd3fc]">{children}</span>;
}

function CodeComment({ children }: { children: React.ReactNode }) {
  return <span className="text-[#6b7280]">{children}</span>;
}

// Default code lines
const defaultCodeLines: CodeLine[] = [
  { number: 1, content: <CodeComment>---</CodeComment> },
  {
    number: 2,
    content: (
      <>
        <CodeKeyword>title:</CodeKeyword>{" "}
        <CodeString>&quot;Configurations&quot;</CodeString>
      </>
    ),
  },
  {
    number: 3,
    content: (
      <>
        <CodeKeyword>description:</CodeKeyword>{" "}
        <CodeString>&quot;Sync your docs with a code</CodeString>
      </>
    ),
  },
  {
    number: 4,
    content: (
      <>
        {"  "}
        <CodeString>(GitHub and GitLab) repos&quot;</CodeString>
      </>
    ),
  },
  {
    number: 5,
    content: (
      <>
        <CodeKeyword>icon:</CodeKeyword>{" "}
        <CodeString>&quot;rocket&quot;</CodeString>
      </>
    ),
  },
  { number: 6, content: <CodeComment>---</CodeComment> },
  { number: 7, content: "" },
  { number: 8, content: <CodeHeading>## GitHub</CodeHeading> },
  { number: 9, content: "" },
  {
    number: 10,
    content: (
      <span className="text-[#9ca3af]">
        Mintlify integrates with the GitHub API,
      </span>
    ),
  },
  {
    number: 11,
    content: (
      <span className="text-[#9ca3af]">
        enabling synchronization between your docs
      </span>
    ),
  },
  {
    number: 12,
    content: (
      <span className="text-[#9ca3af]">
        and your GitHub repository. This
      </span>
    ),
  },
  {
    number: 13,
    content: (
      <span className="text-[#9ca3af]">
        integration is made possible through the
      </span>
    ),
  },
  {
    number: 14,
    content: (
      <span className="text-[#9ca3af]">utilization of GitHub Apps.</span>
    ),
  },
  { number: 15, content: "" },
  { number: 16, content: "" },
  { number: 17, content: "" },
  { number: 18, content: "" },
  { number: 19, content: "" },
];

// Code Editor Component
function CodeEditor({
  fileName,
  codeLines,
}: {
  fileName: string;
  codeLines: CodeLine[];
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      viewport={{ once: true }}
      className="bg-[#1a1a1a] rounded-xl border border-[#2a2a2a] overflow-hidden shadow-2xl"
    >
      {/* File Tab */}
      <div className="flex items-center border-b border-[#2a2a2a]">
        <div className="flex items-center gap-2 px-4 py-2.5 bg-[#1a1a1a] border-r border-[#2a2a2a]">
          <div className="w-4 h-4 rounded bg-[#10b981] flex items-center justify-center">
            <span className="text-[8px] text-white font-bold">M</span>
          </div>
          <span className="text-sm text-[#e5e5e5]">{fileName}</span>
          <X className="w-3.5 h-3.5 text-[#666] cursor-pointer hover:text-[#999]" />
        </div>
      </div>

      {/* Editor Content */}
      <div className="flex">
        {/* Sidebar Icons */}
        <div className="flex flex-col items-center gap-4 py-4 px-3 border-r border-[#2a2a2a] bg-[#161616]">
          <Copy className="w-4 h-4 text-[#666] hover:text-[#999] cursor-pointer" />
          <Search className="w-4 h-4 text-[#666] hover:text-[#999] cursor-pointer" />
          <GitBranch className="w-4 h-4 text-[#666] hover:text-[#999] cursor-pointer" />
        </div>

        {/* Code Area */}
        <div className="flex-1 py-3 px-2 font-mono text-sm overflow-x-auto">
          {codeLines.map((line) => (
            <div key={line.number} className="flex">
              <span className="w-8 text-right text-[#525252] select-none mr-4">
                {line.number}
              </span>
              <span className="text-[#9ca3af]">{line.content}</span>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

// Vertical Tab Component
function VerticalTabs({
  tabs,
  activeTab,
  onTabChange,
}: {
  tabs: TabItem[];
  activeTab: string;
  onTabChange: (id: string) => void;
}) {
  return (
    <div className="flex flex-col gap-1">
      {tabs.map((tab, index) => (
        <motion.button
          key={tab.id}
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
          viewport={{ once: true }}
          onClick={() => onTabChange(tab.id)}
          className={`flex items-center text-left py-2 transition-colors ${
            activeTab === tab.id
              ? "text-white"
              : "text-[#6b7280] hover:text-[#9ca3af]"
          }`}
        >
          <div
            className={`w-0.5 h-5 mr-3 rounded-full transition-colors ${
              activeTab === tab.id ? "bg-[#eab308]" : "bg-transparent"
            }`}
          />
          <span className="text-base font-medium">{tab.label}</span>
        </motion.button>
      ))}
    </div>
  );
}

// Feature Card Component
function FeatureCard({
  feature,
  index,
}: {
  feature: FeatureItem;
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
      viewport={{ once: true }}
      className="flex flex-col gap-3"
    >
      <div className="text-[#9ca3af]">{feature.icon}</div>
      <h3 className="text-white font-semibold text-base">{feature.title}</h3>
      <p className="text-[#6b7280] text-sm leading-relaxed">
        {feature.description}
      </p>
    </motion.div>
  );
}

// Main Component
export default function SaaspoFeatureSectionsMintlify({
  mode = "dark",
  title = "Built for collaboration",
  description = "Empower your team with workflows that\nmeet you where you are, whether you\nprefer git sync or WYSIWYG editors.",
  tabs = defaultTabs,
  activeTab: initialActiveTab = "codebase-syncing",
  features = defaultFeatures,
  codeFileName = "Configurations.mdx",
  codeLines = defaultCodeLines,
}: SaaspoFeatureSectionsMintlifyProps) {
  const [activeTab, setActiveTab] = useState(initialActiveTab);
  const colors = COLORS[mode];

  return (
    <section
      className="relative w-full py-20 lg:py-28"
      style={{ backgroundColor: colors.background }}
    >
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 mb-20">
          {/* Left Column - Text & Tabs */}
          <div className="flex flex-col gap-8">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-4xl lg:text-5xl font-bold text-white tracking-tight"
            >
              {title}
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-[#9ca3af] text-base lg:text-lg leading-relaxed whitespace-pre-line"
            >
              {description}
            </motion.p>

            <div className="mt-4">
              <VerticalTabs
                tabs={tabs}
                activeTab={activeTab}
                onTabChange={setActiveTab}
              />
            </div>
          </div>

          {/* Right Column - Code Editor */}
          <div className="flex items-center">
            <CodeEditor fileName={codeFileName} codeLines={codeLines} />
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-[#2a2a2a] mb-16" />

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
          {features.map((feature, index) => (
            <FeatureCard key={feature.title} feature={feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
