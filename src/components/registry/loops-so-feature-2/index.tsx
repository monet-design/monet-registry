"use client";

// ============================================================================
// CUSTOMIZATION
// ============================================================================

const COLORS = {
  light: {
    accent: "#FF6B35",
    accentHover: "#E55A2B",
  },
  dark: {
    accent: "#FF6B35",
    accentHover: "#FF8555",
  },
} as const;

// Integration logos
const INTEGRATIONS = [
  { name: "Webhooks", icon: "webhook" },
  { name: "Supabase", icon: "supabase" },
  { name: "Clerk", icon: "clerk" },
  { name: "Zapier", icon: "zapier" },
  { name: "Census", icon: "census" },
  { name: "Framer", icon: "framer" },
  { name: "Make", icon: "make" },
  { name: "Segment", icon: "segment" },
  { name: "Webflow", icon: "webflow" },
  { name: "Bubble", icon: "bubble" },
];

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { motion } from "motion/react";
import { useState } from "react";

interface LoopsSoFeature2Props {
  mode?: "light" | "dark";
}

export default function LoopsSoFeature2({
  mode = "light",
}: LoopsSoFeature2Props) {
  const colors = COLORS[mode];
  const isDark = mode === "dark";
  const [activeTab, setActiveTab] = useState("Create contact");

  const tabs = [
    "Create contact",
    "Update contact",
    "Delete contact",
    "Send event",
    "Send email",
  ];

  const codeExample = `{
  "email": "alice@example.com",
  "firstName": "Alice",
  "lastName": "Smith",
  "source": "app",
  "subscribed": true,
  "userGroup": "paying",
  "userId": "004"
}`;

  const features = [
    {
      title: "Simple integration with our Node SDK",
      subtitle: "npm i loops",
      icon: "npm",
      stat: "30K+ weekly downloads",
    },
    {
      title: "Supabase integration",
      icon: "supabase",
    },
    {
      title: "Open API",
      subtitle: "Quickly snap in our specs to get started",
      icon: "api",
    },
    {
      title: "Stripe integration",
      icon: "stripe",
    },
    {
      title: "Personalized digests in a snap",
      subtitle: "eventProperties",
      tags: ["email", "date", "planType", "newPlan", "oldPlan", "planPrice", "isLifetime", "planCost"],
    },
    {
      title: "We update our docs daily",
      icon: "docs",
    },
  ];

  return (
    <section
      className={`relative w-full py-20 ${isDark ? "bg-gray-950" : "bg-white"}`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <span
            className={`text-sm ${isDark ? "text-gray-400" : "text-gray-500"}`}
          >
            Developers
          </span>
          <h2
            className={`mt-2 text-3xl font-semibold tracking-tight sm:text-4xl ${
              isDark ? "text-white" : "text-gray-900"
            }`}
          >
            Simple integration with your stack
          </h2>
        </motion.div>

        {/* API Code Block */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className={`mb-8 overflow-hidden rounded-2xl border ${
            isDark ? "border-gray-800 bg-gray-900" : "border-gray-200 bg-white"
          }`}
        >
          {/* Tabs */}
          <div
            className={`flex gap-6 border-b px-6 ${
              isDark ? "border-gray-800" : "border-gray-100"
            }`}
          >
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`relative py-4 text-sm font-medium transition-colors ${
                  activeTab === tab
                    ? isDark
                      ? "text-white"
                      : "text-gray-900"
                    : isDark
                    ? "text-gray-500 hover:text-gray-300"
                    : "text-gray-400 hover:text-gray-600"
                }`}
              >
                {tab}
                {activeTab === tab && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-x-0 bottom-0 h-0.5 bg-gray-900 dark:bg-white"
                  />
                )}
              </button>
            ))}
          </div>

          {/* Code Block */}
          <div className="p-6">
            <div
              className={`rounded-lg p-4 ${
                isDark ? "bg-blue-950" : "bg-blue-50"
              }`}
            >
              <div className="flex items-center justify-between">
                <pre
                  className={`text-sm ${
                    isDark ? "text-blue-200" : "text-blue-900"
                  }`}
                >
                  <code>{codeExample}</code>
                </pre>
                <button
                  className={`rounded px-3 py-1 text-xs ${
                    isDark
                      ? "bg-gray-700 text-gray-300"
                      : "bg-white text-gray-600"
                  }`}
                >
                  Copy to clipboard
                </button>
              </div>
            </div>

            {/* API Endpoint */}
            <div
              className={`mt-4 flex items-center gap-2 rounded-lg border px-4 py-2 ${
                isDark
                  ? "border-gray-700 bg-gray-800"
                  : "border-gray-200 bg-gray-50"
              }`}
            >
              <span className="rounded bg-green-100 px-2 py-0.5 text-xs font-medium text-green-700">
                POST
              </span>
              <span
                className={`text-sm ${isDark ? "text-gray-300" : "text-gray-600"}`}
              >
                https://app.loops.so/api/v1/contacts/create
              </span>
              <button
                className={`ml-auto text-xs ${
                  isDark ? "text-gray-500" : "text-gray-400"
                }`}
              >
                Copy to clipboard
              </button>
            </div>
          </div>
        </motion.div>

        {/* Feature Cards Grid */}
        <div className="mb-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {/* Node SDK Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className={`col-span-2 rounded-2xl border p-6 ${
              isDark
                ? "border-gray-800 bg-gray-900"
                : "border-gray-200 bg-white"
            }`}
          >
            <code
              className={`text-xs ${isDark ? "text-gray-500" : "text-gray-400"}`}
            >
              npm i loops
            </code>
            <h3
              className={`mt-2 text-lg font-medium ${
                isDark ? "text-white" : "text-gray-900"
              }`}
            >
              Simple integration with our Node SDK
            </h3>
            <div className="mt-4 flex items-center gap-4">
              {/* Graph placeholder */}
              <div className="flex h-16 flex-1 items-end gap-1">
                {[40, 55, 45, 60, 50, 70, 65, 80, 75, 90, 85, 95].map((h, i) => (
                  <div
                    key={i}
                    className="flex-1 rounded-t bg-gradient-to-t from-purple-300 to-purple-100"
                    style={{ height: `${h}%` }}
                  />
                ))}
              </div>
              <span
                className={`text-xs ${isDark ? "text-gray-500" : "text-gray-400"}`}
              >
                30K+ weekly downloads
              </span>
            </div>
          </motion.div>

          {/* Supabase Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className={`flex flex-col items-center justify-center rounded-2xl border p-6 ${
              isDark
                ? "border-gray-800 bg-gray-900"
                : "border-gray-200 bg-white"
            }`}
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-emerald-500">
              <svg
                className="h-6 w-6 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
            </div>
            <span
              className={`mt-3 text-sm font-medium ${
                isDark ? "text-white" : "text-gray-900"
              }`}
            >
              Supabase integration
            </span>
          </motion.div>

          {/* Open API Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className={`flex flex-col items-center justify-center rounded-2xl border p-6 ${
              isDark
                ? "border-gray-800 bg-gray-900"
                : "border-gray-200 bg-white"
            }`}
          >
            <div
              className={`flex items-center gap-2 rounded border px-3 py-2 ${
                isDark ? "border-gray-700" : "border-gray-200"
              }`}
            >
              <span
                className={`text-xs font-medium ${
                  isDark ? "text-gray-400" : "text-gray-500"
                }`}
              >
                JSON
              </span>
              <span
                className={`text-xs ${isDark ? "text-gray-500" : "text-gray-400"}`}
              >
                YAML
              </span>
            </div>
            <span
              className={`mt-3 text-sm font-medium ${
                isDark ? "text-white" : "text-gray-900"
              }`}
            >
              Open API
            </span>
            <span
              className={`mt-1 text-center text-xs ${
                isDark ? "text-gray-500" : "text-gray-400"
              }`}
            >
              Quickly snap in our specs to get started
            </span>
          </motion.div>
        </div>

        {/* Second Row */}
        <div className="mb-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {/* Stripe Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className={`flex flex-col items-center justify-center rounded-2xl border p-6 ${
              isDark
                ? "border-gray-800 bg-gray-900"
                : "border-gray-200 bg-white"
            }`}
          >
            <span
              className={`text-2xl font-bold ${
                isDark ? "text-white" : "text-gray-900"
              }`}
            >
              stripe
            </span>
            <span
              className={`mt-2 text-sm ${
                isDark ? "text-gray-400" : "text-gray-500"
              }`}
            >
              Stripe integration
            </span>
          </motion.div>

          {/* Personalized Digests Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className={`col-span-2 rounded-2xl border p-6 ${
              isDark
                ? "border-gray-800 bg-gray-900"
                : "border-gray-200 bg-white"
            }`}
          >
            <div className="flex items-start justify-between">
              <div>
                <span
                  className={`text-xs font-medium ${
                    isDark ? "text-gray-400" : "text-gray-500"
                  }`}
                >
                  eventProperties
                </span>
                <h3
                  className={`mt-1 text-lg font-medium ${
                    isDark ? "text-white" : "text-gray-900"
                  }`}
                >
                  Personalized digests in a snap
                </h3>
              </div>
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              {[
                "email",
                "date",
                "planType",
                "newPlan",
                "oldPlan",
                "planPrice",
                "isLifetime",
                "planCost",
              ].map((tag) => (
                <span
                  key={tag}
                  className={`rounded-full px-3 py-1 text-xs ${
                    isDark
                      ? "bg-gray-800 text-gray-400"
                      : "bg-gray-100 text-gray-600"
                  }`}
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Docs Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className={`flex flex-col items-center justify-center rounded-2xl border p-6 ${
              isDark
                ? "border-gray-800 bg-gray-900"
                : "border-gray-200 bg-white"
            }`}
          >
            <div
              className={`flex h-12 w-12 items-center justify-center rounded-lg ${
                isDark ? "bg-gray-800" : "bg-gray-100"
              }`}
            >
              <svg
                className={`h-6 w-6 ${isDark ? "text-gray-400" : "text-gray-500"}`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
            </div>
            <span
              className={`mt-3 text-sm font-medium ${
                isDark ? "text-white" : "text-gray-900"
              }`}
            >
              We update our docs daily
            </span>
          </motion.div>
        </div>

        {/* Integrations Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h3
            className={`text-xl font-semibold ${
              isDark ? "text-white" : "text-gray-900"
            }`}
          >
            Integrations
          </h3>
          <p
            className={`mx-auto mt-2 max-w-lg text-sm ${
              isDark ? "text-gray-400" : "text-gray-600"
            }`}
          >
            Loops integrates with thousands of other platforms so you can sync
            contacts and trigger emails from around the internet.
          </p>
          <a
            href="#"
            className="mt-4 inline-flex items-center gap-1 text-sm font-medium"
            style={{ color: colors.accent }}
          >
            See all
            <svg
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </a>
        </motion.div>

        {/* Integration Logos */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-10 grid grid-cols-5 gap-4"
        >
          {INTEGRATIONS.map((integration) => (
            <div
              key={integration.name}
              className={`flex flex-col items-center justify-center rounded-xl border p-6 transition-shadow hover:shadow-lg ${
                isDark
                  ? "border-gray-800 bg-gray-900"
                  : "border-gray-200 bg-white"
              }`}
            >
              <div
                className={`flex h-10 w-10 items-center justify-center rounded-lg ${
                  isDark ? "bg-gray-800" : "bg-gray-100"
                }`}
              >
                <svg
                  className={`h-5 w-5 ${isDark ? "text-gray-400" : "text-gray-500"}`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <span
                className={`mt-3 text-sm ${
                  isDark ? "text-gray-300" : "text-gray-700"
                }`}
              >
                {integration.name}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
