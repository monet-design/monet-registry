"use client";

import { motion } from "motion/react";
import { ArrowRight, Check, Upload } from "lucide-react";

// CUSTOMIZATION
export const CUSTOMIZATION = {};

// Types
interface NavItem {
  label: string;
  href?: string;
}

interface LogoItem {
  name: string;
  logo: React.ReactNode;
}

interface PayableItem {
  name: string;
  invoice: string;
  amount: string;
  selected: boolean;
}

interface FeatureCard {
  title: string;
  description: string;
  linkText?: string;
  linkHref?: string;
}

interface RoutablePaymentHeroProps {
  mode?: "light" | "dark";
  logoText?: string;
  navItems?: NavItem[];
  headline?: {
    regular: string;
    accent: string;
  };
  subheadline?: string;
  ctaText?: string;
  onCtaClick?: () => void;
  logos?: LogoItem[];
  payables?: PayableItem[];
  featureCards?: FeatureCard[];
}

// Logo SVG components for partner logos
function MongabayLogo() {
  return (
    <div className="flex items-center gap-1.5 text-[#1a2c38]">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2L2 7v10l10 5 10-5V7L12 2zm0 2.5L19 8l-7 3.5L5 8l7-3.5z" />
      </svg>
      <span className="text-sm font-semibold tracking-tight">MONGABAY</span>
    </div>
  );
}

function VehoLogo() {
  return (
    <span className="text-[#1a2c38] text-xl font-bold tracking-tight">
      veh<span className="text-[#1a2c38]">o</span>
    </span>
  );
}

function KasaLogo() {
  return (
    <div className="bg-[#1a2c38] text-white px-2.5 py-1 rounded text-sm font-bold">
      kasa
    </div>
  );
}

function VouchLogo() {
  return (
    <span className="text-[#1a2c38] text-lg font-black tracking-tight uppercase">
      Vouch
    </span>
  );
}

function RefinsightLogo() {
  return (
    <div className="flex items-center gap-1 text-[#1a2c38]">
      <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
        <circle cx="12" cy="12" r="10" />
      </svg>
      <span className="text-xs font-semibold tracking-wide">REFINSIGHT</span>
    </div>
  );
}

function EthosLogo() {
  return (
    <span className="text-[#1a2c38] text-lg font-light tracking-[0.2em]">
      ETH<span className="font-normal">O</span>S
    </span>
  );
}

function SeatedLogo() {
  return (
    <div className="flex items-center gap-1 text-[#1a2c38]">
      <div className="flex gap-0.5">
        <div className="w-1 h-3 bg-[#1a2c38]" />
        <div className="w-1 h-3 bg-[#1a2c38]" />
      </div>
      <span className="text-sm font-semibold">seated</span>
    </div>
  );
}

function PostalLogo() {
  return (
    <div className="flex items-center gap-1.5 text-[#1a2c38]">
      <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
        <path d="M2 6l10-4 10 4v12l-10 4-10-4V6z" />
      </svg>
      <span className="text-sm font-bold tracking-wider">POSTAL</span>
    </div>
  );
}

// Country Flag components
function FlagUK() {
  return (
    <div className="w-6 h-6 rounded-full overflow-hidden border border-gray-200">
      <svg viewBox="0 0 60 30" className="w-full h-full">
        <rect width="60" height="30" fill="#012169" />
        <path d="M0,0 L60,30 M60,0 L0,30" stroke="#fff" strokeWidth="6" />
        <path d="M0,0 L60,30 M60,0 L0,30" stroke="#C8102E" strokeWidth="2" />
        <path d="M30,0 V30 M0,15 H60" stroke="#fff" strokeWidth="10" />
        <path d="M30,0 V30 M0,15 H60" stroke="#C8102E" strokeWidth="6" />
      </svg>
    </div>
  );
}

function FlagCanada() {
  return (
    <div className="w-6 h-6 rounded-full overflow-hidden border border-gray-200 bg-white flex items-center justify-center">
      <svg viewBox="0 0 60 30" className="w-full h-full">
        <rect width="15" height="30" fill="#FF0000" />
        <rect x="45" width="15" height="30" fill="#FF0000" />
        <path d="M30 8 L32 14 L28 12 L30 18 L26 14 L28 14 L24 10 L28 10 L30 8" fill="#FF0000" />
      </svg>
    </div>
  );
}

