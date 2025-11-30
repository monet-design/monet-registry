"use client";

import { motion } from "motion/react";
import { Zap, ShieldCheck, Truck, Star, LucideIcon } from "lucide-react";

interface StatItem {
  icon: LucideIcon;
  value: string;
  description: string;
}

interface Stats11Props {
  title?: string;
  stats?: StatItem[];
}

export default function Stats11({
  title = "Numbers tell all the hard works\nwe've done in last 6 years",
  stats = [
    {
      icon: Zap,
      value: "38",
      description:
        "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequa.",
    },
    {
      icon: ShieldCheck,
      value: "471+",
      description:
        "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequa.",
    },
    {
      icon: Truck,
      value: "1846",
      description:
        "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequa.",
    },
    {
      icon: Star,
      value: "97%",
      description:
        "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequa.",
    },
  ],
}: Stats11Props) {
  return (
    <section className="w-full bg-[#2563EB] px-6 py-20 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-5xl">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl whitespace-pre-line"
        >
          {title}
        </motion.h2>

        {/* Stats Grid */}
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
                className="rounded-2xl bg-white p-8"
              >
                {/* Icon and Value */}
                <div className="flex items-center gap-4">
                  <IconComponent
                    className="h-10 w-10 text-[#D1D5DB]"
                    strokeWidth={1.5}
                  />
                  <span className="text-4xl font-bold tracking-tight text-[#1F2937] sm:text-5xl">
                    {stat.value}
                  </span>
                </div>

                {/* Description */}
                <p className="mt-6 text-base leading-relaxed text-[#6B7280]">
                  {stat.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
