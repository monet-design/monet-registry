"use client";

// ============================================================================
// CUSTOMIZATION - 이 섹션의 값들을 수정하여 프로젝트에 맞게 조정하세요
// ============================================================================

/**
 * 커스텀 색상 (브랜드 컬러)
 */
const COLORS = {
  background: "#0A0A0A",
  cardBackground: "#131313",
  featureTitleYellow: "#D4A853",
  accentGreen: "#22C55E",
  accentRed: "#EF4444",
  accentPurple: "#8B5CF6",
  accentYellow: "#FBBF24",
  accentBlue: "#3B82F6",
  borderGray: "#2A2A2A",
  textMuted: "#6B7280",
  textSecondary: "#9CA3AF",
} as const;

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { motion } from "motion/react";
import { ArrowUp, ArrowDown, ChevronRight } from "lucide-react";

interface Feature {
  title: string;
  description: string;
}

interface SaaspoFeatureSectionsDevrevProps {
  title?: string;
  subtitle?: string;
  features?: Feature[];
  primaryButtonText?: string;
  secondaryButtonText?: string;
  onPrimaryClick?: () => void;
  onSecondaryClick?: () => void;
}

const defaultFeatures: Feature[] = [
  {
    title: "Detect at-risk customers",
    description:
      "Get a real-time view into customer sentiment and accounts at risk to proactively reduce churn",
  },
  {
    title: "Quantify customer impact",
    description:
      "Identify your top customers for each product part to connect product planning to revenue impact",
  },
  {
    title: "Monitor product health",
    description:
      "Measure performance of development with a consolidated view of bugs fixed, issues resolved and pace of work",
  },
  {
    title: "Track development velocity",
    description:
      "Make data-driven decisions on resource allocation and sprints to accelerate shipping velocity",
  },
];

// Avatar component for customer displays
function Avatar({
  color,
  size = "sm",
}: {
  color: string;
  size?: "sm" | "md";
}) {
  const sizeClasses = size === "sm" ? "w-5 h-5" : "w-6 h-6";
  return (
    <div
      className={`${sizeClasses} rounded-full`}
      style={{ backgroundColor: color }}
    />
  );
}

// Avatar group component
function AvatarGroup({ colors }: { colors: string[] }) {
  return (
    <div className="flex -space-x-1.5">
      {colors.map((color, idx) => (
        <Avatar key={idx} color={color} />
      ))}
    </div>
  );
}

// Progress bar component
function ProgressBar({
  value,
  color,
}: {
  value: number;
  color: string;
}) {
  return (
    <div className="flex items-center gap-2">
      <div className="w-12 h-1.5 bg-gray-800 rounded-full overflow-hidden">
        <div
          className="h-full rounded-full"
          style={{ width: `${value}%`, backgroundColor: color }}
        />
      </div>
      <span className="text-xs text-gray-400">{value}%</span>
    </div>
  );
}

// Metric card component
function MetricCard({
  icon,
  label,
  value,
  change,
  isPositive,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  change: string;
  isPositive: boolean;
}) {
  return (
    <div className="flex flex-col gap-1 p-3 rounded-lg bg-[#1A1A1A]">
      <div className="flex items-center gap-2 text-gray-400">
        {icon}
        <span className="text-xs">{label}</span>
      </div>
      <div className="flex items-center gap-2">
        <span className="text-lg font-semibold text-white">{value}</span>
        <span
          className={`flex items-center text-xs ${isPositive ? "text-green-500" : "text-red-500"}`}
        >
          {isPositive ? (
            <ArrowUp className="w-3 h-3" />
          ) : (
            <ArrowDown className="w-3 h-3" />
          )}
          {change}
        </span>
      </div>
    </div>
  );
}

