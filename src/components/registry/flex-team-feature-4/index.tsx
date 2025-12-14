"use client";

// ============================================================================
// CUSTOMIZATION
// ============================================================================

const COLORS = {
  light: {
    accent: "#C4E538", // Lime green
    accentDark: "#9ACD32",
  },
  dark: {
    accent: "#D4E157",
    accentDark: "#C0CA33",
  },
} as const;

const IMAGES = {
  dashboard: {
    path: "/scraped/flex-team-2025-12-14/images/image-8.png",
    alt: "성과 관리 대시보드",
  },
} as const;

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import Image from "next/image";
import { useState } from "react";

interface FlexTeamFeature4Props {
  mode?: "light" | "dark";
}

const TABS = [
  { id: "goal", label: "목표", icon: "target" },
  { id: "review", label: "평가", icon: "edit" },
  { id: "onboarding", label: "원온원", icon: "users" },
  { id: "recruit", label: "채용", icon: "search" },
];

export default function FlexTeamFeature4({
  mode = "light",
}: FlexTeamFeature4Props) {
  const [activeTab, setActiveTab] = useState("goal");
  const colors = COLORS[mode];

  return (
    <section className="w-full bg-gray-50 px-8 py-20 lg:px-16">
      {/* Section Header */}
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-4">
          <h2 className="text-3xl font-bold text-gray-900 lg:text-4xl">
            성장과 성과를 위해
          </h2>
          <div
            className="h-8 w-8 rounded-full"
            style={{ backgroundColor: colors.accent }}
          />
        </div>
        <p className="text-gray-600 mb-2">
          조직의 모든 데이터를 연결하고,
        </p>
        <p className="text-gray-600 mb-6">
          유연한 인재 관리 프로세스에 AI를 더해 정교한 성장을 만듭니다.
        </p>
        <a
          href="/performance"
          className="inline-flex items-center gap-1 text-sm font-medium text-[#00C853]"
        >
          자세히 알아보기
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M6 12L10 8L6 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </a>
      </div>

      {/* Dashboard Preview */}
      <div className="relative rounded-2xl bg-gradient-to-br from-[#F0F9E8] to-[#E8F5E0] p-4 shadow-lg">
        <div className="relative aspect-[16/10] w-full overflow-hidden rounded-lg bg-white shadow-sm">
          <Image
            src={IMAGES.dashboard.path}
            alt={IMAGES.dashboard.alt}
            fill
            className="object-cover object-top"
          />

          {/* Progress Tooltip */}
          <div className="absolute left-1/3 top-1/3 rounded-lg bg-gray-800 px-3 py-2 text-sm text-white shadow-lg">
            <p>하위 목표의 평균 달성률로</p>
            <p>자동 업데이트해요.</p>
            <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 border-4 border-transparent border-t-gray-800" />
          </div>

          {/* Side Panel */}
          <div className="absolute right-0 top-0 h-full w-64 bg-white p-4 shadow-lg">
            <h4 className="mb-4 text-sm font-medium text-gray-500">목표 정보</h4>
            <div className="space-y-3">
              <div className="flex justify-between text-sm">
                <span className="text-gray-500">담당 주체</span>
                <span className="flex items-center gap-1">
                  <span className="h-5 w-5 rounded-full bg-gray-200" />
                  최연진
                </span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-500">사이클</span>
                <span>2025 상반기</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-500">목표 기간</span>
                <span>2025. 1. 1 ~ 6.</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-500">공개 범위</span>
                <span>일부에게 공개</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-500">참여 멤버</span>
                <span>정현준</span>
              </div>
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
            {tab.icon === "target" && (
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <circle cx="8" cy="8" r="6" stroke="currentColor" strokeWidth="1.5"/>
                <circle cx="8" cy="8" r="3" stroke="currentColor" strokeWidth="1.5"/>
                <circle cx="8" cy="8" r="1" fill="currentColor"/>
              </svg>
            )}
            {tab.icon === "edit" && (
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M11.5 2.5L13.5 4.5L5 13H3V11L11.5 2.5Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
              </svg>
            )}
            {tab.icon === "users" && (
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <circle cx="6" cy="5" r="2" stroke="currentColor" strokeWidth="1.5"/>
                <circle cx="10" cy="5" r="2" stroke="currentColor" strokeWidth="1.5"/>
                <path d="M2 14C2 11 4 10 6 10C7 10 8 10.5 8 10.5C8 10.5 9 10 10 10C12 10 14 11 14 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
            )}
            {tab.icon === "search" && (
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <circle cx="7" cy="7" r="4" stroke="currentColor" strokeWidth="1.5"/>
                <path d="M10 10L14 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
            )}
            {tab.label}
          </button>
        ))}
      </div>
    </section>
  );
}
