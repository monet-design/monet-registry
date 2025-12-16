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
    accent: "#F97316", // Orange
    accentHover: "#EA580C",
    badgeBg: "#FEF3C7",
    badgeText: "#D97706",
    codeBg: "#FAFAFA",
    cardBorder: "#E5E7EB",
    dotPattern: "#E5E5E5",
  },
  dark: {
    accent: "#FB923C",
    accentHover: "#F97316",
    badgeBg: "#422006",
    badgeText: "#FBBF24",
    codeBg: "#1F2937",
    cardBorder: "#374151",
    dotPattern: "#374151",
  },
} as const;

/**
 * 이미지 에셋
 */
const IMAGES = {} as const;

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { useState } from "react";
import { motion } from "motion/react";
import { Grid3X3, Search, Layers, Copy, Check } from "lucide-react";

interface FeatureCard {
  icon: React.ReactNode;
  title: string;
  badge?: string;
  description: string;
}

interface CodeTab {
  id: string;
  label: string;
  icon: React.ReactNode;
  code: string;
}

interface SaaspoFeatureSectionsFirecrawlProps {
  mode?: "light" | "dark";
  badge?: string;
  title?: string;
  highlightedWord?: string;
  description?: string;
  features?: FeatureCard[];
  codeTabs?: CodeTab[];
  markdownPreview?: string;
}

// Python icon
const PythonIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M14.25.18l.9.2.73.26.59.3.45.32.34.34.25.34.16.33.1.3.04.26.02.2-.01.13V8.5l-.05.63-.13.55-.21.46-.26.38-.3.31-.33.25-.35.19-.35.14-.33.1-.3.07-.26.04-.21.02H8.77l-.69.05-.59.14-.5.22-.41.27-.33.32-.27.35-.2.36-.15.37-.1.35-.07.32-.04.27-.02.21v3.06H3.17l-.21-.03-.28-.07-.32-.12-.35-.18-.36-.26-.36-.36-.35-.46-.32-.59-.28-.73-.21-.88-.14-1.05-.05-1.23.06-1.22.16-1.04.24-.87.32-.71.36-.57.4-.44.42-.33.42-.24.4-.16.36-.1.32-.05.24-.01h.16l.06.01h8.16v-.83H6.18l-.01-2.75-.02-.37.05-.34.11-.31.17-.28.25-.26.31-.23.38-.2.44-.18.51-.15.58-.12.64-.1.71-.06.77-.04.84-.02 1.27.05zm-6.3 1.98l-.23.33-.08.41.08.41.23.34.33.22.41.09.41-.09.33-.22.23-.34.08-.41-.08-.41-.23-.33-.33-.22-.41-.09-.41.09zm13.09 3.95l.28.06.32.12.35.18.36.27.36.35.35.47.32.59.28.73.21.88.14 1.04.05 1.23-.06 1.23-.16 1.04-.24.86-.32.71-.36.57-.4.45-.42.33-.42.24-.4.16-.36.09-.32.05-.24.02-.16-.01h-8.22v.82h5.84l.01 2.76.02.36-.05.34-.11.31-.17.29-.25.25-.31.24-.38.2-.44.17-.51.15-.58.13-.64.09-.71.07-.77.04-.84.01-1.27-.04-1.07-.14-.9-.2-.73-.25-.59-.3-.45-.33-.34-.34-.25-.34-.16-.33-.1-.3-.04-.25-.02-.2.01-.13v-5.34l.05-.64.13-.54.21-.46.26-.38.3-.32.33-.24.35-.2.35-.14.33-.1.3-.06.26-.04.21-.02.13-.01h5.84l.69-.05.59-.14.5-.21.41-.28.33-.32.27-.35.2-.36.15-.36.1-.35.07-.32.04-.28.02-.21V6.07h2.09l.14.01zm-6.47 14.25l-.23.33-.08.41.08.41.23.33.33.23.41.08.41-.08.33-.23.23-.33.08-.41-.08-.41-.23-.33-.33-.23-.41-.08-.41.08z" />
  </svg>
);

