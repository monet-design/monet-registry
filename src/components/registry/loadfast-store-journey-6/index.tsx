"use client";

const COLORS = {
  light: {
    accent: "#1C1917",
    clay: "#D2886F",
    sand: "#F5F5F0",
    stone: "#E8E6E1",
  },
  dark: {
    accent: "#F5F5F0",
    clay: "#D2886F",
    sand: "#1C1917",
    stone: "#292524",
  },
} as const;

import { motion } from "motion/react";

interface LoadfastStoreJourney6Props {
  mode?: "light" | "dark";
}

export default function LoadfastStoreJourney6({
  mode = "light",
}: LoadfastStoreJourney6Props) {
  const colors = COLORS[mode];

  const timelineData = [
    {
      period: "Week 1",
      hours: "5",
      value: "$125",
      description: "Immediate impact",
      progress: 8,
    },
    {
      period: "Month 1",
      hours: "20",
      value: "$500",
      description: "Building momentum",
      progress: 20,
    },
    {
      period: "Year 1",
      hours: "250",
      value: "$7,500",
      description: "6 work weeks saved",
      progress: 60,
    },
    {
      period: "Year 5",
      hours: "1,250",
      value: "$37,500",
      description: "30 work weeks saved",
      progress: 100,
    },
  ];

  return (
    <section
      className="py-16 lg:py-24"
      style={{ backgroundColor: colors.sand }}
    >
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2
            className="font-serif font-normal text-3xl lg:text-4xl tracking-tight mb-4"
            style={{ color: colors.accent }}
          >
            Your Time Savings Journey
          </h2>
          <p
            className="text-base lg:text-lg"
            style={{ color: `${colors.accent}99` }}
          >
            Watch how a{" "}
            <span style={{ color: colors.clay }}>$100 investment</span>{" "}
            transforms into thousands in saved time
          </p>
        </motion.div>

        {/* Timeline Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {timelineData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-5 rounded-lg border"
              style={{
                backgroundColor: "white",
                borderColor: `${colors.accent}1A`,
              }}
            >
              <p
                className="text-sm font-medium mb-2"
                style={{ color: `${colors.accent}99` }}
              >
                {item.period}
              </p>
              <p
                className="text-3xl font-bold mb-1"
                style={{ color: colors.accent }}
              >
                {item.hours}
              </p>
              <p
                className="text-sm mb-1"
                style={{ color: `${colors.accent}99` }}
              >
                hours saved
              </p>
              <p className="text-xl font-bold" style={{ color: colors.clay }}>
                {item.value}
              </p>
              <p
                className="text-sm mb-3"
                style={{ color: `${colors.accent}99` }}
              >
                time value
              </p>
              <div
                className="w-full h-1.5 rounded-full overflow-hidden"
                style={{ backgroundColor: colors.stone }}
              >
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${item.progress}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: index * 0.2 }}
                  className="h-full rounded-full"
                  style={{ backgroundColor: colors.clay }}
                />
              </div>
              <p
                className="text-xs mt-2"
                style={{ color: `${colors.accent}80` }}
              >
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Visualization */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="p-8 rounded-lg mb-8"
          style={{ backgroundColor: colors.stone }}
        >
          <h3
            className="font-serif text-2xl text-center mb-8"
            style={{ color: colors.accent }}
          >
            Visualize Your Saved Time
          </h3>

          <div className="flex flex-col md:flex-row justify-around items-center gap-8">
            {/* After 1 Year */}
            <div className="text-center">
              <p
                className="text-sm font-medium mb-4"
                style={{ color: `${colors.accent}99` }}
              >
                After 1 Year
              </p>
              <div className="flex flex-wrap justify-center gap-1 max-w-[200px]">
                {[...Array(6)].map((_, i) => (
                  <div
                    key={i}
                    className="w-10 h-10 rounded-lg flex items-center justify-center text-xs font-bold"
                    style={{
                      backgroundColor: colors.accent,
                      color: colors.sand,
                    }}
                  >
                    W
                  </div>
                ))}
              </div>
              <p className="mt-4" style={{ color: colors.accent }}>
                <span className="font-bold">6 full work weeks</span>
                <br />
                <span
                  className="text-sm"
                  style={{ color: `${colors.accent}99` }}
                >
                  to focus on what matters
                </span>
              </p>
            </div>

            {/* After 5 Years */}
            <div className="text-center">
              <p
                className="text-sm font-medium mb-4"
                style={{ color: `${colors.accent}99` }}
              >
                After 5 Years
              </p>
              <div className="flex flex-wrap justify-center gap-1 max-w-[240px]">
                {[...Array(12)].map((_, i) => (
                  <div
                    key={i}
                    className="w-10 h-10 rounded-lg flex items-center justify-center text-xs font-bold"
                    style={{
                      backgroundColor: colors.clay,
                      color: colors.sand,
                    }}
                  >
                    W
                  </div>
                ))}
              </div>
              <p className="mt-4" style={{ color: colors.accent }}>
                <span className="font-bold" style={{ color: colors.clay }}>
                  30 work weeks
                </span>
                <br />
                <span
                  className="text-sm"
                  style={{ color: `${colors.accent}99` }}
                >
                  - over half a year saved!
                </span>
              </p>
            </div>
          </div>
        </motion.div>

        {/* Cost Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="p-6 rounded-lg text-center mb-8"
          style={{ backgroundColor: colors.stone }}
        >
          <p
            className="text-xl font-medium mb-2"
            style={{ color: colors.accent }}
          >
            The Real Cost of NOT Using LoadFast
          </p>
          <p
            className="text-3xl font-bold"
            style={{ color: colors.accent }}
          >
            $7,500 per year
          </p>
          <p
            className="text-sm mt-2"
            style={{ color: `${colors.accent}99` }}
          >
            That's how much time you're losing to repetitive typing.
            <br />
            Every day you wait costs you $30 in lost productivity.
          </p>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <button
            className="px-8 py-3 rounded-md text-base font-medium transition-colors"
            style={{
              backgroundColor: colors.accent,
              color: colors.sand,
            }}
          >
            Start Saving 250+ Hours Per Year
          </button>
          <p
            className="text-sm mt-3"
            style={{ color: `${colors.accent}80` }}
          >
            Join thousands who've already reclaimed their time
          </p>
        </motion.div>
      </div>
    </section>
  );
}
