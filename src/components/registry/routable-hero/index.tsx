"use client";

import { motion } from "motion/react";
import { Clock, Settings, CheckCircle } from "lucide-react";

// Types
interface NavItem {
  label: string;
  href?: string;
}

interface FeatureCard {
  icon: React.ReactNode;
  title: string;
  description: string;
}

interface RoutableHeroProps {
  mode?: "light" | "dark";
  logoText?: string;
  navItems?: NavItem[];
  headline?: string;
  highlightedWord?: string;
  subheadline?: string;
  ctaText?: string;
  loginText?: string;
  demoButtonText?: string;
  features?: FeatureCard[];
  partnerLogos?: string[];
  onCtaClick?: () => void;
  onLoginClick?: () => void;
}

const CUSTOMIZATION = {}

// Partner logo text components
const PartnerLogos = [
  { name: "FORA", style: "font-bold tracking-wider" },
  { name: "RE/MAX", style: "font-bold italic" },
  { name: "ticketmaster", style: "italic text-sm" },
  { name: "VOUCH", style: "font-bold tracking-wide" },
  { name: "Stratacomm", style: "font-medium" },
  { name: "PRIZEPICKS", style: "font-bold text-sm" },
  { name: "ETHOS", style: "font-bold tracking-[0.2em]" },
  { name: "veho", style: "font-medium" },
  { name: "POSTAL", style: "font-bold tracking-wider" },
];

// Dashboard mock data
const invoiceData = [
  { payee: "Apex Financials", subtext: "Johny Wallberg", invoiceNo: "QI-02457", status: "Pending", statusType: "warning" },
  { payee: "Sabre Co", subtext: "Jo Bennet", invoiceNo: "SA-98630", status: "Ready to send", statusType: "info" },
  { payee: "Vance Refrigiration", subtext: "Bob Vance", invoiceNo: "PL-07112", status: "", statusType: "" },
  { payee: "Vitality Health", subtext: "Jo Berner", invoiceNo: "QA-0099", status: "", statusType: "" },
  { payee: "Schrute Farms", subtext: "Mose Schrute", invoiceNo: "NY-12305", status: "", statusType: "" },
  { payee: "Trendy Apparel Co.", subtext: "Damian Brooks", invoiceNo: "PP-11099", status: "", statusType: "" },
  { payee: "Gourmet Delights Ltd.", subtext: "Mose Schrute", invoiceNo: "FL-76543", status: "", statusType: "" },
  { payee: "Green Wave", subtext: "Mose Schrute", invoiceNo: "GE-0984", status: "", statusType: "" },
  { payee: "Stellar Productions", subtext: "Mose Schrute", invoiceNo: "AL-48397", status: "", statusType: "" },
  { payee: "Horizon Tech", subtext: "George Miller", invoiceNo: "HR-3947", status: "", statusType: "" },
];

const lineItems = [
  { item: "Services April - May", qty: 2505, rate: "$22.50", amount: "$56,362.00" },
  { item: "Services May - June", qty: 420, rate: "$35.75", amount: "$15,015.00" },
  { item: "Services June - July", qty: 1800, rate: "$18.25", amount: "$32,850.00" },
];

// Default features
const defaultFeatures: FeatureCard[] = [
  {
    icon: <Clock className="w-5 h-5" />,
    title: "Faster payments for less",
    description: "Pay hundreds of thousands of vendors around the world 2X faster and for 30% less than competitors.",
  },
  {
    icon: <Settings className="w-5 h-5" />,
    title: "We work the way you work",
    description: "You know your business best. Adapt workflows to perfectly mirror your company's unique requirements.",
  },
  {
    icon: <CheckCircle className="w-5 h-5" />,
    title: "Stress-free compliance and controls",
    description: "Comply with internal controls and industry regulations with simplified processes and audit-ready data.",
  },
];

// Dot Pattern Component
function DotPattern() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 0.3 }}
      className="absolute top-16 left-8 w-32 h-48 pointer-events-none"
      style={{ transform: "rotate(-15deg)" }}
    >
      <svg width="100%" height="100%" viewBox="0 0 120 180">
        {Array.from({ length: 8 }).map((_, row) =>
          Array.from({ length: 5 }).map((_, col) => (
            <circle
              key={`${row}-${col}`}
              cx={12 + col * 24}
              cy={12 + row * 22}
              r="2"
              fill="#5250F4"
              opacity="0.6"
            />
          ))
        )}
      </svg>
    </motion.div>
  );
}

