"use client";

// ============================================================================
// CUSTOMIZATION - 이 섹션의 값들을 수정하여 프로젝트에 맞게 조정하세요
// ============================================================================

/**
 * 커스텀 색상 (브랜드 컬러)
 */
const COLORS = {
  light: {
    accent: "#3B82F6",
    accentHover: "#2563EB",
    green: "#22C55E",
    purple: "#A855F7",
  },
  dark: {
    accent: "#60A5FA",
    accentHover: "#3B82F6",
    green: "#4ADE80",
    purple: "#C084FC",
  },
} as const;

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { motion } from "motion/react";
import { Sparkles, ArrowLeftRight, Settings2, User } from "lucide-react";

interface Transaction {
  time: string;
  name: string;
  category?: {
    label: string;
    color: string;
  };
  isCategorizing?: boolean;
  amount: string;
  isPositive?: boolean;
}

interface SaaspoFeatureSectionsFintaProps {
  mode?: "light" | "dark";
  title?: string;
  highlightedWord?: string;
  subtitle?: string;
  transactions?: Transaction[];
  testimonial?: {
    quote: string;
    author: string;
    role: string;
  };
}

const defaultTransactions: Transaction[] = [
  {
    time: "1m ago",
    name: "Slack",
    category: { label: "Software", color: "#3B82F6" },
    amount: "-$25",
  },
  {
    time: "1m ago",
    name: "DoorDash",
    category: { label: "Food", color: "#22C55E" },
    amount: "-$50",
  },
  {
    time: "Just now",
    name: "Airbnb",
    isCategorizing: true,
    amount: "-$200",
  },
  {
    time: "Just now",
    name: "Y Combinator",
    isCategorizing: true,
    amount: "$500,000",
    isPositive: true,
  },
  {
    time: "Just now",
    name: "Stripe",
    isCategorizing: true,
    amount: "$15,000",
    isPositive: true,
  },
];

const defaultTestimonial = {
  quote:
    '"I used Quickbooks and bookkeepers but it was slow and clunky. Now Finta saves me time by auto-categorizing our transactions more accurately."',
  author: "Jacob Bank",
  role: "Founder at Relay.app",
};

