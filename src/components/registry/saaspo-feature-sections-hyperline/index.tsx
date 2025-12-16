"use client";

// ============================================================================
// CUSTOMIZATION - 이 섹션의 값들을 수정하여 프로젝트에 맞게 조정하세요
// ============================================================================

/**
 * 커스텀 색상 (브랜드 컬러)
 */
const COLORS = {
  light: {
    background: "#f5f5f5",
    cardBg: "#ffffff",
    textPrimary: "#1a1a1a",
    textSecondary: "#6b6b6b",
    tagBg: "#1a1a1a",
    tagText: "#ffffff",
    chartBlue: "#3B82F6",
    chartYellow: "#F59E0B",
    chartOrange: "#F97316",
    chartRed: "#EF4444",
    chartGreen: "#10B981",
    border: "#e5e5e5",
  },
  dark: {
    background: "#0a0a0a",
    cardBg: "#171717",
    textPrimary: "#fafafa",
    textSecondary: "#a3a3a3",
    tagBg: "#fafafa",
    tagText: "#0a0a0a",
    chartBlue: "#60A5FA",
    chartYellow: "#FBBF24",
    chartOrange: "#FB923C",
    chartRed: "#F87171",
    chartGreen: "#34D399",
    border: "#262626",
  },
} as const;

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { motion } from "motion/react";
import { AlertCircle, Clock } from "lucide-react";

interface FeatureCardData {
  title: string;
  description: string;
  user: {
    name: string;
    role: string;
    avatarColor: string;
  };
}

interface SaaspoFeatureSectionsHyperlineProps {
  mode?: "light" | "dark";
  badge?: string;
  heading?: string;
  subheading?: string;
  features?: FeatureCardData[];
}

// Finance Card - Accounts Receivables
function FinanceCard({ mode = "light", user }: { mode?: "light" | "dark"; user: { name: string; role: string; avatarColor: string } }) {
  const colors = COLORS[mode];

  const receivablesData = [
    { label: "1 to 30 days", color: colors.chartBlue, amount: "$134,252.14", width: "100%" },
    { label: "31 to 60 days", color: colors.chartYellow, amount: "$42,970.52", width: "32%" },
    { label: "61 to 90 days", color: colors.chartOrange, amount: "$13,580.25", width: "10%" },
    { label: "More than 90 days", color: colors.chartRed, amount: "$5,751.06", width: "4%" },
  ];

  const tableData = [
    { customer: "Raycast", status: "To pay", method: "•••• 6998", amount: "$1,286.09", statusColor: "text-gray-500" },
    { customer: "—", status: "Errored", method: "", amount: "$2,358.47", statusColor: "text-red-500" },
  ];

  return (
    <div className="relative pb-6">
      <div
        className="rounded-xl p-5 shadow-sm border"
        style={{ backgroundColor: colors.cardBg, borderColor: colors.border }}
      >
        <div className="flex items-center gap-2 mb-4">
          <div className="w-4 h-4 rounded bg-gray-200 flex items-center justify-center">
            <span className="text-[10px]">☰</span>
          </div>
          <span className="text-sm font-medium" style={{ color: colors.textPrimary }}>
            Accounts Receivables
          </span>
        </div>

        {/* Bar Chart */}
        <div className="space-y-2 mb-4">
          {receivablesData.map((item, i) => (
            <div key={i} className="flex items-center gap-3">
              <div className="flex items-center gap-2 w-32">
                <div
                  className="w-2 h-2 rounded-full flex-shrink-0"
                  style={{ backgroundColor: item.color }}
                />
                <span className="text-xs" style={{ color: colors.textSecondary }}>
                  {item.label}
                </span>
              </div>
              <div className="flex-1 h-2 bg-gray-100 rounded-full overflow-hidden">
                <div
                  className="h-full rounded-full transition-all"
                  style={{ backgroundColor: item.color, width: item.width }}
                />
              </div>
              <span className="text-xs font-medium w-20 text-right" style={{ color: colors.textPrimary }}>
                {item.amount}
              </span>
            </div>
          ))}
        </div>

        {/* Table */}
        <div className="border-t pt-3" style={{ borderColor: colors.border }}>
          <div className="grid grid-cols-4 gap-2 text-xs mb-2" style={{ color: colors.textSecondary }}>
            <span>Customer</span>
            <span>Status</span>
            <span>Payment method</span>
            <span className="text-right">Amount</span>
          </div>
          {tableData.map((row, i) => (
            <div key={i} className="grid grid-cols-4 gap-2 text-xs py-1.5 border-t" style={{ borderColor: colors.border }}>
              <span style={{ color: colors.textPrimary }}>{row.customer}</span>
              <span className={`flex items-center gap-1 ${row.statusColor}`}>
                {row.status === "To pay" ? <Clock className="w-3 h-3" /> : <AlertCircle className="w-3 h-3" />}
                {row.status}
              </span>
              <span style={{ color: colors.textSecondary }}>
                {row.method && (
                  <span className="inline-flex items-center gap-1">
                    <span className="w-4 h-3 bg-red-500 rounded-sm" />
                    {row.method}
                  </span>
                )}
              </span>
              <span className="text-right font-medium" style={{ color: colors.textPrimary }}>{row.amount}</span>
            </div>
          ))}
        </div>
      </div>

      {/* User Avatar - overlapping card bottom */}
      <div
        className="absolute -bottom-0 left-4 flex items-center gap-3 px-3 py-2 rounded-lg shadow-sm border"
        style={{ backgroundColor: colors.cardBg, borderColor: colors.border }}
      >
        <div
          className="w-8 h-8 rounded-full flex items-center justify-center text-white text-sm font-medium"
          style={{ backgroundColor: user.avatarColor }}
        >
          {user.name.split(" ").map(n => n[0]).join("")}
        </div>
        <div>
          <div className="font-medium text-sm" style={{ color: colors.textPrimary }}>{user.name}</div>
          <div className="text-xs" style={{ color: colors.textSecondary }}>{user.role}</div>
        </div>
      </div>
    </div>
  );
}

