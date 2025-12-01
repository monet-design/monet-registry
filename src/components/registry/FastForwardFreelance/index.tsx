"use client";

// ============================================================================
// CUSTOMIZATION - 이 섹션의 값들을 수정하여 프로젝트에 맞게 조정하세요
// ============================================================================

const COLORS = {
  light: {
    background: "#F4EDE5",
    heading: "#1a1a1a",
    highlight: "#DBFE85",
    text: "#1a1a1a",
    bodyText: "#3a3a3a",
  },
  dark: {
    background: "#1a1a1a",
    heading: "#f4f4f4",
    highlight: "#DBFE85",
    text: "#f4f4f4",
    bodyText: "#d4d4d4",
  },
} as const;

const IMAGES = {} as const;

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { motion } from "motion/react";
import Image from "next/image";
import "./font.css";

interface FastForwardFreelanceProps {
  mode?: "light" | "dark";
  name?: string;
  headingPrefix?: string;
  introParagraph?: string;
  bodyParagraphs?: string[];
  footerText?: string;
  ctaText?: string;
  ctaLink?: string;
  avatarSrc?: string;
  avatarAlt?: string;
}

export default function FastForwardFreelance({
  mode = "light",
  name = "Grace",
  headingPrefix = "Meet",
  introParagraph = "Freelancing changed my life, and I know it has the power to change yours.",
  bodyParagraphs = [
    "I am an independent web designer and Webflow developer. With over six years of design experience and three years of successful freelancing, I have had the privilege of launching nearly 100 marketing sites for my clients. My skills and communication style have earned me a reputation as a client favourite, and they have played a significant role in helping me achieve a multiple six-figure income.",
    "I hold a Bachelor of Design from OCAD University, put into practice over the last 6+ years working as a professional designer. After working in a small design studio for 3 years, I took the leap to freelance full time in 2020 and never looked back.",
    "Fast forward freelance is the cumulation of everything I've learned running my freelance business over the last 3+ years \u2014 I'm so excited to share my experience with you in this new course.",
  ],
  footerText = "I'm so glad you're here!",
  ctaText = "Say hello on X",
  ctaLink = "https://x.com",
  avatarSrc = "https://picsum.photos/seed/grace-avatar/100/100",
  avatarAlt = "Grace profile photo",
}: FastForwardFreelanceProps) {
  const colors = COLORS[mode];

  return (
    <section
      className="w-full px-6 py-16 sm:px-8 lg:px-16"
      style={{
        backgroundColor: colors.background,
        fontFamily: "'Inter', sans-serif",
      }}
    >
      <div className="mx-auto max-w-2xl">
        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-6 text-4xl sm:text-5xl tracking-tight"
          style={{ fontFamily: "'Instrument Serif', serif", color: colors.heading }}
        >
          {headingPrefix}{" "}
          <span
            className="relative inline-block px-1"
            style={{
              backgroundColor: colors.highlight,
            }}
          >
            {name}:
          </span>
        </motion.h1>

        {/* Intro Paragraph - Bold */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-6 text-[15px] font-semibold leading-relaxed"
          style={{ color: colors.text }}
        >
          {introParagraph}
        </motion.p>

        {/* Body Paragraphs */}
        <div className="space-y-5">
          {bodyParagraphs.map((paragraph, index) => (
            <motion.p
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              className="text-[14px] leading-[1.75]"
              style={{ color: colors.bodyText }}
            >
              {paragraph}
            </motion.p>
          ))}
        </div>

        {/* Footer with Avatar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-10 flex items-center gap-4"
        >
          {/* Avatar */}
          <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-full">
            <Image
              src={avatarSrc}
              alt={avatarAlt}
              fill
              className="object-cover"
            />
          </div>

          {/* Footer Text and CTA */}
          <div className="flex flex-col gap-0.5">
            <span className="text-[13px]" style={{ color: colors.bodyText }}>{footerText}</span>
            <a
              href={ctaLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[13px] font-bold underline underline-offset-2 transition-colors"
              style={{ color: colors.heading }}
              onMouseEnter={(e) => (e.currentTarget.style.color = colors.bodyText)}
              onMouseLeave={(e) => (e.currentTarget.style.color = colors.heading)}
            >
              {ctaText}
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