function FlagJapan() {
  return (
    <div className="w-6 h-6 rounded-full overflow-hidden border border-gray-200 bg-white flex items-center justify-center">
      <div className="w-3 h-3 rounded-full bg-[#BC002D]" />
    </div>
  );
}

function FlagFrance() {
  return (
    <div className="w-6 h-6 rounded-full overflow-hidden border border-gray-200 flex">
      <div className="w-1/3 h-full bg-[#002395]" />
      <div className="w-1/3 h-full bg-white" />
      <div className="w-1/3 h-full bg-[#ED2939]" />
    </div>
  );
}

function FlagUKSmall() {
  return (
    <div className="w-6 h-6 rounded-full overflow-hidden border border-gray-200">
      <svg viewBox="0 0 60 30" className="w-full h-full">
        <rect width="60" height="30" fill="#012169" />
        <path d="M0,0 L60,30 M60,0 L0,30" stroke="#fff" strokeWidth="6" />
        <path d="M0,0 L60,30 M60,0 L0,30" stroke="#C8102E" strokeWidth="2" />
        <path d="M30,0 V30 M0,15 H60" stroke="#fff" strokeWidth="10" />
        <path d="M30,0 V30 M0,15 H60" stroke="#C8102E" strokeWidth="6" />
      </svg>
    </div>
  );
}

function FlagGermany() {
  return (
    <div className="w-6 h-6 rounded-full overflow-hidden border border-gray-200 flex flex-col">
      <div className="flex-1 bg-black" />
      <div className="flex-1 bg-[#DD0000]" />
      <div className="flex-1 bg-[#FFCC00]" />
    </div>
  );
}

function FlagChina() {
  return (
    <div className="w-6 h-6 rounded-full overflow-hidden border border-gray-200 bg-[#DE2910] flex items-center justify-center">
      <svg viewBox="0 0 30 20" className="w-4 h-3">
        <polygon points="5,2 6,5 9,5 7,7 8,10 5,8 2,10 3,7 1,5 4,5" fill="#FFDE00" />
      </svg>
    </div>
  );
}

// Payable list item component
function PayableListItem({
  name,
  invoice,
  amount,
  selected,
  index,
}: PayableItem & { index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -10 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.8 + index * 0.1, duration: 0.4 }}
      className="flex items-center justify-between py-2.5 border-b border-[#1e3a4a] last:border-0"
    >
      <div className="flex items-center gap-3">
        <div
          className={`w-5 h-5 rounded flex items-center justify-center ${
            selected
              ? "bg-[#3b82f6]"
              : "bg-transparent border border-[#3a5060]"
          }`}
        >
          {selected && <Check className="w-3 h-3 text-white" strokeWidth={3} />}
        </div>
        <div>
          <p className="text-white text-sm font-medium">{name}</p>
          <p className="text-[#6b8a9a] text-xs">{invoice}</p>
        </div>
      </div>
      <span className="text-white text-sm font-medium">{amount}</span>
    </motion.div>
  );
}

// Mass Payments Card
function MassPaymentsCard({ payables }: { payables: PayableItem[] }) {
  const selectedCount = payables.filter((p) => p.selected).length;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5, duration: 0.6 }}
      className="bg-[#0a1f2c] rounded-2xl p-0 overflow-hidden"
    >
      {/* Header badge */}
      <div className="px-4 pt-4 pb-2">
        <div className="inline-flex items-center gap-2 bg-[#1a3a4a] rounded-full px-3 py-1.5">
          <div className="w-4 h-4 rounded bg-[#2a4a5a] flex items-center justify-center">
            <div className="w-2 h-2 rounded-sm bg-[#4a6a7a]" />
          </div>
          <span className="text-white text-xs font-medium">
            {selectedCount.toLocaleString()} Payables selected
          </span>
        </div>
      </div>

      {/* Payables list */}
      <div className="bg-white rounded-xl mx-3 mb-3 p-3">
        {payables.map((payable, index) => (
          <PayableListItem key={payable.invoice} {...payable} index={index} />
        ))}
      </div>
    </motion.div>
  );
}

