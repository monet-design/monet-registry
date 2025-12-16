"use client";

import { useState } from "react";
import { motion } from "motion/react";
import {
  Search,
  LayoutGrid,
  BarChart3,
  Newspaper,
  Calendar,
  TrendingUp,
  Users,
  Briefcase,
  MessageSquare,
  FileText,
  ChartLine,
  GitCompare,
  Star,
  Bell,
  Menu,
  Settings,
  Globe,
} from "lucide-react";

// ============================================================================
// CUSTOMIZATION
// ============================================================================

const COLORS = {
  headerBg: "#080c14",
  headerGradientFrom: "#0a0f1a",
  headerGradientTo: "#050810",
  textPrimary: "#FFFFFF",
  textSecondary: "#9ca3af",
  textMuted: "#6b7280",
  cardBg: "#FFFFFF",
  cardBorder: "#e5e7eb",
  sidebarBg: "#fafafa",
  sidebarBorder: "#e5e7eb",
  positive: "#10b981",
  negative: "#ef4444",
  tabActive: "rgba(255,255,255,0.1)",
  accent: "#3b82f6",
} as const;

const TABS = [
  { id: "markets", label: "Markets" },
  { id: "calendars", label: "Calendars" },
  { id: "data", label: "Data" },
  { id: "community", label: "Community" },
  { id: "portfolio", label: "Portfolio" },
] as const;

const SUB_TABS = [
  { id: "stocks", label: "Stocks" },
  { id: "crypto", label: "Crypto" },
  { id: "indices", label: "Indices" },
  { id: "etfs", label: "ETFs" },
  { id: "currencies", label: "Currencies" },
  { id: "commodities", label: "Commodities" },
  { id: "bonds", label: "Bonds" },
] as const;

const FILTER_TABS = [
  { id: "companies", label: "Companies" },
  { id: "sectors", label: "Sectors" },
  { id: "industries", label: "Industries" },
  { id: "trending", label: "Trending" },
  { id: "gainers-losers", label: "Gainers & Losers" },
  { id: "most-visited", label: "Most Visited" },
] as const;

const SIDEBAR_SECTIONS = {
  markets: [
    { icon: LayoutGrid, label: "Screener" },
    { icon: BarChart3, label: "Heatmaps" },
    { icon: Newspaper, label: "News" },
  ],
  calendar: [
    { icon: Calendar, label: "Earnings" },
    { icon: TrendingUp, label: "Economy" },
  ],
  data: [
    { icon: Globe, label: "Macro" },
    { icon: ChartLine, label: "Charting" },
    { icon: GitCompare, label: "Comparison" },
  ],
  community: [
    { icon: Users, label: "Superinvestors" },
    { icon: Briefcase, label: "Portfolios" },
    { icon: MessageSquare, label: "Posts" },
    { icon: FileText, label: "Articles" },
  ],
} as const;

const INDEX_DATA = [
  { name: "S&P 500", value: "5,648.40", change: "+0.44%", positive: true },
  { name: "Nasdaq 100", value: "17,713.53", change: "+1.13%", positive: true },
  { name: "Dow Jones", value: "41,563.08", change: "+0.55%", positive: true },
  { name: "Russell 2000", value: "2,217.63", change: "+0.67%", positive: true },
  { name: "VIX", value: "15.00", change: "-4.15%", positive: false },
] as const;

