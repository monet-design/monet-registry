"use client";

// ============================================================================
// CUSTOMIZATION - 이 섹션의 값들을 수정하여 프로젝트에 맞게 조정하세요
// ============================================================================

const COLORS = {
  light: {},
  dark: {},
} as const;

const IMAGES = {} as const;

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { motion } from "motion/react";
import { Search, MoreHorizontal, Minimize2, Paperclip, ArrowUp, ChevronDown } from "lucide-react";
import "./font.css";

// Types
interface ChatMessage {
  sender: "ai" | "user";
  name?: string;
  message: string;
}

interface FinAiEcommerceHeroProps {
  mode?: "light" | "dark";
  headline?: string;
  subheadline?: string;
  primaryCtaText?: string;
  secondaryCtaText?: string;
  onPrimaryClick?: () => void;
  onSecondaryClick?: () => void;
  chatMessages?: ChatMessage[];
  aiAgentName?: string;
}

// AI Sparkle Icon
function SparkleIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M8 0L9.5 5.5L15 7L9.5 8.5L8 14L6.5 8.5L1 7L6.5 5.5L8 0Z"
        fill="currentColor"
      />
      <path
        d="M13 10L13.75 12.25L16 13L13.75 13.75L13 16L12.25 13.75L10 13L12.25 12.25L13 10Z"
        fill="currentColor"
      />
    </svg>
  );
}

// Shopify Icon
function ShopifyIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M15.337 4.016c-.072-.072-.168-.096-.24-.096-.072 0-1.176-.072-1.176-.072s-.936-.936-1.032-1.032c-.096-.096-.288-.072-.36-.048l-.504.144c-.048-.144-.12-.312-.216-.48-.312-.6-.792-.912-1.368-.912-.048 0-.072 0-.12.024-.024-.024-.048-.048-.072-.072-.24-.264-.552-.384-.888-.36-.696.024-1.392.528-1.944 1.416-.384.624-.672 1.416-.768 2.016l-1.584.48c-.456.144-.48.168-.528.6-.048.336-1.248 9.576-1.248 9.576L12.96 18l6.48-1.584S15.409 4.088 15.337 4.016zM11.089 5.08l-.024.024-1.224.384c.12-.456.336-.912.624-1.224.12-.12.288-.264.48-.36.192.408.168.912.144 1.176zm-.984-1.632c.168 0 .312.048.432.168-.192.096-.384.264-.552.456-.384.408-.672 1.056-.792 1.68l-1.032.312c.192-.936.984-2.568 1.944-2.616zm.312 6.816s-.456-.24-1.008-.24c-.816 0-.864.504-.864.648 0 .696 1.848 .96 1.848 2.616 0 1.296-.816 2.136-1.944 2.136-1.344 0-2.016-.84-2.016-.84l.36-1.176s.696.6 1.296.6c.384 0 .552-.312.552-.528 0-.912-1.512-.96-1.512-2.472 0-1.272.912-2.496 2.76-2.496.72 0 1.056.192 1.056.192l-.528 1.56zm.816-4.992c-.024-.216-.024-.528-.12-.816-.288.096-.552.336-.744.672-.264.432-.456.984-.552 1.512l.888-.264c.072-.36.432-1.008.528-1.104z"
        fill="#95BF47"
      />
    </svg>
  );
}

