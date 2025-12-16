"use client";

// ============================================================================
// CUSTOMIZATION - 이 섹션의 값들을 수정하여 프로젝트에 맞게 조정하세요
// ============================================================================

/**
 * 커스텀 색상 (브랜드 컬러)
 */
const COLORS = {
  light: {
    accent: "#2196F3",
    accentHover: "#1976D2",
    background: "#FFFFFF",
    text: "#000000",
    subtext: "#666666",
    border: "#E5E5E5",
    tableBg: "#FFFFFF",
    sidebarBg: "#FFFFFF",
    dropdownBg: "#FFFFFF",
    gridLine: "#E0E0E0",
  },
  dark: {
    accent: "#60A5FA",
    accentHover: "#3B82F6",
    background: "#0A0A0A",
    text: "#FFFFFF",
    subtext: "#A0A0A0",
    border: "#333333",
    tableBg: "#1A1A1A",
    sidebarBg: "#1A1A1A",
    dropdownBg: "#1A1A1A",
    gridLine: "#333333",
  },
} as const;

/**
 * 사이드바 메뉴 항목
 */
const SIDEBAR_ITEMS = [
  { icon: "catalog", label: "Catalog model", active: true },
  { icon: "forms", label: "Forms", active: false },
  { icon: "scorecards", label: "Scorecards", active: false },
  { icon: "dashboards", label: "Dashboards", active: false },
  { icon: "plugins", label: "Plugins", active: false },
  { icon: "automations", label: "Automations", active: false },
  { icon: "permissions", label: "Permissions", active: false },
] as const;

/**
 * 드롭다운 컬럼 타입
 */
const COLUMN_TYPES = [
  { icon: "T", label: "String", color: "#F97316" },
  { icon: "#", label: "Number", color: "#3B82F6" },
  { icon: "check", label: "Boolean", color: "#22C55E" },
  { icon: "relation", label: "Relation", color: "#3B82F6" },
  { icon: "url", label: "URL", color: "#22C55E" },
] as const;

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { motion } from "motion/react";
import {
  Asterisk,
  FileText,
  Trophy,
  LayoutDashboard,
  Plug,
  Play,
  Shield,
  Plus,
  Type,
  Hash,
  CheckSquare,
  Link2,
  ArrowRightLeft,
} from "lucide-react";

interface SaaspoFeatureSectionsPortProps {
  mode?: "light" | "dark";
  title?: string;
  subtitle?: string;
}

// Icon mapping for sidebar
const iconMap: Record<string, React.ComponentType<{ className?: string; style?: React.CSSProperties }>> = {
  catalog: Asterisk,
  forms: FileText,
  scorecards: Trophy,
  dashboards: LayoutDashboard,
  plugins: Plug,
  automations: Play,
  permissions: Shield,
};

// Icon mapping for column types
const columnIconMap: Record<string, React.ComponentType<{ className?: string; style?: React.CSSProperties }>> = {
  T: Type,
  "#": Hash,
  check: CheckSquare,
  relation: ArrowRightLeft,
  url: Link2,
};