const STOCKS_DATA = [
  { rank: 1, symbol: "AAPL", name: "Apple", price: "$207.23", change1d: "+0.36%", change1m: "-1.48%", changeYtd: "+16.06%", marketCap: "$3.22 T", pe: "34.35", starred: true, chartPositive: true },
  { rank: 2, symbol: "MSFT", name: "Microsoft", price: "$417.14", change1d: "+0.18%", change1m: "-1.11%", changeYtd: "+9.42%", marketCap: "$3.00 T", pe: "32.1", starred: false, chartPositive: true },
  { rank: 3, symbol: "NVDA", name: "NVIDIA", price: "$123.61", change1d: "+0.18%", change1m: "+12.00%", changeYtd: "+183.00%", marketCap: "$2.928 T", pe: "72.85", starred: false, chartPositive: true },
  { rank: 4, symbol: "GOOG", name: "Alphabet", price: "$104.25", change1d: "+0.05%", change1m: "+1.6%", changeYtd: "+21.51%", marketCap: "$2.021 T", pe: "23.38", starred: false, chartPositive: true },
  { rank: 5, symbol: "AMZN", name: "Amazon", price: "$161.93", change1d: "+0.24%", change1m: "+6.96%", changeYtd: "+31.3%", marketCap: "$1.873 T", pe: "42.16", starred: false, chartPositive: true },
  { rank: 6, symbol: "META", name: "Meta Platforms", price: "$494.09", change1d: "+1.02%", change1m: "-3.85%", changeYtd: "+61.72%", marketCap: "$1.318 T", pe: "26.95", starred: false, chartPositive: true },
  { rank: 7, symbol: "BRK-B", name: "Berkshire Hathaway", price: "$444.51", change1d: "+0.24%", change1m: "-3.66%", changeYtd: "+24.79%", marketCap: "$1.025 T", pe: "14.12", starred: false, chartPositive: true },
  { rank: 8, symbol: "TSM", name: "TSMC", price: "$174.54", change1d: "+0.05%", change1m: "+8.06%", changeYtd: "+88.23%", marketCap: "$890.44 B", pe: "30.95", starred: false, chartPositive: true },
  { rank: 9, symbol: "LLY", name: "Eli Lilly", price: "$165.72", change1d: "-0.78%", change1m: "-9.14%", changeYtd: "+38.28", marketCap: "$960.02 B", pe: "113.70", starred: false, chartPositive: false },
] as const;

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

interface SaaspoFeatureSectionsFinsepaProps {
  title?: string;
  subtitle?: string;
  footerText?: string;
  activeTab?: string;
}