// International Payments Card
function InternationalPaymentsCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.6, duration: 0.6 }}
      className="bg-[#0a1f2c] rounded-2xl p-4 flex flex-col"
    >
      {/* Amount display card */}
      <div className="bg-white rounded-xl p-4 mb-4">
        <p className="text-[#6b8a9a] text-xs mb-1">Amount</p>
        <p className="text-[#0a1f2c] text-2xl font-semibold mb-1">1,567 EUR</p>
        <p className="text-[#22c55e] text-xs">1 USD = 83.67 JPY</p>

        <div className="mt-4 pt-4 border-t border-gray-100">
          <div className="flex justify-between items-center mb-2">
            <span className="text-[#6b8a9a] text-xs">Payee</span>
            <span className="text-[#0a1f2c] text-sm font-medium">G-Flex</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-[#6b8a9a] text-xs">Invoice</span>
            <span className="text-[#3b82f6] text-sm font-medium">IL-0074</span>
          </div>
        </div>
      </div>

      {/* Flags row */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.0, duration: 0.5 }}
        className="flex items-center justify-center gap-2 mt-auto"
      >
        <FlagUK />
        <FlagCanada />
        <FlagJapan />
        <FlagFrance />
        <FlagUKSmall />
        <FlagGermany />
        <FlagChina />
      </motion.div>
    </motion.div>
  );
}

// CSV Payments Card
function CSVPaymentsCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.7, duration: 0.6 }}
      className="bg-[#0a1f2c] rounded-2xl p-4 flex flex-col"
    >
      {/* Upload area */}
      <div className="text-center mb-4">
        <p className="text-white text-sm font-medium mb-4">Upload a file</p>
        <div className="border-2 border-dashed border-[#2a4a5a] rounded-xl py-8 px-4">
          <Upload className="w-8 h-8 text-[#4a6a7a] mx-auto mb-2" />
          <p className="text-[#6b8a9a] text-xs">Drag & drop your .csv</p>
        </div>
      </div>

      {/* File upload progress card */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.1, duration: 0.4 }}
        className="bg-white rounded-xl p-3 mt-auto"
      >
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-[#22c55e]/10 rounded-lg flex items-center justify-center">
            <svg
              className="w-5 h-5 text-[#22c55e]"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6z" />
              <path d="M14 2v6h6M10 12h4M10 16h4M8 12h.01M8 16h.01" />
            </svg>
          </div>
          <div className="flex-1">
            <p className="text-[#0a1f2c] text-sm font-medium">
              Global contractor payment.csv
            </p>
            <p className="text-[#6b8a9a] text-xs">
              256kb -{" "}
              <span className="text-[#22c55e]">Uploading 6%</span>
            </p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

// Feature section with title and description
function FeatureSection({
  title,
  description,
  linkText,
  index,
}: FeatureCard & { index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.9 + index * 0.1, duration: 0.5 }}
      className="text-left"
    >
      <h3 className="text-white text-lg font-medium mb-2">{title}</h3>
      <p className="text-[#8a9faa] text-sm leading-relaxed mb-3">
        {description}
      </p>
      {linkText && (
        <a
          href="#"
          className="inline-flex items-center gap-1 text-white text-sm font-medium hover:gap-2 transition-all"
        >
          {linkText}
          <ArrowRight className="w-4 h-4" />
        </a>
      )}
    </motion.div>
  );
}

// Default data
const defaultNavItems: NavItem[] = [
  { label: "Product" },
  { label: "Solutions" },
  { label: "Developers" },
  { label: "Customers" },
  { label: "Resources" },
  { label: "Pricing" },
];

const defaultLogos: LogoItem[] = [
  { name: "Mongabay", logo: <MongabayLogo /> },
  { name: "Veho", logo: <VehoLogo /> },
  { name: "Kasa", logo: <KasaLogo /> },
  { name: "Vouch", logo: <VouchLogo /> },
  { name: "Refinsight", logo: <RefinsightLogo /> },
  { name: "Ethos", logo: <EthosLogo /> },
  { name: "Seated", logo: <SeatedLogo /> },
  { name: "Postal", logo: <PostalLogo /> },
];

const defaultPayables: PayableItem[] = [
  {
    name: "Skyline Ventures",
    invoice: "Invoice #894006",
    amount: "$19,500.50",
    selected: true,
  },
  {
    name: "Jennifer Simmons",
    invoice: "Invoice #007483",
    amount: "$5,300.00",
    selected: true,
  },
  {
    name: "QuantumEdge",
    invoice: "Invoice #11736",
    amount: "$900.00",
    selected: true,
  },
  {
    name: "Evergreen Synergy",
    invoice: "Invoice #227655",
    amount: "$11,750.20",
    selected: true,
  },
  {
    name: "John Peterson",
    invoice: "Invoice #874501",
    amount: "$2,500.00",
    selected: false,
  },
];

