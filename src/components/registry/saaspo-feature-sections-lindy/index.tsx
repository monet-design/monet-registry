"use client";

// ============================================================================
// CUSTOMIZATION - 이 섹션의 값들을 수정하여 프로젝트에 맞게 조정하세요
// ============================================================================

/**
 * 커스텀 색상 (브랜드 컬러)
 */
const COLORS = {
  light: {
    accent: "#2D8B4E",
    accentHover: "#236B3C",
    cardBg: "#F5F3EE",
    cardBgAlt: "#EBF5EC",
    uiCardBg: "#FFFFFF",
    tagBg: "#E8F5E9",
    tagText: "#2D8B4E",
  },
  dark: {
    accent: "#4ADE80",
    accentHover: "#22C55E",
    cardBg: "#1F2937",
    cardBgAlt: "#1A2E23",
    uiCardBg: "#111827",
    tagBg: "#1A2E23",
    tagText: "#4ADE80",
  },
} as const;

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { motion } from "motion/react";
import {
  ArrowRight,
  Users,
  MessageSquare,
  Mail,
  UserPlus,
  Database,
  Headphones,
  Send,
  ChevronDown,
  ChevronUp,
  Sparkles,
  FileText,
} from "lucide-react";

interface SaaspoFeatureSectionsLindyProps {
  mode?: "light" | "dark";
  badge?: string;
  highlightedWord?: string;
  title?: string;
  ctaText?: string;
  ctaLink?: string;
  features?: {
    icon: React.ReactNode;
    label: string;
    title: string;
    description: string;
    ctaText: string;
    ctaLink: string;
    uiContent?: React.ReactNode;
    reverse?: boolean;
  }[];
  miniFeatures?: {
    icon: React.ReactNode;
    iconBg: string;
    title: string;
    description: string;
  }[];
}

type ColorScheme = typeof COLORS.light | typeof COLORS.dark;

// Lead Qualifier UI Component
function LeadQualifierUI({ colors }: { colors: ColorScheme }) {
  return (
    <div
      className="rounded-xl p-4 shadow-sm"
      style={{ backgroundColor: colors.uiCardBg }}
    >
      <div className="mb-4 flex items-center gap-2">
        <div
          className="flex h-8 w-8 items-center justify-center rounded-lg"
          style={{ backgroundColor: colors.tagBg }}
        >
          <Users className="h-4 w-4" style={{ color: colors.accent }} />
        </div>
        <span className="text-sm font-medium text-gray-900 dark:text-white">
          Lead Qualifier
        </span>
      </div>
      <div className="space-y-3">
        <div className="flex items-center justify-between rounded-lg border border-gray-200 p-3 dark:border-gray-700">
          <div className="flex items-center gap-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900">
              <FileText className="h-4 w-4 text-blue-600 dark:text-blue-400" />
            </div>
            <div>
              <p className="text-sm font-medium text-gray-900 dark:text-white">
                Lead submitted form
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                Researching Employment Information
              </p>
            </div>
          </div>
          <ChevronDown className="h-4 w-4 text-gray-400" />
        </div>
        <div className="flex items-center justify-between rounded-lg border border-gray-200 p-3 dark:border-gray-700">
          <div className="flex items-center gap-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-yellow-100 dark:bg-yellow-900">
              <Sparkles className="h-4 w-4 text-yellow-600 dark:text-yellow-400" />
            </div>
            <div>
              <p className="text-sm font-medium text-gray-900 dark:text-white">
                Highly qualified
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                Employee: 200, Industry: Logistics...
              </p>
            </div>
          </div>
          <ChevronDown className="h-4 w-4 text-gray-400" />
        </div>
      </div>
    </div>
  );
}

