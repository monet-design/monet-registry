"use client";

import { motion } from "motion/react";
import { ChevronRight, LayoutDashboard, Grid2X2, Box, Users, FlaskConical, CreditCard } from "lucide-react";

// Types
interface LogoItem {
  name: string;
  logo: React.ReactNode;
}

interface CanopyHeroContactProps {
  announcementText?: string;
  headline?: {
    prefix?: string;
    highlight?: string;
    suffix?: string;
  };
  description?: string;
  primaryCtaText?: string;
  secondaryCtaText?: string;
  onPrimaryCtaClick?: () => void;
  onSecondaryCtaClick?: () => void;
  logos?: LogoItem[];
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

// Progress Bar Component
function ProgressBar({
  progress,
  color = "teal",
}: {
  progress: number;
  color?: "teal" | "green";
}) {
  return (
    <div className="flex gap-0.5 h-4">
      {[...Array(20)].map((_, i) => (
        <div
          key={i}
          className={`w-1.5 rounded-sm ${
            i < Math.floor(progress * 20)
              ? color === "teal"
                ? "bg-teal-500"
                : "bg-green-500"
              : "bg-gray-200"
          }`}
        />
      ))}
    </div>
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

// Woman Photo Card with Balance Overlay
function PhotoCard({ delay = 0 }: { delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.7 }}
      className="relative w-[280px] h-[380px] rounded-3xl overflow-hidden shadow-lg"
    >
      {/* Photo background - using gradient as placeholder */}
      <div className="absolute inset-0 bg-gradient-to-br from-amber-200 via-orange-100 to-amber-50">
        {/* Simulated woman silhouette with gradient */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[220px] h-[300px] bg-gradient-to-t from-amber-300/50 to-transparent rounded-t-full" />
      </div>

      {/* Balance overlay card */}
      <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm rounded-xl px-4 py-3 shadow-md">
        <div className="flex items-center gap-2 mb-1">
          <CreditCard className="w-4 h-4 text-teal-500" />
          <span className="text-xs text-teal-600 font-medium">Total current balances</span>
        </div>
        <p className="text-2xl font-semibold text-gray-900">$1,844.46</p>
      </div>
    </motion.div>
  );
}

// Abstract Illustration Card
function AbstractCard({ delay = 0 }: { delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.7 }}
      className="relative w-[200px] h-[380px] rounded-3xl overflow-hidden bg-white border border-gray-100 shadow-lg"
    >
      {/* Abstract geometric design */}
      <div className="absolute inset-0 p-6 flex flex-col justify-between">
        {/* Top ellipse shape */}
        <div className="relative">
          <svg viewBox="0 0 160 100" className="w-full h-auto">
            {/* Outer ellipse border */}
            <ellipse
              cx="80"
              cy="50"
              rx="70"
              ry="40"
              fill="none"
              stroke="#e5e7eb"
              strokeWidth="1"
            />
            {/* Inner filled ellipse */}
            <ellipse
              cx="80"
              cy="50"
              rx="50"
              ry="28"
              fill="none"
              stroke="#e5e7eb"
              strokeWidth="1"
            />
            {/* Center dot */}
            <circle cx="80" cy="50" r="8" fill="#a5b4fc" />
          </svg>
        </div>

        {/* Horizontal lines */}
        <div className="flex flex-col gap-3">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="h-px bg-gray-200" />
          ))}
        </div>

        {/* Bottom grid with plus */}
        <div className="relative h-[100px]">
          <svg viewBox="0 0 160 100" className="w-full h-full">
            {/* Grid square */}
            <rect
              x="30"
              y="20"
              width="100"
              height="60"
              rx="12"
              fill="none"
              stroke="#e5e7eb"
              strokeWidth="1"
            />
            {/* Plus sign */}
            <line x1="80" y1="35" x2="80" y2="65" stroke="#a5b4fc" strokeWidth="2" />
            <line x1="65" y1="50" x2="95" y2="50" stroke="#a5b4fc" strokeWidth="2" />
          </svg>
        </div>
      </div>
    </motion.div>
  );
}

