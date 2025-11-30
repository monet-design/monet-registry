"use client";

import { motion } from "motion/react";
import { Settings, ChevronDown, ChevronRight, ChevronLeft } from "lucide-react";

// Types
interface NavItem {
  label: string;
  href: string;
}

interface AntimetalHeroProps {
  logoText?: string;
  headline?: string;
  subheadline?: string;
  ctaText?: string;
  signInText?: string;
  navItems?: NavItem[];
  onBookDemo?: () => void;
}

// Logo Icon Component - 4 dots pattern
function LogoIcon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="7" cy="7" r="2.5" fill="#111827" />
      <circle cx="17" cy="7" r="2.5" fill="#111827" />
      <circle cx="7" cy="17" r="2.5" fill="#111827" />
      <circle cx="17" cy="17" r="2.5" fill="#111827" />
    </svg>
  );
}

// Sparkle/Magic Icon for CTA button
function SparkleIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8 1L9.5 6.5L15 8L9.5 9.5L8 15L6.5 9.5L1 8L6.5 6.5L8 1Z"
        fill="currentColor"
      />
    </svg>
  );
}

// Dotted Grid Background Pattern
function DottedGridBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Dotted grid pattern */}
      <svg
        className="absolute inset-0 w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern
            id="dotted-grid"
            width="40"
            height="40"
            patternUnits="userSpaceOnUse"
          >
            <circle cx="1" cy="1" r="1" fill="#E5E7EB" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#dotted-grid)" />
      </svg>

      {/* Decorative circles */}
      <div className="absolute top-24 left-[15%] w-3 h-3 rounded-full border-2 border-dashed border-gray-300" />
      <div className="absolute top-32 left-[25%] w-2 h-2 rounded-full border border-dashed border-gray-300" />
      <div className="absolute top-20 right-[20%] w-4 h-4 rounded-full border-2 border-dashed border-gray-300" />
      <div className="absolute top-36 right-[15%] w-2.5 h-2.5 rounded-full border border-dashed border-gray-300" />

      {/* Corner dotted lines */}
      <svg className="absolute top-16 left-16 w-24 h-24" viewBox="0 0 100 100">
        <path
          d="M0 50 L50 50 L50 0"
          fill="none"
          stroke="#E5E7EB"
          strokeWidth="1"
          strokeDasharray="4 4"
        />
        <circle cx="50" cy="50" r="3" fill="none" stroke="#E5E7EB" strokeWidth="1" />
      </svg>
      <svg className="absolute top-16 right-16 w-24 h-24" viewBox="0 0 100 100">
        <path
          d="M100 50 L50 50 L50 0"
          fill="none"
          stroke="#E5E7EB"
          strokeWidth="1"
          strokeDasharray="4 4"
        />
        <circle cx="50" cy="50" r="3" fill="none" stroke="#E5E7EB" strokeWidth="1" />
      </svg>
    </div>
  );
}

