"use client";

import { useState } from "react";
import { motion } from "motion/react";
import {
  LayoutGrid,
  FileText,
  Network,
  Server,
  Bell,
  LayoutDashboard,
  ChevronDown,
  Search,
  User,
  ChevronRight,
} from "lucide-react";

// ============================================================================
// CUSTOMIZATION
// ============================================================================

const COLORS = {
  background: "#0D0D0D",
  cardBackground: "#1A1A1A",
  accent: "#F97066",
  accentHover: "#FF8077",
  textPrimary: "#FFFFFF",
  textSecondary: "#9CA3AF",
  border: "#2A2A2A",
} as const;

const TABS = [
  { id: "metrics", label: "Metrics", icon: LayoutGrid },
  { id: "logs", label: "Logs", icon: FileText },
  { id: "traces", label: "Traces", icon: Network },
  { id: "resources", label: "Resources", icon: Server },
  { id: "alerting", label: "Alerting", icon: Bell },
  { id: "dashboards", label: "Dashboards", icon: LayoutDashboard },
] as const;

const FEATURES = [
  "Resource Centric Monitoring.",
  "From CPU Usage to Custom Service Metrics.",
  "Full Transparency on Usage and Cost.",
  "Effortless Query Building.",
  "100% PromQL Support.",
] as const;

const SIDEBAR_ITEMS = [
  { label: "Resources", icon: Server, expanded: false },
  { label: "Tracing", icon: Network, expanded: false },
  { label: "Logging", icon: FileText, expanded: false },
  { label: "Alerting", icon: Bell, expanded: false },
  { label: "Metrics", icon: LayoutGrid, expanded: true },
  { label: "Dashboards", icon: LayoutDashboard, expanded: false },
] as const;

const METRICS_DATA = [
  { label: "http.client.response.body.size", value: "3,064,712K" },
  { label: "kafka.consumer.fetch.total", value: "1,579,001K" },
  { label: "k8s.pod.network.errors.total", value: "1,412,860K" },
  { label: "http.client.request.duration", value: "1,389,567K" },
] as const;

const TABLE_DATA = [
  { name: "http.client.active_requests", type: "SUM", unit: "{request}", datapoints: "54K", score: 56, count: 280, resources: 5, checks: 1, dashboards: 2, queries: 12 },
  { name: "http.client.connections.duration", type: "HIST", unit: "s", datapoints: "3,115K", score: 78.29, count: 7516, resources: 96, checks: 16, dashboards: 28, queries: 126 },
  { name: "http.client.open_connections", type: "SUM", unit: "{connecti...", datapoints: "1,064K", score: 90, count: 1080, resources: 12, checks: 0, dashboards: 1, queries: 5 },
  { name: "http.client.response.body.size", type: "EXP HIST", unit: "By", datapoints: "3,064,712K", score: 105855, count: 88918, resources: 84, checks: 17, dashboards: 13, queries: 45 },
] as const;

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

interface SaaspoFeatureSectionsDash0Props {
  title?: string;
  subtitle?: string;
  features?: readonly string[];
  buttonText?: string;
  buttonHref?: string;
  activeTab?: string;
}

