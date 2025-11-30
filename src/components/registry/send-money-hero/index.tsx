"use client";

import { motion } from "motion/react";
import { ChevronDown, Building2, Apple, Play } from "lucide-react";

// Types
interface NavItem {
  label: string;
  href: string;
}

interface SendMoneyHeroProps {
  logo?: {
    icon?: React.ReactNode;
    text?: string;
  };
  navItems?: NavItem[];
  headline?: {
    line1?: string;
    line2?: string;
    line3?: string;
  };
  subheadline?: string;
  qrCodeText?: string;
  qrCodeSubtext?: string;
  ctaText?: string;
  transferCard?: {
    youSendLabel?: string;
    youSendCurrency?: string;
    feeLabel?: string;
    totalLabel?: string;
    rateLabel?: string;
    receiverLabel?: string;
    receiverCurrency?: string;
    deliveryLabel?: string;
    deliveryMethod?: string;
    deliveryTime?: string;
    buttonText?: string;
  };
  onCtaClick?: () => void;
  onSignUpClick?: () => void;
}

// Logo Icon Component
function SendAppLogo({ className = "h-8" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 100 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* SEND text */}
      <text
        x="0"
        y="22"
        fill="#1A1A1A"
        fontSize="18"
        fontWeight="700"
        fontFamily="system-ui, sans-serif"
      >
        SEND
      </text>
      {/* Decorative sun icon */}
      <circle cx="68" cy="10" r="5" fill="#FACC15" />
      <circle cx="68" cy="10" r="3" fill="#F97316" />
      {/* APP text */}
      <text
        x="0"
        y="38"
        fill="#1A1A1A"
        fontSize="18"
        fontWeight="700"
        fontFamily="system-ui, sans-serif"
      >
        APP
      </text>
      {/* Decorative flower */}
      <circle cx="50" cy="32" r="4" fill="#EF505B" />
    </svg>
  );
}

// Decorative flower/star shapes
function DecorativeFlower({
  color,
  size = 24,
  className = "",
}: {
  color: string;
  size?: number;
  className?: string;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 2C12 2 14 6 12 8C10 6 12 2 12 2ZM12 22C12 22 10 18 12 16C14 18 12 22 12 22ZM2 12C2 12 6 10 8 12C6 14 2 12 2 12ZM22 12C22 12 18 14 16 12C18 10 22 12 22 12ZM4.93 4.93C4.93 4.93 8.1 6.1 8.49 8.49C6.1 8.1 4.93 4.93 4.93 4.93ZM19.07 19.07C19.07 19.07 15.9 17.9 15.51 15.51C17.9 15.9 19.07 19.07 19.07 19.07ZM4.93 19.07C4.93 19.07 6.1 15.9 8.49 15.51C8.1 17.9 4.93 19.07 4.93 19.07ZM19.07 4.93C19.07 4.93 17.9 8.1 15.51 8.49C15.9 6.1 19.07 4.93 19.07 4.93Z"
        fill={color}
      />
      <circle cx="12" cy="12" r="3" fill={color} />
    </svg>
  );
}

// Star burst shape
function StarBurst({
  color,
  size = 20,
  className = "",
}: {
  color: string;
  size?: number;
  className?: string;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 0L13.5 10.5L24 12L13.5 13.5L12 24L10.5 13.5L0 12L10.5 10.5L12 0Z"
        fill={color}
      />
    </svg>
  );
}

// QR Code Component (simplified visual)
function QRCode({ className = "" }: { className?: string }) {
  return (
    <div
      className={`w-16 h-16 bg-white p-1 rounded border border-dashed border-gray-300 ${className}`}
    >
      <div className="w-full h-full grid grid-cols-7 grid-rows-7 gap-[1px]">
        {/* Simplified QR code pattern */}
        {Array.from({ length: 49 }).map((_, i) => {
          const row = Math.floor(i / 7);
          const col = i % 7;
          // Create QR-like pattern
          const isCorner =
            (row < 2 && col < 2) ||
            (row < 2 && col > 4) ||
            (row > 4 && col < 2);
          const isCenter = row === 3 && col === 3;
          const isRandom = Math.random() > 0.6;
          const isFilled = isCorner || isCenter || isRandom;
          return (
            <div
              key={i}
              className={`${isFilled ? "bg-gray-800" : "bg-transparent"}`}
            />
          );
        })}
      </div>
    </div>
  );
}

