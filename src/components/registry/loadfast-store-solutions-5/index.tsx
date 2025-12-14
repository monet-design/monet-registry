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
import { ArrowRight } from "lucide-react";

interface LoadfastStoreSolutions5Props {
  mode?: "light" | "dark";
}

export default function LoadfastStoreSolutions5({
  mode = "light",
}: LoadfastStoreSolutions5Props) {
  const colors = COLORS[mode];

  const solutions = [
    {
      title: "Text Expander for Lawyers",
      description: "Legal documentation templates",
      tag: "Industry",
      popular: true,
    },
    {
      title: "LoadFast vs TextExpander",
      description: "Detailed comparison",
      tag: "Comparison",
      popular: true,
    },
    {
      title: "Auto-complete Feature",
      description: "Smart text suggestions",
      tag: "Feature",
      popular: true,
    },
    {
      title: "Email Response Templates",
      description: "Professional email automation",
      tag: "Template",
      popular: true,
    },
    {
      title: "All Industries",
      description: "Browse by profession",
      tag: "Hub",
      popular: true,
    },
    {
      title: "Template Library",
      description: "Ready-to-use templates",
      tag: "Hub",
      popular: true,
    },
    {
      title: "Text Expander for Doctors",
      description: "Medical documentation tools",
      tag: "Industry",
      popular: true,
    },
    {
      title: "Slack Integration",
      description: "Connect with Slack",
      tag: "Integration",
      popular: true,
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
            Most Popular Solutions
          </h2>
          <p
            className="text-base lg:text-lg max-w-2xl mx-auto"
            style={{ color: `${colors.accent}99` }}
          >
            Discover our most popular solutions and resources based on what our
            users find most valuable
          </p>
        </motion.div>

        {/* Solutions Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          {solutions.map((solution, index) => (
            <motion.a
              key={index}
              href="#"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="group p-5 rounded-lg border transition-all hover:shadow-md"
              style={{
                backgroundColor: "white",
                borderColor: `${colors.accent}1A`,
              }}
            >
              <h3
                className="font-medium text-base mb-1 group-hover:underline"
                style={{ color: colors.accent }}
              >
                {solution.title}
              </h3>
              <p
                className="text-sm mb-3"
                style={{ color: `${colors.accent}99` }}
              >
                {solution.description}
              </p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  {solution.popular && (
                    <span
                      className="w-2 h-2 rounded-full"
                      style={{ backgroundColor: "#22C55E" }}
                    />
                  )}
                  <span
                    className="text-xs"
                    style={{ color: `${colors.accent}99` }}
                  >
                    Popular
                  </span>
                </div>
                <span
                  className="text-xs px-2 py-1 rounded"
                  style={{
                    backgroundColor: colors.stone,
                    color: colors.accent,
                  }}
                >
                  {solution.tag}
                </span>
              </div>
            </motion.a>
          ))}
        </div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p
            className="text-sm mb-4"
            style={{ color: `${colors.accent}99` }}
          >
            Can't find what you're looking for?
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <button
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-md text-sm font-medium border transition-colors"
              style={{
                borderColor: `${colors.accent}33`,
                color: colors.accent,
              }}
            >
              Browse All Pages
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-md text-sm font-medium transition-colors"
              style={{
                backgroundColor: colors.accent,
                color: colors.sand,
              }}
            >
              Explore Templates
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
