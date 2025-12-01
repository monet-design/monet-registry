"use client";

import { motion } from "motion/react";

interface StatItem {
  value: string;
  description: string;
}

interface Stats6Props {
  mode?: "light" | "dark";
  title?: string;
  stats?: StatItem[];
}

const CUSTOMIZATION = {}

function DiagonalLines() {
  return (
    <div className="flex justify-center gap-[3px]">
      {Array.from({ length: 24 }).map((_, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, scaleY: 0 }}
          whileInView={{ opacity: 1, scaleY: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, delay: i * 0.02 }}
          className="h-3 w-[2px] origin-center -rotate-45 bg-gray-500"
        />
      ))}
    </div>
  );
}

export default function Stats6({
  mode = "dark",
  title = "Join millions getting more resources",
  stats = [
    {
      value: "1.5M",
      description:
        "Lorem ipsum dolor sit amet, consect etur adipis elit. Sit enim nec.",
    },
    {
      value: "41%",
      description:
        "Lorem ipsum dolor sit amet, consect etur adipis elit. Sit enim nec.",
    },
    {
      value: "3964+",
      description:
        "Lorem ipsum dolor sit amet, consect etur adipis elit. Sit enim nec.",
    },
  ],
}: Stats6Props) {
  return (
    <section className="w-full bg-[#111828] px-6 py-16 sm:px-8 lg:px-12 lg:py-20">
      <div className="mx-auto max-w-5xl">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-[42px]"
        >
          {title}
        </motion.h2>

        {/* Decorative diagonal lines */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="mt-6 flex justify-center"
        >
          <DiagonalLines />
        </motion.div>

        {/* Stats Grid */}
        <div className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-3 lg:gap-20">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              className="text-left"
            >
              <div className="text-4xl font-bold tracking-tight text-white lg:text-5xl">
                {stat.value}
              </div>
              <p className="mt-4 max-w-[280px] text-sm leading-relaxed text-gray-400 lg:text-base">
                {stat.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
