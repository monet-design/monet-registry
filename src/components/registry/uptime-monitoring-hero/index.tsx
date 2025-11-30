"use client";

import { useState } from "react";
import { motion } from "motion/react";
import {
  ChevronDown,
  Zap,
  ExternalLink,
  Activity,
  Heart,
  Users,
  AlertCircle,
  Users2,
  FileText,
  Bell,
  Settings,
  Moon,
  MessageSquare,
  CreditCard,
  HelpCircle,
} from "lucide-react";
import "./font.css";

// Types
interface NavItem {
  label: string;
  href?: string;
  hasDropdown?: boolean;
}

interface SecondaryNavItem {
  label: string;
  href?: string;
  isExternal?: boolean;
}

interface LogoItem {
  name: string;
  logo: React.ReactNode;
}

interface UptimeMonitoringHeroProps {
  // Top Navigation
  brandName?: string;
  topNavItems?: NavItem[];
  bookDemoText?: string;
  // Secondary Navigation
  productName?: string;
  secondaryNavItems?: SecondaryNavItem[];
  signInText?: string;
  signUpText?: string;
  // Hero Content
  headline?: string;
  highlightWord?: string;
  subheadline?: string;
  inputPlaceholder?: string;
  ctaText?: string;
  footerText?: string;
  footerLinkText?: string;
  // Social Proof
  socialProofTitle?: string;
  socialProofSubtitle?: string;
  logos?: LogoItem[];
  // Callbacks
  onSubmit?: (email: string) => void;
  onBookDemo?: () => void;
}

// Default navigation items
const defaultTopNavItems: NavItem[] = [
  { label: "Platform", hasDropdown: true },
  { label: "Solutions", hasDropdown: true },
  { label: "Company", hasDropdown: true },
  { label: "Community", hasDropdown: true },
  { label: "Help & Support" },
];

const defaultSecondaryNavItems: SecondaryNavItem[] = [
  { label: "Overview" },
  { label: "Monitoring" },
  { label: "Incident management" },
  { label: "Status page" },
  { label: "Pricing" },
  { label: "Documentation", isExternal: true },
];

// Dashboard sidebar menu items
const sidebarMenuItems = [
  { icon: Activity, label: "Monitors", active: true },
  { icon: Heart, label: "Heartbeats" },
  { icon: Users, label: "Who's on call?" },
  { icon: AlertCircle, label: "Incidents" },
  { icon: Users2, label: "Team members" },
  { icon: FileText, label: "Status pages" },
  { icon: Bell, label: "Escalation policies" },
  { icon: Settings, label: "Integrations" },
];

const sidebarBottomItems = [
  { icon: CreditCard, label: "Billing" },
  { icon: HelpCircle, label: "Help & Support" },
  { icon: Moon, label: "Light mode" },
];

// Logo components for trusted companies
function CanadaLogo() {
  return (
    <svg viewBox="0 0 120 32" className="h-6 w-auto fill-current">
      <text x="0" y="24" fontSize="20" fontWeight="400" fontFamily="serif">
        Canada
      </text>
      <text x="75" y="14" fontSize="10" fill="currentColor">
        ca
      </text>
    </svg>
  );
}

function DecathlonLogo() {
  return (
    <svg viewBox="0 0 100 24" className="h-5 w-auto fill-current">
      <text x="0" y="18" fontSize="14" fontWeight="700" fontFamily="sans-serif" letterSpacing="1">
        DECATHLON
      </text>
    </svg>
  );
}

function MakeLogo() {
  return (
    <svg viewBox="0 0 80 24" className="h-5 w-auto fill-current">
      <rect x="0" y="8" width="8" height="8" rx="1" />
      <text x="14" y="18" fontSize="16" fontWeight="500" fontFamily="sans-serif">
        make
      </text>
    </svg>
  );
}

