"use client";

import { motion } from "motion/react";

interface StatItem {
  value: string;
  label: string;
}

interface Stats16Props {
  stats?: StatItem[];
  accentColor?: string;
  underlineColor?: string;
}

const defaultStats: StatItem[] = [
  {
    value: "36K+",
    label: "Satisfied global clients",
  },
  {
    value: "79%",
    label: "Download total range",
  },
  {
    value: "64K+",
    label: "Finishing success projects",
  },
  {
    value: "25+",
    label: "Branding awards winning",
  },
];

function StatCard({
  stat,
  index,
  accentColor,
  underlineColor,
}: {
  stat: StatItem;
  index: number;
  accentColor: string;
  underlineColor: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
      className="flex flex-col"
    >
      <h3
        className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl"
        style={{ color: accentColor }}
      >
        {stat.value}
      </h3>
      <p className="mt-3 text-sm font-medium text-[#1F2937] sm:text-base">
        {stat.label}
      </p>
      <div
        className="mt-6 h-[2px] w-24"
        style={{ backgroundColor: underlineColor }}
      />
    </motion.div>
  );
}

export default function Stats16({
  stats = defaultStats,
  accentColor = "#2C64D9",
  underlineColor = "#E5E7EB",
}: Stats16Props) {
  return (
    <section className="w-full bg-white px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-2 gap-10 sm:gap-12 md:grid-cols-4 lg:gap-16">
          {stats.map((stat, index) => (
            <StatCard
              key={index}
              stat={stat}
              index={index}
              accentColor={accentColor}
              underlineColor={underlineColor}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
