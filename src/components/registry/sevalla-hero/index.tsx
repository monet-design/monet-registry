"use client";

import { motion } from "motion/react";
import "./font.css";

// CUSTOMIZATION
export const CUSTOMIZATION = {};

// Types
interface NavItem {
  label: string;
  href: string;
}

interface SidebarItem {
  label: string;
  active?: boolean;
}

interface SevallaHeroProps {
  mode?: "light" | "dark";
  logoText?: string;
  navItems?: NavItem[];
  ctaText?: string;
  headlinePart1?: string;
  headlineItalic?: string;
  headlinePart2?: string;
  description?: string;
  heroCta?: string;
  dashboardTitle?: string;
  sidebarItems?: SidebarItem[];
  terminalLogs?: string[];
}

// Logo Icon Component
function SevallaLogoIcon() {
  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="28" height="28" rx="6" fill="#F2832E" />
      <path
        d="M8 10.5C8 9.67 8.67 9 9.5 9H12.5C13.33 9 14 9.67 14 10.5V11.5C14 12.33 13.33 13 12.5 13H9.5C8.67 13 8 12.33 8 11.5V10.5Z"
        fill="white"
      />
      <path
        d="M14 16.5C14 15.67 14.67 15 15.5 15H18.5C19.33 15 20 15.67 20 16.5V17.5C20 18.33 19.33 19 18.5 19H15.5C14.67 19 14 18.33 14 17.5V16.5Z"
        fill="white"
      />
    </svg>
  );
}

// Default data
const defaultNavItems: NavItem[] = [
  { label: "Products", href: "#" },
  { label: "Pricing", href: "#" },
  { label: "Docs", href: "#" },
  { label: "Changelog", href: "#" },
];

const defaultSidebarItems: SidebarItem[] = [
  { label: "Overview" },
  { label: "Deployments", active: true },
  { label: "Logs" },
  { label: "Analytics" },
  { label: "Environment variables" },
  { label: "Processes" },
  { label: "Domains" },
  { label: "Networking" },
  { label: "Disks" },
  { label: "Web terminal" },
  { label: "User management" },
  { label: "Settings" },
];

const defaultTerminalLogs: string[] = [
  "Jun 24 10:09:58 > next build",
  "Jun 24 10:09:58",
  "Jun 24 10:09:58 Attention: Next.js now collects completely anonymous telemetry regarding usage.",
  "Jun 24 10:09:58 This information is used to shape Next.js' roadmap and prioritize features.",
  "Jun 24 10:09:58 You can learn more, including how to opt-out if you'd not like to participate in this anonymous program, by visiting the following URL:",
  "Jun 24 10:09:58 https://nextjs.org/telemetry",
  "Jun 24 10:09:58",
  "Jun 24 10:09:58   ▲ Next.js 14.2.3",
  "Jun 24 10:09:58",
  "Jun 24 10:09:58   Creating an optimized production build ...",
  "Jun 24 10:10:00   ✓ For production Image Optimization with Next.js, the optional 'sharp' package is strongly recommended. Run 'npm i sharp', and Next.js will use",
  "Jun 24 10:10:00 Read more: https://nextjs.org/docs/messages/sharp-missing-in-production",
  "Jun 24 10:10:01 request to https://fonts.gstatic.com/s/inter/v13/0oC71PWK311.woff2 failed, reason:",
  "Jun 24 10:10:01 Retrying 1/3...",
  "Jun 24 10:10:01 request to https://fonts.gstatic.com/s/inter/v13/0oC71PWK311.woff2 failed, reason:",
];

