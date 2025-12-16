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
    accent: "#7c3aed",
    accentHover: "#6d28d9",
    // 배경색
    background: "#f5f5f4",
    // 배지 테두리
    badgeBorder: "#c4b5fd",
  },
  dark: {
    accent: "#a78bfa",
    accentHover: "#8b5cf6",
    background: "#1c1c1c",
    badgeBorder: "#6d28d9",
  },
} as const;

/**
 * 이미지 에셋
 */
const IMAGES = {} as const;

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { MapPin, Search, FileText, Database, Sparkles } from "lucide-react";

interface TabItem {
  id: string;
  label: string;
  icon: React.ReactNode;
  title: string;
  description: string[];
  buttonText: string;
}

interface SaaspoFeatureSectionsAdoraProps {
  mode?: "light" | "dark";
  badge?: string;
  heading?: string;
  tabs?: TabItem[];
  defaultActiveTab?: string;
}

const defaultTabs: TabItem[] = [
  {
    id: "user-journey",
    label: "User-journey mapping",
    icon: <MapPin className="h-4 w-4" />,
    title: "User-journey mapping",
    description: [
      "Visualize how users navigate through your product. Identify key touchpoints and optimize the experience.",
      "Track user paths from signup to conversion, understanding every step of their journey with your product.",
    ],
    buttonText: "Learn more",
  },
  {
    id: "uncover-friction",
    label: "Uncover Friction",
    icon: <Search className="h-4 w-4" />,
    title: "Uncover Friction",
    description: [
      "Discover where users get stuck or abandon your product. Find and fix pain points before they impact growth.",
      "Real-time analytics help you identify friction points and optimize user flows for better retention.",
    ],
    buttonText: "Learn more",
  },
  {
    id: "product-documentation",
    label: "Product Documentation",
    icon: <FileText className="h-4 w-4" />,
    title: "Product documentation",
    description: [
      "Your entire product experience mapped for you. Give your team live product access—no static files or demo logins.",
      "Embed Adora in Notion or Confluence, or give them direct access with unlimited seats in Adora. Shared product knowledge leads to better decision making.",
    ],
    buttonText: "Learn more",
  },
  {
    id: "source-of-truth",
    label: "Source of Truth",
    icon: <Database className="h-4 w-4" />,
    title: "Source of Truth",
    description: [
      "One central place for all product knowledge. Keep everyone aligned with the latest product state.",
      "Automatically updated documentation ensures your team always has access to accurate, current product information.",
    ],
    buttonText: "Learn more",
  },
];

function TabButton({
  tab,
  isActive,
  accentColor,
  onClick,
}: {
  tab: TabItem;
  isActive: boolean;
  accentColor: string;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className="relative flex flex-1 items-center justify-center gap-2 px-4 py-3 text-sm font-medium transition-colors"
      style={{
        color: isActive ? accentColor : "#6b7280",
      }}
    >
      <span className="flex items-center gap-2">
        {tab.icon}
        <span className="hidden sm:inline">{tab.label}</span>
      </span>
      {isActive && (
        <motion.div
          layoutId="activeTabIndicator"
          className="absolute bottom-0 left-0 right-0 h-0.5"
          style={{ backgroundColor: accentColor }}
          initial={false}
          transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
        />
      )}
    </button>
  );
}