function RedisLogo() {
  return (
    <svg viewBox="0 0 80 24" className="h-5 w-auto fill-current">
      <circle cx="10" cy="12" r="6" fill="#DC382D" />
      <text x="22" y="18" fontSize="16" fontWeight="500" fontFamily="sans-serif">
        redis
      </text>
    </svg>
  );
}

function BraveLogo() {
  return (
    <svg viewBox="0 0 80 24" className="h-5 w-auto fill-current">
      <path d="M8 4L16 4L18 8L16 20H8L6 8L8 4Z" fill="#FB542B" />
      <text x="24" y="18" fontSize="16" fontWeight="500" fontFamily="sans-serif">
        brave
      </text>
    </svg>
  );
}

function WizzLogo() {
  return (
    <svg viewBox="0 0 60 24" className="h-5 w-auto fill-current">
      <text x="0" y="18" fontSize="16" fontWeight="700" fontFamily="sans-serif" fontStyle="italic">
        WIZZ
      </text>
    </svg>
  );
}

function SygicLogo() {
  return (
    <svg viewBox="0 0 80 24" className="h-5 w-auto fill-current">
      <circle cx="10" cy="12" r="8" fill="none" stroke="currentColor" strokeWidth="2" />
      <text x="24" y="18" fontSize="16" fontWeight="400" fontFamily="sans-serif">
        Sygic
      </text>
    </svg>
  );
}

function AccentureLogo() {
  return (
    <svg viewBox="0 0 100 24" className="h-5 w-auto fill-current">
      <text x="0" y="18" fontSize="16" fontWeight="400" fontFamily="sans-serif">
        accenture
      </text>
      <text x="68" y="10" fontSize="8">{">"}</text>
    </svg>
  );
}

function EsetLogo() {
  return (
    <svg viewBox="0 0 60 24" className="h-5 w-auto fill-current">
      <rect x="0" y="4" width="52" height="16" rx="2" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <text x="6" y="17" fontSize="12" fontWeight="700" fontFamily="sans-serif">
        eset
      </text>
    </svg>
  );
}

function DrataLogo() {
  return (
    <svg viewBox="0 0 80 24" className="h-5 w-auto fill-current">
      <text x="0" y="18" fontSize="16" fontWeight="500" fontFamily="sans-serif" letterSpacing="2">
        DRATA
      </text>
    </svg>
  );
}

function BuyMeACoffeeLogo() {
  return (
    <svg viewBox="0 0 140 24" className="h-5 w-auto fill-current">
      <rect x="0" y="6" width="12" height="12" rx="2" />
      <text x="18" y="18" fontSize="14" fontWeight="400" fontFamily="cursive" fontStyle="italic">
        Buy me a coffee
      </text>
    </svg>
  );
}

const defaultLogos: LogoItem[] = [
  { name: "Canada", logo: <CanadaLogo /> },
  { name: "Decathlon", logo: <DecathlonLogo /> },
  { name: "Make", logo: <MakeLogo /> },
  { name: "Redis", logo: <RedisLogo /> },
  { name: "Brave", logo: <BraveLogo /> },
  { name: "Wizz", logo: <WizzLogo /> },
  { name: "Sygic", logo: <SygicLogo /> },
  { name: "Accenture", logo: <AccentureLogo /> },
  { name: "Eset", logo: <EsetLogo /> },
  { name: "Drata", logo: <DrataLogo /> },
  { name: "Buy Me a Coffee", logo: <BuyMeACoffeeLogo /> },
];

