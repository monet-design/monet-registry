"use client";

// ============================================================================
// CUSTOMIZATION - 이 섹션의 값들을 수정하여 프로젝트에 맞게 조정하세요
// ============================================================================

/**
 * 커스텀 색상 (브랜드 컬러)
 */
const COLORS = {
  light: {
    accent: "#2563EB",
    accentGreen: "#22C55E",
    accentYellow: "#FBBF24",
    accentPurple: "#8B5CF6",
    textPrimary: "#1A1A1A",
    textSecondary: "#666666",
    textMuted: "#888888",
    bgPrimary: "#FFFFFF",
    bgSecondary: "#F5F5F5",
    bgCard: "#FAFAFA",
    border: "#E5E5E5",
  },
  dark: {
    accent: "#3B82F6",
    accentGreen: "#4ADE80",
    accentYellow: "#FCD34D",
    accentPurple: "#A78BFA",
    textPrimary: "#F9FAFB",
    textSecondary: "#D1D5DB",
    textMuted: "#9CA3AF",
    bgPrimary: "#111827",
    bgSecondary: "#1F2937",
    bgCard: "#374151",
    border: "#374151",
  },
} as const;

/**
 * 언어 태그 데이터
 */
const LANGUAGE_TAGS = [
  { label: "日本", flag: "🇯🇵" },
  { label: "Ahoj", flag: "🇨🇿" },
  { label: "Salut", flag: "🇫🇷" },
  { label: "Hallo", flag: "🇩🇪" },
  { label: "안녕", flag: "🇰🇷" },
  { label: "Oi", flag: "🇧🇷" },
];

/**
 * ML 링크 데이터
 */
const ML_LINKS = [
  { label: "Embedding", href: "#" },
  { label: "Reranking", href: "#" },
  { label: "Hallucination detection", href: "#" },
  { label: "Generative LLMs", href: "#" },
];

/**
 * 기능 카드 데이터
 */
const FEATURE_CARDS = [
  {
    title: "Auto-scale features",
    description:
      "Cloud-native architecture that automatically scales with demand, minimizing costs.",
    link: { label: "Dedicated or shared resources", href: "#" },
  },
  {
    title: "Stateful chat management",
    description:
      "Store and analyze user conversations to continually refine responses and understand user intent.",
    link: null,
  },
  {
    title: "High availability",
    description:
      "Customize replication settings and dedicated nodes, for maximum resilience under peak loads.",
    link: null,
  },
];

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { motion } from "motion/react";
import { ChevronRight, Twitter } from "lucide-react";
import "./font.css";

interface SaaspoFeatureSectionsVectaraProps {
  mode?: "light" | "dark";
  title?: string;
  subtitle?: string;
}

// Performance Wave Chart Component
function PerformanceChart() {
  return (
    <svg viewBox="0 0 200 100" className="w-full h-auto" preserveAspectRatio="xMidYMid meet">
      {/* Grid lines */}
      <defs>
        <linearGradient id="greenGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#22C55E" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#22C55E" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="yellowGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#FBBF24" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#FBBF24" stopOpacity="0" />
        </linearGradient>
      </defs>

      {/* Green wave area */}
      <path
        d="M0,70 Q25,60 50,50 T100,55 T150,45 T200,50 L200,100 L0,100 Z"
        fill="url(#greenGradient)"
      />
      {/* Green line */}
      <path
        d="M0,70 Q25,60 50,50 T100,55 T150,45 T200,50"
        fill="none"
        stroke="#22C55E"
        strokeWidth="2"
      />

      {/* Yellow wave area */}
      <path
        d="M0,80 Q25,70 50,65 T100,70 T150,60 T200,65 L200,100 L0,100 Z"
        fill="url(#yellowGradient)"
      />
      {/* Yellow line */}
      <path
        d="M0,80 Q25,70 50,65 T100,70 T150,60 T200,65"
        fill="none"
        stroke="#FBBF24"
        strokeWidth="2"
      />
    </svg>
  );
}

