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
    // Primary 액센트 (사이드바 활성화 dot, 아이콘)
    accent: "#7C3AED",
    accentBlue: "#3B82F6",
    accentPurple: "#8B5CF6",
    // 배경
    background: "#F5F5F5",
    // 카드
    cardBg: "#FFFFFF",
    cardBorder: "#E5E5E5",
  },
  dark: {
    accent: "#A78BFA",
    accentBlue: "#60A5FA",
    accentPurple: "#A78BFA",
    background: "#111827",
    cardBg: "#1F2937",
    cardBorder: "#374151",
  },
} as const;

/**
 * 콘텐츠 데이터
 */
const DEFAULT_CONTENT = {
  label: "CANOPYOS",
  title: "One home for operating and\nscaling lending products.",
  subtitle: "However many you have.",
  ctaText: "Explore our platform",
  sidebarItems: [
    { id: "canopy-connect", name: "Canopy Connect", active: true },
    { id: "datadirect", name: "DataDirect", active: false },
    { id: "loanlab", name: "LoanLab", active: false },
    { id: "preview", name: "Preview", active: false },
    { id: "safeguard", name: "SafeGuard", active: false },
  ],
  features: [
    {
      id: "canopy-connect",
      icon: "workflow" as const,
      title: "Canopy Connect",
      description:
        "Drop manual work. Canopy Connect lets you design custom workflows that automate loan tasks, so you can spend your time on other things.",
      highlightText: "Drop manual work.",
    },
    {
      id: "datadirect",
      icon: "chart" as const,
      title: "DataDirect",
      description:
        "Present the insights that matter. Generate ready-made reports that steer your upsell or cross-sell strategy. DataDirect makes your loan account insights count.",
      highlightText: "Present the insights that matter.",
    },
  ],
};

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { motion } from "motion/react";
import { ArrowUpRight, ChevronRight, GitBranch, BarChart3 } from "lucide-react";

interface SidebarItem {
  id: string;
  name: string;
  active: boolean;
}

interface Feature {
  id: string;
  icon: "workflow" | "chart";
  title: string;
  description: string;
  highlightText: string;
}

interface SaaspoFeatureSectionsCanopyProps {
  mode?: "light" | "dark";
  label?: string;
  title?: string;
  subtitle?: string;
  ctaText?: string;
  sidebarItems?: SidebarItem[];
  features?: Feature[];
  onCtaClick?: () => void;
  onFeatureClick?: (featureId: string) => void;
  onSidebarItemClick?: (itemId: string) => void;
}

// Workflow Mockup Component
function WorkflowMockup() {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-gray-100">
        <div className="flex items-center gap-2">
          <GitBranch className="w-4 h-4 text-gray-400" />
          <span className="text-xs text-gray-600">Notify High Risk Borrowers of Upcoming Payment</span>
        </div>
        <button className="text-xs px-3 py-1.5 bg-gray-100 hover:bg-gray-200 rounded text-gray-700 transition-colors">
          Save & Run Test
        </button>
      </div>
      {/* Workflow Canvas */}
      <div className="p-6 bg-gray-50/50 min-h-[200px] flex flex-col items-center">
        {/* Trigger Node */}
        <div className="bg-white rounded-lg border border-gray-200 px-4 py-2.5 shadow-sm flex items-center gap-2">
          <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center">
            <span className="text-blue-600 text-xs font-medium">C</span>
          </div>
          <span className="text-xs text-gray-700">Canopy Payment Due Webhook Received</span>
        </div>
        {/* Connector Line */}
        <div className="w-px h-4 bg-gray-300"></div>
        {/* Branch Node */}
        <div className="bg-white rounded-lg border border-gray-200 px-4 py-2.5 shadow-sm flex items-center gap-2">
          <div className="w-6 h-6 rounded-full bg-purple-100 flex items-center justify-center">
            <GitBranch className="w-3 h-3 text-purple-600" />
          </div>
          <span className="text-xs text-gray-700">Branch on due date</span>
        </div>
        {/* Branch Labels */}
        <div className="flex items-center gap-8 mt-2 text-xs text-gray-500">
          <span>Due in &lt;= 5 days</span>
          <span>Else</span>
        </div>
        {/* Branch Lines */}
        <div className="flex items-start gap-16 mt-2">
          <div className="flex flex-col items-center">
            <div className="w-px h-8 bg-gray-300"></div>
            <div className="w-2 h-2 rounded-full bg-green-400"></div>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-px h-8 bg-gray-300"></div>
            <div className="w-2 h-2 rounded-full bg-gray-300"></div>
          </div>
        </div>
        {/* Action Placeholder */}
        <div className="mt-4 flex items-center gap-2 text-xs text-gray-400">
          <div className="w-5 h-5 rounded-full bg-orange-100 flex items-center justify-center">
            <span className="text-orange-500 text-[10px]">!</span>
          </div>
          <span>Check communication preferences</span>
        </div>
      </div>
    </div>
  );
}

