"use client";

import { motion } from "motion/react";

interface CoderabbitAiCta11Props {
  mode?: "light" | "dark";
}

const ArrowRight = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M4 10H16M16 10L11 5M16 10L11 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export default function CoderabbitAiCta11({
  mode = "dark",
}: CoderabbitAiCta11Props) {
  return (
    <section className="relative w-full bg-black py-16">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          <h2 className="text-2xl font-bold text-white md:text-3xl">
            Still have questions?
          </h2>
          <a
            href="#contact"
            className="flex items-center gap-2 rounded-full bg-[#FF6B35] px-6 py-3 text-base font-medium text-white transition-all hover:bg-[#E55A2B]"
          >
            Contact us
            <ArrowRight />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