// Hybrid Retrieval Diagram
function HybridRetrievalDiagram() {
  return (
    <svg viewBox="0 0 200 120" className="w-full h-auto" preserveAspectRatio="xMidYMid meet">
      {/* Outer circle */}
      <circle cx="100" cy="60" r="50" fill="none" stroke="#E5E5E5" strokeWidth="1" />
      <circle cx="100" cy="60" r="40" fill="none" stroke="#E5E5E5" strokeWidth="1" />
      <circle cx="100" cy="60" r="30" fill="none" stroke="#E5E5E5" strokeWidth="1" />

      {/* Center dot */}
      <circle cx="100" cy="60" r="4" fill="#22C55E" />

      {/* Radiating lines */}
      {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((angle, i) => {
        const x1 = 100 + 10 * Math.cos((angle * Math.PI) / 180);
        const y1 = 60 + 10 * Math.sin((angle * Math.PI) / 180);
        const x2 = 100 + 45 * Math.cos((angle * Math.PI) / 180);
        const y2 = 60 + 45 * Math.sin((angle * Math.PI) / 180);
        return (
          <line
            key={i}
            x1={x1}
            y1={y1}
            x2={x2}
            y2={y2}
            stroke="#D1D5DB"
            strokeWidth="0.5"
          />
        );
      })}

      {/* Scattered dots */}
      {[
        { x: 75, y: 40 },
        { x: 130, y: 45 },
        { x: 85, y: 75 },
        { x: 115, y: 70 },
        { x: 70, y: 60 },
        { x: 125, y: 55 },
      ].map((pos, i) => (
        <circle key={i} cx={pos.x} cy={pos.y} r="2" fill="#9CA3AF" />
      ))}
    </svg>
  );
}

// Security Shield Diagram
function SecurityDiagram() {
  return (
    <svg viewBox="0 0 200 150" className="w-full h-auto" preserveAspectRatio="xMidYMid meet">
      {/* Outer circles */}
      <circle cx="100" cy="75" r="60" fill="none" stroke="#E5E5E5" strokeWidth="1" strokeDasharray="4 4" />
      <circle cx="100" cy="75" r="45" fill="none" stroke="#E5E5E5" strokeWidth="1" />

      {/* Shield icon in center */}
      <g transform="translate(82, 55)">
        <path
          d="M18,2 L2,8 V18 C2,28 18,38 18,38 C18,38 34,28 34,18 V8 L18,2 Z"
          fill="none"
          stroke="#1A1A1A"
          strokeWidth="1.5"
        />
        <path
          d="M12,20 L16,24 L24,16"
          fill="none"
          stroke="#22C55E"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>

      {/* SOC badge */}
      <g transform="translate(140, 95)">
        <rect x="0" y="0" width="40" height="25" rx="4" fill="#F3F4F6" stroke="#E5E5E5" strokeWidth="1" />
        <text x="20" y="10" textAnchor="middle" fontSize="6" fill="#666666">AICPA</text>
        <text x="20" y="19" textAnchor="middle" fontSize="5" fill="#888888">SOC</text>
      </g>

      {/* Dotted orbital paths */}
      {[30, 60, 120].map((angle, i) => {
        const x = 100 + 52 * Math.cos((angle * Math.PI) / 180);
        const y = 75 + 52 * Math.sin((angle * Math.PI) / 180);
        return <circle key={i} cx={x} cy={y} r="3" fill="#D1D5DB" />;
      })}
    </svg>
  );
}

