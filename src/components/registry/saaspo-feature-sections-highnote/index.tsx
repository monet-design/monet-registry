"use client";

// ============================================================================
// CUSTOMIZATION - Modify these values to match your brand
// ============================================================================

/**
 * Custom colors (brand colors)
 * - grayscale text uses Tailwind semantic colors (text-gray-900 etc)
 * - Define only unique brand colors here
 */
const COLORS = {
  light: {
    background: "#F8F6F1",
    cardBackground: "#FFFFFF",
    text: "#1A1A1A",
    textMuted: "#666666",
    border: "#E8E4DC",
    visaCard: "#E8E4DC",
    accent: "#F59E0B",
    buttonPrimary: "#1A1A1A",
  },
  dark: {
    background: "#1A1A1A",
    cardBackground: "#262626",
    text: "#FFFFFF",
    textMuted: "#999999",
    border: "#404040",
    visaCard: "#333333",
    accent: "#F59E0B",
    buttonPrimary: "#FFFFFF",
  },
} as const;

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { motion } from "motion/react";
import {
  Wallet,
  Settings,
  LayoutDashboard,
  TrendingUp,
  Check,
  CreditCard,
} from "lucide-react";

interface FeatureItem {
  icon: React.ReactNode;
  title: string;
  description: string;
}

interface LedgerItem {
  label: string;
  value: string;
  strikethrough?: boolean;
}

interface TransactionField {
  label: string;
  checked?: boolean;
}

interface SaaspoFeatureSectionsHighnoteProps {
  mode?: "light" | "dark";
  title?: string;
  subtitle?: string;
  paymentSolutionTitle?: string;
  paymentSolutionDescription?: string;
  unifiedLedgersTitle?: string;
  unifiedLedgersDescription?: string;
  transactionDetailTitle?: string;
  transactionDetailDescription?: string;
  ledgerItems?: LedgerItem[];
  transactionFields?: TransactionField[];
  features?: FeatureItem[];
}

