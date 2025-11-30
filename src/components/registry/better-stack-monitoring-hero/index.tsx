"use client";

import { useState } from "react";
import { motion } from "motion/react";
import {
  Activity,
  Bell,
  Users,
  Shield,
  Link2,
  CreditCard,
  HelpCircle,
  ChevronDown,
  Zap,
  BarChart3,
  ExternalLink,
} from "lucide-react";

interface BetterStackMonitoringHeroProps {
  headline?: string;
  subheadline?: string;
  inputPlaceholder?: string;
  ctaText?: string;
  bottomText?: string;
  bottomLinkText?: string;
  onSubmit?: (email: string) => void;
  onBookDemo?: () => void;
}

// Dashboard Mock Component
function DashboardMock() {
  return (
    <div className="relative w-full max-w-[600px] rounded-xl bg-[#1a1f2e] shadow-2xl overflow-hidden border border-[#2a3142]">
      {/* Header Bar */}
      <div className="flex items-center gap-2 px-4 py-2.5 border-b border-[#2a3142] bg-[#161b28]">
        <Zap className="w-4 h-4 text-emerald-400" />
        <span className="text-white text-sm font-medium">Better Uptime</span>
        <ChevronDown className="w-3.5 h-3.5 text-gray-400 ml-0.5" />
      </div>

      <div className="flex">
        {/* Sidebar */}
        <div className="w-44 border-r border-[#2a3142] py-3 px-2 bg-[#161b28] shrink-0">
          <nav className="space-y-0.5">
            <SidebarItem icon={<Activity className="w-4 h-4" />} label="Monitors" />
            <SidebarItem icon={<Zap className="w-4 h-4" />} label="Heartbeats" />
            <SidebarItem icon={<Users className="w-4 h-4" />} label="Who's on call?" />
            <SidebarItem icon={<Bell className="w-4 h-4" />} label="Incidents" active />
            <SidebarItem icon={<Users className="w-4 h-4" />} label="Team members" badge="4 days 1 hour 4 minutes" />
            <SidebarItem icon={<BarChart3 className="w-4 h-4" />} label="Status pages" />
            <SidebarItem icon={<Shield className="w-4 h-4" />} label="Escalation policies" />
            <SidebarItem icon={<Link2 className="w-4 h-4" />} label="Integrations" />

            <div className="!mt-4 pt-3 border-t border-[#2a3142]">
              <SidebarItem icon={<CreditCard className="w-4 h-4" />} label="Billing" />
              <SidebarItem icon={<HelpCircle className="w-4 h-4" />} label="Help & Support" />
            </div>

            <div className="!mt-3 pt-3 border-t border-[#2a3142]">
              <div className="flex items-center gap-2 px-2 py-1.5">
                <div className="w-6 h-6 rounded-full bg-emerald-500 flex items-center justify-center text-white text-xs font-medium">
                  W
                </div>
                <div className="text-xs">
                  <div className="text-white font-medium">Team</div>
                  <div className="text-gray-500 text-[10px]">Wallmine</div>
                </div>
              </div>
            </div>
          </nav>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-4 min-h-[320px]">
          {/* Status Page Header */}
          <div className="bg-[#232938] rounded-lg p-3 mb-3">
            <div className="flex items-center gap-2 text-sm">
              <span className="text-gray-400">wallmine</span>
              <span className="text-white">.com/status</span>
              <ExternalLink className="w-3 h-3 text-gray-500 ml-1" />
            </div>
            <div className="flex items-center gap-4 mt-2 text-xs text-gray-400">
              <span className="flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                Sets a Year ago
              </span>
              <span className="flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-gray-500"></span>
                Subscribed
              </span>
              <span className="flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-blue-400"></span>
                Custom domain
              </span>
            </div>

            {/* Uptime Stats */}
            <div className="flex items-center gap-6 mt-3 pt-3 border-t border-[#2a3142]">
              <div>
                <div className="text-[10px] text-gray-500 uppercase">Monitor is up for</div>
                <div className="text-white text-sm font-medium">4 days 1 hour 4 minutes</div>
              </div>
              <div>
                <div className="text-[10px] text-gray-500 uppercase">Last checked</div>
                <div className="text-white text-sm font-medium">16 seconds ago</div>
              </div>
            </div>
          </div>

          {/* Response Time Chart */}
          <div className="bg-[#232938] rounded-lg p-3">
            <div className="flex items-center justify-between mb-2">
              <span className="text-white text-sm font-medium">Response time</span>
              <span className="text-[10px] text-gray-500">Response time in ms (across all our 6 global</span>
            </div>

            {/* Chart Area */}
            <div className="relative h-24 mt-2">
              <ResponseTimeChart />
            </div>

            {/* Legend */}
            <div className="flex items-center gap-4 mt-3 text-[10px]">
              <span className="flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                <span className="text-gray-400">North America</span>
              </span>
              <span className="flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-yellow-400"></span>
                <span className="text-gray-400">Europe</span>
              </span>
              <span className="flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-blue-400"></span>
                <span className="text-gray-400">Asia Pacific</span>
              </span>
              <span className="flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-purple-400"></span>
                <span className="text-gray-400">South America</span>
              </span>
            </div>

            {/* Bottom Stats Table */}
            <div className="mt-3 pt-3 border-t border-[#2a3142]">
              <div className="grid grid-cols-4 gap-2 text-[10px]">
                <div className="text-gray-500">Time period</div>
                <div className="text-gray-500 text-right">Availability</div>
                <div className="text-gray-500 text-right">Downtime</div>
                <div className="text-gray-500 text-right">Incidents</div>

                <div className="text-gray-400">Today</div>
                <div className="text-emerald-400 text-right">100%</div>
                <div className="text-gray-400 text-right">none</div>
                <div className="text-gray-400 text-right">-</div>

                <div className="text-gray-400">Last 7 days</div>
                <div className="text-emerald-400 text-right">100%</div>
                <div className="text-gray-400 text-right">none</div>
                <div className="text-gray-400 text-right">-</div>

                <div className="text-gray-400">Last 30 days</div>
                <div className="text-emerald-400 text-right">99.7%</div>
                <div className="text-gray-400 text-right">7min</div>
                <div className="text-gray-400 text-right">-</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function SidebarItem({
  icon,
  label,
  active = false,
  badge,
}: {
  icon: React.ReactNode;
  label: string;
  active?: boolean;
  badge?: string;
}) {
  return (
    <div
      className={`flex items-center gap-2 px-2 py-1.5 rounded-md text-xs cursor-pointer transition-colors ${
        active ? "bg-[#2a3142] text-white" : "text-gray-400 hover:bg-[#232938] hover:text-gray-300"
      }`}
    >
      {icon}
      <span className="truncate">{label}</span>
    </div>
  );
}

function ResponseTimeChart() {
  // SVG chart with line representing response time data
  return (
    <svg viewBox="0 0 400 80" className="w-full h-full">
      {/* Grid lines */}
      <line x1="0" y1="20" x2="400" y2="20" stroke="#2a3142" strokeWidth="1" />
      <line x1="0" y1="40" x2="400" y2="40" stroke="#2a3142" strokeWidth="1" />
      <line x1="0" y1="60" x2="400" y2="60" stroke="#2a3142" strokeWidth="1" />

      {/* Y-axis labels */}
      <text x="395" y="18" fill="#6b7280" fontSize="8" textAnchor="end">
        200ms
      </text>
      <text x="395" y="38" fill="#6b7280" fontSize="8" textAnchor="end">
        100ms
      </text>
      <text x="395" y="58" fill="#6b7280" fontSize="8" textAnchor="end">
        50ms
      </text>

      {/* Chart lines - Green (North America) */}
      <path
        d="M0,50 Q20,48 40,52 T80,45 T120,48 T160,50 T200,46 T240,52 T280,48 T320,50 T360,47 T400,50"
        fill="none"
        stroke="#34d399"
        strokeWidth="1.5"
        opacity="0.8"
      />

      {/* Chart lines - Yellow (Europe) */}
      <path
        d="M0,40 Q20,38 40,42 T80,35 T120,40 T160,38 T200,42 T240,36 T280,40 T320,38 T360,42 T400,38"
        fill="none"
        stroke="#fbbf24"
        strokeWidth="1.5"
        opacity="0.8"
      />

      {/* Chart lines - Blue (Asia Pacific) */}
      <path
        d="M0,55 Q20,58 40,54 T80,58 T120,52 T160,56 T200,54 T240,58 T280,52 T320,56 T360,54 T400,58"
        fill="none"
        stroke="#60a5fa"
        strokeWidth="1.5"
        opacity="0.8"
      />
    </svg>
  );
}

// Decorative vertical bars component - heights are fixed to avoid hydration mismatch
const BAR_HEIGHTS = [75, 90, 65, 85, 70]; // percentages

function VerticalBars() {
  return (
    <div className="flex gap-1 h-full">
      {BAR_HEIGHTS.map((height, i) => (
        <div
          key={i}
          className="w-2 rounded-full"
          style={{
            background: `linear-gradient(to top, #06b6d4, #3b82f6)`,
            height: `${height}%`,
            opacity: 0.6 + i * 0.1,
          }}
        />
      ))}
    </div>
  );
}

// Main Component
export default function BetterStackMonitoringHero({
  headline = "Downtime?\nGet notified",
  subheadline = "Get a screenshot of the error when your site goes down and a detailed second-by-second timeline.",
  inputPlaceholder = "Your work e-mail",
  ctaText = "Start in 30 seconds",
  bottomText = "Start monitoring for free or",
  bottomLinkText = "book a demo",
  onSubmit,
  onBookDemo,
}: BetterStackMonitoringHeroProps) {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit?.(email);
  };

  return (
    <section className="relative min-h-screen w-full bg-white overflow-hidden">
      {/* Main Content */}
      <div className="relative mx-auto max-w-7xl px-6 pt-20 pb-16 sm:px-8 lg:px-12 lg:pt-28">
        <div className="flex flex-col lg:flex-row lg:items-center lg:gap-12">
          {/* Left Column - Text Content */}
          <div className="flex-1 lg:max-w-xl">
            {/* Decorative Vertical Bars */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="absolute left-6 top-[60%] h-48 hidden lg:flex"
            >
              <VerticalBars />
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-[#1a1a1a] leading-[1.1] whitespace-pre-line"
            >
              {headline}
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.6 }}
              className="mt-6 text-base sm:text-lg text-[#6b7280] leading-relaxed max-w-lg"
            >
              {subheadline}
            </motion.p>

            {/* Email Input Form */}
            <motion.form
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25, duration: 0.6 }}
              onSubmit={handleSubmit}
              className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-0"
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={inputPlaceholder}
                className="flex-1 px-5 py-3.5 text-base text-[#1a1a1a] bg-white border border-[#e5e7eb] rounded-lg sm:rounded-r-none placeholder:text-[#9ca3af] focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
              />
              <button
                type="submit"
                className="px-6 py-3.5 text-base font-medium text-white bg-emerald-500 rounded-lg sm:rounded-l-none hover:bg-emerald-600 transition-colors whitespace-nowrap"
              >
                {ctaText}
              </button>
            </motion.form>

            {/* Bottom Text */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="mt-4 text-sm text-[#6b7280]"
            >
              {bottomText}{" "}
              <button
                onClick={onBookDemo}
                className="text-emerald-500 hover:text-emerald-600 font-medium transition-colors"
              >
                {bottomLinkText}
              </button>{" "}
              with an engineer
            </motion.p>
          </div>

          {/* Right Column - Dashboard Mock */}
          <motion.div
            initial={{ opacity: 0, x: 40, y: 20 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="flex-1 mt-12 lg:mt-0 lg:flex lg:justify-end"
          >
            <DashboardMock />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
