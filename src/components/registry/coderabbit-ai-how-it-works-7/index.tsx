"use client";

import { useState } from "react";
import { motion } from "motion/react";

interface CoderabbitAiHowItWorks7Props {
  mode?: "light" | "dark";
}

const CheckIcon = () => (
  <svg className="h-5 w-5 text-[#2DD4BF]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
  </svg>
);

export default function CoderabbitAiHowItWorks7({
  mode = "dark",
}: CoderabbitAiHowItWorks7Props) {
  const [activeTab, setActiveTab] = useState<"saas" | "self-hosted">("saas");

  const saasSteps = [
    "Install the GitHub or GitLab app.",
    "Optionally configure the review tools and task trackers like Jira & Linear.",
    "Raise your next pull request.",
    "CodeRabbit posts the review!",
  ];

  const selfHostedSteps = [
    "Deploy CodeRabbit on your own infrastructure.",
    "Configure integrations with your existing tools.",
    "Set up your review policies and guidelines.",
    "Start reviewing code with full data control.",
  ];

  const steps = activeTab === "saas" ? saasSteps : selfHostedSteps;

  return (
    <section className="relative w-full bg-black py-20">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-3xl bg-zinc-900 p-8 md:p-12"
        >
          {/* Header with Tabs */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-12">
            <h2 className="text-3xl font-bold text-white md:text-4xl">
              How CodeRabbit works.
            </h2>

            {/* Tabs */}
            <div className="flex rounded-full bg-zinc-800 p-1">
              <button
                onClick={() => setActiveTab("saas")}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                  activeTab === "saas"
                    ? "bg-white text-black"
                    : "text-zinc-400 hover:text-white"
                }`}
              >
                SaaS
              </button>
              <button
                onClick={() => setActiveTab("self-hosted")}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                  activeTab === "self-hosted"
                    ? "bg-white text-black"
                    : "text-zinc-400 hover:text-white"
                }`}
              >
                Self-hosted
              </button>
            </div>
          </div>

          {/* Content Grid */}
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 items-center">
            {/* Code Review Preview */}
            <div className="rounded-2xl bg-pink-100 p-6">
              <div className="rounded-xl bg-white shadow-lg p-4">
                <div className="flex items-center gap-2 mb-4">
                  <div className="h-8 w-8 rounded-full bg-gradient-to-br from-orange-400 to-pink-500 flex items-center justify-center">
                    <span className="text-white text-xs font-bold">CR</span>
                  </div>
                  <span className="font-semibold text-orange-500">coderabbitai</span>
                  <span className="rounded bg-zinc-200 px-2 py-0.5 text-xs text-zinc-600">bot</span>
                </div>
                <div className="rounded-lg bg-orange-50 border border-orange-200 p-3 mb-3">
                  <p className="text-sm text-orange-700">
                    Status <span className="font-bold">400</span> may not be appropriate
                  </p>
                  <p className="text-xs text-zinc-500 mt-1">
                    Status code 400 may not be appropriate for all use cases where this function is called. It is suggested to use 404.
                  </p>
                </div>
                <div className="space-y-2">
                  <div className="h-8 w-full rounded bg-zinc-100" />
                  <div className="h-8 w-full rounded bg-zinc-100" />
                </div>
              </div>
            </div>

            {/* Steps */}
            <div>
              <h3 className="text-xl font-bold text-white mb-2">
                Effortless AI code reviews: Line by line improvement in code quality and security
              </h3>
              <p className="text-zinc-400 mb-8">
                {activeTab === "saas"
                  ? "Benefit from instant feature updates and round-the-clock support, all without the hassle of managing your own infrastructure. With CodeRabbit SaaS, you're just a few steps away from enhancing your code quality."
                  : "Take full control of your code review infrastructure while maintaining the same powerful AI capabilities."}
              </p>

              <ul className="space-y-4">
                {steps.map((step, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <CheckIcon />
                    <span className="text-zinc-300">{step}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
