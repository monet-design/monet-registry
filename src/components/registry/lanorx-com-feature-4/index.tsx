"use client";

// ============================================================================
// CUSTOMIZATION - 이 섹션의 값들을 수정하여 프로젝트에 맞게 조정하세요
// ============================================================================

/**
 * 커스텀 색상 (브랜드 컬러)
 * - grayscale 텍스트는 Tailwind semantic color 사용 (text-gray-900 등)
 * - 여기에는 브랜드 고유 컬러만 정의
 */
const COLORS = {
  light: {
    accent: "#171717",
    accentHover: "#262626",
    dnsValue: "#DC2626", // red-600 for DNS values
  },
  dark: {
    accent: "#FAFAFA",
    accentHover: "#E5E5E5",
    dnsValue: "#F87171", // red-400 for DNS values in dark mode
  },
} as const;

/**
 * 이미지 에셋
 */
const IMAGES = {} as const;

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { motion } from "motion/react";
import { Globe, Check, Zap } from "lucide-react";

interface LanorxComFeature4Props {
  mode?: "light" | "dark";
}

export default function LanorxComFeature4({
  mode = "light",
}: LanorxComFeature4Props) {
  const isDark = mode === "dark";
  const colors = COLORS[mode];

  return (
    <section
      className={`py-24 md:py-36 relative ${
        isDark
          ? "bg-gradient-to-b from-neutral-950 to-neutral-900"
          : "bg-gradient-to-b from-white to-neutral-50"
      }`}
    >
      <div className="max-w-5xl container mx-auto px-6">
        {/* Header */}
        <div className="mb-12">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span
              className={`text-xs font-light uppercase tracking-widest mb-6 block ${
                isDark ? "text-neutral-500" : "text-neutral-500"
              }`}
            >
              Domain Management
            </span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className={`text-3xl md:text-4xl font-light tracking-tight ${
              isDark ? "text-white" : "text-neutral-900"
            }`}
          >
            Launch on your own domain
          </motion.h2>
        </div>

        {/* Domain Cards - Top Row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid md:grid-cols-2 gap-6 mb-6"
        >
          {/* Custom Domain Card */}
          <div
            className={`p-6 rounded-2xl border ${
              isDark
                ? "bg-neutral-900 border-neutral-800"
                : "bg-white border-neutral-200"
            }`}
          >
            <div className="flex items-center gap-2 mb-4">
              <Globe
                className={`w-5 h-5 ${
                  isDark ? "text-neutral-400" : "text-neutral-500"
                }`}
              />
              <span
                className={`text-sm font-light ${
                  isDark ? "text-neutral-400" : "text-neutral-500"
                }`}
              >
                Custom Domain
              </span>
            </div>
            <div
              className={`p-4 rounded-lg mb-4 ${
                isDark ? "bg-neutral-800" : "bg-neutral-50"
              }`}
            >
              <code
                className={`text-base font-mono ${
                  isDark ? "text-white" : "text-neutral-900"
                }`}
              >
                waitlist.yoursite.com
              </code>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-emerald-500" />
              <span
                className={`text-sm font-light ${
                  isDark ? "text-neutral-400" : "text-neutral-500"
                }`}
              >
                SSL included
              </span>
            </div>
          </div>

          {/* Lanorx Subdomain Card */}
          <div
            className={`p-6 rounded-2xl border ${
              isDark
                ? "bg-neutral-900 border-neutral-800"
                : "bg-white border-neutral-200"
            }`}
          >
            <div className="flex items-center gap-2 mb-4">
              <Zap
                className={`w-5 h-5 ${
                  isDark ? "text-neutral-400" : "text-neutral-500"
                }`}
              />
              <span
                className={`text-sm font-light ${
                  isDark ? "text-neutral-400" : "text-neutral-500"
                }`}
              >
                Lanorx Subdomain
              </span>
            </div>
            <div
              className={`p-4 rounded-lg mb-4 ${
                isDark ? "bg-neutral-800" : "bg-neutral-50"
              }`}
            >
              <code
                className={`text-base font-mono ${
                  isDark ? "text-white" : "text-neutral-900"
                }`}
              >
                yourproject.lanorx.com
              </code>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-emerald-500" />
              <span
                className={`text-sm font-light ${
                  isDark ? "text-neutral-400" : "text-neutral-500"
                }`}
              >
                Instant setup
              </span>
            </div>
          </div>
        </motion.div>

        {/* DNS Configuration */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className={`p-6 rounded-2xl border mb-12 ${
            isDark
              ? "bg-neutral-900 border-neutral-800"
              : "bg-white border-neutral-200"
          }`}
        >
          <h3
            className={`text-base font-normal mb-4 ${
              isDark ? "text-white" : "text-neutral-900"
            }`}
          >
            DNS Configuration
          </h3>
          <div className="space-y-3">
            {/* CNAME Record */}
            <div
              className={`flex flex-wrap items-center gap-x-8 gap-y-2 p-3 rounded-lg ${
                isDark ? "bg-neutral-800" : "bg-neutral-50"
              }`}
            >
              <div className="flex items-center gap-2">
                <span
                  className={`text-xs font-light ${
                    isDark ? "text-neutral-500" : "text-neutral-500"
                  }`}
                >
                  Type:
                </span>
                <span style={{ color: colors.dnsValue }} className="font-mono text-sm">
                  CNAME
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span
                  className={`text-xs font-light ${
                    isDark ? "text-neutral-500" : "text-neutral-500"
                  }`}
                >
                  Name:
                </span>
                <span
                  className={`font-mono text-sm ${
                    isDark ? "text-white" : "text-neutral-900"
                  }`}
                >
                  waitlist
                </span>
              </div>
              <div className="flex items-center gap-2 ml-auto">
                <span
                  className={`text-xs font-light ${
                    isDark ? "text-neutral-500" : "text-neutral-500"
                  }`}
                >
                  Value:
                </span>
                <span style={{ color: colors.dnsValue }} className="font-mono text-sm">
                  cname.lanorx.com
                </span>
              </div>
            </div>

            {/* A Record */}
            <div
              className={`flex flex-wrap items-center gap-x-8 gap-y-2 p-3 rounded-lg ${
                isDark ? "bg-neutral-800" : "bg-neutral-50"
              }`}
            >
              <div className="flex items-center gap-2">
                <span
                  className={`text-xs font-light ${
                    isDark ? "text-neutral-500" : "text-neutral-500"
                  }`}
                >
                  Type:
                </span>
                <span style={{ color: colors.dnsValue }} className="font-mono text-sm">
                  A
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span
                  className={`text-xs font-light ${
                    isDark ? "text-neutral-500" : "text-neutral-500"
                  }`}
                >
                  Name:
                </span>
                <span
                  className={`font-mono text-sm ${
                    isDark ? "text-white" : "text-neutral-900"
                  }`}
                >
                  @
                </span>
              </div>
              <div className="flex items-center gap-2 ml-auto">
                <span
                  className={`text-xs font-light ${
                    isDark ? "text-neutral-500" : "text-neutral-500"
                  }`}
                >
                  Value:
                </span>
                <span style={{ color: colors.dnsValue }} className="font-mono text-sm">
                  76.76.21.21
                </span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className={`text-base font-light leading-relaxed mb-12 max-w-2xl ${
            isDark ? "text-neutral-500" : "text-neutral-500"
          }`}
        >
          Build trust from day one. Use your custom domain or lanorx.com
          subdomain to start collecting signups.
        </motion.p>

        {/* Setup Options - Bottom Row */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* Custom Domain Setup Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className={`p-6 rounded-2xl border ${
              isDark
                ? "bg-neutral-900 border-neutral-800"
                : "bg-white border-neutral-200"
            }`}
          >
            <h3
              className={`text-lg font-normal mb-2 ${
                isDark ? "text-white" : "text-neutral-900"
              }`}
            >
              Custom Domain Setup
            </h3>
            <p
              className={`text-sm font-light mb-6 ${
                isDark ? "text-neutral-500" : "text-neutral-500"
              }`}
            >
              Connect your own domain in 4 easy steps
            </p>
            <div className="space-y-3">
              {[
                { text: "Enter your domain", done: true },
                { text: "Configure DNS records", done: true },
                { text: "Verify domain", done: false, inProgress: true },
              ].map((step, idx) => (
                <div
                  key={idx}
                  className={`flex items-center gap-3 p-3 rounded-lg ${
                    isDark ? "bg-neutral-800" : "bg-neutral-50"
                  }`}
                >
                  <div
                    className={`w-6 h-6 rounded-full flex items-center justify-center ${
                      step.done
                        ? isDark
                          ? "bg-white"
                          : "bg-neutral-900"
                        : step.inProgress
                          ? "bg-amber-500"
                          : isDark
                            ? "bg-neutral-700"
                            : "bg-neutral-200"
                    }`}
                  >
                    {step.done ? (
                      <Check
                        className={`w-4 h-4 ${
                          isDark ? "text-neutral-900" : "text-white"
                        }`}
                      />
                    ) : (
                      <span
                        className={`text-xs font-medium ${
                          step.inProgress
                            ? "text-white"
                            : isDark
                              ? "text-neutral-400"
                              : "text-neutral-500"
                        }`}
                      >
                        {idx + 1}
                      </span>
                    )}
                  </div>
                  <span
                    className={`text-sm font-light ${
                      isDark ? "text-white" : "text-neutral-900"
                    }`}
                  >
                    {step.text}
                  </span>
                  {step.inProgress && (
                    <span className="ml-auto px-2 py-1 text-xs font-medium rounded bg-amber-500 text-white">
                      In progress
                    </span>
                  )}
                </div>
              ))}
            </div>
            <div className="mt-6 pt-4 border-t border-neutral-200 dark:border-neutral-800">
              <h4
                className={`text-base font-medium mb-1 ${
                  isDark ? "text-white" : "text-neutral-900"
                }`}
              >
                Custom domains
              </h4>
              <p
                className={`text-sm font-light ${
                  isDark ? "text-neutral-500" : "text-neutral-500"
                }`}
              >
                One-click domain connection. SSL included.
              </p>
            </div>
          </motion.div>

          {/* Lanorx Subdomain Setup Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className={`p-6 rounded-2xl border ${
              isDark
                ? "bg-neutral-900 border-neutral-800"
                : "bg-white border-neutral-200"
            }`}
          >
            <h3
              className={`text-lg font-normal mb-2 ${
                isDark ? "text-white" : "text-neutral-900"
              }`}
            >
              Lanorx Subdomain
            </h3>
            <p
              className={`text-sm font-light mb-6 ${
                isDark ? "text-neutral-500" : "text-neutral-500"
              }`}
            >
              Get started instantly with a lanorx.com subdomain
            </p>

            {/* Subdomain Input */}
            <div
              className={`p-4 rounded-lg mb-4 ${
                isDark ? "bg-neutral-800" : "bg-neutral-50"
              }`}
            >
              <label
                className={`text-xs font-light block mb-2 ${
                  isDark ? "text-neutral-500" : "text-neutral-500"
                }`}
              >
                Choose your subdomain
              </label>
              <div className="flex items-center gap-2">
                <div
                  className={`flex-1 py-1 border-b ${
                    isDark ? "border-neutral-700" : "border-neutral-300"
                  }`}
                >
                  <span
                    className={`font-mono text-sm ${
                      isDark ? "text-white" : "text-neutral-900"
                    }`}
                  >
                    myproject
                  </span>
                </div>
                <span
                  className={`text-sm font-light ${
                    isDark ? "text-neutral-500" : "text-neutral-500"
                  }`}
                >
                  .lanorx.com
                </span>
              </div>
            </div>

            {/* Available Status */}
            <div className="flex items-center gap-2 mb-4">
              <Check className="w-4 h-4 text-emerald-500" />
              <span
                className={`text-sm font-light ${
                  isDark ? "text-neutral-400" : "text-neutral-500"
                }`}
              >
                Available
              </span>
            </div>

            {/* Preview */}
            <div
              className={`p-4 rounded-lg mb-6 ${
                isDark ? "bg-neutral-800" : "bg-neutral-50"
              }`}
            >
              <label
                className={`text-xs font-light block mb-2 ${
                  isDark ? "text-neutral-500" : "text-neutral-500"
                }`}
              >
                Preview
              </label>
              <div className="flex items-center gap-2">
                <Globe
                  className={`w-4 h-4 ${
                    isDark ? "text-neutral-500" : "text-neutral-400"
                  }`}
                />
                <code
                  className={`text-sm font-mono ${
                    isDark ? "text-emerald-400" : "text-emerald-600"
                  }`}
                >
                  myproject.lanorx.com
                </code>
              </div>
            </div>

            {/* Bottom Description */}
            <div className="pt-4 border-t border-neutral-200 dark:border-neutral-800">
              <h4
                className={`text-base font-medium mb-1 ${
                  isDark ? "text-white" : "text-neutral-900"
                }`}
              >
                Lanorx subdomains
              </h4>
              <p
                className={`text-sm font-light ${
                  isDark ? "text-neutral-500" : "text-neutral-500"
                }`}
              >
                yourproject.lanorx.com subdomain (Starter plan+)
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
