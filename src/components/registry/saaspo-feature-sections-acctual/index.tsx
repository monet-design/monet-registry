"use client";

import { motion } from "motion/react";
import { Globe, Sparkles, Bell, AlertTriangle } from "lucide-react";
import "./font.css";

// ============================================================================
// CUSTOMIZATION
// ============================================================================

const COLORS = {
  light: {
    background: "#F5F5F5",
    cardBg: "#FFFFFF",
    title: "#1A1A1A",
    subtitle: "#6B7280",
    buttonBg: "#1A1A1A",
    buttonText: "#FFFFFF",
    accent: "#3B82F6",
    teal: "#14B8A6",
    warning: "#F59E0B",
  },
  dark: {
    background: "#0F172A",
    cardBg: "#1E293B",
    title: "#F8FAFC",
    subtitle: "#94A3B8",
    buttonBg: "#F8FAFC",
    buttonText: "#0F172A",
    accent: "#60A5FA",
    teal: "#2DD4BF",
    warning: "#FBBF24",
  },
} as const;

const CONTENT = {
  title: "What makes for the world's\nmost flexible invoice?",
  subtitle: "We're so glad you asked.",
  cta: "Get started",
  features: [
    {
      icon: "globe",
      title: "Pay & get paid, however you want",
      type: "currency" as const,
    },
    {
      icon: "sparkles",
      title: "Design you're proud of",
      type: "invoice" as const,
    },
    {
      icon: "sparkles",
      title: "Gentle reminders",
      type: "reminder" as const,
    },
    {
      icon: "bell",
      title: "Celebratory payment pings!",
      type: "notification" as const,
    },
  ],
};

// ============================================================================
// SUB-COMPONENTS
// ============================================================================

// Paper airplane SVG icon for header illustration
function PaperAirplaneIllustration() {
  return (
    <svg
      width="120"
      height="80"
      viewBox="0 0 120 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="mx-auto mb-4"
    >
      {/* Gift box */}
      <rect x="10" y="45" width="35" height="30" rx="3" fill="#C4A484" />
      <rect x="10" y="45" width="35" height="8" rx="2" fill="#A0826D" />
      <rect x="24" y="45" width="8" height="30" fill="#8B4513" opacity="0.3" />
      {/* Ribbon bow */}
      <ellipse cx="28" cy="42" rx="8" ry="5" fill="#D2691E" />
      <ellipse cx="22" cy="40" rx="5" ry="3" fill="#CD853F" />
      <ellipse cx="34" cy="40" rx="5" ry="3" fill="#CD853F" />
      {/* Paper airplanes */}
      <g transform="translate(50, 30) rotate(-15)">
        <path d="M0 8 L20 0 L15 8 L20 16 Z" fill="#E5E7EB" stroke="#D1D5DB" strokeWidth="0.5" />
        <path d="M0 8 L15 8 L20 0 Z" fill="#F3F4F6" />
      </g>
      <g transform="translate(70, 18) rotate(-25)">
        <path d="M0 6 L15 0 L11 6 L15 12 Z" fill="#DBEAFE" stroke="#BFDBFE" strokeWidth="0.5" />
        <path d="M0 6 L11 6 L15 0 Z" fill="#EFF6FF" />
      </g>
      <g transform="translate(88, 10) rotate(-35)">
        <path d="M0 5 L12 0 L9 5 L12 10 Z" fill="#E5E7EB" stroke="#D1D5DB" strokeWidth="0.5" />
        <path d="M0 5 L9 5 L12 0 Z" fill="#F9FAFB" />
      </g>
      {/* Decorative orbs */}
      <circle cx="65" cy="45" r="4" fill="#3B82F6" opacity="0.8" />
      <circle cx="95" cy="25" r="3" fill="#F97316" opacity="0.8" />
      <circle cx="105" cy="40" r="2.5" fill="#EC4899" opacity="0.8" />
    </svg>
  );
}