// Analytics Mockup Component
function AnalyticsMockup() {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
      {/* Filter Bar */}
      <div className="flex items-center gap-4 px-4 py-3 border-b border-gray-100">
        <div className="flex items-center gap-2">
          <span className="text-xs text-gray-500">Filter by product type</span>
          <select className="text-xs bg-blue-50 text-blue-700 px-2 py-1 rounded border-0 outline-none">
            <option>Revolving</option>
          </select>
        </div>
        <div className="flex items-center gap-2 ml-auto">
          <span className="text-xs text-gray-500">Filter by product name</span>
          <select className="text-xs bg-gray-50 text-gray-600 px-2 py-1 rounded border-0 outline-none">
            <option>Select</option>
          </select>
        </div>
      </div>
      {/* Stats Cards */}
      <div className="grid grid-cols-2 gap-4 p-4">
        <div className="bg-gray-50 rounded-lg p-4">
          <p className="text-xs text-gray-500 mb-1">Average of min. pay cents</p>
          <p className="text-xl font-semibold text-gray-900">333.33</p>
          <div className="mt-3 flex items-end gap-0.5 h-12">
            {[40, 60, 45, 70, 55, 80, 65, 90, 75, 85, 70, 95, 80, 60, 75].map((h, i) => (
              <div
                key={i}
                className="w-1.5 bg-blue-400 rounded-t"
                style={{ height: `${h}%` }}
              />
            ))}
          </div>
          <div className="flex justify-between text-[10px] text-gray-400 mt-1">
            <span>0.00</span>
            <span>666.67</span>
          </div>
        </div>
        <div className="bg-gray-50 rounded-lg p-4">
          <p className="text-xs text-gray-500 mb-1">Average balance per account</p>
          <p className="text-xl font-semibold text-gray-900">$3,183.48</p>
          <div className="mt-3 h-12 flex flex-col justify-end">
            <div className="h-2 bg-blue-500 rounded" style={{ width: "75%" }}></div>
            <div className="h-1.5 bg-blue-300 rounded mt-1" style={{ width: "45%" }}></div>
          </div>
          <div className="flex justify-between text-[10px] text-gray-400 mt-1">
            <span>0K</span>
            <span>2K</span>
            <span>4K</span>
          </div>
        </div>
      </div>
      {/* Bottom Chart */}
      <div className="px-4 pb-4">
        <p className="text-xs text-gray-500 mb-2">Account count by product</p>
        <div className="h-8 flex items-end">
          <svg viewBox="0 0 100 30" className="w-full h-full">
            <path
              d="M0,25 Q10,25 20,20 T40,15 T60,18 T80,10 T100,12"
              fill="none"
              stroke="#93C5FD"
              strokeWidth="2"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}

// Feature Icon Component
function FeatureIcon({ type, className }: { type: "workflow" | "chart"; className?: string }) {
  if (type === "workflow") {
    return (
      <div className={`w-8 h-8 rounded-lg bg-purple-100 flex items-center justify-center ${className}`}>
        <GitBranch className="w-4 h-4 text-purple-600" />
      </div>
    );
  }
  return (
    <div className={`w-8 h-8 rounded-lg bg-blue-100 flex items-center justify-center ${className}`}>
      <BarChart3 className="w-4 h-4 text-blue-600" />
    </div>
  );
}

