"use client";

// ============================================================================
// CUSTOMIZATION - 이 섹션의 값들을 수정하여 프로젝트에 맞게 조정하세요
// ============================================================================

/**
 * 커스텀 색상 (브랜드 컬러)
 */
const COLORS = {
  background: "#0D0D0D",
  cardBackground: "#1A1A1A",
  cardBorder: "#2A2A2A",
  accent: "#F55F2E",
  accentHover: "#FF7A4D",
  textPrimary: "#FFFFFF",
  textSecondary: "#8A8A8A",
  textMuted: "#666666",
} as const;

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { motion } from "motion/react";
import {
  Plus,
  FileText,
  Link2,
  CreditCard,
  Search,
  Code2,
  Database,
  Play,
  Mail,
  MessageSquare,
} from "lucide-react";

interface SaaspoFeatureSectionsPhidataProps {
  title?: string;
  primaryButtonText?: string;
  secondaryButtonText?: string;
  onPrimaryClick?: () => void;
  onSecondaryClick?: () => void;
}

// LLM Provider Icons
const AWSIcon = () => (
  <svg viewBox="0 0 48 48" className="w-12 h-12" fill="none">
    <text
      x="50%"
      y="55%"
      dominantBaseline="middle"
      textAnchor="middle"
      fill="#FF9900"
      fontSize="12"
      fontFamily="Arial"
      fontWeight="bold"
    >
      aws
    </text>
  </svg>
);

const OpenAIIcon = () => (
  <svg viewBox="0 0 48 48" className="w-12 h-12" fill="none">
    <path
      d="M24 8C15.16 8 8 15.16 8 24s7.16 16 16 16 16-7.16 16-16S32.84 8 24 8z"
      stroke="#FFFFFF"
      strokeWidth="1.5"
      fill="none"
    />
    <path
      d="M24 14l-8 5v10l8 5 8-5V19l-8-5z"
      stroke="#FFFFFF"
      strokeWidth="1.5"
      fill="none"
    />
    <path d="M24 14v10m0 0l8-5m-8 5l-8-5m8 15v-10" stroke="#FFFFFF" strokeWidth="1.5" />
  </svg>
);

const OllamaIcon = () => (
  <svg viewBox="0 0 48 48" className="w-12 h-12" fill="none">
    <circle cx="24" cy="18" r="10" fill="#FFFFFF" />
    <circle cx="20" cy="16" r="2" fill="#000000" />
    <circle cx="28" cy="16" r="2" fill="#000000" />
    <ellipse cx="24" cy="22" rx="4" ry="2" fill="#FFCCCC" />
    <path d="M18 28c0 0 2 4 6 4s6-4 6-4" stroke="#FFFFFF" strokeWidth="2" fill="none" />
    <rect x="20" y="32" width="2" height="6" fill="#FFFFFF" rx="1" />
    <rect x="26" y="32" width="2" height="6" fill="#FFFFFF" rx="1" />
  </svg>
);

const AnthropicIcon = () => (
  <svg viewBox="0 0 48 48" className="w-12 h-12" fill="none">
    <text
      x="50%"
      y="55%"
      dominantBaseline="middle"
      textAnchor="middle"
      fill="#FFFFFF"
      fontSize="24"
      fontFamily="Arial"
      fontWeight="bold"
    >
      A\
    </text>
  </svg>
);

const GroqIcon = () => (
  <svg viewBox="0 0 48 48" className="w-12 h-12" fill="none">
    <text
      x="50%"
      y="55%"
      dominantBaseline="middle"
      textAnchor="middle"
      fill="#666666"
      fontSize="28"
      fontFamily="Arial"
      fontWeight="300"
    >
      g
    </text>
  </svg>
);

const AgentIcon = () => (
  <div
    className="w-8 h-8 rounded-lg flex items-center justify-center"
    style={{ backgroundColor: COLORS.accent }}
  >
    <svg viewBox="0 0 24 24" className="w-5 h-5" fill="white">
      <circle cx="12" cy="8" r="4" />
      <circle cx="8" cy="7" r="1" fill="#000" />
      <circle cx="14" cy="7" r="1" fill="#000" />
      <path d="M8 12c0 0 1 2 4 2s4-2 4-2" stroke="white" strokeWidth="1" fill="none" />
    </svg>
  </div>
);