// Revenue Card - Quote Value
function RevenueCard({ mode = "light", user }: { mode?: "light" | "dark"; user: { name: string; role: string; avatarColor: string } }) {
  const colors = COLORS[mode];

  return (
    <div className="relative pb-6">
      <div
        className="rounded-xl p-5 shadow-sm border"
        style={{ backgroundColor: colors.cardBg, borderColor: colors.border }}
      >
        {/* Header with Premium Support pill */}
        <div className="flex items-center justify-between mb-3 text-xs" style={{ color: colors.textSecondary }}>
          <span className="px-2 py-1 rounded bg-gray-100">Premium Support</span>
          <div className="text-right">
            <span className="line-through mr-2">€295.00 €</span>
            <span>/ month</span>
          </div>
        </div>
        <div className="text-xs mb-4" style={{ color: colors.textSecondary }}>
          Access to our security consulting team
          <span className="ml-2 px-2 py-0.5 bg-gray-100 rounded text-[10px]">FAMILY100 : $100.00</span>
        </div>

        {/* Quote Value */}
        <div className="mb-4">
          <div className="text-xs mb-1" style={{ color: colors.textSecondary }}>Quote value</div>
          <div className="text-xl font-semibold" style={{ color: colors.textPrimary }}>$9,870.00</div>
          <div className="text-xs" style={{ color: colors.textSecondary }}>
            $10,746.06 including taxes (8.875%)
          </div>
        </div>

        {/* Contract Terms */}
        <div>
          <div className="text-xs mb-2" style={{ color: colors.textSecondary }}>Contract terms</div>
          <div
            className="flex items-center gap-2 text-xs mb-2 border-b pb-2"
            style={{ borderColor: colors.border, color: colors.textSecondary }}
          >
            <span className="font-bold">B</span>
            <span className="underline">U</span>
            <span className="italic">I</span>
            <span className="line-through">S</span>
            <span>≡</span>
            <span>⇔</span>
            <span className="ml-auto text-xs">+ Insert</span>
          </div>
          <div
            className="text-xs p-3 bg-gray-50 rounded border leading-relaxed"
            style={{ borderColor: colors.border, color: colors.textSecondary }}
          >
            <span className="underline">The provider guarantees a 99.9% uptime</span> for its services, excluding scheduled
            maintenance and force majeure events. Downtime beyond this threshold entitles
            the client to service credits.The provider must notify the client of planned outages
            at least 48 hours in advance and respond to critical issues within 4 business hours.
          </div>
        </div>
      </div>

      {/* User Avatar - overlapping card bottom */}
      <div
        className="absolute -bottom-0 left-4 flex items-center gap-3 px-3 py-2 rounded-lg shadow-sm border"
        style={{ backgroundColor: colors.cardBg, borderColor: colors.border }}
      >
        <div
          className="w-8 h-8 rounded-full flex items-center justify-center text-white text-sm font-medium"
          style={{ backgroundColor: user.avatarColor }}
        >
          {user.name.split(" ").map(n => n[0]).join("")}
        </div>
        <div>
          <div className="font-medium text-sm" style={{ color: colors.textPrimary }}>{user.name}</div>
          <div className="text-xs" style={{ color: colors.textSecondary }}>{user.role}</div>
        </div>
      </div>
    </div>
  );
}

