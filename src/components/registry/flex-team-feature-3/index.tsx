"use client";

// ============================================================================
// CUSTOMIZATION
// ============================================================================

const COLORS = {
  light: {
    accent: "#7C3AED", // Purple accent
    accentLight: "#E9D5FF",
  },
  dark: {
    accent: "#A78BFA",
    accentLight: "#3B0764",
  },
} as const;

const IMAGES = {
  dashboard: {
    path: "/scraped/flex-team-2025-12-14/images/image-6.png",
    alt: "구성원 관리 대시보드",
  },
} as const;

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import Image from "next/image";
import { useState } from "react";

interface FlexTeamFeature3Props {
  mode?: "light" | "dark";
}

const TABS = [
  { id: "member", label: "구성원 · 조직 관리", icon: "users" },
  { id: "attendance", label: "근태 관리", icon: "clock" },
  { id: "contract", label: "전자계약서", icon: "document" },
  { id: "workflow", label: "워크플로우", icon: "flow" },
  { id: "insight", label: "인사이트", icon: "chart" },
];

export default function FlexTeamFeature3({
  mode = "light",
}: FlexTeamFeature3Props) {
  const [activeTab, setActiveTab] = useState("member");
  const colors = COLORS[mode];

  return (
    <section className="w-full bg-white px-8 py-20 lg:px-16">
      {/* Section Header */}
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-4">
          <h2 className="text-3xl font-bold text-gray-900 lg:text-4xl">
            구성원 관리를 위해
          </h2>
          <div className="flex gap-1">
            <span className="inline-block h-3 w-3 rounded-full" style={{ backgroundColor: colors.accent }} />
            <span className="inline-block h-3 w-3 rounded-full" style={{ backgroundColor: colors.accent, opacity: 0.6 }} />
            <span className="inline-block h-3 w-3 rounded-full" style={{ backgroundColor: colors.accent, opacity: 0.3 }} />
            <span className="inline-block h-3 w-3 rounded-full" style={{ backgroundColor: colors.accent, opacity: 0.6 }} />
          </div>
        </div>
        <p className="text-gray-600 mb-2">
          핵심 HR 영역이 시스템을 기반으로 자동화되어,
        </p>
        <p className="text-gray-600 mb-6">
          구성원들이 더 큰 가치를 만드는 일에 집중합니다.
        </p>
        <a
          href="/members"
          className="inline-flex items-center gap-1 text-sm font-medium"
          style={{ color: colors.accent }}
        >
          자세히 알아보기
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M6 12L10 8L6 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </a>
      </div>

      {/* Dashboard Preview */}
      <div className="relative rounded-2xl bg-gray-100 p-4 shadow-xl">
        <div className="relative aspect-[16/10] w-full overflow-hidden rounded-lg bg-white shadow-sm">
          <Image
            src={IMAGES.dashboard.path}
            alt={IMAGES.dashboard.alt}
            fill
            className="object-cover object-top"
          />

          {/* Filter Overlay */}
          <div className="absolute right-4 top-1/2 -translate-y-1/2 w-72 rounded-lg bg-white p-4 shadow-lg">
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <span className="rounded bg-purple-100 px-2 py-1 text-xs text-purple-700">조회기간</span>
                <span className="text-sm text-gray-700">&apos;2023년 1월 1일 ~ 6월 30일&apos;</span>
                <span className="text-xs text-gray-500">이면서</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="rounded bg-purple-100 px-2 py-1 text-xs text-purple-700">언어</span>
                <span className="text-sm text-gray-700">&apos;중국어&apos; 포함</span>
                <span className="text-xs text-gray-500">이면서</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="rounded bg-purple-100 px-2 py-1 text-xs text-purple-700">언어 수준</span>
                <span className="text-sm text-gray-700">&apos;초급 (기초적인 의사소통)&apos; 포함</span>
              </div>
              <div className="text-xs text-gray-400">또는</div>
              <div className="flex items-center gap-2">
                <span className="rounded bg-purple-100 px-2 py-1 text-xs text-purple-700">학교</span>
                <span className="text-sm text-gray-700">&apos;플렉스대학교&apos; 제외</span>
              </div>
              <button className="flex items-center gap-1 text-sm text-gray-500">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M8 4V12M4 8H12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
                조건 추가
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="mt-8 flex flex-wrap items-center gap-3">
        {TABS.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex items-center gap-2 rounded-full border px-4 py-2 text-sm transition-colors ${
              activeTab === tab.id
                ? "border-gray-900 bg-white text-gray-900"
                : "border-gray-200 bg-white text-gray-600 hover:border-gray-300"
            }`}
          >
            {tab.icon === "users" && (
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M8 8C9.65685 8 11 6.65685 11 5C11 3.34315 9.65685 2 8 2C6.34315 2 5 3.34315 5 5C5 6.65685 6.34315 8 8 8Z" stroke="currentColor" strokeWidth="1.5"/>
                <path d="M14 14C14 11.7909 11.3137 10 8 10C4.68629 10 2 11.7909 2 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
            )}
            {tab.icon === "clock" && (
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <circle cx="8" cy="8" r="6" stroke="currentColor" strokeWidth="1.5"/>
                <path d="M8 5V8L10 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
            )}
            {tab.icon === "document" && (
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M9 2H4C3.44772 2 3 2.44772 3 3V13C3 13.5523 3.44772 14 4 14H12C12.5523 14 13 13.5523 13 13V6L9 2Z" stroke="currentColor" strokeWidth="1.5"/>
                <path d="M9 2V6H13" stroke="currentColor" strokeWidth="1.5"/>
              </svg>
            )}
            {tab.icon === "flow" && (
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <rect x="2" y="2" width="4" height="4" rx="1" stroke="currentColor" strokeWidth="1.5"/>
                <rect x="10" y="10" width="4" height="4" rx="1" stroke="currentColor" strokeWidth="1.5"/>
                <path d="M6 4H10C11.1046 4 12 4.89543 12 6V10" stroke="currentColor" strokeWidth="1.5"/>
              </svg>
            )}
            {tab.icon === "chart" && (
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M2 14V8L6 4L10 8L14 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            )}
            {tab.label}
          </button>
        ))}
      </div>
    </section>
  );
}
