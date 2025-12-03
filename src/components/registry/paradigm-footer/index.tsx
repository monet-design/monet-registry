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
    background: "#f8f8f8",
    text: "#0c0c14",
    textMuted: "#6b6b6b",
    inputBorder: "#d0d0d0",
    buttonBg: "#0c0c14",
    buttonText: "#ffffff",
  },
  dark: {
    background: "#0c0c14",
    text: "#e8e8e8",
    textMuted: "#8a8a8a",
    inputBorder: "#2a2a35",
    buttonBg: "#ffffff",
    buttonText: "#0c0c14",
  },
} as const;

/**
 * 기본 텍스트 콘텐츠
 */
const DEFAULT_CONTENT = {
  marqueeText: "Contact Us",
  marqueeNumber: "08",
  newsletterLabel: "SUBSCRIBE TO OUR NEWSLETTER:",
  inputPlaceholder: "enter your email here",
  buttonText: "Send Email",
  copyright: "2023 The Builder Studios",
  rightsText: "All Rights Reserved.",
};

// ============================================================================
// END CUSTOMIZATION
// ============================================================================

import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { useState, FormEvent } from "react";

interface ParadigmFooterProps {
  mode?: "light" | "dark";
  marqueeText?: string;
  marqueeNumber?: string;
  newsletterLabel?: string;
  inputPlaceholder?: string;
  buttonText?: string;
  copyright?: string;
  rightsText?: string;
  onSubmit?: (email: string) => void;
}

export default function ParadigmFooter({
  mode = "dark",
  marqueeText = DEFAULT_CONTENT.marqueeText,
  marqueeNumber = DEFAULT_CONTENT.marqueeNumber,
  newsletterLabel = DEFAULT_CONTENT.newsletterLabel,
  inputPlaceholder = DEFAULT_CONTENT.inputPlaceholder,
  buttonText = DEFAULT_CONTENT.buttonText,
  copyright = DEFAULT_CONTENT.copyright,
  rightsText = DEFAULT_CONTENT.rightsText,
  onSubmit,
}: ParadigmFooterProps) {
  const colors = COLORS[mode];
  const [email, setEmail] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (onSubmit && email) {
      onSubmit(email);
      setEmail("");
    }
  };

  // Marquee item to be repeated
  const MarqueeItem = () => (
    <span className="flex items-center gap-4 whitespace-nowrap">
      <span
        className="text-[clamp(4rem,12vw,10rem)] leading-none"
        style={{
          fontFamily: "'Instrument Serif', serif",
          fontWeight: 400,
        }}
      >
        {marqueeText}
      </span>
      <span className="flex items-center gap-4">
        <span
          className="text-sm opacity-60"
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          {marqueeNumber}
        </span>
        <span className="text-2xl opacity-40">.</span>
      </span>
    </span>
  );

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Inter:wght@400;500&display=swap');

        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-marquee {
          animation: marquee 20s linear infinite;
        }
      `}</style>

      <footer
        className="relative w-full overflow-hidden py-16 md:py-24"
        style={{ backgroundColor: colors.background }}
      >
        {/* Marquee Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16 md:mb-24 overflow-hidden"
        >
          <div
            className="flex animate-marquee"
            style={{ color: colors.text }}
          >
            {/* Duplicate items for seamless loop */}
            {[...Array(4)].map((_, i) => (
              <MarqueeItem key={i} />
            ))}
          </div>
        </motion.div>

        {/* Newsletter Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="px-6 md:px-12 lg:px-24"
        >
          <p
            className="text-xs tracking-[0.2em] mb-6"
            style={{
              color: colors.textMuted,
              fontFamily: "'Inter', sans-serif",
            }}
          >
            {newsletterLabel}
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col md:flex-row md:items-center gap-6 md:gap-8">
            <div className="flex-1 relative">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={inputPlaceholder}
                className="w-full bg-transparent border-none outline-none text-2xl md:text-3xl lg:text-4xl pb-4"
                style={{
                  color: colors.text,
                  fontFamily: "'Instrument Serif', serif",
                  fontStyle: "italic",
                }}
              />
              <div
                className="absolute bottom-0 left-0 right-0 h-px"
                style={{ backgroundColor: colors.inputBorder }}
              />
            </div>

            <motion.button
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="flex items-center gap-2 px-6 py-3 rounded-full transition-opacity hover:opacity-90"
              style={{
                backgroundColor: colors.buttonBg,
                color: colors.buttonText,
                fontFamily: "'Inter', sans-serif",
              }}
            >
              <span className="text-sm font-medium">{buttonText}</span>
              <ArrowRight size={16} />
            </motion.button>
          </form>
        </motion.div>

        {/* Copyright Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-24 md:mt-32 text-center"
        >
          <p
            className="text-sm"
            style={{
              fontFamily: "'Inter', sans-serif",
            }}
          >
            <span style={{ color: colors.text }}>
              &copy;{copyright}.
            </span>{" "}
            <span style={{ color: colors.textMuted }}>{rightsText}</span>
          </p>
        </motion.div>
      </footer>
    </>
  );
}
