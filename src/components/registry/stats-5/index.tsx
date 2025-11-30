"use client";

import { motion } from "motion/react";

// Types
interface StatItem {
  value: string;
  label: string;
}

interface Stats5Props {
  title?: string;
  description?: string;
  stats?: StatItem[];
}

// Default stats data
const defaultStats: StatItem[] = [
  {
    value: "2M+",
    label: "Tickets Delivered This Month",
  },
  {
    value: "46K+",
    label: "Active Customers Rate",
  },
  {
    value: "99%",
    label: "Customer Satisfaction Rate",
  },
];

// Stat Card Component
function StatCard({
  stat,
  index,
  isLast,
}: {
  stat: StatItem;
  index: number;
  isLast: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 40 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.2 + index * 0.15, duration: 0.6, ease: "easeOut" }}
      className="relative"
    >
      <div className="px-8 py-8">
        <h3 className="text-5xl font-light tracking-tight text-white md:text-6xl lg:text-7xl">
          {stat.value}
        </h3>
        <p className="mt-3 text-sm font-medium tracking-wide text-[#8A9BAE]">
          {stat.label}
        </p>
      </div>
      {!isLast && (
        <div className="absolute bottom-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-[#3A4555] to-transparent" />
      )}
    </motion.div>
  );
}

// Main Component
export default function Stats5({
  title = "Numbers are\ntelling our story",
  description = "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.",
  stats = defaultStats,
}: Stats5Props) {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-black">
      {/* Aurora Background Effect */}
      <div className="pointer-events-none absolute inset-0">
        {/* Main aurora glow */}
        <div
          className="absolute left-1/2 top-1/2 h-[800px] w-[1200px] -translate-x-1/2 -translate-y-1/2 opacity-40"
          style={{
            background:
              "radial-gradient(ellipse at center, rgba(100, 120, 180, 0.3) 0%, rgba(60, 80, 140, 0.15) 40%, transparent 70%)",
          }}
        />
        {/* Secondary blue tint */}
        <div
          className="absolute right-0 top-0 h-[600px] w-[600px] opacity-30"
          style={{
            background:
              "radial-gradient(ellipse at top right, rgba(80, 100, 160, 0.25) 0%, transparent 60%)",
          }}
        />
        {/* Bottom teal accent */}
        <div
          className="absolute bottom-0 right-1/4 h-[400px] w-[500px] opacity-25"
          style={{
            background:
              "radial-gradient(ellipse at bottom, rgba(60, 100, 120, 0.3) 0%, transparent 60%)",
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-center gap-12 px-6 py-20 lg:flex-row lg:items-center lg:justify-between lg:gap-20 lg:px-12">
        {/* Left Side - Text Content */}
        <div className="max-w-lg lg:max-w-md">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="whitespace-pre-line text-4xl font-light leading-tight tracking-tight text-white md:text-5xl lg:text-[3.25rem]"
          >
            {title}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.7, ease: "easeOut" }}
            className="mt-8 max-w-sm text-base leading-relaxed text-[#6B7280]"
          >
            {description}
          </motion.p>
        </div>

        {/* Right Side - Stats Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.1, duration: 0.6, ease: "easeOut" }}
          className="relative w-full max-w-md"
        >
          {/* Card Container with gradient border effect */}
          <div className="relative overflow-hidden rounded-3xl">
            {/* Card background with subtle gradient */}
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(180deg, rgba(30, 35, 50, 0.8) 0%, rgba(25, 40, 55, 0.6) 50%, rgba(20, 35, 45, 0.7) 100%)",
                backdropFilter: "blur(20px)",
              }}
            />
            {/* Subtle border glow */}
            <div
              className="absolute inset-0 rounded-3xl"
              style={{
                border: "1px solid rgba(80, 100, 140, 0.2)",
              }}
            />

            {/* Stats Content */}
            <div className="relative">
              {stats.map((stat, index) => (
                <StatCard
                  key={stat.label}
                  stat={stat}
                  index={index}
                  isLast={index === stats.length - 1}
                />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
