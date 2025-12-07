"use client";

import { motion } from "motion/react";

interface CoderabbitAiFeature3Props {
  mode?: "light" | "dark";
}

const CheckIcon = () => (
  <svg className="h-5 w-5 text-[#2DD4BF]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
  </svg>
);

export default function CoderabbitAiFeature3({
  mode = "dark",
}: CoderabbitAiFeature3Props) {
  const features = [
    {
      title: "Your reviews. Your way.",
      description: "Code reviews that auto-learn from user feedback and have full context across your workflow through MCP and native integrations.",
      size: "large",
      hasImage: true,
    },
    {
      title: "Catch fast. Fix fast.",
      description: "Full codebase-aware reviews and one-click fixes that follow your coding guidelines and integrate seamlessly with coding agents.",
      size: "small",
      hasIcon: true,
    },
    {
      title: "Simple PR summaries.",
      description: "See the list of changed files and a one-line description.",
      size: "small",
      hasImage: true,
    },
    {
      title: "Review guide for human reviewers.",
      description: "Visualize code flow, validate linked issues, find related PRs, add labels, and choose relevant reviewers.",
      size: "medium",
      hasImage: true,
    },
  ];

  return (
    <section className="relative w-full bg-black py-20">
      <div className="mx-auto max-w-7xl px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white md:text-5xl">AI Code Reviews</h2>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {/* Large Card - Your reviews */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="col-span-1 row-span-2 rounded-2xl bg-zinc-900 p-8 lg:col-span-2"
          >
            <div className="flex flex-col md:flex-row gap-8">
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-white">{features[0].title}</h3>
                <p className="mt-4 text-zinc-400">{features[0].description}</p>
              </div>
              <div className="flex-1 rounded-xl bg-pink-100 p-4 min-h-[300px]">
                {/* Code Review UI Preview */}
                <div className="rounded-lg bg-zinc-900 p-4">
                  <div className="flex items-center gap-2 text-xs text-zinc-400 mb-2">
                    <span className="text-orange-400">coderabbitai</span>
                    <span>Potential Issue</span>
                  </div>
                  <div className="space-y-2">
                    <div className="text-xs text-zinc-300 bg-zinc-800 rounded p-2">
                      Remove unnecessary conditional statement.
                    </div>
                    <button className="w-full rounded bg-zinc-800 py-2 text-xs text-white hover:bg-zinc-700">
                      Commit suggestion
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Small Card - Catch fast */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="rounded-2xl bg-zinc-900 p-8"
          >
            <div className="mb-4 h-16 w-16">
              <div className="h-full w-full rounded-lg bg-gradient-to-br from-orange-500 via-pink-500 to-cyan-400 flex items-center justify-center">
                <svg className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
            </div>
            <h3 className="text-xl font-bold text-white">{features[1].title}</h3>
            <p className="mt-3 text-sm text-zinc-400">{features[1].description}</p>
          </motion.div>

          {/* Small Card - Simple PR summaries */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="rounded-2xl bg-zinc-900 p-8"
          >
            <h3 className="text-xl font-bold text-white">{features[2].title}</h3>
            <p className="mt-3 text-sm text-zinc-400">{features[2].description}</p>
            <div className="mt-6 rounded-lg bg-zinc-800 p-4">
              <div className="text-xs text-zinc-400 mb-2">File path</div>
              <div className="rounded bg-zinc-700 p-2 text-xs text-zinc-300">
                <div className="font-semibold mb-1">Change summary</div>
                <div className="text-zinc-500">Updated dependencies...</div>
              </div>
            </div>
          </motion.div>

          {/* Medium Card - Review guide */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="col-span-1 rounded-2xl bg-zinc-900 p-8 md:col-span-2 lg:col-span-1"
          >
            <h3 className="text-xl font-bold text-white">{features[3].title}</h3>
            <p className="mt-3 text-sm text-zinc-400">{features[3].description}</p>
            <div className="mt-6 rounded-xl bg-pink-100 p-4">
              <div className="rounded-lg bg-white shadow-sm p-3">
                <div className="text-sm font-semibold text-zinc-800 mb-2">Summary by CodeRabbit</div>
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-green-500" />
                    <span className="text-xs text-zinc-600">Documentation</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-green-500" />
                    <span className="text-xs text-zinc-600">New Features</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-green-500" />
                    <span className="text-xs text-zinc-600">Bug Fixes</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
