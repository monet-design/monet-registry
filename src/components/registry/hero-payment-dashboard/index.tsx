"use client";

// ============================================================================
// CUSTOMIZATION - 이 섹션의 값들을 수정하여 프로젝트에 맞게 조정하세요
// ============================================================================

const COLORS = {
  light: {
    // 브랜드 Primary
    accent: "#0A6847",          // 진한 녹색 (주요 CTA)
    accentHover: "#085239",     // 진한 녹색 호버
    // 차트/데이터 시각화
    chartBlue: "#4C91E5",       // 차트 라인 색상
    chartGreen: "#22C55E",      // 성공/성장 표시
  },
  dark: {
    accent: "#0EA672",
    accentHover: "#0C8B5F",
    chartBlue: "#60A5FA",
    chartGreen: "#34D399",
  },
} as const;

const IMAGES = {} as const; // 이 컴포넌트는 이미지를 사용하지 않음

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { motion } from "motion/react";
import { ArrowRight, ChevronDown, CreditCard, Home, Wallet, Building2 } from "lucide-react";

// Types
interface LogoItem {
  name: string;
}

interface PaymentMethod {
  icon: React.ReactNode;
  name: string;
}

interface Transaction {
  icon: React.ReactNode;
  iconBg: string;
  amount: string;
  status: string;
  description: string;
}

interface HeroPaymentDashboardProps {
  mode?: "light" | "dark";
  subtitle?: string;
  subtitleHighlight?: string;
  subtitleEnd?: string;
  headline?: string;
  primaryButtonText?: string;
  secondaryButtonText?: string;
  logos?: LogoItem[];
  dashboardBalance?: string;
  dashboardGrowth?: string;
  orderNumber?: string;
  productName?: string;
  productPrice?: string;
  paymentMethods?: PaymentMethod[];
  transactions?: Transaction[];
  onPrimaryClick?: () => void;
  onSecondaryClick?: () => void;
}

// Logo placeholder component
function LogoPlaceholder({ name }: { name: string }) {
  return (
    <span className="text-sm font-medium tracking-wide text-[#666666] opacity-70">
      {name}
    </span>
  );
}

// Apple Pay Icon
function ApplePayIcon() {
  return (
    <svg viewBox="0 0 50 21" className="h-5 w-auto" fill="currentColor">
      <path d="M9.6 5.3c-.6.7-1.5 1.3-2.4 1.2-.1-1 .4-2 .9-2.6.6-.7 1.6-1.2 2.4-1.2.1 1-.3 2-.9 2.6zm.9 1.3c-1.3-.1-2.5.8-3.1.8-.6 0-1.6-.7-2.7-.7-1.4 0-2.7.8-3.4 2.1-1.5 2.5-.4 6.3 1 8.4.7 1 1.5 2.2 2.6 2.1 1-.1 1.4-.7 2.7-.7s1.6.7 2.7.7c1.1 0 1.8-1 2.5-2.1.8-1.2 1.1-2.3 1.1-2.4-1.2-.5-2.2-1.9-2.2-3.9 0-1.8 1.4-3.2 2.2-3.5-.9-1.5-2.3-1.8-2.8-1.8-.9-.1-1.9.5-2.6.5" />
      <path d="M21.2 1.5c3.1 0 5.3 2.1 5.3 5.2 0 3.1-2.2 5.3-5.4 5.3h-3.5v5.5h-2.5V1.5h6.1zm-3.6 8.4h2.9c2.2 0 3.4-1.2 3.4-3.2 0-2-1.2-3.2-3.4-3.2h-2.9v6.4z" />
      <path d="M27.6 14c0-2 1.5-3.2 4.3-3.3l3.1-.2v-.9c0-1.3-.9-2-2.4-2-1.3 0-2.2.6-2.4 1.6h-2.3c.1-2.1 2-3.6 4.8-3.6 2.8 0 4.6 1.5 4.6 3.8v8h-2.3v-1.9h-.1c-.7 1.3-2.1 2.1-3.6 2.1-2.3 0-3.7-1.4-3.7-3.6zm7.4-1.1v-.9l-2.8.2c-1.4.1-2.2.7-2.2 1.7 0 1 .8 1.7 2.1 1.7 1.7 0 2.9-1.1 2.9-2.7z" />
      <path d="M39 21.1v-2c.2 0 .6.1.8.1 1.1 0 1.8-.5 2.2-1.7l.2-.7-4.3-11.3h2.6l3 9h.1l3-9h2.6l-4.5 12c-1 2.8-2.2 3.7-4.7 3.7-.2 0-.8 0-1-.1z" />
    </svg>
  );
}