export default function SaaspoFeatureSectionsHighnote({
  mode = "light",
  title = "A Purpose Built\nPayments Platform",
  subtitle = "Built for innovators seeking a better payments solution.\nHighnote helps reduce costs, drive revenue, and optimize\nyour business for success.",
  paymentSolutionTitle = "Complete Payment Solution",
  paymentSolutionDescription = "Highnote's fully integrated platform is built to handle your payment needs seamlessly, whether you need to issue cards, accept payments, or move money more efficiently.",
  unifiedLedgersTitle = "Unified Ledgers",
  unifiedLedgersDescription = "Our API driven ledger provides full visibility into all funds movements across your product with detailed tracking of all activity.",
  transactionDetailTitle = "Rich Transaction Detail",
  transactionDetailDescription = "Receive detailed transaction payloads directly from the card networks that empower you to write advanced logic around authorization approvals.",
  ledgerItems = [
    { label: "Cash", value: "$1,022,232.81", strikethrough: true },
    { label: "Available Cash", value: "$778,052.01" },
    { label: "Fund in Hold", value: "$0.00" },
    { label: "Authorization", value: "$243,519.28", strikethrough: true },
    { label: "Refund Authorization", value: "$345.37" },
  ],
  transactionFields = [
    { label: "Card Network", checked: false },
    { label: "Approved Amount", checked: true },
    { label: "Card Present", checked: false },
    { label: "Created At", checked: true },
    { label: "Advice", checked: false },
    { label: "Account Holder Present", checked: true },
    { label: "Merchant Category", checked: false },
    { label: "Card Present", checked: true },
  ],
  features = [
    {
      icon: <Wallet className="w-6 h-6" />,
      title: "Flexible Account Structures",
      description:
        "Our platform was designed to work with any business type and model, supporting your unique needs.",
    },
    {
      icon: <Settings className="w-6 h-6" />,
      title: "Full Program Management",
      description:
        "We are with you every step of the way, from implementation to ongoing program optimization.",
    },
    {
      icon: <LayoutDashboard className="w-6 h-6" />,
      title: "World-Class Dashboard",
      description:
        "Streamline your operations and support your customers from Highnote's user-friendly Dashboard.",
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Designed for Scale",
      description:
        "Our secure platform scales with you and is trusted by developers, startups, and large corporations.",
    },
  ],
}: SaaspoFeatureSectionsHighnoteProps) {
  const colors = COLORS[mode];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section
      className="relative w-full py-16 lg:py-24"
      style={{ backgroundColor: colors.background }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 lg:mb-16"
        >
          <h2
            className="text-4xl sm:text-5xl lg:text-6xl mb-6"
            style={{
              fontFamily: "'Instrument Serif', serif",
              fontStyle: "italic",
              color: colors.text,
              lineHeight: 1.1,
            }}
          >
            {title.split("\n").map((line, i) => (
              <span key={i}>
                {line}
                {i < title.split("\n").length - 1 && <br />}
              </span>
            ))}
          </h2>
          <p
            className="text-sm sm:text-base max-w-xl mx-auto"
            style={{ color: colors.textMuted, lineHeight: 1.6 }}
          >
            {subtitle.split("\n").map((line, i) => (
              <span key={i}>
                {line}
                {i < subtitle.split("\n").length - 1 && <br />}
              </span>
            ))}
          </p>
        </motion.div>

        {/* Complete Payment Solution Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="rounded-2xl p-6 lg:p-8 mb-4"
          style={{ backgroundColor: colors.cardBackground }}
        >
          <div className="mb-6">
            <h3
              className="text-lg font-semibold mb-2"
              style={{ color: colors.text }}
            >
              {paymentSolutionTitle}
            </h3>
            <p
              className="text-sm max-w-md"
              style={{ color: colors.textMuted, lineHeight: 1.5 }}
            >
              {paymentSolutionDescription}
            </p>
          </div>

          {/* Payment UI Mockup */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
            {/* VISA Card */}
            <div className="lg:col-span-3 flex items-end">
              <div
                className="w-full max-w-[180px] aspect-[1.5/1] rounded-xl p-4 flex flex-col justify-between"
                style={{ backgroundColor: colors.visaCard }}
              >
                <div
                  className="text-xs font-semibold tracking-wide"
                  style={{ color: colors.text }}
                >
                  BETTER
                  <br />
                  <span className="font-bold">BUILT</span>
                </div>
                <div
                  className="text-lg font-bold tracking-wider"
                  style={{ color: colors.text }}
                >
                  VISA
                </div>
              </div>
            </div>

            {/* Dashboard UI */}
            <div
              className="lg:col-span-6 rounded-xl border overflow-hidden"
              style={{
                borderColor: colors.border,
                backgroundColor: colors.cardBackground,
              }}
            >
              {/* Dashboard Header */}
              <div
                className="flex items-center gap-2 px-4 py-2 border-b text-xs"
                style={{ borderColor: colors.border, color: colors.textMuted }}
              >
                <div className="flex gap-1">
                  <div className="w-2 h-2 rounded-full bg-red-400" />
                  <div className="w-2 h-2 rounded-full bg-yellow-400" />
                  <div className="w-2 h-2 rounded-full bg-green-400" />
                </div>
                <span className="ml-2">Manage</span>
                <span className="ml-auto">Search</span>
              </div>

              <div className="flex">
                {/* Sidebar */}
                <div
                  className="w-32 border-r p-3 space-y-2 text-xs hidden sm:block"
                  style={{ borderColor: colors.border }}
                >
                  <div style={{ color: colors.textMuted }}>Account Holders</div>
                  <div style={{ color: colors.textMuted }}>Accounts</div>
                  <div style={{ color: colors.textMuted }}>Transactions</div>
                  <div style={{ color: colors.textMuted }}>
                    Transaction Declines
                  </div>
                  <div style={{ color: colors.textMuted }}>Product Settings</div>
                </div>

                {/* Main Content */}
                <div className="flex-1 p-4">
                  <h4
                    className="text-base font-medium mb-1"
                    style={{ color: colors.text }}
                  >
                    Good Afternoon
                  </h4>
                  <p className="text-xs mb-4" style={{ color: colors.textMuted }}>
                    Here is an overview for the day
                  </p>

                  <div className="grid grid-cols-3 gap-4 mb-4">
                    <div>
                      <div
                        className="text-xs mb-1"
                        style={{ color: colors.textMuted }}
                      >
                        Settled Volume
                      </div>
                      <div
                        className="text-sm font-semibold"
                        style={{ color: colors.text }}
                      >
                        $1,170,203.12
                      </div>
                    </div>
                    <div>
                      <div
                        className="text-xs mb-1"
                        style={{ color: colors.textMuted }}
                      >
                        Authorization Volume
                      </div>
                      <div
                        className="text-sm font-semibold"
                        style={{ color: colors.text }}
                      >
                        $1,309,392.10
                      </div>
                    </div>
                    <div>
                      <div
                        className="text-xs mb-1"
                        style={{ color: colors.textMuted }}
                      >
                        Authorization Rate
                      </div>
                      <div
                        className="text-sm font-semibold"
                        style={{ color: colors.text }}
                      >
                        92.7%
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <div
                        className="text-xs mb-1"
                        style={{ color: colors.textMuted }}
                      >
                        Transaction Declines
                      </div>
                      <div
                        className="text-lg font-semibold"
                        style={{ color: colors.text }}
                      >
                        10,203
                      </div>
                    </div>
                    <div>
                      <div
                        className="text-xs mb-1"
                        style={{ color: colors.textMuted }}
                      >
                        Applications Created
                      </div>
                      <div
                        className="text-lg font-semibold"
                        style={{ color: colors.text }}
                      >
                        1,601
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Payment Form */}
            <div
              className="lg:col-span-3 rounded-xl border p-4"
              style={{
                borderColor: colors.border,
                backgroundColor: colors.cardBackground,
              }}
            >
              <div className="flex items-center gap-2 mb-4">
                <div
                  className="w-8 h-8 rounded-lg flex items-center justify-center"
                  style={{ backgroundColor: colors.accent }}
                >
                  <CreditCard className="w-4 h-4 text-white" />
                </div>
                <div>
                  <div
                    className="text-sm font-medium"
                    style={{ color: colors.text }}
                  >
                    Coffee Beans
                  </div>
                  <div className="text-xs" style={{ color: colors.textMuted }}>
                    8oz
                  </div>
                </div>
                <div
                  className="ml-auto text-sm font-semibold"
                  style={{ color: colors.text }}
                >
                  $20.00
                </div>
              </div>

              <div className="space-y-3 text-xs">
                <div>
                  <label style={{ color: colors.textMuted }}>Name</label>
                  <div
                    className="h-8 mt-1 border rounded px-2 flex items-center"
                    style={{ borderColor: colors.border }}
                  />
                </div>
                <div>
                  <label style={{ color: colors.textMuted }}>
                    Card Information
                  </label>
                  <div
                    className="h-8 mt-1 border rounded px-2 flex items-center"
                    style={{ borderColor: colors.border }}
                  />
                  <div
                    className="h-8 mt-1 border rounded px-2 flex items-center"
                    style={{ borderColor: colors.border }}
                  />
                </div>
              </div>

              <button
                className="w-full mt-4 py-2 rounded text-sm font-medium text-white"
                style={{ backgroundColor: colors.buttonPrimary }}
              >
                Pay
              </button>
            </div>
          </div>
        </motion.div>

        {/* Unified Ledgers & Rich Transaction Detail */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-12 lg:mb-16">
          {/* Unified Ledgers */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="rounded-2xl p-6"
            style={{ backgroundColor: colors.cardBackground }}
          >
            <h3
              className="text-lg font-semibold mb-2"
              style={{ color: colors.text }}
            >
              {unifiedLedgersTitle}
            </h3>
            <p
              className="text-sm mb-6 max-w-sm"
              style={{ color: colors.textMuted, lineHeight: 1.5 }}
            >
              {unifiedLedgersDescription}
            </p>

            {/* Ledger Card */}
            <div
              className="rounded-xl border p-4"
              style={{ borderColor: colors.border }}
            >
              {/* Airbnb Header */}
              <div className="flex items-center justify-between mb-4 pb-4 border-b" style={{ borderColor: colors.border }}>
                <div className="flex items-center gap-3">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: "#FF5A5F" }}
                  >
                    <svg
                      className="w-5 h-5 text-white"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M12 2C8.5 2 6.5 4.5 5 7.5C3.5 10.5 2.5 14 5 17C7.5 20 10 22 12 22C14 22 16.5 20 19 17C21.5 14 20.5 10.5 19 7.5C17.5 4.5 15.5 2 12 2Z" />
                    </svg>
                  </div>
                  <div>
                    <div
                      className="text-sm font-medium"
                      style={{ color: colors.text }}
                    >
                      Airbnb
                    </div>
                    <div
                      className="text-xs"
                      style={{ color: colors.textMuted }}
                    >
                      @airplstring...
                    </div>
                  </div>
                </div>
                <div
                  className="text-sm font-semibold"
                  style={{ color: colors.text }}
                >
                  $882.08
                </div>
              </div>

              {/* Ledger Items */}
              <div className="space-y-2">
                {ledgerItems.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between text-sm"
                  >
                    <span style={{ color: colors.textMuted }}>{item.label}</span>
                    <span
                      className={item.strikethrough ? "line-through" : ""}
                      style={{ color: colors.text }}
                    >
                      {item.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Rich Transaction Detail */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="rounded-2xl p-6"
            style={{ backgroundColor: colors.cardBackground }}
          >
            <h3
              className="text-lg font-semibold mb-2"
              style={{ color: colors.text }}
            >
              {transactionDetailTitle}
            </h3>
            <p
              className="text-sm mb-6 max-w-sm"
              style={{ color: colors.textMuted, lineHeight: 1.5 }}
            >
              {transactionDetailDescription}
            </p>

            {/* Transaction Fields Grid */}
            <div className="grid grid-cols-2 gap-3">
              {transactionFields.map((field, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 rounded-lg border px-3 py-2"
                  style={{ borderColor: colors.border }}
                >
                  <div
                    className={`w-4 h-4 rounded flex items-center justify-center ${
                      field.checked ? "bg-green-100" : ""
                    }`}
                    style={{
                      border: field.checked
                        ? "none"
                        : `1px solid ${colors.border}`,
                    }}
                  >
                    {field.checked && (
                      <Check className="w-3 h-3 text-green-600" />
                    )}
                  </div>
                  <span className="text-xs" style={{ color: colors.textMuted }}>
                    {field.label}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom Features */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div key={index} variants={itemVariants} className="text-left">
              <div
                className="w-10 h-10 rounded-lg flex items-center justify-center mb-4"
                style={{
                  backgroundColor:
                    mode === "light" ? "rgba(0,0,0,0.05)" : "rgba(255,255,255,0.1)",
                }}
              >
                <span style={{ color: colors.text }}>{feature.icon}</span>
              </div>
              <h4
                className="text-sm font-semibold mb-2"
                style={{ color: colors.text }}
              >
                {feature.title}
              </h4>
              <p
                className="text-xs leading-relaxed"
                style={{ color: colors.textMuted }}
              >
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Google Font import */}
      <style jsx global>{`
        @import url("https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&display=swap");
      `}</style>
    </section>
  );
}
