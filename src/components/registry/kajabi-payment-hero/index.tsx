"use client";

import { motion } from "motion/react";
import {
  ChevronDown,
  CreditCard,
  FileText,
  Receipt,
  RefreshCcw,
  DollarSign,
  PauseCircle,
  BarChart3,
  FileBarChart,
  Eye,
  Calendar,
} from "lucide-react";

/* ===== Font Import (Instrument Serif for italic headings) ===== */
const fontStyles = `
  @import url('https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&display=swap');
`;

/* ===== Types ===== */
interface NavItem {
  label: string;
  href: string;
  hasDropdown?: boolean;
}

interface FeatureItem {
  icon: React.ReactNode;
  text: string;
}

interface PaymentMethod {
  icon: React.ReactNode;
  label: string;
}

interface TransactionRow {
  paymentIcon: React.ReactNode;
  amount: string;
  currency: string;
  status: "Successful" | "Refunded";
  type: string;
}

interface SubscriptionRow {
  amount: string;
  status: "Active";
  installment: string;
  email: string;
}

interface KajabiPaymentHeroProps {
  // Navigation
  logoText?: string;
  navItems?: NavItem[];
  ctaButtonText?: string;
  ctaButtonHref?: string;

  // Section 1: Manage Payments
  section1Title?: string;
  section1TitleAccent?: string;
  section1Description?: string;
  section1Features?: FeatureItem[];
  dashboardData?: {
    courseName: string;
    transactions: number;
    transactionsGrowth: number;
    balance: string;
    balanceCurrency: string;
    expectedDate: string;
    netRevenue: string;
    offersSold: number;
  };

  // Section 2: Flexible Payments
  section2TitlePart1?: string;
  section2TitleAccent?: string;
  section2Description?: string;
  paymentMethods?: PaymentMethod[];
  transactionRows?: TransactionRow[];

  // Section 3: Clear Data
  section3TitlePart1?: string;
  section3TitleAccent?: string;
  section3Description?: string;
  section3Features?: FeatureItem[];
  subscriptionRows?: SubscriptionRow[];
}

/* ===== Default Values ===== */
const defaultNavItems: NavItem[] = [
  { label: "Products", href: "#", hasDropdown: true },
  { label: "Resources", href: "#", hasDropdown: true },
  { label: "Blog", href: "#", hasDropdown: false },
  { label: "Pricing", href: "#", hasDropdown: false },
  { label: "Login", href: "#", hasDropdown: false },
];

const defaultSection1Features: FeatureItem[] = [
  { icon: <CreditCard className="w-5 h-5" />, text: "Accept payments" },
  { icon: <FileText className="w-5 h-5" />, text: "Manage transactions" },
  { icon: <Receipt className="w-5 h-5" />, text: "Generate receipts" },
  { icon: <RefreshCcw className="w-5 h-5" />, text: "Issue refunds" },
  { icon: <DollarSign className="w-5 h-5" />, text: "Receive payouts" },
  { icon: <PauseCircle className="w-5 h-5" />, text: "Pause/cancel subscriptions" },
];

const defaultSection3Features: FeatureItem[] = [
  { icon: <BarChart3 className="w-5 h-5" />, text: "Track performance" },
  { icon: <FileBarChart className="w-5 h-5" />, text: "Generate reports" },
  { icon: <Eye className="w-5 h-5" />, text: "Oversee purchases" },
];

/* ===== Payment Icons ===== */
const ApplePayIcon = () => (
  <div className="flex items-center justify-center w-10 h-6 bg-black rounded text-white text-[10px] font-semibold">
    Pay
  </div>
);

const GooglePayIcon = () => (
  <div className="flex items-center justify-center w-10 h-6 bg-white border border-gray-200 rounded text-[10px] font-medium text-gray-700">
    G Pay
  </div>
);

const VisaIcon = () => (
  <div className="flex items-center justify-center w-10 h-6 bg-[#1A1F71] rounded text-white text-[9px] font-bold italic">
    VISA
  </div>
);

const MastercardIcon = () => (
  <div className="flex items-center justify-center w-10 h-6 bg-white border border-gray-200 rounded">
    <div className="flex">
      <div className="w-3 h-3 bg-red-500 rounded-full -mr-1.5" />
      <div className="w-3 h-3 bg-yellow-500 rounded-full" />
    </div>
  </div>
);