// Dashboard mockup component
function DashboardMockup() {
  const customerRequests = [
    {
      name: "Threads",
      progress: 99,
      color: COLORS.accentGreen,
      tickets: "23 Tickets",
      avatars: ["#F59E0B", "#EF4444", "#8B5CF6", "#3B82F6"],
      extra: "+2",
    },
    {
      name: "Sprint Groups",
      progress: 98,
      color: COLORS.accentGreen,
      tickets: "12 Tickets",
      avatars: ["#EC4899", "#8B5CF6", "#3B82F6"],
      extra: "",
    },
    {
      name: "KanBan View",
      progress: 95,
      color: COLORS.accentGreen,
      tickets: "8 Tickets",
      avatars: ["#F59E0B", "#EF4444", "#8B5CF6", "#22C55E"],
      extra: "+1",
    },
    {
      name: "CSV Export",
      progress: 92,
      color: COLORS.accentYellow,
      tickets: "19 Tickets",
      avatars: ["#EC4899", "#F59E0B", "#8B5CF6", "#3B82F6", "#22C55E"],
      extra: "+1",
    },
  ];

  const highImpactParts = [
    {
      name: "Third-party payment",
      tickets: "23 Tickets",
      ticketColor: COLORS.accentGreen,
      avatars: ["#F59E0B", "#EF4444", "#8B5CF6"],
      extra: "+1",
    },
    {
      name: "Order management",
      tickets: "12 Tickets",
      ticketColor: COLORS.accentGreen,
      avatars: ["#EC4899", "#8B5CF6"],
      extra: "",
    },
    {
      name: "Secure API",
      tickets: "8 Tickets",
      ticketColor: COLORS.accentYellow,
      avatars: ["#F59E0B", "#EF4444", "#8B5CF6", "#3B82F6"],
      extra: "+1",
    },
    {
      name: "Shipping",
      tickets: "19 Tickets",
      ticketColor: COLORS.accentRed,
      avatars: ["#EC4899", "#F59E0B"],
      extra: "+2",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.3 }}
      viewport={{ once: true }}
      className="w-full rounded-xl border border-[#2A2A2A] bg-[#111111] overflow-hidden shadow-2xl"
    >
      {/* Dashboard Header with Sidebar */}
      <div className="flex">
        {/* Sidebar */}
        <div className="w-10 bg-[#0D0D0D] border-r border-[#2A2A2A] py-3 flex flex-col items-center gap-3">
          <div className="w-5 h-5 rounded bg-[#2A2A2A]" />
          <div className="w-5 h-5 rounded bg-[#1A1A1A] flex items-center justify-center">
            <div className="w-2 h-2 rounded-full bg-gray-600" />
          </div>
          <div className="w-5 h-5 rounded bg-[#1A1A1A]" />
          <div className="w-5 h-5 rounded bg-[#1A1A1A]" />
          <div className="flex-1" />
          <div className="w-5 h-5 rounded bg-[#1A1A1A]" />
          <div className="w-5 h-5 rounded bg-[#1A1A1A]" />
        </div>

        {/* Main Content */}
        <div className="flex-1 p-4">
          {/* Metrics Row */}
          <div className="grid grid-cols-4 gap-3 mb-4">
            <MetricCard
              icon={<div className="w-3 h-3 rounded-full bg-green-500" />}
              label="Open Requests"
              value="638"
              change="4%"
              isPositive={true}
            />
            <MetricCard
              icon={<div className="w-3 h-3 rounded-full bg-purple-500" />}
              label="Requests Delivered"
              value="65"
              change="16%"
              isPositive={true}
            />
            <MetricCard
              icon={<div className="w-3 h-3 rounded-full bg-blue-500" />}
              label="Average Resolution Time"
              value="1 hr 32 min"
              change="12%"
              isPositive={false}
            />
            <MetricCard
              icon={<div className="w-3 h-3 rounded-full bg-yellow-500" />}
              label="Customers Impacted"
              value="30"
              change="18%"
              isPositive={true}
            />
          </div>

          {/* Charts Row */}
          <div className="grid grid-cols-2 gap-4 mb-4">
            {/* Bar Chart - High Impact Customer Requests */}
            <div className="bg-[#0D0D0D] rounded-lg p-3 border border-[#1A1A1A]">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-xs font-medium text-white">
                  High-Impact Customer Requests
                </span>
                <div className="w-3 h-3 rounded bg-gray-700" />
              </div>
              <div className="h-32 flex items-end justify-around gap-2">
                {[45, 60, 35, 75, 50, 65, 40].map((height, idx) => (
                  <div key={idx} className="flex flex-col items-center gap-1">
                    <div
                      className="w-6 rounded-t"
                      style={{
                        height: `${height}%`,
                        backgroundColor:
                          idx === 3
                            ? COLORS.accentYellow
                            : COLORS.accentPurple,
                      }}
                    />
                  </div>
                ))}
              </div>
              <div className="flex justify-around mt-2 text-[10px] text-gray-500">
                <span>Sept 25</span>
                <span>Oct 2</span>
                <span>Oct 9</span>
                <span>Oct 16</span>
              </div>
              <div className="flex items-center gap-4 mt-2 text-[10px]">
                <div className="flex items-center gap-1">
                  <div className="w-2 h-2 rounded-sm bg-purple-500" />
                  <span className="text-gray-400">Delivered</span>
                </div>
                <div className="flex items-center gap-1">
                  <div className="w-2 h-2 rounded-sm bg-purple-900" />
                  <span className="text-gray-400">Not Delivered</span>
                </div>
              </div>
            </div>

            {/* Customer Requests Table */}
            <div className="bg-[#0D0D0D] rounded-lg p-3 border border-[#1A1A1A]">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-medium text-white">
                    Customer Requests
                  </span>
                  <div className="w-3 h-3 rounded bg-gray-700" />
                </div>
                <div className="flex items-center gap-2 text-[10px]">
                  <span className="text-green-500">$ High Value</span>
                  <span className="text-red-500">Negative</span>
                </div>
              </div>
              <div className="space-y-2">
                {customerRequests.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-center justify-between py-1"
                  >
                    <span className="text-xs text-gray-300 w-24">
                      {item.name}
                    </span>
                    <ProgressBar value={item.progress} color={item.color} />
                    <span className="text-[10px] text-gray-500 w-16">
                      {item.tickets}
                    </span>
                    <div className="flex items-center gap-1">
                      <AvatarGroup colors={item.avatars} />
                      {item.extra && (
                        <span className="text-[10px] text-gray-500">
                          {item.extra}
                        </span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex items-center justify-between mt-2 pt-2 border-t border-[#2A2A2A]">
                <span className="text-[10px] text-gray-500">
                  1-4 of 20 items &nbsp; 1 of 5 pages
                </span>
                <span className="text-[10px] text-blue-400 flex items-center">
                  Next <ChevronRight className="w-3 h-3" />
                </span>
              </div>
            </div>
          </div>

          {/* Bottom Row */}
          <div className="grid grid-cols-2 gap-4">
            {/* High Impact Parts Table */}
            <div className="bg-[#0D0D0D] rounded-lg p-3 border border-[#1A1A1A]">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-xs font-medium text-white">
                  High-Impact Parts
                </span>
                <div className="w-3 h-3 rounded bg-gray-700" />
                <div className="flex items-center gap-2 text-[10px] ml-auto">
                  <span className="px-1.5 py-0.5 rounded bg-purple-500/20 text-purple-400">
                    Features
                  </span>
                  <span className="text-green-500">$ High Value</span>
                </div>
              </div>
              <div className="space-y-2">
                <div className="grid grid-cols-4 text-[10px] text-gray-500 pb-1 border-b border-[#2A2A2A]">
                  <span>Part</span>
                  <span>Open Requests</span>
                  <span>Customers</span>
                  <span></span>
                </div>
                {highImpactParts.map((item, idx) => (
                  <div
                    key={idx}
                    className="grid grid-cols-4 items-center py-1"
                  >
                    <div className="flex items-center gap-1.5">
                      <div className="w-2 h-2 rounded-full bg-purple-500" />
                      <span className="text-xs text-gray-300">{item.name}</span>
                    </div>
                    <span
                      className="text-[10px] px-1.5 py-0.5 rounded w-fit"
                      style={{
                        backgroundColor: `${item.ticketColor}20`,
                        color: item.ticketColor,
                      }}
                    >
                      {item.tickets}
                    </span>
                    <div className="flex items-center gap-1">
                      <AvatarGroup colors={item.avatars} />
                      {item.extra && (
                        <span className="text-[10px] text-gray-500">
                          {item.extra}
                        </span>
                      )}
                    </div>
                    <div></div>
                  </div>
                ))}
              </div>
              <div className="flex items-center justify-between mt-2 pt-2 border-t border-[#2A2A2A]">
                <span className="text-[10px] text-gray-500">
                  1-4 of 32 items &nbsp; 1 of 6 pages
                </span>
                <span className="text-[10px] text-blue-400 flex items-center">
                  Next <ChevronRight className="w-3 h-3" />
                </span>
              </div>
            </div>

            {/* Line Chart - Resolution Time */}
            <div className="bg-[#0D0D0D] rounded-lg p-3 border border-[#1A1A1A]">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-xs font-medium text-white">
                  Customer-Issues Resolution Time
                </span>
                <div className="w-3 h-3 rounded bg-gray-700" />
              </div>
              <div className="h-28 relative">
                {/* Y-axis labels */}
                <div className="absolute left-0 top-0 bottom-0 flex flex-col justify-between text-[10px] text-gray-500">
                  <span>6d</span>
                  <span>3d</span>
                  <span></span>
                </div>
                {/* Chart area */}
                <div className="ml-6 h-full flex items-end">
                  <svg className="w-full h-full" viewBox="0 0 200 80">
                    {/* Grid lines */}
                    <line
                      x1="0"
                      y1="20"
                      x2="200"
                      y2="20"
                      stroke="#2A2A2A"
                      strokeWidth="0.5"
                    />
                    <line
                      x1="0"
                      y1="40"
                      x2="200"
                      y2="40"
                      stroke="#2A2A2A"
                      strokeWidth="0.5"
                    />
                    <line
                      x1="0"
                      y1="60"
                      x2="200"
                      y2="60"
                      stroke="#2A2A2A"
                      strokeWidth="0.5"
                    />
                    {/* Previous month line (dashed) */}
                    <path
                      d="M 0 50 Q 50 45, 100 55 T 200 40"
                      fill="none"
                      stroke="#6B7280"
                      strokeWidth="1.5"
                      strokeDasharray="4 2"
                    />
                    {/* This month line */}
                    <path
                      d="M 0 60 Q 30 40, 60 45 Q 90 50, 120 30 Q 150 35, 180 25 L 200 20"
                      fill="none"
                      stroke="#8B5CF6"
                      strokeWidth="2"
                    />
                    {/* Data points */}
                    <circle cx="60" cy="45" r="3" fill="#8B5CF6" />
                    <circle cx="120" cy="30" r="3" fill="#8B5CF6" />
                    <circle cx="180" cy="25" r="3" fill="#8B5CF6" />
                  </svg>
                </div>
              </div>
              <div className="flex justify-between mt-2 text-[10px] text-gray-500 ml-6">
                <span>Sept 19</span>
                <span>Oct 19</span>
              </div>
              <div className="flex items-center gap-4 mt-2 text-[10px] ml-6">
                <div className="flex items-center gap-1">
                  <div className="w-3 h-0.5 bg-purple-500" />
                  <span className="text-gray-400">This Month</span>
                </div>
                <div className="flex items-center gap-1">
                  <div className="w-3 h-0.5 bg-gray-500 border-dashed" style={{ borderTop: "1px dashed #6B7280" }} />
                  <span className="text-gray-400">Previous Month</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function SaaspoFeatureSectionsDevrev({
  title = "Monitor real-time performance",
  subtitle = "Enhance customer experience, product velocity, and developer productivity with robust Product 360 analytics",
  features = defaultFeatures,
  primaryButtonText = "Start for free",
  secondaryButtonText = "Book a Demo",
  onPrimaryClick,
  onSecondaryClick,
}: SaaspoFeatureSectionsDevrevProps) {
  return (
    <section
      className="relative w-full py-16 md:py-24 px-4 md:px-8 lg:px-16"
      style={{ backgroundColor: COLORS.background }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header Section - Two Column */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 mb-12">
          {/* Left - Title */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-[42px] font-bold text-white leading-tight">
              {title}
            </h2>
          </motion.div>

          {/* Right - Subtitle & Features */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            {/* Italic Subtitle */}
            <p
              className="text-xl md:text-2xl italic text-gray-300 mb-8 leading-relaxed"
              style={{ fontFamily: "Georgia, serif" }}
            >
              {subtitle}
            </p>

            {/* Features Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {features.map((feature, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.2 + idx * 0.1 }}
                  viewport={{ once: true }}
                  className="group"
                >
                  <h3
                    className="text-sm font-semibold mb-2 transition-colors"
                    style={{ color: COLORS.featureTitleYellow }}
                  >
                    {feature.title}
                  </h3>
                  <p className="text-sm text-gray-400 leading-relaxed">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.5 }}
              viewport={{ once: true }}
              className="flex items-center gap-4 mt-8"
            >
              <button
                onClick={onPrimaryClick}
                className="text-sm text-white hover:text-gray-300 transition-colors underline underline-offset-4"
              >
                {primaryButtonText}
              </button>
              <button
                onClick={onSecondaryClick}
                className="px-4 py-2 text-sm font-medium text-black bg-white rounded hover:bg-gray-100 transition-colors"
              >
                {secondaryButtonText}
              </button>
            </motion.div>
          </motion.div>
        </div>

        {/* Dashboard Mockup */}
        <DashboardMockup />
      </div>
    </section>
  );
}
