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
    background: "#E8E0D5",
    cardBackground: "#F5F0EA",
    accent: "#000000",
    accentHover: "#333333",
    calendarAccent: "#4A7C59",
  },
  dark: {
    background: "#2A2520",
    cardBackground: "#3A3530",
    accent: "#FFFFFF",
    accentHover: "#E0E0E0",
    calendarAccent: "#6B9B7A",
  },
} as const;

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { motion } from "motion/react";
import { useState, useRef, useEffect } from "react";
import { ChevronLeft, ChevronRight, User, Calendar, Lock } from "lucide-react";
import "./font.css";

interface FeatureCard {
  title: string;
  description: string;
  type: "customized" | "integrated" | "autonomous" | "enterprise";
}

interface SaaspoFeatureSections11xProps {
  mode?: "light" | "dark";
  headline?: string;
  description?: string;
  ctaText?: string;
  onCtaClick?: () => void;
  features?: FeatureCard[];
}

// App icon components for the integration visualization
const AppIcon = ({
  children,
  className = "",
  bgColor = "bg-white",
}: {
  children: React.ReactNode;
  className?: string;
  bgColor?: string;
}) => (
  <div
    className={`w-10 h-10 rounded-lg shadow-md flex items-center justify-center ${bgColor} ${className}`}
  >
    {children}
  </div>
);

// Figma-like icon
const FigmaIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5">
    <path fill="#F24E1E" d="M8 24c2.2 0 4-1.8 4-4v-4H8c-2.2 0-4 1.8-4 4s1.8 4 4 4z" />
    <path fill="#A259FF" d="M4 12c0-2.2 1.8-4 4-4h4v8H8c-2.2 0-4-1.8-4-4z" />
    <path fill="#1ABCFE" d="M12 0v8h4c2.2 0 4-1.8 4-4s-1.8-4-4-4h-4z" />
    <path fill="#0ACF83" d="M4 4c0 2.2 1.8 4 4 4h4V0H8C5.8 0 4 1.8 4 4z" />
    <path fill="#FF7262" d="M12 8h4c2.2 0 4 1.8 4 4s-1.8 4-4 4h-4V8z" />
  </svg>
);

// Intercom-like icon
const IntercomIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="#1F8DED">
    <path d="M12 2C6.48 2 2 6.48 2 12v8c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2v-8c0-5.52-4.48-10-10-10zm-3 14H7v-6h2v6zm4 0h-2V8h2v8zm4 0h-2v-4h2v4z" />
  </svg>
);

// HubSpot-like icon
const HubspotIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="#FF7A59">
    <circle cx="12" cy="12" r="10" />
  </svg>
);

// Gmail-like icon
const GmailIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5">
    <path fill="#EA4335" d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
    <path fill="#FFFFFF" d="M22 6l-10 7L2 6" />
  </svg>
);

// Slack-like icon
const SlackIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5">
    <path fill="#E01E5A" d="M5.042 15.165a2.528 2.528 0 0 1-2.52 2.523A2.528 2.528 0 0 1 0 15.165a2.527 2.527 0 0 1 2.522-2.52h2.52v2.52z" />
    <path fill="#36C5F0" d="M15.165 5.042a2.528 2.528 0 0 1 2.523-2.52A2.528 2.528 0 0 1 20.21 5.04a2.527 2.527 0 0 1-2.52 2.522h-2.52V5.04z" />
    <path fill="#2EB67D" d="M8.835 18.958a2.528 2.528 0 0 1-2.523 2.52A2.528 2.528 0 0 1 3.79 18.96a2.527 2.527 0 0 1 2.52-2.522h2.52v2.52z" />
    <path fill="#ECB22E" d="M18.958 8.835a2.528 2.528 0 0 1 2.52-2.523A2.528 2.528 0 0 1 24 8.835a2.527 2.527 0 0 1-2.522 2.52h-2.52v-2.52z" />
  </svg>
);