// Engineering Card - Platform Access
function EngineeringCard({ mode = "light", user }: { mode?: "light" | "dark"; user: { name: string; role: string; avatarColor: string } }) {
  const colors = COLORS[mode];

  return (
    <div className="relative pb-6">
      <div
        className="rounded-xl p-5 shadow-sm border"
        style={{ backgroundColor: colors.cardBg, borderColor: colors.border }}
      >
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <span className="text-sm">⚙️</span>
            <span className="text-sm font-medium" style={{ color: colors.textPrimary }}>Platform access</span>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <span style={{ color: colors.textSecondary }}>+ 20 licenses</span>
            <span className="text-lg font-semibold" style={{ color: colors.textPrimary }}>=</span>
            <span className="font-semibold" style={{ color: colors.textPrimary }}>$400.00</span>
            <span style={{ color: colors.textSecondary }}>/ month</span>
          </div>
        </div>

        {/* Settings Grid */}
        <div className="space-y-3 mb-4">
          <div className="flex items-center justify-between">
            <span className="text-xs" style={{ color: colors.textSecondary }}>Billable metric</span>
            <select className="text-xs px-3 py-1.5 rounded border bg-white" style={{ borderColor: colors.border }}>
              <option>active_users</option>
            </select>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-xs" style={{ color: colors.textSecondary }}>Refresh rate</span>
            <div className="flex text-xs">
              <button className="px-3 py-1.5 bg-gray-900 text-white rounded-l">Realtime</button>
              <button className="px-3 py-1.5 border-y" style={{ borderColor: colors.border }}>Periodic</button>
              <button className="px-3 py-1.5 border rounded-r" style={{ borderColor: colors.border }}>Manual</button>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-xs" style={{ color: colors.textSecondary }}>Charging method</span>
            <div className="flex text-xs">
              <button className="px-3 py-1.5 bg-gray-900 text-white rounded-l">Pro-rata</button>
              <button className="px-3 py-1.5 border rounded-r" style={{ borderColor: colors.border }}>Full amount</button>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-xs" style={{ color: colors.textSecondary }}>Refresh rate</span>
            <div className="flex text-xs">
              <button className="px-3 py-1.5 border rounded-l" style={{ borderColor: colors.border }}>1min</button>
              <button className="px-3 py-1.5 bg-gray-900 text-white">5min</button>
              <button className="px-3 py-1.5 border-y" style={{ borderColor: colors.border }}>20min</button>
              <button className="px-3 py-1.5 border-y" style={{ borderColor: colors.border }}>1h</button>
              <button className="px-3 py-1.5 border-y" style={{ borderColor: colors.border }}>12h</button>
              <button className="px-3 py-1.5 border rounded-r" style={{ borderColor: colors.border }}>24h</button>
            </div>
          </div>
        </div>

        {/* Table */}
        <div className="border-t pt-3" style={{ borderColor: colors.border }}>
          <div className="grid grid-cols-4 gap-2 text-xs mb-2" style={{ color: colors.textSecondary }}>
            <span>Date</span>
            <span>Event</span>
            <span></span>
            <span className="text-right">Count</span>
          </div>
          <div className="grid grid-cols-4 gap-2 text-xs py-1.5 border-t" style={{ borderColor: colors.border }}>
            <span style={{ color: colors.textSecondary }}>31 May 2025</span>
            <span style={{ color: colors.textPrimary }}>2 licenses added</span>
            <span className="text-xs px-2 py-0.5 bg-gray-100 rounded w-fit">Pro-rata</span>
            <span className="text-right" style={{ color: colors.textPrimary }}>20</span>
          </div>
        </div>
      </div>

      {/* User Avatar - overlapping card bottom */}
      <div
        className="absolute -bottom-0 left-4 flex items-center gap-3 px-3 py-2 rounded-lg shadow-sm border"
        style={{ backgroundColor: colors.cardBg, borderColor: colors.border }}
      >
        <div
          className="w-8 h-8 rounded-full flex items-center justify-center text-white text-sm font-medium"
          style={{ backgroundColor: user.avatarColor }}
        >
          {user.name.split(" ").map(n => n[0]).join("")}
        </div>
        <div>
          <div className="font-medium text-sm" style={{ color: colors.textPrimary }}>{user.name}</div>
          <div className="text-xs" style={{ color: colors.textSecondary }}>{user.role}</div>
        </div>
      </div>
    </div>
  );
}