const defaultTransactionRows: TransactionRow[] = [
  { paymentIcon: <ApplePayIcon />, amount: "$ 1,996.90", currency: "USD", status: "Successful", type: "One-time" },
  { paymentIcon: <GooglePayIcon />, amount: "$ 299", currency: "USD", status: "Refunded", type: "Multi-pay" },
  { paymentIcon: <VisaIcon />, amount: "$ 5,594.31", currency: "USD", status: "Successful", type: "One-time" },
  { paymentIcon: <MastercardIcon />, amount: "$ 12.83", currency: "USD", status: "Successful", type: "Subscription" },
];

const defaultSubscriptionRows: SubscriptionRow[] = [
  { amount: "$ 59.95 USD", status: "Active", installment: "6 / 8", email: "felicia.reid@example.com" },
  { amount: "$ 19.95 USD", status: "Active", installment: "1 / 12", email: "nathan.roberts@example.com" },
];

/* ===== Main Component ===== */
export default function KajabiPaymentHero({
  logoText = "KAJABI",
  navItems = defaultNavItems,
  ctaButtonText = "GET STARTED",
  ctaButtonHref = "#",
  section1Title = "One Place To",
  section1TitleAccent = "Manage Payments",
  section1Description = "Experience the convenience and control of having everything you need in one place.",
  section1Features = defaultSection1Features,
  dashboardData = {
    courseName: "Full Body Pilates and Movement",
    transactions: 431,
    transactionsGrowth: 30,
    balance: "900.67",
    balanceCurrency: "USD",
    expectedDate: "Expected May 17",
    netRevenue: "$2,500",
    offersSold: 80,
  },
  section2TitlePart1 = "Empower Your\nCustomers With",
  section2TitleAccent = "Flexible Payment\nOptions",
  section2Description = "Boost conversions when you add more ways for your customers to pay. Accept all major credit and debit cards, plus new fast and flexible options.",
  transactionRows = defaultTransactionRows,
  section3TitlePart1 = "Clear Data,",
  section3TitleAccent = "Smarter Decisions",
  section3Description = "One source for all transaction data \u2014 see the whole picture, make decisions with confidence.",
  section3Features = defaultSection3Features,
  subscriptionRows = defaultSubscriptionRows,
}: KajabiPaymentHeroProps) {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: fontStyles }} />
      <section className="relative w-full bg-white">
        {/* Navigation */}
        <motion.nav
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full px-6 lg:px-16 py-4 flex items-center justify-between border-b border-gray-100"
        >
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 flex items-center justify-center">
              <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none">
                <path
                  d="M12 2L4 6v12l8 4 8-4V6l-8-4z"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  fill="none"
                />
                <path d="M12 6l4 2v8l-4 2-4-2V8l4-2z" fill="currentColor" />
              </svg>
            </div>
            <span className="text-black font-bold text-sm tracking-wider">{logoText}</span>
          </div>

          {/* Nav Items */}
          <div className="hidden lg:flex items-center gap-6">
            {navItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="flex items-center gap-1 text-sm text-gray-600 hover:text-black transition-colors"
              >
                {item.label}
                {item.hasDropdown && <ChevronDown className="w-3.5 h-3.5" />}
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <a
            href={ctaButtonHref}
            className="px-4 py-2 text-xs font-semibold text-white rounded-md transition-all hover:opacity-90"
            style={{ backgroundColor: "#123FE5" }}
          >
            {ctaButtonText}
          </a>
        </motion.nav>

        {/* Section 1: One Place To Manage Payments */}
        <div className="px-6 lg:px-16 py-16 lg:py-24">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-start">
            {/* Left: Dashboard Card */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="lg:w-1/2"
            >
              <div className="rounded-3xl p-6 lg:p-8" style={{ backgroundColor: "#BDE7FF" }}>
                {/* Dashboard Header */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 bg-black/10 rounded flex items-center justify-center">
                      <Calendar className="w-3.5 h-3.5 text-gray-700" />
                    </div>
                    <span className="text-sm text-gray-700 font-medium">{dashboardData.courseName}</span>
                    <ChevronDown className="w-4 h-4 text-gray-500" />
                  </div>
                  <div className="w-10 h-10 rounded-full bg-gray-200 overflow-hidden">
                    <div className="w-full h-full bg-gradient-to-br from-gray-300 to-gray-400" />
                  </div>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-2 gap-4">
                  {/* Transactions */}
                  <div className="bg-white rounded-2xl p-4">
                    <p className="text-xs text-gray-500 mb-1">Transactions</p>
                    <div className="flex items-baseline gap-2">
                      <span className="text-3xl font-bold text-black">{dashboardData.transactions}</span>
                      <span className="text-xs text-gray-400">Transactions this month</span>
                      <span className="ml-auto px-2 py-0.5 bg-green-100 text-green-600 text-xs font-medium rounded-full">
                        {dashboardData.transactionsGrowth}%
                      </span>
                    </div>
                  </div>

                  {/* Kajabi Payments Balance */}
                  <div className="bg-white rounded-2xl p-4">
                    <p className="text-xs text-gray-500 mb-1">Kajabi Payments Balance</p>
                    <div className="flex items-baseline gap-1">
                      <span className="text-2xl font-bold text-black">$ {dashboardData.balance}</span>
                      <span className="text-sm text-gray-400">{dashboardData.balanceCurrency}</span>
                    </div>
                    <div className="flex items-center gap-1 mt-1 text-xs text-gray-400">
                      <Calendar className="w-3 h-3" />
                      <span>{dashboardData.expectedDate}</span>
                    </div>
                  </div>

                  {/* Net Revenue */}
                  <div className="bg-white rounded-2xl p-4">
                    <p className="text-xs text-gray-500 mb-1">Net revenue</p>
                    <span className="text-2xl font-bold text-black">{dashboardData.netRevenue}</span>
                  </div>

                  {/* Offers Sold */}
                  <div className="bg-white rounded-2xl p-4">
                    <p className="text-xs text-gray-500 mb-1">Offers sold</p>
                    <span className="text-2xl font-bold text-black">{dashboardData.offersSold}</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right: Content */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="lg:w-1/2 lg:pt-8"
            >
              <h2 className="text-4xl lg:text-5xl font-bold text-black leading-tight">
                {section1Title}
                <br />
                <span
                  className="italic font-normal"
                  style={{ fontFamily: "'Instrument Serif', serif" }}
                >
                  {section1TitleAccent}
                </span>
              </h2>
              <p className="mt-4 text-gray-600 text-base leading-relaxed max-w-md">
                {section1Description}
              </p>

              {/* Feature List */}
              <div className="mt-8 grid grid-cols-2 gap-x-6 gap-y-3">
                {section1Features.map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 pb-2 border-b border-gray-200"
                  >
                    <span className="text-gray-600">{feature.icon}</span>
                    <span className="text-sm text-gray-700">{feature.text}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        {/* Section 2: Flexible Payment Options */}
        <div className="px-6 lg:px-16 py-16 lg:py-24">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-start">
            {/* Left: Content */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="lg:w-1/2"
            >
              <h2 className="text-4xl lg:text-5xl font-bold text-black leading-tight whitespace-pre-line">
                {section2TitlePart1}
                <br />
                <span
                  className="italic font-normal"
                  style={{ fontFamily: "'Instrument Serif', serif" }}
                >
                  {section2TitleAccent}
                </span>
              </h2>
              <p className="mt-4 text-gray-600 text-base leading-relaxed max-w-md">
                {section2Description}
              </p>

              {/* Payment Methods */}
              <div className="mt-6 flex flex-wrap items-center gap-3">
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <CreditCard className="w-5 h-5" />
                  <span>Credit cards</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <CreditCard className="w-5 h-5" />
                  <span>Debit cards</span>
                </div>
                <div className="px-3 py-1.5 bg-gray-100 rounded text-xs font-medium text-gray-700">
                  Pay
                </div>
                <div className="px-3 py-1.5 bg-gray-100 rounded text-xs font-medium text-gray-700 flex items-center gap-1">
                  <span className="text-blue-500">G</span> Pay
                </div>
                <div className="text-sm text-gray-500 italic">afterpay</div>
              </div>
            </motion.div>

            {/* Right: Transaction Table */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="lg:w-1/2"
            >
              <div className="rounded-3xl p-6" style={{ backgroundColor: "#FFCFB9" }}>
                <div className="bg-white rounded-2xl overflow-hidden">
                  {/* Table Header */}
                  <div className="grid grid-cols-4 px-4 py-3 text-xs font-medium text-gray-500 border-b border-gray-100">
                    <span>Amount</span>
                    <span>Status</span>
                    <span>Type</span>
                    <span></span>
                  </div>

                  {/* Table Rows */}
                  {transactionRows.map((row, index) => (
                    <div
                      key={index}
                      className="grid grid-cols-4 items-center px-4 py-3 border-b border-gray-50 last:border-b-0"
                    >
                      <div className="flex items-center gap-2">
                        {row.paymentIcon}
                        <span className="text-sm font-medium text-black">
                          {row.amount} <span className="text-gray-400">{row.currency}</span>
                        </span>
                      </div>
                      <span
                        className={`text-xs font-medium px-2 py-1 rounded w-fit ${
                          row.status === "Successful"
                            ? "bg-green-100 text-green-700"
                            : "bg-gray-100 text-gray-600"
                        }`}
                      >
                        {row.status}
                      </span>
                      <span className="text-sm text-gray-600">{row.type}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Section 3: Clear Data, Smarter Decisions */}
        <div className="px-6 lg:px-16 py-16 lg:py-24">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-start">
            {/* Left: Chart Card */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="lg:w-1/2"
            >
              <div className="rounded-3xl p-6 lg:p-8" style={{ backgroundColor: "#E8E0F0" }}>
                <div className="bg-white rounded-2xl p-5">
                  {/* Chart Header */}
                  <div className="flex items-center justify-between mb-6">
                    <h4 className="text-sm font-semibold text-black">Successful Transactions</h4>
                    <div className="flex items-center gap-2">
                      <button className="px-3 py-1 text-xs font-medium text-gray-500 bg-gray-100 rounded">
                        Revenue
                      </button>
                      <button className="px-3 py-1 text-xs font-medium text-gray-500 bg-gray-100 rounded flex items-center gap-1">
                        Last 30 days
                        <ChevronDown className="w-3 h-3" />
                      </button>
                    </div>
                  </div>

                  {/* Chart Placeholder */}
                  <div className="h-32 mb-6 relative">
                    <div className="absolute left-0 top-0 text-xs text-gray-400">10</div>
                    <svg className="w-full h-full" viewBox="0 0 400 100" preserveAspectRatio="none">
                      <path
                        d="M0,80 Q50,70 100,75 T200,60 T300,40 T400,50"
                        fill="none"
                        stroke="#000"
                        strokeWidth="2"
                      />
                    </svg>
                    <div className="absolute bottom-0 left-0 right-0 flex justify-between text-[10px] text-gray-400">
                      {["16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14"].map((d, i) => (
                        <span key={i}>{d}</span>
                      ))}
                    </div>
                  </div>

                  {/* Subscription Rows */}
                  {subscriptionRows.map((row, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between py-3 border-t border-gray-100"
                    >
                      <div className="flex items-center gap-3">
                        <span className="text-sm font-medium text-black">{row.amount}</span>
                        <span className="px-2 py-0.5 bg-green-100 text-green-700 text-xs font-medium rounded flex items-center gap-1">
                          <span className="w-1.5 h-1.5 bg-green-500 rounded-full" />
                          {row.status}
                        </span>
                      </div>
                      <div className="flex items-center gap-4 text-sm text-gray-500">
                        <span>{row.installment}</span>
                        <span>{row.email}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Right: Content */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="lg:w-1/2 lg:pt-8"
            >
              <h2 className="text-4xl lg:text-5xl font-bold text-black leading-tight">
                {section3TitlePart1}
                <br />
                <span
                  className="italic font-normal"
                  style={{ fontFamily: "'Instrument Serif', serif" }}
                >
                  {section3TitleAccent}
                </span>
              </h2>
              <p className="mt-4 text-gray-600 text-base leading-relaxed max-w-md">
                {section3Description}
              </p>

              {/* Feature List */}
              <div className="mt-8 space-y-3">
                {section3Features.map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 pb-2 border-b border-gray-200 w-fit pr-8"
                  >
                    <span className="text-gray-600">{feature.icon}</span>
                    <span className="text-sm text-gray-700">{feature.text}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