// OpenAI-like icon
const OpenAIIcon = () => (
  <div className="w-10 h-10 rounded-lg bg-emerald-500 flex items-center justify-center shadow-md">
    <svg viewBox="0 0 24 24" className="w-5 h-5" fill="white">
      <path d="M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0-3.9977 2.9 6.0462 6.0462 0 0 0 .7427 7.0966 5.98 5.98 0 0 0 .511 4.9107 6.051 6.051 0 0 0 6.5146 2.9001A5.9847 5.9847 0 0 0 13.2599 24a6.0557 6.0557 0 0 0 5.7718-4.2058 5.9894 5.9894 0 0 0 3.9977-2.9001 6.0557 6.0557 0 0 0-.7475-7.0729z" />
    </svg>
  </div>
);

// Zendesk-like icon
const ZendeskIcon = () => (
  <div className="w-10 h-10 rounded-lg bg-emerald-600 flex items-center justify-center shadow-md">
    <span className="text-white font-bold text-lg">Z</span>
  </div>
);

// Notion-like icon
const NotionIcon = () => (
  <div className="w-10 h-10 rounded-lg bg-white border border-gray-200 flex items-center justify-center shadow-md">
    <span className="text-black font-bold text-lg">N</span>
  </div>
);

// Intercom chat icon
const ChatIcon = () => (
  <div className="w-10 h-10 rounded-lg bg-blue-500 flex items-center justify-center shadow-md">
    <svg viewBox="0 0 24 24" className="w-5 h-5" fill="white">
      <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z" />
    </svg>
  </div>
);

// Customized to you card visualization
const CustomizedCardVisual = ({ mode }: { mode: "light" | "dark" }) => (
  <div className="relative w-full h-48 flex items-center justify-center">
    {/* Figma icon - top left */}
    <div className="absolute top-4 left-12">
      <AppIcon bgColor="bg-white">
        <FigmaIcon />
      </AppIcon>
    </div>
    {/* Intercom icon - top right */}
    <div className="absolute top-4 right-12">
      <AppIcon bgColor="bg-blue-500">
        <svg viewBox="0 0 24 24" className="w-5 h-5" fill="white">
          <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z" />
        </svg>
      </AppIcon>
    </div>
    {/* HubSpot icon - left */}
    <div className="absolute left-4 top-1/2 -translate-y-1/2">
      <AppIcon bgColor="bg-orange-100">
        <HubspotIcon />
      </AppIcon>
    </div>
    {/* Center profile */}
    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-pink-200 to-pink-300 overflow-hidden flex items-center justify-center shadow-lg">
      <User className="w-8 h-8 text-pink-600" />
    </div>
    {/* Gmail icon - right */}
    <div className="absolute right-4 top-1/2 -translate-y-1/2">
      <AppIcon bgColor="bg-white">
        <GmailIcon />
      </AppIcon>
    </div>
    {/* Slack icon - bottom left */}
    <div className="absolute bottom-4 left-12">
      <AppIcon bgColor="bg-purple-100">
        <SlackIcon />
      </AppIcon>
    </div>
    {/* Connection lines (decorative) */}
    <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: -1 }}>
      <defs>
        <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor={mode === "light" ? "#E5E7EB" : "#4B5563"} />
          <stop offset="100%" stopColor={mode === "light" ? "#D1D5DB" : "#6B7280"} />
        </linearGradient>
      </defs>
    </svg>
  </div>
);

// Deeply integrated card visualization
const IntegratedCardVisual = ({ mode }: { mode: "light" | "dark" }) => (
  <div className="relative w-full h-48 flex items-center justify-center">
    {/* Central node with profile */}
    <div className="relative">
      {/* Connection lines */}
      <svg className="absolute -inset-16 w-32 h-32" style={{ left: "-32px", top: "-32px", width: "128px", height: "128px" }}>
        <line x1="64" y1="64" x2="20" y2="20" stroke={mode === "light" ? "#E5E7EB" : "#4B5563"} strokeWidth="1" />
        <line x1="64" y1="64" x2="108" y2="20" stroke={mode === "light" ? "#E5E7EB" : "#4B5563"} strokeWidth="1" />
        <line x1="64" y1="64" x2="20" y2="108" stroke={mode === "light" ? "#E5E7EB" : "#4B5563"} strokeWidth="1" />
        <line x1="64" y1="64" x2="108" y2="108" stroke={mode === "light" ? "#E5E7EB" : "#4B5563"} strokeWidth="1" />
      </svg>
      {/* Center profile */}
      <div className="w-16 h-16 rounded-lg bg-gradient-to-br from-blue-100 to-blue-200 overflow-hidden flex items-center justify-center shadow-lg z-10 relative">
        <User className="w-8 h-8 text-blue-600" />
      </div>
    </div>
    {/* Intercom - top left */}
    <div className="absolute top-2 left-16">
      <ChatIcon />
    </div>
    {/* Lock icon - top center-left */}
    <div className="absolute top-6 left-1/3">
      <div className="w-8 h-8 rounded-md bg-gray-100 flex items-center justify-center shadow">
        <Lock className="w-4 h-4 text-gray-600" />
      </div>
    </div>
    {/* OpenAI - top right */}
    <div className="absolute top-2 right-16">
      <OpenAIIcon />
    </div>
    {/* Zendesk - bottom left */}
    <div className="absolute bottom-2 left-16">
      <ZendeskIcon />
    </div>
    {/* Notion - bottom right */}
    <div className="absolute bottom-2 right-16">
      <NotionIcon />
    </div>
  </div>
);