// Dashboard Preview Card
function DashboardCard({ delay = 0 }: { delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.7 }}
      className="relative w-[520px] h-[380px] rounded-3xl overflow-hidden bg-white shadow-xl border border-gray-100"
    >
      {/* Green header bar */}
      <div className="h-10 bg-[#1a4d2e]" />

      {/* Dashboard content */}
      <div className="flex h-[calc(100%-40px)]">
        {/* Sidebar */}
        <div className="w-[140px] bg-[#f8f9fa] border-r border-gray-100 p-3 space-y-0.5">
          {/* Logo */}
          <div className="flex items-center gap-2 mb-4 px-2">
            <CanopyIcon className="w-4 h-4 text-gray-900" />
            <span className="font-semibold text-gray-900 text-sm">Canopy</span>
          </div>

          {/* Navigation */}
          <SidebarItem
            icon={<LayoutDashboard className="w-3 h-3" />}
            label="Dashboard"
          />
          <SidebarItem
            icon={<Grid2X2 className="w-3 h-3" />}
            label="Accounts"
            active
          />
          <SidebarItem icon={<Box className="w-3 h-3" />} label="Products" />
          <SidebarItem icon={<Users className="w-3 h-3" />} label="Customers" />
          <SidebarItem
            icon={<FlaskConical className="w-3 h-3" />}
            label="LoanLab"
          />
        </div>

        {/* Main Content Area */}
        <div className="flex-1 p-4 bg-gray-50 overflow-hidden">
          {/* Breadcrumb */}
          <div className="flex items-center gap-1 text-xs text-gray-500 mb-3">
            <span className="text-teal-600">&lt; Accounts</span>
            <span>/</span>
            <span>4174391439</span>
          </div>

          {/* Account Header */}
          <div className="mb-4">
            <p className="text-[10px] text-gray-500 mb-0.5">Account ID</p>
            <div className="flex items-center gap-2">
              <h2 className="text-lg font-semibold text-gray-900">
                4174391439
              </h2>
              <span className="px-1.5 py-0.5 bg-green-100 text-green-600 text-[10px] rounded-full">
                Active
              </span>
            </div>
          </div>

          {/* Balance Cards */}
          <div className="grid grid-cols-2 gap-2 mb-4">
            <div className="bg-white rounded-lg p-2.5 border border-gray-100">
              <div className="flex items-center gap-1.5 mb-1">
                <div className="w-3 h-3 rounded bg-blue-100 flex items-center justify-center">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                </div>
                <span className="text-[10px] text-gray-500">Interest balance</span>
              </div>
              <p className="text-sm font-semibold text-gray-900">$0.00</p>
            </div>
            <div className="bg-white rounded-lg p-2.5 border border-gray-100">
              <div className="flex items-center gap-1.5 mb-1">
                <div className="w-3 h-3 rounded bg-green-100 flex items-center justify-center">
                  <div className="w-1.5 h-1.5 rounded-full bg-green-500" />
                </div>
                <span className="text-[10px] text-gray-500">Credit limit</span>
              </div>
              <p className="text-sm font-semibold text-gray-900">$7,000.00</p>
            </div>
          </div>

          {/* Customer Info */}
          <div className="bg-white rounded-lg p-2.5 border border-gray-100 mb-3">
            <p className="text-[10px] text-gray-500 mb-1">Customer</p>
            <p className="text-xs font-medium text-gray-900">
              Last 3552, First 3552
            </p>
            <p className="text-[10px] text-gray-500 mt-0.5">
              12 Strawberry Road Suite 101
            </p>
            <p className="text-[10px] text-gray-500">Atlanta, GA 391391-4273</p>
          </div>

          {/* Upcoming Payment */}
          <div className="bg-white rounded-lg p-2.5 border border-gray-100">
            <div className="flex justify-between items-center">
              <p className="text-[10px] text-gray-500">Upcoming payment</p>
              <div className="text-right">
                <p className="text-[10px] text-gray-500">Due date</p>
                <p className="text-xs font-medium text-gray-900">3 Mar</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Panel - Installments */}
        <div className="w-[160px] bg-white border-l border-gray-100 p-3">
          <h3 className="text-sm font-semibold text-gray-900 mb-3">
            Installments
          </h3>

          {/* Loan Card */}
          <div className="bg-gray-50 rounded-lg p-2.5 mb-3">
            <p className="text-[10px] text-gray-500 mb-0.5">Loan</p>
            <p className="text-sm font-semibold text-gray-900 mb-1.5">
              523795284
            </p>
            <ProgressBar progress={0.85} color="teal" />
            <div className="flex justify-between mt-1.5 text-[10px]">
              <div>
                <p className="text-gray-400">Balance</p>
                <p className="text-gray-900 font-medium">$0.00</p>
              </div>
            </div>
          </div>

          {/* Transaction History */}
          <h3 className="text-sm font-semibold text-gray-900 mb-2">
            Transaction History
          </h3>
          <div className="space-y-2">
            <div className="flex justify-between text-[10px]">
              <div>
                <p className="text-gray-500">Date</p>
                <p className="text-gray-900">12 Dec</p>
              </div>
              <div className="text-right">
                <p className="text-gray-500">Description</p>
                <p className="text-gray-900">Payment</p>
              </div>
            </div>
            <div className="flex justify-between text-[10px]">
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

