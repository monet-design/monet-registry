"use client";

import { motion } from "motion/react";
import { Monitor, Download } from "lucide-react";
import "./font.css";
import "./styles.css";

// Types
interface NavItem {
  label: string;
  href: string;
  isActive?: boolean;
}

interface MarqueeItem {
  text: string;
}

interface PeraHeroProps {
  logoText?: string;
  navItems?: NavItem[];
  headline?: string;
  subheadlineLine1?: string;
  subheadlineLine2?: string;
  primaryCtaText?: string;
  secondaryCtaText?: string;
  signInText?: string;
  downloadText?: string;
  marqueeItems?: MarqueeItem[];
  portfolioValue?: string;
  portfolioValueUsd?: string;
  onPrimaryCtaClick?: () => void;
  onSecondaryCtaClick?: () => void;
}

// Pera Logo SVG
function PeraLogo({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="12" cy="12" r="10" fill="#1A1A1A" />
      <path
        d="M8 8h4c2.2 0 4 1.8 4 4s-1.8 4-4 4h-4v-8z"
        stroke="white"
        strokeWidth="1.5"
        fill="none"
      />
      <circle cx="12" cy="12" r="1.5" fill="white" />
    </svg>
  );
}

// Header Component
function Header({
  logoText,
  navItems,
  signInText,
  downloadText,
}: {
  logoText: string;
  navItems: NavItem[];
  signInText: string;
  downloadText: string;
}) {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex items-center justify-between px-6 py-4 sm:px-8 lg:px-12"
    >
      {/* Logo */}
      <div className="flex items-center gap-2">
        <PeraLogo className="h-6 w-6" />
        <span className="text-[15px] font-semibold text-[#1A1A1A]">
          {logoText}
        </span>
      </div>

      {/* Nav Items */}
      <div className="hidden items-center gap-8 lg:flex">
        {navItems.map((item) => (
          <a
            key={item.label}
            href={item.href}
            className={`text-[14px] transition-colors ${
              item.isActive
                ? "font-medium text-[#1A1A1A]"
                : "text-[#6B6B6B] hover:text-[#1A1A1A]"
            }`}
          >
            {item.label}
          </a>
        ))}
      </div>

      {/* CTA Buttons */}
      <div className="flex items-center gap-3">
        <button className="hidden rounded-full border border-[#E5E5E5] bg-white px-4 py-2 text-[13px] font-medium text-[#1A1A1A] transition-colors hover:bg-[#F5F5F5] sm:block">
          {signInText}
        </button>
        <button className="rounded-full bg-[#9179ED] px-4 py-2 text-[13px] font-medium text-white transition-colors hover:bg-[#7B5FD9]">
          {downloadText}
        </button>
      </div>
    </motion.nav>
  );
}

