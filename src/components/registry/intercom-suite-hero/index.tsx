"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { ChevronDown, Search, Plus, MoreHorizontal } from "lucide-react";
import "./font.css";

interface IntercomSuiteHeroProps {
  headingLine1?: string;
  headingLine2?: string;
  headingLine3?: string;
  badge?: string;
  description?: string;
  primaryCtaText?: string;
  secondaryCtaText?: string;
  trustText?: string;
  logos?: Array<{
    name: string;
    style?: "normal" | "italic" | "bold";
  }>;
  onPrimaryCtaClick?: () => void;
  onSecondaryCtaClick?: () => void;
}

// Chat Widget Component
function ChatWidget() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -50, y: 30 }}
      animate={{ opacity: 1, x: 0, y: 0 }}
      transition={{ duration: 0.8, delay: 0.6 }}
      className="absolute left-4 md:left-8 lg:left-16 bottom-[28%] md:bottom-[32%] z-20 w-[200px] md:w-[220px]"
    >
      <div className="rounded-2xl bg-white shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-[#1E3A5F] to-[#2A4A6F] px-3 py-2.5 flex items-center gap-2">
          <div className="flex items-center gap-1.5">
            <div className="w-5 h-5 rounded-full bg-purple-400 flex items-center justify-center">
              <span className="text-[8px] text-white font-bold">Fin</span>
            </div>
            <span className="text-white text-xs font-medium">Fin</span>
          </div>
          <MoreHorizontal className="w-3.5 h-3.5 text-white/60 ml-auto" />
        </div>

        {/* Chat Content */}
        <div className="p-3 space-y-2.5 bg-[#F8F9FA]">
          {/* Customer Message */}
          <div className="bg-[#FFE4DB] rounded-xl rounded-bl-sm px-3 py-2 max-w-[85%]">
            <p className="text-[10px] text-gray-800 leading-relaxed">
              I&apos;d like a refund, the sweater I received has a torn sleeve.
            </p>
          </div>

          {/* Bot Response */}
          <div className="flex items-start gap-1.5">
            <div className="w-4 h-4 rounded-full bg-purple-400 flex items-center justify-center flex-shrink-0 mt-0.5">
              <span className="text-[6px] text-white font-bold">Fin</span>
            </div>
            <div className="bg-white border border-gray-100 rounded-xl rounded-tl-sm px-3 py-2 shadow-sm">
              <p className="text-[10px] text-gray-700 leading-relaxed">
                Sorry about that! I see your order #56789 is a merino sweater. This needs a team member&apos;s approval, so I&apos;ll transfer you now.
              </p>
            </div>
          </div>
        </div>

        {/* Input */}
        <div className="px-3 py-2 bg-white border-t border-gray-100">
          <div className="flex items-center gap-2 bg-gray-50 rounded-full px-3 py-1.5">
            <span className="text-[10px] text-gray-400 flex-1">Message...</span>
            <div className="flex items-center gap-1">
              <div className="w-4 h-4 rounded-full bg-gray-200" />
              <div className="w-4 h-4 rounded-full bg-gray-200" />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

