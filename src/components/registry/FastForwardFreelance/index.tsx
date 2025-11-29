"use client";

import { motion } from "motion/react";
import Image from "next/image";
import "./font.css";

interface FastForwardFreelanceProps {
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
  return (
    <section
      className="w-full px-6 py-16 sm:px-8 lg:px-16"
      style={{
        backgroundColor: "#F4EDE5",
        fontFamily: "'Inter', sans-serif",
      }}
    >
      <div className="mx-auto max-w-2xl">
        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-6 text-4xl sm:text-5xl tracking-tight text-[#1a1a1a]"
          style={{ fontFamily: "'Instrument Serif', serif" }}
        >
          {headingPrefix}{" "}
          <span
            className="relative inline-block px-1"
            style={{
              backgroundColor: "#DBFE85",
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
          className="mb-6 text-[15px] font-semibold leading-relaxed text-[#1a1a1a]"
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
              className="text-[14px] leading-[1.75] text-[#3a3a3a]"
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
            <span className="text-[13px] text-[#3a3a3a]">{footerText}</span>
            <a
              href={ctaLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[13px] font-bold text-[#1a1a1a] underline underline-offset-2 hover:text-[#3a3a3a] transition-colors"
            >
              {ctaText}
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