export default function SaaspoFeatureSectionsPhidata({
  title = "Build domain-specific agents with\nmemory, knowledge and tools",
  primaryButtonText = "BUILD YOUR AGENT",
  secondaryButtonText = "TRY DEMO",
  onPrimaryClick,
  onSecondaryClick,
}: SaaspoFeatureSectionsPhidataProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0, 0, 0.2, 1] as const },
    },
  };

  const llmProviders = [
    { id: "aws", icon: <AWSIcon />, selected: false },
    { id: "openai", icon: <OpenAIIcon />, selected: false },
    { id: "ollama", icon: <OllamaIcon />, selected: true, label: "Ollama" },
    { id: "anthropic", icon: <AnthropicIcon />, selected: false },
    { id: "groq", icon: <GroqIcon />, selected: false },
  ];

  const knowledgeFiles = [
    { name: "bank_statements.json", icon: <FileText className="w-4 h-4" />, highlighted: false },
    { name: "Annual_Report.pdf", icon: <FileText className="w-4 h-4" />, highlighted: false },
    { name: "docs.acme.com", icon: <Link2 className="w-4 h-4" />, highlighted: false },
    { name: "bloomberg.com", icon: <Link2 className="w-4 h-4" />, highlighted: true },
  ];

  const tools = [
    { name: "Make Payment", icon: <CreditCard className="w-4 h-4" /> },
    { name: "Search Web", icon: <Search className="w-4 h-4" /> },
    { name: "API call", icon: <Code2 className="w-4 h-4" /> },
    { name: "Run SQL query", icon: <Database className="w-4 h-4" /> },
    { name: "Watch video", icon: <Play className="w-4 h-4" /> },
    { name: "Send Email", icon: <Mail className="w-4 h-4" /> },
  ];

  return (
    <section
      className="relative w-full py-20 px-4"
      style={{ backgroundColor: COLORS.background }}
    >
      <motion.div
        className="max-w-5xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {/* Header */}
        <motion.div className="text-center mb-12" variants={itemVariants}>
          <h2
            className="text-4xl md:text-5xl font-bold mb-8 whitespace-pre-line"
            style={{ color: COLORS.textPrimary }}
          >
            {title}
          </h2>
          <div className="flex items-center justify-center gap-4">
            <button
              onClick={onPrimaryClick}
              className="flex items-center gap-2 px-6 py-3 rounded-full border transition-all hover:bg-white/5"
              style={{
                borderColor: COLORS.cardBorder,
                color: COLORS.textPrimary,
              }}
            >
              <Plus className="w-4 h-4" />
              <span className="text-sm font-medium tracking-wide">{primaryButtonText}</span>
            </button>
            <button
              onClick={onSecondaryClick}
              className="flex items-center gap-2 px-6 py-3 rounded-full transition-all hover:opacity-90"
              style={{
                backgroundColor: COLORS.accent,
                color: COLORS.textPrimary,
              }}
            >
              <Plus className="w-4 h-4" />
              <span className="text-sm font-medium tracking-wide">{secondaryButtonText}</span>
            </button>
          </div>
        </motion.div>

        {/* Feature Cards Grid */}
        <div className="grid md:grid-cols-2 gap-4">
          {/* Card 1: Choose any LLM */}
          <motion.div
            variants={itemVariants}
            className="rounded-2xl p-6 border transition-all hover:border-gray-600"
            style={{
              backgroundColor: COLORS.cardBackground,
              borderColor: COLORS.cardBorder,
            }}
          >
            <div className="mb-8">
              <span className="font-semibold" style={{ color: COLORS.textPrimary }}>
                Choose any LLM.
              </span>{" "}
              <span style={{ color: COLORS.textSecondary }}>Turn any LLM into an Agent.</span>
            </div>
            <div className="flex items-center justify-center gap-2 mb-4">
              {llmProviders.map((provider) => (
                <div
                  key={provider.id}
                  className={`flex items-center justify-center rounded-xl transition-all ${
                    provider.selected ? "ring-2 ring-white/20 bg-white/5" : "opacity-50"
                  }`}
                  style={{ width: 72, height: 72 }}
                >
                  {provider.icon}
                </div>
              ))}
            </div>
            <div className="text-center" style={{ color: COLORS.textSecondary }}>
              Ollama
            </div>
          </motion.div>

          {/* Card 2: Add knowledge */}
          <motion.div
            variants={itemVariants}
            className="rounded-2xl p-6 border transition-all hover:border-gray-600"
            style={{
              backgroundColor: COLORS.cardBackground,
              borderColor: COLORS.cardBorder,
            }}
          >
            <div className="flex flex-col items-end gap-2 mb-6">
              {knowledgeFiles.map((file, index) => (
                <div
                  key={index}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg border transition-all ${
                    file.highlighted ? "border-transparent" : ""
                  }`}
                  style={{
                    backgroundColor: file.highlighted ? COLORS.accent : COLORS.cardBackground,
                    borderColor: file.highlighted ? "transparent" : COLORS.cardBorder,
                    color: file.highlighted ? COLORS.textPrimary : COLORS.textSecondary,
                  }}
                >
                  {file.icon}
                  <span className="text-sm">{file.name}</span>
                </div>
              ))}
            </div>
            <div>
              <span className="font-semibold" style={{ color: COLORS.textPrimary }}>
                Add knowledge.
              </span>{" "}
              <span style={{ color: COLORS.textSecondary }}>
                Provide domain-specific information to solve your problems.
              </span>
            </div>
          </motion.div>

          {/* Card 3: Built-in memory */}
          <motion.div
            variants={itemVariants}
            className="rounded-2xl p-6 border transition-all hover:border-gray-600"
            style={{
              backgroundColor: COLORS.cardBackground,
              borderColor: COLORS.cardBorder,
            }}
          >
            <div className="relative mb-6">
              {/* Chat window mockup */}
              <div
                className="absolute top-2 right-2 w-8 h-8 rounded-lg flex items-center justify-center"
                style={{ backgroundColor: COLORS.background }}
              >
                <MessageSquare className="w-4 h-4" style={{ color: COLORS.textMuted }} />
              </div>
              <div className="pt-8">
                <AgentIcon />
                <div className="mt-3">
                  <span style={{ color: COLORS.accent }} className="font-medium">
                    Agent
                  </span>{" "}
                  <span style={{ color: COLORS.textMuted }} className="text-sm">
                    [12:21]
                  </span>
                </div>
                <p className="mt-2 text-sm leading-relaxed" style={{ color: COLORS.textSecondary }}>
                  Hello, I am your agent.
                  <br />
                  I remember our chat history
                  <br />
                  no matter how far back it is.
                </p>
              </div>
            </div>
            <div className="mt-auto">
              <span className="font-semibold" style={{ color: COLORS.textPrimary }}>
                Built-in memory.
              </span>{" "}
              <span style={{ color: COLORS.textSecondary }}>
                Enable long-term personalized, conversations.
              </span>
            </div>
          </motion.div>

          {/* Card 4: Add tools */}
          <motion.div
            variants={itemVariants}
            className="rounded-2xl p-6 border transition-all hover:border-gray-600"
            style={{
              backgroundColor: COLORS.cardBackground,
              borderColor: COLORS.cardBorder,
            }}
          >
            <div className="mb-6">
              <span className="font-semibold" style={{ color: COLORS.textPrimary }}>
                Add tools.
              </span>{" "}
              <span style={{ color: COLORS.textSecondary }}>
                Enable Agents to integrate and interact with external systems.
              </span>
            </div>
            <div className="flex flex-wrap gap-2">
              {tools.map((tool, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 px-4 py-2 rounded-lg border transition-all hover:border-gray-500"
                  style={{
                    backgroundColor: COLORS.cardBackground,
                    borderColor: COLORS.cardBorder,
                    color: COLORS.textSecondary,
                  }}
                >
                  {tool.icon}
                  <span className="text-sm">{tool.name}</span>
                </div>
              ))}
              {/* Placeholder items for visual effect */}
              {[1, 2, 3].map((_, index) => (
                <div
                  key={`placeholder-${index}`}
                  className="w-24 h-10 rounded-lg opacity-30"
                  style={{ backgroundColor: COLORS.cardBorder }}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
