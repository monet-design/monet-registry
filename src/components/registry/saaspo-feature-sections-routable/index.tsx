"use client";

// ============================================================================
// CUSTOMIZATION - Modify these values to customize the component
// ============================================================================

/**
 * Custom colors (brand colors)
 * - grayscale text uses Tailwind semantic colors (text-gray-900 etc)
 * - Only define brand-specific colors here
 */
const COLORS = {
  light: {
    accent: "#22C55E", // Green for checkmark/success
    accentHover: "#16A34A",
    invoiceBg: "#F0EBFF", // Light purple invoice background
    highlightRow: "#E8E0FF", // Purple highlight for table rows
  },
  dark: {
    accent: "#4ADE80",
    accentHover: "#22C55E",
    invoiceBg: "#1E1B4B",
    highlightRow: "#312E81",
  },
} as const;

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowRight, Check } from "lucide-react";
import "./font.css";

interface FeatureTab {
  id: string;
  title: string;
  description?: string;
  hasExplore?: boolean;
}

interface InvoiceItem {
  item: string;
  qty: string;
  rate: string;
  amount: string;
  isHighlighted?: boolean;
}

interface SaaspoFeatureSectionsRoutableProps {
  mode?: "light" | "dark";
  title?: string;
  titleAccent?: string;
  titleEnd?: string;
  subtitle?: string;
  sectionTitle?: string;
  features?: FeatureTab[];
  invoiceCompany?: string;
  invoiceAddress?: string[];
  invoicePhone?: string;
  billTo?: {
    name: string;
    address: string[];
  };
  invoiceDetails?: {
    number: string;
    date: string;
    amountDue: string;
  };
  invoiceItems?: InvoiceItem[];
  invoiceSubtotal?: string;
  invoiceTax?: string;
  invoiceTotal?: string;
  invoiceNotes?: string[];
  progressSteps?: {
    label: string;
    time?: string;
    isComplete?: boolean;
    isCurrent?: boolean;
  }[];
}

const defaultFeatures: FeatureTab[] = [
  {
    id: "invoice-capture",
    title: "Invoice Capture",
    description:
      "Eliminate manual invoice entry and create bills in seconds with Routable's AI-powered OCR.",
    hasExplore: true,
  },
  { id: "approval-workflows", title: "Approval Workflows" },
  { id: "payment-reconciliation", title: "Payment Reconciliation" },
  { id: "po-matching", title: "PO Matching" },
  { id: "role-based-access", title: "Role-based Access Control" },
  { id: "compliance", title: "Compliance" },
];

const defaultInvoiceItems: InvoiceItem[] = [
  { item: "Software License", qty: "1", rate: "$499.00", amount: "$499.00" },
  {
    item: "Development Services",
    qty: "5hrs",
    rate: "$125.00",
    amount: "$1,501.50",
    isHighlighted: true,
  },
  {
    item: "Support",
    qty: "10hrs",
    rate: "$75.00",
    amount: "$750.00",
    isHighlighted: true,
  },
];

const defaultProgressSteps = [
  { label: "Scan complete", time: "2.75 sec", isComplete: true },
  { label: "Creating bill", isCurrent: false },
  { label: "Sending for approval", isCurrent: false },
];