const defaultFeatureCards: FeatureCard[] = [
  {
    title: "Mass payments",
    description:
      "Make thousands of payments in a few clicks, reconciled to your accounting system.",
    linkText: "Learn more",
  },
  {
    title: "International payments",
    description:
      "Pay with confidence to 220+ countries and territories in 140+ currencies.",
    linkText: "Learn more",
  },
  {
    title: "CSV payments",
    description:
      "Send thousands of payments worldwide with a single CSV file upload.",
    linkText: "Learn more",
  },
];

// Main Component
export default function RoutablePaymentHero({
  mode = "light",
  logoText = "Routable",
  navItems = defaultNavItems,
  headline = {
    regular: "Industry-leading\npayment",
    accent: "speeds",
  },
  subheadline = "Send domestic and international bank transfers, wires, checks,\nand more 2X faster and for 30% less compared to competitors.",
  ctaText = "Request a demo",
  onCtaClick,
  logos = defaultLogos,
  payables = defaultPayables,
  featureCards = defaultFeatureCards,
}: RoutablePaymentHeroProps) {
  return (
    <section className="relative w-full overflow-hidden">
      {/* Top section - White background */}
      <div className="bg-[#fefefe]">
        {/* Navigation */}
        <motion.nav
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center justify-between px-6 py-4 sm:px-12 lg:px-16"
        >
          {/* Logo */}
          <div className="flex items-center gap-8">
            <span className="text-[#031821] text-xl font-bold italic">
              {logoText}
            </span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-6">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href || "#"}
                className="text-[#031821] text-sm hover:text-[#3b5a6a] transition-colors"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Auth buttons */}
          <div className="flex items-center gap-3">
            <button className="text-[#031821] text-sm hover:text-[#3b5a6a] transition-colors">
              Log in
            </button>
            <button className="bg-[#031821] text-white text-sm font-medium px-4 py-2 rounded-lg hover:bg-[#0a2f3f] transition-colors">
              Request a demo
            </button>
          </div>
        </motion.nav>

        {/* Secondary nav */}
        <div className="flex items-center justify-between px-6 sm:px-12 lg:px-16 py-2">
          <span className="text-[#031821] text-sm font-medium">Payments</span>
          <div className="hidden sm:flex items-center gap-6">
            <a
              href="#"
              className="text-[#5a7a8a] text-sm hover:text-[#031821] transition-colors"
            >
              Payment Methods
            </a>
            <a
              href="#"
              className="text-[#5a7a8a] text-sm hover:text-[#031821] transition-colors"
            >
              Payment Features
            </a>
          </div>
        </div>

        {/* Hero content */}
        <div className="max-w-4xl mx-auto px-6 pt-12 pb-16 text-center">
          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="text-4xl sm:text-5xl md:text-6xl font-serif text-[#031821] leading-tight mb-6"
          >
            {headline.regular.split("\n").map((line, i) => (
              <span key={i}>
                {line}
                {i < headline.regular.split("\n").length - 1 && <br />}
              </span>
            ))}{" "}
            <span className="italic text-[#818AA7]">{headline.accent}</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-[#5a7a8a] text-base sm:text-lg whitespace-pre-line leading-relaxed mb-8"
          >
            {subheadline}
          </motion.p>

          {/* CTA Button */}
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            onClick={onCtaClick}
            className="border border-[#031821] text-[#031821] text-sm font-medium px-6 py-3 rounded-lg hover:bg-[#031821] hover:text-white transition-colors"
          >
            {ctaText}
          </motion.button>
        </div>

        {/* Logo cloud */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 px-6 pb-12"
        >
          {logos.map((logo) => (
            <div key={logo.name} className="opacity-70 hover:opacity-100 transition-opacity">
              {logo.logo}
            </div>
          ))}
        </motion.div>
      </div>

      {/* Bottom section - Dark background */}
      <div className="bg-[#031821] px-6 sm:px-12 lg:px-16 py-12">
        <div className="max-w-6xl mx-auto">
          {/* Feature cards grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            <MassPaymentsCard payables={payables} />
            <InternationalPaymentsCard />
            <CSVPaymentsCard />
          </div>

          {/* Feature descriptions */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featureCards.map((card, index) => (
              <FeatureSection key={card.title} {...card} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
