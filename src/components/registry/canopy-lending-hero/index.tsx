"use client";

import { motion } from "motion/react";
import { ChevronRight, LayoutDashboard, Users, Package, Wallet } from "lucide-react";

// ============================================================================
// CUSTOMIZATION
// ============================================================================

const COLORS = { light: {}, dark: {} } as const;
const IMAGES = {} as const;

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

// Types
interface AnnouncementBannerProps {
  text: string;
  href?: string;
}

interface HeroHeadlineProps {
  before: string;
  highlight: string;
  after: string;
}

interface CTAButton {
  text: string;
  variant: "primary" | "secondary";
  href?: string;
}

interface LogoItem {
  name: string;
  logo: React.ReactNode;
}

interface CanopyLendingHeroProps {
  mode?: "light" | "dark";
  announcementText?: string;
  headline?: HeroHeadlineProps;
  subheadline?: string;
  ctaButtons?: CTAButton[];
  logos?: LogoItem[];
}

// Announcement Banner Component
function AnnouncementBanner({ text }: AnnouncementBannerProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex items-center justify-center gap-2 py-4"
    >
      <span className="text-sm text-[#1A1A1A] font-medium">{text}</span>
      <span className="flex h-5 w-5 items-center justify-center rounded bg-[#3B82F6]">
        <ChevronRight className="h-3 w-3 text-white" />
      </span>
    </motion.div>
  );
}

