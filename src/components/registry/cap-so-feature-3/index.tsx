"use client";

import { motion } from "motion/react";

const CONTENT = {
  headline: "Built for how you actually work",
  subheadline:
    "We obsessed over the details so you don't have to. Every feature is designed to save you time and make you look good.",
  features: [
    {
      title: "Cross-platform for your entire team",
      description:
        "Native apps for macOS and Windows that feel at home on each platform. No janky Electron apps or browser extensions. Just fast, reliable recording that works with your existing tools and workflow.",
      size: "large",
    },
    {
      title: "Quality that makes you look professional",
      description:
        "4K recording, 60fps capture, and intelligent compression that keeps file sizes reasonable.",
      size: "large",
    },
    {
      title: "Your storage, your rules",
      description:
        "Connect your own S3 bucket, use our cloud, or keep everything local. Unlike other tools, you're never locked into our infrastructure. Perfect for teams with compliance requirements or those who value data sovereignty.",
      size: "small",
    },
    {
      title: "Privacy by default, sharing by choice",
      description:
        "Instant sharing when you need it, local recording when you want it. Share publicly or privately. Password protect sensitive recordings or keep them local only.",
      size: "small",
    },
    {
      title: "Async collaboration that actually works",
      description:
        "Comments, reactions, and transcripts keep conversations moving without another meeting. See who watched, get notified on feedback, and turn recordings into actionable next steps. Replace those \"quick sync\" calls for good.",
      size: "small",
    },
    {
      title: "Truly open source",
      description:
        "See exactly how Cap works, contribute features you need, or self-host for complete control. Join a community of builders who believe great tools should be transparent, extensible, and respect their users.",
      size: "large",
    },
    {
      title: "Speed up your workflow with Cap AI",
      description:
        "Auto-generated titles, summaries, clickable chapters, and transcriptions for every recording. AI features that actually save time instead of creating more work.",
      size: "large",
    },
  ],
  cta: { label: "View all features", href: "/features" },
} as const;

interface CapSoFeature3Props {
  mode?: "light" | "dark";
}

export default function CapSoFeature3({ mode = "light" }: CapSoFeature3Props) {
  return (
    <section className="w-full py-[150px] lg:py-[200px] bg-white">
      <div className="text-center max-w-[1440px] mx-auto px-5">
        {/* Header */}
        <h2 className="mb-3 text-4xl font-medium text-gray-900">{CONTENT.headline}</h2>
        <p className="text-lg text-gray-500 leading-[1.75rem] w-full max-w-[600px] mx-auto">
          {CONTENT.subheadline}
        </p>

        {/* Feature Grid */}
        <div className="flex flex-col gap-4 mt-[52px]">
          {/* Row 1 - 2 large cards */}
          <div className="grid grid-cols-1 gap-4 mx-auto w-full md:grid-cols-2">
            {CONTENT.features.slice(0, 2).map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex flex-col gap-10 justify-evenly p-6 text-left rounded-xl border md:p-8 bg-gray-50 border-gray-200 flex-1 min-w-full"
              >
                <div className="relative flex-1 flex-grow justify-center content-center">
                  <div className="w-full max-w-[500px] mx-auto h-[280px] bg-gray-100 rounded-lg flex items-center justify-center">
                    <div className="w-16 h-16 bg-gray-200 rounded-full" />
                  </div>
                </div>
                <div className="flex flex-col gap-2 justify-end h-fit">
                  <h3 className="text-lg font-medium text-gray-900">{feature.title}</h3>
                  <p className="text-base text-gray-500">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Row 2 - 3 small cards */}
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            {CONTENT.features.slice(2, 5).map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex flex-col gap-10 justify-evenly p-6 text-left rounded-xl border md:p-8 bg-gray-50 border-gray-200"
              >
                <div className="relative flex-1 flex-grow justify-center content-center">
                  <div className="w-full max-w-[350px] mx-auto h-[275px] bg-gray-100 rounded-lg flex items-center justify-center">
                    <div className="w-12 h-12 bg-gray-200 rounded-full" />
                  </div>
                </div>
                <div className="flex flex-col gap-2 justify-end h-fit">
                  <h3 className="text-lg font-medium text-gray-900">{feature.title}</h3>
                  <p className="text-base text-gray-500">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Row 3 - 2 large cards */}
          <div className="grid grid-cols-1 gap-4 mx-auto w-full md:grid-cols-2">
            {CONTENT.features.slice(5, 7).map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex flex-col gap-10 justify-evenly p-6 text-left rounded-xl border md:p-8 bg-gray-50 border-gray-200"
              >
                <div className="relative flex-1 flex-grow justify-center content-center">
                  <div className="w-full max-w-[600px] mx-auto h-[300px] bg-gray-100 rounded-lg flex items-center justify-center">
                    <div className="w-16 h-16 bg-gray-200 rounded-full" />
                  </div>
                </div>
                <div className="flex flex-col gap-2 justify-end h-fit">
                  <h3 className="text-lg font-medium text-gray-900">{feature.title}</h3>
                  <p className="text-base text-gray-500">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-10">
          <a
            href={CONTENT.cta.href}
            className="items-center justify-center transition-colors duration-200 rounded-full cursor-pointer font-medium px-5 bg-gray-900 hover:bg-gray-800 border border-gray-900 text-white text-md h-12 inline-flex"
          >
            {CONTENT.cta.label}
          </a>
        </div>
      </div>
    </section>
  );
}