// Lead Generator UI Component
function LeadGeneratorUI({ colors }: { colors: ColorScheme }) {
  return (
    <div
      className="relative h-full w-full rounded-xl p-6"
      style={{ backgroundColor: colors.cardBg }}
    >
      {/* Curved connection lines */}
      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 400 200"
        fill="none"
      >
        <path
          d="M200 30 C200 80, 60 80, 60 160"
          stroke="#D4D4D4"
          strokeWidth="1.5"
          strokeDasharray="4 4"
          fill="none"
        />
        <path
          d="M200 30 C200 80, 130 80, 130 160"
          stroke="#D4D4D4"
          strokeWidth="1.5"
          strokeDasharray="4 4"
          fill="none"
        />
        <path
          d="M200 30 C200 60, 200 80, 200 160"
          stroke="#D4D4D4"
          strokeWidth="1.5"
          strokeDasharray="4 4"
          fill="none"
        />
        <path
          d="M200 30 C200 80, 270 80, 270 160"
          stroke="#D4D4D4"
          strokeWidth="1.5"
          strokeDasharray="4 4"
          fill="none"
        />
        <path
          d="M200 30 C200 80, 340 80, 340 160"
          stroke="#D4D4D4"
          strokeWidth="1.5"
          strokeDasharray="4 4"
          fill="none"
        />
      </svg>
      {/* Central node */}
      <div className="absolute left-1/2 top-4 -translate-x-1/2">
        <div className="h-3 w-3 rounded-full bg-gray-400" />
      </div>
      {/* Social icons at bottom */}
      <div className="absolute bottom-6 left-0 right-0 flex items-center justify-center gap-4">
        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white shadow-sm dark:bg-gray-800">
          <svg className="h-5 w-5" viewBox="0 0 24 24" fill="#1877F2">
            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
          </svg>
        </div>
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-purple-500 via-pink-500 to-orange-400 shadow-sm">
          <svg className="h-6 w-6 text-white" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
          </svg>
        </div>
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#0A66C2] shadow-sm">
          <svg className="h-6 w-6 text-white" viewBox="0 0 24 24" fill="currentColor">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
          </svg>
        </div>
        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white shadow-sm dark:bg-gray-800">
          <svg className="h-5 w-5" viewBox="0 0 24 24" fill="#FF492C">
            <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.95 8.45l-1.8 8.25c-.133.6-.5.75-.983.467l-2.75-2.033-1.333 1.283c-.15.15-.267.267-.55.267l.2-2.817 5.133-4.633c.217-.2-.05-.3-.35-.117l-6.35 4-2.733-.85c-.6-.183-.617-.6.117-.883l10.717-4.133c.5-.183.933.117.767.867z" />
          </svg>
        </div>
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-black shadow-sm">
          <svg className="h-6 w-6 text-white" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
          </svg>
        </div>
      </div>
    </div>
  );
}