// Dashboard UI Component
function DashboardMockup() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.5 }}
      className="relative w-full max-w-5xl mx-auto"
    >
      {/* Main Dashboard Container */}
      <div className="bg-white rounded-xl shadow-2xl overflow-hidden border border-gray-200">
        {/* Dashboard Header */}
        <div className="flex items-center justify-between px-4 py-3 border-b border-gray-100">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-[#5250F4] rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">R</span>
            </div>
            <span className="text-gray-800 font-medium">All payables</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-gray-600 text-sm">Invoice #QI-02457</span>
            <button className="text-xs text-gray-500 px-3 py-1 border border-gray-200 rounded">Suite connected</button>
            <button className="text-xs text-gray-500 px-3 py-1 border border-gray-200 rounded">Delete bill</button>
            <button className="text-xs text-gray-500 px-3 py-1 border border-gray-200 rounded">Cancel</button>
          </div>
        </div>

        <div className="flex">
          {/* Sidebar */}
          <div className="w-14 bg-gray-50 border-r border-gray-100 py-4 flex flex-col items-center gap-4">
            <div className="w-8 h-8 bg-[#5250F4] rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xs">R</span>
            </div>
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="w-6 h-6 bg-gray-200 rounded" />
            ))}
            <div className="mt-auto flex flex-col gap-3">
              <div className="w-6 h-6 bg-gray-300 rounded-full" />
              <div className="w-6 h-6 bg-gray-400 rounded-full" />
            </div>
          </div>

          {/* Invoice List */}
          <div className="w-72 border-r border-gray-100">
            <div className="p-3">
              <input
                type="text"
                placeholder="Search..."
                className="w-full px-3 py-2 text-sm bg-gray-50 border border-gray-200 rounded-lg"
                readOnly
              />
            </div>
            <div className="px-3 pb-2">
              <div className="grid grid-cols-3 gap-2 text-xs text-gray-500 font-medium pb-2 border-b border-gray-100">
                <span>Payee</span>
                <span>Invoice no.</span>
                <span>Status</span>
              </div>
            </div>
            <div className="overflow-y-auto max-h-80">
              {invoiceData.map((item, idx) => (
                <div
                  key={idx}
                  className={`grid grid-cols-3 gap-2 px-3 py-2 text-xs hover:bg-gray-50 ${
                    idx === 0 ? "bg-blue-50" : ""
                  }`}
                >
                  <div>
                    <div className="font-medium text-gray-800">{item.payee}</div>
                    <div className="text-gray-400 text-[10px]">{item.subtext}</div>
                  </div>
                  <span className="text-[#5250F4]">{item.invoiceNo}</span>
                  <span className={`${item.statusType === "warning" ? "text-yellow-600" : "text-blue-600"}`}>
                    {item.status && (
                      <span className="flex items-center gap-1">
                        <span className={`w-1.5 h-1.5 rounded-full ${item.statusType === "warning" ? "bg-yellow-500" : "bg-blue-500"}`} />
                        {item.status}
                      </span>
                    )}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Invoice Detail */}
          <div className="flex-1 p-6">
            <div className="flex items-start justify-between mb-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-800">Apex Financials</h3>
                <div className="text-xs text-gray-500 mt-1">
                  <div>Bill to:</div>
                  <div>Genesis Electronix</div>
                  <div>4140 Parker Rd.</div>
                  <div>Allentown, New Mexico</div>
                  <div>31134</div>
                </div>
              </div>
              <div className="text-right">
                <div className="text-sm text-gray-500">inancials</div>
                <div className="text-xs text-gray-400 mt-1">
                  <span className="text-green-600">+ Scanned</span>
                </div>
              </div>
            </div>

            {/* Line Items Table */}
            <div className="border border-gray-200 rounded-lg overflow-hidden mb-4">
              <div className="grid grid-cols-4 gap-2 bg-[#5250F4] text-white text-xs font-medium px-4 py-2">
                <span>Item</span>
                <span className="text-center">Qty</span>
                <span className="text-center">Rate</span>
                <span className="text-right">Amount</span>
              </div>
              {lineItems.map((item, idx) => (
                <div
                  key={idx}
                  className="grid grid-cols-4 gap-2 text-xs text-gray-600 px-4 py-2 border-t border-gray-100"
                >
                  <span>{item.item}</span>
                  <span className="text-center">{item.qty}</span>
                  <span className="text-center">{item.rate}</span>
                  <span className="text-right">{item.amount}</span>
                </div>
              ))}
            </div>

            {/* Totals */}
            <div className="text-right text-xs text-gray-600 space-y-1">
              <div>Subtotal: $104,227.00</div>
              <div>Tax(7.25%): $7,556.45</div>
              <div className="font-semibold text-gray-800">Total: $111,783.45</div>
            </div>

            {/* Notes */}
            <div className="mt-4 text-xs text-gray-500">
              <div className="font-medium">Notes:</div>
              <div>Please remit funds to:</div>
              <div>East Credit Bank</div>
              <div>ABA: 48998076</div>
              <div>Account: 8897651</div>
            </div>
          </div>

          {/* Right Panel */}
          <div className="w-48 border-l border-gray-100 p-4 text-xs">
            <div className="space-y-3">
              <div className="text-gray-500">details</div>
              <div className="text-gray-500">ned</div>
              <div className="text-gray-500">details</div>
              <div className="text-gray-500">approvals</div>
              <div className="text-gray-500">payment</div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between px-4 py-2 border-t border-gray-100 bg-gray-50 text-xs text-gray-500">
          <div className="flex items-center gap-4">
            <span>Expenses (3)</span>
            <span>Items (0)</span>
          </div>
          <div className="flex items-center gap-4">
            <span>7.00 USD</span>
            <span>Tax: $7,556.45 USD</span>
            <span className="font-medium text-gray-800">Total: $111,783.45</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

// Feature Icon Wrapper
function FeatureIcon({ icon, color }: { icon: React.ReactNode; color: string }) {
  return (
    <div className={`w-6 h-6 rounded-full flex items-center justify-center ${color}`}>
      {icon}
    </div>
  );
}

// Main Component
export default function RoutableHero({
  mode = "dark",
  logoText = "Routable",
  navItems = [
    { label: "Product" },
    { label: "Solutions" },
    { label: "Developers" },
    { label: "Customers" },
    { label: "Resources" },
    { label: "Pricing" },
  ],
  headline = "Accounts payable\nautomation,",
  highlightedWord = "solved",
  subheadline = "Automate invoice processing and payments,\nonboard vendors seamlessly, customize\napproval flows, and more — for 30% less.",
  ctaText = "Request a demo",
  loginText = "Log in",
  demoButtonText = "Request a demo",
  features = defaultFeatures,
  onCtaClick,
  onLoginClick,
}: RoutableHeroProps) {
  return (
    <section className="relative w-full bg-[#021720] overflow-hidden">
      {/* Dot Pattern Decoration */}
      <DotPattern />

      {/* Navigation */}
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative z-20 flex items-center justify-between px-8 py-4"
      >
        {/* Logo */}
        <div className="flex items-center">
          <span className="text-white text-xl font-medium italic">{logoText}</span>
        </div>

        {/* Nav Items */}
        <div className="hidden lg:flex items-center gap-8">
          {navItems.map((item, idx) => (
            <a
              key={idx}
              href={item.href || "#"}
              className="text-gray-300 text-sm hover:text-white transition-colors"
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Auth Buttons */}
        <div className="flex items-center gap-4">
          <button
            onClick={onLoginClick}
            className="text-gray-300 text-sm hover:text-white transition-colors"
          >
            {loginText}
          </button>
          <button
            onClick={onCtaClick}
            className="px-4 py-2 text-sm text-white border border-white/30 rounded-md hover:bg-white/10 transition-colors"
          >
            {demoButtonText}
          </button>
        </div>
      </motion.nav>

      {/* Hero Content */}
      <div className="relative z-10 px-8 pt-12 pb-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left: Text Content */}
            <div className="pt-8">
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1 }}
                className="text-4xl sm:text-5xl lg:text-6xl font-medium text-white leading-tight mb-6"
              >
                {headline.split("\n").map((line, idx) => (
                  <span key={idx}>
                    {line}
                    {idx < headline.split("\n").length - 1 && <br />}
                  </span>
                ))}{" "}
                <span className="italic text-white">{highlightedWord}</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-gray-400 text-base leading-relaxed mb-8 whitespace-pre-line"
              >
                {subheadline}
              </motion.p>

              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                onClick={onCtaClick}
                className="px-6 py-3 bg-[#5250F4] text-white text-sm font-medium rounded-lg hover:bg-[#4240E0] transition-colors"
              >
                {ctaText}
              </motion.button>
            </div>

            {/* Right: Partner Logos Grid */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="grid grid-cols-3 gap-6 pt-4"
            >
              {PartnerLogos.map((logo, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.4 + idx * 0.05 }}
                  className="flex items-center justify-center h-12"
                >
                  <span className={`text-gray-400 ${logo.style}`}>{logo.name}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>

      {/* Dashboard Preview */}
      <div className="relative z-10 px-8 py-8">
        <DashboardMockup />
      </div>

      {/* Feature Cards Section */}
      <div className="relative z-10 bg-[#1B2C36] px-8 py-12">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="grid md:grid-cols-3 gap-8"
          >
            {features.map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.8 + idx * 0.1 }}
                className="flex flex-col gap-3"
              >
                <FeatureIcon
                  icon={feature.icon}
                  color={idx === 0 ? "bg-teal-500 text-white" : idx === 1 ? "bg-[#5250F4] text-white" : "bg-teal-500 text-white"}
                />
                <h3 className="text-white font-medium">{feature.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
