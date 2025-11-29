"use client";

import { motion } from "motion/react";
import Image from "next/image";

interface ViewportBeforeAfterProps {
  label?: string;
  heading?: string;
  description?: string;
  ctaText?: string;
  ctaHref?: string;
  beforeImage?: string;
  afterImage?: string;
  beforeLabel?: string;
  afterLabel?: string;
}

export default function ViewportBeforeAfter({
  label = "THE ORGANIZED FUTURE",
  heading = "Save hours sifting through chaotic files",
  description = "With Viewport, you capture the highlights as you work — so at the end of your project you have a beautifully organized process book that's ready to be shared however you like.",
  ctaText = "Get early access",
  ctaHref = "#",
  beforeImage = "/registry/viewport-before-after/before.png",
  afterImage = "/registry/viewport-before-after/after.png",
  beforeLabel = "Before",
  afterLabel = "After",
}: ViewportBeforeAfterProps) {
  return (
    <section className="w-full bg-white py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        {/* Label */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="mb-4 text-center"
        >
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#6366F1]">
            {label}
          </span>
        </motion.div>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-center text-3xl font-semibold tracking-tight text-[#1F2937] sm:text-4xl"
        >
          {heading}
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="mx-auto mt-4 max-w-2xl text-center text-sm leading-relaxed text-[#6B7280]"
        >
          {description}
        </motion.p>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-6 flex justify-center"
        >
          <a
            href={ctaHref}
            className="inline-flex items-center justify-center rounded-full bg-[#3F8EF9] px-6 py-2.5 text-sm font-medium text-white shadow-lg shadow-blue-500/25 transition-all hover:bg-[#2B7DE9] hover:shadow-blue-500/30"
          >
            {ctaText}
          </a>
        </motion.div>

        {/* Before/After Images - Stacked Layout */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="relative mt-12"
        >
          {/* Before Image - Background/Left */}
          <div className="relative">
            <div className="overflow-hidden rounded-xl border border-gray-200 shadow-2xl">
              <Image
                src={beforeImage}
                alt="Before - Chaotic files"
                width={800}
                height={600}
                className="h-auto w-full object-cover"
              />
            </div>
            {/* Before Label */}
            <div className="absolute bottom-4 left-4">
              <span className="inline-flex items-center rounded-full bg-white/90 px-4 py-1.5 text-sm font-medium text-[#374151] shadow-md backdrop-blur-sm">
                {beforeLabel}
              </span>
            </div>
          </div>

          {/* After Image - Overlapping/Right */}
          <motion.div
            initial={{ opacity: 0, x: 40, y: 40 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="absolute -right-4 top-16 w-[55%] sm:-right-8 sm:top-20 md:w-[50%]"
          >
            <div className="overflow-hidden rounded-xl border border-gray-100 bg-white shadow-2xl">
              <Image
                src={afterImage}
                alt="After - Organized content library"
                width={500}
                height={400}
                className="h-auto w-full object-cover"
              />
            </div>
            {/* After Label */}
            <div className="absolute bottom-4 right-4">
              <span className="inline-flex items-center rounded-full bg-[#4F46E5] px-4 py-1.5 text-sm font-medium text-white shadow-md">
                {afterLabel}
              </span>
            </div>
          </motion.div>
        </motion.div>

        {/* Spacer for overlapping content */}
        <div className="h-32 sm:h-40" />
      </div>
    </section>
  );
}
