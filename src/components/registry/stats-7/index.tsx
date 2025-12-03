"use client";

import { motion } from "motion/react";
import { Users, Mail, TrendingUp, LucideIcon } from "lucide-react";

// Types
interface StatItem {
  icon: LucideIcon;
  value: string;
  label: string;
}

interface Stats7Props {
  mode?: "light" | "dark";
  title?: string;
  subtitle?: string;
  stats?: StatItem[];
}

const CUSTOMIZATION = {}

// Default stats data
const defaultStats: StatItem[] = [
  {
    icon: Users,
    value: "430k",
    label: "Active customers",
  },
  {
    icon: Mail,
    value: "149k",
    label: "Email subscribers",
  },
  {
    icon: TrendingUp,
    value: "$1M+",
    label: "Monthly transaction",
  },
];

// Stat Card Component
function StatCard({
  stat,
  index,
}: {
  stat: StatItem;
  index: number;
}) {
  const Icon = stat.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
      className="flex flex-col rounded-2xl bg-[#F5F5F5] px-8 py-10"
    >
      {/* Icon */}
      <div className="mb-auto">
        <Icon
          className="h-10 w-10 text-[#1A2128]"
          strokeWidth={1.5}
        />
      </div>

      {/* Value */}
      <h3 className="mt-16 text-[40px] font-bold leading-tight tracking-tight text-[#1A2128] sm:text-5xl">
        {stat.value}
      </h3>

      {/* Label */}
      <p className="mt-2 text-base text-[#6B7280]">
        {stat.label}
      </p>
    </motion.div>
  );
}

// Main Component
export default function Stats7({
  mode = "light",
  title = "We create solutions that\nmake dev life easier",
  subtitle = "You can easily build anything with Rareblocks",
  stats = defaultStats,
}: Stats7Props) {
  // Split title by newline for proper rendering
  const titleLines = title.split("\n");

  return (
    <section className="relative w-full overflow-hidden bg-white py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center sm:mb-16"
        >
          <h2 className="text-3xl font-bold tracking-tight text-[#1A2128] sm:text-4xl lg:text-5xl">
            {titleLines.map((line, i) => (
              <span key={i}>
                {line}
                {i < titleLines.length - 1 && <br />}
              </span>
            ))}
          </h2>
          <p className="mt-4 text-base text-[#6B7280] sm:text-lg">
            {subtitle}
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {stats.map((stat, index) => (
            <StatCard key={index} stat={stat} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