// Currency selector card content
function CurrencyCardContent({ mode }: { mode: "light" | "dark" }) {
  const colors = COLORS[mode];
  return (
    <div className="mt-4 space-y-3">
      {/* AED option */}
      <div className="flex items-center gap-3 px-3 py-2 rounded-lg opacity-50">
        <div className="w-6 h-6 rounded-full bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center">
          <span className="text-white text-xs font-bold">C</span>
        </div>
        <span className="text-sm" style={{ color: colors.subtitle }}>AED</span>
      </div>
      {/* INR option */}
      <div className="flex items-center gap-3 px-3 py-2 rounded-lg opacity-50">
        <div className="w-6 h-6 rounded-full bg-gradient-to-br from-orange-400 via-white to-green-500 flex items-center justify-center">
          <span className="text-gray-700 text-xs font-bold">$</span>
        </div>
        <span className="text-sm" style={{ color: colors.subtitle }}>INR</span>
      </div>
      {/* USD option - selected */}
      <div
        className="flex items-center gap-3 px-3 py-2.5 rounded-lg border"
        style={{
          borderColor: mode === "light" ? "#E5E7EB" : "#374151",
          backgroundColor: mode === "light" ? "#FAFAFA" : "#1E293B"
        }}
      >
        <div className="w-6 h-6 rounded-full overflow-hidden">
          <div className="w-full h-full bg-gradient-to-b from-red-600 via-white to-red-600 relative">
            <div className="absolute inset-0 bg-blue-800 w-1/3 h-1/2" />
          </div>
        </div>
        <span className="text-sm font-medium" style={{ color: colors.title }}>USD</span>
      </div>
      {/* Amount */}
      <div
        className="mt-4 px-3 py-3 rounded-lg border"
        style={{
          borderColor: mode === "light" ? "#E5E7EB" : "#374151",
          backgroundColor: mode === "light" ? "#FAFAFA" : "#1E293B"
        }}
      >
        <span className="text-lg font-medium" style={{ color: colors.title }}>$ 3,000.00</span>
      </div>
    </div>
  );
}

// Invoice preview card content
function InvoiceCardContent({ mode }: { mode: "light" | "dark" }) {
  const colors = COLORS[mode];
  return (
    <div
      className="mt-4 p-3 rounded-lg border text-xs"
      style={{
        borderColor: mode === "light" ? "#E5E7EB" : "#374151",
        backgroundColor: mode === "light" ? "#FAFAFA" : "#1E293B"
      }}
    >
      {/* Header row */}
      <div className="flex justify-between mb-3 text-[10px]" style={{ color: colors.subtitle }}>
        <div>
          <div className="mb-1">INVOICE NO</div>
          <div className="font-semibold" style={{ color: colors.title }}>000001</div>
        </div>
        <div className="text-center">
          <div className="mb-1">ISSUED</div>
          <div style={{ color: colors.title }}>01/01/24</div>
        </div>
        <div className="text-right">
          <div className="mb-1">DUE DATE</div>
          <div style={{ color: colors.title }}>01/15/24</div>
        </div>
      </div>
      {/* From / To */}
      <div className="flex gap-4 mb-3">
        <div className="flex-1">
          <div className="text-[10px] mb-1" style={{ color: colors.subtitle }}>FROM</div>
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-full" style={{ backgroundColor: colors.accent }} />
            <div>
              <div className="font-medium text-[11px]" style={{ color: colors.title }}>Marble AI</div>
              <div className="text-[9px]" style={{ color: colors.subtitle }}>billing@marble.ai</div>
            </div>
          </div>
        </div>
        <div className="flex-1">
          <div className="text-[10px] mb-1" style={{ color: colors.subtitle }}>TO</div>
          <div className="space-y-0.5">
            <div className="h-2 rounded w-3/4" style={{ backgroundColor: mode === "light" ? "#E5E7EB" : "#374151" }} />
            <div className="h-2 rounded w-1/2" style={{ backgroundColor: mode === "light" ? "#E5E7EB" : "#374151" }} />
          </div>
        </div>
      </div>
      {/* Table header */}
      <div
        className="flex justify-between text-[9px] py-1 border-b mb-2"
        style={{
          color: colors.subtitle,
          borderColor: mode === "light" ? "#E5E7EB" : "#374151"
        }}
      >
        <span>DESCRIPTION</span>
        <span>QTY</span>
        <span>PRICE</span>
        <span>AMOUNT</span>
      </div>
      {/* Placeholder rows */}
      <div className="space-y-1 mb-2">
        <div className="h-2 rounded w-full" style={{ backgroundColor: mode === "light" ? "#E5E7EB" : "#374151" }} />
        <div className="h-2 rounded w-4/5" style={{ backgroundColor: mode === "light" ? "#E5E7EB" : "#374151" }} />
      </div>
      {/* Total */}
      <div className="flex justify-between text-[10px] pt-2 border-t" style={{ borderColor: mode === "light" ? "#E5E7EB" : "#374151" }}>
        <span style={{ color: colors.subtitle }}>TOTAL</span>
        <span className="font-semibold" style={{ color: colors.title }}>$0.00</span>
      </div>
    </div>
  );
}

