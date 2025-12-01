"use client";

// ============================================================================
// CUSTOMIZATION - 이 섹션의 값들을 수정하여 프로젝트에 맞게 조정하세요
// ============================================================================

const COLORS = {
  light: {
    // 배경
    background: "#FEF4EA",      // 크림색 배경
    // 브랜드 Primary
    accent: "#FF5C35",          // 오렌지 레드 (주요 버튼)
    accentHover: "#E5523A",     // 오렌지 레드 호버
    // 브랜드 Secondary
    accentTeal: "#68ABA4",      // 틸 그린 (AI 표시)
    accentCyan: "#00A4BD",      // 시안 (통계 숫자)
    // 장식 색상
    decorRed: "#D35D3D",        // 스파클 장식 레드
    decorPeach: "#E8A87C",      // 스파클 장식 피치
  },
  dark: {
    background: "#2D1F14",
    accent: "#FF7359",
    accentHover: "#FF5C35",
    accentTeal: "#7CBDB6",
    accentCyan: "#33B4CC",
    decorRed: "#E57A5D",
    decorPeach: "#F0B88C",
  },
} as const;

const IMAGES = {} as const; // 이 컴포넌트는 이미지를 사용하지 않음

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { motion } from "motion/react";
import { Mail, Phone, MessageSquare, MoreHorizontal, ArrowUp, ArrowDown } from "lucide-react";

interface HubspotHeroProps {
  mode?: "light" | "dark";
  tagline?: string;
  headline?: string;
  description?: string;
  primaryButtonText?: string;
  secondaryButtonText?: string;
  bottomText?: string;
  onPrimaryClick?: () => void;
  onSecondaryClick?: () => void;
}

// Sparkle/Star decoration component
function SparkleDecoration() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.6, duration: 0.5 }}
      className="absolute right-[45%] top-8 hidden lg:block"
    >
      <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
        {/* Large 4-pointed star */}
        <path
          d="M30 0C30 16.5685 30 30 30 30C30 30 16.5685 30 0 30C16.5685 30 30 30 30 30C30 30 30 43.4315 30 60C30 43.4315 30 30 30 30C30 30 43.4315 30 60 30C43.4315 30 30 30 30 30"
          fill={COLORS.light.decorRed}
        />
        <path
          d="M30 5L31 30H29L30 5Z"
          fill={COLORS.light.decorRed}
        />
        <path
          d="M30 55L31 30H29L30 55Z"
          fill={COLORS.light.decorRed}
        />
        <path
          d="M5 30L30 31V29L5 30Z"
          fill={COLORS.light.decorRed}
        />
        <path
          d="M55 30L30 31V29L55 30Z"
          fill={COLORS.light.decorRed}
        />
      </svg>
      {/* Small diamond */}
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        className="absolute -right-3 -top-2"
      >
        <path
          d="M10 0L12 10L10 20L8 10L10 0Z"
          fill={COLORS.light.decorPeach}
        />
        <path
          d="M0 10L10 12L20 10L10 8L0 10Z"
          fill={COLORS.light.decorPeach}
        />
      </svg>
    </motion.div>
  );
}

// Weekly Activity Card component
function WeeklyActivityCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20, x: 20 }}
      animate={{ opacity: 1, y: 0, x: 0 }}
      transition={{ delay: 0.4, duration: 0.6 }}
      className="absolute right-[25%] top-16 hidden lg:block"
    >
      <div className="bg-white rounded-xl shadow-xl p-5 w-[220px] border border-gray-100">
        <h3 className="text-sm font-semibold text-gray-900 mb-4">Your Weekly Activity</h3>
        <div className="grid grid-cols-3 gap-3">
          <div className="text-center">
            <p className="text-[10px] text-gray-500 uppercase tracking-wide mb-1">Emails</p>
            <p className="text-2xl font-bold" style={{ color: COLORS.light.accentCyan }}>17</p>
            <div className="flex items-center justify-center gap-0.5 text-[10px] text-gray-500">
              <ArrowUp size={10} className="text-green-500" />
              <span>4</span>
            </div>
          </div>
          <div className="text-center">
            <p className="text-[10px] text-gray-500 uppercase tracking-wide mb-1">Calls</p>
            <p className="text-2xl font-bold" style={{ color: COLORS.light.accentCyan }}>25</p>
            <div className="flex items-center justify-center gap-0.5 text-[10px] text-gray-500">
              <ArrowUp size={10} className="text-green-500" />
              <span>7</span>
            </div>
          </div>
          <div className="text-center">
            <p className="text-[10px] text-gray-500 uppercase tracking-wide mb-1">Meetings</p>
            <p className="text-2xl font-bold" style={{ color: COLORS.light.accentCyan }}>15</p>
            <div className="flex items-center justify-center gap-0.5 text-[10px] text-gray-500">
              <ArrowUp size={10} className="text-green-500" />
              <span>2</span>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

// AI Chatbot Card component
function AIChatbotCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20, x: -20 }}
      animate={{ opacity: 1, y: 0, x: 0 }}
      transition={{ delay: 0.5, duration: 0.6 }}
      className="absolute right-[18%] top-48 hidden lg:block"
    >
      <div className="bg-[#F5F3E8] rounded-xl shadow-lg p-4 w-[200px]">
        <div className="flex items-center gap-2 mb-3">
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-teal-400 to-teal-600 flex items-center justify-center">
            <MessageSquare size={14} className="text-white" />
          </div>
          <span className="font-semibold text-gray-900 text-sm">AI Chatbot</span>
        </div>
        <p className="text-xs text-gray-600 leading-relaxed">
          <span className="mr-1">&#128075;</span>
          Want to chat? I&apos;m an AI chatbot here to help you find your way.
        </p>
      </div>
    </motion.div>
  );
}