// Logo components
function NovoLogo() {
  return (
    <svg viewBox="0 0 80 24" className="h-5 w-auto" fill="currentColor">
      <path d="M10 6c-3.3 0-6 2.7-6 6s2.7 6 6 6h4V6h-4zm0 10c-2.2 0-4-1.8-4-4s1.8-4 4-4v8zm8-10v12h2V6h-2zm8 0c-3.3 0-6 2.7-6 6s2.7 6 6 6 6-2.7 6-6-2.7-6-6-6zm0 10c-2.2 0-4-1.8-4-4s1.8-4 4-4 4 1.8 4 4-1.8 4-4 4zm14-10l-3 8-3-8h-2l4 12h2l4-12h-2zm8 0c-3.3 0-6 2.7-6 6s2.7 6 6 6 6-2.7 6-6-2.7-6-6-6zm0 10c-2.2 0-4-1.8-4-4s1.8-4 4-4 4 1.8 4 4-1.8 4-4 4z"/>
    </svg>
  );
}

function MercuryLogo() {
  return (
    <div className="flex items-center gap-2 text-gray-400">
      <div className="w-5 h-5 border-2 border-current rounded-full flex items-center justify-center">
        <div className="w-1.5 h-1.5 bg-current rounded-full" />
      </div>
      <span className="text-sm font-medium tracking-tight">MERCURY</span>
    </div>
  );
}

function MeasuredLogo() {
  return (
    <div className="flex items-center gap-1.5 text-gray-400">
      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
        <path d="M4 18h4V6H4v12zm6-8h4v8h-4v-8zm6-4h4v12h-4V6z"/>
      </svg>
      <span className="text-sm font-semibold">Measured</span>
    </div>
  );
}

function FlexportLogo() {
  return (
    <span className="text-gray-400 text-lg font-bold tracking-tight">flexport.</span>
  );
}

function TandymLogo() {
  return (
    <div className="flex items-center gap-1.5 text-gray-400">
      <svg viewBox="0 0 20 20" className="w-4 h-4" fill="currentColor">
        <rect x="2" y="2" width="16" height="16" rx="2"/>
      </svg>
      <span className="text-sm font-medium">tandym</span>
    </div>
  );
}

// Default logos
const defaultLogos: LogoItem[] = [
  { name: "novo", logo: <NovoLogo /> },
  { name: "mercury", logo: <MercuryLogo /> },
  { name: "measured", logo: <MeasuredLogo /> },
  { name: "flexport", logo: <FlexportLogo /> },
  { name: "tandym", logo: <TandymLogo /> },
];