// Lead Outreach UI Component
function LeadOutreachUI({ colors }: { colors: ColorScheme }) {
  return (
    <div className="space-y-3">
      {/* Researching Lead card */}
      <div
        className="rounded-xl p-3 shadow-sm"
        style={{ backgroundColor: colors.uiCardBg }}
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-100 dark:bg-gray-700">
              <svg className="h-4 w-4 text-gray-600 dark:text-gray-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <div>
              <p className="text-sm font-medium text-gray-900 dark:text-white">
                Researching Lead
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                Mark Mjolnir
              </p>
            </div>
          </div>
          <ChevronDown className="h-4 w-4 text-gray-400" />
        </div>
      </div>

      {/* Lead Outreacher card */}
      <div
        className="rounded-xl p-4 shadow-sm"
        style={{ backgroundColor: colors.uiCardBg }}
      >
        <div className="mb-3 flex items-center gap-2">
          <div
            className="flex h-8 w-8 items-center justify-center rounded-lg"
            style={{ backgroundColor: colors.tagBg }}
          >
            <Mail className="h-4 w-4" style={{ color: colors.accent }} />
          </div>
          <span className="text-sm font-medium text-gray-900 dark:text-white">
            Lead Outreacher
          </span>
        </div>

        {/* Email thread */}
        <div className="rounded-lg border border-gray-200 dark:border-gray-700">
          <div className="flex items-center justify-between border-b border-gray-200 p-3 dark:border-gray-700">
            <div className="flex items-center gap-2">
              <MessageSquare className="h-4 w-4" style={{ color: colors.accent }} />
              <span className="text-sm font-medium text-gray-900 dark:text-white">
                Need help finding engineers?
              </span>
            </div>
            <ChevronUp className="h-4 w-4 text-gray-400" />
          </div>
          <div className="space-y-2 p-3">
            <div className="flex items-center gap-2 text-sm">
              <span className="text-gray-500 dark:text-gray-400">From</span>
              <span
                className="rounded px-2 py-0.5 text-xs font-medium"
                style={{ backgroundColor: colors.tagBg, color: colors.tagText }}
              >
                You
              </span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <span className="text-gray-500 dark:text-gray-400">To</span>
              <span
                className="rounded px-2 py-0.5 text-xs font-medium"
                style={{ backgroundColor: colors.tagBg, color: colors.tagText }}
              >
                Mark Mjolnir
              </span>
            </div>
            <div className="mt-3 text-sm text-gray-700 dark:text-gray-300">
              <p className="mb-2">Hi Bob,</p>
              <p>
                I saw that you were hiring for software engineers. Our firm has
                experience in your stack of React and GraphQL.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function SaaspoFeatureSectionsLindy({
  mode = "light",
  badge = "Use it for",
  highlightedWord = "sales",
  title = "Close more deals than ever with AI.",
  ctaText = "Sales templates",
  ctaLink = "#",
  features = [
    {
      icon: <Users className="h-4 w-4" />,
      label: "Lead Qualifier",
      title: "Qualify inbound leads.",
      description:
        "Get Lindy to research leads, no matter where they're coming from, and give you advanced insights so you can better prioritize your sales activities.",
      ctaText: "Try it",
      ctaLink: "#",
      reverse: false,
    },
    {
      icon: <MessageSquare className="h-4 w-4" />,
      label: "Lead Generator",
      title: "Find leads across 200+ sources",
      description:
        "Use Lindy's 200+ web scrapers to find your perfect leads.",
      ctaText: "Try it",
      ctaLink: "#",
      reverse: true,
    },
    {
      icon: <Mail className="h-4 w-4" />,
      label: "Lead Outreach",
      title: "Write the perfect outreach",
      description:
        "Lindy researches each individual lead to write personalized outreach emails that convert.",
      ctaText: "Try it",
      ctaLink: "#",
      reverse: false,
    },
  ],
  miniFeatures = [
    {
      icon: <UserPlus className="h-4 w-4" />,
      iconBg: "#2D8B4E",
      title: "New Lead Qualifier",
      description:
        "Qualifies leads and alerts your team when criteria are met.",
    },
    {
      icon: <Database className="h-4 w-4" />,
      iconBg: "#2D8B4E",
      title: "CRM Contact Assistant",
      description: "Instant CRM contact creation and enrichment.",
    },
    {
      icon: <Headphones className="h-4 w-4" />,
      iconBg: "#2D8B4E",
      title: "Sales Coach",
      description:
        "Sales coach analyzes calls and provides real-time feedback.",
    },
    {
      icon: <Send className="h-4 w-4" />,
      iconBg: "#2D8B4E",
      title: "Lead Outreacher",
      description:
        "Have Lindy perform multi-touch, personalized outreach and alert you via Slacks with updates.",
    },
  ],
}: SaaspoFeatureSectionsLindyProps) {
  const colors = COLORS[mode];
  const isDark = mode === "dark";

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section
      className={`relative w-full py-16 md:py-24 ${isDark ? "bg-gray-950" : "bg-white"}`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 flex flex-col gap-4 md:flex-row md:items-start md:justify-between"
        >
          <div>
            <div className="mb-3 flex items-center gap-2">
              <div
                className="flex h-6 w-6 items-center justify-center rounded"
                style={{ backgroundColor: colors.tagBg }}
              >
                <MessageSquare
                  className="h-3 w-3"
                  style={{ color: colors.accent }}
                />
              </div>
              <span className="text-sm text-gray-600 dark:text-gray-400">
                {badge}{" "}
                <span style={{ color: colors.accent }}>{highlightedWord}</span>
              </span>
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 md:text-4xl lg:text-5xl dark:text-white">
              {title}
            </h2>
          </div>
          <a
            href={ctaLink}
            className="group flex items-center gap-2 text-sm font-medium text-gray-900 transition-colors hover:text-gray-600 dark:text-white dark:hover:text-gray-300"
          >
            {ctaText}
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
        </motion.div>

        {/* Feature Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-6"
        >
          {/* Feature 1 - Lead Qualifier */}
          <motion.div
            variants={itemVariants}
            className="overflow-hidden rounded-2xl"
            style={{ backgroundColor: colors.cardBg }}
          >
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="flex flex-col justify-center p-8 lg:p-12">
                <div className="mb-4 flex items-center gap-2">
                  <div
                    className="flex h-6 w-6 items-center justify-center rounded"
                    style={{ backgroundColor: colors.tagBg }}
                  >
                    <Users
                      className="h-3 w-3"
                      style={{ color: colors.accent }}
                    />
                  </div>
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    {features[0]?.label}
                  </span>
                </div>
                <h3 className="mb-4 text-2xl font-bold text-gray-900 md:text-3xl dark:text-white">
                  {features[0]?.title}
                </h3>
                <p className="mb-6 text-gray-600 dark:text-gray-400">
                  {features[0]?.description}
                </p>
                <a
                  href={features[0]?.ctaLink}
                  className="group flex items-center gap-2 text-sm font-medium transition-colors"
                  style={{ color: colors.accent }}
                >
                  {features[0]?.ctaText}
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
              </div>
              <div className="flex items-center justify-center p-8 lg:p-12">
                <LeadQualifierUI colors={colors} />
              </div>
            </div>
          </motion.div>

          {/* Feature 2 - Lead Generator */}
          <motion.div
            variants={itemVariants}
            className="overflow-hidden rounded-2xl"
            style={{ backgroundColor: colors.cardBg }}
          >
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="relative h-64 lg:h-auto lg:min-h-[320px]">
                <LeadGeneratorUI colors={colors} />
              </div>
              <div className="flex flex-col justify-center p-8 lg:p-12">
                <div className="mb-4 flex items-center gap-2">
                  <div
                    className="flex h-6 w-6 items-center justify-center rounded"
                    style={{ backgroundColor: colors.tagBg }}
                  >
                    <MessageSquare
                      className="h-3 w-3"
                      style={{ color: colors.accent }}
                    />
                  </div>
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    {features[1]?.label}
                  </span>
                </div>
                <h3 className="mb-4 text-2xl font-bold text-gray-900 md:text-3xl dark:text-white">
                  {features[1]?.title}
                </h3>
                <p className="mb-6 text-gray-600 dark:text-gray-400">
                  {features[1]?.description}
                </p>
                <a
                  href={features[1]?.ctaLink}
                  className="group flex items-center gap-2 text-sm font-medium transition-colors"
                  style={{ color: colors.accent }}
                >
                  {features[1]?.ctaText}
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Feature 3 - Lead Outreach */}
          <motion.div
            variants={itemVariants}
            className="overflow-hidden rounded-2xl"
            style={{ backgroundColor: colors.cardBgAlt }}
          >
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="flex flex-col justify-center p-8 lg:p-12">
                <div className="mb-4 flex items-center gap-2">
                  <div
                    className="flex h-6 w-6 items-center justify-center rounded"
                    style={{ backgroundColor: colors.tagBg }}
                  >
                    <Mail
                      className="h-3 w-3"
                      style={{ color: colors.accent }}
                    />
                  </div>
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    {features[2]?.label}
                  </span>
                </div>
                <h3 className="mb-4 text-2xl font-bold text-gray-900 md:text-3xl dark:text-white">
                  {features[2]?.title}
                </h3>
                <p className="mb-6 text-gray-600 dark:text-gray-400">
                  {features[2]?.description}
                </p>
                <a
                  href={features[2]?.ctaLink}
                  className="group flex items-center gap-2 text-sm font-medium transition-colors"
                  style={{ color: colors.accent }}
                >
                  {features[2]?.ctaText}
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
              </div>
              <div className="flex items-center justify-center p-8 lg:p-12">
                <LeadOutreachUI colors={colors} />
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Mini Features */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4"
        >
          {miniFeatures.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="rounded-xl p-6"
              style={{ backgroundColor: colors.cardBg }}
            >
              <div
                className="mb-4 flex h-8 w-8 items-center justify-center rounded-lg text-white"
                style={{ backgroundColor: feature.iconBg }}
              >
                {feature.icon}
              </div>
              <h4 className="mb-2 font-semibold text-gray-900 dark:text-white">
                {feature.title}
              </h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
