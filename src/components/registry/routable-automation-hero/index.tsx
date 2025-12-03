"use client";

// ============================================================================
// CUSTOMIZATION - 이 섹션의 값들을 수정하여 프로젝트에 맞게 조정하세요
// ============================================================================

const COLORS = {
  light: {
    background: "#0B1D2A",      // Dark blue background
    backgroundGradient: "#162B3D", // Mid gradient
    backgroundLight: "#1E3448", // Lighter gradient
    accent: "#6F6EE5",          // Purple accent
  },
  dark: {
    background: "#0a1824",
    backgroundGradient: "#142535",
    backgroundLight: "#1c2e42",
    accent: "#7F7EF5",
  },
} as const;

const IMAGES = {} as const;

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { motion } from "motion/react";
import { Check, ChevronDown } from "lucide-react";

// Types
interface NavItem {
  label: string;
  href?: string;
}

interface SubNavItem {
  label: string;
  href?: string;
  active?: boolean;
}

interface InvoiceItem {
  name: string;
  qty: number;
  rate: string;
  amount: string;
}

interface PartnerLogo {
  name: string;
  logo: React.ReactNode;
}

interface RoutableAutomationHeroProps {
  mode?: "light" | "dark";
  logoText?: string;
  navItems?: NavItem[];
  subNavLabel?: string;
  subNavItems?: SubNavItem[];
  headlineNormal?: string;
  headlineItalic?: string;
  description?: string;
  ctaText?: string;
  loginText?: string;
  onCtaClick?: () => void;
  onLoginClick?: () => void;
  partnerLogos?: PartnerLogo[];
}

// Logo Component
function RoutableLogo({ className = "" }: { className?: string }) {
  return (
    <span className={`font-semibold text-white text-lg ${className}`}>
      Routable
    </span>
  );
}

// Invoice Preview Component
function InvoicePreview() {
  const items: InvoiceItem[] = [
    { name: "Services April - May", qty: 25, rate: "$22.50", amount: "$562.50" },
    { name: "Services May - June", qty: 42, rate: "$35.75", amount: "$1,501.50" },
    { name: "Services June - July", qty: 18, rate: "$18.25", amount: "$328.75" },
  ];

  return (
    <div className="bg-white rounded-xl shadow-2xl overflow-hidden w-full max-w-[420px]">
      {/* Invoice Header */}
      <div className="p-5 border-b border-gray-100">
        <div className="flex items-center gap-2">
          <span className="text-sm font-medium text-gray-800">Invoice #506578</span>
          <span className="text-xs text-[#6F6EE5] font-medium">1 of 3</span>
          <ChevronDown className="w-3 h-3 text-gray-400" />
        </div>
      </div>

      {/* Invoice Content */}
      <div className="p-5">
        {/* Company Info */}
        <div className="mb-4">
          <h3 className="text-base font-semibold text-gray-900 mb-1">Acme Innovation Inc</h3>
          <p className="text-[10px] text-gray-400 leading-relaxed">
            #506538<br />
            8502 Preston Rd.<br />
            Inglewood, CA 12345<br />
            858-637-2287
          </p>
        </div>

        {/* Bill To */}
        <div className="mb-4">
          <p className="text-[10px] text-gray-500 mb-0.5">
            <span className="font-medium">Bill to:</span> Genesis Electronix
          </p>
          <p className="text-[10px] text-gray-400 leading-relaxed">
            4140 Parker Rd.<br />
            Allentown, New Mexico 31134<br />
            866-667-321
          </p>
        </div>

        {/* Items Table */}
        <div className="mb-4">
          <div className="grid grid-cols-4 gap-2 text-[9px] font-medium text-gray-500 mb-2 pb-1 border-b border-gray-100">
            <span className="bg-[#6F6EE5]/10 text-[#6F6EE5] px-1.5 py-0.5 rounded">Item</span>
            <span className="text-center">Qty</span>
            <span className="text-center">Rate</span>
            <span className="text-right">Amount</span>
          </div>
          {items.map((item, index) => (
            <div key={index} className="grid grid-cols-4 gap-2 text-[9px] text-gray-600 py-1.5 border-b border-gray-50">
              <span className="truncate">{item.name}</span>
              <span className="text-center">{item.qty}</span>
              <span className="text-center">{item.rate}</span>
              <span className="text-right font-medium">{item.amount}</span>
            </div>
          ))}
        </div>

        {/* Totals */}
        <div className="space-y-1 text-right text-[10px]">
          <div className="flex justify-end gap-4">
            <span className="text-gray-400">Subtotal:</span>
            <span className="font-medium text-gray-700 w-16">$2,392.75</span>
          </div>
          <div className="flex justify-end gap-4">
            <span className="text-gray-400">Tax(7.25%):</span>
            <span className="font-medium text-gray-700 w-16">$172.44</span>
          </div>
          <div className="flex justify-end gap-4 pt-1 border-t border-gray-100">
            <span className="text-gray-500 font-medium">Total:</span>
            <span className="font-semibold text-gray-900 w-16">$2,392.75</span>
          </div>
        </div>

        {/* Notes */}
        <div className="mt-4 pt-3 border-t border-gray-100">
          <p className="text-[9px] text-gray-400">
            <span className="font-medium text-gray-500">Notes:</span><br />
            Please remit funds to:<br />
            East Credit Bank<br />
            ABA:48890876<br />
            Account:8897651
          </p>
        </div>

        {/* Footer */}
        <div className="flex items-center gap-2 mt-4 pt-3 border-t border-gray-100 text-[10px]">
          <span className="text-[#6F6EE5] flex items-center gap-1">
            <span className="text-xs">+</span> Expense (1)
          </span>
          <span className="text-gray-400">Items (0)</span>
        </div>
      </div>
    </div>
  );
}

