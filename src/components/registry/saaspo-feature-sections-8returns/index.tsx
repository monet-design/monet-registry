"use client";

// ============================================================================
// CUSTOMIZATION - 이 섹션의 값들을 수정하여 프로젝트에 맞게 조정하세요
// ============================================================================

/**
 * 커스텀 색상 (브랜드 컬러)
 */
const COLORS = {
  light: {
    accent: "#22C55E",
    accentHover: "#16A34A",
    teal: "#0D9488",
    lime: "#BEF264",
  },
  dark: {
    accent: "#22C55E",
    accentHover: "#16A34A",
    teal: "#0D9488",
    lime: "#BEF264",
  },
} as const;

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { useState } from "react";
import { motion } from "motion/react";
import { Check, ChevronRight, Package, X } from "lucide-react";

interface Tab {
  id: string;
  label: string;
}

interface FeatureCard {
  title: string;
  description: string;
  mockup: React.ReactNode;
}

interface SaaspoFeatureSections8returnsProps {
  mode?: "light" | "dark";
  title?: string;
  subtitle?: string;
  tabs?: Tab[];
  features?: FeatureCard[];
}

// Return Status Mockup Component
function ReturnStatusMockup() {
  const steps = [
    { label: "Registered", completed: true },
    { label: "Received", completed: true },
    { label: "Inspected", completed: false },
    { label: "Completed", completed: false },
  ];

  return (
    <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100">
      <div className="flex items-center gap-3 mb-5">
        <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
          <Package className="w-6 h-6 text-gray-600" />
        </div>
        <div>
          <p className="font-semibold text-gray-900 text-sm">Your return status</p>
          <p className="text-gray-500 text-xs">Order: #16318R</p>
        </div>
      </div>
      <div className="space-y-3">
        {steps.map((step, index) => (
          <div key={index} className="flex items-center gap-3">
            <div className="flex flex-col items-center">
              <div
                className={`w-5 h-5 rounded-full flex items-center justify-center ${
                  step.completed ? "bg-green-500" : "bg-gray-200"
                }`}
              >
                {step.completed && <Check className="w-3 h-3 text-white" />}
              </div>
              {index < steps.length - 1 && (
                <div className="w-px h-4 bg-gray-200 mt-1" />
              )}
            </div>
            <span
              className={`text-sm ${
                step.completed ? "text-gray-900" : "text-gray-400"
              }`}
            >
              {step.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

// Logistics Table Mockup Component
function LogisticsMockup() {
  const orders = [
    { id: "16398R", customer: "Saugat Yadav", status: "Completed", statusColor: "bg-green-100 text-green-700" },
    { id: "16308R", customer: "Jake James", status: "On Hold", statusColor: "bg-yellow-100 text-yellow-700" },
    { id: "17303R", customer: "Mike Walia", status: "Received", statusColor: "bg-purple-100 text-purple-700" },
    { id: "16258R", customer: "Phil Heday", status: "Cancelled", statusColor: "bg-red-100 text-red-700" },
    { id: "16678R", customer: "Ben Kings", status: "Open", statusColor: "bg-green-100 text-green-700" },
  ];

  return (
    <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100 overflow-hidden">
      <table className="w-full text-xs">
        <thead>
          <tr className="text-gray-400 text-left">
            <th className="pb-3 font-medium">ORDER</th>
            <th className="pb-3 font-medium">DATE</th>
            <th className="pb-3 font-medium">CUSTOMER</th>
            <th className="pb-3 font-medium">STATUS</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-50">
          {orders.map((order, index) => (
            <tr key={index} className="text-gray-700">
              <td className="py-2.5">{order.id}</td>
              <td className="py-2.5">
                <div className="w-8 h-1 bg-gray-200 rounded" />
              </td>
              <td className="py-2.5">{order.customer}</td>
              <td className="py-2.5">
                <span className={`px-2 py-1 rounded text-[10px] font-medium ${order.statusColor}`}>
                  {order.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

// Rule Builder Mockup Component
function RuleBuilderMockup() {
  return (
    <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100">
      <h4 className="font-semibold text-gray-900 mb-4">Rule #1</h4>
      <div className="space-y-2.5 text-xs">
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-gray-500">If</span>
          <span className="bg-teal-600 text-white px-2.5 py-1 rounded font-medium">country</span>
          <span className="text-gray-500">equals</span>
          <span className="bg-lime-300 text-gray-900 px-2.5 py-1 rounded font-medium">Germany</span>
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-gray-500">and</span>
          <span className="bg-teal-600 text-white px-2.5 py-1 rounded font-medium">return window</span>
          <span className="text-gray-500">&lt;</span>
          <span className="bg-lime-300 text-gray-900 px-2.5 py-1 rounded font-medium">30</span>
          <span className="text-gray-500">then</span>
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <span className="bg-teal-600 text-white px-2.5 py-1 rounded font-medium">shipping method</span>
          <span className="text-gray-500">equals</span>
          <span className="bg-lime-300 text-gray-900 px-2.5 py-1 rounded font-medium">DHL</span>
        </div>
      </div>
      <div className="mt-4 pt-4 border-t border-gray-100">
        <p className="text-xs text-gray-500 mb-2">Blocked items</p>
        <div className="inline-flex items-center gap-1.5 bg-gray-100 px-3 py-1.5 rounded text-xs text-gray-700">
          Gift Voucher
          <X className="w-3 h-3 text-gray-400" />
        </div>
      </div>
    </div>
  );
}

const defaultTabs: Tab[] = [
  { id: "automation", label: "Returns automation" },
  { id: "retention", label: "Customer retention" },
  { id: "prevention", label: "Returns prevention" },
];

const defaultFeatures: FeatureCard[] = [
  {
    title: "Self-serve returns portal",
    description: "Enhance customer satisfaction and reduce support workload with our automated returns portal.",
    mockup: <ReturnStatusMockup />,
  },
  {
    title: "Logistics",
    description: "Automate manual tasks and gain full transparency with 8returns' comprehensive logistics solution.",
    mockup: <LogisticsMockup />,
  },
  {
    title: "Customizable return policy",
    description: "Save time, reduce costs, and promote sustainability with dynamic return policies tailored to your business needs.",
    mockup: <RuleBuilderMockup />,
  },
];

export default function SaaspoFeatureSections8returns({
  mode = "light",
  title = "Deliver a first-class personalized\ncustomer experience",
  subtitle = "Deliver a branded and seamless return experience tailored to your customers' needs, ensuring a positive journey that aligns with your brand's identity.",
  tabs = defaultTabs,
  features = defaultFeatures,
}: SaaspoFeatureSections8returnsProps) {
  const [activeTab, setActiveTab] = useState(tabs[0]?.id || "");
  const colors = COLORS[mode];

  return (
    <section className="relative w-full bg-white py-20 px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl lg:text-[44px] font-bold text-gray-900 leading-tight whitespace-pre-line mb-5">
            {title}
          </h2>
          <p className="text-gray-500 text-base md:text-lg max-w-3xl mx-auto leading-relaxed">
            {subtitle}
          </p>
        </motion.div>

        {/* Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex justify-center mb-14"
        >
          <div className="inline-flex bg-gray-100 rounded-full p-1.5">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-200 ${
                  activeTab === tab.id
                    ? "bg-white text-gray-900 shadow-sm"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
              className="flex flex-col"
            >
              {/* Mockup Container */}
              <div className="bg-gray-50 rounded-2xl p-6 mb-6 min-h-[280px] flex items-center justify-center">
                {feature.mockup}
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-4 flex-grow">
                {feature.description}
              </p>
              <button
                className="inline-flex items-center gap-2 text-sm font-medium text-gray-900 group"
                style={{ color: colors.accent }}
              >
                Learn more
                <span
                  className="w-6 h-6 rounded-full flex items-center justify-center transition-transform group-hover:translate-x-1"
                  style={{ backgroundColor: colors.accent }}
                >
                  <ChevronRight className="w-4 h-4 text-white" />
                </span>
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
