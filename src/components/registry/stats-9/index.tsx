"use client";

import { motion } from "motion/react";

interface StatItem {
  value: string;
  label: string;
}

interface Stats9Props {
  title?: string;
  description?: string;
  stats?: StatItem[];
}

const defaultStats: StatItem[] = [
  { value: "36K+", label: "Satisfied clients" },
  { value: "79%", label: "Download range" },
  { value: "64K+", label: "Success projects" },
  { value: "25+", label: "Awards winning" },
];

export default function Stats9({
  title = "Our strength is\nexpressed in numbers",
  description = "Clarity gives you the blocks & components you need to create a truly professional website, landing page or admin panel for your SaaS and gives the blocks.",
  stats = defaultStats,
}: Stats9Props) {
  return (
    <section className="relative w-full bg-[#F9FAFC] py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-12 lg:flex-row lg:items-center lg:justify-between lg:gap-16">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex-1 lg:max-w-md"
          >
            <h2 className="whitespace-pre-line text-3xl font-bold leading-tight tracking-tight text-[#12192B] sm:text-4xl lg:text-[42px]">
              {title}
            </h2>
            <p className="mt-6 text-base leading-relaxed text-[#6B7280] sm:text-lg">
              {description}
            </p>
          </motion.div>

          {/* Right Stats Grid */}
          <div className="grid flex-1 grid-cols-2 gap-x-12 gap-y-10 lg:max-w-lg lg:gap-x-16 lg:gap-y-12">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
                className="flex flex-col"
              >
                <span className="text-4xl font-bold tracking-tight text-[#12192B] sm:text-5xl lg:text-[56px]">
                  {stat.value}
                </span>
                <span className="mt-2 text-sm font-medium text-[#2563EB] sm:text-base">
                  {stat.label}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
