"use client";

const COLORS = {
  light: {
    accent: "#1C1917",
    clay: "#D2886F",
    sand: "#F5F5F0",
    stone: "#E8E6E1",
  },
  dark: {
    accent: "#F5F5F0",
    clay: "#D2886F",
    sand: "#1C1917",
    stone: "#292524",
  },
} as const;

import { motion } from "motion/react";
import { useState } from "react";

interface LoadfastStoreRoi2Props {
  mode?: "light" | "dark";
}

export default function LoadfastStoreRoi2({
  mode = "light",
}: LoadfastStoreRoi2Props) {
  const colors = COLORS[mode];
  const isDark = mode === "dark";
  const [dailyTexts, setDailyTexts] = useState(30);

  const professions = [
    {
      title: "Customer Support",
      daily: "20 responses",
      saves: "40 min daily",
      description: "Template responses, FAQs, troubleshooting steps",
    },
    {
      title: "Sales Professional",
      daily: "15 emails",
      saves: "45 min daily",
      description: "Follow-ups, proposals, meeting invites",
    },
    {
      title: "Developer",
      daily: "50 snippets",
      saves: "50 min daily",
      description: "Code blocks, terminal commands, API keys",
    },
    {
      title: "Healthcare",
      daily: "30 notes",
      saves: "60 min daily",
      description: "Patient notes, prescriptions, referrals",
    },
  ];

  // ROI calculations based on slider value
  const dailyMinutes = Math.round(dailyTexts * 1.5);
  const weeklyMinutes = dailyMinutes * 5;
  const yearlyHours = Math.round((weeklyMinutes * 52) / 60);
  const dailyValue = Math.round(dailyMinutes * 0.63);
  const weeklyValue = dailyValue * 5;
  const yearlyValue = weeklyValue * 50;
  const paybackDays = Math.ceil(100 / dailyValue);

  return (
    <section
      className="py-16 lg:py-24"
      style={{ backgroundColor: colors.sand }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2
            className="font-serif font-normal text-3xl lg:text-5xl mb-4"
            style={{ color: colors.accent }}
          >
            Your LoadFast ROI on Day 1
          </h2>
          <p
            className="text-lg max-w-2xl mx-auto"
            style={{ color: `${colors.accent}99` }}
          >
            LoadFast pays for itself in less than one day. See how much time
            LoadFast saves you immediately.
          </p>
        </motion.div>

        {/* Profession Cards */}
        <div className="mb-16">
          <h3
            className="font-serif font-normal text-2xl text-center mb-8"
            style={{ color: colors.accent }}
          >
            Real Day 1 Examples by Profession
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {professions.map((prof, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="rounded-lg p-6 border transition-colors"
                style={{
                  backgroundColor: colors.stone,
                  borderColor: `${colors.accent}1A`,
                }}
              >
                <h4
                  className="font-medium text-lg mb-3"
                  style={{ color: colors.accent }}
                >
                  {prof.title}
                </h4>
                <div className="space-y-2 mb-3">
                  <div className="flex justify-between text-sm">
                    <span style={{ color: `${colors.accent}99` }}>Daily:</span>
                    <span
                      className="font-medium"
                      style={{ color: colors.accent }}
                    >
                      {prof.daily}
                    </span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span style={{ color: `${colors.accent}99` }}>Saves:</span>
                    <span className="font-medium" style={{ color: colors.clay }}>
                      {prof.saves}
                    </span>
                  </div>
                </div>
                <p
                  className="text-xs"
                  style={{ color: `${colors.accent}80` }}
                >
                  {prof.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ROI Calculator */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-lg p-8 lg:p-12"
          style={{ backgroundColor: colors.accent }}
        >
          <h3
            className="font-serif font-normal text-2xl lg:text-3xl text-center mb-8"
            style={{ color: colors.sand }}
          >
            Calculate Your Personal ROI
          </h3>

          <div className="max-w-2xl mx-auto">
            {/* Slider */}
            <div className="mb-8">
              <label
                className="block text-lg font-medium mb-4"
                style={{ color: `${colors.sand}E6` }}
              >
                How many repetitive texts do you type daily?
              </label>
              <div className="space-y-4">
                <input
                  type="range"
                  min="10"
                  max="100"
                  value={dailyTexts}
                  onChange={(e) => setDailyTexts(Number(e.target.value))}
                  className="w-full h-3 rounded-lg appearance-none cursor-pointer"
                  style={{
                    backgroundColor: `${colors.sand}33`,
                    accentColor: colors.clay,
                  }}
                />
                <div
                  className="flex justify-between text-sm"
                  style={{ color: `${colors.sand}B3` }}
                >
                  <span>10</span>
                  <span
                    className="text-2xl font-medium"
                    style={{ color: colors.sand }}
                  >
                    {dailyTexts}
                  </span>
                  <span>100</span>
                </div>
              </div>
            </div>

            {/* Results Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div
                className="rounded-lg p-6"
                style={{ backgroundColor: `${colors.sand}1A` }}
              >
                <h4
                  className="font-medium mb-4 text-lg"
                  style={{ color: colors.sand }}
                >
                  Time Saved
                </h4>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span style={{ color: `${colors.sand}B3` }}>Daily:</span>
                    <span
                      className="font-medium text-xl"
                      style={{ color: colors.sand }}
                    >
                      {dailyMinutes} minutes
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span style={{ color: `${colors.sand}B3` }}>Weekly:</span>
                    <span className="font-medium" style={{ color: colors.sand }}>
                      {weeklyMinutes} minutes
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span style={{ color: `${colors.sand}B3` }}>Yearly:</span>
                    <span
                      className="font-medium text-xl"
                      style={{ color: colors.clay }}
                    >
                      {yearlyHours} hours
                    </span>
                  </div>
                </div>
              </div>

              <div
                className="rounded-lg p-6"
                style={{ backgroundColor: `${colors.sand}1A` }}
              >
                <h4
                  className="font-medium mb-4 text-lg"
                  style={{ color: colors.sand }}
                >
                  Value Created
                </h4>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span style={{ color: `${colors.sand}B3` }}>Daily:</span>
                    <span
                      className="font-medium text-xl"
                      style={{ color: colors.sand }}
                    >
                      ${dailyValue}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span style={{ color: `${colors.sand}B3` }}>Weekly:</span>
                    <span className="font-medium" style={{ color: colors.sand }}>
                      ${weeklyValue}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span style={{ color: `${colors.sand}B3` }}>Yearly:</span>
                    <span
                      className="font-medium text-xl"
                      style={{ color: colors.clay }}
                    >
                      ${yearlyValue.toLocaleString()}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Payback Summary */}
            <div
              className="mt-8 text-center rounded-lg p-6"
              style={{ backgroundColor: `${colors.sand}1A` }}
            >
              <p
                className="text-2xl font-medium mb-2"
                style={{ color: colors.sand }}
              >
                LoadFast pays for itself in{" "}
                <span style={{ color: colors.clay }}>{paybackDays} days</span>
              </p>
              <p style={{ color: `${colors.sand}CC` }}>
                $100 investment returns ${yearlyValue.toLocaleString()} in value
                per year.
                <br />
                That's a{" "}
                <span className="font-medium" style={{ color: colors.clay }}>
                  {Math.round(yearlyValue / 100) * 100}x return
                </span>{" "}
                on your investment.
              </p>
            </div>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p
            className="text-lg mb-6"
            style={{ color: `${colors.accent}B3` }}
          >
            Stop losing money to repetitive typing. Start saving time today.
          </p>
          <button
            className="px-8 py-3 rounded-md text-base font-medium transition-colors"
            style={{
              backgroundColor: colors.clay,
              color: colors.sand,
            }}
          >
            Get LoadFast for $100 - Start Saving Now
          </button>
          <p
            className="text-sm mt-3"
            style={{ color: `${colors.accent}80` }}
          >
            Introductory price • 30-day money-back guarantee
          </p>
        </motion.div>
      </div>
    </section>
  );
}
