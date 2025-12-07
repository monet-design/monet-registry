"use client";

import { motion } from "motion/react";

interface CoderabbitAiCta9Props {
  mode?: "light" | "dark";
}

const ArrowRight = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M4 10H16M16 10L11 5M16 10L11 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export default function CoderabbitAiCta9({
  mode = "dark",
}: CoderabbitAiCta9Props) {
  return (
    <section className="relative w-full overflow-hidden bg-black py-20">
      {/* Background Decorations */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-32 top-1/2 -translate-y-1/2 h-[400px] w-[400px]">
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-orange-500 via-pink-500 to-cyan-400 opacity-60 blur-xl" />
        </div>
        <div className="absolute -right-32 top-1/2 -translate-y-1/2 h-[400px] w-[400px]">
          <div className="absolute inset-0 rounded-full bg-gradient-to-tl from-cyan-400 via-pink-400 to-orange-500 opacity-60 blur-xl" />
        </div>
      </div>

      <div className="relative mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col lg:flex-row items-center justify-between gap-8 rounded-3xl bg-zinc-900/80 backdrop-blur-sm p-8 md:p-12"
        >
          {/* Content */}
          <div className="text-center lg:text-left">
            <h2 className="text-3xl font-bold text-white md:text-4xl lg:text-5xl">
              Get started today
            </h2>
            <p className="mt-4 text-lg text-zinc-400">
              Start using CodeRabbit for free. No credit card required.
            </p>
          </div>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#trial"
              className="flex items-center justify-center gap-2 rounded-full bg-[#FF6B35] px-8 py-4 text-base font-medium text-white transition-all hover:bg-[#E55A2B]"
            >
              Get a free trial
              <ArrowRight />
            </a>
            <a
              href="#pricing"
              className="flex items-center justify-center gap-2 rounded-full border border-zinc-700 px-8 py-4 text-base font-medium text-white transition-colors hover:bg-zinc-800"
            >
              View pricing
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