// Desktop Mockup Component
function DesktopMockup({
  portfolioValue,
  portfolioValueUsd,
}: {
  portfolioValue: string;
  portfolioValueUsd: string;
}) {
  return (
    <div className="relative w-full max-w-[520px] overflow-hidden rounded-xl border border-[#E5E5E5] bg-white shadow-xl">
      {/* Browser Chrome */}
      <div className="flex items-center gap-2 border-b border-[#E5E5E5] bg-[#FAFAFA] px-4 py-3">
        <div className="flex gap-1.5">
          <div className="h-2.5 w-2.5 rounded-full bg-[#FF5F57]" />
          <div className="h-2.5 w-2.5 rounded-full bg-[#FEBC2E]" />
          <div className="h-2.5 w-2.5 rounded-full bg-[#28C840]" />
        </div>
      </div>

      {/* App Content */}
      <div className="flex">
        {/* Sidebar */}
        <div className="w-40 border-r border-[#E5E5E5] bg-white p-4">
          <div className="mb-6 flex items-center gap-2">
            <PeraLogo className="h-5 w-5" />
            <span className="text-xs font-medium text-[#1A1A1A]">pera</span>
          </div>

          <div className="space-y-1">
            <div className="flex items-center gap-2 rounded-lg bg-[#F5F5F5] px-3 py-2">
              <div className="h-4 w-4 rounded bg-[#9179ED]/20" />
              <span className="text-xs font-medium text-[#9179ED]">
                Accounts
              </span>
            </div>
            <div className="flex items-center gap-2 px-3 py-2">
              <div className="h-4 w-4 rounded bg-[#E5E5E5]" />
              <span className="text-xs text-[#6B6B6B]">Send</span>
            </div>
            <div className="flex items-center gap-2 px-3 py-2">
              <div className="h-4 w-4 rounded bg-[#E5E5E5]" />
              <span className="text-xs text-[#6B6B6B]">Settings</span>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-6">
          <div className="mb-6">
            <p className="mb-1 text-xs text-[#6B6B6B]">Portfolio Value</p>
            <div className="flex items-baseline gap-2">
              <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[#1A1A1A]">
                <span className="text-[10px] text-white">A</span>
              </div>
              <span className="font-instrument-serif text-2xl font-normal text-[#1A1A1A]">
                {portfolioValue}
              </span>
            </div>
            <p className="mt-1 text-xs text-[#6B6B6B]">≈ {portfolioValueUsd}</p>
          </div>

          {/* Accounts List */}
          <div>
            <p className="mb-3 text-xs font-medium text-[#1A1A1A]">Accounts</p>
            <div className="space-y-2">
              <div className="flex items-center justify-between rounded-lg border border-[#E5E5E5] p-3">
                <div className="flex items-center gap-2">
                  <div className="h-6 w-6 rounded-full bg-[#FF6B6B]" />
                  <div>
                    <p className="text-xs font-medium text-[#1A1A1A]">
                      Spending
                    </p>
                    <p className="text-[10px] text-[#6B6B6B]">CJR5...NZNS</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-xs text-[#6B6B6B]">32</p>
                  <p className="text-[10px] text-[#6B6B6B]">Assets</p>
                </div>
              </div>
              <div className="flex items-center justify-between rounded-lg border border-[#E5E5E5] p-3">
                <div className="flex items-center gap-2">
                  <div className="h-6 w-6 rounded-full bg-[#FFB347]" />
                  <div>
                    <p className="text-xs font-medium text-[#1A1A1A]">
                      Ledger Account
                    </p>
                    <p className="text-[10px] text-[#6B6B6B]">IRA4...2ET1</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-xs text-[#6B6B6B]">6</p>
                  <p className="text-[10px] text-[#6B6B6B]">Assets</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Mobile Mockup Component
function MobileMockup({
  portfolioValue,
  portfolioValueUsd,
}: {
  portfolioValue: string;
  portfolioValueUsd: string;
}) {
  return (
    <div className="w-48 overflow-hidden rounded-3xl border border-[#E5E5E5] bg-white shadow-2xl">
      {/* Status Bar */}
      <div className="flex items-center justify-end bg-white px-4 py-2">
        <div className="h-3 w-3 rounded-full border border-[#1A1A1A]" />
      </div>

      {/* Content */}
      <div className="p-4">
        <div className="mb-4 text-center">
          <p className="mb-1 text-[10px] text-[#6B6B6B]">Portfolio Value</p>
          <p className="font-instrument-serif text-xl font-normal text-[#1A1A1A]">
            {portfolioValue}
          </p>
          <p className="text-[10px] text-[#6B6B6B]">≈ {portfolioValueUsd}</p>
        </div>

        {/* Action Buttons */}
        <div className="mb-4 flex justify-center gap-4">
          {[
            { label: "Buy ALGO", icon: "A" },
            { label: "Swap", icon: "⇄" },
            { label: "Send", icon: "↑" },
            { label: "Scan QR", icon: "⊞" },
          ].map((action) => (
            <div key={action.label} className="flex flex-col items-center gap-1">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#F5F5F5]">
                <span className="text-[10px] text-[#1A1A1A]">{action.icon}</span>
              </div>
              <span className="text-[8px] text-[#6B6B6B]">{action.label}</span>
            </div>
          ))}
        </div>

        {/* Accounts */}
        <div className="mb-3 flex items-center justify-between">
          <span className="text-[10px] font-medium text-[#1A1A1A]">
            Accounts
          </span>
          <div className="flex items-center gap-2">
            <span className="text-[10px] text-[#9179ED]">Sort</span>
            <span className="text-[10px] text-[#9179ED]">+</span>
          </div>
        </div>

        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="h-5 w-5 rounded-full bg-[#FF6B6B]" />
              <div>
                <p className="text-[10px] font-medium text-[#1A1A1A]">
                  Spending
                </p>
                <p className="text-[8px] text-[#6B6B6B]">CJR5...NZNS</p>
              </div>
            </div>
            <p className="text-[10px] text-[#1A1A1A]">16,468.00</p>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="h-5 w-5 rounded-full bg-[#FFB347]" />
              <div>
                <p className="text-[10px] font-medium text-[#1A1A1A]">
                  Ledger Account
                </p>
                <p className="text-[8px] text-[#6B6B6B]">0UA4...2ET1</p>
              </div>
            </div>
            <p className="text-[10px] text-[#1A1A1A]">8,041.72</p>
          </div>
        </div>
      </div>

      {/* Lime Green Accent */}
      <div className="flex justify-center pb-4">
        <div className="h-16 w-16 rounded-full bg-[#D4ED37] opacity-80" />
      </div>
    </div>
  );
}

// Marquee Component
function Marquee({ items }: { items: MarqueeItem[] }) {
  // Double the items for seamless loop
  const doubledItems = [...items, ...items];

  return (
    <div className="w-full overflow-hidden bg-[#2F2E2E] py-3">
      <div className="animate-marquee-left flex whitespace-nowrap">
        {doubledItems.map((item, index) => (
          <div key={index} className="flex items-center">
            <span className="px-4 text-xs font-medium uppercase tracking-wider text-white">
              {item.text}
            </span>
            <span className="text-[#6B6B6B]">◆</span>
          </div>
        ))}
      </div>
    </div>
  );
}

// Default data
const defaultNavItems: NavItem[] = [
  { label: "Home", href: "#", isActive: true },
  { label: "Pera Explorer", href: "#" },
  { label: "ASA Verification", href: "#" },
  { label: "QR Generator", href: "#" },
  { label: "Get Support", href: "#" },
];

const defaultMarqueeItems: MarqueeItem[] = [
  { text: "Secure" },
  { text: "Green" },
  { text: "Fast" },
  { text: "Decentralized" },
  { text: "Open-Source" },
  { text: "Community-Driven" },
];

// Main Component
export default function PeraHero({
  logoText = "pera",
  navItems = defaultNavItems,
  headline = "Simply the best Algorand wallet",
  subheadlineLine1 = "Pera Wallet is the easiest and safest way to store, buy and swap on the Algorand blockchain.",
  subheadlineLine2 = "Discover & connect decentralized applications (dApps) on any device.",
  primaryCtaText = "Launch Pera Web",
  secondaryCtaText = "Download Pera Mobile",
  signInText = "Pera Web",
  downloadText = "Download",
  marqueeItems = defaultMarqueeItems,
  portfolioValue = "27,809.00",
  portfolioValueUsd = "$8,041.50",
  onPrimaryCtaClick = () => {},
  onSecondaryCtaClick = () => {},
}: PeraHeroProps) {
  return (
    <section className="relative flex min-h-screen w-full flex-col bg-[#FBFBFB]">
      {/* Header */}
      <Header
        logoText={logoText}
        navItems={navItems}
        signInText={signInText}
        downloadText={downloadText}
      />

      {/* Main Content */}
      <div className="flex flex-1 flex-col items-center px-6 pt-12 sm:px-8 lg:pt-16">
        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-instrument-serif text-center text-3xl font-normal tracking-tight text-[#1A1A1A] sm:text-4xl md:text-5xl lg:text-6xl"
        >
          {headline}
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mx-auto mt-4 max-w-xl text-center text-sm leading-relaxed text-[#6B6B6B] sm:text-base"
        >
          {subheadlineLine1}
          <br />
          {subheadlineLine2}
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-8 flex flex-wrap items-center justify-center gap-4"
        >
          <button
            onClick={onPrimaryCtaClick}
            className="inline-flex items-center gap-2 rounded-full border border-[#E5E5E5] bg-white px-6 py-3 text-sm font-medium text-[#1A1A1A] transition-colors hover:bg-[#F5F5F5]"
          >
            <Monitor className="h-4 w-4" />
            {primaryCtaText}
          </button>
          <button
            onClick={onSecondaryCtaClick}
            className="inline-flex items-center gap-2 rounded-full bg-[#1A1A1A] px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-[#333]"
          >
            <Download className="h-4 w-4" />
            {secondaryCtaText}
          </button>
        </motion.div>

        {/* App Mockups */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="relative mt-12 flex w-full max-w-4xl items-end justify-center lg:mt-16"
        >
          {/* Desktop Mockup */}
          <DesktopMockup
            portfolioValue={portfolioValue}
            portfolioValueUsd={portfolioValueUsd}
          />

          {/* Mobile Mockup - Overlapping */}
          <div className="absolute -right-4 bottom-0 z-10 sm:right-0 lg:-right-8">
            <MobileMockup
              portfolioValue={portfolioValue}
              portfolioValueUsd={portfolioValueUsd}
            />
          </div>
        </motion.div>
      </div>

      {/* Marquee */}
      <div className="mt-auto">
        <Marquee items={marqueeItems} />
      </div>
    </section>
  );
}
