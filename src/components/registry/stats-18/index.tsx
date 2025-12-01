"use client";

import { motion } from "motion/react";

interface StatItem {
  value: string;
  description: string;
  linkText?: string;
  linkHref?: string;
}

interface Stats18Props {
  mode?: "light" | "dark";
  stats?: StatItem[];
}

const CUSTOMIZATION = {}

const defaultStats: StatItem[] = [
  {
    value: "$11M+",
    description: "Lorem ipsum dolor sit amet, consec tetur adipiscing elit ges aliquam.",
    linkText: "Read the story",
    linkHref: "#",
  },
  {
    value: "79.14%",
    description: "Lorem ipsum dolor sit amet, consec tetur adipiscing elit ges aliquam.",
    linkText: "Read the story",
    linkHref: "#",
  },
  {
    value: "$299/y",
    description: "Lorem ipsum dolor sit amet, consec tetur adipiscing elit ges aliquam.",
    linkText: "Read the story",
    linkHref: "#",
  },
  {
    value: "34k+",
    description: "Lorem ipsum dolor sit amet, consec tetur adipiscing elit ges aliquam.",
    linkText: "Read the story",
    linkHref: "#",
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
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay, ease: "easeOut" }}
      className="flex flex-col items-start"
    >
      <h3 className="text-5xl font-extralight tracking-tight text-white sm:text-6xl lg:text-7xl">
        {stat.value}
      </h3>
      <p className="mt-4 text-sm leading-relaxed text-gray-400 sm:text-base">
        {stat.description}
      </p>
      {stat.linkText && (
        <a
          href={stat.linkHref || "#"}
          className="mt-6 text-sm font-medium text-white underline underline-offset-4 transition-opacity hover:opacity-80"
        >
          {stat.linkText}
        </a>
      )}
    </motion.div>
  );
}

export default function Stats18({ mode = "dark", stats = defaultStats }: Stats18Props) {
  return (
    <section className="relative w-full overflow-hidden bg-[#0A0A0B] px-6 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-32">
      {/* Blue glow effect in the center */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 50%, rgba(59, 82, 128, 0.25) 0%, transparent 70%)",
        }}
      />

      <div className="relative mx-auto max-w-7xl">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {stats.map((stat, index) => (
            <StatCard key={index} stat={stat} delay={index * 0.1} />
          ))}
        </div>
      </div>
    </section>
  );
}
