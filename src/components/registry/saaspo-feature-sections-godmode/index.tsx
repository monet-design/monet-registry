"use client";

// ============================================================================
// CUSTOMIZATION - 이 섹션의 값들을 수정하여 프로젝트에 맞게 조정하세요
// ============================================================================

/**
 * 커스텀 색상 (브랜드 컬러)
 */
const COLORS = {
  light: {
    background: "#F5F8FC",
    accent: "#3B82F6",
    accentHover: "#2563EB",
    cardBg: "#FFFFFF",
    tagWebSearch: "#E0E7FF",
    tagLeadResearch: "#D1FAE5",
    tagGmail: "#FEE2E2",
    tagLinkedIn: "#DBEAFE",
    tagSalesforce: "#E0E7FF",
    linkedInBlue: "#0A66C2",
  },
  dark: {
    background: "#0F172A",
    accent: "#60A5FA",
    accentHover: "#3B82F6",
    cardBg: "#1E293B",
    tagWebSearch: "#312E81",
    tagLeadResearch: "#064E3B",
    tagGmail: "#7F1D1D",
    tagLinkedIn: "#1E3A5F",
    tagSalesforce: "#312E81",
    linkedInBlue: "#0A66C2",
  },
} as const;

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { motion } from "motion/react";
import {
  Globe,
  Search,
  Mail,
  Linkedin,
  Cloud,
  MoreHorizontal,
  ChevronDown,
  MessageCircle,
  Check,
  Send,
} from "lucide-react";

interface SaaspoFeatureSectionsGodmodeProps {
  mode?: "light" | "dark";
  solutionLabel?: string;
  title?: string;
  subtitle?: string;
  queryPlaceholder?: string;
  tags?: { label: string; icon: string; color: string }[];
  features?: {
    label?: string;
    title: string;
    description: string;
    ctaText?: string;
  }[];
}