// Node.js icon
const NodeIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M11.998,24c-0.321,0-0.641-0.084-0.922-0.247l-2.936-1.737c-0.438-0.245-0.224-0.332-0.08-0.383 c0.585-0.203,0.703-0.25,1.328-0.604c0.065-0.037,0.151-0.023,0.218,0.017l2.256,1.339c0.082,0.045,0.197,0.045,0.272,0l8.795-5.076 c0.082-0.047,0.134-0.141,0.134-0.238V6.921c0-0.099-0.053-0.192-0.137-0.242l-8.791-5.072c-0.081-0.047-0.189-0.047-0.271,0 L3.075,6.68C2.99,6.729,2.936,6.825,2.936,6.921v10.15c0,0.097,0.054,0.189,0.139,0.235l2.409,1.392 c1.307,0.654,2.108-0.116,2.108-0.89V7.787c0-0.142,0.114-0.253,0.256-0.253h1.115c0.139,0,0.255,0.111,0.255,0.253v10.021 c0,1.745-0.95,2.745-2.604,2.745c-0.508,0-0.909,0-2.026-0.551L2.28,18.675c-0.57-0.329-0.922-0.945-0.922-1.604V6.921 c0-0.659,0.353-1.275,0.922-1.603l8.795-5.082c0.557-0.315,1.296-0.315,1.848,0l8.794,5.082c0.57,0.329,0.924,0.944,0.924,1.603 v10.15c0,0.659-0.354,1.273-0.924,1.604l-8.794,5.078C12.643,23.916,12.324,24,11.998,24z M19.099,13.993 c0-1.9-1.284-2.406-3.987-2.763c-2.731-0.361-3.009-0.548-3.009-1.187c0-0.528,0.235-1.233,2.258-1.233 c1.807,0,2.473,0.389,2.747,1.607c0.024,0.115,0.129,0.199,0.247,0.199h1.141c0.071,0,0.138-0.031,0.186-0.081 c0.048-0.054,0.074-0.123,0.067-0.196c-0.177-2.098-1.571-3.076-4.388-3.076c-2.508,0-4.004,1.058-4.004,2.833 c0,1.925,1.488,2.457,3.895,2.695c2.88,0.282,3.103,0.703,3.103,1.269c0,0.983-0.789,1.402-2.642,1.402 c-2.327,0-2.839-0.584-3.011-1.742c-0.02-0.124-0.126-0.215-0.253-0.215h-1.137c-0.141,0-0.254,0.112-0.254,0.253 c0,1.482,0.806,3.248,4.655,3.248C17.501,17.007,19.099,15.91,19.099,13.993z" />
  </svg>
);

// Curl icon
const CurlIcon = () => (
  <span className="font-mono text-xs font-medium">{"{}"}</span>
);

const defaultFeatures: FeatureCard[] = [
  {
    icon: <Grid3X3 className="w-5 h-5" />,
    title: "Scrape",
    description: "Get llm-ready data from websites. Markdown, JSON, screenshot, etc.",
  },
  {
    icon: <Search className="w-5 h-5" />,
    title: "Search",
    badge: "New",
    description: "Search the web and get full content from results.",
  },
  {
    icon: <Layers className="w-5 h-5" />,
    title: "Crawl",
    description: "Crawl all the pages on a website and get data for each page.",
  },
];

const defaultCodeTabs: CodeTab[] = [
  {
    id: "python",
    label: "Python",
    icon: <PythonIcon />,
    code: `# pip install firecrawl-py
from firecrawl import Firecrawl

app = Firecrawl(api_key="fc-YOUR_API_KEY")

# Scrape a website:
app.scrape('firecrawl.dev')`,
  },
  {
    id: "nodejs",
    label: "Node.js",
    icon: <NodeIcon />,
    code: `// npm install firecrawl-js
import Firecrawl from 'firecrawl-js';

const app = new Firecrawl({ apiKey: "fc-YOUR_API_KEY" });

// Scrape a website:
await app.scrape('firecrawl.dev');`,
  },
  {
    id: "curl",
    label: "Curl",
    icon: <CurlIcon />,
    code: `curl -X POST https://api.firecrawl.dev/v1/scrape \\
  -H "Authorization: Bearer fc-YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{"url": "firecrawl.dev"}'`,
  },
];

const defaultMarkdownPreview = `# Firecrawl

Firecrawl is a powerful web scraping
library that makes it easy to extract
data from websites.

## Installation

To install Firecrawl, run:`;

// Dot pattern component
const DotPattern = ({ className = "" }: { className?: string }) => (
  <div
    className={`absolute pointer-events-none ${className}`}
    style={{
      backgroundImage: `radial-gradient(circle, #D1D5DB 1px, transparent 1px)`,
      backgroundSize: "16px 16px",
    }}
  />
);