// Dashboard Preview Component
function DashboardPreview() {
  return (
    <div className="relative mx-auto max-w-5xl px-4">
      {/* Decorative light beams */}
      <div className="absolute -top-20 left-1/4 h-96 w-px bg-gradient-to-b from-transparent via-blue-500/20 to-transparent transform -rotate-12" />
      <div className="absolute -top-20 right-1/4 h-96 w-px bg-gradient-to-b from-transparent via-blue-500/20 to-transparent transform rotate-12" />

      {/* Dashboard container */}
      <div className="relative overflow-hidden rounded-xl border border-[#1e2433] bg-[#0f1219] shadow-2xl">
        <div className="flex">
          {/* Sidebar */}
          <div className="w-56 border-r border-[#1e2433] bg-[#0c0e16] p-3">
            {/* Logo */}
            <div className="flex items-center gap-2 px-2 py-2 mb-4">
              <Zap size={16} className="text-green-400" />
              <span className="text-sm font-medium text-white">Better Uptime</span>
              <ChevronDown size={14} className="text-gray-500 ml-auto" />
            </div>

            {/* Menu items */}
            <div className="space-y-0.5">
              {sidebarMenuItems.map((item, index) => (
                <div
                  key={index}
                  className={`flex items-center gap-2.5 px-2 py-1.5 rounded-md text-xs ${
                    item.active
                      ? "bg-[#1a1f2e] text-white"
                      : "text-gray-400 hover:text-gray-300"
                  }`}
                >
                  <item.icon size={14} />
                  <span>{item.label}</span>
                </div>
              ))}
            </div>

            {/* Divider */}
            <div className="my-4 border-t border-[#1e2433]" />

            {/* Bottom items */}
            <div className="space-y-0.5">
              {sidebarBottomItems.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2.5 px-2 py-1.5 rounded-md text-xs text-gray-400 hover:text-gray-300"
                >
                  <item.icon size={14} />
                  <span>{item.label}</span>
                </div>
              ))}
            </div>

            {/* Team section */}
            <div className="mt-4 p-2 rounded-md bg-[#1a1f2e]">
              <div className="flex items-center gap-2">
                <MessageSquare size={14} className="text-gray-400" />
                <div>
                  <div className="text-xs text-white">Team</div>
                  <div className="text-[10px] text-gray-500">Wallmine</div>
                </div>
              </div>
            </div>
          </div>

          {/* Main content */}
          <div className="flex-1 p-4">
            {/* Top bar */}
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2 text-gray-400 text-xs">
                <span>&lt;</span>
                <span>Monitors</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 rounded bg-gray-700" />
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full bg-green-600" />
                  <span className="text-xs text-white">Terry Schneifer</span>
                  <ChevronDown size={12} className="text-gray-500" />
                </div>
              </div>
            </div>

            {/* Monitor info */}
            <div className="mb-4">
              <div className="flex items-center gap-2 mb-1">
                <div className="w-2 h-2 rounded-full bg-green-500" />
                <span className="text-white font-medium">wallmine.com/status</span>
              </div>
              <div className="text-[10px] text-green-400">Up | Checked every 30 seconds</div>
            </div>

            {/* Action buttons */}
            <div className="flex items-center gap-3 mb-4">
              <button className="flex items-center gap-1.5 px-2.5 py-1 rounded border border-[#2a3042] text-[10px] text-gray-400">
                <AlertCircle size={10} />
                Send a test alert
              </button>
              <button className="flex items-center gap-1.5 px-2.5 py-1 rounded border border-[#2a3042] text-[10px] text-gray-400">
                <Activity size={10} />
                Incidents
              </button>
              <button className="flex items-center gap-1.5 px-2.5 py-1 rounded border border-[#2a3042] text-[10px] text-gray-400">
                Pause this monitor
              </button>
              <button className="flex items-center gap-1.5 px-2.5 py-1 rounded border border-[#2a3042] text-[10px] text-gray-400">
                <Settings size={10} />
                Configure
              </button>
              <div className="ml-auto text-[10px] text-gray-400">
                <span className="text-cyan-400">@Cameron</span> is currently on-call
              </div>
            </div>

            {/* Stats cards */}
            <div className="grid grid-cols-3 gap-3 mb-4">
              <div className="p-3 rounded-lg bg-[#161b26] border border-[#1e2433]">
                <div className="text-[10px] text-gray-500 mb-1">Monitor is up for</div>
                <div className="text-sm font-medium text-white">4 days 1 hour 4 minutes</div>
              </div>
              <div className="p-3 rounded-lg bg-[#161b26] border border-[#1e2433]">
                <div className="text-[10px] text-gray-500 mb-1">Last checked</div>
                <div className="text-sm font-medium text-white">16 seconds ago</div>
              </div>
              <div className="p-3 rounded-lg bg-[#161b26] border border-[#1e2433]">
                <div className="text-[10px] text-gray-500 mb-1">Incidents</div>
                <div className="text-sm font-medium text-white">17</div>
              </div>
            </div>

            {/* Response time chart */}
            <div className="p-4 rounded-lg bg-[#161b26] border border-[#1e2433]">
              <div className="flex items-center justify-between mb-3">
                <div>
                  <div className="text-sm font-medium text-white mb-0.5">Response time</div>
                  <div className="text-[10px] text-gray-500">Response times across regions in the last 24 hours</div>
                </div>
                <div className="flex items-center gap-1 bg-[#0f1219] rounded p-0.5">
                  <button className="px-2 py-0.5 text-[10px] text-gray-500">Week</button>
                  <button className="px-2 py-0.5 text-[10px] text-gray-500">Month</button>
                  <button className="px-2 py-0.5 text-[10px] text-white bg-[#1a1f2e] rounded">Day</button>
                </div>
              </div>

              {/* Chart placeholder */}
              <div className="h-24 relative">
                <svg className="w-full h-full" viewBox="0 0 600 100" preserveAspectRatio="none">
                  {/* Grid lines */}
                  <line x1="0" y1="25" x2="600" y2="25" stroke="#1e2433" strokeWidth="1" />
                  <line x1="0" y1="50" x2="600" y2="50" stroke="#1e2433" strokeWidth="1" />
                  <line x1="0" y1="75" x2="600" y2="75" stroke="#1e2433" strokeWidth="1" />

                  {/* Chart line - cyan/blue color */}
                  <path
                    d="M0,60 Q50,55 100,58 T200,52 T300,45 T400,48 T500,42 T600,50"
                    fill="none"
                    stroke="#22d3ee"
                    strokeWidth="1.5"
                  />
                  {/* Area fill */}
                  <path
                    d="M0,60 Q50,55 100,58 T200,52 T300,45 T400,48 T500,42 T600,50 V100 H0 Z"
                    fill="url(#chartGradient)"
                  />
                  <defs>
                    <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#22d3ee" stopOpacity="0.2" />
                      <stop offset="100%" stopColor="#22d3ee" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                </svg>

                {/* Y-axis labels */}
                <div className="absolute left-0 top-0 h-full flex flex-col justify-between text-[8px] text-gray-500 -ml-6">
                  <span>30s</span>
                  <span>20s</span>
                  <span>10s</span>
                  <span>0</span>
                </div>
              </div>

              {/* X-axis labels */}
              <div className="flex justify-between mt-2 text-[8px] text-gray-500">
                <span>08:00 (JST)</span>
                <span>11:00 (JST)</span>
                <span>02:00 (JST)</span>
                <span>05:00 (JST)</span>
                <span>08:00 (JST)</span>
                <span>11:00 (JST)</span>
                <span>02:00 (JST)</span>
                <span>05:00 (JST)</span>
              </div>

              {/* Legend */}
              <div className="flex items-center gap-4 mt-3 text-[10px]">
                <div className="flex items-center gap-1.5">
                  <div className="w-2 h-2 rounded-full bg-cyan-400" />
                  <span className="text-gray-400">North America</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <div className="w-2 h-2 rounded-full bg-blue-500" />
                  <span className="text-gray-400">Asia</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <div className="w-2 h-2 rounded-full bg-indigo-500" />
                  <span className="text-gray-400">Australia</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <div className="w-2 h-2 rounded-full bg-purple-500" />
                  <span className="text-gray-400">South America</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <div className="w-2 h-2 rounded-full bg-rose-500" />
                  <span className="text-gray-400">Europe</span>
                </div>
              </div>
            </div>

            {/* Table */}
            <div className="mt-4">
              <table className="w-full text-[10px]">
                <thead>
                  <tr className="text-gray-500 border-b border-[#1e2433]">
                    <th className="text-left py-2 font-normal">Time period</th>
                    <th className="text-center py-2 font-normal">Availability</th>
                    <th className="text-center py-2 font-normal">Downtime</th>
                    <th className="text-center py-2 font-normal">Incidents</th>
                    <th className="text-center py-2 font-normal">Longest incident</th>
                    <th className="text-center py-2 font-normal">Avg. incident</th>
                  </tr>
                </thead>
                <tbody className="text-gray-300">
                  <tr className="border-b border-[#1e2433]">
                    <td className="py-2">Today</td>
                    <td className="text-center text-green-400">100%</td>
                    <td className="text-center">none</td>
                    <td className="text-center">0</td>
                    <td className="text-center">none</td>
                    <td className="text-center">Ongoing</td>
                  </tr>
                  <tr>
                    <td className="py-2">Last 7 days</td>
                    <td className="text-center text-green-400">100%</td>
                    <td className="text-center">none</td>
                    <td className="text-center">0</td>
                    <td className="text-center">none</td>
                    <td className="text-center">Ongoing</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Main Component