// Decorative Plus Icon Component
function DecorativePlus({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M8 0V16M0 8H16" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

// Balance Card Component (Left product image)
function BalanceCard() {
  return (
    <div className="relative w-full max-w-[280px] overflow-hidden rounded-xl">
      {/* Person image background with overlay */}
      <div className="relative h-[280px] bg-gradient-to-br from-amber-100 to-orange-100">
        {/* Simulated person working at desk */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />

        {/* Balance UI Overlay */}
        <div className="absolute left-4 top-4 rounded-lg bg-white/95 px-3 py-2 shadow-sm backdrop-blur-sm">
          <div className="flex items-center gap-2">
            <div className="flex h-4 w-4 items-center justify-center rounded bg-[#0D8F6F]">
              <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                <rect x="1" y="1" width="3" height="3" fill="white" />
                <rect x="6" y="1" width="3" height="3" fill="white" />
                <rect x="1" y="6" width="3" height="3" fill="white" />
                <rect x="6" y="6" width="3" height="3" fill="white" />
              </svg>
            </div>
            <span className="text-xs font-medium text-[#0D8F6F]">
              Total current balances
            </span>
          </div>
          <div className="mt-1 text-2xl font-semibold text-[#1A1A1A]">
            $1,844.46
          </div>
        </div>

        {/* Simulated person illustration */}
        <div className="absolute bottom-0 left-1/2 h-48 w-48 -translate-x-1/2">
          <div className="h-full w-full rounded-full bg-gradient-to-br from-amber-200 to-orange-300 opacity-60" />
        </div>
      </div>
    </div>
  );
}

// Diagram Card Component (Center product image)
function DiagramCard() {
  return (
    <div className="relative w-full max-w-[220px] overflow-hidden rounded-xl border border-gray-100 bg-white shadow-sm">
      <div className="flex h-[280px] flex-col justify-between p-6">
        {/* Top circle with gradient */}
        <div className="flex justify-center">
          <div className="relative h-20 w-20">
            <div className="absolute inset-0 rounded-full border-4 border-[#0D8F6F]/20" />
            <div className="absolute inset-2 flex items-center justify-center rounded-full bg-gradient-to-b from-[#0D8F6F]/30 to-[#0D8F6F]/10">
              <div className="h-4 w-4 rounded-full bg-[#0D8F6F]" />
            </div>
          </div>
        </div>

        {/* Connection lines */}
        <div className="flex flex-1 flex-col items-center justify-center gap-2 py-4">
          {[1, 2, 3].map((_, i) => (
            <div key={i} className="flex w-full items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-gray-200" />
              <div className="h-[1px] flex-1 bg-gray-200" />
              <div className="h-2 w-2 rounded-full bg-gray-200" />
            </div>
          ))}
        </div>

        {/* Bottom circle with plus */}
        <div className="flex justify-center">
          <div className="flex h-16 w-16 items-center justify-center rounded-full border-2 border-dashed border-[#0D8F6F]/40">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path
                d="M10 4V16M4 10H16"
                stroke="#0D8F6F"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

// Dashboard Card Component (Right product image)
function DashboardCard() {
  return (
    <div className="relative w-full max-w-[420px] overflow-hidden rounded-xl border border-gray-100 bg-white shadow-lg">
      {/* Header bar */}
      <div className="flex items-center gap-2 bg-[#0D8F6F] px-4 py-2">
        <div className="h-3 w-3 rounded-full bg-white/30" />
        <div className="h-3 w-3 rounded-full bg-white/30" />
        <div className="h-3 w-3 rounded-full bg-white/30" />
      </div>

      <div className="flex h-[248px]">
        {/* Sidebar */}
        <div className="w-36 border-r border-gray-100 bg-gray-50/50 p-3">
          <div className="mb-4 flex items-center gap-2">
            <div className="flex h-5 w-5 items-center justify-center rounded bg-[#0D8F6F]">
              <span className="text-[8px] font-bold text-white">C</span>
            </div>
            <span className="text-xs font-semibold text-gray-700">Canopy</span>
          </div>

          <nav className="space-y-1">
            {[
              {
                icon: <LayoutDashboard className="h-3 w-3" />,
                label: "Dashboard",
                active: false,
              },
              {
                icon: <Users className="h-3 w-3" />,
                label: "Accounts",
                active: true,
              },
              {
                icon: <Package className="h-3 w-3" />,
                label: "Products",
                active: false,
              },
              {
                icon: <Users className="h-3 w-3" />,
                label: "Customers",
                active: false,
              },
              {
                icon: <Wallet className="h-3 w-3" />,
                label: "LoanLab",
                active: false,
              },
            ].map((item, i) => (
              <div
                key={i}
                className={`flex items-center gap-2 rounded px-2 py-1.5 text-[10px] ${
                  item.active
                    ? "bg-[#0D8F6F]/10 font-medium text-[#0D8F6F]"
                    : "text-gray-500"
                }`}
              >
                {item.icon}
                <span>{item.label}</span>
              </div>
            ))}
          </nav>
        </div>

        {/* Main content */}
        <div className="flex-1 p-3">
          {/* Account header */}
          <div className="mb-3 flex items-center justify-between">
            <div>
              <div className="text-[10px] text-gray-400">Account ID</div>
              <div className="flex items-center gap-2">
                <span className="text-sm font-semibold text-gray-800">
                  4174391439
                </span>
                <span className="rounded bg-green-100 px-1.5 py-0.5 text-[9px] font-medium text-green-600">
                  active
                </span>
              </div>
            </div>
          </div>

          {/* Balance cards */}
          <div className="mb-3 grid grid-cols-2 gap-2">
            <div className="rounded bg-gray-50 p-2">
              <div className="flex items-center gap-1 text-[9px] text-gray-400">
                <div className="h-1.5 w-1.5 rounded-full bg-[#0D8F6F]" />
                Interest balance
              </div>
              <div className="text-sm font-semibold">$0.00</div>
            </div>
            <div className="rounded bg-gray-50 p-2">
              <div className="flex items-center gap-1 text-[9px] text-gray-400">
                <div className="h-1.5 w-1.5 rounded-full bg-[#0D8F6F]" />
                Credit avail
              </div>
              <div className="text-sm font-semibold">$7,000.00</div>
            </div>
          </div>

          {/* Customer info */}
          <div className="border-t border-gray-100 pt-2">
            <div className="mb-1 text-[9px] text-gray-400">Customer</div>
            <div className="text-[10px] font-medium text-gray-700">
              Last 3552, First 3552
            </div>
            <div className="text-[9px] text-gray-400">
              12 Strawberry Road Suite 101
            </div>
          </div>
        </div>

        {/* Right panel */}
        <div className="w-32 border-l border-gray-100 bg-gray-50/30 p-3">
          <div className="mb-2 text-[10px] font-medium text-gray-700">
            Installments
          </div>
          <div className="mb-1 text-[9px] text-gray-400">Loan</div>
          <div className="mb-2 text-xs font-semibold text-gray-800">
            523795284
          </div>

          {/* Mini progress bar */}
          <div className="mb-3 flex gap-[1px]">
            {Array.from({ length: 20 }).map((_, i) => (
              <div
                key={i}
                className={`h-3 w-1 rounded-sm ${i < 15 ? "bg-[#0D8F6F]" : "bg-gray-200"}`}
              />
            ))}
          </div>

          <div className="text-[9px] text-gray-400">Balance</div>
          <div className="text-xs font-semibold text-gray-800">$0.00</div>

          <div className="mt-3 text-[10px] font-medium text-gray-700">
            Transaction History
          </div>
          <div className="mt-1 space-y-1">
            {[1, 2].map((_, i) => (
              <div key={i} className="flex justify-between text-[9px]">
                <span className="text-gray-400">12 Dec</span>
                <span className="text-gray-500">Payment</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// Logo Components
function NovoLogo() {
  return (
    <div className="flex items-center gap-1">
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path
          d="M4 16V4L10 16V4"
          stroke="#1A1A1A"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <span className="text-sm font-bold text-[#1A1A1A]">novo</span>
    </div>
  );
}

function MercuryLogo() {
  return (
    <div className="flex items-center gap-2">
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
        <circle cx="9" cy="9" r="8" stroke="#1A1A1A" strokeWidth="1.5" />
        <circle cx="9" cy="9" r="3" fill="#1A1A1A" />
      </svg>
      <span className="text-sm font-semibold tracking-wide text-[#1A1A1A]">
        MERCURY
      </span>
    </div>
  );
}

function MeasuredLogo() {
  return (
    <div className="flex items-center gap-1.5">
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
        <path
          d="M2 14L6 6L10 10L16 2"
          stroke="#1A1A1A"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <span className="text-sm font-semibold text-[#1A1A1A]">Measured</span>
    </div>
  );
}

function FlexportLogo() {
  return (
    <span className="text-lg font-bold text-[#1A1A1A]">flexport.</span>
  );
}

function TandymLogo() {
  return (
    <div className="flex items-center gap-1.5">
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
        <rect
          x="2"
          y="2"
          width="14"
          height="14"
          rx="3"
          stroke="#1A1A1A"
          strokeWidth="1.5"
        />
        <path
          d="M6 9H12M9 6V12"
          stroke="#1A1A1A"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
      <span className="text-sm font-medium text-[#1A1A1A]">tandym</span>
    </div>
  );
}

// Default data
const defaultHeadline: HeroHeadlineProps = {
  before: "Build better",
  highlight: "B2B",
  after: "lending products.",
};

const defaultLogos: LogoItem[] = [
  { name: "Novo", logo: <NovoLogo /> },
  { name: "Mercury", logo: <MercuryLogo /> },
  { name: "Measured", logo: <MeasuredLogo /> },
  { name: "Flexport", logo: <FlexportLogo /> },
  { name: "Tandym", logo: <TandymLogo /> },
];

const defaultCTAButtons: CTAButton[] = [
  { text: "Start now", variant: "primary" },
  { text: "Explore Canopy OS", variant: "secondary" },
];

// Main Component
export default function CanopyLendingHero({
  mode = "light",
  announcementText = "Canopy Raises $15.2M to Fuel Growth Plans in 2024",
  headline = defaultHeadline,
  subheadline = "Get everything you need for business loan management and servicing. Plus the ability to operate and scale multiple products. All on a single platform.",
  ctaButtons = defaultCTAButtons,
  logos = defaultLogos,
}: CanopyLendingHeroProps) {
  return (
    <section className="relative w-full overflow-hidden bg-white">
      {/* Decorative elements */}
      <DecorativePlus className="absolute left-[15%] top-32 hidden text-[#A5F3FC] lg:block" />
      <DecorativePlus className="absolute right-[12%] top-48 hidden text-[#A5F3FC] lg:block" />
      <DecorativePlus className="absolute left-[8%] top-[340px] hidden text-[#A5F3FC] lg:block" />

      {/* Content */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Announcement Banner */}
        <AnnouncementBanner text={announcementText} />

        {/* Hero Content */}
        <div className="flex flex-col items-center pb-12 pt-8">
          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="text-center text-4xl font-bold leading-[1.1] tracking-tight text-[#121212] sm:text-5xl md:text-6xl lg:text-7xl"
          >
            <span className="inline-flex flex-wrap items-center justify-center gap-x-4 gap-y-2">
              <span>{headline.before}</span>
              <span className="inline-flex items-center justify-center rounded-lg bg-[#0D7359] px-5 py-1 text-white">
                {headline.highlight}
              </span>
            </span>
            <br />
            <span>{headline.after}</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mt-6 max-w-2xl text-center text-base leading-relaxed text-[#6B7280] sm:text-lg"
          >
            {subheadline}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="mt-8 flex flex-wrap items-center justify-center gap-3"
          >
            {ctaButtons.map((button, index) => (
              <button
                key={index}
                className={`inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition-all duration-200 ${
                  button.variant === "primary"
                    ? "bg-[#121212] text-white hover:bg-[#2A2A2A]"
                    : "border border-[#E5E5E5] bg-white text-[#121212] hover:border-[#121212]"
                }`}
              >
                {button.text}
                <ChevronRight className="h-4 w-4" />
              </button>
            ))}
          </motion.div>
        </div>

        {/* Product Preview Cards */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="flex flex-col items-center justify-center gap-4 pb-16 lg:flex-row lg:gap-6"
        >
          <BalanceCard />
          <DiagramCard />
          <DashboardCard />
        </motion.div>

        {/* Logo Cloud */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="border-t border-gray-100 py-8"
        >
          <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-12 lg:gap-16">
            {logos.map((logo, index) => (
              <motion.div
                key={logo.name}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 + index * 0.1, duration: 0.4 }}
                className="opacity-70 transition-opacity hover:opacity-100"
              >
                {logo.logo}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
