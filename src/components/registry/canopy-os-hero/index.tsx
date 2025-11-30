"use client";

import { motion } from "motion/react";
import { ChevronRight, X, LayoutDashboard, Grid2X2, Box, Users, FlaskConical } from "lucide-react";

// Font import for Instrument Serif
import "./font.css";

// Types
interface NavItem {
  label: string;
  href?: string;
}

interface CanopyOsHeroProps {
  logo?: {
    icon?: React.ReactNode;
    text?: string;
  };
  navItems?: NavItem[];
  badge?: string;
  headline?: React.ReactNode;
  subheadline?: string;
  ctaText?: string;
  onCtaClick?: () => void;
}

// Canopy Logo Icon
function CanopyIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 16.93c-3.94-.49-7-3.85-7-7.93s3.06-7.44 7-7.93v15.86zm2-15.86c3.94.49 7 3.85 7 7.93s-3.06 7.44-7 7.93V3.07z" />
    </svg>
  );
}

// Decorative Card with X pattern
function DecoCardX({ delay = 0 }: { delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay, duration: 0.6 }}
      className="relative w-[180px] h-[180px] rounded-3xl bg-[#1a1a1a] border border-[#2a2a2a] p-4"
    >
      <X className="w-6 h-6 text-[#3a3a3a]" strokeWidth={1.5} />
    </motion.div>
  );
}

// Decorative Card with grid pattern
function DecoCardGrid({ delay = 0 }: { delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay, duration: 0.6 }}
      className="relative w-[180px] h-[180px] rounded-3xl bg-[#1a1a1a] border border-[#2a2a2a] p-4 overflow-hidden"
    >
      {/* Grid pattern */}
      <div className="absolute inset-4 grid grid-cols-2 gap-2">
        <div className="rounded-xl border border-[#2a2a2a]" />
        <div className="rounded-xl border border-[#2a2a2a]" />
        <div className="rounded-xl border border-[#2a2a2a] relative">
          {/* Diagonal cross */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-full h-px bg-[#3a3a3a] rotate-45 origin-center" style={{ width: '140%' }} />
            <div className="absolute w-full h-px bg-[#3a3a3a] -rotate-45 origin-center" style={{ width: '140%' }} />
          </div>
        </div>
        <div className="rounded-xl border border-[#2a2a2a]" />
      </div>
    </motion.div>
  );
}

// Right side decorative card with lines
function DecoCardLines({ delay = 0 }: { delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay, duration: 0.6 }}
      className="relative w-[180px] h-[260px] rounded-3xl bg-[#1a1a1a] border border-[#2a2a2a] p-4 overflow-hidden"
    >
      {/* Horizontal lines */}
      <div className="flex flex-col gap-3 mt-8">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="h-px bg-[#2a2a2a]" />
        ))}
      </div>
    </motion.div>
  );
}

// Sidebar Navigation Item
function SidebarItem({
  icon,
  label,
  active = false,
}: {
  icon: React.ReactNode;
  label: string;
  active?: boolean;
}) {
  return (
    <div
      className={`flex items-center gap-3 px-3 py-2 rounded-lg text-sm ${
        active ? "bg-gray-100 text-gray-900 font-medium" : "text-gray-500"
      }`}
    >
      {icon}
      <span>{label}</span>
    </div>
  );
}

// Progress Bar Component
function ProgressBar({
  progress,
  color = "green",
}: {
  progress: number;
  color?: "green" | "red";
}) {
  return (
    <div className="flex gap-0.5 h-4">
      {[...Array(20)].map((_, i) => (
        <div
          key={i}
          className={`w-1.5 rounded-sm ${
            i < Math.floor(progress * 20)
              ? color === "green"
                ? "bg-green-500"
                : "bg-red-500"
              : "bg-gray-200"
          }`}
        />
      ))}
    </div>
  );
}