// Dashboard Card - Left side with workflow data
function WorkflowCard() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -50, rotateY: 15 }}
      animate={{ opacity: 1, x: 0, rotateY: 8 }}
      transition={{ delay: 0.4, duration: 0.8 }}
      className="absolute left-0 top-[60px] w-[320px] rounded-xl border border-[#2A3044] bg-[#0D1117]/95 backdrop-blur-sm shadow-2xl overflow-hidden"
      style={{ transform: "perspective(1000px) rotateY(8deg)" }}
    >
      {/* Header */}
      <div className="flex items-center gap-2 border-b border-[#2A3044] px-4 py-3">
        <div className="flex items-center gap-1.5">
          <div className="h-2.5 w-2.5 rounded-full bg-[#3B3F4A]" />
          <div className="h-2.5 w-2.5 rounded-full bg-[#3B3F4A]" />
          <div className="h-2.5 w-2.5 rounded-full bg-[#3B3F4A]" />
          <div className="h-5 w-5 rounded bg-[#2A3044] flex items-center justify-center ml-2">
            <span className="text-[8px] text-gray-400">+</span>
          </div>
        </div>
        <div className="flex items-center gap-1 ml-auto">
          <div className="h-4 w-4 rounded bg-[#2A3044]" />
        </div>
      </div>

      {/* Content */}
      <div className="p-4 space-y-3">
        {/* Shopify order section */}
        <div className="rounded-lg border border-[#2A3044] bg-[#161B22] p-3">
          <div className="flex items-center gap-2 mb-2">
            <ShopifyIcon />
            <span className="text-[10px] text-gray-300 font-medium">ORDER_LOOKUP_SHOPIFY</span>
          </div>
          <p className="text-[9px] text-gray-500 mb-3">USE THIS WHEN CHECKING THE FULFILLMENT S...</p>

          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full border border-green-500 flex items-center justify-center">
                <div className="w-1.5 h-1.5 rounded-full bg-green-500" />
              </div>
              <span className="text-[9px] text-gray-400">TASK INSTRUCTIONS STARTED BY FIN</span>
            </div>

            <div className="pl-5 space-y-2">
              <div className="flex items-start gap-2">
                <span className="text-[9px] text-gray-600">1</span>
                <div className="flex-1">
                  <div className="flex items-center gap-1">
                    <span className="text-[9px] text-green-400 bg-green-400/10 px-1 rounded">ACTION</span>
                    <span className="text-[9px] text-gray-400">USE ORDERS TO CHECK THE FULFILLMENT</span>
                  </div>
                  <span className="text-[9px] text-gray-500">STATUS OF THE ORDER</span>
                </div>
              </div>

              <div className="flex items-start gap-2">
                <span className="text-[9px] text-gray-600">2</span>
                <span className="text-[9px] text-gray-400">IF THE DELIVERY CONFIRMATION IS NOT AVAILABLE</span>
              </div>

              <div className="flex items-start gap-2">
                <span className="text-[9px] text-gray-600">3</span>
                <div className="flex items-center gap-1">
                  <span className="text-[9px] text-gray-400">OTHERWISE,</span>
                  <span className="text-[9px] text-blue-400 bg-blue-400/10 px-1 rounded">UPDATE</span>
                  <span className="text-[9px] text-gray-400">REPLACE ORDER STATUS TO FULFILLED</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* User Information */}
        <div className="rounded-lg border border-[#2A3044] bg-[#161B22] p-3">
          <div className="flex items-center gap-2 mb-3">
            <div className="h-6 w-6 rounded-full bg-gradient-to-br from-blue-400 to-purple-500" />
            <span className="text-[10px] text-gray-300">USER INFORMATION</span>
            <ChevronDown className="w-3 h-3 text-gray-500 ml-auto" />
          </div>

          <div className="space-y-2 text-[9px]">
            <div className="flex justify-between">
              <span className="text-gray-500">NAME</span>
              <span className="text-gray-300">JAMIE BURNHAM</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-500">MEMBERSHIP STATUS</span>
              <span className="text-gray-300">ACTIVE</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-500">ADDRESS</span>
              <span className="text-gray-300">NEW YORK, USA</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-500">LANGUAGE</span>
              <span className="text-gray-300">ENGLISH</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-500">CARD NO.</span>
              <span className="text-gray-300">XXXX-XXXX-XXXX-0102</span>
            </div>
          </div>
        </div>

        {/* Refund Processing section */}
        <div className="rounded-lg border border-[#2A3044] bg-[#161B22] p-3">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-5 h-5 rounded bg-orange-500/20 flex items-center justify-center">
              <span className="text-[10px] text-orange-400">5</span>
            </div>
            <span className="text-[10px] text-gray-300">REFUND_PROCESSING_STRIPE</span>
          </div>
          <p className="text-[9px] text-gray-500 mb-2">USE THIS TO TRIGGER A FULL OR PARTIAL RE...</p>

          <div className="space-y-1.5 pl-2">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full border border-gray-500" />
              <span className="text-[9px] text-gray-500">TASK INSTRUCTIONS STARTED BY FIN</span>
            </div>
            <div className="pl-4 space-y-1">
              <div className="flex items-center gap-1">
                <span className="text-[9px] text-gray-600">1</span>
                <span className="text-[9px] text-green-400 bg-green-400/10 px-1 rounded">ACTION</span>
                <span className="text-[9px] text-gray-400">VERIFY</span>
                <span className="text-[9px] text-gray-400">THE CONFIRM REFUND</span>
              </div>
              <div className="flex items-center gap-1">
                <span className="text-[9px] text-gray-600">2</span>
                <span className="text-[9px] text-yellow-400 bg-yellow-400/10 px-1 rounded">WAIT UNTIL REFUND</span>
                <span className="text-[9px] text-gray-400">TO ISSUE REFUND TO</span>
              </div>
              <div className="pl-3">
                <span className="text-[9px] text-gray-400">CUSTOMER</span>
              </div>
            </div>
          </div>
        </div>

        {/* Mini chart at bottom */}
        <div className="flex items-end justify-between h-12 px-2">
          <div className="flex items-end gap-1">
            {[20, 35, 25, 45, 30, 50, 35].map((h, i) => (
              <div
                key={i}
                className="w-2 bg-gradient-to-t from-blue-600/50 to-blue-400/30 rounded-t"
                style={{ height: `${h}%` }}
              />
            ))}
          </div>
          <div className="text-[8px] text-gray-500">MAR 2 ... APR 7 ... APR</div>
        </div>
      </div>
    </motion.div>
  );
}