// Query Tag Component
function QueryTag({
  icon,
  label,
  color,
  mode,
}: {
  icon: string;
  label: string;
  color: string;
  mode: "light" | "dark";
}) {
  const getIcon = () => {
    switch (icon) {
      case "globe":
        return <Globe className="w-3 h-3" />;
      case "search":
        return <Search className="w-3 h-3" />;
      case "mail":
        return <Mail className="w-3 h-3" />;
      case "linkedin":
        return <Linkedin className="w-3 h-3" />;
      case "cloud":
        return <Cloud className="w-3 h-3" />;
      case "more":
        return <MoreHorizontal className="w-3 h-3" />;
      default:
        return <Globe className="w-3 h-3" />;
    }
  };

  return (
    <span
      className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium ${
        mode === "light" ? "text-gray-700" : "text-gray-200"
      }`}
      style={{ backgroundColor: color }}
    >
      {getIcon()}
      {label}
    </span>
  );
}

// Search Query Builder Component
function SearchQueryBuilder({
  placeholder,
  tags,
  mode,
}: {
  placeholder: string;
  tags: { label: string; icon: string; color: string }[];
  mode: "light" | "dark";
}) {
  return (
    <div
      className={`rounded-2xl p-6 shadow-lg border ${
        mode === "light"
          ? "bg-white border-gray-100"
          : "bg-gray-800 border-gray-700"
      }`}
    >
      {/* Input field */}
      <div
        className={`flex items-center gap-2 px-4 py-3 rounded-lg mb-4 ${
          mode === "light" ? "bg-gray-50" : "bg-gray-700"
        }`}
      >
        <span
          className={`text-sm ${
            mode === "light" ? "text-gray-600" : "text-gray-300"
          }`}
        >
          {placeholder}
        </span>
      </div>

      {/* Tags */}
      <div className="flex flex-wrap gap-2">
        {tags.map((tag, index) => (
          <QueryTag
            key={index}
            icon={tag.icon}
            label={tag.label}
            color={tag.color}
            mode={mode}
          />
        ))}
      </div>
    </div>
  );
}

// Data Table Component
function DataTable({ mode }: { mode: "light" | "dark" }) {
  const leads = [
    { name: "Sarah Chen", email: "sarah@techcorp.io", news: "Series B funding", desc: "VP of Sales" },
    { name: "Mike Johnson", email: "mike@startup.co", news: "New product launch", desc: "Head of Growth" },
    { name: "Emily Davis", email: "emily@enterprise.com", news: "Partnership announced", desc: "CEO" },
    { name: "Alex Kim", email: "alex@scaleup.io", news: "Hiring surge", desc: "Founder" },
  ];

  return (
    <div
      className={`rounded-xl border overflow-hidden ${
        mode === "light"
          ? "bg-white border-gray-200"
          : "bg-gray-800 border-gray-700"
      }`}
    >
      {/* Table header */}
      <div
        className={`grid grid-cols-4 gap-4 px-4 py-3 text-xs font-medium border-b ${
          mode === "light"
            ? "bg-gray-50 text-gray-500 border-gray-200"
            : "bg-gray-700 text-gray-400 border-gray-600"
        }`}
      >
        <span>Name</span>
        <span>Email</span>
        <span>Recent News</span>
        <span className="flex items-center gap-1">
          Description
          <span
            className={`w-4 h-4 rounded flex items-center justify-center text-[10px] ${
              mode === "light" ? "bg-gray-200" : "bg-gray-600"
            }`}
          >
            +
          </span>
        </span>
      </div>

      {/* Table rows */}
      {leads.map((lead, index) => (
        <div
          key={index}
          className={`grid grid-cols-4 gap-4 px-4 py-3 text-xs border-b last:border-0 ${
            mode === "light"
              ? "text-gray-700 border-gray-100 hover:bg-gray-50"
              : "text-gray-300 border-gray-700 hover:bg-gray-700"
          }`}
        >
          <span className="font-medium">{lead.name}</span>
          <span className={mode === "light" ? "text-gray-500" : "text-gray-400"}>
            {lead.email}
          </span>
          <span
            className={`${
              mode === "light" ? "text-blue-600" : "text-blue-400"
            }`}
          >
            {lead.news}
          </span>
          <span className={mode === "light" ? "text-gray-500" : "text-gray-400"}>
            {lead.desc}
          </span>
        </div>
      ))}
    </div>
  );
}

// Integration Features List
function IntegrationFeatures({ mode }: { mode: "light" | "dark" }) {
  const features = [
    {
      emoji: "🔗",
      title: "Integrate your internal tools in a single click",
      description: "Gmail, Outlook, Hubspot, Salesforce, web search, web scraping and more tools available.",
    },
    {
      emoji: "💬",
      title: "Invoke actions in natural language",
      description: "Just chat with your agent to invoke actions in tools",
    },
    {
      emoji: "🚀",
      title: "Publish your agents internally and externally",
      description: "Publish your agents so your customers and coworkers can easily start using them",
    },
  ];

  return (
    <div className="space-y-5">
      {features.map((feature, index) => (
        <div key={index} className="flex items-start gap-3">
          <span className="text-lg">{feature.emoji}</span>
          <div>
            <h4
              className={`text-sm font-semibold mb-1 ${
                mode === "light" ? "text-gray-900" : "text-white"
              }`}
            >
              {feature.title}
            </h4>
            <p
              className={`text-xs leading-relaxed ${
                mode === "light" ? "text-gray-500" : "text-gray-400"
              }`}
            >
              {feature.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

// Workflow Steps Component
function WorkflowSteps({ mode }: { mode: "light" | "dark" }) {
  const colors = COLORS[mode];
  const steps = [
    {
      number: 1,
      text: "Find out if @email_submission company have open positions hiring for factory operations",
      tags: ["Web search", "Web scrape"],
    },
    {
      number: 2,
      text: "Find out recent news about the @company. Particularly look into the blogposts to see if they have any blogpost on their cloud provider",
      tags: ["Web search"],
    },
    {
      number: 3,
      text: "Summarize your findings and create a draft email to be sent to @email_submission Summarise the order and your findings.",
      tags: ["Gmail"],
    },
    {
      number: 4,
      text: "Find out lookalike businesses that are similar to @company_name. Return...",
      tags: [],
    },
  ];

  return (
    <div
      className={`rounded-xl border p-4 ${
        mode === "light"
          ? "bg-white border-gray-200"
          : "bg-gray-800 border-gray-700"
      }`}
    >
      <div className="space-y-3">
        {steps.map((step, index) => (
          <div key={index} className="flex items-start gap-3">
            <span
              className="w-5 h-5 rounded-full flex items-center justify-center text-xs font-medium text-white flex-shrink-0 mt-0.5"
              style={{ backgroundColor: colors.accent }}
            >
              {step.number}
            </span>
            <div className="flex-1 min-w-0">
              <p
                className={`text-xs leading-relaxed ${
                  mode === "light" ? "text-gray-700" : "text-gray-300"
                }`}
              >
                {step.text.split("@").map((part, i) =>
                  i === 0 ? (
                    part
                  ) : (
                    <span key={i}>
                      <span style={{ color: colors.accent }}>@{part.split(" ")[0]}</span>
                      {part.slice(part.indexOf(" "))}
                    </span>
                  )
                )}
              </p>
              {step.tags.length > 0 && (
                <div className="flex flex-wrap gap-1 mt-1.5">
                  {step.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className={`inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] ${
                        mode === "light"
                          ? "bg-gray-100 text-gray-600"
                          : "bg-gray-700 text-gray-300"
                      }`}
                    >
                      {tag === "Web search" && <Globe className="w-2.5 h-2.5" />}
                      {tag === "Web scrape" && <Search className="w-2.5 h-2.5" />}
                      {tag === "Gmail" && <Mail className="w-2.5 h-2.5" />}
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Extract data input */}
      <div
        className={`mt-4 rounded-lg border p-3 ${
          mode === "light"
            ? "bg-gray-50 border-gray-200"
            : "bg-gray-700 border-gray-600"
        }`}
      >
        <div
          className={`flex items-center gap-2 mb-2 text-xs ${
            mode === "light" ? "text-gray-500" : "text-gray-400"
          }`}
        >
          <ChevronDown className="w-3 h-3" />
          Extract data from documents
        </div>
        <div className="flex items-center gap-2">
          <input
            type="text"
            placeholder="Write a casual message and explain how we are different more competitors"
            className={`flex-1 text-xs px-3 py-2 rounded-lg border outline-none ${
              mode === "light"
                ? "bg-white border-gray-200 text-gray-700 placeholder:text-gray-400"
                : "bg-gray-600 border-gray-500 text-gray-200 placeholder:text-gray-400"
            }`}
            readOnly
          />
          <button
            className="w-8 h-8 rounded-full flex items-center justify-center text-white"
            style={{ backgroundColor: colors.accent }}
          >
            <Send className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
}

// LinkedIn Outreach Component
function LinkedInOutreach({ mode }: { mode: "light" | "dark" }) {
  const colors = COLORS[mode];

  return (
    <div className="space-y-4">
      {/* Generate personal outreach card */}
      <div
        className={`rounded-xl border p-4 ${
          mode === "light"
            ? "bg-white border-gray-200"
            : "bg-gray-800 border-gray-700"
        }`}
      >
        <div className="flex items-start gap-3">
          <MessageCircle
            className="w-4 h-4 mt-0.5"
            style={{ color: colors.accent }}
          />
          <div className="flex-1">
            <h5
              className={`text-sm font-semibold mb-2 ${
                mode === "light" ? "text-gray-900" : "text-white"
              }`}
            >
              Generate personal outreach
            </h5>
            <p
              className={`text-xs leading-relaxed ${
                mode === "light" ? "text-gray-600" : "text-gray-400"
              }`}
            >
              Based on{" "}
              <span style={{ color: colors.accent }}>@linkedin.about</span>,{" "}
              <span style={{ color: colors.accent }}>@linkedin headline</span>{" "}
              and <span style={{ color: colors.accent }}>@recent events</span>,
              generate a casual outbound message to reach out on LinkedIn
            </p>
          </div>
          <button
            className="w-7 h-7 rounded-lg flex items-center justify-center text-white flex-shrink-0"
            style={{ backgroundColor: colors.accent }}
          >
            <Send className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* LinkedIn Profile Card */}
      <div
        className={`rounded-xl border overflow-hidden ${
          mode === "light"
            ? "bg-white border-gray-200"
            : "bg-gray-800 border-gray-700"
        }`}
      >
        {/* Profile header */}
        <div className="p-4">
          <div className="flex items-center gap-3">
            <div
              className="w-12 h-12 rounded-full flex items-center justify-center text-white font-medium"
              style={{ backgroundColor: "#6366F1" }}
            >
              D
            </div>
            <div>
              <h5
                className={`font-semibold ${
                  mode === "light" ? "text-gray-900" : "text-white"
                }`}
              >
                Dobrinka
              </h5>
              <div className="flex items-center gap-2 mt-1">
                <Linkedin
                  className="w-4 h-4"
                  style={{ color: colors.linkedInBlue }}
                />
                <span
                  className={`text-xs ${
                    mode === "light" ? "text-gray-500" : "text-gray-400"
                  }`}
                >
                  LinkedIn
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Message preview */}
        <div
          className={`px-4 pb-4 ${
            mode === "light" ? "border-t border-gray-100" : "border-t border-gray-700"
          }`}
        >
          <div className="pt-4">
            <p
              className={`text-xs mb-2 ${
                mode === "light" ? "text-gray-400" : "text-gray-500"
              }`}
            >
              You
            </p>
            <p
              className={`text-xs leading-relaxed ${
                mode === "light" ? "text-gray-700" : "text-gray-300"
              }`}
            >
              Hey Dobrinka, love the John Quincy Adams quote in your profile -
              being a leader who inspires others is so key. I&apos;m a big fan of the
              work you&apos;re doing at Ad Astra Advisors to empower founders and
              startups. Would be awesome to connect and maybe I can share some
              learnings from my side too!
            </p>
          </div>
        </div>

        {/* Action buttons */}
        <div
          className={`px-4 py-3 flex items-center gap-4 ${
            mode === "light"
              ? "bg-gray-50 border-t border-gray-100"
              : "bg-gray-700 border-t border-gray-600"
          }`}
        >
          <span
            className={`flex items-center gap-1.5 text-xs ${
              mode === "light" ? "text-green-600" : "text-green-400"
            }`}
          >
            <Check className="w-3.5 h-3.5" />
            Message sent
          </span>
          <span
            className={`flex items-center gap-1.5 text-xs ${
              mode === "light" ? "text-gray-600" : "text-gray-400"
            }`}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-current" />
            Create sequence
          </span>
        </div>
      </div>
    </div>
  );
}

// Default tags
const defaultTags = [
  { label: "Web search", icon: "globe", color: "#E0E7FF" },
  { label: "Lead research", icon: "search", color: "#D1FAE5" },
  { label: "Gmail", icon: "mail", color: "#FEE2E2" },
  { label: "LinkedIn", icon: "linkedin", color: "#DBEAFE" },
  { label: "Salesforce", icon: "cloud", color: "#E0E7FF" },
  { label: "many m...", icon: "more", color: "#F3F4F6" },
];

// Default features
const defaultFeatures = [
  {
    title: "Integrate your internal tools in a single click",
    description: "",
    ctaText: "",
  },
  {
    label: "Create automations with natural language",
    title: "AI acts on intent signals from your leads",
    description:
      "Just like typing a tweet, write your prompts and let AI act on the signals it finds. Put business development on autopilot.",
    ctaText: "Start now — free",
  },
  {
    label: "Publish and share AI-native forms",
    title: "Get rid of the \"Contact us\" form",
    description:
      "Embed forms to collect leads and automatically process the submission instead of going through them manually.",
    ctaText: "Start now — free",
  },
];

export default function SaaspoFeatureSectionsGodmode({
  mode = "light",
  solutionLabel = "Solution",
  title = "Wake up to leads identified → sourced → verified",
  subtitle = "Define your ideal customer profile. Our AI agents will identify, source and verify leads every single day on your behalf.",
  queryPlaceholder = "Get me a recent company they invested in",
  tags = defaultTags,
  features = defaultFeatures,
}: SaaspoFeatureSectionsGodmodeProps) {
  const colors = COLORS[mode];

  // Animation variants
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.46, 0.45, 0.94] as const,
      },
    },
  };

  return (
    <section
      className="relative w-full py-16 md:py-24"
      style={{ backgroundColor: colors.background }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="text-center mb-12"
        >
          {/* Solution badge */}
          <motion.div variants={itemVariants} className="mb-4">
            <span
              className={`inline-flex items-center gap-1.5 text-sm font-medium ${
                mode === "light" ? "text-gray-500" : "text-gray-400"
              }`}
            >
              <span style={{ color: colors.accent }}>✦</span>
              {solutionLabel}
            </span>
          </motion.div>

          {/* Main title */}
          <motion.h2
            variants={itemVariants}
            className={`text-3xl md:text-4xl lg:text-5xl font-bold mb-4 ${
              mode === "light" ? "text-gray-900" : "text-white"
            }`}
          >
            {title}
          </motion.h2>

          {/* Subtitle */}
          <motion.p
            variants={itemVariants}
            className={`text-base md:text-lg max-w-2xl mx-auto ${
              mode === "light" ? "text-gray-600" : "text-gray-400"
            }`}
          >
            {subtitle}
          </motion.p>
        </motion.div>

        {/* Query Builder Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-xl mx-auto mb-16"
        >
          <SearchQueryBuilder
            placeholder={queryPlaceholder}
            tags={tags.map((tag) => ({
              ...tag,
              color:
                mode === "dark"
                  ? tag.color.replace("#E", "#3").replace("#D", "#2").replace("#F", "#4")
                  : tag.color,
            }))}
            mode={mode}
          />
        </motion.div>

        {/* Feature 1: Internal Tools Integration */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid md:grid-cols-5 gap-8 items-start mb-20"
        >
          <div className="md:col-span-3">
            <DataTable mode={mode} />
          </div>
          <div className="md:col-span-2">
            <IntegrationFeatures mode={mode} />
          </div>
        </motion.div>

        {/* Feature 2: AI acts on intent signals */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid md:grid-cols-2 gap-12 items-start mb-20"
        >
          {/* Left: Text */}
          <div className="order-2 md:order-1">
            {features[1]?.label && (
              <span
                className={`inline-flex items-center gap-1.5 text-xs font-medium mb-3 ${
                  mode === "light" ? "text-gray-500" : "text-gray-400"
                }`}
              >
                <span style={{ color: colors.accent }}>✦</span>
                {features[1].label}
              </span>
            )}
            <h3
              className={`text-2xl md:text-3xl font-bold mb-4 ${
                mode === "light" ? "text-gray-900" : "text-white"
              }`}
            >
              {features[1]?.title}
            </h3>
            <p
              className={`text-sm md:text-base mb-6 leading-relaxed ${
                mode === "light" ? "text-gray-600" : "text-gray-400"
              }`}
            >
              {features[1]?.description}
            </p>
            {features[1]?.ctaText && (
              <button
                className="px-5 py-2.5 rounded-full text-sm font-medium text-white transition-colors"
                style={{ backgroundColor: colors.accent }}
              >
                {features[1].ctaText}
              </button>
            )}
          </div>

          {/* Right: Workflow UI */}
          <div className="order-1 md:order-2">
            <WorkflowSteps mode={mode} />
          </div>
        </motion.div>

        {/* Feature 3: Get rid of Contact us form */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid md:grid-cols-2 gap-12 items-start"
        >
          {/* Left: LinkedIn UI */}
          <div>
            <LinkedInOutreach mode={mode} />
          </div>

          {/* Right: Text */}
          <div>
            {features[2]?.label && (
              <span
                className={`inline-flex items-center gap-1.5 text-xs font-medium mb-3 ${
                  mode === "light" ? "text-gray-500" : "text-gray-400"
                }`}
              >
                <span style={{ color: colors.accent }}>✦</span>
                {features[2].label}
              </span>
            )}
            <h3
              className={`text-2xl md:text-3xl font-bold mb-4 ${
                mode === "light" ? "text-gray-900" : "text-white"
              }`}
            >
              {features[2]?.title}
            </h3>
            <p
              className={`text-sm md:text-base mb-6 leading-relaxed ${
                mode === "light" ? "text-gray-600" : "text-gray-400"
              }`}
            >
              {features[2]?.description}
            </p>
            {features[2]?.ctaText && (
              <button
                className="px-5 py-2.5 rounded-full text-sm font-medium text-white transition-colors"
                style={{ backgroundColor: colors.accent }}
              >
                {features[2].ctaText}
              </button>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
