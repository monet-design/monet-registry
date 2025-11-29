"use client";

import { motion } from "motion/react";
import Image from "next/image";

interface GlowGuideProps {
  badge?: string;
  headline?: string;
  subheadline?: string;
  faceImage?: string;
  day1Label?: string;
  day2Label?: string;
}

function Badge({ text }: { text: string }) {
  return (
    <div className="flex items-center gap-2">
      <span className="h-2 w-2 rounded-full bg-[#A67457]" />
      <span className="text-[10px] font-semibold uppercase tracking-[0.12em] text-[#1A1A1A]">
        {text}
      </span>
    </div>
  );
}

function IPhoneMockup({
  faceImage,
  day1Label,
  day2Label,
}: {
  faceImage: string;
  day1Label: string;
  day2Label: string;
}) {
  return (
    <div className="relative">
      {/* iPhone Frame */}
      <div className="relative mx-auto w-[260px] overflow-hidden rounded-[40px] border-[10px] border-[#1A1A1A] bg-[#1A1A1A] shadow-2xl sm:w-[280px]">
        {/* Dynamic Island */}
        <div className="absolute left-1/2 top-2 z-20 h-[22px] w-[80px] -translate-x-1/2 rounded-full bg-[#1A1A1A]" />

        {/* Screen Content */}
        <div className="relative aspect-[9/19] overflow-hidden rounded-[30px] bg-white">
          {/* Face Image with Split Effect */}
          <div className="relative h-full w-full">
            <Image
              src={faceImage}
              alt="Face comparison"
              fill
              className="object-cover object-top"
              priority
            />

            {/* Vertical Center Line */}
            <div className="absolute left-1/2 top-0 h-full w-[1px] -translate-x-1/2 bg-white/40" />

            {/* Face Markers */}
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.3 }}
              className="absolute left-[38%] top-[32%] h-3 w-3 rounded-full border-2 border-white bg-[#A67457] shadow-lg"
            />
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.3 }}
              className="absolute right-[38%] top-[32%] h-3 w-3 rounded-full border-2 border-white bg-[#A67457] shadow-lg"
            />
          </div>

          {/* Day Labels */}
          <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-3 px-4">
            <motion.button
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.4 }}
              className="rounded-full bg-[#DEB591] px-4 py-2 text-xs font-medium text-[#574138] shadow-md"
            >
              {day1Label}
            </motion.button>
            <motion.button
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.4 }}
              className="rounded-full bg-[#50392D] px-4 py-2 text-xs font-medium text-white shadow-md"
            >
              {day2Label}
            </motion.button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function GlowGuide({
  badge = "SMARTER BEAUTY DECISIONS START HERE",
  headline = "See real progress.\nOne photo at a time.",
  subheadline = "Snap, mark up, and compare your\nprogress over time.",
  faceImage = "/registry/glow-guide/face-comparison.png",
  day1Label = "Day 1",
  day2Label = "Day 30",
}: GlowGuideProps) {
  const headlineLines = headline.split("\n");
  const subheadlineLines = subheadline.split("\n");

  return (
    <section className="relative w-full overflow-hidden bg-white px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
      {/* Subtle warm gradient on right side */}
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/2 bg-gradient-to-l from-[#FDF9F8] to-transparent" />
      <div className="relative mx-auto max-w-5xl">
        <div className="flex flex-col items-center gap-10 md:flex-row md:items-center md:justify-between md:gap-16">
          {/* Left: Copy */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex-1 text-center md:text-left"
          >
            <Badge text={badge} />

            <h1 className="mt-6 text-[32px] font-semibold leading-[1.15] tracking-tight text-[#1A1A1A] sm:text-[40px] lg:text-[48px]">
              {headlineLines.map((line, index) => (
                <span key={index}>
                  {line}
                  {index < headlineLines.length - 1 && <br />}
                </span>
              ))}
            </h1>

            <p className="mt-4 text-sm italic leading-relaxed text-[#7A7A7A] sm:text-base">
              {subheadlineLines.map((line, index) => (
                <span key={index}>
                  {line}
                  {index < subheadlineLines.length - 1 && <br />}
                </span>
              ))}
            </p>
          </motion.div>

          {/* Right: iPhone Mockup */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex-shrink-0"
          >
            <IPhoneMockup
              faceImage={faceImage}
              day1Label={day1Label}
              day2Label={day2Label}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