// Autonomous Intelligence card visualization (Calendar)
const AutonomousCardVisual = ({ mode }: { mode: "light" | "dark" }) => {
  const colors = COLORS[mode];
  const days = ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"];
  const dates = [
    [null, null, null, null, null, 1, 2, 3],
    [4, 5, 6, 7, 8, 9, 10],
    [11, 12, 13, 14, 15, 16, 17],
    [18, 19, 20, 21, 22, 23, 24],
    [25, 26, 27, 28, 29, 30, 31],
  ];

  return (
    <div
      className="w-full h-48 rounded-lg p-4"
      style={{ backgroundColor: mode === "light" ? "#F5F0EA" : "#3A3530" }}
    >
      {/* Calendar header */}
      <div className="flex justify-between items-center mb-3">
        <div className="flex items-center gap-1">
          <span
            className={`text-sm font-medium ${mode === "light" ? "text-gray-800" : "text-gray-200"}`}
          >
            March 2024
          </span>
          <ChevronRight className="w-3 h-3 text-gray-400" />
        </div>
        <div className="flex gap-1">
          <ChevronLeft className="w-4 h-4 text-gray-400" />
          <ChevronRight className="w-4 h-4 text-gray-400" />
        </div>
      </div>
      {/* Days header */}
      <div className="grid grid-cols-7 gap-1 mb-2">
        {days.map((day) => (
          <div
            key={day}
            className={`text-center text-[10px] ${mode === "light" ? "text-gray-400" : "text-gray-500"}`}
          >
            {day}
          </div>
        ))}
      </div>
      {/* Calendar grid */}
      <div className="space-y-1">
        {dates.slice(0, 4).map((week, weekIdx) => (
          <div key={weekIdx} className="grid grid-cols-7 gap-1">
            {week.map((date, dateIdx) => (
              <div
                key={dateIdx}
                className={`text-center text-xs py-1 rounded ${
                  date === 4
                    ? "text-white"
                    : mode === "light"
                      ? "text-gray-600"
                      : "text-gray-300"
                }`}
                style={date === 4 ? { backgroundColor: colors.calendarAccent } : {}}
              >
                {date || ""}
              </div>
            ))}
          </div>
        ))}
        {/* Alice row */}
        <div className="flex items-center gap-2 mt-1 ml-4">
          <div className="w-5 h-5 rounded-full bg-gradient-to-br from-amber-200 to-amber-300 flex items-center justify-center">
            <User className="w-3 h-3 text-amber-700" />
          </div>
          <span
            className={`text-xs ${mode === "light" ? "text-gray-600" : "text-gray-300"}`}
          >
            Alice
          </span>
        </div>
      </div>
    </div>
  );
};

// Enterprise card visualization (partial, shows at the edge)
const EnterpriseCardVisual = ({ mode }: { mode: "light" | "dark" }) => (
  <div className="w-full h-48 flex items-center justify-center">
    <div
      className={`w-20 h-20 rounded-full ${mode === "light" ? "bg-gray-200" : "bg-gray-700"} flex items-center justify-center`}
    >
      <Lock className={`w-8 h-8 ${mode === "light" ? "text-gray-500" : "text-gray-400"}`} />
    </div>
  </div>
);