export default function SaaspoFeatureSectionsPort({
  mode = "light",
  title = "Everything you need to build a portal. Fast.",
  subtitle = "Build a catalog that provides each user with the context they need, according to your engineering DNA and developer experience needs.",
}: SaaspoFeatureSectionsPortProps) {
  const colors = COLORS[mode];
  const isDark = mode === "dark";

  return (
    <section
      className="relative w-full py-16 md:py-24 overflow-hidden"
      style={{ backgroundColor: colors.background }}
    >
      {/* Grid Pattern Background */}
      <div className="absolute inset-0 pointer-events-none">
        <svg width="100%" height="100%" className="opacity-30">
          <defs>
            <pattern
              id="grid-pattern"
              width="200"
              height="200"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 200 0 L 0 0 0 200"
                fill="none"
                stroke={colors.gridLine}
                strokeWidth="1"
                strokeDasharray="4 4"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid-pattern)" />
        </svg>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-16"
          style={{ color: colors.text }}
        >
          {title}
        </motion.h2>

        {/* Main Content */}
        <div className="relative flex flex-col lg:flex-row gap-6">
          {/* Sidebar */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: true }}
            className="w-full lg:w-64 flex-shrink-0"
          >
            <div
              className="rounded-lg border overflow-hidden"
              style={{
                backgroundColor: colors.sidebarBg,
                borderColor: colors.border,
              }}
            >
              {SIDEBAR_ITEMS.map((item, index) => {
                const IconComponent = iconMap[item.icon];
                return (
                  <div
                    key={index}
                    className={`flex items-center gap-3 px-4 py-4 border-b last:border-b-0 transition-colors relative ${
                      item.active
                        ? isDark
                          ? "bg-gray-800"
                          : "bg-gray-50"
                        : ""
                    }`}
                    style={{ borderColor: colors.border }}
                  >
                    {item.active && (
                      <div
                        className="absolute left-0 top-2 bottom-2 w-0.5 rounded-full"
                        style={{ backgroundColor: colors.text }}
                      />
                    )}
                    <IconComponent
                      className="w-5 h-5"
                      style={{ color: colors.text }}
                    />
                    <span
                      className="text-sm font-medium"
                      style={{ color: colors.text }}
                    >
                      {item.label}
                    </span>
                  </div>
                );
              })}
            </div>
          </motion.div>

          {/* Right Content */}
          <div className="flex-1 relative">
            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
              viewport={{ once: true }}
              className="text-center mb-8 max-w-xl mx-auto text-sm md:text-base"
              style={{ color: colors.subtext }}
            >
              {subtitle}
            </motion.p>

            {/* Table Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
              viewport={{ once: true }}
              className="rounded-xl border shadow-lg overflow-visible relative"
              style={{
                backgroundColor: colors.tableBg,
                borderColor: colors.border,
              }}
            >
              {/* Table Header */}
              <div className="px-5 py-4 border-b" style={{ borderColor: colors.border }}>
                <h3
                  className="text-lg font-semibold"
                  style={{ color: colors.text }}
                >
                  Software catalog
                </h3>
              </div>

              {/* Table Content */}
              <div className="p-4 relative">
                {/* Column Headers */}
                <div className="flex items-center gap-4 mb-4 pb-2 border-b" style={{ borderColor: colors.border }}>
                  <div className="w-8" />
                  <div className="flex-1 flex gap-4">
                    {[1, 2, 3, 4].map((i) => (
                      <div
                        key={i}
                        className="flex-1 h-2 rounded"
                        style={{ backgroundColor: isDark ? "#444" : "#E0E0E0" }}
                      />
                    ))}
                  </div>
                  {/* Plus Button */}
                  <button
                    className="w-8 h-8 rounded-full flex items-center justify-center text-white"
                    style={{ backgroundColor: colors.text }}
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>

                {/* Table Rows */}
                {[1, 2, 3, 4, 5].map((row) => (
                  <div
                    key={row}
                    className="flex items-center gap-4 py-3 border-b last:border-b-0"
                    style={{ borderColor: isDark ? "#333" : "#F0F0F0" }}
                  >
                    {/* Avatar/Checkbox */}
                    <div
                      className="w-8 h-8 rounded-full border-2"
                      style={{ borderColor: isDark ? "#444" : "#E0E0E0" }}
                    />
                    {/* Row Content */}
                    <div className="flex-1 flex gap-4 items-center">
                      <div
                        className="flex-1 h-3 rounded"
                        style={{ backgroundColor: isDark ? "#333" : "#E8E8E8" }}
                      />
                      <div
                        className="flex-1 h-3 rounded"
                        style={{ backgroundColor: isDark ? "#333" : "#E8E8E8" }}
                      />
                      {/* Pills indicator */}
                      {row % 2 !== 0 ? (
                        <div className="flex-1 flex gap-1">
                          {[1, 2, 3].map((p) => (
                            <div
                              key={p}
                              className="w-5 h-5 rounded-full border-2"
                              style={{ borderColor: isDark ? "#444" : "#D0D0D0" }}
                            />
                          ))}
                        </div>
                      ) : (
                        <div className="flex-1 flex gap-1">
                          {[1, 2].map((p) => (
                            <div
                              key={p}
                              className="w-5 h-5 rounded-full border-2"
                              style={{ borderColor: isDark ? "#444" : "#D0D0D0" }}
                            />
                          ))}
                        </div>
                      )}
                      {/* Status dot */}
                      <div
                        className="w-3 h-3 rounded-full"
                        style={{ backgroundColor: isDark ? "#444" : "#D0D0D0" }}
                      />
                    </div>
                  </div>
                ))}

                {/* Dropdown Menu - Positioned on top right */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 0.6, ease: "easeOut" }}
                  viewport={{ once: true }}
                  className="absolute -right-4 top-0 w-48 rounded-lg border shadow-xl overflow-hidden z-20"
                  style={{
                    backgroundColor: colors.dropdownBg,
                    borderColor: colors.border,
                  }}
                >
                  {/* Dropdown Header */}
                  <div
                    className="px-4 py-3 border-b text-sm font-medium"
                    style={{ borderColor: colors.border, color: colors.text }}
                  >
                    New column
                  </div>
                  {/* Dropdown Items */}
                  {COLUMN_TYPES.map((type, index) => {
                    const IconComponent = columnIconMap[type.icon];
                    return (
                      <div
                        key={index}
                        className={`flex items-center gap-3 px-4 py-2.5 transition-colors cursor-pointer ${
                          isDark ? "hover:bg-gray-800" : "hover:bg-gray-50"
                        }`}
                      >
                        <IconComponent
                          className="w-4 h-4"
                          style={{ color: type.color }}
                        />
                        <span
                          className="text-sm"
                          style={{ color: colors.text }}
                        >
                          {type.label}
                        </span>
                      </div>
                    );
                  })}
                </motion.div>

                {/* Platform Engineer Label */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.7, ease: "easeOut" }}
                  viewport={{ once: true }}
                  className="absolute right-16 bottom-16 px-3 py-1.5 rounded-full text-xs font-medium text-white shadow-lg"
                  style={{ backgroundColor: colors.accent }}
                >
                  Platform engineer
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