// Currency Flag Component
function CurrencyFlag({ currency }: { currency: string }) {
  if (currency === "GBP") {
    return (
      <div className="w-5 h-5 rounded-full overflow-hidden flex items-center justify-center bg-blue-600">
        <span className="text-white text-[8px] font-bold">UK</span>
      </div>
    );
  }
  if (currency === "USD") {
    return (
      <div className="w-5 h-5 rounded-full overflow-hidden flex items-center justify-center bg-gradient-to-b from-green-500 to-green-600">
        <span className="text-white text-[8px] font-bold">$</span>
      </div>
    );
  }
  return null;
}

// Transfer Card Component
function TransferCard({
  config,
  delay = 0,
}: {
  config: SendMoneyHeroProps["transferCard"];
  delay?: number;
}) {
  const {
    youSendLabel = "You Send",
    youSendCurrency = "GBP",
    feeLabel = "Fee",
    totalLabel = "Total to pay",
    rateLabel = "Rate",
    receiverLabel = "Receiver Gets",
    receiverCurrency = "USD",
    deliveryLabel = "DELIVERY METHOD",
    deliveryMethod = "Send to Bank Account",
    deliveryTime = "Transfers within minutes",
    buttonText = "Send Money",
  } = config || {};

  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ delay, duration: 0.7, ease: "easeOut" }}
      className="w-full max-w-[340px] bg-white rounded-2xl shadow-xl shadow-black/10 overflow-hidden"
    >
      {/* You Send Section */}
      <div className="p-5 pb-4">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm text-gray-600">{youSendLabel}</span>
          <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full border border-gray-200">
            <CurrencyFlag currency={youSendCurrency} />
            <span className="text-sm font-medium">{youSendCurrency}</span>
            <ChevronDown className="w-3.5 h-3.5 text-gray-400" />
          </div>
        </div>
        <div className="text-2xl font-light text-gray-400">
          <span className="text-gray-300">{"${symbol}"[0]}</span>0
        </div>
      </div>

      {/* Fee Details */}
      <div className="px-5 py-3 border-t border-gray-100">
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-500" />
              <span className="text-sm text-gray-600">{feeLabel}</span>
            </div>
            <span className="text-sm text-gray-900">0 GBP</span>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-orange-400" />
              <span className="text-sm text-gray-600">{totalLabel}</span>
            </div>
            <span className="text-sm text-gray-900">0.00 GBP</span>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-yellow-400" />
              <span className="text-sm text-gray-600">{rateLabel}</span>
            </div>
            <span className="text-sm text-gray-900">1 GBP = 1.2385266 USD</span>
          </div>
        </div>
      </div>

      {/* Receiver Gets */}
      <div className="px-5 py-4 border-t border-gray-100">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm text-gray-600">{receiverLabel}</span>
          <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full border border-gray-200">
            <CurrencyFlag currency={receiverCurrency} />
            <span className="text-sm font-medium">{receiverCurrency}</span>
            <ChevronDown className="w-3.5 h-3.5 text-gray-400" />
          </div>
        </div>
        <div className="text-2xl font-light text-gray-400">$0</div>
      </div>

      {/* Delivery Method */}
      <div className="px-5 py-4 border-t border-gray-100">
        <span className="text-[10px] font-medium text-gray-400 uppercase tracking-wider">
          {deliveryLabel}
        </span>
        <div className="flex items-center justify-between mt-2">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-yellow-100 flex items-center justify-center">
              <Building2 className="w-4 h-4 text-yellow-600" />
            </div>
            <div>
              <p className="text-sm font-medium text-gray-900">
                {deliveryMethod}
              </p>
              <p className="text-xs text-gray-400">{deliveryTime}</p>
            </div>
          </div>
          <ChevronDown className="w-4 h-4 text-gray-400" />
        </div>
      </div>

      {/* CTA Button */}
      <div className="p-5 pt-3">
        <button className="w-full py-3.5 bg-[#68309B] hover:bg-[#5a2a86] text-white font-medium rounded-full transition-colors">
          {buttonText}
        </button>
      </div>
    </motion.div>
  );
}

// Decorative blob shapes
function DecorativeBlob({
  className = "",
  color = "#EF505B",
}: {
  className?: string;
  color?: string;
}) {
  return (
    <svg
      className={className}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M50 0C77.6 0 100 22.4 100 50C100 77.6 77.6 100 50 100C22.4 100 0 77.6 0 50C0 22.4 22.4 0 50 0Z"
        fill={color}
      />
    </svg>
  );
}

