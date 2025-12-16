"use client";

// ============================================================================
// CUSTOMIZATION - 이 섹션의 값들을 수정하여 프로젝트에 맞게 조정하세요
// ============================================================================

/**
 * 커스텀 색상 (브랜드 컬러)
 */
const COLORS = {
  light: {
    // Primary 액센트 (이메일 텍스트)
    accent: "#2563EB",
    // Secondary 액센트 (폰 텍스트)
    accentOrange: "#EA580C",
    // 배지 색상
    badgeGreen: "#22C55E",
    badgeOrange: "#F97316",
    // 배경
    background: "#FFFFFF",
    // 텍스트
    textPrimary: "#1A1A1A",
    textSecondary: "#6B7280",
    textMuted: "#9CA3AF",
  },
  dark: {
    accent: "#60A5FA",
    accentOrange: "#FB923C",
    badgeGreen: "#22C55E",
    badgeOrange: "#F97316",
    background: "#0F172A",
    textPrimary: "#F8FAFC",
    textSecondary: "#94A3B8",
    textMuted: "#64748B",
  },
} as const;

/**
 * 이미지 에셋
 */
const IMAGES = {
  avatar: {
    path: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&crop=face",
    alt: "Mark Roberts profile photo",
    prompt: `Professional headshot of a middle-aged businessman with friendly smile, wearing business casual attire, neutral background, high quality portrait photography`,
  },
} as const;

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { motion } from "motion/react";
import { Copy, ChevronUp, ChevronDown } from "lucide-react";

interface SaaspoFeatureSectionsSeamlessProps {
  mode?: "light" | "dark";
  // Section 1 props
  section1Title?: string;
  section1Highlight?: string;
  section1TitleEnd?: string;
  section1Description?: string;
  // Section 2 props
  section2Title?: string;
  section2Highlight?: string;
  section2TitleEnd?: string;
  section2Description?: string;
  // Contact data
  personName?: string;
  personTitle?: string;
  personCompany?: string;
  emails?: { email: string; confidence: number }[];
  phoneNumber?: string;
  phoneConfidence?: number;
}

// Handwritten annotation component
function HandwrittenAnnotation({ text }: { text: string }) {
  return (
    <div className="relative">
      {/* Arrow SVG */}
      <svg
        className="absolute -top-2 -left-8 w-8 h-8 text-gray-500"
        viewBox="0 0 40 40"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <path
          d="M30 5 C 25 15, 15 25, 8 32"
          strokeLinecap="round"
        />
        <path
          d="M8 32 L 12 28 M 8 32 L 4 28"
          strokeLinecap="round"
        />
      </svg>
      <span
        className="text-sm text-gray-600 italic"
        style={{ fontFamily: "'Caveat', cursive" }}
      >
        {text}
      </span>
    </div>
  );
}

// Badge component
function ConfidenceBadge({ confidence }: { confidence: number }) {
  const isHigh = confidence >= 50;
  return (
    <span
      className={`px-2 py-0.5 rounded text-xs font-medium text-white ${
        isHigh ? "bg-green-500" : "bg-orange-500"
      }`}
    >
      {confidence}%
    </span>
  );
}