// Dashboard Mockup Component
function DashboardMockup({ delay = 0 }: { delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.8, ease: "easeOut" }}
      className="relative mx-auto max-w-[900px] rounded-2xl bg-white shadow-2xl overflow-hidden border border-gray-200"
    >
      <div className="flex">
        {/* Sidebar */}
        <div className="w-[200px] bg-white border-r border-gray-100 p-4 space-y-1">
          {/* Logo */}
          <div className="flex items-center gap-2 mb-6">
            <CanopyIcon className="w-5 h-5 text-gray-900" />
            <span className="font-semibold text-gray-900">Canopy</span>
          </div>

          {/* Navigation */}
          <SidebarItem
            icon={<LayoutDashboard className="w-4 h-4" />}
            label="Dashboard"
          />
          <SidebarItem
            icon={<Grid2X2 className="w-4 h-4" />}
            label="Accounts"
            active
          />
          <SidebarItem icon={<Box className="w-4 h-4" />} label="Products" />
          <SidebarItem icon={<Users className="w-4 h-4" />} label="Customers" />
          <SidebarItem
            icon={<FlaskConical className="w-4 h-4" />}
            label="LoanLab"
          />
        </div>

        {/* Main Content */}
        <div className="flex-1 p-6 bg-gray-50">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
            <span className="text-blue-600">&lt; Accounts</span>
            <span>/</span>
            <span>4174391439</span>
          </div>

          {/* Account Header */}
          <div className="mb-6">
            <p className="text-xs text-gray-500 mb-1">Account ID</p>
            <div className="flex items-center gap-3">
              <h2 className="text-2xl font-semibold text-gray-900">
                4174391439
              </h2>
              <span className="px-2 py-0.5 bg-green-100 text-green-600 text-xs rounded-full">
                Active
              </span>
            </div>
          </div>

          {/* Balance Cards */}
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="bg-white rounded-xl p-4 border border-gray-100">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-4 h-4 rounded bg-blue-100 flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-blue-500" />
                </div>
                <span className="text-xs text-gray-500">Current balance</span>
              </div>
              <p className="text-xl font-semibold text-gray-900">$1,293.49</p>
            </div>
            <div className="bg-white rounded-xl p-4 border border-gray-100">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-4 h-4 rounded bg-green-100 flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-green-500" />
                </div>
                <span className="text-xs text-gray-500">Interest balance</span>
              </div>
              <p className="text-xl font-semibold text-gray-900">$0.00</p>
            </div>
            <div className="bg-white rounded-xl p-4 border border-gray-100">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-4 h-4 rounded bg-blue-100 flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-blue-500" />
                </div>
                <span className="text-xs text-gray-500">Available credit</span>
              </div>
              <p className="text-xl font-semibold text-gray-900">$5,706.51</p>
            </div>
            <div className="bg-white rounded-xl p-4 border border-gray-100">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-4 h-4 rounded bg-purple-100 flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-purple-500" />
                </div>
                <span className="text-xs text-gray-500">Credit limit</span>
              </div>
              <p className="text-xl font-semibold text-gray-900">$7,000.00</p>
            </div>
          </div>

          {/* Customer Info */}
          <div className="bg-white rounded-xl p-4 border border-gray-100 mb-4">
            <p className="text-xs text-gray-500 mb-2">Customer</p>
            <p className="text-sm font-medium text-gray-900">
              Last 3552, First 3552
            </p>
            <p className="text-xs text-gray-500 mt-1">
              12 Strawberry Road Suite 101
            </p>
            <p className="text-xs text-gray-500">Atlanta, GA 391391-4273</p>
          </div>

          {/* Upcoming Payment */}
          <div className="bg-white rounded-xl p-4 border border-gray-100">
            <div className="flex justify-between items-center">
              <p className="text-xs text-gray-500">Upcoming payment</p>
              <div className="text-right">
                <p className="text-xs text-gray-500">Due date</p>
                <p className="text-sm font-medium text-gray-900">3 Mar</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Panel - Installments */}
        <div className="w-[280px] bg-white border-l border-gray-100 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-6">
            Installments
          </h3>

          {/* Loan Cards */}
          <div className="space-y-4 mb-6">
            <div className="bg-gray-50 rounded-xl p-4">
              <div className="flex justify-between items-center mb-2">
                <p className="text-xs text-gray-500">Loan</p>
              </div>
              <p className="text-lg font-semibold text-gray-900 mb-2">
                523795284
              </p>
              <ProgressBar progress={0.85} color="green" />
              <div className="flex justify-between mt-2 text-xs text-gray-500">
                <div>
                  <p className="text-gray-400">Balance</p>
                  <p className="text-gray-900 font-medium">$0.00</p>
                </div>
                <div className="text-right">
                  <p className="text-gray-400">Original amount</p>
                  <p className="text-gray-900 font-medium">$750.00</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-xl p-4">
              <div className="flex justify-between items-center mb-2">
                <p className="text-xs text-gray-500">Loan</p>
                <span className="px-2 py-0.5 bg-red-100 text-red-600 text-xs rounded-full">
                  Paid in full
                </span>
              </div>
              <p className="text-lg font-semibold text-gray-900 mb-2">
                568428442
              </p>
              <ProgressBar progress={1} color="red" />
              <div className="flex justify-between mt-2 text-xs text-gray-500">
                <div>
                  <p className="text-gray-400">Balance</p>
                  <p className="text-gray-900 font-medium">$100.00</p>
                </div>
              </div>
            </div>
          </div>

          {/* Transaction History */}
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            Transaction History
          </h3>
          <div className="space-y-3">
            <div className="flex justify-between text-sm">
              <div>
                <p className="text-gray-500 text-xs">Date</p>
                <p className="text-gray-900">12 Dec</p>
              </div>
              <div className="text-right">
                <p className="text-gray-500 text-xs">Description</p>
                <p className="text-gray-900">Payment</p>
              </div>
            </div>
            <div className="flex justify-between text-sm">
              <div>
                <p className="text-gray-900">12 Dec</p>
              </div>
              <div className="text-right">
                <p className="text-gray-900">Payment</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