export default function UptimeMonitoringHero({
  brandName = "Better Stack",
  topNavItems = defaultTopNavItems,
  bookDemoText = "Book a demo",
  productName = "Better Uptime",
  secondaryNavItems = defaultSecondaryNavItems,
  signInText = "Sign in",
  signUpText = "Sign up",
  headline = "We call you when your",
  highlightWord = "Apdex decreases",
  subheadline = "Get notified with a radically better infrastructure monitoring platform.",
  inputPlaceholder = "Your work e-mail",
  ctaText = "Start in 30 seconds",
  footerText = "Start monitoring for free or",
  footerLinkText = "book a demo",
  socialProofTitle = "Loved by teams around the world",
  socialProofSubtitle = "Software engineers from high-growth startups to Fortune 500 companies choose Better Stack.",
  logos = defaultLogos,
  onSubmit,
  onBookDemo,
}: UptimeMonitoringHeroProps) {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit?.(email);
  };

  return (
    <section className="relative min-h-screen w-full bg-[#0c0e16] font-inter overflow-hidden">
      {/* Background gradient effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
        <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl" />
      </div>

      {/* Top Navigation Bar */}
      <motion.nav
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="relative flex items-center justify-between px-6 py-3 border-b border-[#1e2433]/50"
      >
        {/* Brand Logo */}
        <div className="flex items-center gap-2">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <path
              d="M12 2L4 6V12C4 16.42 7.39 20.53 12 22C16.61 20.53 20 16.42 20 12V6L12 2Z"
              fill="#22c55e"
            />
          </svg>
          <span className="text-sm font-medium text-white">{brandName}</span>
        </div>

        {/* Top Nav Items */}
        <div className="hidden lg:flex items-center gap-6">
          {topNavItems.map((item, index) => (
            <button
              key={index}
              className="flex items-center gap-1 text-sm text-gray-400 hover:text-white transition-colors"
            >
              {item.label}
              {item.hasDropdown && <ChevronDown size={14} />}
            </button>
          ))}
        </div>

        {/* Book Demo */}
        <button
          onClick={onBookDemo}
          className="flex items-center gap-1 text-sm text-gray-400 hover:text-white transition-colors"
        >
          {bookDemoText}
          <ChevronRight size={14} />
        </button>
      </motion.nav>

      {/* Secondary Navigation Bar */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.1 }}
        className="relative flex items-center justify-between px-6 py-3 border-b border-[#1e2433]/50"
      >
        {/* Product Logo */}
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-2">
            <Zap size={18} className="text-green-400" />
            <span className="text-sm font-semibold text-white">{productName}</span>
          </div>

          {/* Secondary Nav Items */}
          <div className="hidden lg:flex items-center gap-6">
            {secondaryNavItems.map((item, index) => (
              <button
                key={index}
                className={`flex items-center gap-1 text-sm transition-colors ${
                  index === 0 ? "text-white" : "text-gray-400 hover:text-white"
                }`}
              >
                {item.label}
                {item.isExternal && <ExternalLink size={12} />}
              </button>
            ))}
          </div>
        </div>

        {/* Auth Buttons */}
        <div className="flex items-center gap-4">
          <button className="text-sm text-gray-400 hover:text-white transition-colors">
            {signInText}
          </button>
          <button className="px-4 py-1.5 text-sm font-medium text-white bg-[#1e2433] hover:bg-[#2a3042] rounded-lg transition-colors">
            {signUpText}
          </button>
        </div>
      </motion.div>

      {/* Main Hero Content */}
      <div className="relative px-6 pt-16 pb-8 sm:pt-20 lg:pt-24">
        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-center text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white max-w-4xl mx-auto leading-tight"
        >
          {headline}
          <br />
          <span className="relative">
            {highlightWord}
            <motion.span
              initial={{ width: 0 }}
              animate={{ width: "0.25rem" }}
              transition={{ delay: 0.8, duration: 0.3 }}
              className="absolute -right-1 top-0 h-full bg-green-500"
            />
          </span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mt-6 text-center text-lg text-gray-400 max-w-2xl mx-auto"
        >
          {subheadline}
        </motion.p>

        {/* Email Input Form */}
        <motion.form
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          onSubmit={handleSubmit}
          className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 max-w-md mx-auto"
        >
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder={inputPlaceholder}
            className="w-full sm:flex-1 px-4 py-3 bg-[#1a1f2e] border border-[#2a3042] rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-gray-500 transition-colors"
          />
          <button
            type="submit"
            className="w-full sm:w-auto px-6 py-3 bg-green-500 hover:bg-green-600 text-white font-medium rounded-lg transition-colors whitespace-nowrap"
          >
            {ctaText}
          </button>
        </motion.form>

        {/* Footer Text */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="mt-4 text-center text-sm text-gray-500"
        >
          {footerText}{" "}
          <button
            onClick={onBookDemo}
            className="text-white underline hover:text-gray-300 transition-colors"
          >
            {footerLinkText}
          </button>{" "}
          with an engineer
        </motion.p>
      </div>

      {/* Dashboard Preview */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.8 }}
        className="relative mt-8"
      >
        <DashboardPreview />
      </motion.div>

      {/* Social Proof Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.6 }}
        className="relative px-6 pt-20 pb-12"
      >
        <h2 className="text-center text-xl font-semibold text-white mb-2">
          {socialProofTitle}
        </h2>
        <p className="text-center text-sm text-gray-500 max-w-xl mx-auto mb-10">
          {socialProofSubtitle}
        </p>

        {/* Logo Grid */}
        <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6 max-w-4xl mx-auto opacity-60">
          {logos.slice(0, 6).map((logo, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9 + index * 0.05, duration: 0.4 }}
              className="text-gray-400 hover:text-gray-300 transition-colors"
            >
              {logo.logo}
            </motion.div>
          ))}
        </div>

        {/* Second row of logos */}
        <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6 max-w-3xl mx-auto mt-6 opacity-60">
          {logos.slice(6).map((logo, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2 + index * 0.05, duration: 0.4 }}
              className="text-gray-400 hover:text-gray-300 transition-colors"
            >
              {logo.logo}
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

// ChevronRight icon helper
function ChevronRight({ size = 24, className = "" }: { size?: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <polyline points="9 18 15 12 9 6" />
    </svg>
  );
}