// Chat Card - Center
function ChatCard({ messages, agentName }: { messages: ChatMessage[]; agentName: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ delay: 0.3, duration: 0.8 }}
      className="relative w-[280px] rounded-xl border border-[#2A3044] bg-[#0D1117]/95 backdrop-blur-sm shadow-2xl overflow-hidden z-10"
    >
      {/* Header */}
      <div className="flex items-center justify-between border-b border-[#2A3044] px-4 py-3 bg-[#161B22]">
        <div className="flex items-center gap-2">
          <Minimize2 className="w-4 h-4 text-gray-400" />
          <SparkleIcon className="text-gray-300" />
          <span className="text-sm text-white font-medium">Fin</span>
        </div>
        <div className="flex items-center gap-2">
          <MoreHorizontal className="w-4 h-4 text-gray-400" />
          <Minimize2 className="w-4 h-4 text-gray-400" />
        </div>
      </div>

      {/* Messages */}
      <div className="p-4 space-y-4 max-h-[360px]">
        {messages.map((msg, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 + index * 0.15, duration: 0.4 }}
            className={msg.sender === "user" ? "flex justify-end" : ""}
          >
            {msg.sender === "ai" ? (
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <SparkleIcon className="text-gray-400 w-3 h-3" />
                  <span className="text-[11px] text-gray-400 font-medium">{msg.name || agentName}</span>
                </div>
                <div className="rounded-lg bg-[#1E2430] px-3 py-2.5">
                  <p className="text-[12px] text-gray-200 leading-relaxed">{msg.message}</p>
                </div>
              </div>
            ) : (
              <div className="rounded-lg bg-[#F97316] px-3 py-2.5 max-w-[85%]">
                <p className="text-[12px] text-white leading-relaxed">{msg.message}</p>
              </div>
            )}
          </motion.div>
        ))}
      </div>

      {/* Input */}
      <div className="border-t border-[#2A3044] p-3 bg-[#161B22]">
        <div className="flex items-center gap-2 rounded-full bg-[#0D1117] border border-[#2A3044] px-3 py-2">
          <span className="text-[12px] text-gray-400 flex-1">Yes, that&apos;s cor</span>
          <Paperclip className="w-4 h-4 text-gray-500" />
          <div className="w-6 h-6 rounded-full bg-[#F97316] flex items-center justify-center">
            <ArrowUp className="w-3.5 h-3.5 text-white" />
          </div>
        </div>
      </div>
    </motion.div>
  );
}