export default function SaaspoFeatureSectionsFinsepa({
  title = "Everything in one place",
  subtitle = "All your financial insights, tools, and data in one place. Track assets, explore\ntrends, and make data-driven investment decisions with ease.",
  footerText = "Market Tools to Discover New Opportunities",
  activeTab: initialActiveTab = "markets",
}: SaaspoFeatureSectionsFinsepaProps) {
  const [activeTab, setActiveTab] = useState(initialActiveTab);

  return (
    <section className="relative w-full">
      {/* Dark Header Section */}
      <div
        className="relative pt-16 pb-8 px-6"
        style={{
          background: `linear-gradient(180deg, ${COLORS.headerGradientFrom} 0%, ${COLORS.headerGradientTo} 100%)`,
        }}
      >
        <div className="max-w-6xl mx-auto text-center">
          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-6"
            style={{
              color: COLORS.textPrimary,
              fontStyle: "italic",
              fontFamily: "'Playfair Display', Georgia, serif",
            }}
          >
            {title}
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-base md:text-lg max-w-3xl mx-auto mb-10 whitespace-pre-line"
            style={{ color: COLORS.textSecondary }}
          >
            {subtitle}
          </motion.p>

          {/* Tab Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: true }}
            className="flex justify-center gap-2 md:gap-4"
          >
            {TABS.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className="relative px-5 py-2.5 text-sm md:text-base font-medium rounded-full transition-all duration-200"
                style={{
                  color: activeTab === tab.id ? COLORS.textPrimary : COLORS.textSecondary,
                  backgroundColor: activeTab === tab.id ? COLORS.tabActive : "transparent",
                }}
              >
                {tab.label}
              </button>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Main Content - Screenshot Card */}
      <div className="relative px-6 pb-16 -mt-4" style={{ backgroundColor: "#f8fafc" }}>
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            viewport={{ once: true }}
            className="rounded-2xl overflow-hidden shadow-2xl border"
            style={{ backgroundColor: COLORS.cardBg, borderColor: COLORS.cardBorder }}
          >
            <ScreenerUI />
          </motion.div>

          {/* Footer Text */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-center mt-8 text-base"
            style={{ color: COLORS.textMuted }}
          >
            {footerText}
          </motion.p>
        </div>
      </div>

      {/* Google Fonts */}
      <style jsx global>{`
        @import url("https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400;1,700&display=swap");
      `}</style>
    </section>
  );
}

// Stock Screener UI Component
function ScreenerUI() {
  return (
    <div className="flex min-h-[600px]">
      {/* Sidebar */}
      <div
        className="w-56 border-r flex flex-col"
        style={{ backgroundColor: COLORS.sidebarBg, borderColor: COLORS.sidebarBorder }}
      >
        {/* Logo */}
        <div className="p-4 border-b flex items-center gap-3" style={{ borderColor: COLORS.sidebarBorder }}>
          <div className="w-8 h-8 rounded-lg bg-gray-900 flex items-center justify-center">
            <span className="text-white text-sm font-bold">F</span>
          </div>
          <div className="w-6 h-6 rounded border border-gray-300" />
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-3 space-y-6 overflow-y-auto">
          {/* Markets */}
          <div>
            <p className="text-xs font-medium text-gray-400 px-3 mb-2">Markets</p>
            {SIDEBAR_SECTIONS.markets.map((item, index) => (
              <div
                key={index}
                className={`flex items-center gap-3 px-3 py-2 rounded-lg text-sm ${
                  index === 0 ? "bg-gray-200/70 text-gray-900 font-medium" : "text-gray-600 hover:bg-gray-100"
                }`}
              >
                <item.icon className="w-4 h-4" />
                <span>{item.label}</span>
              </div>
            ))}
          </div>

          {/* Calendar */}
          <div>
            <p className="text-xs font-medium text-gray-400 px-3 mb-2">Calendar</p>
            {SIDEBAR_SECTIONS.calendar.map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-3 px-3 py-2 rounded-lg text-sm text-gray-600 hover:bg-gray-100"
              >
                <item.icon className="w-4 h-4" />
                <span>{item.label}</span>
              </div>
            ))}
          </div>

          {/* Data */}
          <div>
            <p className="text-xs font-medium text-gray-400 px-3 mb-2">Data</p>
            {SIDEBAR_SECTIONS.data.map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-3 px-3 py-2 rounded-lg text-sm text-gray-600 hover:bg-gray-100"
              >
                <item.icon className="w-4 h-4" />
                <span>{item.label}</span>
              </div>
            ))}
          </div>

          {/* Community */}
          <div>
            <p className="text-xs font-medium text-gray-400 px-3 mb-2">Community</p>
            {SIDEBAR_SECTIONS.community.map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-3 px-3 py-2 rounded-lg text-sm text-gray-600 hover:bg-gray-100"
              >
                <item.icon className="w-4 h-4" />
                <span>{item.label}</span>
              </div>
            ))}
          </div>
        </nav>

        {/* Bottom Links */}
        <div className="p-3 border-t text-sm text-gray-500" style={{ borderColor: COLORS.sidebarBorder }}>
          <p className="px-3 py-1.5 cursor-pointer hover:text-gray-700">For Business</p>
          <p className="px-3 py-1.5 cursor-pointer hover:text-gray-700">Get Mobile App</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col bg-white">
        {/* Top Header */}
        <div className="flex items-center justify-between px-4 py-3 border-b" style={{ borderColor: COLORS.cardBorder }}>
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-teal-500 flex items-center justify-center">
              <TrendingUp className="w-4 h-4 text-white" />
            </div>
            <div className="flex items-center border rounded-lg px-3 py-1.5 bg-gray-50" style={{ borderColor: COLORS.cardBorder }}>
              <Search className="w-4 h-4 text-gray-400 mr-2" />
              <span className="text-sm text-gray-400">Search...</span>
              <span className="ml-8 text-xs px-1.5 py-0.5 bg-gray-200 rounded text-gray-500">S</span>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Bell className="w-5 h-5 text-gray-400" />
            <Star className="w-5 h-5 text-gray-400" />
            <Settings className="w-5 h-5 text-gray-400" />
            <div className="flex items-center gap-2 px-3 py-1.5 bg-gray-100 rounded-lg">
              <Briefcase className="w-4 h-4 text-gray-500" />
              <span className="text-sm text-gray-700">$274,36.40</span>
            </div>
            <Menu className="w-5 h-5 text-gray-400" />
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-orange-400 to-pink-500" />
          </div>
        </div>

        {/* Sub Tabs */}
        <div className="flex items-center justify-between px-4 py-2 border-b" style={{ borderColor: COLORS.cardBorder }}>
          <div className="flex items-center gap-1">
            {SUB_TABS.map((tab, index) => (
              <button
                key={tab.id}
                className={`px-3 py-1.5 text-sm rounded-lg transition-colors ${
                  index === 0
                    ? "bg-gray-100 text-gray-900 font-medium"
                    : "text-gray-500 hover:bg-gray-50"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
          <div className="flex items-center gap-2 text-sm">
            <Globe className="w-4 h-4 text-gray-400" />
            <span className="text-gray-600">US</span>
          </div>
        </div>

        {/* Index Cards */}
        <div className="grid grid-cols-5 gap-3 p-4 border-b" style={{ borderColor: COLORS.cardBorder }}>
          {INDEX_DATA.map((index, i) => (
            <div
              key={i}
              className="p-3 border rounded-xl"
              style={{ borderColor: COLORS.cardBorder }}
            >
              <p className="text-xs text-gray-500 mb-1">{index.name}</p>
              <div className="flex items-end justify-between">
                <div>
                  <p className="text-lg font-semibold text-gray-900">{index.value}</p>
                  <p
                    className="text-xs font-medium"
                    style={{ color: index.positive ? COLORS.positive : COLORS.negative }}
                  >
                    {index.change}
                  </p>
                </div>
                <MiniChart positive={index.positive} height={30} />
              </div>
            </div>
          ))}
        </div>

        {/* Filter Tabs */}
        <div className="flex items-center justify-between px-4 py-2 border-b" style={{ borderColor: COLORS.cardBorder }}>
          <div className="flex items-center gap-1">
            {FILTER_TABS.map((tab, index) => (
              <button
                key={tab.id}
                className={`px-3 py-1.5 text-sm rounded-lg transition-colors ${
                  index === 0
                    ? "bg-gray-900 text-white font-medium"
                    : "text-gray-500 hover:bg-gray-50"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
          <button className="flex items-center gap-2 px-3 py-1.5 border rounded-lg text-sm text-gray-600" style={{ borderColor: COLORS.cardBorder }}>
            <Settings className="w-4 h-4" />
            Customize
          </button>
        </div>

        {/* Stocks Table */}
        <div className="flex-1 overflow-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b text-gray-500 text-xs" style={{ borderColor: COLORS.cardBorder }}>
                <th className="text-left py-3 px-4 font-normal">
                  <Star className="w-4 h-4" />
                </th>
                <th className="text-left py-3 px-2 font-normal">#</th>
                <th className="text-left py-3 px-2 font-normal">Company</th>
                <th className="text-right py-3 px-2 font-normal">Price</th>
                <th className="text-right py-3 px-2 font-normal">1D %</th>
                <th className="text-right py-3 px-2 font-normal">1M %</th>
                <th className="text-right py-3 px-2 font-normal">YTD %</th>
                <th className="text-right py-3 px-2 font-normal">M Cap</th>
                <th className="text-right py-3 px-2 font-normal">PE</th>
                <th className="text-right py-3 px-4 font-normal">Last 5 Days</th>
              </tr>
            </thead>
            <tbody>
              {STOCKS_DATA.map((stock) => (
                <tr
                  key={stock.rank}
                  className="border-b hover:bg-gray-50 transition-colors"
                  style={{ borderColor: COLORS.cardBorder }}
                >
                  <td className="py-3 px-4">
                    <Star
                      className={`w-4 h-4 ${
                        stock.starred ? "text-amber-400 fill-amber-400" : "text-gray-300"
                      }`}
                    />
                  </td>
                  <td className="py-3 px-2 text-gray-500">{stock.rank}</td>
                  <td className="py-3 px-2">
                    <div className="flex items-center gap-3">
                      <CompanyIcon symbol={stock.symbol} />
                      <div>
                        <p className="font-medium text-gray-900">{stock.name}</p>
                        <p className="text-xs text-gray-500">{stock.symbol}</p>
                      </div>
                    </div>
                  </td>
                  <td className="py-3 px-2 text-right font-medium text-gray-900">{stock.price}</td>
                  <td
                    className="py-3 px-2 text-right font-medium"
                    style={{
                      color: stock.change1d.startsWith("+") ? COLORS.positive : COLORS.negative,
                    }}
                  >
                    {stock.change1d}
                  </td>
                  <td
                    className="py-3 px-2 text-right font-medium"
                    style={{
                      color: stock.change1m.startsWith("+") ? COLORS.positive : COLORS.negative,
                    }}
                  >
                    {stock.change1m}
                  </td>
                  <td
                    className="py-3 px-2 text-right font-medium"
                    style={{
                      color: stock.changeYtd.startsWith("+") ? COLORS.positive : COLORS.negative,
                    }}
                  >
                    {stock.changeYtd}
                  </td>
                  <td className="py-3 px-2 text-right text-gray-600">{stock.marketCap}</td>
                  <td className="py-3 px-2 text-right text-gray-600">{stock.pe}</td>
                  <td className="py-3 px-4">
                    <div className="flex justify-end">
                      <MiniChart positive={stock.chartPositive} height={24} width={80} />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

// Company Icon Component
function CompanyIcon({ symbol }: { symbol: string }) {
  const iconStyles: Record<string, { bg: string; text: string; icon?: React.ReactNode }> = {
    AAPL: { bg: "#000000", text: "#FFFFFF", icon: <span className="text-lg"></span> },
    MSFT: { bg: "#00A4EF", text: "#FFFFFF", icon: <span className="text-xs font-bold">MS</span> },
    NVDA: { bg: "#76B900", text: "#FFFFFF", icon: <span className="text-xs font-bold">NV</span> },
    GOOG: { bg: "#4285F4", text: "#FFFFFF", icon: <span className="font-bold">G</span> },
    AMZN: { bg: "#FF9900", text: "#000000", icon: <span className="font-bold">a</span> },
    META: { bg: "#0668E1", text: "#FFFFFF", icon: <span className="text-xs font-bold">M</span> },
    "BRK-B": { bg: "#1E3A5F", text: "#FFFFFF", icon: <span className="text-xs font-bold">BH</span> },
    TSM: { bg: "#E31937", text: "#FFFFFF", icon: <span className="text-xs font-bold">TSM</span> },
    LLY: { bg: "#D52B1E", text: "#FFFFFF", icon: <span className="text-xs font-bold">LLY</span> },
  };

  const style = iconStyles[symbol] || { bg: "#6B7280", text: "#FFFFFF" };

  return (
    <div
      className="w-8 h-8 rounded-lg flex items-center justify-center"
      style={{ backgroundColor: style.bg, color: style.text }}
    >
      {style.icon || <span className="text-xs font-bold">{symbol.slice(0, 2)}</span>}
    </div>
  );
}

// Mini Chart Component
function MiniChart({
  positive = true,
  height = 24,
  width = 60,
}: {
  positive?: boolean;
  height?: number;
  width?: number;
}) {
  const color = positive ? COLORS.positive : COLORS.negative;
  const bgColor = positive ? "rgba(16, 185, 129, 0.1)" : "rgba(239, 68, 68, 0.1)";

  // Generate random-ish but consistent path
  const generatePath = () => {
    const points = positive
      ? [
          [0, 20],
          [10, 18],
          [20, 15],
          [30, 17],
          [40, 12],
          [50, 10],
          [60, 8],
        ]
      : [
          [0, 8],
          [10, 10],
          [20, 12],
          [30, 10],
          [40, 15],
          [50, 18],
          [60, 20],
        ];

    return points.map((p, i) => (i === 0 ? `M ${p[0]} ${p[1]}` : `L ${p[0]} ${p[1]}`)).join(" ");
  };

  const linePath = generatePath();
  const areaPath = positive
    ? `${linePath} L 60 24 L 0 24 Z`
    : `${linePath} L 60 24 L 0 24 Z`;

  return (
    <svg width={width} height={height} viewBox="0 0 60 24" className="overflow-visible">
      <path d={areaPath} fill={bgColor} />
      <path d={linePath} fill="none" stroke={color} strokeWidth="1.5" />
    </svg>
  );
}