// Navigation Component
function Navigation({
  logoText,
  navItems,
  ctaText,
}: {
  logoText: string;
  navItems: NavItem[];
  ctaText: string;
}) {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex items-center justify-between px-6 py-4 lg:px-12"
    >
      {/* Logo */}
      <div className="flex items-center gap-2.5">
        <SevallaLogoIcon />
        <span className="text-base font-semibold text-white">{logoText}</span>
      </div>

      {/* Nav Links */}
      <div className="hidden items-center gap-8 md:flex">
        {navItems.map((item) => (
          <a
            key={item.label}
            href={item.href}
            className="text-sm text-[#9CA3AF] transition-colors hover:text-white"
          >
            {item.label}
          </a>
        ))}
      </div>

      {/* CTA Button */}
      <button className="rounded-full bg-[#F2832E] px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-[#E07324]">
        {ctaText}
      </button>
    </motion.nav>
  );
}

// Dashboard Preview Component
function DashboardPreview({
  dashboardTitle,
  sidebarItems,
  terminalLogs,
}: {
  dashboardTitle: string;
  sidebarItems: SidebarItem[];
  terminalLogs: string[];
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.4 }}
      className="relative mx-auto max-w-5xl px-4"
    >
      {/* Browser Window */}
      <div className="overflow-hidden rounded-t-xl border border-[#3A3A3A] bg-[#1C1C1C] shadow-2xl">
        {/* Browser Chrome */}
        <div className="flex items-center justify-between border-b border-[#3A3A3A] bg-[#2A2A2A] px-4 py-3">
          <div className="flex items-center gap-3">
            <SevallaLogoIcon />
            <div className="flex items-center gap-2 text-xs text-[#9CA3AF]">
              <span>Focalpoint</span>
              <span className="text-[#555]">/</span>
              <span>Applications</span>
              <span className="text-[#555]">/</span>
              <span className="flex items-center gap-1">
                <span className="h-1.5 w-1.5 rounded-full bg-[#F2832E]" />
                Focalpoint Dashboard
              </span>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 rounded-md bg-[#3A3A3A] px-3 py-1.5">
              <svg
                className="h-3.5 w-3.5 text-[#9CA3AF]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
              <span className="text-xs text-[#6B7280]">Jump to or search...</span>
              <span className="ml-4 rounded bg-[#4A4A4A] px-1.5 py-0.5 text-[10px] text-[#9CA3AF]">
                ⌘ /
              </span>
            </div>
            <div className="flex items-center gap-3">
              <div className="h-7 w-7 rounded-full bg-[#4A4A4A]" />
              <span className="text-xs text-[#9CA3AF]">Adam Smith</span>
              <svg
                className="h-3 w-3 text-[#9CA3AF]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>
          </div>
        </div>

        {/* Dashboard Content */}
        <div className="flex">
          {/* Sidebar */}
          <div className="hidden w-48 shrink-0 border-r border-[#3A3A3A] bg-[#1C1C1C] py-4 lg:block">
            {sidebarItems.map((item) => (
              <div
                key={item.label}
                className={`px-4 py-2 text-xs ${
                  item.active
                    ? "bg-[#2A2A2A] text-white"
                    : "text-[#9CA3AF] hover:text-white"
                }`}
              >
                {item.label}
              </div>
            ))}
          </div>

          {/* Main Content */}
          <div className="flex-1 p-6">
            {/* Header */}
            <div className="mb-4 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <svg
                  className="h-4 w-4 text-[#9CA3AF]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 19l-7-7m0 0l7-7m-7 7h18"
                  />
                </svg>
                <h2 className="text-lg font-medium text-white">{dashboardTitle}</h2>
              </div>
              <button className="flex items-center gap-2 rounded-lg bg-[#F2832E] px-4 py-2 text-xs font-medium text-white">
                <svg
                  className="h-3.5 w-3.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
                Visit App
              </button>
            </div>

            {/* Tabs */}
            <div className="mb-4 flex gap-6 border-b border-[#3A3A3A]">
              <span className="border-b-2 border-white pb-2 text-xs text-white">
                Deployment logs
              </span>
              <span className="pb-2 text-xs text-[#9CA3AF]">Runtime logs</span>
            </div>

            {/* Terminal */}
            <div className="h-48 overflow-hidden rounded-lg bg-[#0D0D0D] p-4 font-mono text-[10px] leading-relaxed">
              {terminalLogs.map((log, index) => (
                <div
                  key={index}
                  className={`${
                    log.includes("▲ Next.js") || log.includes("✓")
                      ? "text-[#4ADE80]"
                      : log.includes("failed") || log.includes("Retrying")
                        ? "text-[#F87171]"
                        : "text-[#9CA3AF]"
                  }`}
                >
                  {log}
                </div>
              ))}
            </div>

            {/* Deployment Details */}
            <div className="mt-4">
              <h3 className="mb-3 text-sm font-medium text-white">
                Deployment details
              </h3>
              <div className="grid grid-cols-5 gap-4 text-xs">
                <div>
                  <div className="mb-1 text-[#6B7280]">Deployed branch</div>
                  <div className="flex items-center gap-1 text-[#9CA3AF]">
                    <span className="text-[#F2832E]">●</span>
                    focalpoint/dashboard
                    <span className="rounded bg-[#3A3A3A] px-1.5 py-0.5 text-[10px]">
                      P
                    </span>
                    main
                  </div>
                </div>
                <div>
                  <div className="mb-1 text-[#6B7280]">Commit</div>
                  <div className="text-[#9CA3AF]">9566ec</div>
                </div>
                <div>
                  <div className="mb-1 text-[#6B7280]">By</div>
                  <div className="flex items-center gap-1.5 text-[#9CA3AF]">
                    <div className="h-5 w-5 rounded-full bg-[#4A4A4A]" />
                    adamsmith
                  </div>
                </div>
                <div>
                  <div className="mb-1 text-[#6B7280]">Deploy started</div>
                  <div className="text-[#9CA3AF]">Jun 23, 2023, 4:03 PM</div>
                </div>
                <div>
                  <div className="mb-1 text-[#6B7280]">Deployment type</div>
                  <div className="text-[#9CA3AF]">Manual (on MyKinsta)</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Gradient fade at bottom */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#F5F5F5] to-transparent" />
    </motion.div>
  );
}