// Email card component
function EmailCard({
  personName,
  personTitle,
  personCompany,
  emails,
  avatarSrc,
}: {
  personName: string;
  personTitle: string;
  personCompany: string;
  emails: { email: string; confidence: number }[];
  avatarSrc: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      viewport={{ once: true }}
      className="bg-white rounded-xl shadow-lg overflow-hidden w-[320px]"
    >
      {/* Profile Header */}
      <div className="p-4 flex items-center gap-3">
        <img
          src={avatarSrc}
          alt={personName}
          className="w-10 h-10 rounded-full object-cover"
        />
        <div>
          <p className="font-semibold text-gray-900 text-sm">{personName}</p>
          <p className="text-xs text-gray-500">
            {personTitle} at{" "}
            <span className="text-blue-600">{personCompany}</span>
          </p>
        </div>
      </div>

      {/* Email Section */}
      <div className="border-t border-gray-100">
        <div className="px-4 py-2 flex items-center justify-between text-xs font-medium text-gray-500 uppercase tracking-wide">
          <span>Email</span>
          <ChevronUp className="w-4 h-4" />
        </div>
        <div className="px-4 pb-3 space-y-2">
          {emails.map((item, idx) => (
            <div
              key={idx}
              className="flex items-center justify-between bg-gray-50 rounded-lg px-3 py-2"
            >
              <span className="text-sm text-gray-700">{item.email}</span>
              <div className="flex items-center gap-2">
                <ConfidenceBadge confidence={item.confidence} />
                <button className="text-gray-400 hover:text-gray-600 transition-colors">
                  <Copy className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Phone Number Section (collapsed) */}
      <div className="border-t border-gray-100">
        <div className="px-4 py-2 flex items-center justify-between text-xs font-medium text-gray-500 uppercase tracking-wide">
          <span>Phone Number</span>
          <ChevronDown className="w-4 h-4" />
        </div>
      </div>
    </motion.div>
  );
}

// Phone card component
function PhoneCard({
  phoneNumber,
  confidence,
  avatarSrc,
}: {
  phoneNumber: string;
  confidence: number;
  avatarSrc: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      viewport={{ once: true }}
      className="bg-white rounded-xl shadow-lg overflow-hidden w-[280px] p-4"
    >
      <div className="text-xs font-medium text-gray-500 uppercase tracking-wide mb-2">
        Mobile Phone
      </div>
      <div className="flex items-center gap-3">
        <img
          src={avatarSrc}
          alt="Contact"
          className="w-8 h-8 rounded-full object-cover"
        />
        <span className="text-sm text-gray-700 font-medium">{phoneNumber}</span>
        <div className="flex items-center gap-2 ml-auto">
          <ConfidenceBadge confidence={confidence} />
          <button className="text-gray-400 hover:text-gray-600 transition-colors">
            <Copy className="w-4 h-4" />
          </button>
        </div>
      </div>
    </motion.div>
  );
}

export default function SaaspoFeatureSectionsSeamless({
  mode = "light",
  section1Title = "Find anyone's",
  section1Highlight = "email address",
  section1TitleEnd = "in seconds",
  section1Description = "Over 1.8 billion+ business emails researched, validated, and verified. Use AI to contact any B2B professional in seconds!",
  section2Title = "Get",
  section2Highlight = "mobile phones",
  section2TitleEnd = "for all your B2B prospects",
  section2Description = "Over 414 million+ phone numbers researched globally. Connect with ready-to-buy decision makers today!",
  personName = "Mark Roberts",
  personTitle = "VP of Sales",
  personCompany = "Dealsforce",
  emails = [
    { email: "mroberts@dealsforce.com", confidence: 97 },
    { email: "mark.roberts@dealsforce.com", confidence: 15 },
  ],
  phoneNumber = "(494) 416-3040",
  phoneConfidence = 92,
}: SaaspoFeatureSectionsSeamlessProps) {
  const colors = COLORS[mode];

  return (
    <>
      {/* Google Fonts - Caveat for handwriting */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Caveat:wght@400;500&display=swap');
      `}</style>

      <section
        className="relative w-full py-20 lg:py-32"
        style={{ backgroundColor: colors.background }}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section 1: Email */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-24 lg:mb-40">
            {/* Left: Card with gradient background */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div
                className="rounded-3xl p-8 lg:p-12 flex items-center justify-center min-h-[400px]"
                style={{
                  background:
                    "linear-gradient(135deg, #C7D8F4 0%, #D8D0F0 50%, #E8D5F0 100%)",
                }}
              >
                <EmailCard
                  personName={personName}
                  personTitle={personTitle}
                  personCompany={personCompany}
                  emails={emails}
                  avatarSrc={IMAGES.avatar.path}
                />
              </div>
            </motion.div>

            {/* Right: Text content */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="lg:pl-4"
            >
              <h2
                className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-6"
                style={{ color: colors.textPrimary }}
              >
                {section1Title}{" "}
                <span style={{ color: colors.accent }}>{section1Highlight}</span>{" "}
                {section1TitleEnd}
              </h2>
              <p
                className="text-base lg:text-lg leading-relaxed"
                style={{ color: colors.textSecondary }}
              >
                {section1Description}
              </p>
            </motion.div>
          </div>

          {/* Section 2: Phone */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left: Card with gradient background */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div
                className="rounded-3xl p-8 lg:p-12 flex flex-col items-center justify-center min-h-[400px]"
                style={{
                  background:
                    "linear-gradient(135deg, #FDF5E8 0%, #FBE8D5 50%, #F8E5D5 100%)",
                }}
              >
                {/* Handwritten annotation */}
                <div className="mb-6 self-center">
                  <HandwrittenAnnotation text="Connect with ready-to-buy decision makers at any company" />
                </div>

                <PhoneCard
                  phoneNumber={phoneNumber}
                  confidence={phoneConfidence}
                  avatarSrc={IMAGES.avatar.path}
                />
              </div>
            </motion.div>

            {/* Right: Text content */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="lg:pl-4"
            >
              <h2
                className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-6"
                style={{ color: colors.textPrimary }}
              >
                {section2Title}{" "}
                <span style={{ color: colors.accentOrange }}>
                  {section2Highlight}
                </span>{" "}
                {section2TitleEnd}
              </h2>
              <p
                className="text-base lg:text-lg leading-relaxed"
                style={{ color: colors.textSecondary }}
              >
                {section2Description}
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
