"use client";

const COLORS = {
  light: {
    accent: "#FF6B35",
    accentHover: "#E55A2B",
    teal: "#2DD4BF",
  },
  dark: {
    accent: "#FF6B35",
    accentHover: "#E55A2B",
    teal: "#2DD4BF",
  },
} as const;

import { motion } from "motion/react";

const ArrowRight = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M4 10H16M16 10L11 5M16 10L11 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

interface CoderabbitAiHero1Props {
  mode?: "light" | "dark";
}

export default function CoderabbitAiHero1({
  mode = "dark",
}: CoderabbitAiHero1Props) {
  const colors = COLORS[mode];

  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-black">
      {/* Background Decorative Elements */}
      <div className="pointer-events-none absolute inset-0">
        {/* Left gradient circles */}
        <div className="absolute -left-32 top-1/3 h-[500px] w-[500px]">
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-orange-500 via-pink-500 to-cyan-400 opacity-80 blur-sm" />
          <div className="absolute inset-8 rounded-full bg-black" />
        </div>
        {/* Right gradient circle */}
        <div className="absolute -right-20 bottom-0 h-[400px] w-[400px]">
          <div className="absolute inset-0 rounded-full bg-gradient-to-tl from-cyan-400 via-pink-400 to-orange-500 opacity-80 blur-sm" />
        </div>
      </div>

      <div className="relative mx-auto max-w-7xl px-6 pt-20 pb-32">
        {/* Hero Content */}
        <div className="text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mx-auto max-w-4xl text-5xl font-bold leading-tight tracking-tight text-white md:text-6xl lg:text-7xl"
          >
            Cut Code Review Time
            <br />
            & Bugs in Half.{" "}
            <span className="bg-gradient-to-r from-orange-400 to-orange-500 bg-clip-text text-transparent">
              Instantly.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mx-auto mt-6 max-w-xl text-lg text-zinc-400"
          >
            Reviews for AI-powered teams who move fast
            <br />
            (but don&apos;t break things)
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-8 flex flex-col items-center gap-4"
          >
            <a
              href="#trial"
              className="flex items-center gap-2 rounded-full bg-[#FF6B35] px-8 py-4 text-lg font-medium text-white transition-all hover:bg-[#E55A2B] hover:shadow-lg hover:shadow-orange-500/25"
            >
              Get a free trial
              <ArrowRight />
            </a>
            <p className="text-sm text-zinc-400">
              Want reviews in IDE?{" "}
              <a href="#ide" className="text-white underline underline-offset-4 hover:text-zinc-300">
                Learn More
              </a>
            </p>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-8 flex flex-wrap items-center justify-center gap-4 text-sm text-zinc-400"
          >
            <span className="font-semibold text-white">14-day free trial</span>
            <span className="text-zinc-600">|</span>
            <span>No credit card needed</span>
            <span className="text-zinc-600">|</span>
            <span>2-click signup with GitHub/GitLab.</span>
          </motion.div>
        </div>

        {/* Product Preview */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="relative mx-auto mt-16 max-w-5xl"
        >
          <div className="flex items-start gap-4">
            {/* Main PR Interface */}
            <div className="flex-1 rounded-2xl bg-zinc-900/80 p-6 backdrop-blur-sm border border-zinc-800">
              <div className="flex items-center gap-3 mb-4">
                <div className="h-10 w-10 rounded-full bg-gradient-to-br from-blue-400 to-purple-500" />
                <span className="text-sm text-zinc-400">Add a title</span>
              </div>
              <div className="rounded-lg bg-zinc-800/50 px-4 py-3 mb-4">
                <span className="text-zinc-300">Feature update - @coderabbitai</span>
              </div>
              <div className="mb-4">
                <span className="text-sm text-zinc-400">Add a description</span>
                <div className="mt-2 flex gap-2">
                  <button className="rounded px-3 py-1.5 text-sm text-white bg-zinc-800">Write</button>
                  <button className="rounded px-3 py-1.5 text-sm text-zinc-500">Preview</button>
                </div>
              </div>
              <div className="h-32 rounded-lg bg-zinc-800/30 border border-zinc-700" />
              <div className="mt-4 flex justify-center">
                <button className="rounded-lg bg-green-600 px-6 py-2 text-sm font-medium text-white">
                  Create pull request
                </button>
              </div>
            </div>

            {/* Create PR Card */}
            <div className="rounded-xl bg-pink-50 p-6 w-64">
              <div className="flex items-center gap-2 mb-4">
                <div className="h-6 w-6 rounded bg-gradient-to-br from-orange-400 to-pink-500" />
                <span className="text-lg font-semibold text-[#FF6B35]">Create a PR</span>
              </div>
              <div className="space-y-3 text-sm text-zinc-600">
                <div className="flex justify-between">
                  <span>Assignees</span>
                  <span className="text-[#FF6B35]">assign yourself</span>
                </div>
                <div className="flex justify-between">
                  <span>Labels</span>
                  <span className="text-zinc-400">Non yet</span>
                </div>
                <div className="flex justify-between">
                  <span>Project</span>
                  <span className="text-zinc-400">Non yet</span>
                </div>
                <div className="flex justify-between">
                  <span>Milestone</span>
                  <span className="text-zinc-400">No milestone</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