// Main Component
export default function CanopyHeroContact({
  announcementText = "Canopy Raises $15.2M to Fuel Growth Plans in 2024",
  headline = {
    prefix: "Build better",
    highlight: "B2B",
    suffix: "lending products.",
  },
  description = "Get everything you need for business loan management and servicing. Plus the ability to operate and scale multiple products. All on a single platform.",
  primaryCtaText = "Start now",
  secondaryCtaText = "Explore Canopy OS",
  onPrimaryCtaClick,
  onSecondaryCtaClick,
  logos = defaultLogos,
}: CanopyHeroContactProps) {
  return (
    <section className="relative w-full bg-white overflow-hidden">
      {/* Decorative plus signs */}
      <div className="absolute top-[180px] left-[8%] text-gray-300 text-xl font-light">+</div>
      <div className="absolute top-[280px] left-[4%] text-gray-300 text-xl font-light">+</div>
      <div className="absolute top-[120px] right-[6%] text-gray-300 text-xl font-light">+</div>
      <div className="absolute top-[280px] right-[3%] text-gray-300 text-xl font-light">+</div>

      {/* Decorative corner lines - top left */}
      <div className="absolute top-[100px] left-[10%] w-[120px] h-[80px]">
        <div className="absolute top-0 left-0 w-full h-px bg-gray-200" />
        <div className="absolute top-0 left-0 w-px h-full bg-gray-200" />
      </div>

      {/* Decorative corner lines - top right */}
      <div className="absolute top-[100px] right-[10%] w-[120px] h-[80px]">
        <div className="absolute top-0 right-0 w-full h-px bg-gray-200" />
        <div className="absolute top-0 right-0 w-px h-full bg-gray-200" />
      </div>

      <div className="max-w-7xl mx-auto px-6 pt-8 pb-16">
        {/* Announcement Banner */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex justify-center mb-12"
        >
          <a
            href="#"
            className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-full text-sm text-gray-700 hover:bg-gray-200 transition-colors"
          >
            <span>{announcementText}</span>
            <span className="flex items-center justify-center w-5 h-5 bg-[#52A165] rounded-full">
              <ChevronRight className="w-3 h-3 text-white" />
            </span>
          </a>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-center text-5xl sm:text-6xl md:text-7xl font-bold text-[#1a1a1a] leading-[1.1] mb-8"
        >
          <span className="inline-flex items-center flex-wrap justify-center gap-x-4">
            {headline.prefix}{" "}
            <span className="inline-flex items-center justify-center px-5 py-2 bg-[#52A165] text-white rounded-2xl">
              {headline.highlight}
            </span>
          </span>
          <br />
          {headline.suffix}
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center text-gray-600 text-lg max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          {description}
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex justify-center items-center gap-4 mb-16"
        >
          <button
            onClick={onPrimaryCtaClick}
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#1a1a1a] text-white text-sm font-medium rounded-full hover:bg-[#333] transition-colors"
          >
            {primaryCtaText}
            <ChevronRight className="w-4 h-4" />
          </button>
          <button
            onClick={onSecondaryCtaClick}
            className="inline-flex items-center gap-2 px-6 py-3 bg-white text-[#1a1a1a] text-sm font-medium rounded-full border border-gray-200 hover:bg-gray-50 transition-colors"
          >
            {secondaryCtaText}
            <ChevronRight className="w-4 h-4" />
          </button>
        </motion.div>

        {/* Product Showcase Cards */}
        <div className="flex justify-center items-end gap-4 mb-16 overflow-hidden">
          <PhotoCard delay={0.4} />
          <AbstractCard delay={0.5} />
          <DashboardCard delay={0.6} />
        </div>

        {/* Logo Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex justify-center items-center gap-12 flex-wrap"
        >
          {logos.map((logo, index) => (
            <div key={index} className="opacity-60 hover:opacity-100 transition-opacity">
              {logo.logo}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