// Content Remix Card component
function ContentRemixCard() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.3, duration: 0.6 }}
      className="absolute right-[5%] top-8 hidden lg:block"
    >
      <div className="bg-white rounded-xl shadow-lg p-4 w-[180px] border border-gray-100">
        <div className="flex items-start gap-3">
          <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0" style={{ backgroundColor: COLORS.light.accent }}>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M8 2L10 6L14 7L11 10L12 14L8 12L4 14L5 10L2 7L6 6L8 2Z" fill="white"/>
            </svg>
          </div>
          <div>
            <p className="text-xs text-gray-700 leading-snug">
              Repurpose your content with content remix
            </p>
            <p className="text-xs font-medium mt-1" style={{ color: COLORS.light.accentTeal }}>HubSpot AI</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

// Contact Card component
function ContactCard() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 30, y: 20 }}
      animate={{ opacity: 1, x: 0, y: 0 }}
      transition={{ delay: 0.6, duration: 0.6 }}
      className="absolute right-[5%] top-40 hidden lg:block"
    >
      <div className="bg-white rounded-xl shadow-lg p-4 w-[200px] border border-gray-100">
        <div className="flex items-center justify-between mb-3">
          <span className="text-xs text-gray-500">&lt; Contacts</span>
          <span className="text-xs text-gray-500">Actions <ArrowDown size={10} className="inline" /></span>
        </div>
        <div className="flex items-center gap-3 mb-3">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-orange-300 to-orange-400 flex items-center justify-center text-white font-medium text-sm">
            AS
          </div>
          <span className="font-semibold text-gray-900">Aisha Saah</span>
        </div>
        <div className="flex gap-2">
          <div className="w-7 h-7 rounded-full flex items-center justify-center" style={{ backgroundColor: COLORS.light.accent }}>
            <Mail size={12} className="text-white" />
          </div>
          <div className="w-7 h-7 rounded-full flex items-center justify-center" style={{ backgroundColor: '#FF7A59' }}>
            <MessageSquare size={12} className="text-white" />
          </div>
          <div className="w-7 h-7 rounded-full flex items-center justify-center" style={{ backgroundColor: COLORS.light.accentCyan }}>
            <Phone size={12} className="text-white" />
          </div>
          <div className="w-7 h-7 rounded-full flex items-center justify-center" style={{ backgroundColor: '#FFD4C8' }}>
            <MessageSquare size={12} style={{ color: COLORS.light.accent }} />
          </div>
          <div className="w-7 h-7 rounded-full flex items-center justify-center" style={{ backgroundColor: '#FFC9BA' }}>
            <Mail size={12} style={{ color: COLORS.light.accent }} />
          </div>
          <div className="w-7 h-7 rounded-full bg-gray-100 flex items-center justify-center">
            <MoreHorizontal size={12} className="text-gray-500" />
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function HubspotHero({
  mode = "light",
  tagline = "HUBSPOT CUSTOMER PLATFORM",
  headline = "Grow better with\nHubSpot",
  description = "Software that's powerful, not overpowering. Seamlessly connect your data, teams, and customers on one AI-powered customer platform that grows with your business.",
  primaryButtonText = "Get a demo",
  secondaryButtonText = "Get started free",
  bottomText = "Get a demo of our premium software, or get started with free tools.",
  onPrimaryClick,
  onSecondaryClick,
}: HubspotHeroProps) {
  const colors = COLORS[mode];

  return (
    <section className="relative min-h-screen w-full overflow-hidden" style={{ backgroundColor: colors.background }}>
      {/* Font Import */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Lexend+Deca:wght@400;500;600;700&family=Playfair+Display:wght@400;500;600;700&display=swap');
      `}</style>

      <div className="relative mx-auto max-w-7xl px-6 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="relative z-10">
            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-xs font-semibold tracking-[0.2em] text-gray-600 mb-4"
              style={{ fontFamily: "'Lexend Deca', sans-serif" }}
            >
              {tagline}
            </motion.p>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-medium leading-[1.1] text-[#2D3E50] mb-6"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              {headline.split("\n").map((line, index) => (
                <span key={index}>
                  {line}
                  {index < headline.split("\n").length - 1 && <br />}
                </span>
              ))}
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-base text-gray-600 leading-relaxed mb-8 max-w-lg"
              style={{ fontFamily: "'Lexend Deca', sans-serif" }}
            >
              {description}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="flex flex-wrap gap-4 mb-6"
            >
              <button
                onClick={onPrimaryClick}
                className="px-8 py-3.5 text-white font-medium rounded-lg transition-colors shadow-md"
                style={{ fontFamily: "'Lexend Deca', sans-serif", backgroundColor: colors.accent }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = colors.accentHover}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = colors.accent}
              >
                {primaryButtonText}
              </button>
              <button
                onClick={onSecondaryClick}
                className="px-8 py-3.5 bg-white font-medium rounded-lg border-2 hover:bg-gray-50 transition-colors"
                style={{ fontFamily: "'Lexend Deca', sans-serif", color: colors.accent, borderColor: colors.accent }}
              >
                {secondaryButtonText}
              </button>
            </motion.div>

            {/* Bottom Text */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="text-sm text-gray-500"
              style={{ fontFamily: "'Lexend Deca', sans-serif" }}
            >
              {bottomText}
            </motion.p>
          </div>

          {/* Right Side - Floating Cards */}
          <div className="relative h-[400px] lg:h-[500px]">
            <SparkleDecoration />
            <WeeklyActivityCard />
            <AIChatbotCard />
            <ContentRemixCard />
            <ContactCard />
          </div>
        </div>
      </div>
    </section>
  );
}