export default function SaaspoFeatureSectionsFirecrawl({
  mode = "light",
  badge = "Developer First",
  title = "Start scraping today",
  highlightedWord = "scraping",
  description = "Enhance your apps with industry leading web scraping and crawling capabilities.",
  features = defaultFeatures,
  codeTabs = defaultCodeTabs,
  markdownPreview = defaultMarkdownPreview,
}: SaaspoFeatureSectionsFirecrawlProps) {
  const colors = COLORS[mode];
  const [activeTab, setActiveTab] = useState(codeTabs[0]?.id || "python");
  const [copied, setCopied] = useState(false);
  const [activeFeature, setActiveFeature] = useState(0);

  const handleCopy = () => {
    const activeCode = codeTabs.find((tab) => tab.id === activeTab)?.code || "";
    navigator.clipboard.writeText(activeCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const renderHighlightedTitle = () => {
    const parts = title.split(new RegExp(`(${highlightedWord})`, "gi"));
    return parts.map((part, index) =>
      part.toLowerCase() === highlightedWord.toLowerCase() ? (
        <span key={index} style={{ color: colors.accent }}>
          {part}
        </span>
      ) : (
        <span key={index}>{part}</span>
      )
    );
  };

  const renderCode = (code: string) => {
    const lines = code.split("\n");
    return lines.map((line, lineIndex) => {
      // Simple syntax highlighting
      const highlighted = line
        .replace(
          /(#.*$|\/\/.*$)/g,
          '<span class="text-gray-400">$1</span>'
        )
        .replace(
          /(['"].*?['"])/g,
          `<span style="color: ${colors.accent}">$1</span>`
        )
        .replace(
          /\b(from|import|const|await|new)\b/g,
          '<span class="text-purple-600">$1</span>'
        )
        .replace(
          /\b(Firecrawl|app)\b/g,
          '<span class="text-blue-600">$1</span>'
        );

      return (
        <div key={lineIndex} className="flex">
          <span className="w-8 text-right pr-4 text-gray-400 select-none">
            {lineIndex + 1}
          </span>
          <span dangerouslySetInnerHTML={{ __html: highlighted }} />
        </div>
      );
    });
  };

  const renderMarkdown = (markdown: string) => {
    const lines = markdown.split("\n");
    return lines.map((line, lineIndex) => {
      let content = line;
      let className = "text-gray-600 dark:text-gray-400";

      if (line.startsWith("# ")) {
        content = line.substring(2);
        className = "text-lg font-bold text-gray-900 dark:text-white";
      } else if (line.startsWith("## ")) {
        content = line.substring(3);
        className = "text-base font-semibold text-gray-800 dark:text-gray-200 mt-2";
      }

      return (
        <div key={lineIndex} className="flex">
          <span className="w-8 text-right pr-4 text-gray-400 select-none">
            {lineIndex + 1}
          </span>
          <span className={className}>{content}</span>
        </div>
      );
    });
  };

  return (
    <section
      className={`relative w-full py-20 px-4 overflow-hidden ${
        mode === "dark" ? "bg-gray-950" : "bg-white"
      }`}
    >
      {/* Dot patterns */}
      <DotPattern className="top-0 left-20 w-48 h-32 opacity-60" />
      <DotPattern className="top-0 right-20 w-48 h-32 opacity-60" />
      <DotPattern className="top-64 left-1/2 -translate-x-1/2 w-full h-24 opacity-40" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          {/* Badge */}
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="text-gray-400">{"//"}</span>
            <div
              className="flex items-center gap-1.5 px-2 py-1 rounded"
              style={{ backgroundColor: colors.accent }}
            >
              <span className="text-white text-xs font-medium">{">"}</span>
            </div>
            <span
              className={`text-sm font-medium ${
                mode === "dark" ? "text-gray-300" : "text-gray-700"
              }`}
            >
              {badge}
            </span>
            <span className="text-gray-400">{"/\\"}</span>
          </div>

          {/* Title */}
          <h2
            className={`text-4xl md:text-5xl font-bold mb-4 ${
              mode === "dark" ? "text-white" : "text-gray-900"
            }`}
          >
            {renderHighlightedTitle()}
          </h2>

          {/* Description */}
          <p
            className={`text-lg max-w-xl mx-auto ${
              mode === "dark" ? "text-gray-400" : "text-gray-600"
            }`}
          >
            {description}
          </p>
        </motion.div>

        {/* Feature Cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-4 mb-8"
        >
          {features.map((feature, index) => (
            <button
              key={index}
              onClick={() => setActiveFeature(index)}
              className={`p-6 rounded-xl border text-left transition-all ${
                activeFeature === index
                  ? mode === "dark"
                    ? "border-gray-600 bg-gray-800/50"
                    : "border-gray-300 bg-white shadow-sm"
                  : mode === "dark"
                  ? "border-gray-800 bg-gray-900/50 hover:border-gray-700"
                  : "border-gray-200 bg-gray-50/50 hover:border-gray-300"
              }`}
            >
              <div
                className={`mb-4 ${
                  mode === "dark" ? "text-gray-400" : "text-gray-500"
                }`}
                style={activeFeature === index ? { color: colors.accent } : {}}
              >
                {feature.icon}
              </div>
              <div className="flex items-center gap-2 mb-2">
                <h3
                  className={`font-semibold ${
                    mode === "dark" ? "text-white" : "text-gray-900"
                  }`}
                >
                  {feature.title}
                </h3>
                {feature.badge && (
                  <span
                    className="text-xs px-2 py-0.5 rounded-full font-medium"
                    style={{
                      backgroundColor: colors.badgeBg,
                      color: colors.badgeText,
                    }}
                  >
                    {feature.badge}
                  </span>
                )}
              </div>
              <p
                className={`text-sm ${
                  mode === "dark" ? "text-gray-400" : "text-gray-600"
                }`}
              >
                {feature.description}
              </p>
            </button>
          ))}
        </motion.div>

        {/* Code Editor Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-4"
        >
          {/* Code Editor */}
          <div
            className={`rounded-xl border overflow-hidden ${
              mode === "dark"
                ? "border-gray-800 bg-gray-900"
                : "border-gray-200 bg-white"
            }`}
          >
            {/* Window Header */}
            <div
              className={`flex items-center justify-between px-4 py-3 border-b ${
                mode === "dark" ? "border-gray-800" : "border-gray-200"
              }`}
            >
              <div className="flex items-center gap-2">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-gray-300 dark:bg-gray-600" />
                  <div className="w-3 h-3 rounded-full bg-gray-300 dark:bg-gray-600" />
                  <div className="w-3 h-3 rounded-full bg-gray-300 dark:bg-gray-600" />
                </div>
              </div>
              <button
                onClick={handleCopy}
                className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
                  mode === "dark"
                    ? "bg-gray-800 text-gray-300 hover:bg-gray-700"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4" />
                    Copied
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4" />
                    Copy code
                  </>
                )}
              </button>
            </div>

            {/* Tabs */}
            <div
              className={`flex border-b ${
                mode === "dark" ? "border-gray-800" : "border-gray-200"
              }`}
            >
              {codeTabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-4 py-3 text-sm font-medium transition-colors ${
                    activeTab === tab.id
                      ? mode === "dark"
                        ? "bg-gray-800 text-white border-b-2 border-white"
                        : "bg-white text-gray-900 border-b-2 border-gray-900"
                      : mode === "dark"
                      ? "text-gray-500 hover:text-gray-300"
                      : "text-gray-500 hover:text-gray-700"
                  }`}
                >
                  {tab.icon}
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Code Content */}
            <div
              className={`p-4 font-mono text-sm overflow-x-auto ${
                mode === "dark"
                  ? "bg-gray-900 text-gray-300"
                  : "bg-gray-50 text-gray-800"
              }`}
              style={{ minHeight: "200px" }}
            >
              {codeTabs.map((tab) => (
                <div
                  key={tab.id}
                  className={activeTab === tab.id ? "block" : "hidden"}
                >
                  {renderCode(tab.code)}
                </div>
              ))}
            </div>
          </div>

          {/* Markdown Preview */}
          <div
            className={`rounded-xl border overflow-hidden ${
              mode === "dark"
                ? "border-gray-800 bg-gray-900"
                : "border-gray-200 bg-white"
            }`}
          >
            {/* Window Header */}
            <div
              className={`flex items-center justify-between px-4 py-3 border-b ${
                mode === "dark" ? "border-gray-800" : "border-gray-200"
              }`}
            >
              <div className="flex items-center gap-2">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-gray-300 dark:bg-gray-600" />
                  <div className="w-3 h-3 rounded-full bg-gray-300 dark:bg-gray-600" />
                  <div className="w-3 h-3 rounded-full bg-gray-300 dark:bg-gray-600" />
                </div>
              </div>
              <span
                className={`text-xs font-mono px-2 py-1 rounded ${
                  mode === "dark"
                    ? "bg-gray-800 text-gray-400"
                    : "bg-gray-100 text-gray-500"
                }`}
              >
                [ .MD ]
              </span>
            </div>

            {/* Markdown Content */}
            <div
              className={`p-4 font-mono text-sm ${
                mode === "dark" ? "bg-gray-900" : "bg-gray-50"
              }`}
              style={{ minHeight: "200px" }}
            >
              {renderMarkdown(markdownPreview)}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
