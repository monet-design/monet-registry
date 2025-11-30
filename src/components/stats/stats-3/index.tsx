"use client";

import { motion } from "motion/react";
import { LayoutGrid, Globe, Users, Mail } from "lucide-react";
import { ReactNode } from "react";

interface StatItem {
  icon: ReactNode;
  value: string;
  label: string;
}

interface Stats3Props {
  title?: ReactNode;
  subtitle?: string;
  stats?: StatItem[];
}

const defaultStats: StatItem[] = [
  {
    icon: <LayoutGrid size={24} strokeWidth={1.5} />,
    value: "1,394",
    label: "Successful Projects",
  },
  {
    icon: <Globe size={24} strokeWidth={1.5} />,
    value: "477",
    label: "Happy Clients",
  },
  {
    icon: <Users size={24} strokeWidth={1.5} />,
    value: "~10K",
    label: "Monthly Visitors",
  },
  {
    icon: <Mail size={24} strokeWidth={1.5} />,
    value: "3k",
    label: "Email Subscribers",
  },
];

function StatCard({
  icon,
  value,
  label,
  index,
}: StatItem & { index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
      className="flex items-center gap-4 rounded-2xl bg-[#1C2333] px-6 py-5"
    >
      <div className="flex-shrink-0 text-[#6B7280]">{icon}</div>
      <div>
        <div className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
          {value}
        </div>
        <div className="mt-0.5 text-sm text-[#6B7280]">{label}</div>
      </div>
    </motion.div>
  );
}

export default function Stats3({
  title = (
    <>
      Make beautiful
      <br />
      landing pages using
      <br />
      Rareblocks.
    </>
  ),
  subtitle = "You can easily build anything with Rareblocks",
  stats = defaultStats,
}: Stats3Props) {
  return (
    <section className="w-full bg-[#111828] px-6 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col gap-12 lg:flex-row lg:items-center lg:justify-between lg:gap-16">
          {/* Left side - Title and subtitle */}
          <div className="lg:max-w-md">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl"
            >
              {title}
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mt-6 text-base text-[#9CA3AF]"
            >
              {subtitle}
            </motion.p>
          </div>

          {/* Right side - Stats grid */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {stats.map((stat, index) => (
              <StatCard
                key={index}
                icon={stat.icon}
                value={stat.value}
                label={stat.label}
                index={index}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
