"use client";

// ============================================================================
// CUSTOMIZATION
// ============================================================================

const COLORS = {
  light: {
    accent: "#FFD600", // Yellow
    accentLight: "#FFF9C4",
  },
  dark: {
    accent: "#FFEA00",
    accentLight: "#F9A825",
  },
} as const;

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { useState } from "react";

interface FlexTeamFeature5Props {
  mode?: "light" | "dark";
}

const TABS = [
  { id: "payroll", label: "급여정산", icon: "calculator" },
  { id: "yearend", label: "연말정산", icon: "calendar" },
];

export default function FlexTeamFeature5({
  mode = "light",
}: FlexTeamFeature5Props) {
  const [activeTab, setActiveTab] = useState("payroll");
  const colors = COLORS[mode];

  return (
    <section className="w-full bg-white px-8 py-20 lg:px-16">
      {/* Section Header */}
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-4">
          <h2 className="text-3xl font-bold text-gray-900 lg:text-4xl">
            안정적인 급여 운영을 위해
          </h2>
          <div
            className="flex h-8 w-8 items-center justify-center rounded-full border-4"
            style={{ borderColor: colors.accent }}
          />
        </div>
        <p className="text-gray-600 mb-2">
          따로 신경 쓰지 않아도
        </p>
        <p className="text-gray-600 mb-6">
          매월 급여를 정확하게 정산합니다.
        </p>
        <a
          href="/payroll"
          className="inline-flex items-center gap-1 text-sm font-medium text-[#00C853]"
        >
          자세히 알아보기
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M6 12L10 8L6 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </a>
      </div>

      {/* Dashboard Preview */}
      <div className="relative rounded-2xl bg-gradient-to-br from-[#FFFDE7] to-[#FFF9C4] p-4 shadow-lg">
        <div className="flex gap-4">
          {/* Main Payslip */}
          <div className="relative flex-1 overflow-hidden rounded-lg bg-white p-6 shadow-sm">
            <h3 className="mb-2 text-xl font-bold text-gray-900">9월 급여명세서</h3>
            <p className="mb-6 text-sm text-gray-500">2024년 9월 25일</p>

            <div className="mb-4 flex justify-between">
              <div>
                <p className="text-2xl font-bold text-gray-900">4,890,000원</p>
                <p className="text-sm text-gray-500">실수령 77%</p>
              </div>
              <div className="text-right">
                <p className="text-lg font-medium text-gray-700">1,422,000원</p>
                <p className="text-sm text-gray-500">공제 23%</p>
              </div>
            </div>

            {/* Progress Bar */}
            <div className="mb-6 h-3 overflow-hidden rounded-full bg-gray-100">
              <div className="h-full w-3/4 rounded-full bg-indigo-500" />
            </div>

            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-600">지급금액</span>
                <span className="font-medium">6,312,000원</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">공제금액</span>
                <span className="font-medium">1,422,000원</span>
              </div>
              <div className="mt-4 flex justify-between border-t border-dashed pt-4">
                <span className="text-gray-600">실수령액</span>
                <span className="text-xl font-bold">4,890,000원</span>
              </div>
            </div>
          </div>

          {/* Mobile Preview */}
          <div className="relative hidden w-64 shrink-0 lg:block">
            <div className="relative overflow-hidden rounded-[2rem] bg-white shadow-xl">
              {/* Phone Frame */}
              <div className="relative aspect-[9/19] w-full bg-white">
                {/* Notch */}
                <div className="absolute left-1/2 top-2 h-6 w-24 -translate-x-1/2 rounded-full bg-black" />

                {/* Screen Content */}
                <div className="absolute inset-4 top-10 overflow-hidden rounded-lg bg-white">
                  <div className="p-4">
                    <p className="mb-1 text-xs text-gray-500">2024년 9월 급여명세서</p>
                    <p className="mb-4 text-xl font-bold">4,890,000원</p>

                    <div className="space-y-2 text-xs">
                      <div className="flex justify-between">
                        <span className="text-gray-600">지급 총액</span>
                        <span className="font-medium text-[#00C853]">6,312,000원</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">기본급</span>
                        <span>4,250,000원</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">고정초과근무수당</span>
                        <span>456,780원</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">식비</span>
                        <span>200,000원</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">연장수당</span>
                        <span>760,000원</span>
                      </div>
                    </div>
                  </div>
                </div>
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
            {tab.icon === "calculator" && (
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <rect x="3" y="2" width="10" height="12" rx="1" stroke="currentColor" strokeWidth="1.5"/>
                <path d="M5 5H11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                <path d="M5 8H7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                <path d="M9 8H11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                <path d="M5 11H7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                <path d="M9 11H11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
            )}
            {tab.icon === "calendar" && (
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <rect x="2" y="3" width="12" height="11" rx="1" stroke="currentColor" strokeWidth="1.5"/>
                <path d="M2 6H14" stroke="currentColor" strokeWidth="1.5"/>
                <path d="M5 2V4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                <path d="M11 2V4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
            )}
            {tab.label}
          </button>
        ))}
      </div>
    </section>
  );
}