// PayPal Icon
function PayPalIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none">
      <path d="M7.076 21.337H2.47a.641.641 0 0 1-.633-.74L4.944 3.384a.77.77 0 0 1 .76-.644h6.207c2.053 0 3.544.537 4.422 1.592.398.478.66.99.79 1.544.138.59.14 1.289.01 2.077v.518l.317.183c.27.152.486.326.654.523.29.34.477.752.557 1.223.082.486.055 1.063-.082 1.715-.157.751-.411 1.403-.755 1.93a4.33 4.33 0 0 1-1.18 1.263 4.66 4.66 0 0 1-1.513.707c-.571.152-1.22.228-1.926.228h-.459a1.4 1.4 0 0 0-1.39 1.181l-.034.187-.565 3.572-.026.136a.193.193 0 0 1-.191.163h-3.54z" fill="#253B80"/>
      <path d="M20.16 7.658a7.027 7.027 0 0 0-.032-.187c-.437 2.246-1.933 3.016-3.847 3.016H14.68a.474.474 0 0 0-.469.401l-.82 5.2-.232 1.471a.25.25 0 0 0 .247.289h1.736a.417.417 0 0 0 .412-.352l.017-.088.327-2.068.021-.114a.417.417 0 0 1 .412-.352h.258c1.68 0 2.994-.682 3.377-2.655.16-.823.077-1.51-.346-1.995a1.656 1.656 0 0 0-.46-.366z" fill="#179BD7"/>
      <path d="M19.18 7.296a3.484 3.484 0 0 0-.43-.095 5.476 5.476 0 0 0-.87-.063h-2.636a.414.414 0 0 0-.41.352l-.56 3.56-.016.104a.474.474 0 0 1 .469-.401h.976c1.914 0 3.41-.777 3.847-3.024.013-.067.024-.131.032-.187a2.412 2.412 0 0 0-.402-.246z" fill="#222D65"/>
    </svg>
  );
}

// Bank Icon
function BankIcon() {
  return (
    <div className="flex h-5 w-5 items-center justify-center rounded bg-[#1A1F71] text-[8px] font-bold text-white">
      SEPA
    </div>
  );
}

// iDEAL Icon
function IDealIcon() {
  return (
    <div className="flex h-5 w-5 items-center justify-center rounded bg-[#CC0066] text-[8px] font-bold text-white">
      iD
    </div>
  );
}

// Default data
const defaultLogos: LogoItem[] = [
  { name: "QPARK" },
  { name: "MAZDA" },
  { name: "dermalogica" },
  { name: "KALE&ME" },
  { name: "VANILIA" },
  { name: "GYMSHARK" },
];

const defaultPaymentMethods: PaymentMethod[] = [
  { icon: <CreditCard className="h-4 w-4 text-[#1A73E8]" />, name: "Cards" },
  { icon: <PayPalIcon />, name: "PayPal" },
  { icon: <BankIcon />, name: "Bank Transfer" },
  { icon: <IDealIcon />, name: "iDEAL" },
];

const defaultTransactions: Transaction[] = [
  { icon: <PayPalIcon />, iconBg: "bg-white", amount: "24.95", status: "Paid", description: "Sport T-" },
  { icon: <CreditCard className="h-4 w-4 text-white" />, iconBg: "bg-[#4A4A4A]", amount: "26.25", status: "Paid", description: "Terminal" },
  { icon: <div className="h-4 w-4 rounded-full bg-gradient-to-r from-yellow-400 to-orange-400" />, iconBg: "bg-transparent", amount: "49.95", status: "Paid", description: "Regular" },
  { icon: <div className="flex h-4 w-4 items-center justify-center"><div className="h-2 w-2 rounded-full bg-blue-500" /><div className="h-2 w-2 rounded-full bg-red-500 -ml-1" /></div>, iconBg: "bg-transparent", amount: "120.00", status: "Paid", description: "GS x Lib" },
];

