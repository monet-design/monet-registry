"use client";

// ============================================================================
// CUSTOMIZATION - 이 섹션의 값들을 수정하여 프로젝트에 맞게 조정하세요
// ============================================================================

/**
 * 커스텀 색상 (브랜드 컬러)
 * - grayscale 텍스트는 Tailwind semantic color 사용 (text-gray-900 등)
 * - 여기에는 브랜드 고유 컬러만 정의
 */
const COLORS = {
  light: {
    accent: "#f9a8d4", // Pink accent for button and highlight
    accentHover: "#f472b6",
    highlight: "#fce7f3", // Light pink for text highlight
    primary: "#000000", // Black for timeline dots and line
  },
  dark: {
    accent: "#f9a8d4",
    accentHover: "#f472b6",
    highlight: "#fce7f3",
    primary: "#ffffff",
  },
} as const;

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { motion } from "motion/react";
import Image from "next/image";

interface TimelineItem {
  day: string;
  title: string;
  description: string;
  emoji: string;
}

interface AvatarItem {
  name: string;
  bgColor: string;
}

interface CodefaStHero0Props {
  mode?: "light" | "dark";
  authorName?: string;
  authorImage?: string;
  headline?: string;
  highlightedText?: string;
  headlineEnd?: string;
  subheadline?: string;
  ctaText?: string;
  ctaHref?: string;
  socialProofCount?: string;
  socialProofText?: string;
  timelineItems?: TimelineItem[];
  avatars?: AvatarItem[];
}

const defaultTimelineItems: TimelineItem[] = [
  {
    day: "Day 1",
    title: "Learn the fundamentals of coding",
    description: "Learn the fundamentals of coding",
    emoji: "⚙️",
  },
  {
    day: "Day 4",
    title: "Log in users and save in database",
    description: "Log in users and save in database",
    emoji: "🗄️",
  },
  {
    day: "Day 9",
    title: "Set up subscription payments",
    description: "Set up subscription payments",
    emoji: "💳",
  },
  {
    day: "Day 14",
    title: "Launch your idea!",
    description: "Launch your idea!",
    emoji: "🧙",
  },
];

const defaultAvatars: AvatarItem[] = [
  { name: "Charles", bgColor: "#6366f1" },
  { name: "Victor", bgColor: "#8b5cf6" },
  { name: "Ascsei", bgColor: "#a855f7" },
  { name: "Bakir", bgColor: "#d946ef" },
  { name: "Sallahudin", bgColor: "#ec4899" },
  { name: "Tona", bgColor: "#f97316" },
  { name: "Andrei", bgColor: "#22c55e" },
  { name: "Cruz", bgColor: "#14b8a6" },
  { name: "Alan", bgColor: "#3b82f6" },
];

export default function CodefaStHero0({
  mode = "light",
  authorName = "Marc Lou",
  authorImage,
  headline = "Learn to code",
  highlightedText = "in weeks,",
  headlineEnd = "not months",
  subheadline = "Everything you need to build your SaaS or any online business—even as a complete beginner.",
  ctaText = "Get instant access",
  ctaHref = "#pricing",
  socialProofCount = "3,936",
  socialProofText = "entrepreneurs love the course",
  timelineItems = defaultTimelineItems,
  avatars = defaultAvatars,
}: CodefaStHero0Props) {
  const colors = COLORS[mode];

  return (
    <section className="relative w-full bg-white py-16 lg:pb-32 lg:pt-16">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-center gap-16 px-8 text-center lg:gap-20">
        {/* Author Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center gap-10"
        >
          <div className="-mb-3 flex items-center gap-3">
            <div className="h-8 w-8 overflow-hidden rounded-full border bg-gray-200 shadow-sm md:h-10 md:w-10">
              {authorImage ? (
                <Image
                  src={authorImage}
                  alt={authorName}
                  width={40}
                  height={40}
                  className="h-full w-full object-cover"
                />
              ) : (
                <div className="flex h-full w-full items-center justify-center bg-amber-100 text-sm font-medium text-amber-800">
                  {authorName.charAt(0)}
                </div>
              )}
            </div>
            <span className="font-medium md:text-lg">By {authorName}</span>
          </div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl font-black tracking-tight lg:text-6xl lg:tracking-[-0.035em]"
          >
            {headline}{" "}
            <span className="relative inline-block">
              <span className="relative z-10">{highlightedText}</span>
              <span
                className="absolute -inset-x-2 bottom-0 h-4 md:-bottom-0.5 md:h-6"
                style={{ backgroundColor: colors.highlight }}
              />
            </span>{" "}
            {headlineEnd}
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mx-auto max-w-2xl text-lg leading-relaxed text-gray-600 lg:text-2xl lg:leading-relaxed"
          >
            {subheadline}
          </motion.p>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="space-y-6"
          >
            <a
              href={ctaHref}
              className="inline-block rounded-full px-12 py-4 text-lg font-semibold text-gray-900 transition-all duration-200 hover:scale-105"
              style={{ backgroundColor: colors.accent }}
            >
              {ctaText}
            </a>

            {/* Social Proof */}
            <div className="space-y-2">
              <div className="flex flex-col items-center justify-center gap-3 md:flex-row">
                {/* Avatar Group */}
                <div className="flex -space-x-4">
                  {avatars.map((avatar, index) => (
                    <div
                      key={index}
                      className="flex h-11 w-11 items-center justify-center rounded-full border-2 border-white text-sm font-medium text-white"
                      style={{ backgroundColor: avatar.bgColor }}
                    >
                      {avatar.name.charAt(0)}
                    </div>
                  ))}
                </div>
              </div>
              <p className="text-center italic text-gray-500">
                <span className="font-semibold text-gray-900">
                  {socialProofCount}
                </span>{" "}
                {socialProofText}
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* Timeline Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="w-full overflow-hidden"
        >
          <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
            {timelineItems.map((item, index) => (
              <div
                key={index}
                className="flex flex-col items-center gap-4 text-center"
              >
                {/* Emoji Icon */}
                <div className="relative">
                  <div className="flex h-48 w-48 items-center justify-center text-8xl">
                    {item.emoji}
                  </div>
                  {/* Timeline dot and line */}
                  <div className="absolute -bottom-6 left-1/2 -translate-x-1/2">
                    <div className="relative">
                      <div
                        className="hidden h-4 w-4 rounded-full lg:block"
                        style={{ backgroundColor: colors.primary }}
                      />
                      {index === 0 && (
                        <div
                          className="absolute left-[-2000px] right-[-2000px] top-2 hidden h-[1px] lg:block"
                          style={{ backgroundColor: colors.primary }}
                        />
                      )}
                    </div>
                  </div>
                </div>
                {/* Text */}
                <div className="lg:pt-8">
                  <div className="text-lg font-bold">{item.day}</div>
                  <p className="mx-auto max-w-[20rem] text-gray-600">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
