"use client";

// ============================================================================
// CUSTOMIZATION
// ============================================================================

const COLORS = {
  light: {
    background: "#1A1A1A",
    cardBg: "#242424",
    textPrimary: "#FFFFFF",
    textSecondary: "#9CA3AF",
    accent: "#E07B39",
    labelColor: "#E07B39",
    codeBg: "#1E1E1E",
  },
  dark: {
    background: "#1A1A1A",
    cardBg: "#242424",
    textPrimary: "#FFFFFF",
    textSecondary: "#9CA3AF",
    accent: "#E07B39",
    labelColor: "#E07B39",
    codeBg: "#1E1E1E",
  },
} as const;

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { motion } from "motion/react";
import { ArrowRight, Globe } from "lucide-react";

interface Step {
  number: number;
  title: string;
  description: string;
  visual: "code" | "logos" | "dashboard";
}

interface DatafaStHowItWorks2Props {
  mode?: "light" | "dark";
  label?: string;
  headline?: string;
  steps?: Step[];
  ctaText?: string;
  ctaHref?: string;
  trialText?: string;
}

const defaultSteps: Step[] = [
  {
    number: 1,
    title: "Install DataFast script",
    description: "You'll see beautiful web analytics in 1 minute. Oh, and the script loads super fast (4kb).",
    visual: "code",
  },
  {
    number: 2,
    title: "Connect revenue data",
    description: "Link your favorite payment processor so DataFast can attribute revenue to your traffic sources.",
    visual: "logos",
  },
  {
    number: 3,
    title: "Grow your business",
    description: "DataFast analyzes your funnel to find what makes people buy, and tells you exactly how to get more of them.",
    visual: "dashboard",
  },
];

export default function DatafaStHowItWorks2({
  mode = "dark",
  label = "HOW IT WORKS?",
  headline = "Find revenue opportunities in 3 steps",
  steps = defaultSteps,
  ctaText = "Add my website",
  ctaHref = "#",
  trialText = "14-day free trial. No card required",
}: DatafaStHowItWorks2Props) {
  const colors = COLORS[mode];

  const renderVisual = (type: string) => {
    switch (type) {
      case "code":
        return (
          <div
            className="h-full rounded-lg p-4 font-mono text-sm"
            style={{ backgroundColor: colors.codeBg }}
          >
            <div className="text-gray-500">1</div>
            <div>
              <span className="text-pink-400">&lt;script</span>
            </div>
            <div className="pl-4">
              <span className="text-blue-400">defer</span>
            </div>
            <div className="pl-4">
              <span className="text-blue-400">data-domain</span>
              <span className="text-white">=</span>
              <span className="text-green-400">&quot;unicorn.com&quot;</span>
            </div>
            <div className="pl-4">
              <span className="text-blue-400">src</span>
              <span className="text-white">=</span>
              <span className="text-green-400">&quot;https://datafa.st/js&quot;</span>
            </div>
            <div>
              <span className="text-pink-400">&lt;/script&gt;</span>
            </div>
          </div>
        );
      case "logos":
        return (
          <div className="flex h-full flex-col items-center justify-center gap-4 rounded-lg bg-white p-4">
            <div className="grid grid-cols-2 gap-3">
              {["Stripe", "Shopify", "Gumroad", "LemonSqueezy"].map((name) => (
                <div
                  key={name}
                  className="flex h-16 w-16 items-center justify-center rounded-lg bg-gray-100"
                >
                  <span className="text-xs font-medium text-gray-600">{name.substring(0, 2)}</span>
                </div>
              ))}
            </div>
          </div>
        );
      case "dashboard":
        return (
          <div className="h-full overflow-hidden rounded-lg bg-white p-3">
            <div className="mb-2 text-xs text-gray-500">Referrer</div>
            <div className="space-y-1.5">
              {[
                { name: "Direct/None", value: "1.1k" },
                { name: "Google", value: "583" },
                { name: "X", value: "213" },
                { name: "marclou.com", value: "209" },
              ].map((item, i) => (
                <div key={i} className="flex items-center justify-between text-sm">
                  <span className="text-gray-700">{item.name}</span>
                  <span className="text-gray-500">{item.value}</span>
                </div>
              ))}
            </div>
            <div className="mt-3 rounded bg-green-100 px-2 py-1 text-center text-xs text-green-700">
              Focus here
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <section
      className="w-full py-16 lg:py-24"
      style={{ backgroundColor: colors.background }}
    >
      <div className="mx-auto max-w-7xl px-4">
        {/* Header */}
        <div className="mb-12 text-center">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-4 inline-block text-sm font-medium tracking-wider"
            style={{ color: colors.labelColor }}
          >
            {label}
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-3xl font-bold md:text-5xl"
            style={{ color: colors.textPrimary }}
          >
            {headline}
          </motion.h2>
        </div>

        {/* Steps */}
        <div className="mb-16 grid grid-cols-1 gap-6 md:grid-cols-3">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + index * 0.1 }}
              className="relative"
            >
              {/* Arrow between steps */}
              {index < steps.length - 1 && (
                <div className="absolute -right-3 top-1/2 z-10 hidden -translate-y-1/2 text-gray-500 md:block">
                  <ArrowRight className="h-6 w-6" />
                </div>
              )}

              <div
                className="flex h-full flex-col rounded-xl border border-gray-700/50 p-5"
                style={{ backgroundColor: colors.cardBg }}
              >
                {/* Visual */}
                <div className="mb-4 h-40 overflow-hidden rounded-lg">
                  {renderVisual(step.visual)}
                </div>

                {/* Content */}
                <h3
                  className="mb-2 text-lg font-semibold"
                  style={{ color: colors.textPrimary }}
                >
                  {step.number}. {step.title}
                </h3>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: colors.textSecondary }}
                >
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="flex flex-col items-center gap-2"
        >
          <div className="flex items-center overflow-hidden rounded-lg border border-gray-700">
            <div className="flex items-center bg-gray-800 px-3 py-3">
              <Globe className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="website.com"
              className="w-48 bg-gray-800 px-3 py-3 text-white placeholder-gray-500 outline-none"
            />
          </div>
          <a
            href={ctaHref}
            className="flex w-64 items-center justify-center gap-2 rounded-lg px-6 py-3 font-semibold text-white transition-all hover:opacity-90"
            style={{ backgroundColor: colors.accent }}
          >
            {ctaText}
            <ArrowRight className="h-4 w-4" />
          </a>
          <p className="text-sm" style={{ color: colors.textSecondary }}>
            {trialText}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