export default function SaaspoFeatureSectionsVectara({
  mode = "light",
  title = "Features &\nperformance",
  subtitle,
}: SaaspoFeatureSectionsVectaraProps) {
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
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section
      className="relative w-full py-20 md:py-32"
      style={{ backgroundColor: colors.bgPrimary }}
    >
      <div className="max-w-6xl mx-auto px-6 md:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="mb-16 md:mb-24"
        >
          <h1
            className="text-4xl md:text-5xl lg:text-6xl font-serif italic leading-tight"
            style={{ color: colors.textPrimary }}
          >
            {title.split("\n").map((line, i) => (
              <span key={i}>
                {line}
                {i < title.split("\n").length - 1 && <br />}
              </span>
            ))}
          </h1>
        </motion.div>

        {/* API & Multilingual Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-8 md:gap-16 mb-20 md:mb-32"
        >
          {/* API-first integration */}
          <motion.div variants={itemVariants}>
            <h3
              className="text-lg font-semibold mb-3"
              style={{ color: colors.textPrimary }}
            >
              API-first integration
            </h3>
            <p
              className="text-sm leading-relaxed"
              style={{ color: colors.textSecondary }}
            >
              Easily integrate advanced retrieval and generation capabilities into any
              application.
            </p>
          </motion.div>

          {/* Multilingual data */}
          <motion.div variants={itemVariants}>
            <h3
              className="text-lg font-semibold mb-3"
              style={{ color: colors.textPrimary }}
            >
              Multilingual data
            </h3>
            <p
              className="text-sm leading-relaxed mb-4"
              style={{ color: colors.textSecondary }}
            >
              Analyze, Retrieve, and display information across over a hundred
              languages.
            </p>
            <div className="flex flex-wrap gap-2 items-center">
              {LANGUAGE_TAGS.map((tag, i) => (
                <span
                  key={i}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium"
                  style={{
                    backgroundColor: isDark ? colors.bgSecondary : "#F3F4F6",
                    color: colors.textSecondary,
                  }}
                >
                  {tag.label}
                </span>
              ))}
              {/* Twitter icon placeholder */}
              <span
                className="inline-flex items-center justify-center w-8 h-8 rounded-full"
                style={{ backgroundColor: "#1DA1F2" }}
              >
                <Twitter className="w-4 h-4 text-white" />
              </span>
            </div>
          </motion.div>
        </motion.div>

        {/* Best-in-class ML Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <h2
            className="text-3xl md:text-4xl font-serif italic mb-4"
            style={{ color: colors.textPrimary }}
          >
            Best-in-class ML
          </h2>
          <p
            className="text-sm md:text-base max-w-md mx-auto leading-relaxed"
            style={{ color: colors.textSecondary }}
          >
            Backed by world-class researchers, Vectara&apos;s ML models provide
            unmatched performance.
          </p>
        </motion.div>

        {/* ML Links */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 md:gap-8 mb-20 md:mb-32"
        >
          {ML_LINKS.map((link, i) => (
            <motion.a
              key={i}
              variants={itemVariants}
              href={link.href}
              className="inline-flex items-center gap-1 text-sm font-medium transition-colors hover:opacity-70"
              style={{ color: colors.textPrimary }}
            >
              {link.label}
              <ChevronRight className="w-4 h-4" />
            </motion.a>
          ))}
        </motion.div>

        {/* Performance & Hybrid Retrieval */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-12 md:gap-20 mb-20 md:mb-32"
        >
          {/* Performance */}
          <motion.div variants={itemVariants}>
            <h3
              className="text-lg font-semibold mb-3"
              style={{ color: colors.textPrimary }}
            >
              Performance
            </h3>
            <p
              className="text-sm leading-relaxed mb-6"
              style={{ color: colors.textSecondary }}
            >
              Ultra-fast response times with our optimized cloud infrastructure, under
              100 milliseconds.
            </p>
            <div className="w-full max-w-sm">
              <PerformanceChart />
            </div>
          </motion.div>

          {/* Hybrid retrieval */}
          <motion.div variants={itemVariants}>
            <h3
              className="text-lg font-semibold mb-3"
              style={{ color: colors.textPrimary }}
            >
              Hybrid retrieval
            </h3>
            <p
              className="text-sm leading-relaxed mb-6"
              style={{ color: colors.textSecondary }}
            >
              Leverage the best of both worlds - configure traditional BM25 with semantic
              search for optimal relevance.
            </p>
            <div className="w-full max-w-xs mx-auto">
              <HybridRetrievalDiagram />
            </div>
          </motion.div>
        </motion.div>

        {/* Feature Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8 mb-20 md:mb-32"
        >
          {FEATURE_CARDS.map((card, i) => (
            <motion.div key={i} variants={itemVariants}>
              <h3
                className="text-base font-semibold mb-2"
                style={{ color: colors.textPrimary }}
              >
                {card.title}
              </h3>
              <p
                className="text-sm leading-relaxed mb-3"
                style={{ color: colors.textSecondary }}
              >
                {card.description}
              </p>
              {card.link && (
                <a
                  href={card.link.href}
                  className="inline-flex items-center gap-1 text-sm font-medium transition-colors hover:opacity-70"
                  style={{ color: colors.textPrimary }}
                >
                  {card.link.label}
                  <ChevronRight className="w-4 h-4" />
                </a>
              )}
            </motion.div>
          ))}
        </motion.div>

        {/* Security Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-12 items-center"
          style={{
            backgroundColor: isDark ? colors.bgSecondary : colors.bgSecondary,
            padding: "3rem",
            borderRadius: "1rem",
          }}
        >
          <motion.div variants={itemVariants}>
            <h2
              className="text-3xl md:text-4xl font-serif italic mb-4"
              style={{ color: colors.textPrimary }}
            >
              Security
            </h2>
            <p
              className="text-sm md:text-base leading-relaxed"
              style={{ color: colors.textSecondary }}
            >
              Vectara is compliant with SOC 2 type I and II, HIPAA, and GDPR. The platform
              supports OAuth 2.0 and API-key.
            </p>
          </motion.div>
          <motion.div variants={itemVariants} className="flex justify-center">
            <div className="w-full max-w-xs">
              <SecurityDiagram />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