function MockupPreview() {
  return (
    <div className="relative">
      {/* Main Mockup Container */}
      <div className="relative mx-auto w-full max-w-lg">
        {/* Background decorative element - mobile phone */}
        <div className="absolute -left-4 top-8 h-48 w-24 rounded-2xl bg-gradient-to-br from-emerald-400 to-teal-500 opacity-80 shadow-lg sm:-left-8 sm:h-64 sm:w-32" />

        {/* Main browser window */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="relative rounded-xl border border-gray-200 bg-white shadow-xl"
        >
          {/* Browser header */}
          <div className="flex items-center gap-2 border-b border-gray-100 px-4 py-3">
            <div className="flex gap-1.5">
              <div className="h-3 w-3 rounded-full bg-red-400" />
              <div className="h-3 w-3 rounded-full bg-yellow-400" />
              <div className="h-3 w-3 rounded-full bg-green-400" />
            </div>
            <div className="ml-2 flex-1 rounded bg-gray-100 px-3 py-1 text-xs text-gray-400">
              notion.com
            </div>
          </div>

          {/* Content */}
          <div className="p-4 sm:p-6">
            {/* Notion-style header */}
            <div className="mb-4 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gray-100 text-lg font-bold">
                N
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">
                  Wander Onboarding Journeys
                </h4>
                <p className="text-xs text-gray-500">January 9, 2025 - @Javier</p>
              </div>
            </div>

            {/* Journey info */}
            <div className="mb-4 rounded-lg bg-gray-50 p-3">
              <p className="text-sm font-medium text-gray-700">
                Our team owns these Journeys
              </p>
              <p className="text-xs text-gray-500">Core onboarding flow</p>
            </div>

            {/* Cards grid */}
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
              {[
                { name: "PRIYA", color: "bg-orange-100 text-orange-600" },
                { name: "JAVIER", color: "bg-amber-100 text-amber-600" },
                { name: "Homepage", color: "bg-blue-100 text-blue-600" },
              ].map((item, idx) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.2 + idx * 0.1, duration: 0.3 }}
                  className="rounded-lg border border-gray-100 bg-white p-2 shadow-sm"
                >
                  <div
                    className={`mb-2 inline-block rounded px-2 py-0.5 text-xs font-medium ${item.color}`}
                  >
                    {item.name}
                  </div>
                  <div className="h-8 rounded bg-gray-100" />
                </motion.div>
              ))}
            </div>

            {/* Pricing row */}
            <div className="mt-4 flex gap-2">
              {["$0", "$15", "$25"].map((price, idx) => (
                <motion.div
                  key={price}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + idx * 0.1, duration: 0.3 }}
                  className="flex-1 rounded-lg border border-gray-100 bg-white p-2 text-center text-sm font-semibold text-gray-700"
                >
                  {price}
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Side decorative card */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="absolute -right-4 top-12 w-24 rounded-lg border border-gray-200 bg-white p-2 shadow-lg sm:-right-8 sm:w-32"
        >
          <div className="mb-2 text-xs font-medium text-gray-700">
            Adventure Selector
          </div>
          <div className="space-y-1">
            <div className="h-2 w-full rounded bg-gray-100" />
            <div className="h-2 w-3/4 rounded bg-gray-100" />
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default function SaaspoFeatureSectionsAdora({
  mode = "light",
  badge = "USE CASES",
  heading = "Empowering user-\nobsessed teams",
  tabs = defaultTabs,
  defaultActiveTab = "product-documentation",
}: SaaspoFeatureSectionsAdoraProps) {
  const colors = COLORS[mode];
  const [activeTab, setActiveTab] = useState(defaultActiveTab);

  const currentTab = tabs.find((tab) => tab.id === activeTab) || tabs[0];

  return (
    <section
      className="w-full px-4 py-16 sm:px-6 lg:px-8"
      style={{ backgroundColor: colors.background }}
    >
      <div className="mx-auto max-w-6xl">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-6 flex justify-center"
        >
          <div
            className="inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-sm font-medium"
            style={{
              borderColor: colors.badgeBorder,
              color: colors.accent,
            }}
          >
            <Sparkles className="h-4 w-4" />
            {badge}
          </div>
        </motion.div>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-10 whitespace-pre-line text-center text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl md:text-5xl"
        >
          {heading}
        </motion.h2>

        {/* Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="relative mb-12"
        >
          <div className="flex border-b border-gray-200">
            {tabs.map((tab) => (
              <TabButton
                key={tab.id}
                tab={tab}
                isActive={activeTab === tab.id}
                accentColor={colors.accent}
                onClick={() => setActiveTab(tab.id)}
              />
            ))}
          </div>
        </motion.div>

        {/* Content Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8 lg:p-12"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12"
            >
              {/* Left: Text Content */}
              <div>
                <h3 className="mb-4 text-2xl font-bold text-gray-900 sm:text-3xl">
                  {currentTab.title}
                </h3>
                {currentTab.description.map((paragraph, idx) => (
                  <p
                    key={idx}
                    className="mb-4 text-base leading-relaxed text-gray-600"
                  >
                    {paragraph}
                  </p>
                ))}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="mt-4 rounded-full px-6 py-3 text-sm font-medium text-white transition-colors"
                  style={{
                    backgroundColor: colors.accent,
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = colors.accentHover;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = colors.accent;
                  }}
                >
                  {currentTab.buttonText}
                </motion.button>
              </div>

              {/* Right: Mockup Preview */}
              <div className="relative">
                <MockupPreview />
              </div>
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