// Main Component
export default function HeroPaymentDashboard({
  mode = "light",
  subtitle = "Powering growth for over",
  subtitleHighlight = "200,000 businesses",
  subtitleEnd = " - from startups to enterprises.",
  headline = "Effortless payments and money\nmanagement for every business",
  primaryButtonText = "Get started",
  secondaryButtonText = "Contact sales",
  logos = defaultLogos,
  dashboardBalance = "24,312.12",
  dashboardGrowth = "405.8%",
  orderNumber = "#3526",
  productName = "Sport T-Shirt",
  productPrice = "24.95",
  paymentMethods = defaultPaymentMethods,
  transactions = defaultTransactions,
  onPrimaryClick,
  onSecondaryClick,
}: HeroPaymentDashboardProps) {
  const colors = COLORS[mode];

  return (
    <section className="relative w-full bg-white dark:bg-gray-950">
      {/* Top Section - White Background */}
      <div className="mx-auto max-w-6xl px-6 pt-16 sm:px-8 lg:px-12">
        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center text-base text-[#666666]"
        >
          {subtitle} <span className="font-semibold text-black">{subtitleHighlight}</span>{subtitleEnd}
        </motion.p>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="mx-auto mt-4 max-w-4xl text-center text-4xl font-bold leading-tight tracking-tight text-black sm:text-5xl md:text-[56px] md:leading-[1.1]"
          style={{ whiteSpace: "pre-line" }}
        >
          {headline}
        </motion.h1>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="mt-8 flex items-center justify-center gap-3"
        >
          <button
            onClick={onPrimaryClick}
            className="inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium text-white transition-all"
            style={{ backgroundColor: colors.accent }}
            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = colors.accentHover}
            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = colors.accent}
          >
            {primaryButtonText}
            <ArrowRight className="h-4 w-4" />
          </button>
          <button
            onClick={onSecondaryClick}
            className="rounded-full bg-gray-900 dark:bg-gray-100 px-5 py-2.5 text-sm font-medium text-white dark:text-gray-900 transition-all hover:bg-gray-700 dark:hover:bg-gray-300"
          >
            {secondaryButtonText}
          </button>
        </motion.div>

        {/* Logo Strip */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mt-12 flex flex-wrap items-center justify-center gap-8 sm:gap-12"
        >
          {logos.map((logo, index) => (
            <LogoPlaceholder key={index} name={logo.name} />
          ))}
        </motion.div>
      </div>

      {/* Bottom Section - Dark Cards */}
      <div className="mt-12 px-6 pb-8 sm:px-8 lg:px-12">
        <div className="mx-auto grid max-w-6xl gap-4 md:grid-cols-2">
          {/* Left Card - Checkout UI */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.7 }}
            className="relative overflow-hidden rounded-2xl bg-[#0A0A0A]"
          >
            {/* Background Image Overlay */}
            <div
              className="absolute inset-0 bg-cover bg-center opacity-40"
              style={{
                backgroundImage: "linear-gradient(to bottom, rgba(0,0,0,0.3), rgba(0,0,0,0.8)), url('https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=800&auto=format&fit=crop&q=60')"
              }}
            />

            {/* Brand Logo */}
            <div className="relative z-10 p-6">
              <div className="flex items-center gap-2">
                <span className="text-xl font-bold tracking-wider text-white">GYMSHARK</span>
                <svg className="h-5 w-5 text-white" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2L4 7v10l8 5 8-5V7l-8-5z" />
                </svg>
              </div>
            </div>

            {/* Checkout Card */}
            <div className="relative z-10 mx-6 mb-6 rounded-xl bg-white p-4 shadow-xl">
              <div className="mb-3 text-center">
                <p className="text-xs text-gray-500">Order {orderNumber}</p>
                <p className="text-sm font-medium text-gray-900">{productName}</p>
                <p className="text-lg font-semibold text-gray-900">{productPrice}</p>
              </div>

              {/* Apple Pay Button */}
              <button className="mb-3 flex w-full items-center justify-center gap-1 rounded-lg bg-black py-2.5 text-white">
                <ApplePayIcon />
              </button>

              {/* Payment Methods */}
              <div className="space-y-0">
                {paymentMethods.map((method, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between border-b border-gray-100 py-2.5 last:border-0"
                  >
                    <div className="flex items-center gap-3">
                      {method.icon}
                      <span className="text-sm text-gray-700">{method.name}</span>
                    </div>
                    <ChevronDown className="h-4 w-4 rotate-[-90deg] text-gray-400" />
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Card - Dashboard UI */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.7 }}
            className="overflow-hidden rounded-2xl bg-[#111114]"
          >
            {/* Dashboard Header */}
            <div className="flex items-center justify-between border-b border-[#2A2A2E] px-5 py-3">
              <div className="flex items-center gap-2">
                <div className="flex h-6 w-6 items-center justify-center rounded-md" style={{ backgroundColor: colors.accent }}>
                  <div className="h-2 w-2 rounded-sm bg-white" />
                </div>
                <ChevronDown className="h-4 w-4 text-gray-500" />
              </div>
              <div className="flex items-center gap-6">
                <div className="flex items-center gap-2 rounded-lg bg-[#1E1E22] px-3 py-1.5">
                  <Home className="h-4 w-4 text-white" />
                  <span className="text-sm text-white">Home</span>
                </div>
                <div className="flex items-center gap-2 text-gray-500">
                  <CreditCard className="h-4 w-4" />
                  <span className="text-sm">Payments</span>
                </div>
                <div className="flex items-center gap-2 text-gray-500">
                  <Wallet className="h-4 w-4" />
                  <span className="text-sm">Balance</span>
                </div>
                <div className="flex items-center gap-2 text-gray-500">
                  <Building2 className="h-4 w-4" />
                  <span className="text-sm">Capital</span>
                </div>
              </div>
            </div>

            {/* Dashboard Content */}
            <div className="p-5">
              {/* Balance */}
              <div className="mb-4">
                <p className="text-sm text-gray-500">Today</p>
                <p className="text-3xl font-semibold text-white">{dashboardBalance}</p>
                <p className="flex items-center gap-1 text-sm" style={{ color: colors.chartGreen }}>
                  <span className="text-xs">&#9650;</span> {dashboardGrowth}
                </p>
              </div>

              {/* Chart */}
              <div className="mb-6 h-24">
                <svg className="h-full w-full" viewBox="0 0 400 100" preserveAspectRatio="none">
                  <defs>
                    <linearGradient id="chartGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor={colors.chartBlue} stopOpacity="0.2" />
                      <stop offset="100%" stopColor={colors.chartBlue} stopOpacity="0" />
                    </linearGradient>
                  </defs>
                  <path
                    d="M0,80 Q50,60 80,70 T160,50 T240,60 T320,40 T400,30"
                    fill="none"
                    stroke={colors.chartBlue}
                    strokeWidth="2"
                  />
                  <path
                    d="M0,80 Q50,60 80,70 T160,50 T240,60 T320,40 T400,30 L400,100 L0,100 Z"
                    fill="url(#chartGradient)"
                  />
                </svg>
                <div className="mt-1 text-xs text-gray-600">00:00</div>
              </div>

              {/* Transactions Table */}
              <div>
                <div className="mb-2 grid grid-cols-4 text-xs text-gray-500">
                  <span>Methods</span>
                  <span className="text-center">Amount</span>
                  <span className="text-center">Status</span>
                  <span className="text-right">Descript</span>
                </div>
                <div className="space-y-2">
                  {transactions.map((tx, index) => (
                    <div key={index} className="grid grid-cols-4 items-center rounded-lg bg-[#1A1A1E] px-3 py-2">
                      <div className={`flex h-6 w-6 items-center justify-center rounded ${tx.iconBg}`}>
                        {tx.icon}
                      </div>
                      <span className="text-center text-sm text-white">{tx.amount}</span>
                      <div className="flex justify-center">
                        <span className="rounded-full px-2 py-0.5 text-xs" style={{ backgroundColor: `${colors.chartGreen}20`, color: colors.chartGreen }}>
                          {tx.status}
                        </span>
                      </div>
                      <span className="text-right text-sm text-gray-400">{tx.description}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