export default function SaaspoFeatureSectionsCanopy({
  mode = "light",
  label = DEFAULT_CONTENT.label,
  title = DEFAULT_CONTENT.title,
  subtitle = DEFAULT_CONTENT.subtitle,
  ctaText = DEFAULT_CONTENT.ctaText,
  sidebarItems = DEFAULT_CONTENT.sidebarItems,
  features = DEFAULT_CONTENT.features,
  onCtaClick,
  onFeatureClick,
  onSidebarItemClick,
}: SaaspoFeatureSectionsCanopyProps) {
  const colors = COLORS[mode];
  const isDark = mode === "dark";

  // Split description to highlight first sentence
  const formatDescription = (description: string, highlightText: string) => {
    return (
      <>
        <span className="font-semibold text-gray-900 dark:text-white">{highlightText}</span>{" "}
        {description.replace(highlightText, "").trim()}
      </>
    );
  };

  return (
    <section
      className={`relative w-full py-20 px-6 lg:px-12 ${
        isDark ? "bg-gray-900" : "bg-[#F5F5F5]"
      }`}
    >
      {/* Decorative curved lines - top left */}
      <div className="absolute top-0 left-0 w-48 h-48 opacity-30 pointer-events-none">
        <svg viewBox="0 0 200 200" fill="none" className="w-full h-full">
          <path
            d="M100,10 Q10,10 10,100"
            stroke={isDark ? "#4B5563" : "#D1D5DB"}
            strokeWidth="1"
            fill="none"
          />
          <path
            d="M120,10 Q10,10 10,120"
            stroke={isDark ? "#4B5563" : "#D1D5DB"}
            strokeWidth="1"
            fill="none"
          />
          <circle cx="10" cy="150" r="3" fill={isDark ? "#4B5563" : "#D1D5DB"} />
        </svg>
      </div>

      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          {/* Label */}
          <p
            className={`text-xs font-medium tracking-widest mb-4 ${
              isDark ? "text-gray-400" : "text-gray-500"
            }`}
          >
            {label}
          </p>

          {/* Title */}
          <h2
            className={`text-4xl md:text-5xl lg:text-[3.25rem] leading-tight mb-6 ${
              isDark ? "text-white" : "text-gray-900"
            }`}
            style={{ fontFamily: "'Instrument Serif', Georgia, serif" }}
          >
            {title.split("\n").map((line, i) => (
              <span key={i}>
                {line}
                {i === 0 && <br />}
              </span>
            ))}
            <br />
            <span className={isDark ? "text-gray-500" : "text-gray-400"}>{subtitle}</span>
          </h2>

          {/* CTA Button */}
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={onCtaClick}
            className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full border transition-colors ${
              isDark
                ? "border-gray-600 text-white hover:bg-gray-800"
                : "border-gray-300 text-gray-900 hover:bg-white"
            }`}
          >
            <span className="text-sm font-medium">{ctaText}</span>
            <ChevronRight className="w-4 h-4" />
          </motion.button>
        </motion.div>

        {/* Main Content - Sidebar + Features */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16">
          {/* Sidebar Navigation */}
          <motion.nav
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:w-48 shrink-0"
          >
            <ul className="space-y-3">
              {sidebarItems.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => onSidebarItemClick?.(item.id)}
                    className={`flex items-center gap-3 text-sm transition-colors w-full text-left ${
                      item.active
                        ? isDark
                          ? "text-white font-medium"
                          : "text-gray-900 font-medium"
                        : isDark
                        ? "text-gray-500 hover:text-gray-300"
                        : "text-gray-400 hover:text-gray-600"
                    }`}
                  >
                    {item.active && (
                      <span
                        className="w-2 h-2 rounded-full"
                        style={{ backgroundColor: colors.accent }}
                      />
                    )}
                    <span className={item.active ? "" : "ml-5"}>{item.name}</span>
                  </button>
                </li>
              ))}
            </ul>
          </motion.nav>

          {/* Feature Cards */}
          <div className="flex-1 space-y-6">
            {features.map((feature, index) => (
              <motion.div
                key={feature.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                className={`rounded-2xl border p-8 ${
                  isDark
                    ? "bg-gray-800 border-gray-700"
                    : "bg-white border-gray-200"
                }`}
              >
                {/* Card Header */}
                <div className="flex items-center gap-3 mb-6">
                  <FeatureIcon type={feature.icon} />
                  <h3
                    className={`text-2xl ${isDark ? "text-white" : "text-gray-900"}`}
                    style={{ fontFamily: "'Instrument Serif', Georgia, serif" }}
                  >
                    {feature.title}
                  </h3>
                </div>

                {/* Mockup */}
                <div className="mb-6">
                  {feature.icon === "workflow" ? <WorkflowMockup /> : <AnalyticsMockup />}
                </div>

                {/* Description + Arrow */}
                <div className="flex items-end justify-between gap-4">
                  <p
                    className={`text-sm leading-relaxed max-w-lg ${
                      isDark ? "text-gray-400" : "text-gray-600"
                    }`}
                  >
                    {formatDescription(feature.description, feature.highlightText)}
                  </p>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => onFeatureClick?.(feature.id)}
                    className={`shrink-0 w-10 h-10 rounded-full flex items-center justify-center transition-colors ${
                      isDark
                        ? "bg-gray-700 hover:bg-gray-600 text-white"
                        : "bg-gray-100 hover:bg-gray-200 text-gray-700"
                    }`}
                  >
                    <ArrowUpRight className="w-5 h-5" />
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Font Import */}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&display=swap');
      `}</style>
    </section>
  );
}