const defaultFeatures: FeatureCard[] = [
  {
    title: "Customised to you",
    description:
      "Build a lasting and contextual memory, transforming past insights into future performance.",
    type: "customized",
  },
  {
    title: "Deeply integrated",
    description:
      "Orchestrate seamless interactions across your entire tech ecosystem",
    type: "integrated",
  },
  {
    title: "Autonomous Intelligence",
    description:
      "Independent, proactive, and able to execute complex tasks without supervision to drive results autonomously.",
    type: "autonomous",
  },
  {
    title: "Enterprise",
    description:
      "Highest security standards with end-to-end encryption.",
    type: "enterprise",
  },
];

export default function SaaspoFeatureSections11x({
  mode = "light",
  headline = "Digital workers transform your workforce",
  description = "Intelligent, enterprise-ready, and seamlessly embedded in your operations—digital workers bring advanced AI technology to your team, scaling effortlessly to drive outcomes and push productivity.",
  ctaText = "Get started",
  onCtaClick,
  features = defaultFeatures,
}: SaaspoFeatureSections11xProps) {
  const colors = COLORS[mode];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCards, setVisibleCards] = useState(3);
  const containerRef = useRef<HTMLDivElement>(null);

  // Adjust visible cards based on screen size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setVisibleCards(1);
      } else if (window.innerWidth < 1024) {
        setVisibleCards(2);
      } else {
        setVisibleCards(3);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const totalDots = Math.ceil(features.length / visibleCards);

  const renderCardVisual = (type: FeatureCard["type"]) => {
    switch (type) {
      case "customized":
        return <CustomizedCardVisual mode={mode} />;
      case "integrated":
        return <IntegratedCardVisual mode={mode} />;
      case "autonomous":
        return <AutonomousCardVisual mode={mode} />;
      case "enterprise":
        return <EnterpriseCardVisual mode={mode} />;
      default:
        return null;
    }
  };

  return (
    <section
      className="relative w-full py-16 md:py-24 overflow-hidden"
      style={{ backgroundColor: colors.background }}
    >
      {/* Header Section */}
      <div className="max-w-4xl mx-auto px-4 text-center mb-12 md:mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className={`text-4xl md:text-5xl lg:text-6xl font-serif font-normal mb-6 ${
            mode === "light" ? "text-gray-900" : "text-white"
          }`}
          style={{ fontFamily: "'Instrument Serif', serif" }}
        >
          {headline}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className={`text-base md:text-lg max-w-2xl mx-auto mb-8 ${
            mode === "light" ? "text-gray-600" : "text-gray-400"
          }`}
        >
          {description}
        </motion.p>
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          onClick={onCtaClick}
          className="px-6 py-3 rounded-full text-sm font-medium transition-colors"
          style={{
            backgroundColor: colors.accent,
            color: mode === "light" ? "#FFFFFF" : "#000000",
          }}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          {ctaText}
        </motion.button>
      </div>

      {/* Cards Section */}
      <div className="relative px-4" ref={containerRef}>
        <div className="max-w-7xl mx-auto overflow-visible">
          <motion.div
            className="flex gap-6"
            animate={{ x: `-${currentIndex * (100 / visibleCards)}%` }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`flex-shrink-0 ${
                  visibleCards === 1
                    ? "w-full"
                    : visibleCards === 2
                      ? "w-[calc(50%-12px)]"
                      : "w-[calc(33.333%-16px)]"
                }`}
              >
                {/* Card Visual */}
                <div
                  className="rounded-2xl overflow-hidden mb-4"
                  style={{
                    backgroundColor: colors.cardBackground,
                  }}
                >
                  {renderCardVisual(feature.type)}
                </div>
                {/* Card Content */}
                <h3
                  className={`text-xl font-medium mb-2 ${
                    mode === "light" ? "text-gray-900" : "text-white"
                  }`}
                >
                  {feature.title}
                </h3>
                <p
                  className={`text-sm leading-relaxed ${
                    mode === "light" ? "text-gray-600" : "text-gray-400"
                  }`}
                >
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Pagination Dots */}
      <div className="flex justify-center gap-2 mt-12">
        {Array.from({ length: totalDots }).map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition-colors ${
              index === currentIndex
                ? mode === "light"
                  ? "bg-gray-800"
                  : "bg-white"
                : mode === "light"
                  ? "bg-gray-400"
                  : "bg-gray-600"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
