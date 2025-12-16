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
    // Primary 액센트 (버튼, 링크 등)
    accent: "#6e1517", // Burgundy/Dark red
    accentHover: "#8a1c1f",
    // Button color (mauve/purple)
    button: "#9c8ca5",
    buttonHover: "#8a7a94",
    // Coral/Pink dot
    coral: "#fad6ca",
    // Tab active background
    tabActive: "#f6f5f1",
  },
  dark: {
    accent: "#a52528",
    accentHover: "#b82d31",
    button: "#9c8ca5",
    buttonHover: "#8a7a94",
    coral: "#fad6ca",
    tabActive: "#2a2827",
  },
} as const;

/**
 * 이미지 에셋
 * - path: 이미지 경로
 * - alt: 접근성용 대체 텍스트
 * - prompt: AI 이미지 재생성용 상세 프롬프트
 */
const IMAGES = {} as const;

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowUpRight, CornerDownRight } from "lucide-react";

// Product tabs data
const productTabs = [
  { id: "hcm", label: "HCM", icon: HandshakeIcon },
  { id: "field-operations", label: "Field Operations", icon: FieldIcon },
  { id: "expense-management", label: "Expense Management", icon: ExpenseIcon },
];

// Sub tabs data
const subTabs = [
  { id: "hris", label: "HRIS" },
  { id: "payroll", label: "Payroll" },
  { id: "recruiting", label: "Recruiting" },
  { id: "benefits", label: "Benefits" },
  { id: "learning", label: "Learning" },
];

// Tab content data
const tabContent = {
  hcm: {
    title: "Prioritize your people\nover paperwork.",
    description:
      "Build a stronger workforce with less work. Miter streamlines hiring, paying, developing and rewarding your team — so you can attract (and retain) top talent.",
    formTitle: "Finalize your offer",
    formFields: [
      { label: "Job title", value: "Journeyman Electrician" },
      { label: "Department", value: "Construction" },
      { label: "Sender first name", value: "Michael" },
      { label: "Start date", value: "Tue, Apr 1" },
      { label: "Hourly rate", value: "$", placeholder: true },
    ],
  },
  "field-operations": {
    title: "Manage your field\noperations seamlessly.",
    description:
      "Track time, jobs, and crew activities in real-time. Keep your field teams connected and productive with mobile-first tools designed for construction.",
    formTitle: "New job assignment",
    formFields: [
      { label: "Job name", value: "Downtown Office Tower" },
      { label: "Location", value: "123 Main Street" },
      { label: "Crew lead", value: "Sarah Johnson" },
      { label: "Start date", value: "Mon, Apr 7" },
      { label: "Budget", value: "$", placeholder: true },
    ],
  },
  "expense-management": {
    title: "Simplify expense\ntracking & approvals.",
    description:
      "Capture receipts, track spending, and streamline approvals. Get real-time visibility into project costs and keep your budget on track.",
    formTitle: "Submit expense",
    formFields: [
      { label: "Category", value: "Materials" },
      { label: "Vendor", value: "Home Depot" },
      { label: "Project", value: "Renovation Phase 2" },
      { label: "Date", value: "Wed, Mar 26" },
      { label: "Amount", value: "$", placeholder: true },
    ],
  },
};

// Icon components
function HandshakeIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7 11L12 6L15 9M17 13L12 18L9 15"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 6C10 4 7 4 5 6L3 8C2 9 2 11 3 12L6 15"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 18C14 20 17 20 19 18L21 16C22 15 22 13 21 12L18 9"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function FieldIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9 3L5 7M15 3L19 7"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M12 3V8"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M3 12H21"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M5 12V19C5 20 6 21 7 21H17C18 21 19 20 19 19V12"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 12V17"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

function ExpenseIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M19 5H5C3.89543 5 3 5.89543 3 7V17C3 18.1046 3.89543 19 5 19H19C20.1046 19 21 18.1046 21 17V7C21 5.89543 20.1046 5 19 5Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3 10H21"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M7 15H10"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

interface SaaspoFeatureSectionsMiterProps {
  mode?: "light" | "dark";
  badge?: string;
  title?: string;
  activeProductTab?: string;
  activeSubTab?: string;
  customerStoryLabel?: string;
  customerStoryLink?: string;
}