// Founders Card - Dashboard
function FoundersCard({ mode = "light", user }: { mode?: "light" | "dark"; user: { name: string; role: string; avatarColor: string } }) {
  const colors = COLORS[mode];

  // Fixed bar chart data for consistency
  const arrBars = [45, 55, 60, 65, 70, 75, 80, 85, 88, 90, 92, 95];
  const debtBars = [40, 45, 50, 55, 52, 58, 62, 65, 60, 68, 72, 75];

  return (
    <div className="relative pb-6">
      <div
        className="rounded-xl p-5 shadow-sm border"
        style={{ backgroundColor: colors.cardBg, borderColor: colors.border }}
      >
        {/* Top Metrics */}
        <div className="grid grid-cols-2 gap-4 mb-4">
          {/* ARR */}
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-green-500 text-xs">↗ ARR</span>
              <span className="font-semibold" style={{ color: colors.textPrimary }}>$5,482,750</span>
            </div>
            <div className="flex items-end gap-0.5 h-12">
              {arrBars.map((height, i) => (
                <div
                  key={i}
                  className="flex-1 rounded-t"
                  style={{
                    height: `${height}%`,
                    backgroundColor: colors.chartBlue
                  }}
                />
              ))}
            </div>
            <div className="flex justify-between text-[10px] mt-1" style={{ color: colors.textSecondary }}>
              <span>Jan</span>
              <span>Dec</span>
            </div>
          </div>

          {/* Outstanding debt */}
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-xs" style={{ color: colors.textSecondary }}>○ Outstanding debt</span>
              <span className="font-semibold" style={{ color: colors.textPrimary }}>$196,554</span>
            </div>
            <div className="flex items-end gap-0.5 h-12">
              {debtBars.map((height, i) => (
                <div
                  key={i}
                  className="flex-1 rounded-t"
                  style={{
                    height: `${height}%`,
                    backgroundColor: colors.chartGreen
                  }}
                />
              ))}
            </div>
            <div className="flex justify-between text-[10px] mt-1" style={{ color: colors.textSecondary }}>
              <span>Jan</span>
              <span>Dec</span>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="grid grid-cols-2 gap-4">
          {/* Cashflow */}
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xs" style={{ color: colors.textSecondary }}>◇ Cashflow</span>
              <span className="font-semibold" style={{ color: colors.textPrimary }}>$1,310,121</span>
            </div>
            <div className="h-10 relative">
              <svg className="w-full h-full" viewBox="0 0 100 40">
                <path
                  d="M 0 30 Q 25 10 50 25 T 100 15"
                  fill="none"
                  stroke={colors.chartOrange}
                  strokeWidth="2"
                />
              </svg>
            </div>
          </div>

          {/* Tasks */}
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xs" style={{ color: colors.textSecondary }}>≡ 4 tasks to complete</span>
            </div>
            <div className="space-y-1.5 text-xs">
              <div className="flex items-center gap-2" style={{ color: colors.textSecondary }}>
                <AlertCircle className="w-3 h-3 text-red-500" />
                <span>2 Data loaders not responding</span>
                <span className="ml-auto">→</span>
              </div>
              <div className="flex items-center gap-2" style={{ color: colors.textSecondary }}>
                <Clock className="w-3 h-3 text-yellow-500" />
                <span>25 Missing payment methods</span>
                <span className="ml-auto">→</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* User Avatar - overlapping card bottom */}
      <div
        className="absolute -bottom-0 left-4 flex items-center gap-3 px-3 py-2 rounded-lg shadow-sm border"
        style={{ backgroundColor: colors.cardBg, borderColor: colors.border }}
      >
        <div
          className="w-8 h-8 rounded-full flex items-center justify-center text-white text-sm font-medium"
          style={{ backgroundColor: user.avatarColor }}
        >
          {user.name.split(" ").map(n => n[0]).join("")}
        </div>
        <div>
          <div className="font-medium text-sm" style={{ color: colors.textPrimary }}>{user.name}</div>
          <div className="text-xs" style={{ color: colors.textSecondary }}>{user.role}</div>
        </div>
      </div>
    </div>
  );
}