// Bill Details Panel Component
function BillDetailsPanel() {
  const steps = [
    { label: "Bill details", tag: "Scanned", tagColor: "text-[#6F6EE5]", completed: true },
    { label: "Payment details", completed: true },
    { label: "Schedule payment", completed: true },
    { label: "Payable approvals", completed: true },
  ];

  return (
    <div className="bg-white rounded-xl shadow-2xl overflow-hidden w-full max-w-[380px]">
      {/* Header */}
      <div className="px-5 py-3 border-b border-gray-100 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-green-500" />
          <span className="text-xs text-gray-600">NetSuite connected</span>
        </div>
        <div className="flex items-center gap-3 text-xs">
          <button className="text-gray-500 hover:text-gray-700">Delete bill</button>
          <button className="text-gray-500 hover:text-gray-700">Cancel</button>
          <button className="bg-[#6F6EE5] text-white px-3 py-1.5 rounded-md text-[10px] font-medium">
            Create payable for approval
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        {/* Vendor Info */}
        <div className="mb-5">
          <p className="text-[10px] text-gray-400 mb-1">Vendor</p>
          <h3 className="text-base font-semibold text-gray-900">Acme Innovation Inc</h3>
          <p className="text-[10px] text-gray-400 mt-1">W-9 not found or invalid</p>
        </div>

        {/* Steps */}
        <div className="space-y-3">
          {steps.map((step, index) => (
            <div
              key={index}
              className="flex items-center justify-between py-2.5 px-3 rounded-lg border border-gray-100 hover:bg-gray-50 transition-colors cursor-pointer"
            >
              <div className="flex items-center gap-2.5">
                <div className="w-5 h-5 rounded-full bg-[#6F6EE5]/10 flex items-center justify-center">
                  <Check className="w-3 h-3 text-[#6F6EE5]" />
                </div>
                <span className="text-sm text-gray-700">{step.label}</span>
                {step.tag && (
                  <span className={`text-[9px] ${step.tagColor} bg-[#6F6EE5]/10 px-1.5 py-0.5 rounded flex items-center gap-0.5`}>
                    <span className="text-[8px]">+</span> {step.tag}
                  </span>
                )}
              </div>
              <ChevronDown className="w-4 h-4 text-gray-400 -rotate-90" />
            </div>
          ))}
        </div>

        {/* Creating a bill */}
        <div className="mt-5 p-4 bg-gray-50 rounded-lg border border-gray-100">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-4 h-4 rounded-full border-2 border-[#6F6EE5] border-t-transparent animate-spin" />
            <span className="text-sm font-medium text-gray-700">Creating a bill</span>
          </div>
          <div className="flex items-center justify-between">
            <div>
              <p className="text-[10px] text-gray-400">Payment totals</p>
              <p className="text-lg font-semibold text-gray-900">$2,392.75 USD</p>
            </div>
            <div>
              <p className="text-[10px] text-gray-400">Fees</p>
              <p className="text-lg font-semibold text-gray-900">$3 USD</p>
            </div>
            <div className="flex items-center gap-1">
              <p className="text-[10px] text-gray-400 mr-2">Approvers</p>
              <div className="flex -space-x-1.5">
                <div className="w-6 h-6 rounded-full bg-orange-400 border-2 border-white" />
                <div className="w-6 h-6 rounded-full bg-blue-400 border-2 border-white" />
                <div className="w-6 h-6 rounded-full bg-purple-400 border-2 border-white" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="px-5 py-3 border-t border-gray-100 flex items-center justify-between text-[10px] text-gray-500">
        <div className="flex items-center gap-4">
          <span>Subtotal: <span className="font-medium text-gray-700">$2,392.75</span> USD</span>
          <span>Tax: <span className="font-medium text-gray-700">$172.44</span> USD</span>
          <span>Total: <span className="font-semibold text-gray-900">$2,392.75</span> USD</span>
        </div>
        <button className="text-gray-400 hover:text-gray-600">
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" />
          </svg>
        </button>
      </div>
    </div>
  );
}

// Partner Logo Components
function GarmentoryLogo() {
  return <span className="text-white/70 font-semibold text-sm tracking-wide">GARMENTORY</span>;
}

function ReMaxLogo() {
  return <span className="text-white/70 font-bold text-lg">RE/MAX</span>;
}

function MLSPALogo() {
  return (
    <div className="flex items-center gap-1">
      <div className="w-5 h-5 rounded bg-white/70 flex items-center justify-center text-[8px] font-bold text-gray-800">M</div>
      <span className="text-white/70 font-semibold text-sm">MLSPA</span>
    </div>
  );
}

function TicketmasterLogo() {
  return <span className="text-white/70 font-medium text-sm italic">ticketmaster</span>;
}

function KasaLogo() {
  return (
    <div className="bg-white/80 rounded px-2 py-0.5">
      <span className="text-gray-800 font-bold text-sm">kasa</span>
    </div>
  );
}

function StratacommLogo() {
  return <span className="text-white/70 font-semibold text-sm tracking-wider">stratacomm</span>;
}

function VouchLogo() {
  return <span className="text-white/70 font-bold text-lg italic">vouch</span>;
}

// Default partner logos
const defaultPartnerLogos: PartnerLogo[] = [
  { name: "Garmentory", logo: <GarmentoryLogo /> },
  { name: "RE/MAX", logo: <ReMaxLogo /> },
  { name: "MLSPA", logo: <MLSPALogo /> },
  { name: "Ticketmaster", logo: <TicketmasterLogo /> },
  { name: "Kasa", logo: <KasaLogo /> },
  { name: "Stratacomm", logo: <StratacommLogo /> },
  { name: "Vouch", logo: <VouchLogo /> },
];

// Default nav items
const defaultNavItems: NavItem[] = [
  { label: "Product" },
  { label: "Solutions" },
  { label: "Developers" },
  { label: "Customers" },
  { label: "Resources" },
  { label: "Pricing" },
];

// Default sub nav items
const defaultSubNavItems: SubNavItem[] = [
  { label: "Invoice Capture" },
  { label: "Approval Workflows" },
  { label: "Payment Methods" },
  { label: "Integrations" },
  { label: "Payment Reconciliation" },
  { label: "Custom Roles" },
  { label: "Compliance" },
];

// Main Component
export default function RoutableAutomationHero({
  mode = "light",
  logoText = "Routable",
  navItems = defaultNavItems,
  subNavLabel = "AP Automation",
  subNavItems = defaultSubNavItems,
  headlineNormal = "AP Automation that\ndoes more,",
  headlineItalic = "for less",
  description = "At 30% less expensive than the competition, Routable gives you all the best features at a fraction of the cost.",
  ctaText = "Request a demo",
  loginText = "Log in",
  onCtaClick,
  onLoginClick,
  partnerLogos = defaultPartnerLogos,
}: RoutableAutomationHeroProps) {
  const colors = COLORS[mode];
  return (
    <section className="relative w-full min-h-screen overflow-hidden bg-gradient-to-b from-[#0B1D2A] via-[#162B3D] to-[#1E3448]">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#1a3a52]/30 via-transparent to-transparent" />

      {/* Header */}
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative z-20 w-full"
      >
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <RoutableLogo />

            {/* Main Nav */}
            <nav className="hidden lg:flex items-center gap-6">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href || "#"}
                  className="text-sm text-white/80 hover:text-white transition-colors"
                >
                  {item.label}
                </a>
              ))}
            </nav>

            {/* Auth Buttons */}
            <div className="flex items-center gap-4">
              <button
                onClick={onLoginClick}
                className="text-sm text-white/80 hover:text-white transition-colors"
              >
                {loginText}
              </button>
              <button
                onClick={onCtaClick}
                className="bg-white text-gray-900 px-4 py-2 rounded-full text-sm font-medium hover:bg-gray-100 transition-colors"
              >
                {ctaText}
              </button>
            </div>
          </div>
        </div>

        {/* Sub Navigation */}
        <div className="border-t border-white/10 mt-2">
          <div className="max-w-7xl mx-auto px-6 py-3">
            <div className="flex items-center gap-8">
              <span className="text-sm font-medium text-white/60">{subNavLabel}</span>
              <nav className="hidden md:flex items-center gap-6">
                {subNavItems.map((item) => (
                  <a
                    key={item.label}
                    href={item.href || "#"}
                    className={`text-sm transition-colors ${
                      item.active
                        ? "text-white font-medium"
                        : "text-white/60 hover:text-white/80"
                    }`}
                  >
                    {item.label}
                  </a>
                ))}
              </nav>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-12 pb-8">
        {/* Headline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-center mb-6"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-light text-white leading-tight">
            {headlineNormal.split("\n").map((line, i) => (
              <span key={i}>
                {line}
                {i < headlineNormal.split("\n").length - 1 && <br />}
              </span>
            ))}
            {" "}
            <span className="italic font-serif">{headlineItalic}</span>
          </h1>
        </motion.div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center text-white/70 text-base sm:text-lg max-w-2xl mx-auto mb-8"
        >
          {description}
        </motion.p>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="flex justify-center mb-12"
        >
          <button
            onClick={onCtaClick}
            className="bg-white text-gray-900 px-8 py-3 rounded-full text-sm font-medium hover:bg-gray-100 transition-colors shadow-lg"
          >
            {ctaText}
          </button>
        </motion.div>

        {/* Dashboard Preview */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="relative flex flex-col lg:flex-row items-start justify-center gap-4 lg:gap-6 px-4"
        >
          {/* Invoice Preview */}
          <div className="flex-shrink-0 transform lg:-translate-y-4">
            <InvoicePreview />
          </div>

          {/* Bill Details Panel */}
          <div className="flex-shrink-0 transform lg:translate-y-4">
            <BillDetailsPanel />
          </div>
        </motion.div>
      </div>

      {/* Partner Logos */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1 }}
        className="relative z-10 mt-8 py-8 border-t border-white/10"
      >
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center justify-center gap-8 lg:gap-12 flex-wrap">
            {partnerLogos.map((partner) => (
              <div key={partner.name} className="opacity-70 hover:opacity-100 transition-opacity">
                {partner.logo}
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Bottom fade gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#1E3448] to-transparent pointer-events-none" />
    </section>
  );
}
