"use client";

// ============================================================================
// CUSTOMIZATION - 이 섹션의 값들을 수정하여 프로젝트에 맞게 조정하세요
// ============================================================================

/**
 * 커스텀 색상 (브랜드 컬러)
 */
const COLORS = {
  light: {
    accent: "#2C93F2",
    accentLight: "#EBF5FF",
    border: "#E4E4E7",
    textPrimary: "#09090B",
    textSecondary: "#A1A1AA",
    cardBg: "#F4F4F5",
    white: "#FFFFFF",
  },
  dark: {
    accent: "#2C93F2",
    accentLight: "#1E3A5F",
    border: "#374151",
    textPrimary: "#F9FAFB",
    textSecondary: "#9CA3AF",
    cardBg: "#1F2937",
    white: "#111827",
  },
} as const;

/**
 * 컨텐츠 데이터
 */
const CONTENT = {
  badge: "데이터 기반 운영 · 최적화",
  headline: "지원자 여정을 최적화하고\n성공적으로 인재를 영입하세요",
  tabs: [
    {
      id: "interview",
      label: "면접 일정 조율",
      title: "이메일 핑퐁은 그만,\n단순해지는 면접 일정 조율",
      description:
        "몇 번의 클릭으로 면접관 일정 확인부터 지원자 일정 확정까지 간편하게 완료하세요.",
    },
    {
      id: "communication",
      label: "지원자 연락",
      title: "소통 창구는 하나로,\n메시지는 지원자마다 다르게",
      description:
        "지원자 소통 창구를 통합 관리하고, 개인화 메시지로 긍정적인 지원자 경험을 만드세요.",
    },
    {
      id: "analytics",
      label: "채용 데이터 분석",
      title: "데이터 기반으로 의사결정과\n채용 문제 해결을 명확하게",
      description:
        "채용 전환율과 리드타임 등 데이터를 한눈에 보고, 병목 지점을 빠르게 파악해 개선하세요.",
    },
  ],
} as const;

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { motion } from "motion/react";
import { useState, useEffect, useRef } from "react";
import { ArrowRight, FileText, MousePointer2 } from "lucide-react";

interface GreetinghrFeature5Props {
  mode?: "light" | "dark";
}

type TabId = (typeof CONTENT.tabs)[number]["id"];

// Interview Scheduling UI Mockup
const InterviewMockup = () => (
  <div className="relative w-full max-w-[600px] mx-auto">
    {/* Main Card */}
    <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-6">
      {/* Header */}
      <div className="flex items-center gap-3 mb-6">
        <div className="w-2 h-2 bg-blue-500 rounded-full" />
        <span className="text-sm text-gray-600">면접 일정 조율</span>
      </div>

      {/* Calendar Grid */}
      <div className="grid grid-cols-7 gap-2 mb-4">
        {["월", "화", "수", "목", "금", "토", "일"].map((day) => (
          <div key={day} className="text-center text-xs text-gray-400 py-1">
            {day}
          </div>
        ))}
        {Array.from({ length: 14 }).map((_, i) => (
          <div
            key={i}
            className={`text-center text-sm py-2 rounded ${
              i === 3 || i === 8
                ? "bg-blue-100 text-blue-600 font-medium"
                : "text-gray-600"
            }`}
          >
            {i + 1}
          </div>
        ))}
      </div>

      {/* Time Slots */}
      <div className="flex gap-2 mb-4">
        {["09:00", "10:30", "14:00", "15:30"].map((time, i) => (
          <div
            key={time}
            className={`px-3 py-1.5 rounded-full text-xs ${
              i === 1 ? "bg-blue-500 text-white" : "bg-gray-100 text-gray-600"
            }`}
          >
            {time}
          </div>
        ))}
      </div>
    </div>

    {/* Floating Card */}
    <motion.div
      initial={{ opacity: 0, x: 20, y: 20 }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.3, duration: 0.4 }}
      className="absolute -right-4 top-1/2 -translate-y-1/2 bg-blue-500 text-white px-4 py-2 rounded-lg shadow-lg text-sm font-medium flex items-center gap-2"
    >
      채용 담당자
      <MousePointer2 className="w-4 h-4" />
    </motion.div>
  </div>
);

// Communication UI Mockup
const CommunicationMockup = () => (
  <div className="relative w-full max-w-[400px] mx-auto">
    {/* Message Card */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.2, duration: 0.4 }}
      className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8 text-center"
    >
      {/* Icon */}
      <div className="w-16 h-16 mx-auto mb-4 bg-gray-100 rounded-2xl flex items-center justify-center">
        <FileText className="w-8 h-8 text-gray-400" />
      </div>

      {/* Title */}
      <h4 className="text-lg font-semibold text-gray-900 mb-2">서류 접수 확인</h4>

      {/* Description */}
      <p className="text-sm text-gray-500">
        지원자에게 자동으로 서류 접수 확인 메시지가 전송됩니다
      </p>
    </motion.div>
  </div>
);