// Reminder card content
function ReminderCardContent({ mode }: { mode: "light" | "dark" }) {
  const colors = COLORS[mode];
  return (
    <div className="mt-4 space-y-4">
      {/* Invoice ID with warning */}
      <div className="flex items-center gap-2">
        <span className="font-medium" style={{ color: colors.title }}>INV-093</span>
        <div className="flex items-center gap-1 px-2 py-0.5 rounded text-xs" style={{ backgroundColor: `${colors.warning}20`, color: colors.warning }}>
          <AlertTriangle size={12} />
          <span>Overdue 5 days</span>
        </div>
      </div>
      {/* Send reminder button */}
      <button
        className="flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium"
        style={{
          backgroundColor: colors.buttonBg,
          color: colors.buttonText
        }}
      >
        <Bell size={16} />
        Send gentle reminder
      </button>
      {/* Status */}
      <div className="space-y-1">
        <div className="text-xs" style={{ color: colors.subtitle }}>Status</div>
        <div
          className="px-3 py-2 rounded-lg border text-sm"
          style={{
            borderColor: mode === "light" ? "#E5E7EB" : "#374151",
            color: colors.title
          }}
        >
          Unpaid
        </div>
      </div>
    </div>
  );
}

// Notification card content
function NotificationCardContent({ mode }: { mode: "light" | "dark" }) {
  const colors = COLORS[mode];
  return (
    <div className="mt-4 relative">
      {/* Background decoration */}
      <div
        className="absolute -right-4 -top-2 w-16 h-16 rounded-xl rotate-12 opacity-20"
        style={{ backgroundColor: colors.teal }}
      />
      <div
        className="absolute -right-2 top-4 w-12 h-12 rounded-lg rotate-6"
        style={{ backgroundColor: colors.teal }}
      >
        <span className="absolute inset-0 flex items-center justify-center text-white font-bold text-lg">T</span>
      </div>
      {/* Notification card */}
      <div
        className="relative p-3 rounded-lg border shadow-sm"
        style={{
          borderColor: mode === "light" ? "#E5E7EB" : "#374151",
          backgroundColor: colors.cardBg
        }}
      >
        <div className="flex items-start gap-2">
          <span className="text-base">🎉</span>
          <div className="flex-1 min-w-0">
            <p className="text-xs leading-relaxed truncate" style={{ color: colors.title }}>
              You received $25,000.00 from Charm AI—Invoice #DL-0
            </p>
            <div className="flex items-center gap-2 mt-2">
              <div
                className="w-5 h-5 rounded-full flex items-center justify-center text-[8px] font-bold"
                style={{ backgroundColor: "#10B981", color: "white" }}
              >
                A
              </div>
              <div className="text-[10px]">
                <span className="font-medium" style={{ color: colors.title }}>Acctual</span>
                <span style={{ color: colors.subtitle }}> notifications@acctual.com</span>
              </div>
            </div>
            <div className="text-[9px] mt-1" style={{ color: colors.subtitle }}>to me ▾</div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Feature card component
function FeatureCard({
  feature,
  mode,
  index
}: {
  feature: typeof CONTENT.features[0];
  mode: "light" | "dark";
  index: number;
}) {
  const colors = COLORS[mode];

  const getIcon = () => {
    switch (feature.icon) {
      case "globe":
        return (
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-400 to-teal-400 flex items-center justify-center">
            <Globe size={16} className="text-white" />
          </div>
        );
      case "sparkles":
        return (
          <div className="w-8 h-8 flex items-center justify-center">
            <Sparkles size={18} style={{ color: colors.accent }} />
          </div>
        );
      case "bell":
        return (
          <div className="w-2 h-2 rounded-full" style={{ backgroundColor: colors.accent }} />
        );
      default:
        return null;
    }
  };

  const getCardContent = () => {
    switch (feature.type) {
      case "currency":
        return <CurrencyCardContent mode={mode} />;
      case "invoice":
        return <InvoiceCardContent mode={mode} />;
      case "reminder":
        return <ReminderCardContent mode={mode} />;
      case "notification":
        return <NotificationCardContent mode={mode} />;
      default:
        return null;
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="rounded-2xl p-6 shadow-sm border h-full"
      style={{
        backgroundColor: colors.cardBg,
        borderColor: mode === "light" ? "#E5E7EB" : "#374151"
      }}
    >
      <div className="flex items-center gap-3 mb-2">
        {getIcon()}
        <h3 className="font-semibold text-base" style={{ color: colors.title }}>
          {feature.title}
        </h3>
      </div>
      {getCardContent()}
    </motion.div>
  );
}

// ============================================================================
// MAIN COMPONENT
// ============================================================================

interface SaaspoFeatureSectionsAcctualProps {
  mode?: "light" | "dark";
  title?: string;
  subtitle?: string;
  ctaText?: string;
  onCtaClick?: () => void;
}

export default function SaaspoFeatureSectionsAcctual({
  mode = "light",
  title = CONTENT.title,
  subtitle = CONTENT.subtitle,
  ctaText = CONTENT.cta,
  onCtaClick,
}: SaaspoFeatureSectionsAcctualProps) {
  const colors = COLORS[mode];

  return (
    <section
      className="relative w-full py-20 px-4 overflow-hidden"
      style={{ backgroundColor: colors.background }}
    >
      {/* Decorative elements at bottom corners */}
      <div className="absolute bottom-0 left-0 opacity-30">
        <svg width="200" height="200" viewBox="0 0 200 200" fill="none">
          <circle cx="60" cy="160" r="50" fill="#8B5CF6" opacity="0.3" />
          <circle cx="100" cy="140" r="40" fill="#3B82F6" opacity="0.4" />
          <circle cx="40" cy="120" r="30" fill="#06B6D4" opacity="0.3" />
        </svg>
      </div>
      <div className="absolute bottom-0 right-0 opacity-30">
        <svg width="200" height="200" viewBox="0 0 200 200" fill="none">
          <rect x="120" y="100" width="60" height="80" rx="8" fill="#F3F4F6" opacity="0.5" />
          <circle cx="160" cy="80" r="25" fill="#3B82F6" opacity="0.3" />
          <circle cx="180" cy="120" r="20" fill="#FBBF24" opacity="0.4" />
        </svg>
      </div>

      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <PaperAirplaneIllustration />
          <h2
            className="text-4xl md:text-5xl font-bold mb-4 whitespace-pre-line"
            style={{
              color: colors.title,
              fontFamily: "'DM Serif Display', serif"
            }}
          >
            {title}
          </h2>
          <p className="text-lg" style={{ color: colors.subtitle }}>
            {subtitle}
          </p>
        </motion.div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {CONTENT.features.map((feature, index) => (
            <FeatureCard
              key={feature.title}
              feature={feature}
              mode={mode}
              index={index}
            />
          ))}
        </div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center"
        >
          <button
            onClick={onCtaClick}
            className="px-8 py-3 rounded-full text-base font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg"
            style={{
              backgroundColor: colors.buttonBg,
              color: colors.buttonText
            }}
          >
            {ctaText}
          </button>
        </motion.div>
      </div>
    </section>
  );
}