// Helpdesk UI Screenshot Component
function HelpdeskUI() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9, delay: 0.4 }}
      className="relative mx-auto w-full max-w-4xl"
    >
      <div className="rounded-xl overflow-hidden shadow-2xl border border-white/10 bg-white">
        {/* Browser Chrome */}
        <div className="bg-[#F5F5F5] px-4 py-2 flex items-center gap-2 border-b border-gray-200">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-[#FF5F57]" />
            <div className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
            <div className="w-3 h-3 rounded-full bg-[#28C840]" />
          </div>
        </div>

        {/* Main Content */}
        <div className="flex">
          {/* Sidebar */}
          <div className="w-14 bg-[#1E1E2E] py-4 flex flex-col items-center gap-4 hidden md:flex">
            <div className="w-8 h-8 rounded-lg bg-white/10" />
            <div className="w-8 h-8 rounded-lg bg-purple-500/30" />
            <div className="w-8 h-8 rounded-lg bg-white/10" />
            <div className="w-8 h-8 rounded-lg bg-white/10" />
          </div>

          {/* Inbox List */}
          <div className="w-48 bg-[#FAFAFA] border-r border-gray-200 hidden md:block">
            <div className="p-3 border-b border-gray-200">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-semibold text-gray-800">Inbox</span>
                <div className="flex items-center gap-1">
                  <Search className="w-3 h-3 text-gray-400" />
                  <Plus className="w-3 h-3 text-gray-400" />
                </div>
              </div>
              <div className="flex items-center gap-1 text-[10px] text-gray-500">
                <span>12 Open</span>
                <ChevronDown className="w-3 h-3" />
              </div>
            </div>

            {/* Inbox Items */}
            <div className="py-1">
              {[
                { name: "Your Inbox", count: 1, dot: "green" },
                { name: "Mentions", count: 12, dot: "blue" },
                { name: "Created by you", count: 0 },
                { name: "All", count: 2370 },
              ].map((item, i) => (
                <div key={i} className="px-3 py-1.5 flex items-center justify-between hover:bg-gray-100 cursor-pointer">
                  <div className="flex items-center gap-2">
                    {item.dot && <div className={`w-1.5 h-1.5 rounded-full ${item.dot === "green" ? "bg-green-500" : "bg-blue-500"}`} />}
                    <span className="text-[10px] text-gray-700">{item.name}</span>
                  </div>
                  <span className="text-[9px] text-gray-400">{item.count}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Messages List */}
          <div className="w-56 border-r border-gray-200 hidden lg:block">
            <div className="p-2 border-b border-gray-200 flex items-center justify-between">
              <span className="text-[10px] font-medium text-gray-600">Mentions</span>
              <div className="flex items-center gap-1 text-[9px] text-gray-400">
                <span>Newest</span>
                <ChevronDown className="w-2.5 h-2.5" />
              </div>
            </div>

            {/* Message Items */}
            <div>
              {[
                { name: "Tom Simone", preview: "I'd like a refund, the swe...", time: "5m", active: true },
                { name: "Jim Dietrich", preview: "What's your returns polic...", time: "3m" },
                { name: "Kay Brakus", preview: "I heard help with my orde...", time: "3m" },
                { name: "Karl Erhard III", preview: "#67347 - Possible bug in...", time: "10m" },
                { name: "Shelley Miraz", preview: "Where can I find the late...", time: "15m" },
              ].map((msg, i) => (
                <div key={i} className={`px-3 py-2 flex items-start gap-2 cursor-pointer ${msg.active ? "bg-blue-50 border-l-2 border-blue-500" : "hover:bg-gray-50"}`}>
                  <div className={`w-6 h-6 rounded-full flex-shrink-0 ${msg.active ? "bg-blue-500" : "bg-gray-300"}`} />
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <span className={`text-[10px] font-medium ${msg.active ? "text-blue-900" : "text-gray-700"}`}>{msg.name}</span>
                      <span className="text-[8px] text-gray-400">{msg.time}</span>
                    </div>
                    <p className="text-[9px] text-gray-500 truncate">{msg.preview}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Main Chat Area */}
          <div className="flex-1 bg-white min-h-[200px] md:min-h-[280px]">
            <div className="p-3 border-b border-gray-200 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="text-xs font-semibold text-gray-800">Tom Simone</span>
              </div>
              <div className="flex items-center gap-2">
                <button className="px-2 py-1 text-[9px] bg-blue-500 text-white rounded">Close</button>
              </div>
            </div>

            <div className="p-4 space-y-3">
              {/* AI Copilot Badge */}
              <div className="flex items-center gap-1.5 bg-purple-50 text-purple-700 px-2 py-1 rounded-full w-fit text-[9px]">
                <span className="w-3 h-3 rounded-full bg-purple-500 flex items-center justify-center text-white text-[6px]">AI</span>
                Ask Copilot
              </div>

              {/* Customer Message */}
              <div className="bg-[#FFE8E0] rounded-xl rounded-bl-sm px-3 py-2 max-w-[70%]">
                <p className="text-[10px] text-gray-800">I&apos;d like a refund, the sweater I received has a torn sleeve.</p>
              </div>

              {/* Image */}
              <div className="w-32 h-24 bg-gray-200 rounded-lg overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-gray-300 to-gray-400" />
              </div>
            </div>
          </div>

          {/* Details Panel */}
          <div className="w-48 bg-[#FAFAFA] border-l border-gray-200 hidden xl:block">
            <div className="p-3 border-b border-gray-200">
              <div className="flex gap-3 text-[10px]">
                <span className="text-gray-800 font-medium">Details</span>
                <span className="text-gray-400">Copilot</span>
              </div>
            </div>

            <div className="p-3 space-y-3">
              <div>
                <span className="text-[9px] text-gray-500">Assignee</span>
                <div className="flex items-center gap-1.5 mt-1">
                  <div className="w-4 h-4 rounded-full bg-gray-300" />
                  <span className="text-[10px] text-gray-700">James Austen</span>
                </div>
              </div>

              <div>
                <span className="text-[9px] text-gray-500">Team</span>
                <div className="flex items-center gap-1.5 mt-1">
                  <div className="w-2 h-2 rounded-full bg-red-500" />
                  <span className="text-[10px] text-gray-700">Disputes team</span>
                </div>
              </div>

              <div className="pt-2 border-t border-gray-200">
                <span className="text-[9px] text-gray-500 font-medium">Links</span>
                <div className="mt-1.5 space-y-1.5">
                  {["Tracker tickets", "Back-office tickets", "Side conversations"].map((link, i) => (
                    <div key={i} className="flex items-center justify-between text-[9px]">
                      <span className="text-gray-600">{link}</span>
                      <Plus className="w-3 h-3 text-gray-400" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

// Logo Cloud Component
function LogoCloud({ logos }: { logos: Array<{ name: string; style?: "normal" | "italic" | "bold" }> }) {
  return (
    <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10 lg:gap-14">
      {logos.map((logo, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 + i * 0.05 }}
          className={`text-lg md:text-xl lg:text-2xl text-white/50 ${
            logo.style === "italic" ? "italic" : ""
          } ${logo.style === "bold" ? "font-bold" : "font-medium"}`}
          style={{ fontFamily: logo.name === "Carvana" ? "serif" : "inherit" }}
        >
          {logo.name}
        </motion.span>
      ))}
    </div>
  );
}

export default function IntercomSuiteHero({
  headingLine1 = "The #1 AI Agent.",
  headingLine2 = "The next generation Helpdesk.",
  headingLine3 = "One seamless service suite.",
  badge = "FIN AI AGENT + HELPDESK",
  description = "The Intercom Customer Service Suite combines the #1 AI Agent for customer service with a next-gen Helpdesk—built on a single platform that maximizes team efficiency and delivers superior service.",
  primaryCtaText = "View demo",
  secondaryCtaText = "Start free trial",
  trustText = "Trusted by over 30,000 customer service leaders",
  logos = [
    { name: "Coda", style: "normal" },
    { name: "Aspire", style: "normal" },
    { name: "Perplexity", style: "normal" },
    { name: "Carvana", style: "italic" },
    { name: "Pfizer", style: "normal" },
    { name: "Spendesk", style: "normal" },
    { name: "Microsoft", style: "normal" },
    { name: "Chess.com", style: "bold" },
  ],
  onPrimaryCtaClick,
  onSecondaryCtaClick,
}: IntercomSuiteHeroProps) {
  return (
    <section className="relative min-h-screen w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/registry/intercom-suite-hero/background.png"
          alt="Night sky cityscape background"
          fill
          className="object-cover object-top"
          priority
        />
        {/* Gradient overlay for top section */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#061256]/90 via-[#061256]/70 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-20 md:pt-28 pb-12">
        {/* Hero Header Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 mb-12 md:mb-20">
          {/* Left - Main Heading */}
          <div className="lg:col-span-7">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-instrument-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.05] tracking-tight"
            >
              <span className="text-white block">{headingLine1}</span>
              <span className="text-[#B4BACE] block italic">{headingLine2}</span>
              <span className="text-[#B4BACE] block italic">{headingLine3}</span>
            </motion.h1>
          </div>

          {/* Right - Description and CTAs */}
          <div className="lg:col-span-5 flex flex-col justify-end">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="space-y-6"
            >
              {/* Badge */}
              <div className="text-xs font-medium text-white/60 tracking-wider uppercase">
                {badge}
              </div>

              {/* Description */}
              <p className="text-sm md:text-base text-white/70 leading-relaxed max-w-md">
                {description}
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-wrap items-center gap-3">
                <button
                  onClick={onPrimaryCtaClick}
                  className="px-5 py-2.5 text-sm font-medium text-white bg-[#416CAB] hover:bg-[#4A7AC0] rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20"
                >
                  {primaryCtaText}
                </button>
                <button
                  onClick={onSecondaryCtaClick}
                  className="px-5 py-2.5 text-sm font-medium text-gray-800 bg-white hover:bg-gray-100 rounded-full transition-all duration-300"
                >
                  {secondaryCtaText}
                </button>
              </div>
            </motion.div>
          </div>
        </div>

        {/* UI Screenshot Section */}
        <div className="relative">
          <ChatWidget />
          <HelpdeskUI />
        </div>

        {/* Trust Section */}
        <div className="mt-12 md:mt-20 text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="text-sm text-white/60 mb-8"
          >
            {trustText}
          </motion.p>
          <LogoCloud logos={logos} />
        </div>
      </div>
    </section>
  );
}