// Analytics Card - Right side
function AnalyticsCard() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 50, rotateY: -15 }}
      animate={{ opacity: 1, x: 0, rotateY: -8 }}
      transition={{ delay: 0.5, duration: 0.8 }}
      className="absolute right-0 top-[40px] w-[300px] rounded-xl border border-[#2A3044] bg-[#0D1117]/95 backdrop-blur-sm shadow-2xl overflow-hidden"
      style={{ transform: "perspective(1000px) rotateY(-8deg)" }}
    >
      {/* Search Header */}
      <div className="flex items-center gap-2 border-b border-[#2A3044] px-4 py-3">
        <Search className="w-4 h-4 text-gray-500" />
        <span className="text-[10px] text-gray-500">SEARCH</span>
      </div>

      {/* Content */}
      <div className="p-4 space-y-4">
        {/* Header with title */}
        <div className="text-[9px] text-gray-400">
          FIN AI AGENT PERFORMANCE OVER TIME
        </div>

        {/* Stats row */}
        <div className="flex gap-6">
          <div>
            <div className="text-[8px] text-gray-500 mb-1">AVERAGE REPLIES</div>
            <div className="h-3 w-12 bg-[#2A3044] rounded" />
          </div>
          <div>
            <div className="text-[8px] text-gray-500 mb-1">CUSTOMER INTERACTIONS</div>
            <div className="h-3 w-16 bg-[#2A3044] rounded" />
          </div>
        </div>

        {/* Chart placeholder */}
        <div className="h-20 flex items-end gap-0.5 border-b border-[#2A3044] pb-2">
          {[40, 55, 35, 60, 45, 70, 50, 65, 75, 55, 80, 60].map((h, i) => (
            <div
              key={i}
              className="flex-1 bg-gradient-to-t from-blue-600/40 to-transparent rounded-t"
              style={{ height: `${h}%` }}
            />
          ))}
        </div>
        <div className="flex justify-between text-[8px] text-gray-600">
          <span>APRIL 14</span>
          <span>JUNE 30</span>
          <span>MAY 14</span>
          <span>JUN 04</span>
        </div>

        {/* Metrics section */}
        <div className="space-y-3 pt-2">
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded bg-[#2A3044]" />
            <span className="text-[9px] text-gray-400">SHOPIFY STOREDATAAPI</span>
          </div>

          <div className="grid grid-cols-2 gap-4 text-[8px]">
            <div>
              <span className="text-gray-500">ORDER NUMBER:</span>
              <span className="text-gray-300 ml-1">#4821</span>
            </div>
            <div>
              <span className="text-gray-500">ORDER STATUS:</span>
              <span className="text-gray-300 ml-1">MARKED AS DELIVERED ON</span>
            </div>
          </div>

          <div className="space-y-2">
            <div className="text-[8px] text-gray-500">ARRIVED DESTINATION:</div>

            <div className="space-y-1.5">
              <div className="flex justify-between text-[8px]">
                <span className="text-gray-500">SAVED</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-[8px] text-gray-500">TONE OF VOICE</span>
                <div className="flex items-center gap-1">
                  <div className="w-2 h-2 rounded-full bg-green-500" />
                  <span className="text-[8px] text-green-400">FRIENDLY</span>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-[8px] text-gray-500">ANSWER LENGTH</span>
                <div className="flex items-center gap-1">
                  <div className="w-2 h-2 rounded-full bg-gray-400" />
                  <span className="text-[8px] text-gray-400">STANDARD</span>
                </div>
              </div>
            </div>
          </div>

          {/* Communication style */}
          <div className="pt-2 border-t border-[#2A3044]">
            <div className="text-[8px] text-gray-500 mb-2">COMMUNICATION STYLE</div>
            <div className="space-y-1.5 text-[8px]">
              <div className="flex justify-between">
                <span className="text-gray-500">CONFIRM ORDER PURCHASE DATE:</span>
                <span className="text-blue-400">ENABLED</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">CLARIFY CUSTOMER ORDER NUMBER:</span>
                <span className="text-blue-400">ENABLED</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">PROVIDE USER ENHANCED UI RESPONSE...</span>
                <span className="text-blue-400">ENABLED</span>
              </div>
            </div>
          </div>
        </div>

        {/* Pie Chart placeholder */}
        <div className="flex items-center justify-end pt-2">
          <div className="relative w-16 h-16">
            <svg viewBox="0 0 36 36" className="w-full h-full">
              <path
                d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                fill="none"
                stroke="#2A3044"
                strokeWidth="3"
              />
              <path
                d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                fill="none"
                stroke="#3B82F6"
                strokeWidth="3"
                strokeDasharray="65, 100"
                strokeLinecap="round"
              />
              <path
                d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                fill="none"
                stroke="#22D3EE"
                strokeWidth="3"
                strokeDasharray="25, 100"
                strokeDashoffset="-65"
                strokeLinecap="round"
              />
            </svg>
          </div>
          <div className="ml-2 text-[8px] text-gray-400">
            <div>FIN CUSTOMER EXPERIENCE</div>
            <div className="flex items-center gap-1 mt-1">
              <div className="w-2 h-2 rounded bg-blue-500" />
              <span>64.9%</span>
              <span className="text-green-400 text-[7px]">+ 1.8%</span>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

// Grid Pattern Decoration
function GridPattern() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 0.6 }}
      transition={{ delay: 0.8, duration: 1 }}
      className="absolute top-20 right-20 w-40 h-32 pointer-events-none"
    >
      <svg width="100%" height="100%" viewBox="0 0 160 128">
        <defs>
          <pattern id="grid" width="16" height="16" patternUnits="userSpaceOnUse">
            <rect width="1" height="1" fill="#F97316" opacity="0.8" />
          </pattern>
        </defs>
        <rect width="160" height="128" fill="url(#grid)" />
      </svg>
    </motion.div>
  );
}

