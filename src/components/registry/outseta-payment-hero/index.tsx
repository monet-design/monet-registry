"use client";

// ============================================================================
// CUSTOMIZATION - 이 섹션의 값들을 수정하여 프로젝트에 맞게 조정하세요
// ============================================================================

const COLORS = {
  light: {},
  dark: {},
} as const;

const IMAGES = {} as const;

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { motion } from "motion/react";
import "./font.css";

interface OutsetaPaymentHeroProps {
  mode?: "light" | "dark";
  label?: string;
  heading?: string;
  description?: string;
}

export default function OutsetaPaymentHero({
  mode = "light",
  label = "PAYMENTS",
  heading = "Connect to Stripe.\nStart selling.",
  description = "Outseta is an all-in-one billing system purpose built for SaaS and membership businesses.\nPayments, subscription management, and tax compliance integrated with your site—and\nthe rest of your tech stack—in minutes.",
}: OutsetaPaymentHeroProps) {
  return (
    <section className="relative w-full overflow-hidden bg-white py-24 md:py-32 lg:py-40">
      {/* Background gradient blob */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="absolute -left-32 top-1/2 h-[500px] w-[500px] -translate-y-1/2 md:-left-16 md:h-[600px] md:w-[600px] lg:left-0 lg:h-[700px] lg:w-[700px]"
        >
          {/* Main orange/yellow gradient */}
          <div
            className="absolute inset-0 rounded-full blur-3xl"
            style={{
              background:
                "radial-gradient(circle at 60% 40%, #FDB93B 0%, #F7BB4A 30%, #FFEFCF 70%, transparent 100%)",
            }}
          />
          {/* Purple/maroon accent */}
          <div
            className="absolute left-1/4 top-1/2 h-1/3 w-1/3 rounded-full blur-2xl"
            style={{
              background:
                "radial-gradient(circle, rgba(81, 44, 59, 0.6) 0%, transparent 70%)",
            }}
          />
        </motion.div>
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
        {/* Label */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-6 text-sm font-semibold uppercase tracking-[0.2em]"
          style={{ color: "#6B2D5B" }}
        >
          {label}
        </motion.p>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mb-8 whitespace-pre-line text-4xl font-black leading-[1.1] tracking-tight text-[#1a1a1a] md:text-5xl lg:text-6xl"
          style={{ fontFamily: "'DM Sans', sans-serif" }}
        >
          {heading}
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="mx-auto max-w-2xl whitespace-pre-line text-base leading-relaxed text-gray-600 md:text-lg"
        >
          {description}
        </motion.p>
      </div>
    </section>
  );
}
