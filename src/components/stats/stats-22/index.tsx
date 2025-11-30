"use client";

import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

interface StatItem {
  value: string;
  label: string;
}

interface Stats22Props {
  stats?: StatItem[];
  description?: string;
  buttonText?: string;
  onButtonClick?: () => void;
}

const defaultStats: StatItem[] = [
  { value: "1,800", label: "Students" },
  { value: "28", label: "teachers" },
  { value: "30", label: "countries" },
  { value: "300k", label: "breads" },
];

const defaultDescription =
  "Ultrices at massa ut faucibus pretium placerat. Cursus consectetur mattis in diam pretium risus fringilla.";

export default function Stats22({
  stats = defaultStats,
  description = defaultDescription,
  buttonText = "Learn More",
  onButtonClick,
}: Stats22Props) {
  const renderStatLine = () => {
    const firstLine = stats.slice(0, 3);
    const secondLine = stats.slice(3);

    return (
      <>
        <div className="flex flex-wrap items-baseline justify-center gap-x-2">
          {firstLine.map((stat, index) => (
            <span key={index} className="inline-flex items-baseline">
              <span className="font-serif italic text-white">{stat.value}</span>
              <span className="ml-2 text-white">{stat.label}</span>
              {index < firstLine.length - 1 && (
                <span className="text-white">,</span>
              )}
            </span>
          ))}
          {secondLine.length > 0 && <span className="text-white">,</span>}
        </div>
        {secondLine.length > 0 && (
          <div className="flex flex-wrap items-baseline justify-center gap-x-2">
            <span className="text-white">and</span>
            {secondLine.map((stat, index) => (
              <span key={index} className="inline-flex items-baseline">
                <span className="font-serif italic text-white">
                  {stat.value}
                </span>
                <span className="ml-2 text-white">{stat.label}</span>
              </span>
            ))}
          </div>
        )}
      </>
    );
  };

  return (
    <section className="relative w-full bg-black px-4 py-20 sm:px-6 sm:py-28 lg:px-8 lg:py-32">
      <div className="mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-4xl leading-tight font-normal tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
            {renderStatLine()}
          </h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mx-auto mt-8 max-w-xl text-base leading-relaxed text-gray-400 sm:mt-10 sm:text-lg"
          >
            {description}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-10 sm:mt-12"
          >
            <button
              onClick={onButtonClick}
              className="group inline-flex items-center gap-2 rounded-full border border-white/30 px-6 py-3 text-sm font-medium text-white transition-all duration-300 hover:border-white hover:bg-white hover:text-black sm:px-8 sm:py-3.5 sm:text-base"
            >
              {buttonText}
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