export default function SaaspoFeatureSectionsDash0({
  title = "Complete Visibility\nAcross Your Stack.",
  subtitle = "Granular Visibility,\nActionable Data",
  features = FEATURES,
  buttonText = "Read the docs",
  buttonHref = "#",
  activeTab: initialActiveTab = "metrics",
}: SaaspoFeatureSectionsDash0Props) {
  const [activeTab, setActiveTab] = useState(initialActiveTab);

  return (
    <section
      className="relative w-full py-16 px-6 md:px-12 lg:px-20"
      style={{ backgroundColor: COLORS.background }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-medium leading-tight mb-10 whitespace-pre-line"
          style={{ color: COLORS.textPrimary }}
        >
          {title}
        </motion.h1>

        {/* Tab Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
          viewport={{ once: true }}
          className="flex gap-8 mb-8 border-b"
          style={{ borderColor: COLORS.border }}
        >
          {TABS.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className="relative pb-4 text-base font-normal transition-colors"
              style={{
                color: activeTab === tab.id ? COLORS.textPrimary : COLORS.textSecondary,
              }}
            >
              {tab.label}
              {activeTab === tab.id && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute bottom-0 left-0 right-0 h-0.5"
                  style={{ backgroundColor: COLORS.textPrimary }}
                />
              )}
            </button>
          ))}
        </motion.div>

        {/* Content Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          viewport={{ once: true }}
          className="rounded-2xl p-8 md:p-12"
          style={{ backgroundColor: COLORS.cardBackground }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Left Content */}
            <div className="flex flex-col justify-between">
              <div>
                <h2
                  className="text-3xl md:text-4xl font-normal leading-tight mb-8 whitespace-pre-line"
                  style={{ color: COLORS.textPrimary }}
                >
                  {subtitle}
                </h2>

                <ul className="space-y-4">
                  {features.map((feature, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-start gap-3"
                    >
                      <span
                        className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0"
                        style={{ backgroundColor: COLORS.accent }}
                      />
                      <span
                        className="text-base md:text-lg"
                        style={{ color: COLORS.textSecondary }}
                      >
                        {feature}
                      </span>
                    </motion.li>
                  ))}
                </ul>
              </div>

              <motion.a
                href={buttonHref}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center justify-center px-6 py-3 rounded-lg text-base font-medium mt-10 w-fit transition-colors"
                style={{
                  backgroundColor: COLORS.accent,
                  color: COLORS.textPrimary,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = COLORS.accentHover;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = COLORS.accent;
                }}
              >
                {buttonText}
              </motion.a>
            </div>

            {/* Right Content - Dashboard UI */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              viewport={{ once: true }}
              className="rounded-xl overflow-hidden border"
              style={{
                backgroundColor: "#0F0F0F",
                borderColor: COLORS.border
              }}
            >
              <DashboardUI />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// Dashboard UI Component
function DashboardUI() {
  return (
    <div className="flex h-full min-h-[500px]">
      {/* Sidebar */}
      <div
        className="w-48 border-r flex flex-col"
        style={{ borderColor: COLORS.border, backgroundColor: "#0F0F0F" }}
      >
        {/* Logo */}
        <div className="p-4 border-b" style={{ borderColor: COLORS.border }}>
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded bg-purple-500 flex items-center justify-center">
              <span className="text-xs text-white font-bold">O</span>
            </div>
            <span className="text-sm text-white font-medium">opentelemetry-demo-eu</span>
          </div>
          <div className="flex items-center gap-1 mt-2 text-xs text-gray-500">
            <span>Default</span>
            <ChevronDown className="w-3 h-3" />
          </div>
        </div>

        {/* Nav Items */}
        <nav className="flex-1 p-2">
          {SIDEBAR_ITEMS.map((item, index) => (
            <div key={index}>
              <div
                className={`flex items-center gap-2 px-3 py-2 rounded text-sm ${
                  item.expanded ? "bg-gray-800/50 text-white" : "text-gray-400"
                }`}
              >
                <item.icon className="w-4 h-4" />
                <span>{item.label}</span>
                {item.expanded && <ChevronDown className="w-3 h-3 ml-auto" />}
              </div>
              {item.expanded && (
                <div className="ml-4 mt-1 space-y-1">
                  <div className="flex items-center gap-2 px-3 py-1.5 rounded text-sm bg-gray-700/50 text-white">
                    <Search className="w-3 h-3" />
                    <span>Explorer</span>
                  </div>
                  <div className="flex items-center gap-2 px-3 py-1.5 text-sm text-gray-500">
                    <span className="ml-5">Query builder</span>
                  </div>
                  <div className="flex items-center gap-2 px-3 py-1.5 text-sm text-gray-500">
                    <LayoutDashboard className="w-3 h-3" />
                    <span>Dashboards</span>
                  </div>
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* User */}
        <div className="p-4 border-t" style={{ borderColor: COLORS.border }}>
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-gray-600 flex items-center justify-center">
              <User className="w-4 h-4 text-gray-300" />
            </div>
            <div>
              <p className="text-xs text-white">Devin Bernier</p>
              <p className="text-xs text-gray-500">devin.bernier@url.de</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <div
          className="flex items-center justify-between p-3 border-b"
          style={{ borderColor: COLORS.border }}
        >
          <div className="flex items-center gap-2">
            <span className="text-white text-sm font-medium">Metrics</span>
            <span className="px-2 py-0.5 rounded text-xs bg-gray-700 text-gray-300">
              Filter
            </span>
          </div>
          <div className="flex items-center gap-2 text-xs text-gray-400">
            <span>Last 30 minutes</span>
            <span className="px-2 py-0.5 rounded bg-purple-600/30 text-purple-300">
              Europe/Berlin
            </span>
          </div>
        </div>

        {/* Metrics Cards */}
        <div className="grid grid-cols-4 gap-2 p-3">
          {METRICS_DATA.map((metric, index) => (
            <div
              key={index}
              className="p-3 rounded border text-center"
              style={{ borderColor: COLORS.border, backgroundColor: "#141414" }}
            >
              <p className="text-lg font-semibold text-white">{metric.value}</p>
              <p className="text-xs text-gray-500 truncate">{metric.label}</p>
            </div>
          ))}
        </div>

        {/* Table */}
        <div className="flex-1 overflow-auto p-3">
          <table className="w-full text-xs">
            <thead>
              <tr className="text-gray-500 border-b" style={{ borderColor: COLORS.border }}>
                <th className="text-left py-2 px-2">Metric name</th>
                <th className="text-left py-2 px-1">Type</th>
                <th className="text-left py-2 px-1">Unit</th>
                <th className="text-right py-2 px-1">Datapoints</th>
                <th className="text-right py-2 px-1">Score</th>
                <th className="text-right py-2 px-1">Count</th>
              </tr>
            </thead>
            <tbody>
              {TABLE_DATA.map((row, index) => (
                <tr
                  key={index}
                  className="border-b text-gray-300"
                  style={{ borderColor: COLORS.border }}
                >
                  <td className="py-2 px-2 flex items-center gap-1">
                    <ChevronRight className="w-3 h-3 text-gray-600" />
                    <span className="truncate max-w-[120px]">{row.name}</span>
                  </td>
                  <td className="py-2 px-1">
                    <span
                      className={`px-1.5 py-0.5 rounded text-xs ${
                        row.type === "SUM"
                          ? "bg-green-900/30 text-green-400"
                          : row.type === "HIST"
                          ? "bg-purple-900/30 text-purple-400"
                          : "bg-blue-900/30 text-blue-400"
                      }`}
                    >
                      {row.type}
                    </span>
                  </td>
                  <td className="py-2 px-1 text-gray-500 truncate max-w-[60px]">{row.unit}</td>
                  <td className="py-2 px-1 text-right">{row.datapoints}</td>
                  <td className="py-2 px-1 text-right">{row.score}</td>
                  <td className="py-2 px-1 text-right">{row.count}</td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Tree items */}
          <div className="mt-3 space-y-1 text-xs">
            <div className="flex items-center gap-1 text-gray-400">
              <ChevronRight className="w-3 h-3" />
              <span>http.server</span>
              <span className="px-1.5 py-0.5 rounded bg-gray-700 text-gray-300 ml-1">4</span>
            </div>
            <div className="flex items-center gap-1 text-gray-400">
              <ChevronRight className="w-3 h-3" />
              <span>k8s</span>
              <span className="px-1.5 py-0.5 rounded bg-gray-700 text-gray-300 ml-1">23</span>
            </div>
            <div className="flex items-center gap-1 text-gray-400">
              <ChevronRight className="w-3 h-3" />
              <span>kafka</span>
              <span className="px-1.5 py-0.5 rounded bg-gray-700 text-gray-300 ml-1">18</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