export default function SaaspoFeatureSectionsFinta({
  mode = "light",
  title = "Free your time to",
  highlightedWord = "build",
  subtitle = "Your time as a founder is extremely valuable, don't waste it on emails or data entry.\nSet accounting on autopilot and replace QuickBooks + manual bookkeepers.",
  transactions = defaultTransactions,
  testimonial = defaultTestimonial,
}: SaaspoFeatureSectionsFintaProps) {
  const colors = COLORS[mode];

  return (
    <section className="relative w-full bg-white py-16 md:py-24">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
        className="mx-auto max-w-4xl px-6 text-center"
      >
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 md:text-4xl lg:text-5xl">
          {title}{" "}
          <span style={{ color: colors.accent }}>{highlightedWord}</span>
        </h2>
        <p className="mx-auto mt-4 max-w-2xl whitespace-pre-line text-base text-gray-600 md:text-lg">
          {subtitle}
        </p>
      </motion.div>

      {/* Auto-Categorization Card */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
        viewport={{ once: true }}
        className="mx-auto mt-12 max-w-5xl px-6"
      >
        <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            {/* Left: Feature Description */}
            <div className="p-8 md:w-1/3">
              <div className="flex items-center gap-2">
                <Sparkles
                  className="h-5 w-5"
                  style={{ color: colors.accent }}
                />
                <span
                  className="text-sm font-semibold tracking-wide"
                  style={{ color: colors.accent }}
                >
                  AUTO-CATEGORIZATION
                </span>
              </div>
              <p className="mt-4 text-gray-700">
                Transactions are automatically categorized and reconciled
                accurately in real-time.
              </p>
            </div>

            {/* Right: Transaction Table */}
            <div className="border-t border-gray-100 bg-gray-50/50 p-6 md:w-2/3 md:border-l md:border-t-0">
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <tbody>
                    {transactions.map((tx, idx) => (
                      <tr
                        key={idx}
                        className="border-b border-gray-100 last:border-0"
                      >
                        <td className="py-3 pr-4 text-gray-400">{tx.time}</td>
                        <td className="py-3 pr-4 font-medium text-gray-900">
                          {tx.name}
                        </td>
                        <td className="py-3 pr-4">
                          {tx.category ? (
                            <span
                              className="inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-medium"
                              style={{
                                backgroundColor: `${tx.category.color}15`,
                                color: tx.category.color,
                              }}
                            >
                              <span
                                className="h-2 w-2 rounded"
                                style={{ backgroundColor: tx.category.color }}
                              />
                              {tx.category.label}
                            </span>
                          ) : tx.isCategorizing ? (
                            <span
                              className="inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-xs font-medium"
                              style={{
                                borderColor: colors.accent,
                                color: colors.accent,
                              }}
                            >
                              <Sparkles className="h-3 w-3" />
                              Categorizing
                            </span>
                          ) : null}
                        </td>
                        <td
                          className={`py-3 text-right font-medium ${
                            tx.isPositive ? "text-green-600" : "text-gray-900"
                          }`}
                        >
                          {tx.amount}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Testimonial Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
        viewport={{ once: true }}
        className="mx-auto mt-8 max-w-5xl px-6"
      >
        <div className="rounded-2xl bg-gray-100 px-8 py-12 md:px-16 md:py-16">
          <blockquote className="text-xl font-semibold leading-relaxed text-gray-900 md:text-2xl lg:text-3xl">
            {testimonial.quote}
          </blockquote>
          <div className="mt-8 flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-300">
              <User className="h-6 w-6 text-gray-500" />
            </div>
            <div>
              <p className="font-semibold text-gray-900">{testimonial.author}</p>
              <p className="text-sm text-gray-500">{testimonial.role}</p>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Bottom Feature Cards */}
      <div className="mx-auto mt-8 grid max-w-5xl gap-6 px-6 md:grid-cols-2">
        {/* Auto-Match Transactions */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
          viewport={{ once: true }}
          className="rounded-2xl border border-gray-200 bg-white p-8"
        >
          {/* Bank Transfer Visual */}
          <div className="mb-8 flex flex-col items-center gap-2">
            {/* Brex Card */}
            <div className="flex w-full max-w-xs items-center justify-between rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gray-100">
                  <svg
                    className="h-5 w-5 text-gray-700"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M3 6h18v12H3V6zm2 2v8h14V8H5z" />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Brex</p>
                  <p className="text-xs text-gray-400">10:09AM</p>
                </div>
              </div>
              <span className="font-semibold text-gray-900">-$500,000</span>
            </div>

            {/* Arrow Icon */}
            <div
              className="flex h-8 w-8 items-center justify-center rounded-full text-white"
              style={{ backgroundColor: colors.accent }}
            >
              <ArrowLeftRight className="h-4 w-4" />
            </div>

            {/* Mercury Card */}
            <div className="flex w-full max-w-xs items-center justify-between rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gray-100">
                  <svg
                    className="h-5 w-5 text-gray-700"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <circle cx="12" cy="12" r="10" fillOpacity="0.2" />
                    <circle cx="12" cy="12" r="4" />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Mercury</p>
                  <p className="text-xs text-gray-400">10:09AM</p>
                </div>
              </div>
              <span className="font-semibold text-green-600">$500,000</span>
            </div>
          </div>

          {/* Feature Label */}
          <div className="text-center">
            <div className="mb-3 flex items-center justify-center gap-2">
              <ArrowLeftRight
                className="h-5 w-5"
                style={{ color: colors.accent }}
              />
              <span
                className="text-sm font-semibold tracking-wide"
                style={{ color: colors.accent }}
              >
                AUTO-MATCH TRANSACTIONS
              </span>
            </div>
            <p className="text-gray-600">
              Bank transfers are automatically matched and reconciled accurately
              in real-time.
            </p>
          </div>
        </motion.div>

        {/* Automation Rules */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
          viewport={{ once: true }}
          className="rounded-2xl border border-gray-200 bg-white p-8"
        >
          {/* Rules Builder Visual */}
          <div className="mb-8 rounded-xl border border-gray-200 bg-gray-50 p-4">
            {/* IF Section */}
            <div className="mb-3">
              <span className="text-xs font-medium text-gray-500">IF</span>
              <div className="mt-2 space-y-2">
                <div className="flex items-center gap-2 text-sm">
                  <span className="rounded border border-gray-200 bg-white px-3 py-1.5 text-blue-600">
                    Name
                  </span>
                  <span className="text-gray-400">is</span>
                  <span className="rounded border border-gray-200 bg-white px-3 py-1.5 text-gray-700">
                    Stripe
                  </span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <span className="rounded border border-gray-200 bg-white px-3 py-1.5 text-blue-600">
                    Product
                  </span>
                  <span className="text-gray-400">is</span>
                  <span className="rounded border border-gray-200 bg-white px-3 py-1.5 text-gray-700">
                    Annual plan
                  </span>
                </div>
              </div>
              <button className="mt-2 flex h-6 w-6 items-center justify-center rounded-full bg-gray-200 text-gray-500">
                +
              </button>
            </div>

            {/* THEN SET Section */}
            <div>
              <span className="text-xs font-medium text-gray-500">THEN SET</span>
              <div className="mt-2 space-y-2">
                <div className="flex items-center gap-2 text-sm">
                  <span className="rounded border border-gray-200 bg-white px-3 py-1.5 text-gray-400">
                    Category
                  </span>
                  <span className="text-gray-400">to</span>
                  <span className="rounded border border-gray-200 bg-white px-3 py-1.5 text-gray-700">
                    Revenue
                  </span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <span className="rounded border border-gray-200 bg-white px-3 py-1.5 text-gray-400">
                    Spread
                  </span>
                  <span className="text-gray-400">to</span>
                  <span className="rounded border border-gray-200 bg-white px-3 py-1.5 text-gray-700">
                    Yearly
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Feature Label */}
          <div className="text-center">
            <div className="mb-3 flex items-center justify-center gap-2">
              <Settings2
                className="h-5 w-5"
                style={{ color: colors.purple }}
              />
              <span
                className="text-sm font-semibold tracking-wide"
                style={{ color: colors.purple }}
              >
                AUTOMATION RULES
              </span>
            </div>
            <p className="text-gray-600">
              Create powerful custom rules to automatically categorize and tag
              transactions.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