export default function SaaspoFeatureSectionsMiter({
  mode = "light",
  badge = "PRODUCTS",
  title = "Connect your people,\nprojects, and payments.",
  activeProductTab = "hcm",
  activeSubTab = "hris",
  customerStoryLabel = "CUSTOMER STORY",
  customerStoryLink = "How a California GC streamlines prevailing wage with Miter",
}: SaaspoFeatureSectionsMiterProps) {
  const colors = COLORS[mode];
  const [selectedProductTab, setSelectedProductTab] = useState(activeProductTab);
  const [selectedSubTab, setSelectedSubTab] = useState(activeSubTab);

  const currentContent =
    tabContent[selectedProductTab as keyof typeof tabContent] || tabContent.hcm;

  return (
    <section
      className={`relative w-full py-16 md:py-24 ${
        mode === "dark" ? "bg-gray-950" : "bg-white"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Badge */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className={`text-xs font-semibold uppercase tracking-wider ${
            mode === "dark" ? "text-gray-400" : "text-gray-500"
          }`}
        >
          {badge}
        </motion.p>

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className={`mt-4 whitespace-pre-line text-4xl font-medium tracking-tight md:text-5xl lg:text-[3.5rem] ${
            mode === "dark" ? "text-white" : "text-gray-900"
          }`}
          style={{ lineHeight: 1.1 }}
        >
          {title}
        </motion.h2>

        {/* Product Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-12 flex flex-col gap-0 sm:flex-row"
        >
          {productTabs.map((tab) => {
            const isActive = selectedProductTab === tab.id;
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setSelectedProductTab(tab.id)}
                className={`flex flex-1 items-center justify-center gap-3 px-6 py-4 text-sm font-medium transition-all duration-300 ${
                  isActive
                    ? mode === "dark"
                      ? "bg-gray-800 text-white"
                      : "text-gray-900"
                    : mode === "dark"
                      ? "bg-transparent text-gray-400 hover:text-gray-200"
                      : "bg-transparent text-gray-500 hover:text-gray-700"
                }`}
                style={{
                  backgroundColor: isActive ? colors.tabActive : "transparent",
                }}
              >
                <Icon className="h-5 w-5" />
                {tab.label}
              </button>
            );
          })}
        </motion.div>

        {/* Main Content Area */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className={`relative mt-0 overflow-hidden border border-dashed ${
            mode === "dark" ? "border-gray-700" : "border-gray-300"
          }`}
        >
          <div className="grid lg:grid-cols-2">
            {/* Left Content */}
            <div className="flex flex-col justify-between p-8 md:p-12 lg:p-16">
              <div>
                {/* HCM Label with dot */}
                <div className="mb-8 flex items-center gap-2">
                  <span
                    className="h-3 w-3 rounded-full"
                    style={{ backgroundColor: colors.coral }}
                  />
                  <span
                    className={`text-sm font-medium ${
                      mode === "dark" ? "text-gray-300" : "text-gray-700"
                    }`}
                  >
                    {productTabs.find((t) => t.id === selectedProductTab)?.label ||
                      "HCM"}
                  </span>
                </div>

                {/* Title */}
                <AnimatePresence mode="wait">
                  <motion.h3
                    key={selectedProductTab + "-title"}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                    className={`whitespace-pre-line text-3xl font-medium tracking-tight md:text-4xl ${
                      mode === "dark" ? "text-white" : "text-gray-900"
                    }`}
                    style={{ lineHeight: 1.2 }}
                  >
                    {currentContent.title}
                  </motion.h3>
                </AnimatePresence>

                {/* Description */}
                <AnimatePresence mode="wait">
                  <motion.p
                    key={selectedProductTab + "-desc"}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3, delay: 0.1 }}
                    className={`mt-6 max-w-md text-base leading-relaxed ${
                      mode === "dark" ? "text-gray-400" : "text-gray-600"
                    }`}
                  >
                    {currentContent.description}
                  </motion.p>
                </AnimatePresence>

                {/* Learn more link */}
                <motion.a
                  href="#"
                  className={`mt-8 inline-flex items-center gap-2 text-sm font-medium ${
                    mode === "dark" ? "text-white" : "text-gray-900"
                  } transition-colors hover:opacity-70`}
                >
                  <CornerDownRight className="h-4 w-4" />
                  Learn more
                </motion.a>
              </div>

              {/* Sub Tabs */}
              <div className="mt-12 flex flex-wrap gap-4 lg:mt-0">
                {subTabs.map((tab, index) => {
                  const isActive = selectedSubTab === tab.id;
                  return (
                    <button
                      key={tab.id}
                      onClick={() => setSelectedSubTab(tab.id)}
                      className={`relative text-sm transition-colors ${
                        isActive
                          ? mode === "dark"
                            ? "font-medium text-white"
                            : "font-medium text-gray-900"
                          : mode === "dark"
                            ? "text-gray-500 hover:text-gray-300"
                            : "text-gray-400 hover:text-gray-600"
                      }`}
                    >
                      {index === 0 && (
                        <span className="absolute -left-3 top-1/2 -translate-y-1/2 text-gray-300">
                          `
                        </span>
                      )}
                      {tab.label}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Right Content - Form UI */}
            <div className="relative">
              {/* Burgundy Background Decoration */}
              <div
                className="absolute inset-0"
                style={{ backgroundColor: colors.accent }}
              >
                {/* Diagonal pattern overlay */}
                <div
                  className="absolute inset-0 opacity-10"
                  style={{
                    backgroundImage: `repeating-linear-gradient(
                      45deg,
                      transparent,
                      transparent 10px,
                      rgba(255,255,255,0.1) 10px,
                      rgba(255,255,255,0.1) 20px
                    )`,
                  }}
                />
                {/* Geometric shapes */}
                <div
                  className="absolute right-0 top-0 h-48 w-48 opacity-20"
                  style={{
                    background:
                      "linear-gradient(135deg, transparent 50%, rgba(255,255,255,0.1) 50%)",
                  }}
                />
                <div
                  className="absolute bottom-0 left-0 h-32 w-full opacity-30"
                  style={{
                    background:
                      "linear-gradient(0deg, rgba(255,255,255,0.1) 0%, transparent 100%)",
                  }}
                />
              </div>

              {/* Form Card */}
              <div className="relative p-8 md:p-12 lg:p-16">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={selectedProductTab + "-form"}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.4 }}
                    className="ml-auto max-w-sm rounded-lg bg-white p-6 shadow-xl"
                  >
                    {/* Form Header */}
                    <div className="mb-1 flex items-center justify-between text-xs text-gray-400">
                      <div className="flex items-center gap-2">
                        <span>Format</span>
                        <span className="text-gray-300">|</span>
                        <span>Heading 4</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="font-bold">B</span>
                        <span className="italic">I</span>
                        <span className="underline">A</span>
                      </div>
                    </div>

                    {/* Form Title */}
                    <h4 className="mb-6 text-lg font-medium text-gray-900">
                      {currentContent.formTitle}
                    </h4>

                    {/* Form Fields */}
                    <div className="space-y-4">
                      {currentContent.formFields.map((field, index) => (
                        <div key={index}>
                          <label className="mb-1 block text-xs text-gray-500">
                            {field.label}
                          </label>
                          <div
                            className={`border-b border-gray-200 pb-2 text-sm ${
                              field.placeholder ? "text-gray-400" : "text-gray-900"
                            }`}
                          >
                            {field.value}
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Continue Button */}
                    <button
                      className="mt-8 w-full rounded-full px-6 py-3 text-sm font-medium text-white transition-colors"
                      style={{
                        backgroundColor: colors.button,
                      }}
                      onMouseEnter={(e) =>
                        (e.currentTarget.style.backgroundColor =
                          colors.buttonHover)
                      }
                      onMouseLeave={(e) =>
                        (e.currentTarget.style.backgroundColor = colors.button)
                      }
                    >
                      Continue
                    </button>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Bottom bar decoration */}
              <div
                className="absolute bottom-0 left-0 right-0 h-16"
                style={{ backgroundColor: colors.accent }}
              >
                <div
                  className="absolute inset-0 opacity-20"
                  style={{
                    backgroundImage: `repeating-linear-gradient(
                      45deg,
                      transparent,
                      transparent 5px,
                      rgba(255,255,255,0.1) 5px,
                      rgba(255,255,255,0.1) 10px
                    )`,
                  }}
                />
              </div>
            </div>
          </div>
        </motion.div>

        {/* Customer Story */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className={`mt-8 flex flex-col items-start gap-3 border-b pb-8 sm:flex-row sm:items-center ${
            mode === "dark" ? "border-gray-800" : "border-gray-200"
          }`}
        >
          <span
            className={`text-xs font-semibold uppercase tracking-wider ${
              mode === "dark" ? "text-gray-400" : "text-gray-900"
            }`}
          >
            {customerStoryLabel}
          </span>
          <a
            href="#"
            className={`group inline-flex items-center gap-2 text-sm ${
              mode === "dark"
                ? "text-gray-400 hover:text-white"
                : "text-gray-500 hover:text-gray-900"
            } transition-colors`}
          >
            {customerStoryLink}
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </a>
        </motion.div>
      </div>

      {/* Diagonal line decorations in background */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          className={`absolute -left-20 top-0 h-full w-px rotate-[15deg] ${
            mode === "dark" ? "bg-gray-800" : "bg-gray-100"
          }`}
        />
        <div
          className={`absolute -right-20 top-0 h-full w-px -rotate-[15deg] ${
            mode === "dark" ? "bg-gray-800" : "bg-gray-100"
          }`}
        />
      </div>
    </section>
  );
}
