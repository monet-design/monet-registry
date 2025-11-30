"use client";

import { motion } from "motion/react";
import { Zap, Users, Briefcase, ThumbsUp, LucideIcon } from "lucide-react";

interface StatItem {
  icon: LucideIcon;
  value: string;
  label: string;
}

interface Stats4Props {
  headline?: string;
  stats?: StatItem[];
  iconColor?: string;
}

const defaultStats: StatItem[] = [
  {
    icon: Zap,
    value: "6+",
    label: "Years in business",
  },
  {
    icon: Users,
    value: "37+",
    label: "Team members",
  },
  {
    icon: Briefcase,
    value: "3,274",
    label: "Projects delivered",
  },
  {
    icon: ThumbsUp,
    value: "98%",
    label: "Customer success",
  },
];

function StatCard({
  stat,
  iconColor,
  index,
}: {
  stat: StatItem;
  iconColor: string;
  index: number;
}) {
  const Icon = stat.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="flex items-center gap-4 bg-white border border-gray-200 rounded-xl px-6 py-5"
    >
      <div className="flex-shrink-0">
        <Icon className="w-6 h-6" style={{ color: iconColor }} strokeWidth={1.5} />
      </div>
      <div className="flex flex-col">
        <span className="text-2xl font-bold text-gray-900 tracking-tight">
          {stat.value}
        </span>
        <span className="text-sm text-gray-500">{stat.label}</span>
      </div>
    </motion.div>
  );
}

export default function Stats4({
  headline = "Numbers tell the hard works we've done in last 6 years",
  stats = defaultStats,
  iconColor = "#D946EF",
}: Stats4Props) {
  return (
    <section className="w-full bg-white py-16 md:py-20">
      <div className="max-w-6xl mx-auto px-4">
        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center text-lg md:text-xl text-gray-900 font-normal mb-10 md:mb-12"
        >
          {headline}
        </motion.h2>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((stat, index) => (
            <StatCard
              key={index}
              stat={stat}
              iconColor={iconColor}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