// Main Component
export default function SevallaHero({
  mode = "light",
  logoText = "Sevalla",
  navItems = defaultNavItems,
  ctaText = "Get started",
  headlinePart1 = "Deploy",
  headlineItalic = "anything",
  headlinePart2 = "Forget complexity",
  description = "Sevalla is the home to your upcoming projects.\nHost and manage your applications, databases, and static\nsites in a single, intuitive platform.",
  heroCta = "Get started",
  dashboardTitle = "Deployment 9566ec @ main",
  sidebarItems = defaultSidebarItems,
  terminalLogs = defaultTerminalLogs,
}: SevallaHeroProps) {
  return (
    <section className="relative w-full overflow-hidden">
      {/* Dark background for top section */}
      <div className="bg-[#0A0A0A]">
        {/* Navigation */}
        <Navigation logoText={logoText} navItems={navItems} ctaText={ctaText} />

        {/* Hero Content */}
        <div className="mx-auto max-w-4xl px-6 pb-16 pt-16 text-center lg:pb-24 lg:pt-20">
          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6 text-4xl font-normal tracking-tight text-white sm:text-5xl lg:text-6xl"
          >
            <span className="font-instrument-serif">{headlinePart1} </span>
            <span className="font-instrument-serif italic">{headlineItalic}</span>
            <br />
            <span className="font-instrument-serif">{headlinePart2}</span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mx-auto mb-8 max-w-lg whitespace-pre-line text-base leading-relaxed text-[#9CA3AF]"
          >
            {description}
          </motion.p>

          {/* CTA Button */}
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="rounded-lg bg-[#F2832E] px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-[#E07324]"
          >
            {heroCta}
          </motion.button>
        </div>
      </div>

      {/* Light background for dashboard preview */}
      <div className="relative -mt-8 bg-[#F5F5F5] pb-16 pt-0">
        <DashboardPreview
          dashboardTitle={dashboardTitle}
          sidebarItems={sidebarItems}
          terminalLogs={terminalLogs}
        />
      </div>
    </section>
  );
}