export default function SaaspoFeatureSectionsHyperline({
  mode = "light",
  badge = "One platform for all teams",
  heading = "Enabling teams to drive revenue, together",
  subheading = "Revenue is not a one-team-job. Hyperline helps Finance, Sales, Engineering, and Founders to stay connected with one platform that simplifies the entire revenue process.",
  features = [
    {
      title: "Finance leaders stop losing time",
      description: "Track what's billed, collected, and forecasted — without waiting on spreadsheets or chasing other teams.",
      user: { name: "Allison M.", role: "Chief Finance Officer", avatarColor: "#8B5CF6" }
    },
    {
      title: "Revenue teams sign deals faster",
      description: "Send quotes that match invoices, close faster, and stop relying on manual steps to get revenue in. No more friction from quote to cash.",
      user: { name: "Paul W.", role: "Go To Market", avatarColor: "#F59E0B" }
    },
    {
      title: "Engineering teams stop getting distracted",
      description: "No more building billing logic, patching workarounds, or owning systems that should live elsewhere.",
      user: { name: "Alexander Z.", role: "Chief Technology Officer", avatarColor: "#10B981" }
    },
    {
      title: "Founders get real-time visibility",
      description: "Understand what's selling and what's scaling — with one view across sales, billing, and cash.",
      user: { name: "Maria E.", role: "Co-Founder", avatarColor: "#EC4899" }
    }
  ]
}: SaaspoFeatureSectionsHyperlineProps) {
  const colors = COLORS[mode];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" as const }
    }
  };

  // Function to render the appropriate card based on index
  const renderCard = (index: number, user: { name: string; role: string; avatarColor: string }) => {
    switch (index) {
      case 0:
        return <FinanceCard mode={mode} user={user} />;
      case 1:
        return <RevenueCard mode={mode} user={user} />;
      case 2:
        return <EngineeringCard mode={mode} user={user} />;
      case 3:
        return <FoundersCard mode={mode} user={user} />;
      default:
        return <FinanceCard mode={mode} user={user} />;
    }
  };

  return (
    <section
      className="relative w-full py-20 px-6 md:px-12 lg:px-20"
      style={{ backgroundColor: colors.background }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          {/* Badge */}
          <div className="flex items-center gap-2 mb-4">
            <div
              className="w-3 h-3 rounded-sm"
              style={{ backgroundColor: colors.tagBg }}
            />
            <span className="text-sm" style={{ color: colors.textSecondary }}>
              {badge}
            </span>
          </div>

          {/* Heading */}
          <h2
            className="text-4xl md:text-5xl font-serif mb-4 max-w-3xl"
            style={{
              color: colors.textPrimary,
              fontFamily: "'Instrument Serif', Georgia, serif"
            }}
          >
            {heading}
          </h2>

          {/* Subheading */}
          <p
            className="text-base md:text-lg max-w-3xl leading-relaxed"
            style={{ color: colors.textSecondary }}
          >
            {subheading}
          </p>
        </motion.div>

        {/* Feature Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="flex flex-col"
            >
              {/* Card Preview with Avatar */}
              {renderCard(index, feature.user)}

              {/* Feature Description */}
              <div className="mt-8">
                <h3
                  className="text-lg font-semibold mb-2"
                  style={{ color: colors.textPrimary }}
                >
                  {feature.title}
                </h3>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: colors.textSecondary }}
                >
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Import Instrument Serif font */}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&display=swap');
      `}</style>
    </section>
  );
}