export default function SaaspoFeatureSectionsRoutable({
  mode = "light",
  title = "The complete",
  titleAccent = "AP automation",
  titleEnd = "platform for modern businesses",
  subtitle = "Accounts payable isn't just a single click. It's a comprehensive supply chain that requires a secure, streamlined solution.",
  sectionTitle = "Automate your\naccounts payable",
  features = defaultFeatures,
  invoiceCompany = "Sparks Software Solutions",
  invoiceAddress = ["456 Innovation Way", "Sedona, WA 12345"],
  invoicePhone = "022-611-0087",
  billTo = {
    name: "Technogadget Inc",
    address: ["456 Innovation Way,", "APT. 201, Austin,", "TX 78704"],
  },
  invoiceDetails = {
    number: "#486737",
    date: "June 12",
    amountDue: "$2,028.30",
  },
  invoiceItems = defaultInvoiceItems,
  invoiceSubtotal = "$1,874.75",
  invoiceTax = "$154.30",
  invoiceTotal = "$2,028.30",
  invoiceNotes = [
    "Please remit funds to:",
    "Global Bank",
    "ABA:66790988",
    "Account:1258761",
  ],
  progressSteps = defaultProgressSteps,
}: SaaspoFeatureSectionsRoutableProps) {
  const colors = COLORS[mode];
  const [activeTab, setActiveTab] = useState(features[0]?.id || "invoice-capture");

  const activeFeature = features.find((f) => f.id === activeTab);

  return (
    <section
      className={`relative w-full py-20 px-4 md:px-8 lg:px-16 ${
        mode === "dark" ? "bg-gray-950 text-white" : "bg-white text-gray-900"
      }`}
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl lg:text-[3.25rem] leading-tight font-normal mb-6">
            {title}{" "}
            <span
              className="italic"
              style={{ fontFamily: "'Instrument Serif', Georgia, serif" }}
            >
              {titleAccent}
            </span>
            <br className="hidden md:block" />
            {" "}{titleEnd}
          </h1>
          <p
            className={`text-base md:text-lg max-w-2xl mx-auto ${
              mode === "dark" ? "text-gray-400" : "text-gray-600"
            }`}
          >
            {subtitle}
          </p>
        </motion.div>

        {/* Dotted Separator */}
        <div className="flex justify-center mb-16">
          <div
            className={`w-full max-w-4xl border-t border-dotted ${
              mode === "dark" ? "border-gray-700" : "border-gray-300"
            }`}
          />
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left Column - Feature Tabs */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          >
            <h2
              className="text-3xl md:text-4xl lg:text-[2.75rem] leading-tight font-normal mb-10"
              style={{ fontFamily: "'Instrument Serif', Georgia, serif" }}
            >
              {sectionTitle.split("\n").map((line, i) => (
                <span key={i}>
                  {line}
                  {i < sectionTitle.split("\n").length - 1 && <br />}
                </span>
              ))}
            </h2>

            {/* Tabs */}
            <div className="space-y-1">
              {features.map((feature) => (
                <div key={feature.id}>
                  <button
                    onClick={() => setActiveTab(feature.id)}
                    className={`w-full text-left py-3 px-4 rounded-md transition-all duration-200 ${
                      activeTab === feature.id
                        ? mode === "dark"
                          ? "bg-gray-800"
                          : "bg-gray-50"
                        : "hover:bg-gray-50 dark:hover:bg-gray-800"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      {/* Vertical line indicator */}
                      <div
                        className={`w-0.5 h-5 rounded-full transition-all ${
                          activeTab === feature.id
                            ? mode === "dark"
                              ? "bg-white"
                              : "bg-gray-900"
                            : "bg-transparent"
                        }`}
                      />
                      <span
                        className={`text-base font-medium ${
                          activeTab === feature.id
                            ? mode === "dark"
                              ? "text-white"
                              : "text-gray-900"
                            : mode === "dark"
                            ? "text-gray-500"
                            : "text-gray-500"
                        }`}
                      >
                        {feature.title}
                      </span>
                    </div>
                  </button>

                  {/* Expandable Content */}
                  <AnimatePresence>
                    {activeTab === feature.id && feature.description && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="pl-8 pr-4 pb-4">
                          <p
                            className={`text-sm mb-3 ${
                              mode === "dark" ? "text-gray-400" : "text-gray-600"
                            }`}
                          >
                            {feature.description}
                          </p>
                          {feature.hasExplore && (
                            <a
                              href="#"
                              className={`inline-flex items-center gap-1.5 text-sm font-medium transition-colors ${
                                mode === "dark"
                                  ? "text-white hover:text-gray-300"
                                  : "text-gray-900 hover:text-gray-600"
                              }`}
                            >
                              Explore
                              <ArrowRight className="w-4 h-4" />
                            </a>
                          )}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Column - Invoice UI */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
            className="flex flex-col"
          >
            {/* Invoice Card */}
            <div
              className="rounded-xl p-6 md:p-8 shadow-sm"
              style={{ backgroundColor: colors.invoiceBg }}
            >
              {/* Company Header */}
              <div className="mb-6">
                <h3
                  className={`text-lg font-semibold mb-2 ${
                    mode === "dark" ? "text-white" : "text-gray-900"
                  }`}
                >
                  {invoiceCompany}
                </h3>
                <div
                  className={`text-xs font-mono ${
                    mode === "dark" ? "text-gray-400" : "text-gray-600"
                  }`}
                >
                  {invoiceAddress.map((line, i) => (
                    <div key={i}>{line}</div>
                  ))}
                  <div>{invoicePhone}</div>
                </div>
              </div>

              {/* Bill To & Invoice Details */}
              <div className="flex justify-between mb-6 pb-4 border-b border-gray-300/30">
                <div>
                  <div
                    className={`text-xs font-semibold mb-1 ${
                      mode === "dark" ? "text-gray-300" : "text-gray-700"
                    }`}
                  >
                    Bill to:{" "}
                    <span className="font-normal">{billTo.name}</span>
                  </div>
                  <div
                    className={`text-xs font-mono ${
                      mode === "dark" ? "text-gray-400" : "text-gray-600"
                    }`}
                  >
                    {billTo.address.map((line, i) => (
                      <div key={i}>{line}</div>
                    ))}
                  </div>
                </div>
                <div
                  className={`text-right text-xs ${
                    mode === "dark" ? "text-gray-400" : "text-gray-600"
                  }`}
                >
                  <div>
                    <span className="font-semibold">Invoice number:</span>{" "}
                    {invoiceDetails.number}
                  </div>
                  <div>
                    <span className="font-semibold">Invoice date:</span>{" "}
                    {invoiceDetails.date}
                  </div>
                  <div>
                    <span className="font-semibold">Amount due:</span>{" "}
                    {invoiceDetails.amountDue}
                  </div>
                </div>
              </div>

              {/* Items Table */}
              <div className="mb-4">
                <table className="w-full text-xs">
                  <thead>
                    <tr
                      className={`border-b ${
                        mode === "dark" ? "border-gray-600" : "border-gray-300/50"
                      }`}
                    >
                      <th className="text-left py-2 font-semibold">Item</th>
                      <th className="text-center py-2 font-semibold">Qty</th>
                      <th className="text-center py-2 font-semibold">Rate</th>
                      <th className="text-right py-2 font-semibold">Amount</th>
                    </tr>
                  </thead>
                  <tbody>
                    {invoiceItems.map((item, i) => (
                      <tr
                        key={i}
                        className={`border-b ${
                          mode === "dark" ? "border-gray-600/50" : "border-gray-300/30"
                        }`}
                        style={
                          item.isHighlighted
                            ? { backgroundColor: colors.highlightRow }
                            : undefined
                        }
                      >
                        <td className="py-2.5 px-1">{item.item}</td>
                        <td className="py-2.5 text-center underline">
                          {item.qty}
                        </td>
                        <td className="py-2.5 text-center underline">
                          {item.rate}
                        </td>
                        <td className="py-2.5 text-right underline">
                          {item.amount}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Totals */}
              <div className="flex justify-end mb-4">
                <div className="text-xs text-right">
                  <div className="mb-1">
                    <span className="text-gray-600 dark:text-gray-400">Subtotal:</span>{" "}
                    <span className="underline">{invoiceSubtotal}</span>
                  </div>
                  <div className="mb-1">
                    <span className="text-gray-600 dark:text-gray-400">Tax(8.25%):</span>{" "}
                    <span className="underline">{invoiceTax}</span>
                  </div>
                  <div className="font-semibold mt-2">
                    <span>Total:</span>{" "}
                    <span className="underline">{invoiceTotal}</span>
                  </div>
                </div>
              </div>

              {/* Notes */}
              <div
                className={`text-xs font-mono pt-4 border-t ${
                  mode === "dark"
                    ? "border-gray-600/50 text-gray-400"
                    : "border-gray-300/30 text-gray-600"
                }`}
              >
                <div className="font-semibold mb-1">Notes:</div>
                {invoiceNotes.map((note, i) => (
                  <div key={i}>{note}</div>
                ))}
              </div>
            </div>

            {/* Progress Steps */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex items-center justify-center gap-2 mt-6 flex-wrap"
            >
              {progressSteps.map((step, i) => (
                <div key={i} className="flex items-center gap-2">
                  {/* Step */}
                  <div className="flex items-center gap-2">
                    {step.isComplete ? (
                      <div
                        className="w-5 h-5 rounded-full flex items-center justify-center"
                        style={{ backgroundColor: colors.accent }}
                      >
                        <Check className="w-3 h-3 text-white" />
                      </div>
                    ) : (
                      <div
                        className={`w-4 h-4 rounded-full border-2 ${
                          mode === "dark"
                            ? "border-gray-600"
                            : "border-gray-300"
                        }`}
                      />
                    )}
                    <span
                      className={`text-sm ${
                        step.isComplete
                          ? mode === "dark"
                            ? "text-white"
                            : "text-gray-900"
                          : mode === "dark"
                          ? "text-gray-500"
                          : "text-gray-500"
                      }`}
                    >
                      {step.label}
                      {step.time && (
                        <span className="text-gray-400 ml-1">({step.time})</span>
                      )}
                    </span>
                  </div>

                  {/* Connector */}
                  {i < progressSteps.length - 1 && (
                    <span
                      className={`text-lg ${
                        mode === "dark" ? "text-gray-600" : "text-gray-300"
                      }`}
                    >
                      &raquo;
                    </span>
                  )}
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
