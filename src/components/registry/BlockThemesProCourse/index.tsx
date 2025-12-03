"use client";

// ============================================================================
// CUSTOMIZATION - 이 섹션의 값들을 수정하여 프로젝트에 맞게 조정하세요
// ============================================================================

const COLORS = {
  light: {
    background: "#FFFFFF",
    accent: "#5C59F4",
    text: "#99939C",
  },
  dark: {
    background: "#1a1a1a",
    accent: "#7B78FF",
    text: "#b4b4b4",
  },
} as const;

const IMAGES = {
  instructorProfile: {
    path: "/registry/block-themes-pro-course/instructor-profile.png",
    alt: "Brad Hogan - Instructor",
  },
} as const;

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { motion } from "motion/react";
import Image from "next/image";

interface BlockThemesProCourseProps {
  mode?: "light" | "dark";
  title?: string;
  instructorName?: string;
  profileImage?: string;
  paragraphs?: string[];
}

export default function BlockThemesProCourse({
  mode = "light",
  title = "MEET THE INSTRUCTOR",
  instructorName = "Brad Hogan",
  profileImage = IMAGES.instructorProfile.path,
  paragraphs = [
    "Hey, there. I'm Brad Hogan. I've been designing and developing WordPress sites since 2008. I've built themes that have brought in over $1 million in sales. My focus has been in designing clean, simple to navigate (and simple to manage) websites.",
    "Visual editing platforms like Squarespace and Shopify have pushed WordPress to re-think the way website owners should be able to edit their content. We finally don't have to rely on clunky page builders like Divi or messy custom fields to create an amazing website in WordPress.",
    "With the all new WordPress Site Editor (sometimes referred to as Gutenberg) and a block theme, you can now create a gorgeous, functional website without needing to hire a designer and developer. I'll show you how in my course plus I'll include my starter theme so you don't have to start from scratch",
  ],
}: BlockThemesProCourseProps) {
  const colors = COLORS[mode];
  return (
    <section className="w-full px-6 py-12 sm:px-8 lg:px-16" style={{ backgroundColor: colors.background }}>
      <div className="mx-auto max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="flex flex-col sm:flex-row gap-6 sm:gap-8"
        >
          {/* Profile Image */}
          <div className="shrink-0">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.1 }}
            >
              <Image
                src={profileImage}
                alt={instructorName}
                width={80}
                height={80}
                className="w-20 h-20 rounded-full object-cover"
              />
            </motion.div>
          </div>

          {/* Content */}
          <div className="flex-1 space-y-4">
            {/* Title */}
            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.15 }}
              className="text-xl sm:text-2xl font-extrabold tracking-wide uppercase"
              style={{ color: colors.accent }}
            >
              {title}
            </motion.h2>

            {/* Paragraphs */}
            <div className="space-y-4">
              {paragraphs.map((paragraph, index) => (
                <motion.p
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                  className="text-sm leading-relaxed"
                  style={{ color: colors.text }}
                >
                  {paragraph}
                  {index === paragraphs.length - 1 && (
                    <span className="ml-1" role="img" aria-label="crown">
                      👑
                    </span>
                  )}
                </motion.p>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
