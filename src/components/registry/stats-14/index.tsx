"use client";

import { motion } from "motion/react";
import { Zap, Users, Star, LucideIcon } from "lucide-react";

interface StatItem {
  value: string;
  label: string;
  icon: LucideIcon;
}

interface Stats14Props {
  mode?: "light" | "dark";
  title?: string;
  description?: string;
  stats?: StatItem[];
}

const CUSTOMIZATION = {}

export default function Stats14({
  mode = "dark",
  title = "We have great\nachievement to show",
  description = "Clarity gives you the blocks & components you need to create a truly professional website, landing page or admin for your SaaS and gives the blocks.",
  stats = [
    { value: "64K+", label: "Finishing success projects", icon: Zap },
    { value: "36K+", label: "Satisfied global clients", icon: Users },
    { value: "25K+", label: "Branding awards winning", icon: Star },
  ],
}: Stats14Props) {
  return (
    <section className="relative w-full bg-[#0F172A] px-6 py-20 sm:px-8 lg:px-16">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col gap-12 lg:flex-row lg:items-start lg:justify-between lg:gap-16">
          {/* Left side - Title and Description */}
          <div className="lg:max-w-lg">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="whitespace-pre-line text-4xl font-bold tracking-tight text-white sm:text-5xl"
            >
              {title}
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mt-6 text-base leading-relaxed text-[#94A3B8]"
            >
              {description}
            </motion.p>
          </div>

          {/* Right side - Stats Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-full rounded-xl border border-[#1E293B] bg-[#0F172A] lg:max-w-md"
          >
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className={`flex items-center gap-6 px-6 py-6 ${
                    index !== stats.length - 1
                      ? "border-b border-[#1E293B]"
                      : ""
                  }`}
                >
                  {/* Icon Box */}
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-[#1E293B]">
                    <Icon className="h-5 w-5 text-[#3B82F6]" />
                  </div>

                  {/* Stat Content */}
                  <div className="flex flex-col">
                    <span className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                      {stat.value}
                    </span>
                    <span className="mt-1 text-sm text-[#94A3B8]">
                      {stat.label}
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
