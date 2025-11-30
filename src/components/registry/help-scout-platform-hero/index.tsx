"use client";

import { motion } from "motion/react";
import { Search, Mail, MessageCircle, ChevronDown, Star } from "lucide-react";
import "./font.css";

interface HelpScoutPlatformHeroProps {
  headline?: string[];
  description?: string;
  logoText?: string;
  navItems?: string[];
  demoButtonText?: string;
  trialButtonText?: string;
}

// Mock avatars for UI
function Avatar({ color, initials }: { color: string; initials?: string }) {
  return (
    <div
      className="flex h-8 w-8 items-center justify-center rounded-full text-xs font-medium text-white"
      style={{ backgroundColor: color }}
    >
      {initials}
    </div>
  );
}

// Product UI Screenshot Component
function ProductUIPreview() {
  return (
    <div className="relative w-full max-w-[600px]">
      {/* Main inbox window */}
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, delay: 0.3 }}
        className="overflow-hidden rounded-lg bg-white shadow-2xl"
      >
        {/* Top navigation bar */}
        <div className="flex items-center gap-4 border-b border-gray-100 bg-[#4E63A5] px-4 py-2.5 text-white">
          <div className="flex items-center gap-1.5">
            <svg viewBox="0 0 24 24" className="h-5 w-5 text-white/90" fill="currentColor">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
            </svg>
          </div>
          <div className="flex items-center gap-6 text-sm">
            <span className="flex items-center gap-1 font-medium">
              Inboxes <ChevronDown className="h-3.5 w-3.5" />
            </span>
            <span className="flex items-center gap-1 opacity-80">
              Docs <ChevronDown className="h-3.5 w-3.5" />
            </span>
            <span className="opacity-80">Messages</span>
            <span className="opacity-80">Reports</span>
            <span className="opacity-80">Customers</span>
            <span className="flex items-center gap-1 opacity-80">
              Manage <ChevronDown className="h-3.5 w-3.5" />
            </span>
          </div>
        </div>

        {/* Secondary toolbar */}
        <div className="flex items-center justify-between border-b border-gray-100 bg-white px-4 py-2.5">
          <div className="flex items-center gap-3">
            <div className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-500">
              <span className="text-[10px] font-bold text-white">H</span>
            </div>
            <span className="text-sm font-medium text-gray-700">Help with sizing</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="flex -space-x-1.5">
              <Avatar color="#6366f1" initials="J" />
              <Avatar color="#f59e0b" initials="M" />
            </div>
            <span className="rounded-full bg-[#52CF89] px-2.5 py-0.5 text-xs font-medium text-white">
              Active
            </span>
            <span className="text-sm text-gray-500">Sabrina B</span>
          </div>
        </div>

        {/* Conversation content */}
        <div className="p-4">
          <div className="mb-3 text-xs text-gray-400">#25988</div>
          <h3 className="mb-2 text-lg font-semibold text-gray-800">Help with sizing</h3>

          {/* Tags */}
          <div className="mb-4 flex flex-wrap gap-1.5">
            {["App", "sales", "faulty-item", "live-chat", "region-us", "ios"].map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-blue-50 px-2 py-0.5 text-[10px] text-blue-600"
              >
                {tag} <span className="ml-0.5 text-blue-400">x</span>
              </span>
            ))}
          </div>

          {/* Customer message */}
          <div className="flex gap-3">
            <Avatar color="#a855f7" initials="SD" />
            <div className="flex-1">
              <div className="mb-1 flex items-center gap-2">
                <span className="font-medium text-gray-800">Sarah Danilov</span>
                <span className="text-xs text-gray-400">Jun 10, 2:44pm</span>
              </div>
              <div className="mb-1 text-xs text-gray-400">
                To returns@jandgsupport.com
              </div>
              <div className="text-xs text-gray-400">Anyone, Active</div>
              <div className="mt-3 text-sm leading-relaxed text-gray-600">
                <p className="mb-2">Hey J&G,</p>
                <p className="mb-2">
                  I&apos;m having an issue with the sizing of a sweatshirt I recently purchased from your website. I ordered a size large, but it&apos;s much smaller than I expected. I&apos;m usually a size large in other brands, but this sweatshirt is so tight that I can barely even get it on.
                </p>
                <p>Can you help?</p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Floating help center modal */}
      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="absolute -bottom-4 left-1/2 w-[280px] -translate-x-1/2 overflow-hidden rounded-xl bg-[#3b4a7a] shadow-2xl"
      >
        <div className="p-4 text-center text-white">
          <h4 className="mb-4 text-lg font-medium">Looking for help?</h4>
          <div className="mb-4 flex items-center gap-2 rounded-lg bg-white/10 px-3 py-2">
            <Search className="h-4 w-4 text-white/60" />
            <span className="text-sm text-white/60">Search the knowledge base...</span>
            <button className="ml-auto rounded-md bg-[#7085DB] px-3 py-1 text-xs font-medium text-white">
              Search
            </button>
          </div>
          <div className="mb-3 flex justify-center gap-2">
            {["Buying J&G", "Payments"].map((item) => (
              <div key={item} className="flex flex-col items-center gap-1.5">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10">
                  <div className="h-5 w-5 rounded-full bg-[#6366f1]/60" />
                </div>
                <span className="text-[10px] text-white/70">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Floating conversation starter */}
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="absolute -right-4 top-1/3 w-[200px] overflow-hidden rounded-xl bg-white shadow-xl"
      >
        {/* Tab header */}
        <div className="flex border-b border-gray-100">
          <button className="flex flex-1 items-center justify-center gap-1.5 border-b-2 border-blue-500 py-2 text-xs font-medium text-gray-700">
            <Star className="h-3.5 w-3.5" /> Answers
          </button>
          <button className="flex flex-1 items-center justify-center gap-1.5 py-2 text-xs text-gray-400">
            <MessageCircle className="h-3.5 w-3.5" /> Ask
          </button>
        </div>

        <div className="p-3">
          {/* Avatars */}
          <div className="mb-3 flex justify-center -space-x-2">
            <Avatar color="#6366f1" initials="A" />
            <Avatar color="#f59e0b" initials="B" />
            <Avatar color="#ec4899" initials="C" />
            <Avatar color="#10b981" initials="D" />
          </div>

          <p className="mb-3 text-center text-xs text-gray-500">
            Start a conversation
          </p>
          <p className="mb-3 text-center text-[10px] text-gray-400">
            What channel do you prefer?
          </p>

          {/* Email option */}
          <div className="mb-2 flex items-start gap-2 rounded-lg bg-gray-50 p-2">
            <Mail className="mt-0.5 h-4 w-4 text-gray-400" />
            <div>
              <p className="text-xs font-medium text-gray-700">Email</p>
              <p className="text-[10px] text-gray-400">
                No time to wait around? We usually respond within a few hours.
              </p>
            </div>
          </div>

          {/* Chat option */}
          <div className="flex items-start gap-2 rounded-lg bg-gray-50 p-2">
            <MessageCircle className="mt-0.5 h-4 w-4 text-gray-400" />
            <div>
              <p className="text-xs font-medium text-gray-700">Chat</p>
              <p className="text-[10px] text-gray-400">
                We&apos;re online right now, talk with our team in real-time.
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default function HelpScoutPlatformHero({
  headline = ["SIMPLE", "POWERFUL", "PERSONAL"],
  description = "Stay on top of all your customer conversations with the powerful platform that feels just like an inbox.",
  logoText = "Help Scout",
  navItems = ["Product", "Solutions", "Resources", "Company", "Pricing"],
  demoButtonText = "Get a demo",
  trialButtonText = "Free Trial",
}: HelpScoutPlatformHeroProps) {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-[#FFF8F5]">
      {/* Navigation */}
      <motion.nav
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex items-center justify-between px-6 py-4 sm:px-8 lg:px-12"
      >
        {/* Logo */}
        <div className="flex items-center gap-2">
          <svg viewBox="0 0 100 40" className="h-8 w-24">
            <circle cx="20" cy="20" r="8" fill="#4E63A5" />
            <path
              d="M20 8 C 26 8, 32 14, 32 20 C 32 26, 26 32, 20 32"
              stroke="#4E63A5"
              strokeWidth="3"
              fill="none"
            />
            <text
              x="38"
              y="25"
              fontFamily="system-ui"
              fontSize="12"
              fontWeight="600"
              fill="#2D3748"
            >
              {logoText}
            </text>
          </svg>
        </div>

        {/* Nav Links */}
        <div className="hidden items-center gap-6 md:flex">
          {navItems.map((item) => (
            <button
              key={item}
              className="flex items-center gap-1 text-sm text-gray-600 transition-colors hover:text-gray-900"
            >
              {item}
              {["Product", "Solutions", "Resources", "Company"].includes(item) && (
                <ChevronDown className="h-3.5 w-3.5" />
              )}
            </button>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="flex items-center gap-3">
          <button className="hidden text-sm text-gray-600 transition-colors hover:text-gray-900 sm:block">
            {demoButtonText}
          </button>
          <button className="rounded-full bg-[#7085DB] px-5 py-2 text-sm font-medium text-white transition-colors hover:bg-[#5a6dc5]">
            {trialButtonText}
          </button>
        </div>
      </motion.nav>

      {/* Main Content */}
      <div className="mx-auto grid max-w-7xl gap-8 px-6 pt-8 sm:px-8 lg:grid-cols-2 lg:gap-12 lg:pt-16">
        {/* Left: Text Content */}
        <div className="flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            {headline.map((word, index) => (
              <h1
                key={word}
                className="font-dm-serif text-5xl font-bold italic leading-[1.1] tracking-tight text-[#1a1a2e] sm:text-6xl lg:text-7xl"
              >
                {word}
              </h1>
            ))}
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-6 max-w-md text-base leading-relaxed text-gray-600 sm:text-lg"
          >
            {description}
          </motion.p>
        </div>

        {/* Right: Product UI */}
        <div className="relative flex items-center justify-center lg:justify-end">
          <ProductUIPreview />
        </div>
      </div>
    </section>
  );
}
