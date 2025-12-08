"use client";

import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

interface LanorxComCta6Props {
  mode?: "light" | "dark";
}

export default function LanorxComCta6({
  mode = "light",
}: LanorxComCta6Props) {
  const isDark = mode === "dark";

  return (
    <section className={`py-24 md:py-36 relative ${isDark ? "bg-neutral-950" : "bg-neutral-50"}`}>
      <div className="max-w-5xl container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className={`text-3xl md:text-4xl font-light tracking-tight mb-4 ${isDark ? "text-white" : "text-neutral-900"}`}>
            Get your first 100 signups now
          </h2>
          <p className={`text-base font-light mb-8 ${isDark ? "text-neutral-400" : "text-neutral-600"}`}>
            Free plan available. No credit card. Launch in 5 minutes.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="#">
              <button className={`group inline-flex items-center justify-center whitespace-nowrap h-12 px-8 rounded-full font-normal text-lg shadow-xl transition-all duration-300 ease-out hover:shadow-2xl hover:scale-105 ${
                isDark
                  ? "bg-white text-neutral-900 hover:bg-neutral-100 shadow-white/10 hover:shadow-white/20"
                  : "bg-neutral-900 text-white hover:bg-neutral-800 shadow-neutral-900/10 hover:shadow-neutral-900/20"
              }`}>
                Launch in 5 minutes
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </a>
            <a href="#">
              <button className={`inline-flex items-center justify-center whitespace-nowrap h-12 px-8 rounded-full border font-normal text-lg transition-all duration-300 hover:shadow-lg hover:scale-105 ${
                isDark
                  ? "border-neutral-700 bg-transparent text-white hover:bg-neutral-800 hover:border-neutral-600"
                  : "border-neutral-300 bg-white text-neutral-900 hover:bg-neutral-50 hover:border-neutral-400"
              }`}>
                View pricing
              </button>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