// Analytics Dashboard UI Mockup
const AnalyticsMockup = () => (
  <div className="relative w-full max-w-[700px] mx-auto">
    {/* Dashboard Card */}
    <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h4 className="font-semibold text-gray-900">
          2025 상반기 채용 분석 대시보드
        </h4>
        <div className="flex gap-2">
          <div className="px-3 py-1 bg-gray-100 rounded text-xs text-gray-600">
            전체
          </div>
          <div className="px-3 py-1 bg-gray-100 rounded text-xs text-gray-600">
            월별
          </div>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
        {[
          { label: "총 지원자", value: "1,234", trend: "+12%" },
          { label: "합격률", value: "8.7%", trend: "+2.1%" },
          { label: "평균 리드타임", value: "14일", trend: "-3일" },
          { label: "채용 완료", value: "47", trend: "" },
        ].map((stat) => (
          <div key={stat.label} className="text-center">
            <p className="text-xl sm:text-2xl font-bold text-gray-900">
              {stat.value}
            </p>
            <p className="text-xs text-gray-500 mt-1">{stat.label}</p>
            {stat.trend && (
              <span className="text-xs text-green-500">{stat.trend}</span>
            )}
          </div>
        ))}
      </div>

      {/* Chart Placeholder */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {/* Bar Chart */}
        <div className="sm:col-span-2 h-32 bg-gray-50 rounded-lg p-4">
          <div className="flex items-end justify-around h-full gap-2">
            {[60, 80, 45, 90, 70, 85, 50].map((height, i) => (
              <div
                key={i}
                className="w-6 bg-blue-400 rounded-t"
                style={{ height: `${height}%` }}
              />
            ))}
          </div>
        </div>

        {/* Pie Chart */}
        <div className="h-32 bg-gray-50 rounded-lg p-4 flex items-center justify-center">
          <div className="relative w-20 h-20">
            <svg viewBox="0 0 36 36" className="w-full h-full">
              <circle
                cx="18"
                cy="18"
                r="15.9"
                fill="none"
                stroke="#E5E7EB"
                strokeWidth="3"
              />
              <circle
                cx="18"
                cy="18"
                r="15.9"
                fill="none"
                stroke="#3B82F6"
                strokeWidth="3"
                strokeDasharray="70 30"
                strokeLinecap="round"
                transform="rotate(-90 18 18)"
              />
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-xs font-semibold">70%</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default function GreetinghrFeature5({
  mode = "light",
}: GreetinghrFeature5Props) {
  const colors = COLORS[mode];
  const [activeTab, setActiveTab] = useState<TabId>(CONTENT.tabs[0].id);
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Intersection Observer for scroll-based tab highlighting
  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    sectionRefs.current.forEach((ref, index) => {
      if (!ref) return;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveTab(CONTENT.tabs[index].id);
            }
          });
        },
        { threshold: 0.5 }
      );

      observer.observe(ref);
      observers.push(observer);
    });

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, []);

  const scrollToSection = (index: number) => {
    sectionRefs.current[index]?.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  };

  return (
    <section
      className="relative w-full py-20 lg:py-32"
      style={{ backgroundColor: colors.white }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          {/* Badge */}
          <div
            className="inline-block px-4 py-1.5 rounded-md text-sm mb-6"
            style={{
              backgroundColor: colors.white,
              border: `1px solid ${colors.border}`,
              color: colors.textPrimary,
            }}
          >
            {CONTENT.badge}
          </div>

          {/* Headline */}
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold whitespace-pre-line leading-tight"
            style={{ color: colors.textPrimary }}
          >
            {CONTENT.headline}
          </h2>
        </motion.div>

        {/* Main Layout with Sticky Sidebar */}
        <div className="flex flex-col lg:flex-row lg:items-start gap-8 lg:gap-16">
          {/* Left: Sticky Tab Menu */}
          <div className="lg:w-48 shrink-0 lg:sticky lg:top-32">
            <nav className="flex lg:flex-col gap-2">
              {CONTENT.tabs.map((tab, index) => (
                <button
                  key={tab.id}
                  onClick={() => {
                    setActiveTab(tab.id);
                    scrollToSection(index);
                  }}
                  className="text-left px-3 py-2 rounded-lg text-sm font-medium transition-colors whitespace-nowrap"
                  style={{
                    color:
                      activeTab === tab.id
                        ? colors.accent
                        : colors.textSecondary,
                  }}
                >
                  {tab.label}
                  {tab.id === "analytics" && (
                    <span className="ml-1">&gt;&gt;</span>
                  )}
                </button>
              ))}
            </nav>
          </div>

          {/* Right: Scrollable Content */}
          <div className="flex-1 space-y-24">
            {CONTENT.tabs.map((tab, index) => (
              <motion.div
                key={tab.id}
                ref={(el) => {
                  sectionRefs.current[index] = el;
                }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                {/* Title + Arrow */}
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3
                      className="text-xl lg:text-2xl font-bold whitespace-pre-line leading-snug"
                      style={{ color: colors.textPrimary }}
                    >
                      {tab.title}
                    </h3>
                    <p
                      className="mt-3 text-sm lg:text-base max-w-lg"
                      style={{ color: colors.textSecondary }}
                    >
                      {tab.description}
                    </p>
                  </div>
                  <button
                    className="shrink-0 w-8 h-8 rounded flex items-center justify-center transition-colors hover:bg-gray-100"
                    style={{ color: colors.textPrimary }}
                  >
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </div>

                {/* Mockup */}
                <div
                  className="mt-8 p-8 lg:p-12 rounded-2xl"
                  style={{
                    backgroundColor: colors.cardBg,
                    border: `1px solid ${colors.border}`,
                  }}
                >
                  {tab.id === "interview" && <InterviewMockup />}
                  {tab.id === "communication" && <CommunicationMockup />}
                  {tab.id === "analytics" && <AnalyticsMockup />}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
