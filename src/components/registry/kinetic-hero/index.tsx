"use client";

import { motion } from "motion/react";
import { ChevronRight } from "lucide-react";
import Image from "next/image";

interface StatItem {
  label: string;
  sublabel: string;
  type: "number" | "bars" | "target";
  kineticValue?: string;
  otherValue?: string;
}

interface KineticHeroProps {
  headline?: string;
  description?: string;
  secondaryDescription?: string;
  ctaText?: string;
  ctaHref?: string;
  heroImage?: string;
  stats?: StatItem[];
  kineticLabel?: string;
  otherLabel?: string;
}

export default function KineticHero({
  headline = "Repair modern vehicles\nat scale with effortless\nspeed and precision",
  description = "Kinetic Hubs leverage robotics, proprietary AI, and specialized expertise to automate digital collision repair across all makes and models.",
  secondaryDescription = "We help businesses adapt to the evolving automotive landscape by repairing digital collision damage in minutes rather than hours, increasing capacity, and growing revenue with unparalleled speed and precision.",
  ctaText = "Explore Kinetic Hubs",
  ctaHref = "#",
  heroImage = "/registry/kinetic-hero/hero-image.png",
  kineticLabel = "KINETIC PERFORMANCE",
  otherLabel = "OTHER PROVIDERS",
  stats = [
    {
      label: "CAPACITY: CALIBRATIONS PER DAY",
      sublabel: "Average daily calibrations per location",
      type: "number",
      kineticValue: "80",
      otherValue: "10",
    },
    {
      label: "SPEED: END-TO-END CYCLE TIME",
      sublabel: "Average time from pick-up to drop-off",
      type: "bars",
      kineticValue: "0 minutes",
      otherValue: "0 hours",
    },
    {
      label: "PRECISION: TARGET PLACEMENT",
      sublabel: "Tolerance",
      type: "target",
    },
  ],
}: KineticHeroProps) {
  return (
    <section className="relative w-full bg-[#333333]">
      {/* Top Section - Header */}
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-20">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left - Headline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="font-serif text-4xl font-light leading-tight tracking-tight text-white md:text-5xl lg:text-[3.5rem]">
              {headline.split("\n").map((line, i) => (
                <span key={i}>
                  {line}
                  {i < headline.split("\n").length - 1 && <br />}
                </span>
              ))}
            </h1>
          </motion.div>

          {/* Right - Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex flex-col justify-center space-y-6"
          >
            <p className="text-base leading-relaxed text-gray-300">
              {description}
            </p>
            <p className="text-base leading-relaxed text-gray-300">
              {secondaryDescription}
            </p>
            <a
              href={ctaHref}
              className="group inline-flex items-center gap-2 text-white transition-colors hover:text-[#B9A6EE]"
            >
              <span className="flex h-8 w-8 items-center justify-center rounded bg-[#B9A6EE]/20">
                <ChevronRight className="h-4 w-4 text-[#B9A6EE]" />
              </span>
              <span className="text-base font-medium">{ctaText}</span>
            </a>
          </motion.div>
        </div>
      </div>

      {/* Hero Image */}
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="relative mx-auto max-w-7xl px-6 lg:px-8"
      >
        <div className="relative aspect-[16/9] w-full overflow-hidden">
          <Image
            src={heroImage}
            alt="Kinetic Hub - Automotive repair facility"
            fill
            className="object-cover"
            priority
          />
        </div>
      </motion.div>

      {/* Stats Section */}
      <div className="bg-[#262626] px-6 py-12 lg:px-8 lg:py-16">
        <div className="mx-auto max-w-7xl">
          {/* Legend */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mb-8 flex items-center gap-6"
          >
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-[#B9A6EE]" />
              <span className="text-xs font-medium uppercase tracking-wider text-white">
                {kineticLabel}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-gray-500" />
              <span className="text-xs font-medium uppercase tracking-wider text-gray-500">
                {otherLabel}
              </span>
            </div>
          </motion.div>

          {/* Divider */}
          <div className="mb-10 h-px w-full bg-gray-700" />

          {/* Stats Grid */}
          <div className="grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                className={`${index < stats.length - 1 ? "md:border-r md:border-gray-700 md:pr-8" : ""}`}
              >
                <div className="mb-6">
                  <h3 className="text-xs font-semibold uppercase tracking-wider text-white">
                    {stat.label}
                  </h3>
                  <p className="mt-1 text-xs text-gray-500">{stat.sublabel}</p>
                </div>

                {stat.type === "number" && (
                  <div className="flex items-baseline">
                    <span className="font-serif text-[120px] font-extralight leading-none tracking-tight text-white">
                      {stat.kineticValue}
                    </span>
                    <span className="ml-1 text-4xl font-light text-[#B9A6EE]">
                      +
                    </span>
                    <span className="ml-2 text-4xl text-gray-500">
                      /{stat.otherValue}
                    </span>
                  </div>
                )}

                {stat.type === "bars" && (
                  <div className="space-y-4">
                    <div>
                      <p className="mb-2 text-sm text-[#B9A6EE]">
                        {stat.kineticValue}
                      </p>
                      <div className="flex gap-[2px]">
                        {Array.from({ length: 40 }).map((_, i) => (
                          <motion.div
                            key={i}
                            initial={{ scaleY: 0 }}
                            animate={{ scaleY: 1 }}
                            transition={{ duration: 0.3, delay: 0.7 + i * 0.02 }}
                            className="h-4 w-1 origin-bottom bg-[#B9A6EE]"
                          />
                        ))}
                      </div>
                    </div>
                    <div>
                      <p className="mb-2 text-sm text-gray-500">
                        {stat.otherValue}
                      </p>
                      <div className="flex gap-[2px]">
                        {Array.from({ length: 40 }).map((_, i) => (
                          <motion.div
                            key={i}
                            initial={{ scaleY: 0 }}
                            animate={{ scaleY: 1 }}
                            transition={{ duration: 0.3, delay: 0.9 + i * 0.02 }}
                            className="h-4 w-1 origin-bottom bg-gray-600"
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {stat.type === "target" && (
                  <div className="flex justify-center md:justify-start">
                    <div className="relative h-40 w-40">
                      {/* Outer dashed circle */}
                      <svg
                        className="absolute inset-0 h-full w-full"
                        viewBox="0 0 160 160"
                      >
                        <circle
                          cx="80"
                          cy="80"
                          r="75"
                          fill="none"
                          stroke="#4B5563"
                          strokeWidth="2"
                          strokeDasharray="6 4"
                        />
                      </svg>
                      {/* Inner filled circle - dark purple */}
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.8 }}
                        className="absolute left-1/2 top-1/2 h-28 w-28 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#0F091E]"
                      />
                      {/* Center dot - purple */}
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.3, delay: 1.1 }}
                        className="absolute left-1/2 top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#B9A6EE]"
                      />
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