// Main Component
export default function CanopyOsHero({
  logo = {
    icon: <CanopyIcon className="w-6 h-6 text-white" />,
    text: "Canopy",
  },
  navItems = [
    { label: "Products" },
    { label: "Solutions" },
    { label: "Developers" },
    { label: "Resources" },
    { label: "Customers" },
  ],
  badge = "CANOPYOS",
  headline = (
    <>
      Launch, service and
      <br />
      scale your loans.
      <br />
      All in one OS.
    </>
  ),
  subheadline = "The central hub where you can view, manage, and\nfinetune all your customer loan accounts.",
  ctaText = "Start now",
  onCtaClick,
}: CanopyOsHeroProps) {
  return (
    <section className="relative w-full min-h-screen overflow-hidden">
      {/* Background Gradient */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to bottom, #0a0a0a 0%, #111111 30%, #1a1a1a 50%, #d9d9d9 75%, #f5f5f5 100%)",
        }}
      />

      {/* Navigation */}
      <nav className="relative z-20 w-full px-6 py-5">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-2"
          >
            {logo.icon}
            <span className="text-white font-semibold text-lg">{logo.text}</span>
          </motion.div>

          {/* Nav Items */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="hidden md:flex items-center gap-8"
          >
            {navItems.map((item, index) => (
              <a
                key={index}
                href={item.href || "#"}
                className="text-gray-400 hover:text-white text-sm transition-colors"
              >
                {item.label}
              </a>
            ))}
          </motion.div>

          {/* CTA Button */}
          <motion.button
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            onClick={onCtaClick}
            className="flex items-center gap-1 px-4 py-2 bg-white text-black text-sm font-medium rounded-full hover:bg-gray-100 transition-colors"
          >
            {ctaText}
            <ChevronRight className="w-4 h-4" />
          </motion.button>
        </div>
      </nav>

      {/* Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-16 pb-8">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-center mb-8"
        >
          <span className="text-gray-500 text-xs tracking-[0.3em] uppercase">
            {badge}
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="font-instrument-serif text-5xl sm:text-6xl md:text-7xl font-normal italic text-white text-center mb-8 leading-[1.1]"
        >
          {headline}
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-gray-400 text-base sm:text-lg text-center whitespace-pre-line leading-relaxed max-w-2xl mx-auto mb-8"
        >
          {subheadline}
        </motion.p>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex justify-center mb-16"
        >
          <button
            onClick={onCtaClick}
            className="flex items-center gap-2 px-6 py-3 bg-[#d4f64e] text-black text-sm font-medium rounded-full hover:bg-[#c5e745] transition-colors"
          >
            {ctaText}
            <ChevronRight className="w-4 h-4" />
          </button>
        </motion.div>
      </div>

      {/* Decorative Cards - Left Side */}
      <div className="absolute left-0 top-[45%] -translate-y-1/2 hidden lg:flex flex-col gap-4 -ml-12">
        <DecoCardX delay={0.6} />
        <DecoCardGrid delay={0.7} />
      </div>

      {/* Decorative Cards - Right Side */}
      <div className="absolute right-0 top-[40%] -translate-y-1/2 hidden lg:block -mr-12">
        <DecoCardLines delay={0.8} />
      </div>

      {/* Dashboard Mockup */}
      <div className="relative z-10 px-6 pb-16">
        <DashboardMockup delay={0.7} />
      </div>
    </section>
  );
}
