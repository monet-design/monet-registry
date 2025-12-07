"use client";

import { motion } from "motion/react";

interface CoderabbitAiFeature6Props {
  mode?: "light" | "dark";
}

const CheckIcon = () => (
  <svg className="h-5 w-5 text-[#2DD4BF]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
  </svg>
);

const ArrowRight = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M4 10H16M16 10L11 5M16 10L11 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export default function CoderabbitAiFeature6({
  mode = "dark",
}: CoderabbitAiFeature6Props) {
  const features = [
    "VS Code & all forks such as Cursor, Windsurf",
    "Review each staged or unstaged commit in IDE",
    "Free AI code reviews (rate limits apply)",
  ];

  return (
    <section className="relative w-full bg-black py-16">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-3xl bg-zinc-900 p-8 md:p-12"
        >
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 items-center">
            {/* Content */}
            <div>
              <h2 className="text-3xl font-bold text-white md:text-4xl lg:text-5xl">
                Vibe check your code.
              </h2>

              <p className="mt-6 text-lg text-zinc-400">
                Free AI code reviews directly in your code editor. Fix bugs and defects introduced by vibe coding, without breaking your flow state.
              </p>

              <ul className="mt-8 space-y-4">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckIcon />
                    <span className="text-zinc-300">{feature}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#learn-more"
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#FF6B35] px-6 py-3 text-base font-medium text-white transition-all hover:bg-[#E55A2B]"
              >
                Learn More
                <ArrowRight />
              </a>
            </div>

            {/* Image Preview */}
            <div className="relative">
              <div className="rounded-2xl bg-pink-100 p-6 overflow-hidden">
                {/* Decorative elements */}
                <div className="absolute -right-10 top-10 h-32 w-32 rounded-full bg-gradient-to-br from-orange-400 to-pink-400 opacity-80" />
                <div className="absolute left-10 bottom-10 h-24 w-24 rounded-full bg-gradient-to-tr from-cyan-400 to-teal-300 opacity-80" />

                {/* IDE Preview Card */}
                <div className="relative rounded-xl bg-zinc-900 p-4 shadow-xl">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="h-3 w-3 rounded-full bg-red-500" />
                    <div className="h-3 w-3 rounded-full bg-yellow-500" />
                    <div className="h-3 w-3 rounded-full bg-green-500" />
                  </div>
                  <div className="space-y-2">
                    <div className="h-3 w-3/4 rounded bg-zinc-700" />
                    <div className="h-3 w-1/2 rounded bg-zinc-700" />
                    <div className="h-3 w-2/3 rounded bg-zinc-700" />
                  </div>

                  {/* IDE Logos */}
                  <div className="mt-4 flex items-center justify-center gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600 text-white font-bold text-xs">
                      VS
                    </div>
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-teal-500 text-white font-bold text-xs">
                      C
                    </div>
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-orange-500 text-white font-bold text-xs">
                      W
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