// Main Component
export default function SendMoneyHero({
  logo,
  navItems = [
    { label: "Contact us", href: "#" },
    { label: "FAQs", href: "#" },
    { label: "Login", href: "#" },
  ],
  headline = {
    line1: "Send money",
    line2: "in a",
    line3: "heartbeat",
  },
  subheadline = "Make international transfers to local bank\naccounts and mobile money wallets.",
  qrCodeText = "Scan to download app. Available on\nAppstore and Playstore.",
  ctaText = "Sign up",
  transferCard,
  onCtaClick,
  onSignUpClick,
}: SendMoneyHeroProps) {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-[#FFF9F0]">
      {/* Decorative elements - top right corner gradient */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px]">
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(circle at top right, #68309B 0%, #4a2070 30%, transparent 70%)",
          }}
        />
        {/* Pink blob */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="absolute top-16 right-8 w-24 h-24 rounded-full bg-pink-200 opacity-80"
        />
      </div>

      {/* Navigation */}
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative z-20 flex items-center justify-between px-6 py-4 sm:px-8 lg:px-12"
      >
        {/* Logo */}
        <div className="flex items-center gap-2">
          {logo?.icon || <SendAppLogo className="h-10" />}
          {logo?.text && (
            <span className="text-lg font-bold text-gray-900">{logo.text}</span>
          )}
        </div>

        {/* Nav Items */}
        <div className="hidden sm:flex items-center gap-6">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
            >
              {item.label}
            </a>
          ))}
          <button
            onClick={onSignUpClick}
            className="px-5 py-2 bg-[#68309B] hover:bg-[#5a2a86] text-white text-sm font-medium rounded-full transition-colors"
          >
            {ctaText}
          </button>
        </div>
      </motion.nav>

      {/* Main Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 pt-8 pb-16 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Hero Text */}
          <div className="relative">
            {/* Decorative elements */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4, duration: 0.4 }}
              className="absolute -top-4 left-[180px]"
            >
              <DecorativeFlower color="#EF505B" size={28} />
            </motion.div>

            {/* Headline */}
            <div className="space-y-3">
              {/* Line 1: Send money */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="flex items-center gap-3"
              >
                <div className="inline-block px-6 py-2 bg-[#F5C5C7] rounded-full border-2 border-[#1A1A1A]">
                  <span className="text-3xl sm:text-4xl md:text-5xl font-medium text-gray-900">
                    {headline.line1}
                  </span>
                </div>
              </motion.div>

              {/* Line 2: in a */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="flex items-center gap-3 pl-8"
              >
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5, duration: 0.4 }}
                >
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-green-400 via-yellow-300 to-green-500" />
                </motion.div>
                <div className="inline-block px-5 py-1.5 bg-[#EF505B] rounded-full">
                  <span className="text-2xl sm:text-3xl md:text-4xl font-medium text-white italic">
                    {headline.line2}
                  </span>
                </div>
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.55, duration: 0.4 }}
                >
                  <StarBurst color="#FACC15" size={24} />
                </motion.div>
              </motion.div>

              {/* Line 3: heartbeat */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="flex items-center gap-3"
              >
                <div className="inline-block px-6 py-2 bg-[#F5C5C7] rounded-full border-2 border-[#1A1A1A]">
                  <span className="text-3xl sm:text-4xl md:text-5xl font-medium text-gray-900">
                    {headline.line3}
                  </span>
                </div>
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.6, duration: 0.4 }}
                >
                  <StarBurst color="#68309B" size={20} />
                </motion.div>
              </motion.div>
            </div>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="mt-8 text-gray-600 text-sm sm:text-base whitespace-pre-line leading-relaxed max-w-sm"
            >
              {subheadline}
            </motion.p>

            {/* QR Code Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="mt-8 flex items-center gap-4 p-4 border border-dashed border-gray-300 rounded-xl max-w-xs"
            >
              <QRCode />
              <div>
                <p className="text-xs text-gray-600 leading-relaxed">
                  {qrCodeText?.split("\n")[0]}
                  <br />
                  {qrCodeText?.split("\n")[1]}
                </p>
                <div className="flex items-center gap-2 mt-2">
                  <Apple className="w-4 h-4 text-gray-700" />
                  <Play className="w-4 h-4 text-gray-700" />
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Side - Transfer Card */}
          <div className="relative flex justify-center lg:justify-end">
            {/* Decorative pink blob behind card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 0.6, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="absolute top-20 right-0 w-64 h-64"
            >
              <DecorativeBlob className="w-full h-full" color="#F5A5A8" />
            </motion.div>

            <TransferCard config={transferCard} delay={0.4} />
          </div>
        </div>
      </div>

      {/* Bottom Illustration */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.8 }}
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-4xl pointer-events-none"
      >
        <img
          src="/registry/send-money-hero/illustration.png"
          alt="Money transfer illustration"
          className="w-full h-auto object-contain"
        />
      </motion.div>

      {/* Additional decorative elements */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="absolute bottom-20 left-20 hidden lg:block"
      >
        <DecorativeFlower color="#EF505B" size={40} />
      </motion.div>
    </section>
  );
}
