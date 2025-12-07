"use client";

import { motion } from "motion/react";

interface CoderabbitAiFeature8Props {
  mode?: "light" | "dark";
}

const ArrowRight = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M4 10H16M16 10L11 5M16 10L11 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export default function CoderabbitAiFeature8({
  mode = "dark",
}: CoderabbitAiFeature8Props) {
  const securityFeatures = [
    {
      title: "Reviews that respect privacy",
      description: "Ephemeral review environments that leave no trace of your code.",
      icon: null,
    },
    {
      title: "SSL Encrypted data",
      description: "End-to-end encryption protects your code during reviews with zero data retention post-review.",
      hasIcon: true,
    },
    {
      title: "SOC2 Type II certified",
      description: "Enterprise-grade security validated annually through independent SOC2 Type II audits.",
      hasIcon: true,
    },
  ];

  return (
    <section className="relative w-full bg-black py-20">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-4xl font-bold text-white md:text-5xl">
            Your data stays{" "}
            <span className="text-[#2DD4BF]">confidential.</span>
          </h2>
          <p className="mt-4 text-lg text-zinc-400">
            We take security, privacy, and compliance seriously.
          </p>
        </motion.div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {securityFeatures.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="rounded-2xl bg-zinc-900 p-8 flex flex-col"
            >
              <h3 className="text-xl font-bold text-white text-center mb-4">
                {feature.title}
              </h3>

              {feature.hasIcon && (
                <div className="flex-1 flex items-center justify-center my-8">
                  <div className="relative h-32 w-32">
                    <div className="absolute inset-0 rounded-full bg-gradient-to-br from-orange-500 via-pink-500 to-cyan-400 opacity-80" />
                    <div className="absolute inset-4 rounded-full bg-gradient-to-tl from-pink-400 to-cyan-300 opacity-60" />
                    <div className="absolute inset-8 rounded-full bg-zinc-900" />
                  </div>
                </div>
              )}

              {!feature.hasIcon && <div className="flex-1" />}

              <p className="text-sm text-zinc-400 text-center mt-auto">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12"
        >
          <a
            href="#trust-center"
            className="inline-flex items-center gap-2 rounded-full bg-[#FF6B35] px-6 py-3 text-base font-medium text-white transition-all hover:bg-[#E55A2B]"
          >
            Go to trust center
            <ArrowRight />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
