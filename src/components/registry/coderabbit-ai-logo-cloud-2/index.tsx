"use client";

const COLORS = {
  light: {
    accent: "#FF6B35",
    teal: "#2DD4BF",
  },
  dark: {
    accent: "#FF6B35",
    teal: "#2DD4BF",
  },
} as const;

import { motion } from "motion/react";

interface CoderabbitAiLogoCloud2Props {
  mode?: "light" | "dark";
}

export default function CoderabbitAiLogoCloud2({
  mode = "dark",
}: CoderabbitAiLogoCloud2Props) {
  const stats = [
    { value: "5M+", label: "Repositories", sublabel: "in review", borderColor: "border-orange-500" },
    { value: "10M+", label: "Pull requests", sublabel: "reviewed", borderColor: "border-purple-500" },
  ];

  const logos = [
    { name: "Mercury", icon: "M" },
    { name: "WRITER", icon: "W" },
    { name: "Abnormal", icon: "A" },
    { name: "Ashby", icon: "As" },
    { name: "Chegg", icon: "C" },
    { name: "sisense", icon: "S" },
    { name: "GROUPON", icon: "G" },
    { name: "clerk", icon: "Cl" },
  ];

  return (
    <section className="relative w-full bg-black py-16">
      <div className="mx-auto max-w-7xl px-6">
        {/* Stats Row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 gap-4 md:grid-cols-3"
        >
          {/* Main Stat Card */}
          <div className="rounded-2xl bg-zinc-900 p-8">
            <h3 className="text-2xl font-bold text-white">
              The most installed AI App on GitHub &amp; GitLab
            </h3>
          </div>

          {/* Stat Cards */}
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`rounded-2xl bg-zinc-900 p-8 border-b-4 ${stat.borderColor}`}
            >
              <p className="text-5xl font-bold text-white">{stat.value}</p>
              <p className="mt-2 text-zinc-400">
                <span className="font-semibold text-white">{stat.label}</span> {stat.sublabel}
              </p>
            </div>
          ))}
        </motion.div>

        {/* Trusted By */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-16 text-center"
        >
          <p className="text-lg">
            <span className="text-zinc-400">Trusted by </span>
            <span className="font-semibold text-[#2DD4BF]">10K+ customers</span>
          </p>

          {/* Logo Grid */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-x-12 gap-y-6">
            {logos.slice(0, 6).map((logo, index) => (
              <div key={index} className="text-zinc-500 hover:text-zinc-300 transition-colors">
                <span className="text-xl font-bold tracking-wide">{logo.name}</span>
              </div>
            ))}
          </div>

          {/* Second Row */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-12 gap-y-6">
            {logos.slice(6).map((logo, index) => (
              <div key={index} className="text-zinc-500 hover:text-zinc-300 transition-colors">
                <span className="text-xl font-bold tracking-wide">{logo.name}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