// Dashboard Preview Component
function DashboardPreview() {
  return (
    <div className="w-full max-w-5xl mx-auto bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden">
      <div className="flex">
        {/* Sidebar */}
        <div className="w-48 border-r border-gray-100 bg-gray-50/50 p-4 hidden md:block">
          {/* Account Selector */}
          <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white border border-gray-200 mb-4">
            <Settings size={14} className="text-gray-500" />
            <span className="text-xs text-gray-700 font-medium">All Accounts</span>
            <ChevronDown size={12} className="text-gray-400 ml-auto" />
          </div>

          {/* Nav Items */}
          <nav className="space-y-1">
            <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-gray-100">
              <div className="w-4 h-4 rounded bg-gray-300" />
              <span className="text-xs font-medium text-gray-900">Dashboard</span>
            </div>
            <div className="flex items-center gap-2 px-3 py-2 rounded-lg text-gray-500 hover:bg-gray-100">
              <div className="w-4 h-4 rounded-full border border-gray-300" />
              <span className="text-xs">Guardrails</span>
            </div>
          </nav>

          {/* Bottom Settings */}
          <div className="mt-8 space-y-1">
            <div className="flex items-center gap-2 px-3 py-2">
              <Settings size={14} className="text-gray-400" />
              <span className="text-xs text-gray-500">Settings</span>
              <ChevronDown size={12} className="text-gray-400 ml-auto" />
            </div>
            {["Workspace", "Profile", "Members", "Notifications", "Billing", "Invoices"].map((item) => (
              <div key={item} className="px-6 py-1.5 text-xs text-gray-500">{item}</div>
            ))}
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-6">
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-sm font-semibold text-gray-900">Dashboard</h2>
            <div className="flex items-center gap-2">
              {["1M", "3M", "6M", "1Y", "ALL"].map((period, i) => (
                <button
                  key={period}
                  className={`px-2 py-1 text-xs rounded ${
                    i === 0 ? "bg-blue-600 text-white" : "text-gray-500 hover:bg-gray-100"
                  }`}
                >
                  {period}
                </button>
              ))}
            </div>
          </div>

          {/* Stats Row */}
          <div className="grid grid-cols-3 gap-6 mb-6">
            {/* Overview */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-medium text-gray-700">Overview</span>
                <span className="text-xs text-gray-400 flex items-center gap-1">
                  View pending savings <ChevronRight size={12} />
                </span>
              </div>
              {/* Progress Bar */}
              <div className="h-2 rounded-full bg-gray-100 mb-3 overflow-hidden flex">
                <div className="h-full bg-blue-500" style={{ width: "50%" }} />
                <div className="h-full bg-blue-300" style={{ width: "30%" }} />
                <div className="h-full bg-yellow-400" style={{ width: "20%" }} />
              </div>
              <div className="flex justify-between text-xs">
                <div>
                  <span className="font-semibold text-gray-900">$50,104</span>
                  <span className="text-gray-400 ml-1">Net spend</span>
                </div>
                <div>
                  <span className="font-semibold text-gray-900">$20,062</span>
                  <span className="text-gray-400 ml-1">Saved</span>
                </div>
                <div>
                  <span className="font-semibold text-gray-900">$5,910</span>
                  <span className="text-yellow-600 ml-1">Pending savings</span>
                </div>
              </div>
            </div>

            {/* Budget */}
            <div className="border-l border-gray-100 pl-6">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-xs font-medium text-gray-700">Budget</span>
                <span className="text-xs text-green-600 bg-green-50 px-2 py-0.5 rounded">On track</span>
              </div>
              <div className="flex gap-4">
                <div>
                  <span className="text-lg font-semibold text-gray-900">$20K</span>
                  <div className="text-xs text-gray-400">$2,500 left</div>
                </div>
                <div>
                  <span className="text-lg font-semibold text-gray-900">$17.5K</span>
                  <div className="text-xs text-gray-400">Projected</div>
                </div>
              </div>
            </div>

            {/* Guardrails */}
            <div className="border-l border-gray-100 pl-6">
              <span className="text-xs font-medium text-gray-700">Guardrails</span>
              <div className="flex items-center gap-4 mt-2">
                {/* Gauge */}
                <div className="relative w-16 h-10">
                  <svg viewBox="0 0 60 35" className="w-full h-full">
                    <path
                      d="M5 30 A25 25 0 0 1 55 30"
                      fill="none"
                      stroke="#E5E7EB"
                      strokeWidth="6"
                      strokeLinecap="round"
                    />
                    <path
                      d="M5 30 A25 25 0 0 1 30 5"
                      fill="none"
                      stroke="#22C55E"
                      strokeWidth="6"
                      strokeLinecap="round"
                    />
                    <path
                      d="M30 5 A25 25 0 0 1 45 12"
                      fill="none"
                      stroke="#FACC15"
                      strokeWidth="6"
                      strokeLinecap="round"
                    />
                    <path
                      d="M45 12 A25 25 0 0 1 55 30"
                      fill="none"
                      stroke="#EF4444"
                      strokeWidth="6"
                      strokeLinecap="round"
                    />
                    {/* Needle */}
                    <line
                      x1="30"
                      y1="30"
                      x2="48"
                      y2="18"
                      stroke="#111827"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                    <circle cx="30" cy="30" r="3" fill="#111827" />
                  </svg>
                </div>
                <div className="text-center">
                  <span className="text-xl font-bold text-gray-900">10</span>
                  <div className="text-xs text-gray-400">Alerts</div>
                </div>
              </div>
              <div className="flex items-center justify-between mt-2 text-xs text-gray-400">
                <ChevronLeft size={12} />
                <span>Jan 1 - Jan 31, 2024</span>
                <ChevronRight size={12} />
              </div>
            </div>
          </div>

          {/* Chart Section */}
          <div className="mb-6">
            <div className="flex items-center gap-4 mb-3 text-xs text-gray-500 flex-wrap">
              <span className="font-medium text-gray-700">Spend after savings by service</span>
              {[
                { color: "bg-blue-600", label: "RDS", value: "$12,100.50" },
                { color: "bg-blue-400", label: "EC2", value: "$8510.50" },
                { color: "bg-red-400", label: "ElastiCache", value: "$8112.25" },
                { color: "bg-purple-400", label: "CloudFront", value: "$1305.50" },
                { color: "bg-teal-400", label: "CloudWatch", value: "$1009.72" },
                { color: "bg-gray-300", label: "Other (+22)", value: "$19,065.53" },
                { color: "bg-gray-400", label: "Savings", value: "$20,062.90" },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-1">
                  <div className={`w-2 h-2 rounded-sm ${item.color}`} />
                  <span>{item.label}</span>
                  <span className="font-medium text-gray-700">{item.value}</span>
                </div>
              ))}
            </div>

            {/* Bar Chart */}
            <div className="h-32 flex items-end gap-1">
              {Array.from({ length: 31 }).map((_, i) => {
                const heights = [60, 75, 80, 85, 70, 65, 72, 78, 82, 68, 74, 80, 76, 70, 65, 72, 78, 82, 75, 68, 74, 80, 76, 72, 68, 65, 70, 75, 80, 72, 68];
                const height = heights[i] || 70;
                return (
                  <div
                    key={i}
                    className="flex-1 flex flex-col rounded-t overflow-hidden"
                    style={{ height: `${height}%` }}
                  >
                    <div className="flex-[3] bg-blue-600" />
                    <div className="flex-[2] bg-blue-400" />
                    <div className="flex-[1.5] bg-red-400" />
                    <div className="flex-[1] bg-purple-400" />
                    <div className="flex-[0.5] bg-yellow-400" />
                    <div className="flex-[1] bg-gray-300" />
                  </div>
                );
              })}
            </div>
            <div className="flex justify-between text-xs text-gray-400 mt-2">
              <span>Jan 1</span>
              <span>Jan 31</span>
            </div>
          </div>

          {/* Table */}
          <div>
            <div className="flex items-center gap-4 mb-3 border-b border-gray-100 pb-2">
              <span className="text-xs font-semibold text-gray-900">Savings summary</span>
              <span className="text-xs text-gray-400">Savings plans</span>
              <span className="text-xs text-gray-400">Reserved instances</span>
            </div>
            <table className="w-full text-xs">
              <thead>
                <tr className="text-gray-400 text-left">
                  <th className="font-normal pb-2">SERVICE</th>
                  <th className="font-normal pb-2">ACCOUNT</th>
                  <th className="font-normal pb-2">DATE</th>
                  <th className="font-normal pb-2">ON DEMAND COST</th>
                  <th className="font-normal pb-2">SAVINGS</th>
                  <th className="font-normal pb-2">NET COST</th>
                </tr>
              </thead>
              <tbody className="text-gray-700">
                {[
                  { service: "EC2", account: "Production", date: "Jan 20, 2024", cost: "$920.43", savings: "$359.12", percent: "63.97%", net: "$561.31" },
                  { service: "RDS", account: "Production", date: "Jan 20, 2024", cost: "$642.60", savings: "$107.10", percent: "16.8%", net: "$535.50" },
                  { service: "ElastiCache", account: "Staging", date: "Jan 20, 2024", cost: "$452.87", savings: "$54.35", percent: "12%", net: "$398.52" },
                  { service: "CloudFront", account: "Production", date: "Jan 20, 2024", cost: "$75.10", savings: "$3.75", percent: "4.99%", net: "$71.35" },
                ].map((row) => (
                  <tr key={row.service + row.account} className="border-t border-gray-50">
                    <td className="py-2">{row.service}</td>
                    <td className="py-2">{row.account}</td>
                    <td className="py-2">{row.date}</td>
                    <td className="py-2">{row.cost}</td>
                    <td className="py-2">
                      {row.savings}
                      <span className="ml-2 px-1.5 py-0.5 bg-green-50 text-green-600 rounded text-[10px]">{row.percent}</span>
                    </td>
                    <td className="py-2">{row.net}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

// Default nav items
const defaultNavItems: NavItem[] = [
  { label: "Enterprise", href: "#enterprise" },
  { label: "Pricing", href: "#pricing" },
  { label: "Docs", href: "#docs" },
  { label: "FAQ", href: "#faq" },
];

// Main Component
export default function AntimetalHero({
  logoText = "Antimetal",
  headline = "Save time &\nmoney on AWS",
  subheadline = "Savings, visibility, and infrastructure guardrails.\nOne automated platform.",
  ctaText = "Book a demo",
  signInText = "Sign in",
  navItems = defaultNavItems,
  onBookDemo,
}: AntimetalHeroProps) {
  return (
    <section className="relative min-h-screen w-full bg-[#FAFBFC] overflow-hidden">
      {/* Background Pattern */}
      <DottedGridBackground />

      {/* Navigation */}
      <motion.nav
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative z-10 flex items-center justify-between px-6 py-4 sm:px-8 lg:px-12"
      >
        {/* Logo */}
        <div className="flex items-center gap-2">
          <LogoIcon />
          <span className="text-sm font-medium text-[#111827]">{logoText}</span>
        </div>

        {/* Center Nav Items */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm text-[#6B7280] hover:text-[#111827] transition-colors"
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Sign In */}
        <a
          href="#signin"
          className="text-sm text-[#6B7280] hover:text-[#111827] transition-colors"
        >
          {signInText}
        </a>
      </motion.nav>

      {/* Hero Content */}
      <div className="relative z-10 mx-auto max-w-4xl px-6 pt-12 pb-8 sm:px-8 sm:pt-16 lg:pt-20 text-center">
        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[#0A0A0A] whitespace-pre-line leading-tight"
        >
          {headline}
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mx-auto mt-6 max-w-lg text-base sm:text-lg text-[#6B7280] whitespace-pre-line leading-relaxed"
        >
          {subheadline}
        </motion.p>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mt-8"
        >
          <button
            onClick={onBookDemo}
            className="inline-flex items-center gap-2 px-5 py-3 bg-[#111827] text-white text-sm font-medium rounded-full hover:bg-[#1F2937] transition-colors shadow-lg"
          >
            <span className="flex items-center justify-center w-5 h-5 bg-white/20 rounded">
              <SparkleIcon />
            </span>
            {ctaText}
          </button>
        </motion.div>
      </div>

      {/* Dashboard Preview */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.8 }}
        className="relative z-10 px-6 sm:px-8 pb-12"
      >
        <DashboardPreview />
      </motion.div>

      {/* Bottom Fade Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#FAFBFC] to-transparent pointer-events-none" />
    </section>
  );
}
