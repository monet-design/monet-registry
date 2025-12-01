"use client";

// ============================================================================
// CUSTOMIZATION - 이 섹션의 값들을 수정하여 프로젝트에 맞게 조정하세요
// ============================================================================

const COLORS = {
  light: {
    background: "#EBEBEB",
    heading: "#1A1A1A",
    primaryText: "#727272",
    secondaryText: "#B2B2B2",
    heartStroke: "#B4B4B4",
  },
  dark: {
    background: "#1a1a1a",
    heading: "#ffffff",
    primaryText: "#b4b4b4",
    secondaryText: "#888888",
    heartStroke: "#666666",
  },
} as const;

const IMAGES = {
  authorAvatar: {
    path: "/beautiful-sections/60-logo-tips-author/author-avatar.jpg",
    alt: "Gal Shir - Brand Design Specialist",
  },
} as const;

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { motion } from "motion/react";
import Image from "next/image";
import "./font.css";

interface LogoTipsAuthorProps {
  mode?: "light" | "dark";
  avatarSrc?: string;
  avatarAlt?: string;
  heading?: string;
  primaryDescription?: string;
  secondaryDescription?: string;
}

// Dashed Heart SVG Component
function DashedHeart({ color }: { color: string }) {
  return (
    <svg
      width="54"
      height="48"
      viewBox="0 0 54 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M27 47C27 47 1 31 1 14C1 6.82 6.82 1 14 1C19.5 1 24.24 4.22 27 9C29.76 4.22 34.5 1 40 1C47.18 1 53 6.82 53 14C53 31 27 47 27 47Z"
        stroke={color}
        strokeWidth="1.5"
        strokeDasharray="4 4"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  );
}

export default function LogoTipsAuthor({
  mode = "light",
  avatarSrc = IMAGES.authorAvatar.path,
  avatarAlt = IMAGES.authorAvatar.alt,
  heading = "Gal Shir is a brand design specialist creating logos since 2010",
  primaryDescription = "Slow-cooked over a year, this book is a culmination of everything I've learned about logo design through my 15-year career. It's a hands-on guide created to help you become a succesful logo designer and make a living doing a fulfilling and meaningful work. In it, you'll find step-by-step instructions, clear explanations, and plenty of examples. Whether you're just starting out or looking to sharpen your craft, this book will inspire, motivate, and provide you with everything you need to take your logo design skills to the next level.",
  secondaryDescription = "In this book, you'll find step-by-step instructions, clear explanations, and plenty of examples. Whether you're just starting out or looking to sharpen your craft, this book will inspire, motivate, and provide you with everything you need to take your logo design skills to the next level.",
}: LogoTipsAuthorProps) {
  const colors = COLORS[mode];
  return (
    <section
      className="w-full py-16 md:py-24 lg:py-32"
      style={{ backgroundColor: colors.background }}
    >
      <div className="mx-auto max-w-3xl px-6 md:px-8">
        <div className="flex flex-col items-center text-center">
          {/* Avatar */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="mb-10"
          >
            <div className="relative h-[130px] w-[130px] overflow-hidden rounded-full">
              <Image
                src={avatarSrc}
                alt={avatarAlt}
                fill
                className="object-cover"
              />
            </div>
          </motion.div>

          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
            className="mb-8 text-2xl md:text-3xl lg:text-[32px] leading-tight md:leading-snug"
            style={{
              fontFamily: "'DM Serif Display', serif",
              color: colors.heading,
            }}
          >
            {heading}
          </motion.h2>

          {/* Primary Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="mb-6 text-sm md:text-[15px] leading-relaxed md:leading-[1.8]"
            style={{
              fontFamily: "'Inter', sans-serif",
              color: colors.primaryText,
            }}
          >
            {primaryDescription}
          </motion.p>

          {/* Secondary Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
            className="mb-12 text-sm md:text-[15px] leading-relaxed md:leading-[1.8]"
            style={{
              fontFamily: "'Inter', sans-serif",
              color: colors.secondaryText,
            }}
          >
            {secondaryDescription}
          </motion.p>

          {/* Dashed Heart Icon */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
          >
            <DashedHeart color={colors.heartStroke} />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
