"use client";

// ============================================================================
// CUSTOMIZATION - 이 섹션의 값들을 수정하여 프로젝트에 맞게 조정하세요
// ============================================================================

const COLORS = {
  light: {},
  dark: {},
} as const;

const IMAGES = {} as const;

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { motion } from "motion/react";
import Image from "next/image";

interface JuhoProps {
  mode?: "light" | "dark";
  sectionLabel?: string;
  name?: string;
  headline?: string;
  profileImage?: string;
  paragraphs?: string[];
  closingStatement?: string;
}

export default function Juho({
  mode = "light",
  sectionLabel = "ABOUT JUHO",
  name = "Juho-Taneli Henell",
  headline = "I'm Juho-Taneli Henell. I hope\nI pronounced that correctly.",
  profileImage = "https://picsum.photos/seed/juho-profile/400/500",
  paragraphs = [
    "You can just call me Juho or JT. I'm a Finnish designer currently based in Norway. I'm your designer and the guy behind all of this.",
    "After 10 years of being an independent designer I now offer all my services as a subscription instead of on a per project basis like I used to. Less emails, less meetings, less administrative stuff, less hassle. More time spent designing, better designs, faster turnaround times and more time spent enjoying life.",
  ],
  closingStatement = "Better for both you and me.",
}: JuhoProps) {
  return (
    <section className="w-full bg-white px-6 py-16 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-5xl">
        <div className="flex flex-col md:flex-row gap-10 md:gap-16 lg:gap-24">
          {/* Left: Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="shrink-0 w-full md:w-[280px] lg:w-[320px]"
          >
            <div className="relative aspect-[4/5] w-full overflow-hidden bg-gray-100">
              <Image
                src={profileImage}
                alt={name}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 320px"
              />
            </div>
          </motion.div>

          {/* Right: Content */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex-1 flex flex-col justify-center"
          >
            {/* Section Label */}
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="text-[11px] tracking-[0.15em] text-[#999999] uppercase mb-4"
            >
              {sectionLabel}
            </motion.span>

            {/* Headline */}
            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-2xl sm:text-3xl lg:text-[32px] font-bold leading-[1.25] text-[#1a1a1a] mb-6 whitespace-pre-line"
            >
              {headline}
            </motion.h2>

            {/* Paragraphs */}
            <div className="space-y-4">
              {paragraphs.map((paragraph, index) => (
                <motion.p
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                  className="text-sm leading-relaxed text-[#666666]"
                >
                  {paragraph}
                </motion.p>
              ))}
            </div>

            {/* Closing Statement */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.4,
                delay: 0.4 + paragraphs.length * 0.1,
              }}
              className="text-sm leading-relaxed text-[#666666] mt-6"
            >
              {closingStatement}
            </motion.p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
