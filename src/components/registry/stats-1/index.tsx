"use client";

import { motion } from "motion/react";

interface StatItem {
  value: string;
  suffix?: string;
  title: string;
  description: string;
  gradientFrom: string;
  gradientTo: string;
}

interface Stats1Props {
  mode?: "light" | "dark";
  title?: string;
  subtitle?: string;
  stats?: StatItem[];
}

const CUSTOMIZATION = {}

const defaultStats: StatItem[] = [
  {
    value: "6",
    suffix: "+",
    title: "Years in business",
    description: "Creating the successful path",
    gradientFrom: "#C07CDA",
    gradientTo: "#883DD8",
  },
  {
    value: "4821",
    title: "Projects delivered",
    description: "In last 6 years",
    gradientFrom: "#C680DB",
    gradientTo: "#624CDD",
  },
  {
    value: "37",
    suffix: "+",
    title: "Team members",
    description: "Working for your success",
    gradientFrom: "#B037CF",
    gradientTo: "#5B4CDD",
  },
];

function StatCard({
  stat,
  delay = 0,
}: {
  stat: StatItem;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
      className="flex flex-col items-center text-center"
    >
      <div
        className="text-6xl font-bold tracking-tight sm:text-7xl md:text-8xl"
        style={{
          background: `linear-gradient(to right, ${stat.gradientFrom}, ${stat.gradientTo})`,
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
        }}
      >
        {stat.value}
        {stat.suffix && <span>{stat.suffix}</span>}
      </div>
      <h3 className="mt-4 text-base font-semibold text-gray-900 sm:text-lg">
        {stat.title}
      </h3>
      <p className="mt-1 text-sm text-gray-500">{stat.description}</p>
    </motion.div>
  );
}

export default function Stats1({
  mode = "light",
  title = "Numbers tell our story",
  subtitle = "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis.",
  stats = defaultStats,
}: Stats1Props) {
  return (
    <section className="w-full bg-[#F3F4F6] px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center sm:mb-20"
        >
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl md:text-5xl">
            {title}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-gray-500 sm:mt-6 sm:text-lg">
            {subtitle}
          </p>
        </motion.div>

        <div className="grid gap-12 sm:gap-16 md:grid-cols-3">
          {stats.map((stat, index) => (
            <StatCard key={index} stat={stat} delay={index * 0.15} />
          ))}
        </div>
      </div>
    </section>
  );
}