// Default chat messages
const defaultMessages: ChatMessage[] = [
  {
    sender: "ai",
    name: "Fin - AI Agent",
    message: "Hi Jamie, how can I help?",
  },
  {
    sender: "user",
    message: "My package was marked as delivered two days ago, but I never received it.",
  },
  {
    sender: "ai",
    name: "Fin - AI Agent",
    message: "I'm sorry to hear that, Jamie. Can you confirm this is for your order #4821 which you purchased on July 12th?",
  },
];

// Main Component
export default function FinAiEcommerceHero({
  mode = "light",
  headline = "The best-performing AI Agent for\necommerce support",
  subheadline = "Fin is the best-performing AI Agent for ecommerce—resolving customer issues, protecting your brand, and driving conversions. With deep integrations and on-brand automation, Fin helps you build lasting customer loyalty and scale your support without adding headcount.",
  primaryCtaText = "Start free trial",
  secondaryCtaText = "View demo",
  onPrimaryClick,
  onSecondaryClick,
  chatMessages = defaultMessages,
  aiAgentName = "Fin - AI Agent",
}: FinAiEcommerceHeroProps) {
  return (
    <section className="relative min-h-screen w-full bg-[#0B0E14] overflow-hidden">
      {/* Grid Pattern */}
      <GridPattern />

      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0B0E14] via-[#0D1117] to-[#0B0E14] opacity-80" />
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-radial from-orange-500/5 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-16 lg:px-8 lg:py-20">
        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="font-instrument-serif text-4xl md:text-5xl lg:text-6xl text-white leading-[1.1] tracking-tight max-w-3xl"
        >
          {headline.split("\n").map((line, i) => (
            <span key={i}>
              {line}
              {i < headline.split("\n").length - 1 && <br />}
            </span>
          ))}
        </motion.h1>

        {/* Content Grid */}
        <div className="mt-12 lg:mt-16 grid lg:grid-cols-2 gap-12">
          {/* Left Column - Text and CTAs */}
          <div className="space-y-8">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-gray-400 text-sm md:text-base leading-relaxed max-w-lg"
            >
              {subheadline}
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="flex items-center gap-4"
            >
              <button
                onClick={onPrimaryClick}
                className="px-6 py-3 bg-white text-[#0B0E14] text-sm font-medium rounded-full hover:bg-gray-100 transition-colors"
              >
                {primaryCtaText}
              </button>
              <button
                onClick={onSecondaryClick}
                className="px-6 py-3 border border-gray-600 text-white text-sm font-medium rounded-full hover:bg-white/5 transition-colors"
              >
                {secondaryCtaText}
              </button>
            </motion.div>
          </div>

          {/* Right Column - Dashboard Cards */}
          <div className="relative h-[600px] lg:h-[550px]">
            {/* Left workflow card */}
            <WorkflowCard />

            {/* Center chat card */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
              <ChatCard messages={chatMessages} agentName={aiAgentName} />
            </div>

            {/* Right analytics card */}
            <AnalyticsCard />
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#0B0E14] to-transparent pointer-events-none" />
    </section>
  );
}
