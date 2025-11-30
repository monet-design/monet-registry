"use client";

import { useState } from "react";
import { motion } from "motion/react";
import {
  ChevronDown,
  Plus,
  MoreHorizontal,
  MessageSquare,
  Mail,
  Check,
  Clock,
  Search,
  Sparkles,
} from "lucide-react";

// Font CSS import
import "./font.css";

// Types
interface NavItem {
  label: string;
  href: string;
  hasDropdown?: boolean;
}

interface Integration {
  name: string;
  icon: React.ReactNode;
}

interface PlainHomeHeroProps {
  logoText?: string;
  announcement?: string;
  headline?: string;
  subheadline?: string;
  inputPlaceholder?: string;
  ctaText?: string;
  trialText?: string;
  navItems?: NavItem[];
  integrations?: Integration[];
  onSubmit?: (email: string) => void;
}

// Logo Component
function PlainLogo() {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 22 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11 2L2 7L11 12L20 7L11 2Z"
        fill="#46C989"
      />
      <path
        d="M2 15L11 20L20 15"
        stroke="#46C989"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M2 11L11 16L20 11"
        stroke="#46C989"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

// Slack Icon
function SlackIcon({ className }: { className?: string }) {
  return (
    <svg className={className} width="16" height="16" viewBox="0 0 16 16" fill="none">
      <path d="M3.5 10C3.5 10.828 2.828 11.5 2 11.5C1.172 11.5 0.5 10.828 0.5 10C0.5 9.172 1.172 8.5 2 8.5H3.5V10Z" fill="#E01E5A"/>
      <path d="M4.25 10C4.25 9.172 4.922 8.5 5.75 8.5C6.578 8.5 7.25 9.172 7.25 10V14C7.25 14.828 6.578 15.5 5.75 15.5C4.922 15.5 4.25 14.828 4.25 14V10Z" fill="#E01E5A"/>
      <path d="M5.75 3.5C4.922 3.5 4.25 2.828 4.25 2C4.25 1.172 4.922 0.5 5.75 0.5C6.578 0.5 7.25 1.172 7.25 2V3.5H5.75Z" fill="#36C5F0"/>
      <path d="M5.75 4.25C6.578 4.25 7.25 4.922 7.25 5.75C7.25 6.578 6.578 7.25 5.75 7.25H1.75C0.922 7.25 0.25 6.578 0.25 5.75C0.25 4.922 0.922 4.25 1.75 4.25H5.75Z" fill="#36C5F0"/>
      <path d="M12.25 5.75C12.25 4.922 12.922 4.25 13.75 4.25C14.578 4.25 15.25 4.922 15.25 5.75C15.25 6.578 14.578 7.25 13.75 7.25H12.25V5.75Z" fill="#2EB67D"/>
      <path d="M11.5 5.75C11.5 6.578 10.828 7.25 10 7.25C9.172 7.25 8.5 6.578 8.5 5.75V1.75C8.5 0.922 9.172 0.25 10 0.25C10.828 0.25 11.5 0.922 11.5 1.75V5.75Z" fill="#2EB67D"/>
      <path d="M10 12.25C10.828 12.25 11.5 12.922 11.5 13.75C11.5 14.578 10.828 15.25 10 15.25C9.172 15.25 8.5 14.578 8.5 13.75V12.25H10Z" fill="#ECB22E"/>
      <path d="M10 11.5C9.172 11.5 8.5 10.828 8.5 10C8.5 9.172 9.172 8.5 10 8.5H14C14.828 8.5 15.5 9.172 15.5 10C15.5 10.828 14.828 11.5 14 11.5H10Z" fill="#ECB22E"/>
    </svg>
  );
}

// Teams Icon
function TeamsIcon({ className }: { className?: string }) {
  return (
    <svg className={className} width="16" height="16" viewBox="0 0 16 16" fill="none">
      <path d="M10.5 4.5C11.328 4.5 12 3.828 12 3C12 2.172 11.328 1.5 10.5 1.5C9.672 1.5 9 2.172 9 3C9 3.828 9.672 4.5 10.5 4.5Z" fill="#5059C9"/>
      <path d="M13.5 5H8.5C8.224 5 8 5.224 8 5.5V10.5C8 10.776 8.224 11 8.5 11H11V14H13V6C13.552 6 14 5.552 14 5C14 5 14.052 5 13.5 5Z" fill="#5059C9"/>
      <path d="M6 5C7.105 5 8 4.105 8 3C8 1.895 7.105 1 6 1C4.895 1 4 1.895 4 3C4 4.105 4.895 5 6 5Z" fill="#7B83EB"/>
      <path d="M9 6H3C2.448 6 2 6.448 2 7V12C2 12.552 2.448 13 3 13H4V15L7 13H9C9.552 13 10 12.552 10 12V7C10 6.448 9.552 6 9 6Z" fill="#7B83EB"/>
    </svg>
  );
}

// Discord Icon
function DiscordIcon({ className }: { className?: string }) {
  return (
    <svg className={className} width="16" height="16" viewBox="0 0 16 16" fill="none">
      <path d="M13.545 3.195C12.545 2.735 11.48 2.395 10.37 2.195C10.23 2.445 10.07 2.775 9.96 3.035C8.785 2.855 7.62 2.855 6.465 3.035C6.355 2.775 6.19 2.445 6.05 2.195C4.935 2.395 3.87 2.735 2.87 3.195C0.89 6.105 0.345 8.945 0.62 11.745C1.94 12.735 3.22 13.345 4.48 13.755C4.8 13.315 5.085 12.845 5.33 12.345C4.86 12.165 4.41 11.945 3.985 11.685C4.095 11.605 4.205 11.52 4.31 11.435C6.67 12.535 9.26 12.535 11.59 11.435C11.7 11.52 11.81 11.605 11.915 11.685C11.49 11.945 11.04 12.165 10.57 12.345C10.815 12.845 11.1 13.315 11.42 13.755C12.68 13.345 13.96 12.735 15.28 11.745C15.605 8.495 14.755 5.685 13.545 3.195ZM5.45 10.015C4.765 10.015 4.2 9.375 4.2 8.595C4.2 7.815 4.75 7.175 5.45 7.175C6.15 7.175 6.715 7.815 6.7 8.595C6.7 9.375 6.15 10.015 5.45 10.015ZM10.45 10.015C9.765 10.015 9.2 9.375 9.2 8.595C9.2 7.815 9.75 7.175 10.45 7.175C11.15 7.175 11.715 7.815 11.7 8.595C11.7 9.375 11.15 10.015 10.45 10.015Z" fill="#5865F2"/>
    </svg>
  );
}

// Email Icon for integration
function EmailIcon({ className }: { className?: string }) {
  return (
    <Mail className={className} size={14} />
  );
}

// Chat Icon for integration
function ChatIcon({ className }: { className?: string }) {
  return (
    <MessageSquare className={className} size={14} />
  );
}

// Default data
const defaultNavItems: NavItem[] = [
  { label: "Product", href: "#" },
  { label: "Customers", href: "#" },
  { label: "Channels", href: "#", hasDropdown: true },
  { label: "Resources", href: "#", hasDropdown: true },
  { label: "Docs", href: "#" },
  { label: "Pricing", href: "#" },
  { label: "Sign in", href: "#" },
];

const defaultIntegrations: Integration[] = [
  { name: "SLACK", icon: <SlackIcon /> },
  { name: "TEAMS", icon: <TeamsIcon /> },
  { name: "DISCORD", icon: <DiscordIcon /> },
  { name: "EMAIL", icon: <EmailIcon className="text-gray-400" /> },
  { name: "CHAT", icon: <ChatIcon className="text-gray-400" /> },
];

// Dashboard Preview Component
function DashboardPreview() {
  return (
    <div className="relative mx-auto max-w-5xl overflow-hidden rounded-xl border border-[#2a2a2a] bg-[#111111] shadow-2xl">
      {/* Main Dashboard Layout */}
      <div className="flex min-h-[420px]">
        {/* Left Sidebar - Company Info */}
        <div className="hidden w-[220px] border-r border-[#2a2a2a] bg-[#0d0d0d] p-4 md:block">
          {/* Company Header */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-md bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-[10px] font-bold text-white">
                A
              </div>
              <span className="text-sm font-medium text-white">Atrium</span>
            </div>
            <div className="flex items-center gap-1">
              <button className="p-1 hover:bg-[#1a1a1a] rounded">
                <Plus size={14} className="text-gray-500" />
              </button>
              <button className="p-1 hover:bg-[#1a1a1a] rounded">
                <MoreHorizontal size={14} className="text-gray-500" />
              </button>
            </div>
          </div>

          {/* Company Details */}
          <div className="space-y-3 text-xs">
            <div className="flex justify-between">
              <span className="text-gray-500">Domain</span>
              <span className="text-gray-300">atrium.so</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-500">Tier</span>
              <span className="flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                <span className="px-2 py-0.5 bg-[#1a1a1a] rounded text-gray-300 text-[10px]">Enterprise</span>
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-500">Contract value</span>
              <span className="text-gray-300">$48,000 <span className="text-gray-500">ARR</span></span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-500">People</span>
              <span className="text-gray-300">12</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-500">Slack channel</span>
              <span className="flex items-center gap-1">
                <SlackIcon className="w-3 h-3" />
                <span className="text-gray-300 text-[10px]">#ext-atrium-ollo</span>
              </span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-500">Source</span>
              <span className="flex items-center gap-1">
                <span className="text-orange-500 text-[10px]">🔥</span>
                <span className="text-gray-300">Hubspot</span>
              </span>
            </div>
          </div>

          {/* Support Volume Chart */}
          <div className="mt-6">
            <span className="text-xs text-gray-500">Support volume</span>
            <div className="mt-3 flex items-end gap-1 h-20">
              {[3, 5, 2, 7, 4, 8, 6, 3, 9, 5, 4, 7, 3, 6, 8, 4, 2, 5, 7, 3, 1].map((h, i) => (
                <div
                  key={i}
                  className="flex-1 rounded-t"
                  style={{
                    height: `${h * 10}%`,
                    backgroundColor: i >= 17 ? '#4f46e5' : '#3b3b3b',
                  }}
                />
              ))}
            </div>
            <div className="flex justify-between mt-1 text-[9px] text-gray-600">
              <span>19 Jan</span>
              <span>26 Jan</span>
              <span>02 Feb</span>
              <span>Today</span>
            </div>
          </div>

          {/* Requests from Atrium */}
          <div className="mt-6">
            <span className="text-xs text-gray-500">Requests from Atrium</span>
            <div className="mt-2 space-y-2">
              <div className="flex items-center gap-2 text-[10px]">
                <span className="text-gray-600">1</span>
                <span className="text-yellow-500">⚠</span>
                <span className="text-gray-500">I-213</span>
                <span className="text-gray-300">Custom views</span>
              </div>
              <div className="flex items-center gap-2 text-[10px]">
                <span className="text-gray-600">2</span>
                <span className="text-red-500">●</span>
                <span className="text-gray-500">I-244</span>
                <span className="text-gray-300">Real time collaboration</span>
              </div>
            </div>
          </div>
        </div>

        {/* Middle Section - Thread List */}
        <div className="flex-1 border-r border-[#2a2a2a]">
          {/* Tabs */}
          <div className="flex border-b border-[#2a2a2a] px-4">
            <button className="px-3 py-3 text-xs font-medium text-white border-b-2 border-white">
              Threads
            </button>
            <button className="px-3 py-3 text-xs text-gray-500 hover:text-gray-300">
              People
            </button>
            <button className="px-3 py-3 text-xs text-gray-500 hover:text-gray-300">
              Reporting
            </button>
          </div>

          {/* Thread Groups */}
          <div className="p-2">
            {/* Needs first response */}
            <div className="mb-2">
              <div className="flex items-center gap-2 px-2 py-1.5 text-xs text-gray-400">
                <Sparkles size={12} className="text-yellow-500" />
                <span>Needs first response</span>
                <span className="text-gray-600">1</span>
              </div>
              <ThreadItem
                avatar="https://api.dicebear.com/7.x/avataaars/svg?seed=annie"
                name="Annie Atkins"
                subject="Switching To Annual Subscription Plan"
                time="1h ago"
                badge="13m 22s"
                badgeColor="bg-[#46C989]"
                hasTimer
              />
              <ThreadItem
                avatar="https://api.dicebear.com/7.x/avataaars/svg?seed=isabella"
                name="Isabella Irwin"
                subject="Data Migration Assistance Before Launch"
                time="15m ago"
                badge="1h 45m"
                badgeColor="bg-[#2a2a2a]"
                hasAssignees
              />
            </div>

            {/* Investigating */}
            <div className="mb-2">
              <div className="flex items-center gap-2 px-2 py-1.5 text-xs text-gray-400">
                <Search size={12} className="text-purple-500" />
                <span>Investigating</span>
                <span className="text-gray-600">1</span>
              </div>
              <ThreadItem
                avatar="https://api.dicebear.com/7.x/avataaars/svg?seed=carson"
                name="Carson Cooper"
                subject="Data Migration Assistance Before Launch"
                time="36m ago"
                badge="1d 2h"
                badgeColor="bg-[#2a2a2a]"
                hasTimer
                hasAssignees
              />
            </div>

            {/* Waiting for customer */}
            <div className="mb-2">
              <div className="flex items-center gap-2 px-2 py-1.5 text-xs text-gray-400">
                <Clock size={12} className="text-orange-500" />
                <span>Waiting for customer</span>
              </div>
              <ThreadItemPlaceholder />
              <ThreadItemPlaceholder />
            </div>

            {/* Done */}
            <div>
              <div className="flex items-center gap-2 px-2 py-1.5 text-xs text-gray-400">
                <Check size={12} className="text-green-500" />
                <span>Done</span>
              </div>
              <ThreadItemPlaceholder />
              <ThreadItemPlaceholder />
              <ThreadItemPlaceholder />
            </div>
          </div>
        </div>

        {/* Right Section - Message Detail with AI Response */}
        <div className="hidden w-[340px] lg:block">
          {/* Message Header */}
          <div className="bg-[#2a2a2a] px-4 py-3">
            <h3 className="text-sm font-medium text-white">Switching To Annual Subscription Plan</h3>
          </div>

          {/* Message Content */}
          <div className="p-4">
            <div className="flex items-start gap-3">
              <img
                src="https://api.dicebear.com/7.x/avataaars/svg?seed=annie"
                alt="Annie Atkins"
                className="w-8 h-8 rounded-full bg-[#2a2a2a]"
              />
              <div className="flex-1">
                <span className="text-sm font-medium text-white">Annie Atkins</span>
                <div className="mt-2 space-y-1">
                  <div className="h-2 bg-[#46C989] rounded w-full opacity-60"></div>
                  <div className="h-2 bg-[#2a2a2a] rounded w-4/5"></div>
                  <div className="h-2 bg-[#2a2a2a] rounded w-full"></div>
                  <div className="h-2 bg-[#2a2a2a] rounded w-3/4"></div>
                </div>
              </div>
            </div>
          </div>

          {/* AI Response Panel */}
          <div className="absolute bottom-4 right-4 left-auto w-[320px] bg-[#1a1a1a] rounded-lg border border-[#2a2a2a] shadow-xl">
            <div className="flex items-center gap-2 px-3 py-2">
              <div className="flex items-center gap-1.5 px-2 py-1 bg-[#46C989] rounded text-xs text-black font-medium">
                <Sparkles size={12} />
                <span>Drafting AI response...</span>
              </div>
            </div>
            <div className="px-3 pb-3">
              <p className="text-xs text-gray-300 leading-relaxed">
                Hi Annie, you can do this by going to Settings &gt; Billing and the clicking on Switch to annual billing.
              </p>
            </div>
            <div className="flex items-center justify-between px-3 py-2 border-t border-[#2a2a2a]">
              <div className="flex items-center gap-2">
                <button className="p-1 hover:bg-[#2a2a2a] rounded text-gray-500">
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="currentColor">
                    <path d="M2 4h10M2 7h10M2 10h6"/>
                  </svg>
                </button>
                <button className="p-1 hover:bg-[#2a2a2a] rounded text-gray-500">
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="currentColor">
                    <path d="M3 2v10l4-3 4 3V2H3z"/>
                  </svg>
                </button>
                <button className="p-1 hover:bg-[#2a2a2a] rounded text-gray-500">
                  <span className="text-xs font-bold">A</span>
                </button>
              </div>
              <div className="flex items-center gap-2">
                <button className="px-3 py-1 text-xs text-gray-300 hover:bg-[#2a2a2a] rounded">
                  Accept reply
                </button>
                <button className="p-1 hover:bg-[#2a2a2a] rounded text-gray-500">
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="currentColor">
                    <path d="M7 2L2 7l5 5M12 7H3"/>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Thread Item Component
function ThreadItem({
  avatar,
  name,
  subject,
  time,
  badge,
  badgeColor,
  hasTimer,
  hasAssignees,
}: {
  avatar: string;
  name: string;
  subject: string;
  time: string;
  badge: string;
  badgeColor: string;
  hasTimer?: boolean;
  hasAssignees?: boolean;
}) {
  return (
    <div className="flex items-center gap-3 px-2 py-2 hover:bg-[#1a1a1a] rounded cursor-pointer">
      <input type="checkbox" className="w-3 h-3 rounded border-gray-600 bg-transparent" />
      <img
        src={avatar}
        alt={name}
        className="w-7 h-7 rounded-full bg-[#2a2a2a]"
      />
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2">
          <span className="text-xs font-medium text-white truncate">{name}</span>
        </div>
        <p className="text-[10px] text-gray-400 truncate">{subject}</p>
      </div>
      <div className="flex items-center gap-2">
        <span className={`px-2 py-0.5 ${badgeColor} rounded text-[10px] ${badgeColor === 'bg-[#46C989]' ? 'text-black' : 'text-gray-300'}`}>
          {badge}
        </span>
        {hasTimer && <Clock size={10} className="text-gray-500" />}
        <span className="text-[10px] text-gray-500">{time}</span>
        {hasAssignees && (
          <div className="flex -space-x-1">
            <div className="w-4 h-4 rounded-full bg-purple-500 border border-[#111]"></div>
            <div className="w-4 h-4 rounded-full bg-blue-500 border border-[#111]"></div>
          </div>
        )}
      </div>
    </div>
  );
}

// Placeholder Thread Item
function ThreadItemPlaceholder() {
  return (
    <div className="flex items-center gap-3 px-2 py-2">
      <input type="checkbox" className="w-3 h-3 rounded border-gray-600 bg-transparent" />
      <div className="w-7 h-7 rounded-full bg-[#2a2a2a]"></div>
      <div className="flex-1 space-y-1">
        <div className="h-2 bg-[#2a2a2a] rounded w-24"></div>
        <div className="h-2 bg-[#1a1a1a] rounded w-32"></div>
      </div>
    </div>
  );
}

// Main Component
export default function PlainHomeHero({
  logoText = "Plain",
  announcement = "Announcing our $15m Series A",
  headline = "Deliver collaborative B2B\ncustomer support",
  subheadline = "Support your customers on Slack, Microsoft Teams, Discord and many more – and move from answering tickets to building genuine relationships.",
  inputPlaceholder = "Your work email",
  ctaText = "See Plain in action",
  trialText = "FREE 14 DAY TRIAL",
  navItems = defaultNavItems,
  integrations = defaultIntegrations,
  onSubmit,
}: PlainHomeHeroProps) {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit?.(email);
  };

  return (
    <section className="relative min-h-screen w-full bg-[#0f1110] overflow-hidden">
      {/* Background Grid Pattern */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `
            linear-gradient(rgba(70, 201, 137, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(70, 201, 137, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
        }}
      />

      {/* Navigation */}
      <motion.nav
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative z-10 flex items-center justify-between px-6 py-4 sm:px-8 lg:px-12"
      >
        {/* Logo */}
        <div className="flex items-center gap-2">
          <PlainLogo />
          <span className="text-base font-semibold text-white">{logoText}</span>
        </div>

        {/* Nav Items - Desktop */}
        <div className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="flex items-center gap-1 px-3 py-2 text-sm text-gray-300 hover:text-white transition-colors"
            >
              {item.label}
              {item.hasDropdown && <ChevronDown size={14} className="text-gray-500" />}
            </a>
          ))}
        </div>

        {/* CTA Button */}
        <button className="rounded-full bg-[#46C989] px-4 py-2 text-sm font-medium text-black transition-colors hover:bg-[#3ab577]">
          Book a demo
        </button>
      </motion.nav>

      {/* Main Content */}
      <div className="relative z-10 mx-auto max-w-4xl px-6 pt-12 pb-8 sm:px-8 sm:pt-16">
        {/* Announcement Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.5 }}
          className="flex justify-center mb-8"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-[#2a2a2a] bg-[#1a1a1a] px-4 py-2 text-sm text-gray-300">
            {announcement}
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="font-instrument-serif text-center text-4xl font-normal tracking-tight text-white sm:text-5xl md:text-6xl whitespace-pre-line"
        >
          {headline}
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mx-auto mt-6 max-w-2xl text-center text-base leading-relaxed text-gray-400 sm:text-lg"
        >
          {subheadline}
        </motion.p>

        {/* Email Input Form */}
        <motion.form
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          onSubmit={handleSubmit}
          className="mx-auto mt-8 flex max-w-md items-center gap-0 rounded-full border border-[#2a2a2a] bg-[#1a1a1a] p-1.5"
        >
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder={inputPlaceholder}
            className="flex-1 bg-transparent px-4 py-2 text-sm text-white placeholder:text-gray-500 focus:outline-none"
          />
          <button
            type="submit"
            className="rounded-full bg-[#46C989] px-5 py-2.5 text-sm font-medium text-black transition-colors hover:bg-[#3ab577]"
          >
            {ctaText}
          </button>
        </motion.form>

        {/* Trial Text */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="mt-4 text-center text-xs tracking-widest text-gray-500"
        >
          {trialText}
        </motion.p>

        {/* Integrations */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="mt-8 flex flex-wrap items-center justify-center gap-4"
        >
          <span className="text-xs tracking-widest text-gray-500">WORKS WITH</span>
          {integrations.map((integration) => (
            <div
              key={integration.name}
              className="flex items-center gap-1.5 text-xs tracking-wider text-gray-400"
            >
              {integration.icon}
              <span>{integration.name}</span>
            </div>
          ))}
          <span className="text-xs tracking-wider text-gray-500">AND MORE</span>
        </motion.div>
      </div>

      {/* Dashboard Preview */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7, duration: 0.8 }}
        className="relative z-10 mx-auto max-w-6xl px-6 sm:px-8"
      >
        <DashboardPreview />
      </motion.div>

      {/* Bottom Fade Gradient */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#0f1110] to-transparent" />
    </section>
  );
}
