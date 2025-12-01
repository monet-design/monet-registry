"use client";

import { motion } from "motion/react";
import Image from "next/image";

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

interface WebflixStudioProps {
  mode?: "light" | "dark";
  badgeLabel?: string;
  greeting?: string;
  paragraphs?: string[];
  authorName?: string;
  authorTitle?: string;
  avatarImage?: string;
}

const defaultParagraphs = [
  "I'm Felix Meens, founder of Webflix Studio. After spending more than 5 years in design and development across multiple tech companies, I founded this studio to do one thing: create astounding Webflow websites for badass marketing teams.",
  "I am the lead designer and developer at Webflix, as well as the main point of contact on every project. When necessary, I bring in talented freelancers to solve your project needs. Our studio gives you the flexibility of working with a freelancer - rapid response times, personal communication, full focus - and combines that with agency-quality work. So you really get the best of both worlds.",
  "My goal is that you feel that working with Webflix is like working with a great colleague. You know, that person who knows the ropes, likes to have fun but also gets shit done at the same time. If that sounds good to you, I think we'd be a great fit.",
];

export default function WebflixStudio({
  mode = "light",
  badgeLabel = "ABOUT",
  greeting = "Hey there,",
  paragraphs = defaultParagraphs,
  authorName = "Felix Meens",
  authorTitle = "founder of Webflix Studio",
  avatarImage = "/registry/webflix-studio/avatar.png",
}: WebflixStudioProps) {
  return (
    <section className="relative w-full overflow-hidden">
      {/* Main dark background area */}
      <div className="bg-[#161511] px-6 pb-32 pt-8 sm:px-10 sm:pb-40 sm:pt-12 lg:px-16 lg:pt-16">
        <div className="mx-auto max-w-xl">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="mb-8 flex justify-center"
          >
            <span className="rounded-full border border-[#3a3a35] bg-[#1e1d19] px-4 py-1.5 text-[10px] font-medium tracking-[0.15em] text-[#a8a8a0]">
              {badgeLabel}
            </span>
          </motion.div>

          {/* Avatar */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mb-8"
          >
            <div className="relative inline-block">
              <div className="h-14 w-14 overflow-hidden rounded-full ring-2 ring-[#14b8a6] ring-offset-2 ring-offset-[#161511]">
                <Image
                  src={avatarImage}
                  alt={authorName}
                  width={56}
                  height={56}
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </motion.div>

          {/* Greeting */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-1 text-[15px] leading-relaxed text-[#e5e5e0] sm:text-base"
          >
            {greeting}
          </motion.p>

          {/* Paragraphs */}
          <div className="space-y-5">
            {paragraphs.map((paragraph, index) => (
              <motion.p
                key={index}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                className="text-[15px] leading-[1.75] text-[#e5e5e0] sm:text-base"
              >
                {paragraph}
              </motion.p>
            ))}
          </div>
        </div>
      </div>

      {/* Curved transition area with gradient */}
      <div className="relative -mt-20 sm:-mt-24">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full"
          preserveAspectRatio="none"
        >
          <path
            d="M0 120V60C0 60 240 0 720 0C1200 0 1440 60 1440 60V120H0Z"
            fill="#2d2c28"
          />
        </svg>

        {/* Author signature area */}
        <div className="bg-[#2d2c28] px-6 pb-12 pt-0 sm:px-10 sm:pb-16 lg:px-16">
          <div className="mx-auto max-w-xl">
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="text-[13px] text-[#7a7a72] sm:text-sm"
            >
              - {authorName}, {authorTitle}
            </motion.p>
          </div>
        </div>
      </div>
    </section>
  );
}
